# Sisvetor Landing Page - React

This is the React version of the Sisvetor news portal, converted from the original Svelte application.

## Features

- 🏠 Home page with company branding
- 📰 News listing page with pagination
- 📖 Individual news article pages with rich content
- 📱 Responsive design with mobile navigation
- 🎨 DaisyUI component library with custom theme
- 🔗 React Router for navigation

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── lib/
│   ├── api/           # API layer
│   │   ├── noticia.ts         # Type definitions
│   │   ├── noticiaRequest.ts  # HTTP client
│   │   └── noticiaController.ts # API functions
│   └── utils.ts       # Utility functions (slugify, etc.)
├── routes/            # Page components
│   ├── home.tsx       # Homepage
│   ├── noticias.tsx   # News listing
│   ├── noticias.$slug.tsx # Individual news articles
│   └── contato.tsx    # Contact page
├── app.css           # Global styles with DaisyUI theme
└── routes.ts         # Route configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## API Configuration

The application expects a news API running on `http://localhost:9995/api/v1/noticias`. Update the base URL in `app/lib/api/noticiaController.ts` if your API runs on a different endpoint.

## Converted Features

All major features from the original Svelte application have been converted:

✅ News listing with tags and descriptions  
✅ Individual news pages with rich content  
✅ Image gallery support  
✅ Responsive navigation  
✅ DaisyUI theme with custom colors  
✅ Pagination support  
✅ URL slugification for SEO-friendly URLs  

## Dependencies

- React Router 7 for routing and SSR
- DaisyUI for UI components
- TailwindCSS for styling
- TypeScript for type safety

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
