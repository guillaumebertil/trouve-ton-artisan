# Trouve ton Artisan

## Prérequis

- Node.js (v18 ou supérieur)
- npm
- MySQL

## Installation

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/guillaumebertil/trouve-ton-artisan
cd trouve-ton-artisan
```

### 2. Base de données

Créer la base de données MySQL :

```sql
CREATE DATABASE trouve_ton_artisan;
```

Importer les scripts SQL :

```bash
mysql -u root -p trouve_ton_artisan < database/create_tables.sql
mysql -u root -p trouve_ton_artisan < database/insert_data.sql
```

### 3. Backend

```bash
cd backend
npm install
```

Créer un fichier `.env` :

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouve_ton_artisan
DB_PORT=3306
PORT=5000
NODE_ENV=development
API_KEY=votre_clé_api
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=votre_email@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe
```

### 4. Frontend

```bash
cd ../frontend
npm install
```

Créer un fichier `.env` :

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_API_KEY=votre_clé_api
```

## Lancement

### Démarrer le backend :

```bash
cd backend
npm run dev
```

### Démarrer le frontend :

```bash
cd frontend
npm start
```

Le site est accessible sur `http://localhost:3000`