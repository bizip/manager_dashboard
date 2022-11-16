import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbBuildingSkyscraper } from 'react-icons/tb';
// import { collection, getDocs } from 'firebase/filestore';
import { ImHome } from 'react-icons/im';
import { FaBatteryThreeQuarters } from 'react-icons/fa';
import Alert from '../shared/Alert';
import Card from '../shared/Card';
import BarChart from '../shared/BarChart';
import Donutchart from '../shared/Donutchart';
import { cardList, targetList, trachTrack } from '../shared/Data';
import TrackBoard from '../shared/TrackBoard';
import TargetBord from '../shared/TargetBord';
import { db } from '../auth/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Board = () => {
  const [info , setInfo] = useState([]);
  // const summaryRef = collection(db, "summary")
  // const [summary,setSummary] = useState([]);
  // useEffect(() => {
  //   const getSummary=async()=>{
  //     const data = await getDocs(summaryRef);
  //     console.log(data);
  //   }

  //   getSummary();
  // }, []);
  


useEffect(()=>{
  const colRef =collection(db, "summary");
  getDocs(colRef).then((snapshots)=>{
    snapshots.docs.map((item)=>{
  console.log(item.data())
    })
  });
},[]);

console.log(info)
  return (
    <section className="mid_dashboard">
      <div className="board">
        <div className="board__header">
          <span className="top_header">
            <TbBuildingSkyscraper />
            <h1 className="top__title">Minimal Dashboard</h1>
          </span>
          <span className="top_header .top_paragraph">
            <ImHome />
            {' '}
            <p className="top__title">
              {' '}
              <b>/</b>
              {' '}
              Dashboards
              {' '}
              <b>/</b>
              {' '}
              Minimal Dashboard example
            </p>
          </span>
        </div>

        <div className="board__icons">
          <select id="country" name="country">
            <option value="australia">Select period ...</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
          </select>
          <div className="icon_container">
            <FaBatteryThreeQuarters className="board__icon" />
          </div>
        </div>
      </div>
      <Alert />
      <section className="card__list">
        {cardList.map((item) => (<Card key={item.id} item={item} />))}
      </section>
      <section className="chart__container">
        <div className="trafic">
          <BarChart />
        </div>
        <div className="income">
          <Donutchart />
        </div>
      </section>
      <section className="track">
        {trachTrack.map((item) => (<TrackBoard key={item.id} item={item} />))}
      </section>

      <section className="target">
        <div className="target__header">
          <p>Target Section</p>
          <Link to=".." relative="path" className="target__Link">
            View Details
          </Link>
        </div>
        <div className="target__list">
          {targetList.map((item) => (<TargetBord key={item.id} item={item} />))}
        </div>
      </section>
    </section>
  );
};

export default Board;
