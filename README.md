# YallaLearn Desktop

## A modern, cross-platform markdown-based note-taking application built with Electron

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue.svg)](https://www.typescriptlang.org/)
[![Electron](https://img.shields.io/badge/Electron-31.0.2-47848F.svg)](https://www.electronjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)](https://reactjs.org/)

## 📖 Overview

YallaLearn Desktop is a sleek, modern note-taking application that empowers users to create, edit, and organize markdown-formatted notes with ease. Built on the robust Electron framework, it delivers a native desktop experience across Windows, macOS, and Linux platforms.

### 🎯 Key Highlights

- **Cross-Platform Compatibility**: Runs seamlessly on Windows, macOS, and Linux
- **Markdown Support**: Full-featured markdown editor with live preview
- **Auto-Save**: Automatic saving every 3 seconds to prevent data loss
- **Modern UI**: Beautiful, responsive interface with dark theme support
- **Performance Optimized**: Built with TypeScript and modern web technologies
- **Secure**: Sandboxed environment with context isolation

## ✨ Features

### Core Functionality

- 📝 **Rich Markdown Editor**: Create and edit notes with full markdown syntax support
- 🔍 **Live Preview**: Real-time markdown rendering as you type
- 💾 **Auto-Save**: Automatic saving every 3 seconds
- 📂 **Note Management**: Create, delete, and organize your notes
- 🎨 **Modern UI**: Clean, intuitive interface with dark theme
- 🔄 **Cross-Platform Sync**: Notes stored locally with consistent behavior across platforms

### Technical Features

- 🛡️ **Security**: Sandboxed renderer process with context isolation
- ⚡ **Performance**: Optimized with React 18 and TypeScript
- 🎯 **Accessibility**: Built with accessibility best practices
- 🔧 **Extensible**: Modular architecture for easy feature additions
- 📱 **Responsive**: Adaptive UI that works on different screen sizes

## 🚀 Installation

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

### Build from Source

```bash
# Clone the repository
git clone https://github.com/KhaledSaeed18/yalla-learn-desktop.git
cd yalla-learn-desktop

# Install dependencies
yarn install

# Build the application
yarn build

# Create platform-specific distributables
yarn build:win    # Windows
yarn build:mac    # macOS
yarn build:linux  # Linux
```

## 📱 Usage

### Getting Started

1. **Launch the Application**: Open YallaLearn Desktop from your applications folder
2. **Welcome Screen**: You'll see a welcome screen with a sample note
3. **Create Your First Note**: Click the "+" button in the sidebar to create a new note
4. **Start Writing**: Use the markdown editor to write and format your notes

### Markdown Syntax Support

YallaLearn supports standard markdown syntax including:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Text Formatting**: `**bold**`, `*italic*`
- **Lists**: Ordered and unordered lists

### Data Storage

Notes are stored locally in:

- **Windows**: `%USERPROFILE%\YallaLearn\`
- **macOS**: `~/YallaLearn/`
- **Linux**: `~/YallaLearn/`

## 🛠️ Development

### Development Setup

```bash
# Clone the repository
git clone https://github.com/KhaledSaeed18/yalla-learn-desktop.git
cd yalla-learn-desktop

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Project Structure

``` bash
yalla-learn-desktop/
├── src/
│   ├── main/           # Electron main process
│   │   ├── index.ts    # Main entry point
│   │   └── lib/        # Core functionality
│   ├── preload/        # Preload scripts
│   ├── renderer/       # React frontend
│   │   └── src/
│   │       ├── components/  # React components
│   │       ├── hooks/       # Custom hooks
│   │       ├── store/       # State management
│   │       └── utils/       # Utilities
│   └── shared/         # Shared types and constants
├── resources/          # Static resources
├── build/             # Build configurations
└── out/               # Built application
```

### Architecture

- **Main Process**: Handles system interactions, file operations, and window management
- **Renderer Process**: React-based UI running in a sandboxed environment
- **Preload Scripts**: Secure bridge between main and renderer processes
- **State Management**: Jotai for lightweight, atomic state management

### Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build for production |
| `yarn start` | Start the built application |
| `yarn lint` | Run ESLint |
| `yarn typecheck` | Run TypeScript type checking |

### Technology Stack

- **Framework**: Electron 31.0.2
- **Frontend**: React 18.3.1 + TypeScript 5.5.2
- **Build Tool**: Vite 6.1.1 + electron-vite
- **UI Framework**: Tailwind CSS 3.4.17
- **State Management**: Jotai 2.11.1
- **Markdown Editor**: @mdxeditor/editor 3.21.0
- **Icons**: React Icons 5.4.0

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Extended from @electron-toolkit configs
- **Conventional Commits**: Follow conventional commit standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Electron](https://www.electronjs.org/) - Framework for building desktop apps
- [React](https://reactjs.org/) - UI library
- [MDX Editor](https://mdxeditor.dev/) - Markdown editing component
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📞 Support

- **Bug Reports**: [GitHub Issues](https://github.com/KhaledSaeed18/yalla-learn-desktop/issues)

<div align="center">

## 🌐 Visit Our Website

**Experience Yalla Learn in your browser!**

### [🚀 Try Yalla Learn →](https://yalla-learn.me)

</div>
