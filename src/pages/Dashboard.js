import React from 'react';
import Sidebar from '../components/sidebars/Sidebar';

const Dashboard = () => (
  <section className="dashboard">
    <div className="left__sidebar">
      <Sidebar />
    </div>
    <div className="right__dashboard">Dashboard</div>
  </section>
);

export default Dashboard;
