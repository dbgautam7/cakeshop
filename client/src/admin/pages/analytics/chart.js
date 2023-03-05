import React, { useState, useEffect,useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data, options }) => {
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data,
        options,
      });
      setChart(newChartInstance);
    }
  }, [chartRef, data, options]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
