// Importations
const express       = require('express');
const router        = express.Router();
const categoryController    = require('../controllers/categoryController');
const { apiKeyAuth }        = require('../middleware/auth');

// Toutes les routes nécessitent une authentification par clé API
router.use(apiKeyAuth);

// GET /api/categories - Récupère toutes les catégories
router.get('/', categoryController.getAllCategories);

// Exportation du routeur
module.exports = router;
