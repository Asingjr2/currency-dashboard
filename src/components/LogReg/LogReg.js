import React from 'react';
import Signup from './Signup';
import Signin from './Signin';

class LogReg extends React.Component {
  render() {
    return (
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <Signup />
          <div className="middle aligned column">
            <Signin />
          </div>
        </div>
        <div className="ui vertical divider">
          Or
        </div>
      </div>
    ) ;
  };
};

export default LogReg;
