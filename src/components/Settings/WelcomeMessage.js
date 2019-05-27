import React from 'react';
import { AppContext } from '../AppProvider';
import styled from 'styled-components';

const StyledMessage = styled.div`
  height: 40px;
  margin-top: 30px;
  text-align: center;
  color: white;
  background-color: gold;
  opacity: .8;
  border-radius: 25px;
  box-shadow: 10px 10px 5px grey;
  padding: 10px;
  &:hover{
  cursor: pointer;
  color: blue;
}`

// using ES6 syntax to destructure passed down state information from the provider
// pulling initialVisit category from the passed donw state
// using ternary statement to handle initial view
const WelcomeMessage = ({ initialVisit }) => {
  return (
    <div>
      <AppContext.Consumer>
      {({ initialVisit }) => initialVisit ? 
      <StyledMessage> 
        <h3>
          Welcome to CryptoDash, please confim your favorite coins to start tracking on dashboard and check out relevant videos.
        </h3>
      </StyledMessage> : null 
      }
      </AppContext.Consumer>
    </div>
  );
};

export default WelcomeMessage;
