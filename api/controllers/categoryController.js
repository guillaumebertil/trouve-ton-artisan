// Importations
const { Category } = require('../models');

/**
 * Récupère toutes les catégories
 */
exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.findAll({
            attributes: ['id', 'name'],
            order: [['name', 'ASC']]
        });

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories
        });
    } catch (error) {
        next(error);
    }
};