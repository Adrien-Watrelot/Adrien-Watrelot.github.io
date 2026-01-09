---
title: "Article 27"
description: "Management system for cultural access - Article 27 Program"
tags: ["Laravel", "PHP", "Vue.js", "MySQL", "Bootstrap", "PDF Generation"]
featured: false
date: 2023-11-10
---

## About the Project

Article 27 is a management system developed to facilitate cultural access as part of the Article 27 program. This web application enables complete management of cultural access requests, beneficiary tracking, and report generation for partner cultural institutions.

Developed as part of SALTo (https://salto.helmo.be/), this project connects students with real clients to provide authentic development experience. The actual client benefits from a custom solution meeting their specific needs in cultural management.

## Key Features

- **Beneficiary Management**: Registration and tracking of people eligible for the Article 27 program
- **Request Processing**: Complete workflow for cultural event access requests
- **Partner Management**: Administration of participating cultural venues and events
- **Document Generation**: Automatic creation of vouchers, certificates, and PDF reports
- **Dashboards and Statistics**: Data visualization with charts (Lavacharts)
- **Data Export**: Excel file generation for analysis and reporting
- **Barcodes**: Barcode generation for voucher tracking

## Technical Stack

### Backend
- **Laravel 5.5** (PHP Framework)
- **PHP 7.2+**
- **MySQL** as database
- **Eloquent ORM** for data access
- **Laravel Mix** for asset compilation

### Frontend
- **Vue.js 2** for interactive components
- **Bootstrap 3** for user interface
- **jQuery** for DOM interactions
- **JavaScript ES6**

### Libraries and Packages
- **DomPDF**: PDF document generation (vouchers, certificates, reports)
- **Lavacharts**: Chart and data visualization creation
- **Maatwebsite Excel**: Excel file import/export
- **Milon Barcode**: Barcode generation for tracking
- **Laravel Debugbar**: Debugging and performance optimization

## Architecture & Technical Challenges

### Laravel MVC Architecture
The project follows Laravel's MVC (Model-View-Controller) architecture with:
- **Models**: Entity management (Beneficiaries, Requests, Events, Partners)
- **Controllers**: Business logic and orchestration
- **Views**: Blade templates with Vue.js components
- **Migrations**: Database schema management
- **Seeders**: Test and initialization data

### Challenges Overcome

**1. Complex Document Generation**
- PDF creation with custom formatting (logo, header, footer)
- Dynamic barcode generation integrated into documents
- Reusable templates for different document types
- Print optimization

**2. Validation Workflow**
- Multi-step validation system for requests
- State management (pending, approved, rejected, used)
- Email notifications to different stakeholders
- Modification history and traceability

**3. Reporting and Statistics**
- Complex data aggregation (by period, location, type)
- Interactive chart generation with Lavacharts
- Excel export with formatting and automatic calculations
- Admin dashboard with key metrics

**4. User Management**
- Laravel authentication system with multiple roles
- Granular permissions (admin, manager, partner, viewing)
- User interface adapted to user profile
- Security and sensitive data protection

## Results & Impact

This project delivered a functional solution to a real client in the cultural sector, facilitating daily management of the Article 27 program and improving cultural accessibility for beneficiaries.

The experience gained through the SALTo course provided:
- Understanding of business challenges in a specific sector (culture and social)
- Project management with a real client and actual constraints
- Development of a complete management application with Laravel
- Professional document and report generation
- Collaboration and communication in a professional context

The system continues to be used by the client, demonstrating the viability and usefulness of the developed solution.
