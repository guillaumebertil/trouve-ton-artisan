// Importations
const { DataTypes } = require('sequelize');
const sequelize     = require('../config/database');

/**
 * Modèle Artisan
 * Représente un artisan enregistré dans la base de données
 */
const Artisan = sequelize.define('Artisan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // Identifiant unique de l'artisan
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: true
        },
        // Nom complet de l'artisan ou de l'entreprise
    },
    specialite_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'specialites',
            key: 'id'
        },
        // Référence vers la spécialité de l'artisan
    },
    note: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: true,
        validate: {
            min: 0,
            max: 5
        },
        // Note de l'artisan entre 0 et 5
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // Ville de l'artisan
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true,
        // Description de l'artisan
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
        // Email de l'artisan
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
            isUrl: true
        },
        // Site web de l'artisan
    },
    is_top_artisan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        // Indique si l'artisan fait parti des artisans mis en avant
    }
}, {
    tableName: 'artisans',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Exportation
module.exports = Artisan;