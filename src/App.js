import React, { Component } from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import AppProvider from './components/AppProvider';
import Content from './components/Shared/Content';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Settings from './components/Settings';
import Vidoes from './components/Youtube';
import Footer from './components/Footer';

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
          </Content>
        </AppProvider>
        <Footer />
      </AppLayout>
    );
  }
}

export default App;
