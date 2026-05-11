# Yuvan Jeyan G Portfolio

A modern, responsive personal portfolio built with React to showcase professional experience, technical skills, projects, certifications, and contact details in one polished single-page experience.

## Overview

This portfolio is designed to present a strong professional profile for Yuvan Jeyan G, with a clean section-based layout and smooth reveal interactions. It combines infrastructure experience with full-stack development skills to communicate both technical depth and practical delivery.

## Features

- Hero section with quick actions and contact links
- About section with profile highlights
- Services and process sections to explain capabilities and workflow
- Skills showcase grouped by frontend, backend, database, and infrastructure
- Experience, achievements, education, and certifications sections
- Projects section with live project links and key highlights
- Contact section with email, phone, LinkedIn, and GitHub access
- Scroll reveal interactions for a more polished presentation
- Responsive layout for desktop and mobile devices

## Tech Stack

- React 19
- React Router DOM
- JavaScript
- HTML5 and CSS3
- CRA tooling via `react-scripts`

## Project Structure

```text
src/
  components/     Reusable portfolio sections
  data/           Content and configuration for the portfolio
  hooks/          Custom hooks such as scroll reveal behavior
  App.js          Page composition
  App.css         Portfolio styling
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Run Tests

```bash
npm test
```

## Available Scripts

- `npm start` - Start the app in development mode
- `npm test` - Launch the test runner
- `npm run build` - Create a production build
- `npm run eject` - Eject CRA configuration if needed

## Customization

Most portfolio content lives in [`src/data/portfolioData.js`](src/data/portfolioData.js). Update this file to change:

- Navigation links
- Hero copy
- Services and process steps
- Skills and tools
- Projects and achievements
- Experience, education, and certifications
- Contact information and social links

Section components are organized in [`src/components/`](src/components/), and the page composition lives in [`src/App.js`](src/App.js).

## Contact

- Email: yuvanyvgs5454@gmail.com
- Phone: +91 63820 14376
- LinkedIn: https://www.linkedin.com/in/yuvan-jeyan-g-portfolio/
- GitHub: https://github.com/Yuvanjeyan

## Notes

- The portfolio includes a downloadable resume link at `/YUVAN_JEYAN_G_Resume.pdf`.
- Some project and certification links point to live external resources.

