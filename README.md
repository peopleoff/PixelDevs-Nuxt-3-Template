# Nuxt 3 Project Template

This repository serves as the **starter template** for all new projects. It comes pre-configured with essential modules, default settings, and best practices to streamline development.

---

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone <repository-url> your-project-name
   cd your-project-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## 📦 Pre-Installed Modules

This template includes the following modules to get you started quickly:

- **[Tailwind CSS](https://tailwindcss.nuxtjs.org/)** – Utility-first CSS framework.
- **[VueUse](https://vueuse.org/nuxt/README.html)** – Collection of essential Vue 3 utilities.
- **[Nuxt Fonts](https://fonts.nuxt.com/)** – Easy access to Google Fonts and custom fonts.
- **[ESLint](https://eslint.nuxt.com/)** – Linting tool to maintain code quality.
- **[Nuxt SEO](https://nuxtseo.com/)** – Powerful SEO tools for your project.
- **[Nuxt Scripts](https://scripts.nuxt.com/)** – Simple script management for Nuxt apps.
- **[Auto Animate](https://auto-animate.formkit.com/#usage)** – Add animations with minimal effort.
- **[Nuxt Color Mode](https://color-mode.nuxtjs.org/)** – Manage light and dark modes.
- **[Shadcn-Vue](https://www.shadcn-vue.com/)** – Component library.

For more information on Nuxt 3, check the [official documentation](https://nuxt.com/docs/getting-started).

---

## 🛠 Default Settings and Configurations

1. **Tailwind CSS**:
   - Tailwind is configured with custom theme settings.
   - See `tailwind.config.js` for further customization.

2. **SEO Optimization**:
   - SEO configurations can be found in `nuxt.config.ts` under the SEO section.

3. **Color Mode**:
   - Toggle between dark and light modes with `@nuxtjs/color-mode`.

4. **Auto Animate**:
   - Pre-configured for easy animations in the UI.

4. **Google Analytics**:
   - Loaded using NuxtScripts, enabled for production only. Edit the ID in `nuxt.config.ts`

---

## 🧰 Available Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Build project for production         |
| `npm run start`   | Run production server                |
| `npm run lint`    | Run ESLint to check code quality     |
| `npm run generate`| Generate static site files           |

---

## 📂 Project Structure

```
/assets        - Static assets (CSS, images, etc.)
/components    - Vue components
/layouts       - Application layouts
/middleware    - Route middleware
/pages         - Application views
/plugins       - Nuxt plugins
/stores        - Pinia stores
/content       - Markdown files for Nuxt Content CMS
```

---

## 🔒 Environment Variables

This template uses a `.env` file to manage secrets and environment-specific variables. Create a `.env` file based on the `.env.example` provided:

```
API_URL=<your-api-url>
COLOR_MODE=dark
```

---

## 🛡 Linting and Code Style

This project follows strict linting rules using ESLint and Prettier.

- **Linting:** Run `npm run lint` to check for code issues.
- **Prettier:** Automatically formats code on save.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📝 Feedback and Issues

For feedback, issues, or feature requests, please open an issue on the repository or contact the team directly.

---

## 📧 Contact

For any queries, reach out to:

- **Team Lead:** [Your Name] (your.email@company.com)
- **Documentation:** [Contributor Name] (contributor.email@company.com)

---

Happy Coding! 🚀
