import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from '../AppProvider';
import {SelectTile} from '../Shared/Tile';
import {CoinHeaderStyled} from '../Settings/CoinHeaderGrid';
import {fontSize2, fontSizeBig, greenBoxShadow} from '../Shared/Styles';
import {JustifyLeft, JustifyRight, formatNum} from '../Shared/Helpers';

const PercentColorStyled = styled.div`
  color: green;
  ${props => props.red && css`
    color: red
  `}
`
const CoinPriceStyled = styled.div`
  ${fontSizeBig}
`
function PercentChangeComponent({coinData}) {
  return (
    <JustifyRight>
      <PercentColorStyled red={coinData.CHANGEPCT24HOUR < 0}>
        {formatNum(coinData.CHANGEPCT24HOUR)} %
      </PercentColorStyled>
    </JustifyRight>
  );
}

// checking for compact prop to decrease size of font and display as grid
const PriceTileStyled = styled(SelectTile)`
  ${props => props.compact && css`
  ${fontSize2}
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: right;
  `}
  ${props => props.currentFavorite && css`
    ${greenBoxShadow}
    pointer-events: none;
  `}
`

function PriceTile({coin, coinData, currentFavorite, setFavorite}){
  return (
    <PriceTileStyled 
      currentFavorite={currentFavorite}
      onClick={setFavorite}
      >
      <CoinHeaderStyled>
        <div>{coin}</div>
        <PercentChangeComponent coinData={coinData} />
        <CoinPriceStyled>${formatNum(coinData.PRICE)}</CoinPriceStyled>
      </CoinHeaderStyled>
    </PriceTileStyled>
  );
}

// minimized favorite price tile for second row of favorites including compact prop
function PriceTileCompact({coin, coinData, currentFavorite, setFavorite}){
  return (
    <PriceTileStyled 
      compact 
      currentFavorite={currentFavorite}
      onClick={setFavorite}
      >
      <JustifyLeft>{coin}</JustifyLeft>
      <PercentChangeComponent coinData={coinData} />
      <div>${formatNum(coinData.PRICE)}</div>
    </PriceTileStyled>
  );
}

/** 
 * conditional rendering of tile classes based on number in favorites list
 * and adding currentFavorite prop coin matches state currentFavorite
 */ 
const PriceTileLayout = ({price, index}) => {
  let coin = Object.keys(price)[0];
  let coinData = price[coin]['USD'];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
    <AppContext.Consumer>
    {({currentFavorite, setFavorite}) => 
      <TileClass
        coin={coin} 
        coinData={coinData} 
        currentFavorite={currentFavorite === coin}
        setFavorite={() => setFavorite(coin)}
      />
    }
    </AppContext.Consumer>
  );
}

export default PriceTileLayout;
