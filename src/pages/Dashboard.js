import React from 'react';
import Board from '../components/boards/Board';
import Sidebar from '../components/sidebars/Sidebar';

const Dashboard = () => (
  <section className="dashboard">
    <div className="left__sidebar">
      <Sidebar />
    </div>
    <div className="right__dashboard">
      <Board />
    </div>
  </section>
);

export default Dashboard;
