export function newHighChartConfig(historicalPricePoints) {
  return {
    title: {
      text: 'PRICE HISTORY'
    },
    subtitle: {
      text: 'Days(closing data for 30 days), Weeks(closing data for 3 weeks), Months(closing data for 6 months)'
    },
    yAxis: {
      title: {
        text: 'USD VALUE',
        color: 'white'
      }
    },
    xAxis: {type: 'datetime'},
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: historicalPricePoints,
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };
}
