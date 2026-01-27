import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header présent sur toutes les pages */}
        <Header />

        {/* Contenu principal*/}
        <main>
          <div className="container">
            <h2><i className="bi bi-cone-striped h2"></i> Page d'accueil <i className="bi bi-cone-striped h2"></i></h2>
            <p>Le contenu arrive bientôt...</p>
          </div>
        </main>

        {/* Footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;