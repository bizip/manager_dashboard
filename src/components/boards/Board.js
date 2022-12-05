import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { ImHome } from 'react-icons/im';
import { FaBatteryThreeQuarters } from 'react-icons/fa';
import {
  collection, doc, getDoc, getDocs, query, where,
} from 'firebase/firestore';
import { Skeleton } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import Alert from '../shared/Alert';
import Card from '../shared/Card';
import BarChart from '../shared/BarChart';
import Donutchart from '../shared/Donutchart';
import TrackBoard from '../shared/TrackBoard';
import TargetBord from '../shared/TargetBord';
import { db } from '../auth/firebase';
import { useLoggedInUserAuth } from '../../context/UserDataContextProvider';
// import { cardList } from '../shared/Data';

const Board = () => {
  const [newCardList, setNewCardList] = useState([]);
  const [targetList, setTargetList] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [currentUserLocation, setCurrentUserLocation] = useState('');
  const [currentUserContinent, setCurrentUserContinent] = useState('');
  const [BarChartData, setBarchartData] = useState([]);
  const { currentLoggedInUser } = useLoggedInUserAuth();

  useEffect(() => {
    const fetchUserLocation = async () => {
      if (currentLoggedInUser) {
        const FromStorage = await JSON.parse(localStorage.getItem('userDetails'));
        console.log('From stoarage', FromStorage.continent);
        const q = query(collection(db, 'users'), where('uid', '==', currentLoggedInUser?.uid));
        const docSnap = await getDocs(q);
        const userData = docSnap.docs[0].data();

        localStorage.setItem('userDetails', JSON.stringify(userData));
        setCurrentUserContinent(userData.continent);
        setCurrentUserLocation(userData.country);
      }
    };
    fetchUserLocation();
  }, [currentLoggedInUser]);

  const handleSyncData = async () => {
    const dataRef = doc(db, `kapsuledata/${currentUserContinent}/${currentUserLocation}/grephdata`);
    const docSnap = await getDoc(dataRef);
    if (docSnap.exists()) {
      const result = docSnap.data();
      setTargetList(result.targetList);
      setTrackList(result.trackBoard);
      setNewCardList((result.cardList));
      setBarchartData(result.datasets);
    } else {
      toast.error('No such document!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  useEffect(() => {
    if (currentUserLocation) {
      handleSyncData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserLocation]);

  console.log(trackList, 'PPPPPPPPPPPPPPPPPPPPPPPPPP');

  const fakeArr = [1, 2, 3, 4];
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
        {/* eslint-disable-next-line react/jsx-key */}
        {newCardList.length === 0 && fakeArr.map(() => 
          (<Skeleton className="card_one"><div className="card_one">kkkkkkkkkjjjjjjjjj</div>
          </Skeleton>))}
        {newCardList.length > 0 && newCardList.map((item) => (<Card key={item.id} item={item} />))}

      </section>
      <section className="chart__container">
        <div className="trafic">
          <BarChart item={BarChartData} />
        </div>
        <div className="income">
          <Donutchart />
        </div>
      </section>
      <section className="track">
        {trackList.length === 0 && fakeArr.map((index) =>
           (<Skeleton className="card_one" key={index + 1}>
           <div className="card_one">kkkkkkkkkjjjjjjjjj</div></Skeleton>))}
        {trackList.length > 0 && trackList.map((item) => 
          (<TrackBoard key={item.id} item={item} />))}
      </section>

      <section className="target">
        <div className="target__header">
          <p>Target Section</p>
          <Link to=".." relative="path" className="target__Link">
            View Details
          </Link>
        </div>
        <div className="target__list">
          {targetList.length === 0 && fakeArr.map(() => 
            (<Skeleton className="card_one" key={index + 1}>
            <div className="card_one">kkkkkkkkkjjjjjjjjj</div></Skeleton>))}
          {targetList.length > 0 && targetList.map((item) => 
            (<TargetBord key={item.id} item={item} />))}
        </div>
      </section>
    </section>
  );
};
export default Board;
