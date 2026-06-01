<div align="center">

# 🧠 SmartClip

**AI-Powered Smart Clipboard Manager**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tauri](https://img.shields.io/badge/Tauri-1.6-blue?logo=tauri)](https://tauri.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Rust](https://img.shields.io/badge/Rust-1.70-orange?logo=rust)](https://www.rust-lang.org)

[English](README.md) | [简体中文](README_CN.md) | [繁體中文](README_TW.md)

<img src="https://raw.githubusercontent.com/gitstq/SmartClip-Manager/main/assets/screenshot.png" alt="SmartClip Screenshot" width="800">

</div>

---

## 🎉 Project Introduction

**SmartClip** is an intelligent clipboard manager that revolutionizes how you manage your copy-paste history. Unlike traditional clipboard managers, SmartClip uses **AI-powered content detection** to automatically categorize your clipboard items into text, code, links, and images.

### 🌟 Why SmartClip?

- **🤖 Intelligent Categorization**: Automatically detects content type (code, link, text, image)
- **⚡ Lightning Fast**: Built with Rust + Tauri for native performance
- **🔍 Fuzzy Search**: Find anything instantly with Fuse.js powered search
- **🎯 Global Shortcut**: Access with `Cmd/Ctrl+Shift+V` from anywhere
- **💾 Persistent History**: Keeps last 1000 clipboard items
- **🌙 Beautiful UI**: Modern dark theme with smooth animations

---

## ✨ Core Features

### 📋 Smart Content Detection
- **Code Detection**: Automatically identifies code snippets (JavaScript, TypeScript, Python, Rust, etc.)
- **Link Recognition**: Detects URLs and web links
- **Image Support**: Handles base64 encoded images
- **Text Classification**: Smart tagging for better organization

### 🔎 Powerful Search
- **Fuzzy Search**: Find items even with typos
- **Multi-field Search**: Search in content and tags
- **Real-time Filtering**: Instant results as you type
- **Type Filtering**: Filter by text, code, link, or image

### ⌨️ Keyboard-First Design
- **Global Hotkey**: `Cmd/Ctrl+Shift+V` to toggle
- **Quick Actions**: Copy, delete, and navigate with keyboard
- **System Tray**: Runs quietly in background

### 🎨 Modern Interface
- **Dark Theme**: Easy on the eyes
- **Responsive Layout**: Adapts to different window sizes
- **Smooth Animations**: Polished user experience
- **Detail Panel**: Preview full content before copying

---

## 🚀 Quick Start

### Requirements

- **macOS**: 10.13 or later
- **Windows**: Windows 10 or later
- **Linux**: Ubuntu 18.04+ / Debian 10+

### Installation

#### Download Pre-built Binaries

Download the latest release for your platform:

| Platform | Download |
|----------|----------|
| macOS (Intel) | [SmartClip-x64.dmg](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| macOS (Apple Silicon) | [SmartClip-arm64.dmg](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| Windows | [SmartClip-setup.exe](https://github.com/gitstq/SmartClip-Manager/releases/latest) |
| Linux | [Smartclip.AppImage](https://github.com/gitstq/SmartClip-Manager/releases/latest) |

#### Build from Source

```bash
# Clone the repository
git clone https://github.com/gitstq/SmartClip-Manager.git
cd SmartClip-Manager

# Install dependencies
npm install

# Run in development mode
npm run tauri-dev

# Build for production
npm run tauri-build
```

### First Launch

1. **Install** SmartClip on your system
2. **Launch** the application
3. **Grant Permissions**: Allow accessibility permissions when prompted (required for clipboard monitoring)
4. **Start Using**: Press `Cmd/Ctrl+Shift+V` to open SmartClip

---

## 📖 Detailed Usage Guide

### Basic Usage

1. **Copy anything** as you normally would (Ctrl+C / Cmd+C)
2. **Open SmartClip** with `Cmd/Ctrl+Shift+V`
3. **Search** for your item using the search bar
4. **Click** any item to copy it back to your clipboard

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl+Shift+V` | Toggle SmartClip window |
| `↑/↓` | Navigate through items |
| `Enter` | Copy selected item |
| `Delete` | Delete selected item |
| `Esc` | Close window |
| `Cmd/Ctrl+K` | Focus search bar |

### Content Types

SmartClip automatically categorizes your clipboard:

| Type | Icon | Description |
|------|------|-------------|
| 📝 Text | `FileText` | Plain text, notes, documents |
| 💻 Code | `Code` | Code snippets, scripts |
| 🔗 Link | `Link` | URLs, web addresses |
| 🖼️ Image | `Image` | Base64 encoded images |

### Search Tips

- **Fuzzy matching**: Type "js" to find JavaScript code
- **Tag search**: Search for tags like "npm", "git", "react"
- **Content search**: Search within the actual clipboard content
- **Combined**: Mix content and type filters for precise results

---

## 💡 Design Philosophy & Roadmap

### Why Tauri + React?

We chose **Tauri** over Electron because:
- **Smaller bundle size**: ~3MB vs ~100MB+
- **Better performance**: Native Rust backend
- **Lower memory usage**: No Chromium overhead
- **Native OS integration**: Better system tray, shortcuts, and notifications

**React** provides:
- **Component reusability**: Modular UI architecture
- **TypeScript support**: Type-safe development
- **Rich ecosystem**: Access to libraries like Fuse.js

### Future Roadmap

- [ ] **Cloud Sync**: Sync clipboard history across devices
- [ ] **AI Summarization**: Auto-summarize long text snippets
- [ ] **OCR Support**: Extract text from copied images
- [ ] **Custom Themes**: Light mode and custom color schemes
- [ ] **Plugin System**: Extend functionality with plugins
- [ ] **End-to-End Encryption**: Secure cloud storage

---

## 📦 Packaging & Deployment

### Build Commands

```bash
# Development
npm run tauri-dev

# Build for current platform
npm run tauri-build

# Build for specific target
cargo tauri build --target x86_64-pc-windows-msvc
cargo tauri build --target x86_64-apple-darwin
cargo tauri build --target aarch64-apple-darwin
cargo tauri build --target x86_64-unknown-linux-gnu
```

### Platform-Specific Notes

**macOS**:
- Requires Xcode Command Line Tools
- Code signing recommended for distribution
- Notarize for Gatekeeper compliance

**Windows**:
- Requires Microsoft Visual C++ Build Tools
- Code signing with certificate recommended
- MSI installer generated automatically

**Linux**:
- Requires `libgtk-3-dev`, `libwebkit2gtk-4.0-dev`
- AppImage and .deb packages generated

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Fork and clone
git clone https://github.com/your-username/SmartClip-Manager.git

# Install dependencies
npm install

# Run in dev mode
npm run tauri-dev
```

### Submitting Changes

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit your changes: `git commit -m 'feat: add amazing feature'`
3. Push to the branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test changes
- `chore:` Build/tooling changes

---

## 📄 License

SmartClip is released under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 SmartClip Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- [Tauri](https://tauri.app) - The framework that makes this possible
- [React](https://react.dev) - UI library
- [Fuse.js](https://fusejs.io) - Fuzzy search
- [Lucide](https://lucide.dev) - Beautiful icons
- [date-fns](https://date-fns.org) - Date formatting

---

<div align="center">

**Made with ❤️ by the SmartClip Team**

[⭐ Star us on GitHub](https://github.com/gitstq/SmartClip-Manager) | [🐛 Report Issue](https://github.com/gitstq/SmartClip-Manager/issues) | [💡 Request Feature](https://github.com/gitstq/SmartClip-Manager/issues)

</div>
