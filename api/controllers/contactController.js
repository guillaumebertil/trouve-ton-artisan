// Importations
const { Artisan } = require('../models');

/**
 * Traite l'envoi du formulaire de contact
 * Simule l'envoi d'un email
 */
exports.sendContactEmail = async (req, res, next) => {
    try {
        const { name, email, subject, message, artisan_id } = req.body;

        // Récupération des informations de l'artisan
        const artisan = await Artisan.findByPk(artisan_id);

        if (!artisan) {
            return res.status(404).json({
            success: false,
            message: 'Artisan non trouvé'
            });
        }

        // Simule l'envoi de l'email
        console.log('Nouveau message reçu');
        console.log(`Pour: ${artisan.name}, ${artisan.email}`);
        console.log(`De: ${name}, ${email}`);
        console.log(`Objet: ${subject}`);
        console.log(`Message: ${message}`);

        res.status(200).json({
            success: true,
            message: 'Votre message a été envoyé avec succès. L\'artisan vous répondra sous 48h.'
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        next(error);
    }
};