import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../../AppProvider';
import {fontSize2, greenBoxShadow} from '../../Shared/Styles';

// standard colors used. 
const ButtonStyled = styled.div`
  margin: 20px;
  color: white;
  padding: 10px;
  border: 3px solid white;
  border-radius: 20px;
  background:seagreen;
  cursor: pointer;
  ${fontSize2};
  &:hover {
    ${greenBoxShadow}
  }
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`
 
// created functional component using styled components
// grabbing function for confirmFavorites out of context through the consumer
const ConfirmFavorites = () => {
  return (
    <AppContext.Consumer>
      {({confirmFavorites}) => (
        <CenterDiv onClick={confirmFavorites}>
          <ButtonStyled data-tooltip="Confirm changes to top 10 coins">
            CONFIRM YOUR FAVORITES
          </ButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmFavorites;
