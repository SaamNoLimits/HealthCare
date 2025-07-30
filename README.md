# 🏥 Portail Patient - Carnet de Suivi Médical Digitalisé

Un portail patient moderne et intuitif permettant aux patients de consulter leur historique médical, visualiser leurs rendez-vous et accéder à des recommandations de santé personnalisées.

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- **Bienvenue personnalisée** avec le prénom du patient
- **Aperçu du dernier rendez-vous** médical (type, date, médecin)
- **Recommandation santé du jour** (ex: "Buvez 1,5L d'eau", "Faites 30 minutes de marche")
- **Statistiques rapides** : prochains RDV, traitements actifs, allergies, recommandations
- **Actions rapides** pour accéder aux différentes sections

### 📅 Gestion des rendez-vous (`/rendez-vous`)
- **Liste complète** des rendez-vous passés et à venir
- **Informations détaillées** : médecin, spécialité, date, lieu, statut
- **Filtres intelligents** : "Tous", "À venir", "Passés"
- **Interface intuitive** avec compteurs dynamiques

### 📋 Dossier médical (`/dossier`)
- **Antécédents médicaux** avec historique complet
- **Allergies** et contre-indications
- **Traitements en cours** avec statuts
- **Composants réutilisables** pour chaque section

### 💡 Recommandations santé (`/recommandations`)
- **Conseils médicaux personnalisés** (mockés)
- **Catégories** : Sommeil, Nutrition, Activité physique
- **Filtres par catégorie** avec onglets interactifs
- **Interface moderne** avec cartes détaillées

### 🎨 Interface utilisateur
- **Design responsive** adapté à tous les écrans
- **Mode sombre/clair** avec toggle automatique
- **Animations fluides** à l'arrivée des composants
- **Thème médical** avec couleurs appropriées

## 🛠️ Stack technique

- **Next.js 14+** avec App Router
- **TypeScript** pour la sécurité du typage
- **Tailwind CSS** pour le styling
- **Context API** pour la gestion du thème global
- **Axios** pour les requêtes HTTP (préparé pour l'API)
- **Classnames** pour la gestion conditionnelle des classes CSS

## 📁 Structure du projet

```
Portail-Patient-main/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── rendez-vous/       # Gestion des RDV
│   ├── dossier/           # Dossier médical
│   └── recommendations/   # Recommandations santé
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AppointmentCard.tsx
│   ├── HealthTipCard.tsx
│   └── FIlterTabs.tsx
├── context/              # Context API
│   └── ThemeContext.tsx
├── data/                 # Données mockées
│   ├── rendezvous.json
│   ├── dossier.json
│   └── recommendations.json
└── public/              # Assets statiques
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd Portail-Patient-main

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build pour la production
npm run start    # Démarre le serveur de production
npm run lint     # Vérification du code
```

## 📊 Données mockées

Le projet utilise des fichiers JSON pour simuler les réponses d'une API :

- **`rendezvous.json`** : Rendez-vous médicaux avec statuts
- **`dossier.json`** : Informations patient, antécédents, traitements
- **`recommendations.json`** : Conseils santé par catégorie

## 🎯 Objectifs pédagogiques atteints

✅ **Routes dynamiques** dans Next.js avec App Router  
✅ **State local et global** via Context API  
✅ **Composants réutilisables** (AppointmentCard, HealthTipCard, etc.)  
✅ **Fetchs simulés** avec fichiers JSON  
✅ **Approche modulaire** dans le design des pages  
✅ **Dark mode** avec toggle automatique  
✅ **Animations** à l'arrivée des composants  
✅ **Thème global** via Context API  

## 🎨 Design et UX

- **Interface médicale** avec couleurs appropriées (bleu médical)
- **Responsive design** pour mobile, tablette et desktop
- **Accessibilité** avec focus states et contrastes appropriés
- **Animations subtiles** pour une expérience fluide
- **Mode sombre** pour le confort visuel

## 🔧 Configuration technique

### Tailwind CSS
Configuration personnalisée avec couleurs médicales :
- `medical-primary`: #2563eb
- `medical-secondary`: #06b6d4
- `medical-accent`: #10b981
- `medical-warning`: #f59e0b
- `medical-error`: #ef4444

### Next.js 14+
- App Router pour les nouvelles fonctionnalités
- Optimisation automatique des images
- Support TypeScript natif
- Configuration PostCSS pour Tailwind

## 📱 Fonctionnalités avancées

### Gestion des rendez-vous
- Filtrage par statut (passé/à venir)
- Tri par date
- Compteurs dynamiques
- Interface intuitive

### Dossier médical
- Sections modulaires (antécédents, allergies, traitements)
- Composants réutilisables
- Affichage structuré des informations

### Recommandations santé
- Catégorisation (sommeil, nutrition, activité)
- Filtres par priorité
- Interface avec onglets

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur :
- Vercel (recommandé pour Next.js)
- Netlify
- AWS Amplify
- Tout hébergeur supportant Node.js

## 📝 Licence

Ce projet est développé dans le cadre d'un exercice pédagogique Next.js.

---

**Développé avec ❤️ pour améliorer l'expérience patient**
# HealthCare
