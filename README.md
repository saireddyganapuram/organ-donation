# Organ Donation Management System

A comprehensive web application for managing organ donation processes, connecting donors, patients, and coordinators in a seamless platform. This system facilitates organ donor registration, patient requests, and coordinator management with secure authentication and file handling capabilities.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Security Features](#security-features)

## Overview

The Organ Donation Management System is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React/Vanilla JS, Node.js). It provides a platform for:

- **Donors**: Register as organ donors, manage profiles, and download certificates
- **Patients**: Search for available organs and submit medical reports
- **Coordinators**: Manage organ requests and facilitate matching processes

## Architecture

### System Architecture

The application follows a **three-tier architecture**:

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│              (Frontend - HTML/CSS/JavaScript)            │
│  - Donor Interface  - Patient Interface  - Coordinator  │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    Application Layer                     │
│                  (Express.js Backend)                    │
│  - Routes  - Controllers  - Middleware  - Auth          │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                      Data Layer                          │
│              (MongoDB with Mongoose ODM)                 │
│  - Donor Model  - Patient Model  - Coordinator Model    │
└─────────────────────────────────────────────────────────┘
```

### Application Flow

1. **User Registration/Login**
   - Donors and coordinators register with credentials
   - JWT-based authentication with cookie storage
   - Password hashing using bcrypt

2. **Donor Workflow**
   - Register with personal details and organ selection
   - Upload photo and signature (stored as base64)
   - Access protected services after authentication
   - Download organ donation certificate

3. **Patient Workflow**
   - Submit organ request with medical report
   - Medical reports stored securely
   - Search for matching donors

4. **Coordinator Workflow**
   - Manage organ search requests
   - Access patient medical reports
   - Facilitate organ matching process

### MVC Pattern

The application follows the **Model-View-Controller (MVC)** pattern:

- **Models** (`/models`): Define data schemas using Mongoose
- **Views** (`/frontend`): HTML pages served to users
- **Controllers** (`/controllers`): Business logic and request handling
- **Routes** (`/routes`): API endpoint definitions

## Features

### Donor Features
- ✅ Secure registration with Aadhaar verification
- ✅ Multi-organ selection capability
- ✅ Photo and signature upload
- ✅ JWT-based authentication
- ✅ Download donation certificate
- ✅ FAQ and information access
- ✅ Search for organ recipients

### Patient Features
- ✅ Submit organ request
- ✅ Upload medical reports
- ✅ Search for matching donors
- ✅ Secure data handling

### Coordinator Features
- ✅ Secure login system
- ✅ Manage organ search requests
- ✅ Access patient medical reports
- ✅ Facilitate organ matching

### Security Features
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ Cookie-based session management
- ✅ Protected routes with middleware
- ✅ Secure file upload handling

## Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling

### Authentication & Security
- **JWT (jsonwebtoken)**: Token-based authentication
- **bcrypt**: Password hashing
- **cookie-parser**: Cookie handling

### File Handling
- **Multer**: File upload middleware
- **Base64 encoding**: Image storage

### Frontend
- **HTML5**: Markup
- **CSS3**: Styling
- **Vanilla JavaScript**: Client-side logic

### Configuration & Utilities
- **dotenv**: Environment variable management
- **config**: Configuration management
- **path**: File path utilities

### Communication (Optional)
- **Twilio**: SMS notifications (integrated)

## Project Structure

```
DONOR/
├── app.js                          # Main application entry point
├── package.json                    # Dependencies and scripts
├── .env                            # Environment variables (not in repo)
├── .gitignore                      # Git ignore rules
│
├── config/                         # Configuration files
│   ├── db.js                       # MongoDB connection setup
│   └── default.json                # Default configuration values
│
├── models/                         # Mongoose schemas
│   ├── donorModel.js               # Donor schema (name, age, organ, etc.)
│   ├── patientModel.js             # Patient schema (medical reports)
│   └── coordinatorModel.js         # Coordinator schema (credentials)
│
├── controllers/                    # Business logic
│   ├── donorController.js          # Donor registration logic
│   ├── donorLoginController.js     # Donor authentication
│   ├── petientController.js        # Patient registration logic
│   ├── coordinatorConroller.js     # Coordinator registration
│   ├── coordinatorLoginController.js # Coordinator authentication
│   └── coorganregisterController.js # Coordinator organ search
│
├── routes/                         # API route definitions
│   ├── donorRoutes.js              # Donor-related endpoints
│   └── coordinatorRoutes.js        # Coordinator-related endpoints
│
├── middlewares/                    # Custom middleware
│   ├── authMiddleware.js           # JWT authentication middleware
│   └── uploadMiddleware.js         # File upload configuration
│
└── frontend/                       # Client-side files
    ├── html/                       # HTML pages (15 files)
    │   ├── index.html              # Landing page
    │   ├── register.html           # Donor registration
    │   ├── login.html              # Donor login
    │   ├── coordinatorlogin.html   # Coordinator login
    │   ├── loginservices.html      # Donor services dashboard
    │   ├── coordinatorpage.html    # Coordinator dashboard
    │   ├── downloadcertificate.html # Certificate download
    │   ├── faq.html                # FAQ page
    │   ├── learn.html              # About organ donation
    │   └── ...                     # Other pages
    ├── css/                        # Stylesheets (14 files)
    ├── js/                         # JavaScript files
    └── images/                     # Image assets
```

## Database Schema

### Donor Model
```javascript
{
  name: String,
  age: Number,
  gender: String,
  aadhaar: String,
  mobile: String,
  organ: [String],              // Array of organs to donate
  organization: String,
  photo: String,                // Base64 encoded image
  signature: String             // Base64 encoded signature
}
```

### Patient Model
```javascript
{
  name: String,
  age: Number,
  gender: String,
  aadhaar: String,
  mobile: String,
  medicalReport: String         // Base64 encoded medical report
}
```

### Coordinator Model
```javascript
{
  coordinatorId: String,
  password: String              // Hashed password
}
```

## API Endpoints

### Donor Routes (`/donors`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/donors/register` | Donor registration page | No |
| POST | `/donors/register` | Submit donor registration | No |
| GET | `/donors/register/success` | Registration success page | No |
| GET | `/donors/login` | Donor login page | No |
| POST | `/donors/login` | Authenticate donor | No |
| GET | `/donors/logout` | Logout donor | No |
| GET | `/donors/services` | Donor services dashboard | Yes |
| GET | `/donors/services/downloadcertificate` | Download certificate | Yes |
| GET | `/donors/services/faq` | FAQ page | Yes |
| GET | `/donors/services/searchfordonor` | Search for organ recipient | Yes |
| POST | `/donors/services/searchfordonor/loginorgansearch` | Submit patient search | Yes |
| GET | `/donors/services/searchfordonor/loginorganselection` | Organ selection page | Yes |

### Coordinator Routes (`/coordinators`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/coordinators/register` | Register coordinator | No |
| GET | `/coordinators/login` | Coordinator login page | No |
| POST | `/coordinators/login` | Authenticate coordinator | No |
| GET | `/coordinators/services` | Coordinator dashboard | Yes |
| GET | `/coordinators/services/organsearch` | Organ search page | Yes |
| POST | `/coordinators/services/organsearch` | Submit organ search | Yes |
| GET | `/coordinators/services/organsearch/organselection` | Organ selection | Yes |
| GET | `/coordinators/services/organsearch/organselection/success` | Success page | Yes |

### Public Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Landing page |
| GET | `/about` | About organ donation |

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DONOR
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `config/default.json` file:
   ```json
   {
     "mongoURI": "your-mongodb-connection-string",
     "JWT_SECRET": "your-secret-key"
   }
   ```

4. **Set up environment variables (optional)**
   
   Create a `.env` file for additional configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running locally or you have a valid MongoDB Atlas connection string.

6. **Run the application**
   ```bash
   node app.js
   ```
   
   The server will start on `http://localhost:5000`

## Environment Variables

### Required Configuration (config/default.json)

- `mongoURI`: MongoDB connection string
  - Local: `mongodb://localhost:27017/organ-donation`
  - Atlas: `mongodb+srv://<username>:<password>@cluster.mongodb.net/organ-donation`

- `JWT_SECRET`: Secret key for JWT token generation
  - Example: `your-super-secret-jwt-key-12345`

### Optional Configuration (.env)

- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode (development/production)

## Usage

### For Donors

1. Navigate to `http://localhost:5000`
2. Click on "Register as Donor"
3. Fill in personal details, select organs to donate
4. Upload photo and signature
5. Submit registration
6. Login with credentials
7. Access services:
   - Download certificate
   - View FAQ
   - Search for recipients

### For Coordinators

1. Navigate to `http://localhost:5000/coordinators/login`
2. Login with coordinator credentials
3. Access coordinator dashboard
4. Manage organ search requests
5. Review patient medical reports
6. Facilitate organ matching

### For Patients (via Donor Login)

1. Login as a donor
2. Navigate to "Search for Donor"
3. Submit patient details and medical report
4. Select required organ
5. Submit request

## Security Features

### Authentication
- **JWT Tokens**: Secure token-based authentication
- **Cookie Storage**: HTTP-only cookies for token storage
- **Password Hashing**: bcrypt with salt rounds for secure password storage

### Authorization
- **Protected Routes**: Middleware-based route protection
- **Role-based Access**: Separate interfaces for donors and coordinators

### Data Security
- **File Upload Validation**: Multer middleware for secure file handling
- **Base64 Encoding**: Secure storage of images and documents
- **Input Validation**: Server-side validation for all inputs

### Best Practices
- Environment variable management
- Secure configuration storage
- Error handling and logging
- CORS protection (can be added)

## Future Enhancements

- [ ] Email notifications for organ matching
- [ ] SMS alerts using Twilio integration
- [ ] Advanced search filters
- [ ] Admin dashboard
- [ ] Real-time matching algorithm
- [ ] Multi-language support
- [ ] Mobile application
- [ ] API rate limiting
- [ ] Enhanced security (2FA, OAuth)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

For questions or support, please contact the development team.

---

**Note**: This is an educational project for organ donation management. For production use, additional security measures, compliance with healthcare regulations (HIPAA, etc.), and thorough testing are required. 