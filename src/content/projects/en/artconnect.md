---
title: "ArtConnect"
description: "Online art marketplace platform with real-time features and integrated payment system"
tags: ["Vue.js", "ASP.NET Core", "SignalR", "Tailwind CSS", "Entity Framework", "WebSockets"]
featured: true
date: 2024-01-15
---

## About the Project

ArtConnect is a comprehensive marketplace platform enabling artists to sell their artworks online and collectors to purchase art pieces. The project combines a modern user interface with a robust backend and real-time features to deliver a smooth and interactive user experience.

## Key Features

- **Art Marketplace**: Complete artwork catalog with search and filtering system
- **Secure Authentication**: JWT authentication system with role management (artists, collectors, administrators)
- **Real-time Messaging**: Instant communication between buyers and sellers via WebSockets
- **Live Notifications**: Push notification system for new offers, messages, and updates
- **Integrated Payment**: Payment solutions integration (Coinbase Commerce, Stripe) for secure transactions
- **Profile Management**: Personalized spaces for artists and collectors

## Technical Stack

### Frontend
- **Vue.js 3** with Composition API
- **Vite** for fast build and development
- **Tailwind CSS** for modern and responsive design
- **Vuex** for centralized state management
- **Vue Router** for navigation
- **Axios** for HTTP requests
- **Pusher-JS** for client-side WebSockets

### Backend
- **ASP.NET Core 8.0** (C#)
- **Entity Framework Core** as ORM
- **SignalR** for real-time communication
- **SQLite/MySQL** for data storage
- **JWT Authentication** for security
- **Swagger** for API documentation

### Integrations
- **Coinbase Commerce** for cryptocurrency payments
- **Stripe** for card payments
- **Pusher** for WebSockets and real-time notifications

## Architecture & Technical Challenges

### Full-Stack Architecture
The project follows a decoupled client-server architecture with:
- SPA (Single Page Application) frontend in Vue.js
- REST API backend in ASP.NET Core
- Real-time communication via SignalR and Pusher
- Relational database with Entity Framework migrations

### Challenges Overcome

**1. Bidirectional Real-time Communication**
Implementation of a robust WebSocket system enabling:
- Instant messaging between users
- Real-time notifications
- Live artwork status updates (available, sold, reserved)

**2. Multiple Payment Integration**
Implementation of two different payment systems with:
- Webhook management for payment confirmation
- Transaction security
- Error handling and refunds

**3. Complex State Management**
Using Vuex to manage:
- Authentication and user sessions
- Shopping cart
- Real-time conversations
- Data caching

**4. Security and Authentication**
- JWT implementation with refresh tokens
- SQL injection protection via Entity Framework
- Client and server-side data validation
- Role-based authorization management

## Results & Impact

This project enabled the development of a modern marketplace platform, while meeting deadlines and professional specifications. The solution delivered offers a smooth and interactive user experience, facilitating connections between artists and collectors while ensuring transaction security.

Skills developed include:
- Full-stack development with modern technologies
- Real-time application architecture
- Third-party service integration (payment, WebSockets)
- Teamwork on a large-scale project
- Communication with a professional client
