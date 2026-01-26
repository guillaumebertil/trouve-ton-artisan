// Importations
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config;

const sequelize = require('./config/database');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// ========================================
// Configuration de sécurité
// ========================================

// Protection des headers HTTP
app.use(helmet());

// Configuration CORS
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'x-api-key'],
    credentials: true
};
app.use(cors(corsOptions));

// Rate limiting global
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutes
    max: 100,                   // 100 requêtes max par IP
    message: {
        success: false,
        message: 'Trop de requêtes, veuillez réessayer plus tard'
    }
});
app.use('/api/', limiter);

// Parsing des requêtes
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ========================================
// ROUTES
// ========================================

// Route de santé (health check)
// Sert à vérifier que l'API fonctionne correctement et est accessible.
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API opérationnelle',
        timestamp: new Date().toISOString()
    });
});

// Routes API
const categoryRoutes    = require('./routes/categoryRoutes');
const artisanRoutes     = require('./routes/artisanRoutes');
const contactRoutes     = require('./routes/contactRoutes');

app.use('/api/categories', categoryRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

// ========================================
// Gestion des erreurs
// ========================================

// Route non trouvée
app.use(notFound);

// Gestionnaire d'erreurs global
app.use(errorHandler);

// ========================================
// Démarrage du serveur
// ========================================

const startSever = async () => {
    try {
        // Test de connexion à la base de données
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie');

        // Synchronisation des modèles (en développement uniquement)
        if (process.env.NODE_ENV === 'development') {
            await sequelize.sync({ alter: false });
            console.log('Modèles synchronisés');
        }

        // Démarrage du serveur
        app.listen(PORT, () => {
            console.log(`Serveur démarré sur le port ${PORT}`);
            console.log(`Environnement : ${process.env.NODE_ENV || 'development'}`);
            console.log(`API disponible sur http://localhost:${PORT}/api`);
        });

    } catch (error) {
        console.error(`Erreur au démarrage du serveur: ${error}`);
        process.exit(1);
    }
};

startSever();

module.exports = app;