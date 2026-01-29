import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtisanCard from '../components/common/ArtisanCard';

const CategoryPage = () => {
    // Récupère l'ID de la catégorie depuis l'URL
    const { categoryId } = useParams();

    // Variables
    const [artisans, setArtisans] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    // Charger les artisans
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/artisans/category/${categoryId}`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Artisans reçus:', data);
        setArtisans(data.data);

        // Récupérer le nom de la catégorie
        if (data.data.lenght > 0) {
            setCategoryName(data.data[0].speciality.category.name);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}, [categoryId]);

    return (
        <main className='flex-grow-1'>
            <div className='container py-5'>
                {/* Titre */}
                <h1 className='mb-4'>{categoryName}</h1>

                {/* Nombre d'artisans */}
                {artisans.length > 0 && (
                    <p className='text-muted mb-4'>
                        {artisans.length} artisan{artisans.length > 1 ? 's' : ''} trouvé{artisans.length > 1 ? 's' : ''}
                    </p>
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

export default CategoryPage;