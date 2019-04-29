import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../../AppProvider';
import {fontSize1, redBoxShadow, color3} from '../../Shared/Styles';

// standard colors used. 
const ButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  padding: 10px;
  cursor: pointer;
  ${fontSize1};
  &:hover {
    ${redBoxShadow}
  }
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`
 
// created functional component using styled components
// grabbing function for confirmFavorites out of context through the consumer
const ResetFavorites = () => {
  return (
    <AppContext.Consumer>
      {({resetFavorites}) => (
        <CenterDiv onClick={resetFavorites}>
          <ButtonStyled>
            RESET FAVORITES
          </ButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ResetFavorites;
