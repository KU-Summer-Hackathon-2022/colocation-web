import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HouseDetail from 'pages/Houses/HouseDetail';
import HouseList from 'pages/Houses/HouseList';
import Main from 'pages/Main';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <header>
      <Link to="/">
        <button>Main</button>
      </Link>
      <Link to="houses">
        <button>houses</button>
      </Link>
      <Link to="houses/1">
        <button>house1</button>
      </Link>
    </header>
    <main>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/houses" element={<HouseList/>} />
      <Route path="/houses/:id" element={<HouseDetail />} />
    </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
