// Importations
const { Artisan, Speciality, Category } = require('../models');
const { Op } = require('sequelize');

/**
 * Récupère tous les artisans avec leurs informations complètes
 */
exports.getAllArtisans = async(req, res, next) => {
    try {
        const artisans = await Artisan.findAll({
            include: [
                {
                    model: Speciality,
                    as: 'speciality',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: Category,
                            as: 'category',
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ],
            order: [['note', 'DESC']]
        });

        res.status(200).json({
            success: true,
            count: artisans.length,
            data: artisans
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Récupère un artisan par son ID
 */
exports.getArtisanById = async(req, res, next) => {
    try {
        const { id } = req.params;

        const artisan = await Artisan.findByPk(id, {
            include: [
                {
                    model: Speciality,
                    as: 'speciality',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: Category,
                            as: 'category',
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ]
        });

        if (!artisan) {
            return res.status(404).json({
                success: false,
                message: 'Artisan non trouvé'
            });
        }

        res.status(200).json({
            success: true,
            data: artisan
        })
    } catch (error) {
        next(error);
    }
};

/**
 * Récupère les artisans par catégorie
 */
exports.getArtisansByCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;

        const artisans = await Artisan.findAll({
            include: [
                {
                    model: Speciality,
                    as: 'speciality',
                    required: true,
                    where: { category_id: categoryId },
                    include: [
                        {
                            model: Category,
                            as: 'category',
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ],
            order: [['note', 'DESC']]
        });

        res.status(200).json({
            success: true,
            count: artisans.length,
            data: artisans
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Recherche d'artisans par nom
 */
exports.searchArtisans = async (req, res, next) => {
    try {
        const { name } = req.query;

        if (!name || name.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Le terme de recherche doit contenir au moins 2 caractères'
            });
        }

        const artisans = await Artisan.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            },
            include: [
                {
                    model: Speciality,
                    as: 'speciality',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: Category,
                            as: 'category',
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ],
            order: [['note', 'DESC']]
        });

        res.status(200).json({
            success: true,
            count: artisans.length,
            data: artisans
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Récupère les 3 meilleurs artisans (top artisans du mois)
 */
exports.getTopArtisans = async (req, res, next) => {
    try {
        const topArtisans = await Artisan.findAll({
            where: {
                is_top_artisan: true
            },
            include: [
                {
                    model: Speciality,
                    as: 'speciality',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: Category,
                            as: 'category',
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ],
            order: [['note', 'DESC']],
            limit: 3
        });

        res.status(200).json({
            success: true,
            count: topArtisans.length,
            data: topArtisans
        });
    } catch (error) {
        next(error);
    }
};