import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import fuzzy from 'fuzzy';
import {AppContext} from '../AppProvider';
import {backgroundColor2, fontSize2} from '../Shared/Styles';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
`

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  color: goldenrod;
  border: 3px solid;
  background-color: white;
  color: black;
  height:  40px;
  place-self: center right;
`

const ResetSearchListButton= styled.button`
  height:  40px;
  min-width: 100px;
  color: black;
  place-self: center right;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

/**
 * handleFilter grabs all coins from site than filters coins 
 * down based on search criteria using lodash filtering
 */
const handleFilter = _.debounce(
  (inputValue, coinList, setFilteredCoins) => {
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

const Search = () => {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => 
        <SearchGrid>
          <h3>Samus Search</h3>
          <SearchInput onKeyUp={(event) =>
            filterCoins(event, setFilteredCoins, coinList)} />
          <ResetSearchListButton onClick={() => setFilteredCoins(null)}>
            RESET COIN LIST
          </ResetSearchListButton>

        </SearchGrid>
      }
  </AppContext.Consumer>
  );
}

export default Search;
