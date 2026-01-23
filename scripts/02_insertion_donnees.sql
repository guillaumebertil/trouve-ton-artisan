-- ========================================
-- Trouve ton artisan
-- ========================================


-- ========================================
-- Script d'insertion de données
-- ========================================


-- ========================================
-- Insertion des données de la table CATEGORIES
-- ========================================
INSERT INTO categories (name) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');


-- ========================================
-- Insertion des données de la table SPECIALITES
-- ========================================
INSERT INTO specialites (name, category_id) VALUES
-- catégorie Alimentation, category_id = 1
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),

-- catégorie Bâtiment, category_id = 2
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),

-- catégorie Fabrication, category_id = 3
('Bijoutier', 3),
('Couturier', 3),
('Ferronier',3),

-- catégorie Services, category_id = 4
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);


-- ========================================
-- Insertion des données de la table ARTISANS
-- ========================================
INSERT INTO artisans (name, specialite_id, note, location, about, email, website, is_top_artisan) VALUES 
-- Alimentation
-- specialité Boucher, specialite_id = 1
-- Boucherie Dumont
('Boucherie Dumont', 1, 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', NULL, FALSE),

-- specialité Boulanger, specialite_id = 2
-- Au pain chaud
('Au pain chaud', 2, 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, TRUE),

-- specialité Chocolatier, specialite_id = 3
-- Chocolaterie Labbé
('Chocolaterie Labbé', 3, 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE),

-- spécialité Traiteur, specialite_id = 4
-- Traiteur Truchon
('Traiteur Truchon', 4, 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', False),


-- Bâtiment
-- spécialité Chauffagiste, specialite_id = 5
-- Orville Salmons
('Orville Salmons', 5, 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, TRUE),

-- spécialité Electricien, specialite_id = 6
-- Mont Blanc Electricité
('Mont Blanc Electricité', 6, 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE),

-- spécialité Menuisier, specialite_id = 7
-- Boutot & fils
('Boutot & fils', 7, 4.7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE),

-- spécialité Plombier, specialité_id = 8
-- Vallis Bellemare
('Vallis Bellemare', 8, 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE),


-- Fabrication
-- spécialité Bijoutier, specialite_id = 9
-- Claude Quinn
('Claude Quinn', 9, 4.2, 'Aix-les-Bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, FALSE),

-- spécialité Couturier, specialite_id = 10
-- Amitee Lécuyer
('Amitee Lécuyer', 10, 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE),

-- specialité Ferronier, specialite_id = 11
-- Ernest Carigan
('Ernest Carigan', 11, 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, FALSE),

-- Services
-- specialité Coiffeur, specialite_id = 12
-- Royden Charbonneau
('Royden Charbonneau', 12, 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, FALSE),

-- Leala Dennis
('Leala Dennis', 12, 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE),

-- C'est sup'hair
('C\'est sup\'hair', 12, 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE),

-- specialite Fleuriste, specialite_id = 13
-- Le monde des fleurs
('Le monde des fleurs', 13, 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE),

-- specialite Toiletteur, specialite_id = 14
-- Valérie Laderoute
('Valérie Laderoute', 14, 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, FALSE),

-- specialite Webdesign, specialite_id = 15
-- CM Graphisme
('CM Graphisme', 15, 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE);