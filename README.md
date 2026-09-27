# Md. Asif Hossain - Web Developer Portfolio

This is my personal web developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features
- Responsive design with modern UI
- Dark/Light theme toggle
- Portfolio project showcase
- Customizable settings panel
- Built-in SEO metadata and Open Graph support

## 🛠️ Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB Atlas
- Netlify (Deployment)

## Portfolio CMS

The private dashboard is available at `/admin`. It uses a signed, HTTP-only session cookie and stores published content in MongoDB Atlas. Copy `.env.example` to `.env.local`, provide the database URI, admin username, bcrypt password hash, and a random session secret, then restart the app.

Because the CMS uses server routes, the site must be deployed as a Next.js server application rather than a static export. Add the same environment variables in the hosting provider; never commit `.env.local`.
   
