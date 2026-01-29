import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPages';
import ArtisanDetailPage from './pages/ArtisanDetailPage';
import SearchResultsPage from './pages/SearchResultatsPage';
import NotFoundPage from './pages/NotFoundPage';

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
            {/* Page d'accueil */}
            <Route path='/' element={<HomePage />} />

            {/* Page categorie */}
            <Route path='/categorie/:categoryId' element={<CategoryPage />} />

            {/* Page détail artisan */}
            <Route path='/artisan/:id' element={<ArtisanDetailPage />} />

            {/* Page recherche */}
            <Route path='/recherche' element={<SearchResultsPage />} />

            {/* Pages légales */}
            <Route path='/mentions-legales' element={<MentionsLegales />} />
            <Route path='/donnees-personnelles' element={<DonneesPersonnelles />} />
            <Route path='/accessibilite' element={<Accessibilite />} />
            <Route path='/cookies' element={<Cookies />} />

            {/* Page 404 */}
            <Route path='*' element={<NotFoundPage />} />

        </Routes>


        {/* Footer */}
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;