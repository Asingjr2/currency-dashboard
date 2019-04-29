import React from 'react';
import styled from 'styled-components';
import {DeleteTile} from '../Shared/Tile';

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`; 

export const CoinSymbol = styled.div`
  justify-self: right
`;

// creating styled components that take in a component for additional formatting for a disticnt element
const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeleteTile}:hover & {
    display: block;
    color: red;
  }
`

// supplying conditional rendering pased on existence of prop called topSection
const CoinHeaderGrid = ({name, symbol, topSection}) => {
  return (
    <CoinHeaderStyled>
      <div>{name}</div>
      {topSection ? (<DeleteIcon> X </DeleteIcon>) : (
      <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderStyled>
  );
};

export default CoinHeaderGrid;
