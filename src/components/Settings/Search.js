import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import fuzzy from 'fuzzy';
import { AppContext } from '../AppProvider';

/** 
 * used to ensure even spacing between elements and
 * exported for use to confirm or reset favorites
 */ 
export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

/**
 * handleFilter grabs all coins from site than filters coins 
 * down based on search criteria using lodash filtering
 */
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // getting coin symbols
    let allSymbols = Object.keys(coinList);
    let coinNames = allSymbols.map(symbol => coinList[symbol].CoinName);
    let allStringsForFilter = allSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
      .filter(inputValue, allStringsForFilter, {})
      .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symbol) => {
      let coinName = result.CoinName;
      return (_.includes(fuzzyResults, symbol) || _.includes(fuzzyResults, coinName));
    });

    setFilteredCoins(filteredCoins);
    }, 500);

// displays list of coins based on key up events and filtering of coin names
function filterCoins(event, setFilteredCoins, coinList) {
  let inputValue = event.target.value;
  if(!inputValue) {
    setFilteredCoins(null);
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export const Search = () => {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => 
        <SearchGrid>
        <div class="ui left corner labeled input large" data-tooltip="Search from hundreds of coins">
          <input type="text" 
            placeholder="search coins" 
            onKeyUp={(event) => filterCoins(event, setFilteredCoins, coinList)}
            />
          <div class="ui left corner label" >
            <i class="search icon"></i>
          </div>
        </div>
       
          <div></div>
          <div></div>

          <div class="ui corner labeled input large" data-tooltip="Reset filterd coin listing">
            <input 
              type="text" 
              value="Reset List"
              onClick={() => setFilteredCoins(null)}
              />
            <div class="ui corner label">
              <i class="undo icon"></i>
            </div>
          </div>

        </SearchGrid>
      }
  </AppContext.Consumer>
  );
}

export default Search;
