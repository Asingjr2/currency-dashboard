import React, { Component } from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import AppProvider from './components/AppProvider';
import Content from './components/Shared/Content';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Settings from './components/Settings';
import Vidoes from './components/Youtube';
import LogRegUser from './components/LogReg/LogReg';


class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <Header></Header>
          <Content>
            <Settings/>
            <Dashboard />  
            <Vidoes />
            <LogRegUser />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
