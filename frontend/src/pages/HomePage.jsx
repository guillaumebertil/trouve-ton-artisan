import React, { useState, useEffect } from 'react';

const HomePage = () => {
    // Variables pour stocker les artisans
    const [artisans, setArtisans] = useState([]);

    // Fonction qui charge les artisans depuis l'API
    useEffect(() => {
        // Appeler l'API
        fetch('http://localhost:5000/api/artisans/top', {
            headers: {
                'x-api-key': 'iA85qs10D4XVM8YC'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Données reçues:', data);
            setArtisans(data.data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }, []);
    return (
        <main className='flex-grow-1'>
            {/* SECTION 1 : HERO */}
            <section className='hero'>
                <div className='container text-center py-5'>
                    <h1>Trouvez l'artisan qu'il vous faut</h1>
                    <p>Plus de 221 000 artisans qualifié en Auvergne-Rhône-Alpes</p>
                </div>
            </section>

            {/* SECTION 2 : Comment trouver mon artisan ? */}
            <section className='how-to-find py-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Comment trouver mon artisan ?</h2>

                    <div className='row'>
                        {/* Etape 1 */}
                        <div className='col-md-6 col-lg-3 mb4'>
                            <div className='step-card text-center'>
                                <h3>1 - Choisir la catégorie</h3>
                                <p>Choisir la catégorie d'artisanat dans le menu.</p>
                            </div>
                        </div>

                        {/* Etape 2 */}
                        <div className='col-md-6 col-lg-3 mb4'>
                            <div className='step-card text-center'>
                                <h3>2 - Choisir un artisan</h3>
                                <p>Choisir un artisan.</p>
                            </div>
                        </div>

                        {/* Etape 3 */}
                        <div className='col-md-6 col-lg-3 mb4'>
                            <div className='step-card text-center'>
                                <h3>3 - Le contacter</h3>
                                <p>Le contacter vie le formulaire.</p>
                            </div>
                        </div>

                        {/* Etape 4 */}
                        <div className='col-md-6 col-lg-3 mb4'>
                            <div className='step-card text-center'>
                                <h3>4 - Réponse rapide</h3>
                                <p>Une réponse sera apportée sous 48h.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3 : Les artisans du mois */}
            <section className='top-artisans py-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Les artisans du mois</h2>

                    <div className='row'>
                        {/* Boucle sur les artisans */}
                        {artisans.map((artisan) => (
                            <div key={artisan.id} className='col-md-4 mb-4'>

                                {/* Card artisans */}
                                <div className='card'>

                                    {/* Card Header */}
                                    <div className='card-header'>
                                        <h3>{artisan.name}</h3>
                                    </div>

                                    {/* Card Body */}
                                    <div className='card-body'>

                                        {/* Note */}
                                        <div className='rating mb-3'>
                                            <i className='bi bi-star-fill text-danger me-1'></i>
                                            <i className='bi bi-star-fill text-danger mx-1'></i>
                                            <i className='bi bi-star-fill text-danger mx-1'></i>
                                            <i className='bi bi-star-fill text-danger mx-1'></i>
                                            <i className='bi bi-star-fill text-danger ms-1'></i>
                                        </div>

                                        {/* Spécialité */}
                                        <p><strong>Spécialité: </strong>{artisan.speciality.name}</p>

                                        {/* Localisation */}
                                        <p><i className='bi bi-geo-alt'></i>{artisan.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))};

                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;