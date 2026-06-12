# 🤝 Contributing to Pak Tax Calculator

First of all, thank you for taking the time to contribute! 🎉
Every contribution — big or small — is highly appreciated.

---

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Code Style](#code-style)
- [Commit Message Guidelines](#commit-message-guidelines)

---

## 🚀 Getting Started

1. **Fork** the repository
2. **Clone** your forked repo:
   ```bash
   git clone https://github.com/YasirAwan4831/pak-tax-calculator.git
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Run** the development server:
   ```bash
   npm run dev
   ```

---

## 🛠️ How to Contribute

### Option 1 — Fix a Bug
- Check the [Issues](https://github.com/YasirAwan4831/pak-tax-calculator/issues) tab
- Find an issue labeled `bug` and comment that you want to work on it
- Fix the bug and submit a Pull Request

### Option 2 — Add a Feature
- Check issues labeled `enhancement` or `feature request`
- Or suggest your own feature (see below)
- Implement and submit a Pull Request

### Option 3 — Improve Documentation
- Fix typos, improve descriptions, add missing information
- Update README or any markdown file

### Option 4 — Update Tax Slabs
- If FBR releases new tax slabs, you can update `src/data/taxSlabs.js`
- Always include the official FBR source link in your PR

---

## 💻 Development Setup

```bash
# Clone the repo
git clone https://github.com/YasirAwan4831/pak-tax-calculator.git

# Go into the directory
cd pak-tax-calculator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📥 Pull Request Guidelines

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test thoroughly on mobile and desktop
4. Commit with a clear message (see below)
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request against the `main` branch
7. Fill in the PR template and describe your changes clearly

**Your PR should:**
- Be focused on one feature or fix
- Not break existing functionality
- Be mobile responsive
- Follow the existing code style
- Include a short description of what was changed and why

---

## 🐛 Reporting Bugs

Found a bug? Please open an [Issue](https://github.com/YasirAwan4831/pak-tax-calculator/issues/new) and include:

- A clear and descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information

---

## 💡 Suggesting Features

Have an idea? Open an [Issue](https://github.com/YasirAwan4831/pak-tax-calculator/issues/new) with:

- A clear title starting with `[Feature Request]`
- Detailed description of the feature
- Why it would be useful for Pakistani users
- Any mockup or reference if available

---

## 🎨 Code Style

- Use **functional components** with React hooks only
- Use **Tailwind CSS** utility classes — avoid custom CSS unless necessary
- Use **Lucide React** for all icons
- All components must support **dark mode** using `dark:` Tailwind classes
- All components must be **mobile responsive**
- Keep components **small and reusable**
- Use `const` and arrow functions
- Add comments for complex logic

---

## 📝 Commit Message Guidelines

Use clear and descriptive commit messages:

```
feat: add capital gain tax calculator
fix: correct salary tax slab for 2026-27
docs: update README installation steps
style: improve dark mode colors on ResultCard
refactor: simplify tax calculation utility function
chore: update dependencies
```

Prefixes to use:
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation update
- `style:` — UI/styling changes
- `refactor:` — code refactoring
- `chore:` — maintenance tasks

---

## ❤️ Thank You

Every contribution makes Pak Tax Calculator better for thousands of Pakistani users.
We appreciate your time and effort!

---

*Maintained by [Muhammad Yasir](https://github.com/YasirAwan4831)*