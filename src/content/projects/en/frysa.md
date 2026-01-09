---
title: "Frysa"
description: "Complete food traceability system for artisan ice cream maker with automated testing and secure API"
tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "Laravel Dusk", "Laravel Sanctum"]
featured: false
date: 2023-12-15
---

## About the Project

Frysa is a complete food traceability system developed for an artisan ice cream maker, enabling traceability management from raw materials to finished products and their delivery. This modern application uses Laravel 8 with advanced features to provide a robust and secure solution compliant with food industry regulatory requirements.

Created as part of SALTo (https://salto.helmo.be/), this project illustrates collaboration between students and real clients. The system meets the specific needs of an ice cream maker with concrete operational constraints and strict traceability requirements imposed by AFSCA (https://www.fasfc.be/).

## Key Features

- **Complete Traceability**: Tracking of raw materials, transformation, production, and delivery
- **Ingredient Management**: Database of ingredients with nutritional information and allergens
- **Production Tracking**: Recording of production batches with detailed compositions
- **Supplier Management**: Administration of suppliers and reception tracking
- **Incoming Tracking**: Recording of goods receipts with batch numbers
- **Delivery Forms**: Generation of delivery documents with complete traceability
- **Packaging Management**: Tracking of containers and packaging used
- **Customer Database**: Management of professional and individual clients
- **Secure API**: Endpoints for third-party integrations with Laravel Sanctum authentication

## Technical Stack

### Backend
- **Laravel 8** (Modern PHP Framework)
- **PHP 7.4 / 8.0**
- **MySQL** as primary database
- **Eloquent ORM** for data management
- **Laravel Mix** for asset compilation

### Frontend
- **Laravel Blade** for templates
- **Bootstrap** for responsive interface
- **Modern JavaScript** (ES6+)
- **Axios** for AJAX requests

### Laravel Packages
- **Laravel Sanctum**: API authentication with personal tokens
- **Laravel Dusk**: Automated browser testing (E2E testing)
- **DomPDF**: PDF generation (delivery forms, product sheets)
- **Laravel CORS**: Cross-Origin Resource Sharing management

### Testing & Quality
- **PHPUnit**: Unit and integration tests
- **Laravel Dusk**: End-to-end functional tests
- **Factories & Seeders**: Test data generation
- **Feature Tests**: Business functionality testing

## Architecture & Technical Challenges

### Modern Laravel Architecture
The project uses Laravel 8 with its modern features:
- **Route Model Binding** to simplify controllers
- **Form Requests** for centralized validation
- **Resources & Collections** for API responses
- **Events & Listeners** for decoupling

### Challenges Overcome

**1. Complete Traceability**
- Modeling the food traceability chain
- Batch and traceability number system
- Complex relationships between ingredients, production, and deliveries
- Complete transformation history
- Regulatory compliance (HACCP, food standards)

**2. Automated Testing with Laravel Dusk**
- Browser testing environment configuration
- End-to-end tests of complete user journey
- Regression tests for critical features
- Integration into development workflow
- Automatic screenshots on failure

**3. Secure API with Laravel Sanctum**
- Token authentication for third-party applications
- API permissions and scopes management
- Rate limiting to prevent abuse
- Endpoint documentation
- API versioning

**4. Product Composition Management**
- Automatic composition calculation from ingredients
- Allergen and nutritional information management
- Transformation and recipe traceability
- Unit of measure management and conversions

**5. Performance and Optimization**
- Eager loading to avoid N+1 problem
- Frequent query caching
- Database indexing
- Eloquent query optimization
- Frontend asset compression

**6. Document Generation**
- Delivery forms with traceability information
- Product technical sheets
- Labels with composition and allergens
- Production and inventory reports

## Results & Impact

This project provided an artisan ice cream maker with a modern and reliable traceability system, significantly improving their regulatory compliance and facilitating their daily management. The complete digitalization of traceability enables considerable time savings and better control of production processes.

The SALTo experience enabled development of:
- **Advanced Laravel Expertise**: Use of Laravel 8 with its modern features
- **Testing Culture**: Implementation of automated tests (unit, integration, E2E)
- **API Security**: Implementation of a secure RESTful API with Sanctum
- **Business Understanding**: Mastery of food traceability challenges
- **Professional Quality**: Maintainable and well-documented code
- **Real Project Management**: Client communication, specifications, deliveries

The system is deployed and used daily by the client, effectively managing their end-to-end food traceability. The presence of automated tests ensures stability and facilitates future developments.
