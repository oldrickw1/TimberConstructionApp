import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProject from './components/AddProject';
import Navbar from './components/Navbar';
import './App.css'


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addproject" element={<AddProject />} /> 
        </Routes>
      </div>
    </Router>
  );
}


export default App;
