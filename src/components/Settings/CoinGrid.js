import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {AppContext} from '../AppProvider';
import CoinTile from './CoinTile';

// below grid repeats and divides screen
export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-top: 30px;
`

// updates coinList based on filter input if present
function displayLowerCoins(coinList, filteredCoins) {
  return (filteredCoins && Object.keys(filteredCoins)) || 
    Object.keys(coinList).slice(0,100)
}

// return favorites
function displayCoins(coinList, topSection, favorites, filteredCoins) {
  return topSection ? favorites : displayLowerCoins(coinList, filteredCoins);
}; 

// passing topSection so that we can add a function to delete the coin for the list
// passing topSection indicator to map styles
const CoinGrid = ({topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList, favorites, filteredCoins}) => (
        <CoinGridStyled>
          {displayCoins(coinList, topSection, favorites, filteredCoins).map(coinKey => (
            <CoinTile topSection={topSection} coinKey={coinKey} key={coinKey}/>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
    );
};

CoinGrid.propTypes = {
  topSection: PropTypes.bool
}

export default CoinGrid;
