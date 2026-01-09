---
title: "Article 27"
description: "Système de gestion pour l'accès à la culture - Programme Article 27"
tags: ["Laravel", "PHP", "Vue.js", "MySQL", "Bootstrap", "PDF Generation"]
featured: false
date: 2023-11-10
---

## À propos du projet

Article 27 est un système de gestion développé pour faciliter l'accès à la culture dans le cadre du programme Article 27. Cette application web permet la gestion complète des demandes d'accès culturel, du suivi des bénéficiaires et de la génération de rapports pour les institutions culturelles partenaires.

Développé dans le cadre de SALTo (https://salto.helmo.be/), ce projet met en relation des étudiants avec de vrais clients pour fournir une expérience de développement authentique. Le client réel bénéficie d'une solution sur mesure répondant à ses besoins spécifiques en matière de gestion culturelle.

## Fonctionnalités principales

- **Gestion des bénéficiaires**: Enregistrement et suivi des personnes éligibles au programme Article 27
- **Traitement des demandes**: Workflow complet pour les demandes d'accès aux événements culturels
- **Gestion des partenaires**: Administration des lieux culturels et événements participants
- **Génération de documents**: Création automatique de bons, attestations et rapports PDF
- **Tableaux de bord et statistiques**: Visualisation des données avec graphiques (Lavacharts)
- **Export de données**: Génération de fichiers Excel pour l'analyse et le reporting
- **Codes-barres**: Génération de codes-barres pour le suivi des bons

## Stack technique

### Backend
- **Laravel 5.5** (Framework PHP)
- **PHP 7.2+**
- **MySQL** comme base de données
- **Eloquent ORM** pour l'accès aux données
- **Laravel Mix** pour la compilation des assets

### Frontend
- **Vue.js 2** pour les composants interactifs
- **Bootstrap 3** pour l'interface utilisateur
- **jQuery** pour les interactions DOM
- **JavaScript ES6**

### Bibliothèques et Packages
- **DomPDF**: Génération de documents PDF (bons, attestations, rapports)
- **Lavacharts**: Création de graphiques et visualisations de données
- **Maatwebsite Excel**: Import/export de fichiers Excel
- **Milon Barcode**: Génération de codes-barres pour le tracking
- **Laravel Debugbar**: Débogage et optimisation des performances

## Architecture & Défis techniques

### Architecture MVC Laravel
Le projet suit l'architecture MVC (Model-View-Controller) de Laravel avec :
- **Models**: Gestion des entités (Bénéficiaires, Demandes, Événements, Partenaires)
- **Controllers**: Logique métier et orchestration
- **Views**: Templates Blade avec composants Vue.js
- **Migrations**: Gestion du schéma de base de données
- **Seeders**: Données de test et d'initialisation

### Défis relevés

**1. Génération de Documents Complexes**
- Création de PDFs avec mise en forme personnalisée (logo, en-tête, pied de page)
- Génération dynamique de codes-barres intégrés aux documents
- Templates réutilisables pour différents types de documents
- Optimisation pour l'impression

**2. Workflow de Validation**
- Système de validation multi-étapes pour les demandes
- Gestion des états (en attente, approuvé, refusé, utilisé)
- Notifications par email aux différents acteurs
- Historique des modifications et traçabilité

**3. Reporting et Statistiques**
- Agrégation de données complexes (par période, par lieu, par type)
- Génération de graphiques interactifs avec Lavacharts
- Export Excel avec formatage et calculs automatiques
- Dashboard administrateur avec métriques clés

**4. Gestion des Utilisateurs**
- Système d'authentification Laravel avec rôles multiples
- Permissions granulaires (admin, gestionnaire, partenaire, consultation)
- Interface adaptée selon le profil utilisateur
- Sécurité et protection des données sensibles

## Résultats & Impact

Ce projet a permis de livrer une solution fonctionnelle à un client réel dans le secteur culturel, facilitant la gestion quotidienne du programme Article 27 et améliorant l'accessibilité à la culture pour les bénéficiaires.

L'expérience acquise dans le cadre du cours SALTo a apporté :
- Compréhension des enjeux métier d'un secteur spécifique (culture et social)
- Gestion de projet avec un vrai client et des contraintes réelles
- Développement d'une application de gestion complète avec Laravel
- Génération de documents et rapports professionnels
- Collaboration et communication dans un contexte professionnel

Le système continue d'être utilisé par le client, démontrant la viabilité et l'utilité de la solution développée.
