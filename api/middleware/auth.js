// Importations
require('dotenv').config();

/**
 * Middleware d'authentification par clé API
 * Vérifie que la requête contient une clé API valide dans les headers
 */
exports.apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: 'Clé API manquante. Accès non autorisé'
        });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({
            success: false,
            message: 'Clé API invalide. Accès refusé.'
        });
    }

    // Clé valide, continuer
    next();
};