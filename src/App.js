import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/App.scss';
import Dashboard from './pages/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Reset from './components/auth/Reset';
import { UserDataContextProvider } from './context/UserDataContextProvider';
import EditProfile from './components/boards/EditProfile';

function App() {
  return (
    <UserDataContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/edit" element={<EditProfile />} />
        </Routes>
      </Router>
    </UserDataContextProvider>

  );
}

export default App;
