import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import fuzzy from 'fuzzy';
import {AppContext} from '../../AppProvider';
import ConfirmFavorites from './ConfirmFavorites';
import ResetFavorites from './ResetFavorites';
import {SearchGrid} from '../Search';
import {backgroundColor2, fontSize2} from '../../Shared/Styles';

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
