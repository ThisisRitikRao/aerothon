import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'New', 'Recycled'],
  [0, 0, 0],
  [1, 4, 7],
  [2, 15, 10],
  [3, 1, 9],
  [4, 5, 1],
  [5, 13, 4],
  [6, 4, 11],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Potential',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiChart_demo_new extends Component {
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
export default MultiChart_demo_new