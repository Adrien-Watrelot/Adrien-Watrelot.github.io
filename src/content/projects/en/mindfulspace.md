---
title: "MindfulSpace"
description: "Mental wellness and mindfulness web application with monorepo architecture and complete CI/CD pipeline"
tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Prisma", "TypeScript", "GitLab CI/CD"]
featured: true
date: 2025-01-05
---

## About the Project

MindfulSpace is a comprehensive web application dedicated to mental wellness and mindfulness. The platform enables users to track their daily wellness habits, access guided meditation resources, browse educational content, and interact with a supportive community.

This project emphasizes architectural best practices, automation, and continuous deployment to production.

## Key Features

- **Habit Tracking**: Daily tracking of sleep, physical activity, and meditation with graphical visualizations
- **Guided Meditations**: Library of meditation sessions with audio playback and favorites management
- **Educational Resources**: Articles, videos, and podcasts about mental wellness and mindfulness
- **Interactive Community**: Forum and discussion groups to share experiences and advice
- **Personalized Dashboard**: Overview of progress and personal statistics
- **Recommendation System**: Content suggestions based on user preferences

## Technical Stack

### Frontend
- **Next.js 14** (React 18) with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern design
- **React Query** for cache and query management
- **Recharts** for data visualizations
- **Next-Auth** for authentication

### Backend
- **NestJS** with modular architecture
- **Prisma ORM** for data access
- **PostgreSQL 16** (Alpine) as database
- **Swagger** for API documentation
- **Jest** for unit and integration testing
- **TypeDoc** for code documentation

### DevOps & Infrastructure
- **Docker Compose** for multi-service orchestration
- **GitLab CI/CD** with automated pipeline
- **Traefik** as reverse proxy and HTTPS management
- **pnpm Workspaces** for monorepo management
- **Debian 12** as target OS (VPS)

### Environments
- **Development**: Local Docker Compose with hot reload
- **Staging**: Automatic deployment to `staging.mindfulspace.be`
- **Production**: Git tag deployment to `mindfulspace.be`

## Architecture & Technical Challenges

### Monorepo Architecture
The project follows a well-structured monorepo architecture:

<div class="code-terminal" style="margin: 1.5rem 0;">
  <div class="code-terminal-header" style="background: var(--color-background); border-bottom: 1px solid var(--color-border); padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <div class="code-terminal-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></div>
    <div class="code-terminal-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></div>
    <div class="code-terminal-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #22c55e;"></div>
    <span style="font-size: 0.875rem; color: var(--color-text-muted); margin-left: 0.5rem;">Project structure</span>
  </div>
  <div class="code-terminal-body" style="padding: 1.5rem; font-size: 0.875rem; line-height: 1.7; font-family: 'Courier New', Monaco, monospace;">
    <div class="code-line"><span class="code-folder">mindfulspace/</span></div>
    <div class="code-line"><span class="code-tree">├──</span> <span class="code-folder">apps/</span></div>
    <div class="code-line"><span class="code-tree">│   ├──</span> <span class="code-folder">frontend-next/</span>    <span class="code-comment">→ Next.js user interface</span></div>
    <div class="code-line"><span class="code-tree">│   └──</span> <span class="code-folder">api-nest/</span>         <span class="code-comment">→ NestJS API</span></div>
    <div class="code-line"><span class="code-tree">├──</span> <span class="code-folder">packages/</span>             <span class="code-comment">→ Shared libraries</span></div>
    <div class="code-line"><span class="code-tree">└──</span> <span class="code-folder">docs/</span>                 <span class="code-comment">→ Technical documentation</span></div>
  </div>
</div>

This organization enables:
- Code sharing between frontend and backend
- Consistent versioning
- Optimized build and deployment
- Centralized documentation

### Complete CI/CD Pipeline

**Adapted GitFlow workflow**:
- Branches `feature/*` → `dev`: Automatic build check
- Merge `dev` → `main`: Automatic staging deployment
- Tag `vX.Y.Z` on `main`: Production deployment

**Pipeline stages**:
1. Unit and integration tests
2. Linting and type checking (TypeScript)
3. Docker image builds
4. Push to GitLab Container Registry
5. Automated deployment to VPS via SSH
6. Post-deployment health checks

### Challenges Overcome

**1. Monorepo Architecture with pnpm**
- Workspace configuration for dependency sharing
- Cross-package npm scripts
- Version and build management

**2. Multi-Environment Deployment**
- Traefik configuration for reverse proxy
- Automatic SSL certificate management (Let's Encrypt)
- Environment-specific variables
- Zero-downtime deployment with Docker

**3. Database and Migrations**
- Prisma schema for data modeling
- Automated migrations in CI/CD pipeline
- Data seeds for dev and testing
- Backup and restoration

**4. Monitoring and Observability**
- Centralized logging
- Health checks for all services
- Performance metrics
- Error alerting

## Results & Impact

MindfulSpace represents a complete production project featuring:
- **Professional Architecture**: Monorepo, microservices, separation of concerns
- **Code Quality**: Strict TypeScript, automated testing, linting
- **Modern Deployment**: Complete CI/CD, containerization, multi-environment
- **Comprehensive Documentation**: ADR (Architecture Decision Records), technical guides, API documentation

The project demonstrates mastery of:
- Modern software architecture (Clean Architecture, DDD patterns)
- DevOps practices (Docker, CI/CD, Infrastructure as Code)
- Full-stack TypeScript development
- Team collaboration with Git (Gitflow, code reviews)
- Agile project management

This project was conducted with professional-level requirements, including staging and production deployments with publicly accessible URLs.
