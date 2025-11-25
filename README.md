# Promoshare - Next.js Website

A modern, mobile-friendly Next.js website for Promoshare, a fan-activation SaaS platform.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── blog/              # Blog listing and posts
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Features.tsx
└── public/                # Static assets
```

## Features

- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with Next.js metadata
- ✅ TypeScript for type safety
- ✅ Mobile-friendly navigation
- ✅ Blog system with dynamic routes

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## License

© 2024 Promoshare. All rights reserved.
