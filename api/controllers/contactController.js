const { Artisan }   = require('../models');
const emailService  = require('../utils/emailService');

exports.sendContactEmail = async (req, res, next) => {
    try {
        const { name, email, message, artisan_id } = req.body;

        // Vérification des champs obligatoires
        if (!name || !email || !message || !artisan_id) {
            return res.status(400).json({
                success: false,
                message: 'Tous les champs sont obligatoires'
            });
        }

        // Récupération de l'artisan
        const artisan = await Artisan.findByPk(artisan_id);
        if (!artisan) {
            return res.status(404).json({
                success: false,
                message: 'Artisan non trouvé'
            });
        }

        // Génération automatique du sujet
        const subject = `Message de ${name} pour l'artisan ${artisan.name}`;

        // Envoi de l'email
        await emailService.sendContactEmail(
            { name, email, subject, message },
            artisan
        );

        res.status(200).json({
            success: true,
            message: "Votre message a été envoyé avec succès. L'artisan vous répondra sous 48h."
        });

    } catch (error) {
        next(error);
    }
};