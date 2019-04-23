import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppProvider';
import {fontSize1, greenBoxShadow, color3} from '../Shared/Styles';

// standard colors used. 
const ButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  padding: 10px;
  cursor: pointer;
  ${fontSize1};
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
const ConfirmChoice = () => {
  return (
    <AppContext.Consumer>
      {({confirmFavorites}) => (
        <CenterDiv onClick={confirmFavorites}>
          <ButtonStyled>
            CONFIRM YOUR FAVORITES
          </ButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmChoice;
