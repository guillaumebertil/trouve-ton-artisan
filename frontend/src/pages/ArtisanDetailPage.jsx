import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/common/StarRating';

const ArtisanDetailPage = () => {
    // Récupérer l'ID de l'artisan depuis l'URL
    const { id } = useParams();

    // Variables 
    const [artisan, setArtisan] = useState(null);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    });
    const [successMessage, setSuccessMessage] = useState('');

    // Charger les infos de l'artisan
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/artisans/${id}`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Artisan reçu:', data);
            setArtisan(data.data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }, [id]);

    // Gérer les changements dans le formulaire
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Envoyer le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({
                ...formData,
                artisan_id: id
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse:', data);
            setSuccessMessage('Votre message a été envoyé avec succès !');
            // Réinistialiser le formulaire
            setFormData({
                name:'',
                email:'',
                subject:'',
                message:''
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    };

    // Si l'artisan n'est pas encore chargé
    if (!artisan) {
        return <div className='container py-5'>Chargement...</div>;
    }

    return (
        <main className='flex-grow-1'>
            <div className='container py-5'>
                <div className='row'>

                    {/* Colonne gauche: Infos artisan */}
                    <div className='col-lg-8 mb-4'>

                        {/* Avatar de l'artisan */}
                        <div className='mb-4'>
                            <i
                                className='bi bi-person-circle'
                                style={{ fontSize: '8rem', color: '#384050'}}
                            ></i>
                        </div>

                        {/* Nom */}
                        <h1 className='mb-3'>{artisan.name}</h1>

                        {/* Note */}
                        <div className='mb-3'>
                            <StarRating note={artisan.note} />
                        </div>

                        {/* Spécialité */}
                        <p className='mb-2'>
                            <strong>Spécialité: </strong>{artisan.speciality.name}
                        </p>

                        {/* Localisation */}
                        <p className='mb-3'>
                            <i className='bi bi-geo-alt'></i> {artisan.location}
                        </p>

                        {/* Site web */}
                        {artisan.website && (
                            <p className='mb-3'>
                                <i className='bi bi-globe'></i>{' '}
                                <a href={artisan.website} target='_blank' rel='noopener noreferrer'>
                                    {artisan.website}
                                </a>
                            </p>
                        )}

                        {/* A propos */}
                        {artisan.about && (
                            <div className='mt-4'>
                                <h2 className='mb-3'>À propos</h2>
                                <p>{artisan.about}</p>
                            </div>
                        )}
                    </div>

                    {/* Colonne droite: Formulaire de contact */}
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='mb-4'>Contacter {artisan.name}</h3>

                                {/* Message succès */}
                                {successMessage && (
                                    <div className='alert alert-success'>
                                        {successMessage}
                                    </div>
                                )}

                                {/* Formulaire */}
                                <form onSubmit={handleSubmit}>

                                    {/* Nom */}
                                    <div className='mb-3'>
                                        <label htmlFor='name' className='form-label'>Nom *</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className='mb-3'>
                                        <label htmlFor='email' className='form-label'>Email *</label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Objet */}
                                    <div className='mb-3'>
                                        <label htmlFor='subject' className='form-label'>Objet *</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='subject'
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className='mb-3'>
                                        <label htmlFor='message' className='form-label'>Message *</label>
                                        <textarea
                                            className='form-control'
                                            id='message'
                                            name='message'
                                            rows='4'
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Bouton */}
                                    <button type='submit' className='btn btn-submit w-100'>
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ArtisanDetailPage;