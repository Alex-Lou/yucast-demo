# Yucast Landing Page

Modern landing page for Yucast - Kafka Flow Visualizer.

## 🚀 Features

- Real-time Kafka flow visualization
- Multi-cluster management
- Live metrics via WebSocket
- Orphan topic cleanup
- Nice dark theme UI

## 📁 Project Structure

yucast/
├── index.html              # Homepage
├── pricing.html            # Pricing page
│
├── assets/
│   └── images/
│       └── logo.png        # Logo
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   ├── theme.js            # Tailwind config
│   │
│   ├── core/
│   │   ├── hydrate.js      # Style token hydration
│   │   └── utils.js        # Shared utilities
│   │
│   ├── styles/
│   │   ├── shared.js       # Shared style tokens
│   │   ├── index-styles.js # Index page tokens
│   │   └── pricing-styles.js # Pricing page tokens
│   │
│   └── pages/
│       ├── index.js        # Index page logic
│       └── pricing.js      # Pricing page logic
│
└── .gitignore

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom + Tailwind CDN)
- Vanilla JavaScript
- EmailJS (contact form)

## 🎨 Style Token System

This project uses a token-based styling system:

1. HTML uses `[TOKEN]` placeholders: `class="[NAVBAR]"`
2. JS defines tokens: `NAVBAR: "navbar"`
3. Hydration replaces tokens at runtime

Benefits:
- Clean HTML
- Centralized style management
- Easy theming

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