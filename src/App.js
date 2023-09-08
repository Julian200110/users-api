import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieDetails from './Pages/User';
import HomePage from './Pages/HomePage';
import Followers from './Pages/Follower';
import Following from './Pages/Following';

function App() {
  const [screenName, setScreenName] = useState('');
  const [ID,setID] = useState(' ');
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage setScreenName={setScreenName}/>} />
          <Route path="/movie/:id" element={<MovieDetails screen_name={screenName} setID={setID}/>} />
          <Route path="/followers/:id" element={<Followers  setScreenName ={setScreenName} ID={ID}/>} />
          <Route path="/following/:id" element={<Following  setScreenName ={setScreenName} ID={ID}/>} />
        </Routes>
      </div>
  );
}

export default App;
