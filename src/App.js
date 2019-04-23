import React, { Component } from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import Header from './components/Header';
import AppProvider from './components/AppProvider';
import WelcomeMessage from './components/Settings/WelcomeMessage';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import Content from './components/Shared/Content';


class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <Header></Header>
          <Content>
            <Settings/>
            <Dashboard />  
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
