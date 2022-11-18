import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../components/auth/firebase';

const initialState = {
  datasets: null,
};

const lineChartSlice = createSlice({
  name: 'lineChart',
  initialState,
  reducers: {
    getDataFromFirebase(state) {
      const colRef = collection(db, 'datasets');
      getDocs(colRef).then((snapshots) => {
        snapshots.docs.map((item) => {
          console.log(item.data);
        });
      });
    },
  },
});

// export const register = createAsyncThunk(
//   'getdata/datasets',
//   () => {
//     const colRef = collection(db, 'datasets');
//     getDocs(colRef).then((snapshots) => {
//       snapshots.docs.map((item) => {
//            return (item.data())

//       });
//     }).catch((error) => {
//         setLoading(false);
//         return {
//           datasets: null,
//           logged_in: false,
//           error: error.response.data.error,
//         };
//       });

// const result = axios
//   .post(
//     `https://luxy-rides-api.herokuapp.com/api/v1/register/${username}/${name}/${email}`,
//   )
//   .then((response) => {
//     localStorage.setItem('user', JSON.stringify(response.data));
//     window.location.reload();
//   })

//     return colRef;
//   },
// );

// export const login = createAsyncThunk(
//   'user/login',
//   ({ username, setLoading }) => {
//     const result = axios
//       .get(`https://luxy-rides-api.herokuapp.com/api/v1/login/${username}`)
//       .then((response) => {
//         localStorage.setItem('user', JSON.stringify(response.data));
//         window.location.reload();
//       })
//       .catch((error) => {
//         setLoading(false);
//         return {
//           user: null,
//           logged_in: false,
//           error: error.response.data.error,
//         };
//       });
//     return result;
//   },
// );

// export const registerSlice = createSlice({
//   name: 'register',
//   initialState,
//   reducers: {
//     [register.fulfilled]: (state, action) => ({
//         ...state,
//         datasets: action.payload. datasets,
//         logged_in: action.payload.logged_in,
//         error: action.payload.error,
//       }),
//       [register.rejected]: (state, action) => ({
//         ...state,
//         error: action.payload,
//       })
//   }
// });

export const lineChartActions = lineChartSlice.actions;
export default lineChartSlice;
// export const { checkUser } = registerSlice.actions;
