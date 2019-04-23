import React from 'react';
import {AppContext} from '../AppProvider';
import {SelectTile, DeleteTile, DisableTile} from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';


function handleCoinClick(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey)
  } : () => {
    addCoin(coinKey)
  };
}

const CoinTile = ({coinKey, topSection}) => {
  
  return (
    <AppContext.Consumer>
      {({coinList, addCoin, removeCoin, inFavorites}) => {
        let coin = coinList[coinKey];

        // logic to govern which button is displayed
        let TileClass = SelectTile;
        if(topSection) {
          TileClass = DeleteTile;
        } else if(inFavorites(coinKey)){
          TileClass = DisableTile
        };

        // coinHeader is passed topsection
        return (
          <TileClass 
            onClick={handleCoinClick(topSection, coinKey, addCoin, removeCoin)}>
            <CoinHeaderGrid 
              name={coin.CoinName}
              symbol={coin.Symbol} 
              topSection={topSection}
              />
              <CoinImage coin={coin} />
          </TileClass>
          )
      }}
    </AppContext.Consumer>
  )
};

export default CoinTile;
