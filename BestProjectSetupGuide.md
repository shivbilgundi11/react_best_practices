# React Best Practices Project

## Overview

This project is structured to follow best practices in React development, ensuring a scalable, maintainable, and clean codebase.

## Folder Structure

src/
|-- assets/
|-- components/
|-- ui/
| |-- Button.tsx
| |-- Form.tsx
| |-- Modal.tsx
| HeroSection.tsx
|-- hooks/
| |-- useDebounce.ts
| |-- useFetchAPI.ts
|-- pages/
| |-- About.tsx
| |-- Contact.tsx
| |-- Home.tsx
|-- services/
| |-- api/
| |-- providers/
| |-- state/
|-- utils/
| |-- formatters.ts
| |-- helpers.ts
|-- App.tsx
|-- index.css
|-- main.tsx

### `assets/`

This folder contains static assets such as images, fonts, and other media files used throughout the application.

### `components/`

Contains reusable React components that can be used across various parts of the application.

### `ui/`

This directory includes UI-specific components like buttons, forms, modals, and other elements related to the user interface.

### `hooks/`

Custom hooks for abstracting and reusing logic across different components. Examples include `useDebounce` and `useFetchAPI`.

### `pages/`

Contains React components that correspond to different pages of the application. For instance, `About.tsx`, `Contact.tsx`, and `Home.tsx` represent different routes in the app.

### `services/`

This directory is subdivided into:

- `api/`: For API interaction logic.
- `providers/`: For context providers and related utilities.
- `state/`: For managing global state using solutions like Redux or Context API.

### `utils/`

Contains utility functions and helpers such as formatters and general-purpose functions used throughout the application.

### Root Files

- **`App.tsx`**: The main App component where the application’s root component is defined.
- **`index.css`**: Global CSS styles.
- **`main.tsx`**: The entry point of the application where the React app is rendered to the DOM.

## Plugin Installation

To ensure a smooth development experience, several plugins and tools are used. Run the following commands to install them:

```bash
npm i eslint-plugin-simple-import-sort
npm install -D prettier prettier-plugin-tailwindcss
npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
```
