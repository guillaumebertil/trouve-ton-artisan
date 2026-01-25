/**
 * Traite l'envoi du formulaire de contact
 */
exports.sendContactEmail = async (req, res, next) => {
    try {
        const { name, email, message, artisan_id } = req.body;

        // Récupération des informations de l'artisan
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
            message: 'Votre message a été envoyé avec succès. L\'artisan vous répondra sous 48h.'
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        next(error);
    }
};