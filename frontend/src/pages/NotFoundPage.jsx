import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <main className='flex-grow-1 d-flex align-items-center'>
            <div className='container text-center py-5'>

                {/* Image */}
                <div className='mb-4'>
                    <img src='/404_not_found.png' alt='erreur 404' className='errorImg'/>
                </div>

                {/* Titre */}
                <h1 className='display-1 mb-3'>
                    Erreur 404
                </h1>

                {/* Sous-titre */}
                <h2 className='mb-4'>
                    Page non trouvée
                </h2>

                {/* Message */}
                <p className='mb-4'>
                    La page que vous avez demandée n'existe pas
                </p>

                {/* Bouton retour */}
                <Link to='/' className='btn btn-lg btn-back'>
                    Retour à l'accueil
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;