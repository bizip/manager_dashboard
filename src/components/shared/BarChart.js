import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { Skeleton } from '@chakra-ui/react';

const BarChart = ({ item }) => {
  const [chartData, setChartData] = useState({
    status: 'Loading',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [],
  });

  useEffect(() => {
    if (item.length > 0) {
      setChartData({ ...chartData, datasets: item, status: 'OK' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const [lightOptions] = useState({
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  });

  return (
    <div className="chart__card">
      {chartData.status === 'OK'
        && <Chart type="bar" data={chartData} options={lightOptions} />}
      {chartData.status !== 'OK'
      && (
      <Skeleton className="bar_skeleton">
        <h1>Loading ...</h1>
      </Skeleton>
      )}
    </div>
  );
};

export default BarChart;
