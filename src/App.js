import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './pages/signup';
import mainPage from './pages/mainPage';
import Profile from './pages/Profile';
import Selection from './pages/Selection';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact Component={SignUpForm} />
          <Route path="/profile" Component={Profile} />
          <Route path="/selection" Component={Selection} />
          <Route path="/mainpage" Component={mainPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
