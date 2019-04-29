import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import Favorites from './Favorites';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';


const SettingsPage = () => {
  return (
    <div>
      <Page name="coinlist">
        <WelcomeMessage/>
          <CoinGrid topSection />
          <Favorites />
          <Search />
          <CoinGrid />
      </Page>
    </div>
  );
};

export default SettingsPage;
