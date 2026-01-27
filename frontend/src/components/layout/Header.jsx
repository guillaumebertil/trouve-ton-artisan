import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
                    <form className="d-flex" style={{ width: '100%', maxWidth: '400px' }}>
                        <input className="form-control me-2" type="search" placeholder="Chercher un artisan" />
                        <button className="btn btn-submit" type="submit">Recherche</button>
                    </form>
                </div>

                {/* 3. MENU */}
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/batiment">Bâtiment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/fabrication">Fabrication</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/alimentation">Alimentation</Link></li>
                    </ul>
                </div>

            </nav>
        </div>
    </header>
  );
}

export default Header;