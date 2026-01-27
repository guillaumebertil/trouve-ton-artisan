import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App d-flex flex-column min-vh-100">
        {/* Header présent sur toutes les pages */}
        <Header />

        {/* Contenu principal*/}
        <main className='flex-grow-1 d-flex flex-column'>
            <div className="container-fluid flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center border">
            <h2><i className="bi bi-cone-striped h2"></i> Page d'accueil <i className="bi bi-cone-striped h2"></i></h2>
            <p>Le contenu arrive bientôt...</p>
            </div>
        </main>

        {/* Footer */}
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;