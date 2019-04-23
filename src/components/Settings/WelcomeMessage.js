import React from 'react';
import {AppContext} from '../AppProvider';

// using ES6 syntax to destructure passed down state information from the provider
// pulling initialVisit category from the passed donw state
// using ternary statement to handle initial view
const WelcomeMessage = ({initialVisit}) => {
  return (
    <div>
      <AppContext.Consumer>
      {({initialVisit}) => initialVisit ? 
      <div> 
        Welcome to CryptoDash, please select your favorite coins to begin.{''}
      </div> : null 
      }
      </AppContext.Consumer>
    </div>
  );
};

export default WelcomeMessage;
