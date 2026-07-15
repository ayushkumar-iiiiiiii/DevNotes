# DevNotes

A full-stack note-taking application built with **Node.js**, **Express**, **PostgreSQL**, and **Vanilla JavaScript**.

DevNotes is designed to provide a clean and fast note-taking experience while serving as a long-term project for exploring backend engineering, authentication, database design, deployment, and scalable web application architecture.

> ⚠️ This project is actively under development. New features, security improvements, and architectural changes are continuously being added.

---

# Live Demo

🌐 **Application:** https://devnotes-xx8h.onrender.com/

---

# Screenshots

> *(Add screenshots after Version 1 is complete.)*

- Landing Page
- Dashboard
- Note Editor
- Search
- Authentication

---

# Features

## Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT authentication
- HTTP-only cookie authentication
- Refresh token rotation
- Protected API routes

---

## Notes

- Create notes
- Edit notes
- Delete notes
- View notes
- Responsive notes dashboard
- Infinite scrolling
- Automatic pagination

---

## Search

- Real-time search
- Title search
- Content search
- Backend-powered filtering

---

## Validation

- Email validation
- Username validation
- Password validation
- Phone number validation
- Debounced validation requests
- Duplicate account detection

---

## Backend

- REST API
- Express middleware
- PostgreSQL integration
- Environment-based configuration
- Modular route structure

---

# Tech Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Axios
- Vite

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Neon

## Authentication

- JWT
- bcrypt
- cookie-parser

## Deployment

- Render
- GitHub

---

# Architecture

```
Browser
    │
    ▼
Express Server
    │
    ├── Authentication
    ├── Validation
    ├── Notes API
    └── Static Files
            │
            ▼
      PostgreSQL (Neon)
```

---

# Project Goals

Rather than relying heavily on frontend frameworks or large backend abstractions, this project focuses on understanding how modern web applications work internally.

Areas explored include:

- Authentication systems
- JWT lifecycle
- Cookie-based security
- REST API design
- PostgreSQL database design
- Deployment workflows
- Performance optimization
- Error handling
- Production debugging
- Scalable project organization

---

# Challenges Solved

During development this project has gone through multiple architectural improvements.

Some of the major challenges solved include:

- Migrating from Webpack to Vite
- Deploying a full-stack Node.js application to Render
- Migrating PostgreSQL from local development to Neon
- Managing environment variables across development and production
- Implementing JWT authentication with HTTP-only cookies
- Implementing refresh token rotation
- Infinite scrolling with backend pagination
- Production debugging using Render logs
- Linux deployment issues (case-sensitive file paths)
- API routing and deployment troubleshooting

---

# Project Structure

```
DevNotes/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── db.js
│   ├── dbconfig.js
│   └── app.js
│
├── scr/
│
├── scr_html/
│
├── Static/
│
├── vite.config.js
├── package.json
└── README.md
```

---

# Running Locally

## Clone the repository

```bash
git clone https://github.com/<username>/DevNotes.git

cd DevNotes
```

---

## Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
JWT_SECRET=your_secret

DATABASE_URL=your_postgresql_connection

PORT=3000

VITE_API_URL=http://localhost:3000/api
```

---

## Start Development

Backend

```bash
npm run dev
```

Build frontend

```bash
npm run build
```

---

# Deployment

This application is deployed using:

- **Frontend:** Express Static Files
- **Backend:** Render
- **Database:** Neon PostgreSQL

Deployment includes:

- Production environment variables
- HTTPS
- Cloud PostgreSQL
- Automatic GitHub deployments

---

# Roadmap

### Version 1

- [x] Authentication
- [x] PostgreSQL integration
- [x] Cloud deployment
- [x] Search
- [x] Infinite scrolling
- [ ] UI polish
- [ ] Better error pages
- [ ] Password visibility toggle
- [ ] Mobile improvements

### Future Versions

- React frontend
- TypeScript migration
- Docker support
- Redis caching
- Advanced search
- Rich text editor
- Markdown support
- File attachments
- Testing
- CI/CD
- Admin dashboard
- Collaborative editing

---

# What I Learned

This project has been a practical exploration of:

- Backend architecture
- Authentication systems
- PostgreSQL
- Deployment
- Debugging production applications
- Environment configuration
- API design
- Performance optimization

More importantly, it demonstrated the differences between software that works locally and software that runs reliably in production.

---

# Contributing

Suggestions, criticism, and improvements are always welcome.

If you notice:

- Security issues
- Architecture problems
- Performance bottlenecks
- Better design patterns
- Code quality improvements

please open an issue or submit a pull request.

Constructive feedback is greatly appreciated.

---

# License

This project is open for learning, experimentation, and personal use.