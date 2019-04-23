import React from 'react';
import _ from 'lodash';
import moment from 'moment';
const cc = require('cryptocompare');
// total number of user coins a user can favorite
const MAX_FAVORITES = 10;
// total number of months to grab historical coin price data
const TIME_SPAN = 24
const TIME_SPANS = {
  'days' : 30,
  'weeks': 24,
  'months': 6
  }

export const AppContext = React.createContext();


// can spread in provider to create several redefaults to update information in one shot
class AppProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'settings',
      favorites: ['BTC'],
      setPage: this.setPage,
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      inFavorites: this.inFavorites,
      setFavorite: this.setFavorite,
      timeInterval: 'weeks',
      updateChartTimeSpan: this.updateChartTimeSpan
    };
  };

  componentDidMount = () => {
    this.getCoins();
    this.setPrices();
    this.getCoinHistoricalData();
  };

  getCoinHistoricalData = async () => {
    if(this.state.initialVisit) return;

    let coinData = await this.fetchCoinHistory();
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

  // explain
  fetchCoinHistory = () => {
    let historicaData = [];
    for (let units = TIME_SPANS[[this.state.timeInterval]]; units > 0; units--) {
      historicaData.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment().subtract({[this.state.timeInterval]: units}).toDate()
        )
      )
    }
    return Promise.all(historicaData)
  }

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if(favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites});
    };
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)})
  };

  getCoins = async () => {
    const resp = await cc.coinList();
    const coinList = resp.Data;
    this.setState({coinList});
  };

  inFavorites = key => _.includes(this.state.favorites, key);

  setPage = page => this.setState({page});

  // grabbing price data from cryptoCompare api if not user's first visit
  getPrices = async () => {
    // exiting function with empty return if initial user visit
    // if(this.state.initialVisit) return;

    let priceInfo = [];
    for(let i = 0; i < this.state.favorites.length; i++) {
      try {
        let resp = await cc.priceFull(this.state.favorites[i], 'USD');
        priceInfo.push(resp);
      } catch(err) {
        console.warn('Could not get price: ', err);
      }
    }
    console.log('here is price data', priceInfo);
    return priceInfo;
  }

  // updates state with prices of favorites coin
  setPrices = async () => {
    let prices = await this.getPrices();
    this.setState({prices:prices});
  }

  setFavorite = symbol => {
    // updating current favorite
    this.setState({
      currentFavorite: symbol,
      historicalPricePoints: null
    }, this.getCoinHistoricalData);

    localStorage.setItem(
      'cryptoDash', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoDash')), currentFavorite: symbol
      })
    );
  }

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
        this.getPrices();
        this.getCoinHistoricalData();
      });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites,
      currentFavorite: currentFavorite})
      );
    };

  // grabbing localStorage data to populate favorties or using default
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if(!cryptoDashData) {
      return {page : 'settings', initialVisit: true, currentFavorite: 'BTC'}
    }
    let {favorites, currentFavorite} = cryptoDashData;
    return {favorites, currentFavorite};
  };

  setFilteredCoins = (filteredCoins) => {
    this.setState({filteredCoins});
  }

  updateChartTimeSpan = value => {
    this.setState({
      timeInterval: value,
      historicalPricePoints: null}, 
      this.getCoinHistoricalData)
  }

  // render function acts as wrapper passing state down to children
  render() {
    return (
      <AppContext.Provider value={this.state}>
       {this.props.children}
      </AppContext.Provider>
    )
  }
};

export default AppProvider;
