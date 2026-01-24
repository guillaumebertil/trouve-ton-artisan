// Importations
const { DataTypes } = require('sequelize');
const sequelize     = require('../config/database');

/**
 * Modèle Category
 * Représente une catégorie d'artisans (ex: Alimentation, Bâtiment, Fabrication...)
 */
const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // Idenfiant unique de la catégorie
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        },
        // Nom unique de la catégorie
    }
}, {
    tableName: 'categories',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Exportation
module.exports = Category;