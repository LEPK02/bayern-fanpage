import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import NavBar from './shared/navbar';
import Banner from './home/banner';
import FavouritePlayers from './favouritePlayers/favouritePlayers';
import HallOfFame from './hallOfFame/hallOfFame';
import Guide from './hallOfFame/guide';
import HOFPlayers from './hallOfFame/hofPlayers';
import HOFTeams from './hallOfFame/hofTeams';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Banner />} />
        <Route path='favouritePlayers' element={<FavouritePlayers />} />
        <Route path='hallOfFame' element={<><Guide /><HallOfFame/></>}>
          <Route path='players' element={<HOFPlayers />} />
          <Route path='teams' element={<HOFTeams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);