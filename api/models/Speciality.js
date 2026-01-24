// Importations
const { DataTypes } = require('sequelize');
const sequelize     = require('../config/database');

/**
 * Modèle Speciality
 * Représente une spécialité d'artisan (ex: Boucher, Boulanger, Chocolatier...)
 */
const Speciality = sequelize.define('Speciality', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // Identifiant unique de la spécialité
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        },
        // Nom de la spécialité
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        },
        // Référence vers la catégorie parente
    }
}, {
    tableName: 'specialites',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Exportation
module.exports = Speciality;