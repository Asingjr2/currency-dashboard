import React from 'react';
import {AppContext} from '../AppProvider';


const CoinComponentWrapper = (props) => {
  return (
  <AppContext.Consumer>
  {({coinList, prices, initialVisit}) => {
    if(!coinList) {
      return <div> Loading Coins </div>
    }
    if(!initialVisit && !prices) {
      return <div>LOADING COIN DATA</div>
    }
    return <div> STUFF{props.children} </div>
  }}
  </AppContext.Consumer>
  );
};

export default CoinComponentWrapper;
