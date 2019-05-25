import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '566158504127-nmbjriec79ae5p9ur76ilir9tr2at6gi.apps.googleusercontent.com',
      scope: 'email'
    }).then(() => {
      this.auth = window.gapi.auth2.getAuthInstance();

      this.onAuthChange();
      this.setState({ isSignedIn: this.auth.isSignedIn.get()});
      this.auth.isSignedIn.listen(this.onAuthChange);
      console.log('current status', this.auth.isSignedIn.get());
    });
  });
}
 
// used with gapi to update signin status
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    console.log(this.auth.isSignedIn.get());
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google buton" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui green google buton" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In
        </button>
      )
    }
  }

  render() {
    return <h2>{this.renderAuthButton()}</h2>
  }
}

export default GoogleAuth;
