import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
