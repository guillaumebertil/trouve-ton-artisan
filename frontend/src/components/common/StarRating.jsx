/**
 * Composant StarRating
 * Affiche une note sous forme d'étoiles (pleines, demi, ou vides)
 * selon la note de l'artisan
 * 
 * @param {number} note - Note de l'artisan
 */
const StarRating = ({ note }) => {
    // Tableau qui contiendra les icônes d'étoiles à afficher
    const stars = [];

    // Nombre d'étoiles pleines (partie entière de la note)
    const fullStars = Math.floor(note);

    // Indique s'il faut afficher une demi-étoile
    const hasHalfstar = note % 1 >= 0.5;

    // Boucle pour afficher exactement 5 étoiles
    for (let i = 1; i <= 5; i++) {
        // Si l’indice est inférieur ou égal au nombre d’étoiles pleines → étoile pleine
        if (i <= fullStars) {
            stars.push(<i key={i} className='bi bi-star-fill me-1 starRating'></i>);
        // Sinon, si c’est la prochaine étoile et qu’il y a une demi-étoile → demi-étoile
        } else if (i === fullStars + 1 && hasHalfstar) {
            stars.push(<i key={i} className='bi bi-star-half me-1 starRating'></i>);
        // Sinon → étoile vide
        } else {
            stars.push(<i key={i} className='bi bi-star me-1 starRating'></i>)
        }
    }

    // Retourne la liste d’étoiles sous forme de fragment React
    return <>{stars}</>
};

export default StarRating;