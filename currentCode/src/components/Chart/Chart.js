import React from 'react';
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = ({dataPoints}) => {
  return <div className='chart'>
    {dataPoints.map(dataPoint =>
      <ChartBar key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={null}/>)
    }
  </div>
}

export default Chart;