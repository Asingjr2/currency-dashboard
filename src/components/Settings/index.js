import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmChoice from './ConfirmChoice';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';


const SettingsPage = () => {
  return (
    <div>
      <Page name="settings">
        <WelcomeMessage/>
          <CoinGrid topSection />
          <ConfirmChoice />
          <Search />
          <CoinGrid />
      </Page>
    </div>
  );
};

export default SettingsPage;
