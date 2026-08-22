## WAAS - WhatsApp as a Service Platform

**Company:** Traveltekpro IT Solutions  
**Tech Stack:** NestJS, TypeScript, TypeORM, PostgreSQL, Socket.io, AWS SDK, Stripe, JWT, Passport, Baileys, WhatsApp Web.js, Puppeteer, Sharp, Multer, Helmet, Throttler, Swagger | Next.js 13, React 18, TypeScript, Material-UI, Recoil, React Hook Form, Yup, Axios, ApexCharts, Socket.io Client, i18next, Bootstrap 5, Emotion

A comprehensive WhatsApp Business API platform that enables businesses to automate marketing, sales, customer support, and engagement through WhatsApp. The platform features a three-tier architecture with a robust NestJS backend, an admin dashboard for business management, and a customer-facing frontend application.

**Key Features:**
- RESTful APIs with real-time communication via Socket.io
- Multiple WhatsApp library integrations (Baileys and WhatsApp Web.js) for message handling
- Campaign management, chatbot creation, template messaging, agent assignment, group management
- Analytics and reporting with comprehensive dashboards
- Admin frontend with user management, campaign creation and monitoring, bot configuration
- Template management, analytics visualization with charts, real-time message monitoring
- User-facing frontend with PWA capabilities for customer interaction
- Multi-language support (i18n), advanced data grids for managing users, campaigns, and messages
- Automated message campaigns, no-code chatbot builder, shared team inbox
- Broadcast messaging, WhatsApp template management, real-time notifications
- Multi-user collaboration with role-based permissions
- Media uploads to AWS S3, rate limiting and security measures

---

## Traveltekpro Packages - Travel Booking Platform

**Company:** Traveltekpro IT Solutions  
**Tech Stack:** React 18, Redux Toolkit, React Router DOM, Material-UI, Ant Design, Formik, Yup, Axios, React Slick, SCSS, Bootstrap, React Google Maps API, React Helmet, Google Analytics, GTM | Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Passport.js (Google OAuth), Socket.io, Swagger UI, Multer, Nodemailer, Twilio, Fast2SMS | Razorpay, CCAvenue | AWS S3, Firebase Hosting, Ali OSS

A comprehensive full-stack travel booking platform designed for booking hotels, houseboats, shikara rides, and complete holiday packages. The system features a three-tier architecture with separate React applications for customer-facing frontend, admin dashboard, and a robust Node.js/Express backend with MongoDB database.

**Key Features:**
- Search, filter, and book accommodations with real-time availability checking
- Dynamic pricing and occupancy management
- Package customization with hotel, flight, and cab inclusions
- Flash sales, coupon management, and comprehensive review systems
- Admin panel with property registration, booking management, agent and partner management
- Financial reports and master data configuration
- Multiple user roles (admin, employees, agents, partners, end customers) with role-based access control
- Payment processing with multiple gateways (Razorpay, CCAvenue)
- OTP verification via SMS/WhatsApp, Google OAuth authentication
- Real-time notifications using Socket.io, automated email communications
- PDF invoice generation, Excel report exports
- Google Maps integration for location services
- Analytics tracking with Google Analytics and GTM
- Comprehensive API documentation with Swagger

---

## Company Finder - Location-Based Business Discovery Platform

**Company:** Traveltekpro IT Solutions  
**Tech Stack:** React 18, TypeScript, Inertia.js, MapLibre GL, @turf/turf, Tailwind CSS, Axios | Laravel 11, PHP 8.3, PostgreSQL with Spatial Extensions, OpenAI API, Laravel Octane | Docker, Redis, Stripe Integration, Spatie Media Library

A location-based business discovery platform that enables users to search and find companies based on geographic proximity and service offerings. The application leverages AI-enhanced search queries using OpenAI to improve search relevance and understand user intent.

**Key Features:**
- Interactive map component using MapLibre GL with real-time marker clustering
- Spatial data visualization and bounding box calculations for efficient spatial queries
- AI-enhanced search using OpenAI for improved search relevance
- Vector similarity search with cosine distance calculations
- Frontend search logic with query parameters, filtering, and result synchronization
- Marker clustering algorithms for overlapping company locations
- Smooth map transitions using flyTo animations
- Coordinate validation system ensuring valid latitude/longitude ranges
- Geospatial calculations using @turf/turf library for distance measurements
- Real-time map bounds tracking to optimize API calls
- Complex state management for selected markers, hover interactions, and dynamic data updates
- Debounced map drag handlers to prevent excessive API calls
- Synchronization logic between map markers and list view components

---

## Flight Booking System

**Company:** Traveltekpro IT Solutions  
**Tech Stack:** NestJS, TypeScript, PostgreSQL, TypeORM, Redis, JWT Authentication, Swagger API Documentation | Next.js 14, React 18, TypeScript, Recoil State Management, SCSS, Bootstrap, Formik, Yup Validation | Next.js 13, React 18, Material-UI, Ant Design, Recoil, React Hook Form, i18next | AWS SDK, Nodemailer, Axios, Moment.js, Chart.js, Framer Motion

A comprehensive flight booking platform integrating with TBO (Travel Boutique Online) GDS API for real-time flight search, booking, and management. The system supports both domestic and international flights with multi-provider integration (GDS and LCC airlines).

**Key Features:**
- Advanced flight search with filters (price, time, airline, stops) and fare comparison
- Seat selection, passenger management, and secure payment processing
- Booking management with complete transaction tracking and history
- Admin panel with complete control over bookings, user management, supplier configuration
- Markup management and dashboard analytics with charts and reporting
- WhatsApp template management for automated booking notifications
- Microservices architecture with rate limiting and request throttling
- Redis caching for search results to improve performance
- Scheduled tasks for booking status updates and data synchronization
- Comprehensive error logging system for debugging and monitoring
- Responsive design with smooth animations and real-time price updates
- Multi-currency support and guest checkout functionality
- Complex booking scenarios including one-way, round-trip, multi-city trips
- Support for adults, children, and infants across different fare types
- Role-based access control for admin and customer users
- Email notifications and automated booking confirmations

---

## ChatDMC TravelTekPro - Travel Booking API Backend

**Company:** Traveltekpro IT Solutions  
**Tech Stack:** NestJS 11.x, TypeScript 5.7, Node.js | PostgreSQL with TypeORM 0.3.25 | Swagger/OpenAPI with Swagger UI Express | Axios 1.10.0 | Class Validator, Class Transformer | CORS, Rate Limiting (Throttler), SSL/TLS | NestJS Schedule Module | Moment.js with Timezone support | Jest, Supertest

A comprehensive travel booking API backend system built with NestJS that provides seamless integration for hotel and activity bookings. The platform integrates with multiple third-party suppliers including TBO (Travel Booking Online) for hotel reservations and Klook for activity bookings.

**Key Features:**
- Modular architecture with separate modules for hotels, activities, user management, and data dump operations
- Complete booking workflow: hotel search with autocomplete, hotel details retrieval, prebooking validation, booking creation, confirmation, cancellation, and booking status tracking
- Activity search, availability checks, order validation, order creation, and order management
- Comprehensive error handling, request validation, and logging mechanisms
- Multiple payment methods and booking statuses support
- PostgreSQL for persistent storage of bookings, user data, and supplier mappings
- Rate limiting (100 requests per minute per IP), CORS protection
- Swagger documentation for easy API exploration
- Scheduled tasks for automated operations
- Multi-currency transactions with detailed booking logs stored in JSONB format
- Complex booking scenarios with passenger validation, payment processing, and real-time supplier communication
- Supplier authentication management, retry mechanisms for failed bookings
- Data dump modules for managing hotel and activity master data, city lists, country lists, and supplier mappings

---

## Roamiyo - Travel Booking API Backend

**Company:** Traveltekpro IT Solutions  
**Tech Stack:** NestJS (Node.js 22.x), TypeScript | PostgreSQL with TypeORM | Swagger/OpenAPI | AWS S3, Azure Blob Storage | NestJS Mailer Module | Joi, class-validator, class-transformer | Axios, Cacheable | NestJS Schedule | Custom header-based validation guards | Moment.js, crypto-js, md5

A comprehensive travel booking API backend system that aggregates flight and hotel search results from multiple third-party providers (TBO and extensible to others). The system provides a unified RESTful API interface for travel agencies and booking platforms.

**Key Features:**
- **Flight Module**: Multi-provider flight search with routing, fare comparison, booking initiation/confirmation, revalidation, order details retrieval, and balance checking
- **Hotel Module**: Hotel search with initiate, check results, and filtration endpoints
- **Provider Integration**: Pluggable architecture supporting multiple travel suppliers (TBO) with extensible design for adding new providers
- **Search Aggregation**: Asynchronous multi-provider search with deduplication, result merging, and collective polling mechanism
- **Booking Management**: Complete booking lifecycle from search to confirmation with booking logs, reference tracking, and error handling
- **Data Management**: Dump modules for geography and hotel master data synchronization
- **Generic Services**: Currency conversion, language support, supplier credential management
- **Security**: Custom header validation guards, API versioning, IP address tracking, currency preference handling
- **Logging & Monitoring**: Comprehensive supplier request/response logging, error tracking, and performance monitoring
- **Email Notifications**: Automated email templates for traveler communications
- **Scheduled Tasks**: Background jobs for data synchronization and maintenance operations
- **API Standards**: RESTful design with standardized response formats, error handling, and Swagger documentation

---

## Edubee – Educational Platform

**Company:** Fortius Tech Solutions  
**Tech Stack:** Node.js (Express), PostgreSQL, React

A multi-role backend system (Admin / Teacher / Student) with role-based access control for educational content management.

**Key Features:**
- REST APIs for Classes, Subjects, Topics, MCQs, Short Questions
- Database schema design & query optimization (PostgreSQL)
- Multi-role system with role-based access control
- Integrated APIs with client application
- Complete CRUD operations for educational content

---

## Foodism – Food Social Media Application

**Company:** Fortius Tech Solutions  
**Tech Stack:** Adonis (Node.js), JavaScript, Vue3

A social media platform for food enthusiasts to share, like, and comment on food-related content.

**Key Features:**
- API development for posts, likes, comments, and user interactions
- Authentication & validations on backend
- User interaction features (likes, comments, follows)
- Connected client app with backend endpoints
- Real-time updates for social interactions

---

## Dr Earth – E-commerce Application

**Company:** Fortius Tech Solutions  
**Tech Stack:** Adonis (Node.js), JavaScript, Vue3

An e-commerce platform with a focus on sustainability and the "Recycle & Reuse" feature.

**Key Features:**
- Product listing, categories, cart & order-related backend APIs
- Implemented business logic for the "Recycle & Reuse" feature
- Complete e-commerce functionality with product management
- API integration with frontend
- Order processing and management system

---

## DMS – Document Management System

**Company:** Fortius Tech Solutions  
**Tech Stack:** Adonis (Node.js), JavaScript

A comprehensive document management system with folder structure and permission management.

**Key Features:**
- CRUD APIs for folders, documents, permissions
- Backend logic for filtering, sorting & access control
- Document organization with folder hierarchy
- Permission-based access control
- Integration with admin panel

---

## Ventage Health System – Admin Panel

**Company:** Fortius Tech Solutions  
**Tech Stack:** Adonis (Node.js), JavaScript

An admin panel for managing patient data and health system operations.

**Key Features:**
- Patient management APIs (CRUD + filters)
- Backend validation & error handling
- Data integration with admin dashboard
- Comprehensive patient data management
- Filtering and search capabilities

---

## Vantage Health App – Web + Mobile

**Company:** Fortius Tech Solutions  
**Tech Stack:** Adonis (Node.js), JavaScript, Quasar

A health application available on both web and mobile platforms with patient flow and mental health features.

**Key Features:**
- Backend endpoints for patient flow & mental health features
- Auth & session handling
- API integration for mobile + web client
- Cross-platform support (Web + Mobile)
- Patient management and health tracking features
