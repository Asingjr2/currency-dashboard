import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {newHighChartConfig} from './HighCharts/main';
import chartTheme from './HighCharts/theme';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../AppProvider';
import ChartTimeSpan from './ChartTimeSpan';


ReactHighcharts.Highcharts.setOptions(chartTheme);

const CoinPriceChart = () => {
  return (
    <AppContext.Consumer>
      {({historicalPricePoints, updateChartTimeSpan}) => (
        <Tile>
          <ChartTimeSpan 
          defaultValue="weeks"
          onChange={event => updateChartTimeSpan(event.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartTimeSpan>
          {historicalPricePoints ? 
            <ReactHighcharts config={newHighChartConfig(historicalPricePoints)} /> :
            <div>LOADING INFO</div>
          }
        </Tile> 
      )
      }
    </AppContext.Consumer>
  );
}

export default CoinPriceChart;
