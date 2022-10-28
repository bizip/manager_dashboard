import { BrowserRouter as Router } from 'react-router-dom';
import './sass/App.scss';
import Dashboard from './pages/Dashboard';
import NavBar from './components/navbars/NavBar';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Dashboard />
    </Router>
  );
}

export default App;
