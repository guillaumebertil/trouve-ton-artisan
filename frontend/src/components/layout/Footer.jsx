import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row align-items-center mb-5 text-center">
                    
                    <div className="col-md-6">
                        <img src="/Logo.png" alt="Logo" className="footer-logo"/>
                    </div>

                    <div className="col-md-6">
                        <address>
                            <p>101 cours Charlemagne</p>
                            <p>CS 20033</p>
                            <p>69269 LYON CEDEX 02</p>
                            <p>France</p>
                            <p>+33 (0)4 26 73 40 00</p>
                        </address>
                    </div>

                    <div className="col-12">
                        <ul className="list-inline d-flex flex-wrap justify-content-center">
                            <li className="list-inline-item mx-2"><Link className="nav-link" to="/mentions-legales">Mentions légales</Link></li>
                            <li className="list-inline-item mx-2"><Link className="nav-link" to="/donnes-personnelles">Données personnelles</Link></li>
                            <li className="list-inline-item mx-2"><Link className="nav-link" to="/accessibilite">Accessibilité</Link></li>
                            <li className="list-inline-item mx-2"><Link className="nav-link" to="/cookies">Cookies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;