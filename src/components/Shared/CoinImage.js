import React from 'react';
import styled, { css } from 'styled-components';
import { REACT_APP_CRYPTOCOMPARE_URL } from '../../config';

const ImageStyled = styled.img`
  height: 50px;
  margin: auto;
  padding-top: 25px;
  display: block;
  ${props => props.spotlight && css`
    height:200px;
    `}
`

const CoinImage = ({coin, spotlight}) => {
  return (
    <ImageStyled
      alt={coin.CoinSymbol}
      src={`${REACT_APP_CRYPTOCOMPARE_URL}/${coin.ImageUrl}`}
      spotlight={spotlight}

    />
  );
};

export default CoinImage;
