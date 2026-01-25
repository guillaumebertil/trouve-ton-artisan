// Importations
const { body, validationResult } = require('express-validator');

/**
 * Règles de validation pour le formulaire de contact
 */
exports.contactValidationRules = [
    body('name')
        .trim()
        .notEmpty().withMessage('Le nom est requis')
        .isLength({ min: 2, max:100 }).withMessage('Le nom doit contenir entre 2 et 100 caractères')
        .escape(),  // Échappe les caractères HTML pour éviter XSS

    body('email')
        .trim()
        .notEmpty().withMessage('L\'email est requis')
        .isEmail().withMessage('Email invalide')
        .normalizeEmail(),

    body('message')
        .trim()
        .notEmpty().withMessage('Le message est requis')
        .isLength({ min: 10, max: 2000 }).withMessage('Le message doit contenir entre 10 et 2000 caractères')
        .escape(),

    body('artisan_id')
        .isInt({ min: 1 }).withMessage('ID artisan invalide')
        .toInt()
];

/**
 * Middleware pour vérifier les résultats de validation
 */
exports.validate  = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }

    next();
};