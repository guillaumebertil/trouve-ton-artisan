// Importations
const express       = require('express');
const router        = express.Router();
const artisanController = require('../controllers/artisanController');
const { apiKeyAuth }    = require('../middleware/auth');

// Toutes les routes nécessitent une authentification par clé API
router.use(apiKeyAuth);

// GET /api/artisans - Récupère tous les artisans
router.get('/', artisanController.getAllArtisans);

// GET /api/artisans/top - Récupère le top 3 des artisans
router.get('/top', artisanController.getTopArtisans);

// GET /api/artisans/search?name=... - Recherche des artisans par nom
router.get('/search', artisanController.searchArtisans);

// GET /api/artisans/category/:categoryId - Récupère les artisans d'une catégorie
router.get('/category/:categoryId', artisanController.getArtisansByCategory);

// GET /api/artisans/:id - Récupère un artisan par son ID
router.get('/:id', artisanController.getArtisanById);

// Exportation du routeur
module.exports = router;
