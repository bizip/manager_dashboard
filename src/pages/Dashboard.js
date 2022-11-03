import React from 'react';
import Board from '../components/boards/Board';
import NavBar from '../components/navbars/NavBar';
import Sidebar from '../components/sidebars/Sidebar';

const Dashboard = () => (
  <section>
    <NavBar />
    <section className="dashboard">
      <div className="left__sidebar">
        <Sidebar />
      </div>
      <div className="right__dashboard">
        <Board />
      </div>
    </section>
  </section>
);

export default Dashboard;
