# AMRMP

## Description
AMRMP is a modern web application designed for knowledge management and connectivity. It provides a platform for users to access and share information efficiently, solving the problem of fragmented data storage and collaboration in organizational settings.

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

## Installation
1. Ensure you have Bun installed on your system.
2. Clone the repository and navigate to the project directory.
3. Install dependencies:
   ```bash
   bun install
   ```
4. Set up your environment variables (see Environment Variables section).
5. Start the development server:
   ```bash
   bun run dev
   ```

## Usage
After installation, run the development server:
```bash
bun run dev
```
The application will be available at `http://localhost:5173` (default Vite port).

For production build:
```bash
bun run build
bun run preview
```

## Project Structure
```
AMRMP-1/
├── public/          # Static assets
├── src/
│   ├── assets/      # Application assets
│   ├── components/  # Reusable UI components
│   ├── data/        # Data management
│   ├── hooks/       # Custom React hooks
│   ├── integrations/# Third-party integrations
│   ├── lib/         # Utility libraries
│   ├── routes/      # Application routes
│   ├── services/    # API services
│   └── styles.css   # Global styles
├── supabase/        # Supabase configuration and migrations
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Environment Variables
Create a `.env` file in the root directory with the following variables:
```
SUPABASE_URL=your_supabase_url
SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
VITE_SUPABASE_PROJECT_ID=your_supabase_project_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```
These are required for connecting to your Supabase backend.

## API Endpoints
This is a frontend application that interacts with Supabase directly. No custom API endpoints are exposed. All data operations are handled through Supabase client libraries.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `bun run lint`
5. Format code: `bun run format`
6. Submit a pull request

## License
[Specify your license here, e.g., MIT]

## Author
[Your Name] - [your.email@example.com] - [Your GitHub Profile]
