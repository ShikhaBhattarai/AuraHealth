# # Aura Health Clinic Website

A modern React + Vite website for Aura Health Clinic, built to present the clinic’s services, specialties, location, contact information, and appointment booking flow.

## Overview

This project showcases a healthcare brand website for a family clinic in Kathmandu, Nepal. It includes:

- Hero section and clinic overview
- Pediatric and dental care service blocks
- Pharmacy and specialty highlights
- Appointment request form
- Google Maps embedding and review section
- Contact details, WhatsApp CTA, and mobile sticky action bar
- Responsive layout for desktop and mobile devices

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules / custom CSS
- Font Awesome icons
- Google Maps embed integration

## Project Structure

```bash
src/
  components/
    home/
    layout/
    ui/
  lib/
    data.ts
  pages/
  App.tsx
  index.css
  main.tsx
public/
  ...
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18+
- npm or yarn

## Installation

```bash
npm install
```

## Available Scripts

```bash
npm run dev
```
Starts the local Vite dev server.

```bash
npm run build
```
Builds the production bundle for deployment.

```bash
npm run preview
```
Previews the production build locally.

```bash
npm run lint
```
Runs ESLint checks for code quality.

## Environment Notes

This project uses a static site configuration file in `src/lib/data.ts` for:

- clinic details
- contact and WhatsApp links
- service data
- hours of operation
- appointment/contact CTA content

If you need to update clinic information, phone numbers, or WhatsApp links, update the configuration in that file.

## Deployment

This project is ready to deploy as a static frontend using any host that supports Vite builds, such as:

- Vercel
- Netlify
- GitHub Pages
- any static file hosting service

Build the project with:

```bash
npm run build
```

Then deploy the generated `dist/` folder.

## Notes

- The site includes a sticky mobile CTA for phone and WhatsApp contact actions.
- The appointment form is designed to route users to the clinic contact flow.
- Branding and theme colors are configured in the global CSS file.

## License

This project is for internal website use and is not currently published under a public license.
