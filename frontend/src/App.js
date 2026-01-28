import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';

// Pages légales
import MentionsLegales from './pages/legal/MentionsLegales';
import DonneesPersonnelles from './pages/legal/DonneesPersonnelles';
import Accessibilite from './pages/legal/Accessibilite';
import Cookies from './pages/legal/Cookies';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App d-flex flex-column min-vh-100">

        {/* Header présent sur toutes les pages */}
        <Header />

        {/* Routes */}
        <Routes>
            <Route path='/' element={<HomePage />} />

            {/* Pages légales */}
            <Route path='/mentions-legales' element={<MentionsLegales />} />
            <Route path='/donnees-personnelles' element={<DonneesPersonnelles />} />
            <Route path='/accessibilite' element={<Accessibilite />} />
            <Route path='/cookies' element={<Cookies />} />

        </Routes>


        {/* Footer */}
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;