# Coffee Place - MERN Stack Shopping App

![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) 
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) 
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white) 
![image](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) 

This is a self-learning repository for a simple e-commerce application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring product management capabilities and theme customization.

🚀 **Live Demo**: [https://coffee-place.onrender.com/](https://coffee-place.onrender.com/)

## Table of Contents
- [About](#about)
- [Features](#features)
- [UI Preview](#ui-preview)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)

## About
Coffee Place is a full-stack e-commerce application built as a learning project for the MERN stack. It demonstrates fundamental CRUD operations and modern web development practices.

## Features
- ☕ Product management (Create, Read, Update, Delete)
- 🌓 Light/Dark mode toggle
- 📱 Responsive design
- 🔒 RESTful API endpoints
- 📦 MongoDB database integration
- 💅 Material UI components
 
## UI Preview
![UI Preview](frontend/public/images/UI-Preview.gif)

## Getting Started
### Option 1: Visit Live Site
Access the deployed application at [https://coffee-place.onrender.com/](https://coffee-place.onrender.com/)

### Option 2: Local Development

#### Clone the repository
```
git clone [your-repo-url]
```

#### Install dependencies for both backend and frontend
```
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

#### Build and start the application
```
# Build frontend
cd frontend
npm run build

# Start the server (from root directory)
cd ..
npm run start
```

Open your browser and navigate to `http://localhost:5000`

## Environment Setup
1. Create a `.env` file in the root directory
2. Add the following environment variables:
   
   ```
   PORT=5000
   MONGODB_URL=your_mongodb_connection_string
   ```
