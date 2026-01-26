// Importation
const Category   = require('./Category');
const Speciality = require('./Speciality');
const Artisan    = require('./Artisan');

// Relations

// Une catégorie possède plusieurs spécialités
Category.hasMany(Speciality, { foreignKey: 'category_id', as: 'specialities' });
Speciality.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

// Une spécialité possède plusieurs artisans
Speciality.hasMany(Artisan, { foreignKey: 'specialite_id', as: 'artisans' });
Artisan.belongsTo(Speciality, { foreignKey: 'specialite_id', as: 'speciality' });

module.exports = {
    Category,
    Speciality,
    Artisan
};
