Je collecte le contenu actuel du README pour le reformuler proprement.

Read [](file:///home/micro/Documents/my-project/AMRMP-1/README.md)

# AMRMP

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://shields.io/)
[![License](https://img.shields.io/badge/license-TBD-lightgrey?style=flat-square)](https://shields.io/)
[![Version](https://img.shields.io/badge/version-unreleased-blue?style=flat-square)](https://shields.io/)

## Description
AMRMP is a modern web application for knowledge management and connectivity. It centralizes content, improves collaboration, and simplifies access to research and organizational resources.

## Tech Stack
- **Frontend Framework**: React with TypeScript
- **Routing**: TanStack Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with Radix UI components
- **Backend/Database**: Supabase
- **Package Manager**: Bun
- **Linting/Formatting**: ESLint, Prettier

## Features
- User authentication and authorization
- Real-time data synchronization with Supabase
- Responsive and accessible UI components
- Modular component architecture
- Type-safe development with TypeScript
- Fast development server with hot reloading

## Getting Started
### Install
1. Ensure Bun is installed on your system.
2. Clone the repository and navigate to the project folder.
3. Install dependencies:
   ```bash
   bun install
   ```

### Setup
1. Create a `.env` file in the root directory.
2. Add the required Supabase configuration values (see Environment Variables below).

### Run
Start the development server:
```bash
bun run dev
```

Open the app at:
```text
http://localhost:5173
```

### Production
Build for production:
```bash
bun run build
```

Preview the production build:
```bash
bun run preview
```

## Project Structure
```text
AMRMP-1/
├── public/          # Static assets served by Vite
├── src/
│   ├── assets/      # Images and other media files
│   ├── components/  # Reusable UI components
│   ├── data/        # Local data definitions and mock data
│   ├── hooks/       # Custom React hooks
│   ├── integrations/# Third-party service setup (Supabase, etc.)
│   ├── lib/         # Shared utility functions and helpers
│   ├── routes/      # Application page components and routing
│   ├── services/    # API and Supabase service calls
│   └── styles.css   # Global CSS styles
├── supabase/        # Supabase configuration and migrations
├── .env             # Environment variables (local only)
├── package.json     # Project dependencies and scripts
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Environment Variables
Create a `.env` file in the project root with the following values:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
VITE_SUPABASE_PROJECT_ID=your_supabase_project_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

These variables are required to connect the frontend to Supabase.

## API Endpoints
This is a frontend application that communicates directly with Supabase. There are no custom backend API endpoints; all data operations use Supabase client libraries.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting:
   ```bash
   bun run lint
   ```
5. Format code:
   ```bash
   bun run format
   ```
6. Submit a pull request

## License
[Specify your license here, e.g., MIT]

## Author
[Your Name] - [your.email@example.com] - [Your GitHub Profile]