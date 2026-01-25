// Importations
const express       = require('express');
const router        = express.Router();
const rateLimit     = require('express-rate-limit');
const contactController = require('../controllers/contactController');
const { apiKeyAuth }    = require('../middleware/auth');
const { contactValidationRules, validate } = require('../middleware/validator');

/**
 * Routeur pour le formulaire de contact
 * 
 * Ce routeur gère l'envoi de messages aux artisans.
 * Sécurité et règles :
 * - Vérification de la clé API pour toutes les requêtes
 * - Limite stricte du nombre de messages pour éviter le spam
 * - Validation complète des champs du formulaire
 */

// Limiteur de requêtes strict : max 5 messages par heure
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,   // 1 heure
    max: 5,                     // Maximum 5 envois par utilisateur
    message: {
        success: false,
        message: 'Trop de messages envoyés, veuillez réessayer plus tard'
    }
});

// POST /api/contact - Traite l'envoi du formulaire de contact
router.post(
    '/',
    apiKeyAuth,              // Vérifie la clé API
    contactLimiter,          // Limite le nombre d'envois pour éviter le spam
    contactValidationRules,  // Applique les règles de validation des champs
    validate,                // Vérifie si le formulaire est valide
    contactController.sendContactEmail  // Envoie l'email à l'artisan
);

// Exportation du routeur
module.exports = router;
