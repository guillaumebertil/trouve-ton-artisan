import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArtisanCard from '../components/common/ArtisanCard';

const SearchResultsPage = () => {
    // Récupérer le terme de recherche depuis l'URL
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q');

    // Variables
    const [artisans, setArtisans] = useState([]);

    // Charger les résultats de recherche
    useEffect(() => {
        if (searchTerm) {
            fetch(`${process.env.REACT_APP_API_URL}/artisans/search?name=${encodeURIComponent(searchTerm)}`, {
                headers: {
                    'x-api-key': process.env.REACT_APP_API_KEY
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Résultats de recherche:', data);
                setArtisans(data.data);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
        }
    }, [searchTerm]);

    return (
        <main className='flex-grow-1'>
            <div className='container py-5'>

                {/* Titre avec le terme recherché */}
                <h1 className='mb-4'>
                    Résultats de recherche pour "{searchTerm}"
                </h1>

                {/* Nombre de résultats */}
                {artisans.length > 0 && (
                    <p className='text-muted mb-4'>
                        {artisans.length} artisan{artisans.length > 1 ? 's' : ''} trouvé{artisans.length > 1 ? 's' : ''}
                    </p>
                )}

                {/* Message si aucun résultat */}
                {artisans.length === 0 && (
                    <div className='alert alert-info'>
                        Aucun artisan trouvé pour "{searchTerm}". Essayez avec un autre terme.
                    </div>
                )}

                {/* Liste des artisans */}
                <div className='row'>
                    {artisans.map((artisan) => (
                        <div key={artisan.id} className='col-md-6 col-lg-4 mb-4'>
                            <ArtisanCard
                                id={artisan.id}
                                name={artisan.name}
                                note={artisan.note}
                                speciality={artisan.speciality.name}
                                location={artisan.location}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchResultsPage;