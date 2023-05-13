import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'New', 'Recycled'],
  [0, 0, 0],
  [1, 8, 12],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 13],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'CO2 emissions',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart extends Component {
  render() {
    return (
      <div className="container">
        <Chart
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default MultiLineChart