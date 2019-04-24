import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinHightlight from './CoinHightlight';
import CoinPriceChart from './CoinChart';

const ChartGrid = styled.div`
  display: grid;
  margin-top: 30px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`

const DashboardPage = () => (
  <Page name="dashboard">
    <PriceGrid />
    <ChartGrid>
    <CoinHightlight />
    <CoinPriceChart />
    </ChartGrid>
  </Page>
);

export default DashboardPage;
