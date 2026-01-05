# WikiTruth

WikiTruth is a decentralized evidence marketplace built on the **Oasis Sapphire** privacy public blockchain, focusing on secure storage, trusted transactions, and controlled disclosure of confidential evidence.

This repository provides the frontend interface built with **React 19** and **Vite 6**.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173) and will automatically open in your browser.

### Build

Build for production:

```bash
npm run build
```

This command will:
1. Run TypeScript type checking
2. Build the application for production
3. Output files to the `dist/` directory

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 6** - Build tool and dev server
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Ant Design** - UI component library
- **TailwindCSS 4** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **Viem** - Ethereum library for interacting with blockchain
- **Motion** - Animation library
- **@xyflow/react** - React Flow for node-based diagrams

## 📁 Project Structure

```
src/
├── components/        # Reusable components
│   ├── base/         # Base components
│   ├── ui/           # UI components
│   ├── sections/     # Page sections
│   └── earth3d/      # 3D Earth visualization components
├── pages/            # Route-level pages
├── hooks/            # Custom React hooks
├── contexts/         # React Context providers
├── config/          # Configuration files
├── types/           # TypeScript type definitions
├── styles/          # Global styles and themes
├── assets/          # Static assets
├── lib/             # Utility functions
└── dapp/            # DApp-specific components and utilities
```

## 🎯 Features

- **Code Splitting**: Route-based and component-based code splitting for optimal performance
- **Type Safety**: Full TypeScript support
- **Modern UI**: Built with Ant Design and TailwindCSS
- **3D Visualization**: Interactive 3D Earth using Three.js
- **Blockchain Integration**: Web3 functionality via Viem
- **Responsive Design**: Mobile-first responsive layout
- **Performance Optimized**: Lazy loading and optimized bundle sizes

## 📝 Code Style

- **TypeScript**: All code is written in TypeScript
- **Naming Conventions**:
  - Components: PascalCase (e.g., `HomePage.tsx`)
  - Hooks/utilities: camelCase (e.g., `useStatusColor.ts`)
  - Styles: kebab-case (e.g., `globals.css`)
- **Formatting**: Single quotes, 2-space indentation, trailing commas
- **Linting**: ESLint with React hooks and refresh plugins

## 🔧 Configuration

Key configuration files:

- `vite.config.ts` - Vite build configuration with path aliases (`@`, `@dapp`, etc.)
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration

## 🌐 Environment Variables

Create a `.env` file in the root directory for local development. See `.env.example` for available environment variables.

**Important**: Never commit sensitive keys or credentials to version control.

## 📦 Build Output

The production build outputs to the `dist/` directory, which should not be committed to version control.

## 🤝 Contributing

1. Follow the code style guidelines
2. Run `npm run lint` before committing
3. Ensure `npm run build` passes successfully
4. Write clear commit messages

## 📄 License

This project is private and proprietary.

## 🔗 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Ant Design Documentation](https://ant.design/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
