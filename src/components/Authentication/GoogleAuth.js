import React from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '566158504127-nmbjriec79ae5p9ur76ilir9tr2at6gi.apps.googleusercontent.com',
        scope: 'email'
    }).then(() => {
      this.auth = window.gapi.auth2.getAuthInstance();

      // checking built in function for status with a returned boolean
      this.onAuthChange(this.auth.isSignedIn.get());
      // this.setState({ isSignedIn: this.auth.isSignedIn.get()});
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  });
  }
 
  // used with gapi to update signin status
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  handleSignIn = () => {
    this.auth.signIn();
  }

  handleSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google buton" onClick={this.handleSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui green google buton" onClick={this.handleSignIn}>
          <i className="google icon" />
          Sign In
        </button>
      )
    }
  }

  render() {
    return (
      <h2>{this.renderAuthButton()}</h2>
    )
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.authReducer.isSignedIn };
}

// connecting component to store to access state and mapping action creators to props
export default connect(mapStateToProps, { signIn, signOut }) (GoogleAuth);
