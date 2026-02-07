# Yucast Landing Page

Modern landing page for Yucast - Kafka Flow Visualizer.

## 🚀 Features

- Real-time Kafka flow visualization
- Multi-cluster management
- Live metrics via WebSocket
- Orphan topic cleanup
- Nice dark theme UI
- **i18n Support**: Content available in multiple languages.

## 📁 Project Structure

```
yucast/
├── index.html              # Homepage
│
├── assets/
│   └── images/
│       └── logo.png        # Logo
│
├── css/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Responsive styles
│
├── js/
│   ├── i18n.js             # Internationalization
│   ├── theme.js            # Theme management (e.g., dark/light mode)
│   │
│   ├── core/
│   │   ├── hydrate.js      # Style token hydration
│   │   └── utils.js        # Shared utilities
│   │
│   ├── components/
│   │   ├── background.js   # Animated background
│   │   ├── navbar.js       # Navbar logic
│   │   ├── footer.js       # Footer logic
│   │   └── lang-dropdown.js # Language dropdown
│   │
│   ├── styles/
│   │   ├── shared.js       # Shared style tokens
│   │   ├── index-styles.js # Index page tokens
│   │
│   ├── pages/
│   │   ├── index.js        # Index page orchestration
│   │   └── index/          # Index page modules
│   │       ├── contact.js  # Contact form logic
│   │       ├── data.js     # Page data & constants
│   │       └── renderers.js # Dynamic section renderers
│   │
│   └── visualizer/
│       ├── engine.js       # Visualization engine
│       └── templates.js    # Visualization templates
│
├── · gitignore             # Git ignore file
├── package.json            # Project dependencies
└── package-lock.json       # Dependency lock file
```

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom + Tailwind CDN)
- Vanilla JavaScript
- EmailJS (contact form)

## 🎨 Style Token System

This project uses a token-based styling system:

1.  HTML uses `[TOKEN]` placeholders: `class="[NAVBAR]"`
2.  JS defines tokens: `NAVBAR: "navbar"`
3.  Hydration replaces tokens at runtime

Benefits:
- Clean HTML
- Centralized style management
- Easy theming

## 🌐 Internationalization (i18n)

The project uses a simple JSON-based i18n system located in `js/i18n.js`.

- **Adding Languages**: Add new language objects to the `translations` dictionary.
- **Changing Language**: The `changeLanguage(lang)` function updates the content.
- **UI**: The language dropdown component in `js/components/lang-dropdown.js` handles user interaction.

## 📧 Contact Form

Uses EmailJS for form submission. Configure in `js/pages/index.js`:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID'
};
```

## 📝 License

MIT © 2026 Cyber Wuruhi
