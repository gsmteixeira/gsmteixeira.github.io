<<<<<<< HEAD
<<<<<<< HEAD
# React + TypeScript + Vite
=======
# GabrielPage
>>>>>>> 9b598aa9c9dd27a237bda7e3011d436dfaca6543

GabrielPage is a personal academic landing page for **Gabriel Teixeira**, a PhD candidate in Astrophysics & Deep Learning.

The site is a single-page application built with **React + TypeScript + Vite** and styled with **Tailwind CSS v3**. It is designed to present research, publications, talks and projects in a clean, modern and responsive layout.

---

## Features

- Single-page layout with smooth navigation between sections
- Custom background with abstract shapes
- Academic-focused sections:
  - Begin (hero section)
  - About
  - Research
  - Publications
  - Talks
  - Projects
  - Contact
- Responsive design for mobile and desktop
- Sticky navbar with active section highlight
- Contact form integrated with **Formspree** for email submissions
- Code structured with components and small data modules (for example, publications list)

---

## Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Build tool / Dev server:** Vite
- **Styling:** Tailwind CSS v3
- **UI helpers:** Chakra UI (used as layout/container components; styling handled by Tailwind)
- **Forms / Email:** Formspree

<<<<<<< HEAD
      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======

>>>>>>> b73de4e176af582d92c1ffee50d0549bd36b1ddd
=======
>>>>>>> 9b598aa9c9dd27a237bda7e3011d436dfaca6543
