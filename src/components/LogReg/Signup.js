import React from 'react';


class Signup extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="ui form">
          <div className="field">
            <label>USERNAME</label>
            <div className="ui left icon input">
              <input type="text" />
              <i className="user icon"></i>
            </div>
          </div>
          <div className="field">
            <label>PASSWORD</label>
            <div className="ui left icon input">
              <input type="text" placeholder="Username" />
              <i className="lock icon"></i>
            </div>
          </div>
          <div className="field">
            <label>CONFIRM PASSWORD</label>
            <div className="ui left icon input">
              <input type="password" />
              <i className="lock icon"></i>
            </div>
          </div>
          <div className="ui blue submit button">SIGNUP</div>
        </div>
      </div>
    );
  };
};

export default Signup;
