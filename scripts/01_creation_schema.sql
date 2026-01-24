-- ========================================
-- Base de données "Trouve un artisan"
-- ========================================


-- ========================================
-- Script de création de la base de données
-- ========================================

-- Supprimer la base si elle existe déjà
DROP DATABASE IF EXISTS trouve_ton_artisan;

-- Création de la base de données
CREATE DATABASE trouve_ton_artisan
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Utiliser la base qui vient d'être créée
USE trouve_ton_artisan;


-- ========================================
-- Script de création des tables
-- ========================================

-- ========================================
-- Table 1 : CATEGORIES 
-- ========================================
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ========================================
-- Table 2 : SPECIALITES
-- ========================================
DROP TABLE IF EXISTS specialites;

CREATE TABLE specialites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- clé étrangère vers categories
    CONSTRAINT fk_specialite_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        -- Supprime automatiquement les enregistrements enfants si le parent est supprimé
        ON DELETE CASCADE
        -- Met à jour automatiquement la clé étrangère si la clé primaire change
        ON UPDATE CASCADE,

    -- Empêche les doublons de spécialité dans une même catégorie
    UNIQUE KEY unique_speciality_per_category (name, category_id)
) ENGINE=InnoDB;

-- ========================================
-- Table 3 : ARTISANS
-- ========================================
DROP TABLE IF EXISTS artisans;

CREATE TABLE artisans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    specialite_id INT NOT NULL,
    note DECIMAL(2,1) CHECK (note >= 0 AND note <= 5),
    location VARCHAR(255) NOT NULL,
    about TEXT,
    email VARCHAR(255) NOT NULL UNIQUE,
    website VARCHAR(255),
    is_top_artisan BOOLEAN DEFAULT FALSE,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- clé étrangère
    CONSTRAINT fk_artisan_specialite
        FOREIGN KEY (specialite_id)
        REFERENCES specialites(id)
        -- Empêche la suppression d'une spécialité si des artisans y sont encore rattachés
        ON DELETE RESTRICT
        -- Met à jour automatiquement la clé étrangère si la clé primaire change
        ON UPDATE CASCADE,

    INDEX idx_speciality (specialite_id),
    INDEX idx_top_artisan (is_top_artisan),
    INDEX idx_name (name)
) ENGINE=InnoDB;