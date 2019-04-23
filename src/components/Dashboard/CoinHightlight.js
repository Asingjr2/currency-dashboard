import React from 'react';
import styled from 'styled-components';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../AppProvider';
import CoinImage from '../Shared/CoinImage';
import {fontSizeBig} from '../Shared/Styles';

const TextCenterStyled = styled.div`
  text-align: center;
  color: black;
  ${fontSizeBig};
`

const SummaryInfoTile = styled(Tile)`
  margin-top: 50px;
  max-height: 300px;
  background: linear-gradient(red, orange);
  border: 2px solid white;
  border-radius: 25px;
`

const CoinHightlight = () => {
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList}) => (
        <SummaryInfoTile>
          <TextCenterStyled>{coinList[currentFavorite].CoinName}</TextCenterStyled>
          <CoinImage spotlight coin={coinList[currentFavorite]} />
        </SummaryInfoTile>
        )}
    </AppContext.Consumer>
  );
}

export default CoinHightlight;
