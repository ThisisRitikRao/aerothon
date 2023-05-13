import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'New', 'Recycled'],
  [0, 0, 0],
  [1, 4, 7],
  [2, 15, 10],
  [3, 17, 9],
  [4, 18, 10],
  [5, 13, 4],
  [6, 4, 11],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'water usage',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart_demo extends Component {
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
export default MultiLineChart_demo