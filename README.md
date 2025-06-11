# KakuJS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.16.0-brightgreen.svg)](https://nodejs.org/)

TypeScript library for generating Japanese mock data. KakuJS provides utilities to generate realistic Japanese names, addresses, phone numbers, and other culturally-specific test data for your applications.

## Features

- 🎌 **Japanese-focused**: Built specifically for generating Japanese mock data
- 🚀 **Lightweight**: Minimal dependencies, fast execution
- 📦 **Dual module support**: Works with both ESM and CommonJS
- 🔒 **Type-safe**: Written in TypeScript with full type definitions
- 🧪 **Well-tested**: Comprehensive test coverage

## Installation

```bash
npm install kakujs
```

or

```bash
pnpm add kakujs
```

or

```bash
yarn add kakujs
```

## Usage

### UUID Generation

```typescript
import { generateUUID } from 'kakujs';

// Generate a random UUID v4
const uuid = generateUUID();
console.log(uuid); // e.g., "123e4567-e89b-12d3-a456-426614174000"
```

### CommonJS Usage

```javascript
const { generateUUID } = require('kakujs');

const uuid = generateUUID();
console.log(uuid);
```

## API Documentation

### String Utilities

#### `generateUUID(): string`

Generates a random UUID v4 string using the Web Crypto API.

**Returns**: A string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`

**Example**:
```typescript
const id = generateUUID();
// "550e8400-e29b-41d4-a716-446655440000"
```

## Development

### Prerequisites

- [mise](https://mise.jdx.dev/) (will be installed automatically if not present)
- Node.js >= 22.16.0
- pnpm >= 10.11.1

### Quick Start

```bash
# Clone the repository
git clone https://github.com/albelium/kakujs.git
cd kakujs

# Run bootstrap (installs all tools and dependencies)
mise run bootstrap
# or
./scripts/bootstrap.sh

# Run tests
pnpm test

# Build the library
pnpm build
```

### Available Scripts

- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm build` - Build the library for production
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm type-check` - Run TypeScript type checking

### Project Structure

```
kakujs/
├── src/              # Source code
│   └── modules/      # Feature modules
│       └── string/   # String utilities
├── test/             # Test files
├── dist/             # Build output (generated)
└── scripts/          # Utility scripts
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes using conventional commits (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [TypeScript](https://www.typescriptlang.org/)
- Tested with [Vitest](https://vitest.dev/)
- Bundled with [tsup](https://tsup.egoist.dev/)