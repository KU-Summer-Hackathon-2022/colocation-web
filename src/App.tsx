import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetail from 'pages/Houses/HouseDetail';
import HouseList from 'pages/Houses/HouseList';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="houses">
        <button>houses</button>
      </Link>
      <Link to="houses/1">
        <button>house1</button>
      </Link>
    </header> */}
    {/* <body> */}
    <Routes>
      <Route path="/houses" element={<HouseList/>} />
      <Route path="/houses/:id" element={<HouseDetail />} />
    </Routes>
    {/* </body> */}
  </BrowserRouter>
  );
}

export default App;
