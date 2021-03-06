import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import PriceTile from './PriceTile';

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`

const PriceGrid = () => {
  return (
    <AppContext.Consumer>
      {({prices}) => {
        return (
        <PriceGridStyled>
          {prices.map((price,index) => 
            <PriceTile 
              index={index} 
              price={price} 
              key={`priceTile-${index}`} 
            />
        )}  
        </PriceGridStyled>
      )}}
    </AppContext.Consumer>
  );
}

export default PriceGrid;

