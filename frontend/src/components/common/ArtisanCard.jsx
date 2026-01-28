import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

/**
 * Card réutilisable pour afficher un artisan
 * Props:
 * - id: id de l'artisan
 * - name: nom de l'artisan ou de l'entreprise
 * - note: note sur 5
 * - speciality: nom de la spécialité
 * - location: localisation
 */
const ArtisanCard = ({ id, name, note, speciality, location }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/artisan/${id}`);
        // redirige vers la fiche complète
    };

    return (
        <div className='card' onClick={handleClick} style={{ cursor: 'pointer' }}>
            {/* Card Header */}
            <div className='card-header'>
                <h3>{name}</h3>
            </div>

            {/* Card Body */}
            <div className='card-body'>

                {/* Note */}
                <div className='rating mb-3'>
                    <StarRating note={note} />
                </div>

                {/* Spécialité */}
                <p><strong>Spécialité: </strong>{speciality}</p>

                {/* Localisation */}
                <p><i className='bi bi-geo-alt'></i>{location}</p>
            </div>
        </div>
    );
};

export default ArtisanCard;