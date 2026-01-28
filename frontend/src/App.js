import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

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
            <Route path='/' element={
                <main className='flex-grow-1 d-flex flex-column'>
                    <div className='container-fluid flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center'>
                        <h2><i className="bi bi-cone-striped h2"></i> Page d'accueil <i className="bi bi-cone-striped h2"></i></h2>
                        <p>Le contenu arrive bientôt...</p>
                    </div>
                </main>
            } />

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