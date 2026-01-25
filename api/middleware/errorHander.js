/**
 * Middleware de gestion des erreurs
 */
exports.errorHandler = (err, req, res, next) => {
    console.error('Erreur:', err);

    // Erreur de validation Sequelize
    if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({
            success: false,
            message: 'Erreur de validation',
            errors: err.errors.map(e => ({
                field: e.path,
                message: e.message
            }))
        });
    }

    // Erreur de contrainte unique Sequelize
    if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({
            success: false,
            message: 'Cette ressource existe déjà'
        });
    }

    // Erreur de connexion à la base de données
    if (err.name === 'SequelizeConnectionError') {
        return res.status(503).json({
            success: false,
            message: 'Erreur de connexion à la base de données'
        });
    }

    // Erreur par défaut
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Erreur interne du serveur'
    });
};

/**
 * Middleware pour les routes non trouvées (404)
 */
exports.notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route non trouvée'
    });
};