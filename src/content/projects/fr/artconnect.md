---
title: "ArtConnect"
description: "Plateforme marketplace d'art en ligne avec fonctionnalités temps réel et système de paiement intégré"
tags: ["Vue.js", "ASP.NET Core", "SignalR", "Tailwind CSS", "Entity Framework", "WebSockets"]
featured: true
date: 2024-01-15
---

## À propos du projet

ArtConnect est une plateforme marketplace complète permettant aux artistes de vendre leurs œuvres en ligne et aux collectionneurs d'acheter des pièces d'art. Le projet combine une interface utilisateur moderne avec un backend robuste et des fonctionnalités temps réel pour offrir une expérience utilisateur fluide et interactive.

## Fonctionnalités principales

- **Marketplace d'art**: Catalogue complet d'œuvres d'art avec système de recherche et filtrage
- **Authentification sécurisée**: Système d'authentification JWT avec gestion des rôles (artistes, collectionneurs, administrateurs)
- **Messagerie temps réel**: Communication instantanée entre acheteurs et vendeurs via WebSockets
- **Notifications en direct**: Système de notifications push pour les nouvelles offres, messages et mises à jour
- **Paiement intégré**: Intégration de solutions de paiement (Coinbase Commerce, Stripe) pour des transactions sécurisées
- **Gestion de profil**: Espaces personnalisés pour artistes et collectionneurs

## Stack technique

### Frontend
- **Vue.js 3** avec Composition API
- **Vite** pour le build et le développement rapide
- **Tailwind CSS** pour le design moderne et responsive
- **Vuex** pour la gestion d'état centralisée
- **Vue Router** pour la navigation
- **Axios** pour les requêtes HTTP
- **Pusher-JS** pour les WebSockets côté client

### Backend
- **ASP.NET Core 8.0** (C#)
- **Entity Framework Core** comme ORM
- **SignalR** pour la communication temps réel
- **SQLite/MySQL** pour le stockage de données
- **JWT Authentication** pour la sécurité
- **Swagger** pour la documentation API

### Intégrations
- **Coinbase Commerce** pour les paiements en crypto-monnaie
- **Stripe** pour les paiements par carte
- **Pusher** pour les WebSockets et notifications temps réel

## Architecture & Défis techniques

### Architecture Full-Stack
Le projet suit une architecture client-serveur découplée avec :
- Frontend SPA (Single Page Application) en Vue.js
- API REST backend en ASP.NET Core
- Communication temps réel via SignalR et Pusher
- Base de données relationnelle avec migrations Entity Framework

### Défis relevés

**1. Communication temps réel bidirectionnelle**
Mise en place d'un système de WebSockets robuste permettant :
- Messagerie instantanée entre utilisateurs
- Notifications en temps réel
- Mise à jour live des statuts d'œuvres (disponible, vendue, réservée)

**2. Intégration de paiements multiples**
Implémentation de deux systèmes de paiement différents avec :
- Gestion des webhooks pour la confirmation de paiement
- Sécurisation des transactions
- Gestion des erreurs et des remboursements

**3. Gestion d'état complexe**
Utilisation de Vuex pour gérer :
- L'authentification et les sessions utilisateur
- Le panier d'achat
- Les conversations en temps réel
- Le cache des données

**4. Sécurité et authentification**
- Implémentation de JWT avec refresh tokens
- Protection contre les injections SQL via Entity Framework
- Validation des données côté client et serveur
- Gestion des autorisations basée sur les rôles

## Résultats & Impact

Ce projet a permis de développer une plateforme marketplace moderne, en respectant des contraintes de délais et de spécifications professionnelles. La solution livrée offre une expérience utilisateur fluide et interactive, facilitant la connexion entre artistes et collectionneurs tout en assurant la sécurité des transactions.

Les compétences développées incluent :
- Développement full-stack avec des technologies modernes
- Architecture d'applications temps réel
- Intégration de services tiers (paiement, WebSockets)
- Travail en équipe sur un projet d'envergure
- Communication avec un client professionnel
