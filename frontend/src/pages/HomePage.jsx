import React from 'react';

const HomePage = () => {
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
                        {/* Artisan 1 - TEMPORAIRE */}
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h3>Nom de l'artisan</h3>
                                </div>
                                <div className='card-body'>
                                    <div className='rating mb-3'>
                                        <i className='bi bi-star-fill text-danger me-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger ms-1'></i>
                                    </div>
                                    <p><strong>Spécialité: </strong>Boulanger</p>
                                    <p><i className='bi bi-geo-alt'></i> Lyon</p>
                                </div>
                            </div>
                        </div>

                        {/* Artisan 2 - TEMPORAIRE */}
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h3>Nom de l'artisan</h3>
                                </div>
                                <div className='card-body'>
                                    <div className='rating mb-3'>
                                        <i className='bi bi-star-fill text-danger me-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger ms-1'></i>
                                    </div>
                                    <p><strong>Spécialité: </strong>Electricien</p>
                                    <p><i className='bi bi-geo-alt'></i> Chamonix</p>
                                </div>
                            </div>
                        </div>

                        {/* Artisan 3 - TEMPORAIRE */}
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h3>Nom de l'artisan</h3>
                                </div>
                                <div className='card-body'>
                                    <div className='rating mb-3'>
                                        <i className='bi bi-star-fill text-danger me-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger mx-1'></i>
                                        <i className='bi bi-star-fill text-danger ms-1'></i>
                                    </div>
                                    <p><strong>Spécialité: </strong>Chcocolatier</p>
                                    <p><i className='bi bi-geo-alt'></i> Lyon</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;