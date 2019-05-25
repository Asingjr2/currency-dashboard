import React, { Component } from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import AppProvider from './components/AppProvider';
import Content from './components/Shared/Content';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Settings from './components/Settings';
import Vidoes from './components/Youtube';
import LogRegUser from './components/LogReg/LogReg';

const TestPage = () => {
  return <div>TEST PAGE</div>
};

const TestPage2 = () => {
  return <div>TEST PAGE2</div>
};

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <div>
//         <Route path="/" exact component={TestPage} />
//         <Route path="/2" exact component={TestPage2} />
//         </div>
//       </BrowserRouter>
//     </div>
//   )
// }

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
