# 🚀 Bibliothèque du CHAOS (avec neons) - API & Frontend 🔥

Bienvenue dans la **Bibliothèque du CHAOS**, un projet full-stack **Express / MySQL / Nginx**  
avec une **interface dynamique et glitchée** pour gérer des livres et leurs genres !

---

## 📌 **Fonctionnalités**
✅ CRUD complet des livres 📚  
✅ Gestion des genres 💂️  
✅ Filtrage des livres par genre 🎯  
✅ Interface dynamique ultra stylée avec **effets neon et animations futuristes** ✨  
✅ Architecture **Docker** pour un déploiement rapide et efficace 🐳

---

## 🏠 **Architecture du projet**
Le projet utilise **Docker Compose** avec la structure suivante :

📂 **Projet**  
├── 📂 `db/` ➡ Initialisation de la base de données  
├── 📂 `node-api/` ➡ Backend Express.js  
├── 📂 `frontend/` ➡ Frontend HTML/CSS/JS + Nginx  
├── 🐳 `docker-compose.yml` ➡ Configuration des conteneurs  
├── 📝 `README.md` ➡ Documentation

### 📦 **Conteneurs & Réseaux**
| Service    | Port Exposé  | Description |
|------------|------------|-------------|
| **db**     | _interne_   | Base de données MySQL (backend network) |
| **api**    | 3000        | Serveur Node.js Express (backend & frontend network) |
| **frontend** | 8080      | Interface utilisateur servie par Nginx |

### 🛠 **Volumes**
- `db_data` ➡ Stocke les données MySQL pour **éviter la perte des données** lors d’un restart.

### 🌐 **Réseaux**
- `backend_network` ➡ Privé, relie **API** et **DB** uniquement.
- `frontend_network` ➡ Public, relie **API** et **Frontend**.

---

## 🔥 **Routes API**
L’API backend est accessible via `http://localhost:8080/api/`

### 📚 **Livres (`/api/books`)**
| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/api/books` | Liste tous les livres 💖 |
| `GET` | `/api/books?genre=Cyberpunk` | Filtrer par genre 🎯 |
| `GET` | `/api/books/:id` | Récupérer un livre par ID 🔎 |
| `POST` | `/api/books` | Ajouter un nouveau livre ➕ |
| `PUT` | `/api/books/:id` | Modifier un livre ✏️ |
| `DELETE` | `/api/books/:id` | Supprimer un livre ❌ |

### 🎭 **Genres (`/api/genres`)**
| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/api/genres` | Liste tous les genres 💂️ |

---

## 🚀 **Lancer le projet**
### 🐳 **1⃣ Installer Docker & Docker Compose**
Si ce n’est pas fait, installe **Docker** & **Docker Compose** :
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Vérifie l’installation avec :
  ```bash
  docker -v
  docker-compose -v
  ```

### 📆 **2⃣ Lancer tous les services**
Dans le dossier du projet, exécute :
```bash
docker-compose up -d
```
**Attends quelques secondes** le temps que la base de données soit prête.

### 🌍 **3⃣ Accéder à l’interface**
🔗 Ouvre **[http://localhost:8080](http://localhost:8080)** pour voir le **frontend glitché de FOU** 🌆


---

## 🛡 **Arrêter & Nettoyer**
### **Arrêter les services**
```bash
docker-compose down
```
### **Nettoyer les volumes (⚠️ Supprime toutes les données)**
```bash
docker-compose down -v
```

--- 

