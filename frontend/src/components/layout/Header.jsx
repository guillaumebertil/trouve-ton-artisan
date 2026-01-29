import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    // Variables
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Charger les catégories depuis l'API
    useEffect(() => {
        // Appeler l'API
        fetch(`${process.env.REACT_APP_API_URL}/categories`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Catégories reçues:', data);
            setCategories(data.data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }, []);

    // Gérer la soumission du formulaire de recherche
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/recherche?q=${encodeURIComponent(searchTerm)}`);
            setSearchTerm('');  // Vider la barre de recherche
        }
    }

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center">
                    
                    {/* 1. LOGO (Gauche) */}
                    <Link className="navbar-brand" to="/">
                        <img src="/Logo.png" alt="Logo" className="header-logo"/>
                    </Link>

                    {/* Menu Burger */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 2. RECHERCHE */}
                    <div className="flex-grow-1 d-flex justify-content-center d-none d-lg-flex">
                        <form
                            className="d-flex"
                            style={{ width: '100%', maxWidth: '400px' }}
                            onSubmit={handleSearch}
                        >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Chercher un artisan"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-submit" type="submit">Recherche</button>
                        </form>
                    </div>

                    {/* 3. MENU */}
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* Boucle sur les catégories */}
                            {categories.map(category => (
                                <li key={category.id} className='nav-item'>
                                    <Link className="nav-link" to={`/categorie/${category.id}`}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    );
}

export default Header;