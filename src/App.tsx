import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetail from 'pages/Houses/HouseDetail';
import HouseList from 'pages/Houses/HouseList';
import Main from 'pages/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/houses" element={<HouseList/>} />
      <Route path="/houses/:id" element={<HouseDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
