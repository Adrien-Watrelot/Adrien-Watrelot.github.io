---
title: "MindfulSpace"
description: "Application web de bien-être mental et pleine conscience avec architecture monorepo et CI/CD complet"
tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Prisma", "TypeScript", "GitLab CI/CD"]
featured: true
date: 2025-01-05
---

## À propos du projet

MindfulSpace est une application web complète dédiée au bien-être mental et à la pleine conscience. La plateforme permet aux utilisateurs de suivre leurs habitudes de bien-être quotidiennes, d'accéder à des ressources de méditation guidée, de consulter du contenu éducatif et d'interagir avec une communauté bienveillante.

Ce projet met l'accent sur les bonnes pratiques architecturales, l'automatisation et le déploiement continu en production.

## Fonctionnalités principales

- **Suivi d'habitudes**: Tracking quotidien du sommeil, de l'activité physique et de la méditation avec visualisations graphiques
- **Méditations guidées**: Bibliothèque de sessions de méditation avec lecture audio et gestion de favoris
- **Ressources éducatives**: Articles, vidéos et podcasts sur le bien-être mental et la pleine conscience
- **Communauté interactive**: Forum et groupes de discussion pour partager expériences et conseils
- **Tableau de bord personnalisé**: Vue d'ensemble des progrès et statistiques personnelles
- **Système de recommandations**: Suggestions de contenu basées sur les préférences utilisateur

## Stack technique

### Frontend
- **Next.js 14** (React 18) avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le design moderne
- **React Query** pour la gestion du cache et des requêtes
- **Recharts** pour les visualisations de données
- **Next-Auth** pour l'authentification

### Backend
- **NestJS** avec architecture modulaire
- **Prisma ORM** pour l'accès aux données
- **PostgreSQL 16** (Alpine) comme base de données
- **Swagger** pour la documentation API
- **Jest** pour les tests unitaires et d'intégration
- **TypeDoc** pour la documentation du code

### DevOps & Infrastructure
- **Docker Compose** pour l'orchestration multi-service
- **GitLab CI/CD** avec pipeline automatisé
- **Traefik** comme reverse proxy et gestion HTTPS
- **pnpm Workspaces** pour la gestion du monorepo
- **Debian 12** comme OS cible (VPS)

### Environnements
- **Développement**: Docker Compose local avec hot reload
- **Staging**: Déploiement automatique sur `staging.mindfulspace.be`
- **Production**: Déploiement via tags Git sur `mindfulspace.be`

## Architecture & Défis techniques

### Architecture Monorepo
Le projet suit une architecture monorepo bien structurée :

<div class="code-terminal" style="margin: 1.5rem 0;">
  <div class="code-terminal-header" style="background: var(--color-background); border-bottom: 1px solid var(--color-border); padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <div class="code-terminal-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></div>
    <div class="code-terminal-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></div>
    <div class="code-terminal-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #22c55e;"></div>
    <span style="font-size: 0.875rem; color: var(--color-text-muted); margin-left: 0.5rem;">Structure du projet</span>
  </div>
  <div class="code-terminal-body" style="padding: 1.5rem; font-size: 0.875rem; line-height: 1.7; font-family: 'Courier New', Monaco, monospace;">
    <div class="code-line"><span class="code-folder">mindfulspace/</span></div>
    <div class="code-line"><span class="code-tree">├──</span> <span class="code-folder">apps/</span></div>
    <div class="code-line"><span class="code-tree">│   ├──</span> <span class="code-folder">frontend-next/</span>    <span class="code-comment">→ Interface utilisateur Next.js</span></div>
    <div class="code-line"><span class="code-tree">│   └──</span> <span class="code-folder">api-nest/</span>         <span class="code-comment">→ API NestJS</span></div>
    <div class="code-line"><span class="code-tree">├──</span> <span class="code-folder">packages/</span>             <span class="code-comment">→ Librairies partagées</span></div>
    <div class="code-line"><span class="code-tree">└──</span> <span class="code-folder">docs/</span>                 <span class="code-comment">→ Documentation technique</span></div>
  </div>
</div>

Cette organisation permet :
- Partage de code entre frontend et backend
- Versioning cohérent
- Build et déploiement optimisés
- Documentation centralisée

### Pipeline CI/CD Complet

**Workflow GitFlow adapté** :
- Branches `feature/*` → `dev` : Build check automatique
- Merge `dev` → `main` : Déploiement staging automatique
- Tag `vX.Y.Z` sur `main` : Déploiement production

**Étapes du pipeline** :
1. Tests unitaires et d'intégration
2. Linting et vérification des types (TypeScript)
3. Build des images Docker
4. Push vers GitLab Container Registry
5. Déploiement automatisé sur VPS via SSH
6. Health checks post-déploiement

### Défis relevés

**1. Architecture Monorepo avec pnpm**
- Configuration de workspaces pour partager dépendances
- Scripts npm cross-packages
- Gestion des versions et des builds

**2. Déploiement Multi-Environnement**
- Configuration de Traefik pour le reverse proxy
- Gestion des certificats SSL automatiques (Let's Encrypt)
- Variables d'environnement par environnement
- Zero-downtime deployment avec Docker

**3. Base de données et Migrations**
- Schéma Prisma pour modélisation des données
- Migrations automatisées dans le pipeline CI/CD
- Seeds de données pour dev et testing
- Backup et restauration

**4. Monitoring et Observabilité**
- Logs centralisés
- Health checks pour tous les services
- Métriques de performance
- Alertes en cas d'erreur

## Résultats & Impact

MindfulSpace représente un projet de production complet avec :
- **Architecture professionnelle** : Monorepo, microservices, séparation des préoccupations
- **Qualité du code** : TypeScript strict, tests automatisés, linting
- **Déploiement moderne** : CI/CD complet, conteneurisation, multi-environnements
- **Documentation exhaustive** : ADR (Architecture Decision Records), guides techniques, documentation API

Le projet démontre la maîtrise de :
- L'architecture logicielle moderne (Clean Architecture, DDD patterns)
- Les pratiques DevOps (Docker, CI/CD, Infrastructure as Code)
- Le développement full-stack avec TypeScript
- La collaboration en équipe avec Git (Gitflow, code reviews)
- La gestion de projet agile

Ce projet a été mené avec un niveau d'exigence professionnel, incluant des déploiements en staging et production avec des URLs publiques accessibles.
