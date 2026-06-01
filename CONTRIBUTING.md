# Contributing to SmartClip

First off, thank you for considering contributing to SmartClip! It's people like you that make SmartClip such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to provide a friendly, safe, and welcoming environment for all.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, SmartClip version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the enhancement**
- **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and ensure they pass
5. Commit your changes: `git commit -m 'feat: add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Rust](https://www.rust-lang.org/tools/install) (v1.70 or later)
- [Git](https://git-scm.com/)

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/your-username/SmartClip-Manager.git
cd SmartClip-Manager

# Install dependencies
npm install

# Run in development mode
npm run tauri-dev
```

## Styleguides

### Git Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation only changes
- `style:` - Changes that do not affect the meaning of the code
- `refactor:` - A code change that neither fixes a bug nor adds a feature
- `perf:` - A code change that improves performance
- `test:` - Adding missing tests or correcting existing tests
- `chore:` - Changes to the build process or auxiliary tools

Example:
```
feat: add fuzzy search to clipboard items

- Implement Fuse.js for fuzzy matching
- Add search highlighting
- Update UI to show search results
```

### Rust Styleguide

- Follow the [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/)
- Run `cargo fmt` before committing
- Run `cargo clippy` and fix any warnings
- Write documentation comments for public APIs

### TypeScript/JavaScript Styleguide

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable names
- Add JSDoc comments for functions

### CSS Styleguide

- Use CSS custom properties (variables) for colors and sizes
- Follow BEM naming convention for classes
- Prefer flexbox and grid for layouts

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Test on multiple platforms if possible

## Documentation

- Update the README.md if you change functionality
- Add JSDoc/Rustdoc comments for public APIs
- Update the CHANGELOG.md with your changes

## Community

- Join our discussions in GitHub Issues
- Be respectful and constructive in all interactions
- Help others when you can

Thank you for contributing! 🎉
