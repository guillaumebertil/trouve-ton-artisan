require('dotenv').config();
const sequelize = require('./config/database');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✓ Connexion à la base de données réussie');
        
        // Tester les modèles
        const { Category, Speciality, Artisan } = require('./models');
        
        // Compter les enregistrements
        const categoriesCount = await Category.count();
        const specialitiesCount = await Speciality.count();
        const artisansCount = await Artisan.count();
        
        console.log(`✓ ${categoriesCount} catégories trouvées`);
        console.log(`✓ ${specialitiesCount} spécialités trouvées`);
        console.log(`✓ ${artisansCount} artisans trouvés`);
        
        await sequelize.close();
        console.log('✓ Connexion fermée');
        
    } catch (error) {
        console.error('✗ Erreur:', error);
    }
}

testConnection();