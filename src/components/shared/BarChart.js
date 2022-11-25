import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { collection, getDocs } from 'firebase/firestore';
import { Skeleton } from '@chakra-ui/react';
import { db } from '../auth/firebase';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    status: 'Loading',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'green',
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      data: [
        50,
        25,
        12,
        48,
        56,
        76,
        42,
      ],
    }, {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: '#3b82f6',
      data: [
        21,
        84,
        24,
        75,
        37,
        65,
        34,
      ],
      borderColor: 'white',
      borderWidth: 2,
    }, {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: '#3b82f6',
      data: [
        41,
        52,
        24,
        74,
        23,
        21,
        32,
      ],
    }],
  });

  useEffect(() => {
    const handleSyncData = async () => {
      const colRef = await collection(db, 'datasets');
      getDocs(colRef).then((snapshots) => {
        const details = [];
        snapshots.docs.forEach((item) => {
          details.push({ ...item.data(), id: item.id });
        });
        setChartData({ ...chartData, datasets: details, status: 'OK' });
      });
    };
    handleSyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
