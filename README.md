# Smart Debt Pros

A modern, responsive web application for Smart Debt Pros, featuring a mobile-friendly header, interactive multi-step form, and accessible UI components.

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Scripts](#scripts)
- [Styling](#styling)
- [Assets](#assets)
- [Version Control](#version-control)
- [Contact](#contact)

---

## Project Structure

```
smart-debt-pros/
├── .gitignore
├── bs-config.json           # Browsersync config (if used)
├── package.json             # Node dependencies and scripts
├── package-lock.json
├── public/
│   ├── css/
│   │   ├── main.scss        # Main SCSS source
│   │   ├── main.css         # Compiled CSS
│   │   └── main.css.map     # CSS sourcemap
│   ├── images/              # All image assets (SVGs, PNGs, logos, icons)
│   ├── index.html           # Main HTML file
│   └── js/
│       └── main.js          # Main JavaScript file (jQuery-based)
└── node_modules/            # Installed dependencies (gitignored)
```

## Getting Started

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, in the project root:

```bash
npm install
```

### 2. Run the Development Server

If using Browsersync (see `bs-config.json`):

```bash
npx browser-sync start --config bs-config.json
```

Or, for static preview, you can use any static server:

```bash
npx serve public
# or
python3 -m http.server 8000 --directory public
```

### 3. Build SCSS

If you edit `main.scss`, compile it to CSS:

```bash
npx sass public/css/main.scss public/css/main.css --watch
```

## Development Workflow

- **HTML**: Edit `public/index.html` for structure and content.
- **SCSS**: Edit `public/css/main.scss` for styles. Compile to `main.css`.
- **JavaScript**: Edit `public/js/main.js`. Uses jQuery for DOM interactions.
- **Images/Assets**: Place in `public/images/`.

## Scripts

Common scripts (add to `package.json` if desired):

```json
"scripts": {
  "start": "npx browser-sync start --config bs-config.json",
  "build:css": "npx sass public/css/main.scss public/css/main.css"
}
```

## Styling
- Uses SCSS (`main.scss`) for maintainable, modular styles.
- Responsive breakpoints for mobile and desktop.
- Custom variables for colors, fonts, etc.

## Assets
- All images and SVGs are in `public/images/`.
- Logos, icons, and illustration assets are included.

## Version Control
- This project uses Git. Initialize with `git init` and make regular commits.
- `.gitignore` excludes `node_modules`, `dist`, and `.env`.

## Contact
For questions or contributions, contact the project maintainer.

---

**Happy coding!**
