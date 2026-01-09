---
title: "Frysa"
description: "Système complet de traçabilité alimentaire pour glacier artisanal avec tests automatisés et API sécurisée"
tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "Laravel Dusk", "Laravel Sanctum"]
featured: false
date: 2023-12-15
---

## À propos du projet

Frysa est un système complet de traçabilité alimentaire développé pour un glacier artisanal, permettant la gestion de la traçabilité depuis les matières premières jusqu'aux produits finis et leur expédition. Cette application moderne utilise Laravel 8 avec des fonctionnalités avancées pour offrir une solution robuste et sécurisée conforme aux exigences réglementaires du secteur alimentaire.

Réalisé dans le cadre de SALTo (https://salto.helmo.be/), ce projet illustre la collaboration entre étudiants et clients réels. Le système répond aux besoins spécifiques d'un glacier avec des contraintes opérationnelles concrètes et des exigences de traçabilité strictes imposées par l'AFSCA (https://favv-afsca.be/fr).

## Fonctionnalités principales

- **Traçabilité complète**: Suivi des matières premières, transformation, production et expédition
- **Gestion des ingrédients**: Base de données des ingrédients avec informations nutritionnelles et allergènes
- **Suivi de production**: Enregistrement des lots de production avec compositions détaillées
- **Gestion des fournisseurs**: Administration des fournisseurs et suivi des réceptions
- **Tracking des réceptions**: Enregistrement des entrées de marchandises avec numéros de lot
- **Bons de livraison**: Génération de documents de livraison avec traçabilité complète
- **Gestion des emballages**: Suivi des contenants et emballages utilisés
- **Base clients**: Gestion de la clientèle professionnelle et particulière
- **API sécurisée**: Endpoints pour intégrations tierces avec authentification Laravel Sanctum

## Stack technique

### Backend
- **Laravel 8** (Framework PHP moderne)
- **PHP 7.4 / 8.0**
- **MySQL** comme base de données principale
- **Eloquent ORM** pour la gestion des données
- **Laravel Mix** pour la compilation des assets

### Frontend
- **Laravel Blade** pour les templates
- **Bootstrap** pour l'interface responsive
- **JavaScript moderne** (ES6+)
- **Axios** pour les requêtes AJAX

### Packages Laravel
- **Laravel Sanctum**: Authentification API avec tokens personnels
- **Laravel Dusk**: Tests automatisés du navigateur (E2E testing)
- **DomPDF**: Génération de PDFs (bons de livraison, fiches produits)
- **Laravel CORS**: Gestion du Cross-Origin Resource Sharing

### Tests & Qualité
- **PHPUnit**: Tests unitaires et d'intégration
- **Laravel Dusk**: Tests fonctionnels end-to-end
- **Factories & Seeders**: Génération de données de test
- **Feature Tests**: Tests des fonctionnalités métier

## Architecture & Défis techniques

### Architecture Laravel Moderne
Le projet utilise Laravel 8 avec ses fonctionnalités modernes :
- **Route Model Binding** pour simplifier les contrôleurs
- **Form Requests** pour la validation centralisée
- **Resources & Collections** pour les réponses API
- **Events & Listeners** pour le découplage

### Défis relevés

**1. Traçabilité Complète**
- Modélisation de la chaîne de traçabilité alimentaire
- Système de lots et numéros de traçabilité
- Relations complexes entre ingrédients, productions et livraisons
- Historique complet des transformations
- Conformité réglementaire (HACCP, normes alimentaires)

**2. Tests Automatisés avec Laravel Dusk**
- Configuration de l'environnement de tests navigateur
- Tests end-to-end du parcours utilisateur complet
- Tests de non-régression pour les fonctionnalités critiques
- Intégration dans le workflow de développement
- Screenshots automatiques en cas d'échec

**3. API Sécurisée avec Laravel Sanctum**
- Authentification par tokens pour les applications tierces
- Gestion des permissions et scopes d'API
- Rate limiting pour prévenir les abus
- Documentation des endpoints
- Versioning de l'API

**4. Gestion des Compositions Produits**
- Calcul automatique des compositions à partir des ingrédients
- Gestion des allergènes et information nutritionnelle
- Traçabilité des transformations et recettes
- Gestion des unités de mesure et conversions

**5. Performance et Optimisation**
- Eager loading pour éviter le problème N+1
- Cache des requêtes fréquentes
- Indexation de la base de données
- Optimisation des queries Eloquent
- Compression des assets frontend

**6. Génération de Documents**
- Bons de livraison avec informations de traçabilité
- Fiches techniques produits
- Étiquettes avec composition et allergènes
- Rapports de production et inventaires

## Résultats & Impact

Ce projet a fourni à un glacier artisanal un système de traçabilité moderne et fiable, améliorant significativement leur conformité réglementaire et facilitant leur gestion quotidienne. La digitalisation complète de la traçabilité permet un gain de temps considérable et une meilleure maîtrise des processus de production.

L'expérience SALTo a permis de développer :
- **Expertise Laravel avancée**: Utilisation de Laravel 8 avec ses fonctionnalités modernes
- **Culture du test**: Mise en place de tests automatisés (unitaires, intégration, E2E)
- **Sécurité API**: Implémentation d'une API RESTful sécurisée avec Sanctum
- **Compréhension métier**: Maîtrise des enjeux de traçabilité alimentaire
- **Qualité professionnelle**: Code maintenable et bien documenté
- **Gestion de projet réel**: Communication client, spécifications, livraisons

Le système est déployé et utilisé quotidiennement par le client, gérant efficacement leur traçabilité alimentaire de bout en bout. La présence de tests automatisés assure la stabilité et facilite les évolutions futures.
