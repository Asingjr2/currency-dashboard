import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');
// total number of user coins a user can favorite
const MAX_FAVORITES = 10;
// total number of months to grab historical coin price data
const TIME_SPANS = {'days' : 30, 'weeks': 3, 'months': 6}

export const AppContext = React.createContext();

// can spread in provider to create several redefaults to update information in one shot
class AppProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      setPage: this.setPage,
      ...this.savedSettings(),
      favorites: ['BTC'],
      inFavorites: this.inFavorites,
      setFavorite: this.setFavorite,
      confirmFavorites: this.confirmFavorites,
      resetFavorites: this.resetFavorites,
      setFilteredCoins: this.setFilteredCoins,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      timeInterval: 'weeks',
      updateChartTimeSpan: this.updateChartTimeSpan
    };
  };

  componentDidMount = () => {
    this.getCoins();
    this.setPrices();
    this.getCoinHistoricalData();
  };

  getCoins = async () => {
    const resp = await cc.coinList();
    const coinList = resp.Data;
    this.setState({coinList});
  };

  // returns historical coin information from crypto-compare once all items have resolved
  _getCoinHistoricalData = () => {
    let historicaData = [];
    for (let units = TIME_SPANS[[this.state.timeInterval]]; units > 0; units--) {
      historicaData.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment().subtract({[this.state.timeInterval]: units}).toDate()
        )
      );
    }
    return Promise.all(historicaData);
  }

  // returns formatted  historical price data for use in highchart as sets of date:price items
  getCoinHistoricalData = async () => {
    if(this.state.initialVisit) return;

    let coinData = await this._getCoinHistoricalData();
    let historicalPricePoints = [
      {
        name: this.state.currentFavorite, 
        data: coinData.map((ticker, index) => [
          moment().subtract({[this.state.timeInterval]: TIME_SPANS[this.state.timeInterval] - index}).valueOf(),
          ticker.USD
        ])
      }
    ];

    this.setState({historicalPricePoints});
  }

  // querying coin information from crypto-compare based on selected time span
  getPriceData = async () => {
    let priceInfo = [];
    for(let i = 0; i < this.state.favorites.length; i++) {
      try {
        let resp = await cc.priceFull(this.state.favorites[i], 'USD');
        priceInfo.push(resp);
      } catch(err) {
        console.warn('Could not get price: ', err);
      }
    }
    return priceInfo;
  }
    
  // updates state with prices of favorites coin
  setPrices = async () => {
    if(this.state.firstVisit) return;
    let prices = await this.getPriceData();
    this.setState({prices:prices});
  }
  
  // updates current favorite coin and parses existing local storage to update new data values
  setFavorite = symbol => {
    // updating current favorite
    this.setState({
      currentFavorite: symbol,
      historicalPricePoints: null
    }, this.getCoinHistoricalData);

    localStorage.setItem(
      'cryptoDash', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoDash')), 
      currentFavorite: symbol
      }));
  }
  
  // adds coin to favorites list up to a max of MAX_FAVORITES
  addCoin = key => {
    let favorites = [...this.state.favorites];
    if(favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites});
    };
  };

  // removes coin from favorite to minimum of 1 coin in favorites list
  removeCoin = key => {
    if(this.state.favorites.length === 1) return;
    
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)})
  };

  inFavorites = key => _.includes(this.state.favorites, key);

  setPage = page => this.setState({page});

  /** 
   * updating favorite list with most recent additions or deletions and 
   * setting current favorite coin to be spotlighted in dashboard
   */
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState({
      initialVisit: false,
      page: 'dashboard',
      currentFavorite, 
      price: null,
      historicalPricePoints: null
    }, () => {
        this.setPrices();
        this.getCoinHistoricalData();
      });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites,
      currentFavorite: currentFavorite})
      );
    };

  // resets user's favorites list to default state (e.g. BTC only)
  resetFavorites = () => {
    const defaultFavorites = ['BTC']
    this.setState({ favorites: defaultFavorites});
  }

  // grabbing localStorage data to populate favorties or using default
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if(!cryptoDashData) {
      return {page : 'coinlist', initialVisit: true}
    }
    let {favorites, currentFavorite} = cryptoDashData;
    return {favorites, currentFavorite};
  };

  setFilteredCoins = (filteredCoins) => {
    this.setState({filteredCoins});
  }

  updateChartTimeSpan = value => {
    this.setState({timeInterval: value, historicalPricePoints: null}, this.getCoinHistoricalData);}

  // render function acts as wrapper passing state down to children
  render() {
    return (
      <AppContext.Provider value={this.state}>
       {this.props.children}
      </AppContext.Provider>
    );
  }
};

export default AppProvider;
