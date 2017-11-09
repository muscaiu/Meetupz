import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  </div>
)

export default App;
