import React from 'react';
import styled, {css} from 'styled-components';

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
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      spotlight={spotlight}

    />
  );
};

export default CoinImage;
