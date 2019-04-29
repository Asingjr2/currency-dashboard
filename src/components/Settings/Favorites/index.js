import React from 'react';
import {AppContext} from '../../AppProvider';
import ConfirmFavorites from './ConfirmFavorites';
import ResetFavorites from './ResetFavorites';
import {SearchGrid} from '../Search';

const Favorites = () => {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => 
        <SearchGrid>
          <ConfirmFavorites ></ConfirmFavorites>
          <div></div>
          <div></div>
          <ResetFavorites />
        </SearchGrid>
      }
    </AppContext.Consumer>
  );
}

export default Favorites;
