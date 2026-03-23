# Reactivities

This is a demo application designed to showcase various features of modern web development using TypeScript, React, and Vite. The primary goal of this project was to learn how to use React with .NET.

The project includes integration with Microsoft SQL Server and demonstrates how to set up an environment for running the app in Visual Studio Code which is fairly different from Visual Studio which I usually work with. It uses several libraries and tools:

- **React**: For building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Vite**: Next-generation frontend tooling with fast builds and hot module replacement (HMR).
- **Material-UI**: Provides a set of React UI components following Google's Material Design guidelines.

The application is set up to automatically populate the database upon initialization, making it easy to get started. It also includes linting rules using ESLint and various other dependencies for state management, form handling, and data fetching.

## Table of Contents

- [Installation](#installation)
- [Packages Used](#packages-used)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)

## Installation

This demo project should be run in Visual Studio Code with a Microsoft SQL Server that the project will populate itself. Make sure you have Node.js and npm installed, then follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install all necessary dependencies.
3. Ensure your database server is running and configured correctly.
4. Use Visual Studio Code to open the project.
5. Set up any required environment variables in the `.env` files.

## Packages Used

### Dependencies
- `@emotion/react`: For CSS-in-JS styling.
- `@emotion/styled`: For styled components with Emotion.
- `@fontsource/roboto`: Roboto font package.
- `@hookform/resolvers`: Resolvers for React Hook Form.
- `@microsoft/signalr`: SignalR client library.
- `@mui/icons-material`: Material-UI icons.
- `@mui/material`: Material-UI components.
- `@mui/x-date-pickers`: Date pickers for Material-UI.
- `@tanstack/react-query`: Data fetching and state management library.
- `@tanstack/react-query-devtools`: DevTools for React Query.
- `axios`: HTTP client for making requests.
- `date-fns`: Modern JavaScript date utility library.
- `leaflet`: Open-source JavaScript library for mobile-friendly interactive maps.
- `mobx`: Simple, scalable state management.
- `mobx-react-lite`: React bindings for MobX.
- `react`: Core library for building UI components.
- `react-calendar`: Calendar component for React.
- `react-cropper`: Image cropping component for React.
- `react-dom`: React package for managing DOM elements.
- `react-dropzone`: Component for file drag-and-drop uploads in React.
- `react-hook-form`: Performant, flexible form validation and management.
- `react-intersection-observer`: Intersection Observer API polyfill for React.
- `react-leaflet`: React components for Leaflet maps.
- `react-router`: Routing library for React applications.
- `react-toastify`: Notification system for React apps.
- `zod`: TypeScript-first schema validation.

### Dev Dependencies
- `@eslint/js`: ESLint configuration for JavaScript files.
- `@types/leaflet`: TypeScript definitions for Leaflet.
- `@types/node`: TypeScript definitions for Node.js.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `@vitejs/plugin-react-swc`: Vite plugin for React with SWC.
- `eslint`: Linter for identifying and fixing problems in JavaScript code.
- `eslint-plugin-react-hooks`: ESLint plugin for React hooks linting.
- `eslint-plugin-react-refresh`: ESLint plugin for React Refresh.
- `globals`: Globals module to define global variables in TypeScript projects.
- `typescript`: Superset of JavaScript that adds static types.
- `typescript-eslint`: ESLint plugin for TypeScript.
- `vite`: Next-generation frontend tooling.
- `vite-plugin-mkcert`: Vite plugin for generating self-signed certificates.