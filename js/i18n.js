const translations = {
    en: {
        // Navigation
        nav_features: "Features",
        nav_schema: "Schema",
        nav_arch: "Architecture",
        nav_pricing: "Pricing",
        nav_contact: "Contact",
        
        // Hero
        hero_title: "Visualize Your",
        hero_title_span: "Kafka Flows",
        hero_subtitle: "The modern way to monitor, manage, and understand your Kafka infrastructure. Beautiful visualizations, real-time insights, zero complexity.",
        status_version: "v2.0 — Now with real-time metrics",
        
        // CTAs
        cta_start: "Get Started",
        cta_pricing: "View Pricing",
        cta_touch: "Get in Touch",
        cta_demo: "Schedule a Demo",
        
        // Features Section
        features_title: "Everything you need to",
        features_title_span: "master Kafka",
        features_subtitle: "Powerful features designed for developers who want clarity and control over their event streams.",
        
        // Architecture Section
        arch_title: "Modern",
        arch_title_span: "Architecture",
        arch_subtitle: "Built with industry-standard technologies for reliability and performance.",
        
        // Contact Section
        contact_title: "Get in",
        contact_title_span: "Touch",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Your Message...",
        form_submit: "Send Message",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Built with ☕ and ❤️ by Cyber Wuruhi.",
        footer_privacy: "Privacy",
        footer_terms: "Terms",
        
        // Pricing Page
        pricing_badge: "💰 Simple, transparent pricing",
        pricing_title: "Choose Your",
        pricing_title_span: "Perfect Plan",
        pricing_subtitle: "Start free, scale as you grow. No hidden fees, no surprises.",
        
        // Billing Toggle
        billing_monthly: "Monthly",
        billing_yearly: "Yearly",
        billing_save: "Save 20%",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Perfect for exploring Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "For growing teams & projects",
        plan_enterprise: "Enterprise",
        plan_enterprise_desc: "For large-scale operations",
        
        // Prices
        price_free: "Free",
        price_forever: "forever",
        price_month: "month",
        price_year: "year",
        price_custom: "Custom",
        price_pricing: "pricing",
        
        // Badges & Buttons
        popular_badge: "Most Popular",
        btn_start_free: "Get Started Free",
        btn_trial: "Start 14-Day Trial",
        btn_contact_sales: "Contact Sales",
        
        // Features list (Pricing)
        feature_cluster: "Kafka cluster",
        feature_clusters: "Kafka clusters",
        feature_topics: "topics",
        feature_retention: "metrics retention",
        feature_team: "team members",
        feature_visualization: "Real-time visualization",
        feature_support_community: "Community support",
        feature_support_email: "Email support",
        feature_support_dedicated: "Dedicated support",
        feature_alerting: "Alerting system",
        feature_alerting_advanced: "Advanced alerting",
        feature_export: "Data export",
        feature_export_csv: "CSV / JSON export",
        feature_sso: "SSO / SAML integration",
        feature_onpremise: "On-premise deployment",
        feature_api: "Custom API access",
        feature_unlimited: "Unlimited",
        
        // FAQ
        faq_title: "Frequently Asked",
        faq_title_span: "Questions",
        faq_q1: "Can I switch plans at any time?",
        faq_a1: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate takes effect at your next billing cycle.",
        faq_q2: "Is there a free trial for Pro?",
        faq_a2: "Absolutely! Every Pro subscription starts with a 14-day free trial. No credit card required. You'll have full access to all Pro features during the trial period.",
        faq_q3: "What payment methods do you accept?",
        faq_a3: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe.",
        faq_q4: "Can I self-host Yucast?",
        faq_a4: "On-premise deployment is available with the Enterprise plan. This includes Docker images, Kubernetes Helm charts, and dedicated installation support. Contact our sales team for more details.",
        faq_q5: "What's included in the maintenance contract?",
        faq_a5: "Enterprise maintenance includes: priority bug fixes, security patches, version upgrades, 24/7 monitoring assistance, quarterly architecture reviews, and a dedicated customer success manager.",
        
        // CTA Section
        cta_questions: "Still have questions?",
        cta_questions_desc: "Our team is here to help you find the perfect plan for your needs. Get a personalized demo and see Yucast in action.",
        
        starter_f1: "<strong>1</strong> Kafka cluster",
        starter_f2: "Up to <strong>50</strong> topics",
        starter_f3: "<strong>24h</strong> metrics retention",
        pro_f1: "Up to <strong>5</strong> Kafka clusters",
        pro_f2: "Up to <strong>500</strong> topics",
        pro_f3: "<strong>30 days</strong> metrics retention",
        pro_f4: "Up to <strong>10</strong> team members",
        pro_f5: "<strong>Email support</strong> (48h response)",
        enterprise_f1: "<strong>Unlimited</strong> clusters",
        enterprise_f2: "<strong>Unlimited</strong> topics",
        enterprise_f3: "<strong>1 year</strong> metrics retention",
        enterprise_f4: "<strong>Unlimited</strong> team members",
        enterprise_f5: "<strong>Dedicated support</strong> + SLA",

        demo_producer: "Producer",
        demo_consumer: "Consumer",
        demo_cluster_info: "3 brokers • 12 topics",
        demo_active: "● Active",

        // Features
        feature_1_title: "Real-Time Flow Visualization",
        feature_1_desc: "Watch your data flow through topics and partitions in real-time with beautiful, animated diagrams.",
        feature_2_title: "Multi-Cluster Management",
        feature_2_desc: "Connect and monitor multiple Kafka clusters from a single, unified dashboard.",
        feature_3_title: "Orphan Cleanup",
        feature_3_desc: "Automatically detect and clean up unused topics and stale connections to keep your cluster healthy.",
        feature_4_title: "Live Metrics",
        feature_4_desc: "Real-time metrics broadcasting via WebSocket. Throughput, lag, partition health — all at a glance.",
        feature_5_title: "Visual Status System",
        feature_5_desc: "Intuitive color-coded status indicators with smooth animations show cluster health instantly.",
        feature_6_title: "Blazing Fast",
        feature_6_desc: "Built with performance in mind. Handles thousands of topics without breaking a sweat.",

        feature_1_title: "Real-Time Flow Visualization",
        feature_1_desc: "Watch your data flow through topics and partitions in real-time with beautiful, animated diagrams.",
        feature_2_title: "Multi-Cluster Management",
        feature_2_desc: "Connect and monitor multiple Kafka clusters from a single, unified dashboard.",
        feature_3_title: "Orphan Cleanup",
        feature_3_desc: "Automatically detect and clean up unused topics and stale connections to keep your cluster healthy.",
        feature_4_title: "Live Metrics",
        feature_4_desc: "Real-time metrics broadcasting via WebSocket. Throughput, lag, partition health — all at a glance.",
        feature_5_title: "Visual Status System",
        feature_5_desc: "Intuitive color-coded status indicators with smooth animations show cluster health instantly.",
        feature_6_title: "Blazing Fast",
        feature_6_desc: "Built with performance in mind. Handles thousands of topics without breaking a sweat.",

        // Architecture
        arch_backend_title: "Backend Stack",
        arch_frontend_title: "Frontend Stack",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • Reactive WebFlux",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Real-time metrics",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Interactive node diagrams",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Utility-first styling",

        // Toast messages
        toast_success: "Message sent successfully!",
        toast_error: "Failed to send message. Please try again.",

    },
    
    fr: {
        // Navigation
        nav_features: "Fonctionnalités",
        nav_schema: "Schéma",
        nav_arch: "Architecture",
        nav_pricing: "Tarifs",
        nav_contact: "Contact",
        
        // Hero
        hero_title: "Visualisez vos",
        hero_title_span: "Flux Kafka",
        hero_subtitle: "La façon moderne de surveiller, gérer et comprendre votre infrastructure Kafka. Visualisations magnifiques, infos en temps réel, zéro complexité.",
        status_version: "v2.0 — Maintenant avec métriques temps réel",
        
        // CTAs
        cta_start: "Commencer",
        cta_pricing: "Voir les Tarifs",
        cta_touch: "Nous Contacter",
        cta_demo: "Planifier une Démo",
        
        // Features Section
        features_title: "Tout ce qu'il vous faut pour",
        features_title_span: "maîtriser Kafka",
        features_subtitle: "Des fonctionnalités puissantes conçues pour les développeurs qui veulent clarté et contrôle sur leurs flux d'événements.",
        
        // Architecture Section
        arch_title: "Architecture",
        arch_title_span: "Moderne",
        arch_subtitle: "Construit avec des technologies standards de l'industrie pour la fiabilité et la performance.",
        
        // Contact Section
        contact_title: "Contactez",
        contact_title_span: "-nous",
        form_name: "Votre Nom",
        form_email: "Votre Email",
        form_message: "Votre Message...",
        form_submit: "Envoyer",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Fait avec ☕ et ❤️ par Cyber Wuruhi.",
        footer_privacy: "Confidentialité",
        footer_terms: "Conditions",
        
        // Pricing Page
        pricing_badge: "💰 Tarification simple et transparente",
        pricing_title: "Choisissez votre",
        pricing_title_span: "Formule Idéale",
        pricing_subtitle: "Commencez gratuitement, évoluez selon vos besoins. Pas de frais cachés, pas de surprises.",
        
        // Billing Toggle
        billing_monthly: "Mensuel",
        billing_yearly: "Annuel",
        billing_save: "Économisez 20%",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Parfait pour découvrir Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "Pour les équipes en croissance",
        plan_enterprise: "Entreprise",
        plan_enterprise_desc: "Pour les opérations à grande échelle",
        
        // Prices
        price_free: "Gratuit",
        price_forever: "pour toujours",
        price_month: "mois",
        price_year: "an",
        price_custom: "Sur mesure",
        price_pricing: "tarification",
        
        // Badges & Buttons
        popular_badge: "Le Plus Populaire",
        btn_start_free: "Commencer Gratuitement",
        btn_trial: "Essai Gratuit 14 Jours",
        btn_contact_sales: "Contacter les Ventes",
        
        // Features list
        feature_cluster: "cluster Kafka",
        feature_clusters: "clusters Kafka",
        feature_topics: "topics",
        feature_retention: "rétention des métriques",
        feature_team: "membres d'équipe",
        feature_visualization: "Visualisation temps réel",
        feature_support_community: "Support communautaire",
        feature_support_email: "Support email",
        feature_support_dedicated: "Support dédié",
        feature_alerting: "Système d'alertes",
        feature_alerting_advanced: "Alertes avancées",
        feature_export: "Export de données",
        feature_export_csv: "Export CSV / JSON",
        feature_sso: "Intégration SSO / SAML",
        feature_onpremise: "Déploiement sur site",
        feature_api: "Accès API personnalisé",
        feature_unlimited: "Illimité",
        
        // FAQ
        faq_title: "Questions",
        faq_title_span: "Fréquentes",
        faq_q1: "Puis-je changer de formule à tout moment ?",
        faq_a1: "Oui ! Vous pouvez passer à une formule supérieure ou inférieure à tout moment. Lors d'une mise à niveau, vous paierez la différence au prorata. Lors d'un passage à une formule inférieure, le nouveau tarif s'appliquera au prochain cycle de facturation.",
        faq_q2: "Y a-t-il un essai gratuit pour Pro ?",
        faq_a2: "Absolument ! Chaque abonnement Pro commence avec un essai gratuit de 14 jours. Aucune carte de crédit requise. Vous aurez un accès complet à toutes les fonctionnalités Pro pendant la période d'essai.",
        faq_q3: "Quels moyens de paiement acceptez-vous ?",
        faq_a3: "Nous acceptons toutes les principales cartes de crédit (Visa, Mastercard, American Express), PayPal et les virements bancaires pour les formules Entreprise. Tous les paiements sont traités de manière sécurisée via Stripe.",
        faq_q4: "Puis-je héberger Yucast moi-même ?",
        faq_a4: "Le déploiement sur site est disponible avec la formule Entreprise. Cela inclut les images Docker, les charts Helm Kubernetes et un support d'installation dédié. Contactez notre équipe commerciale pour plus de détails.",
        faq_q5: "Que comprend le contrat de maintenance ?",
        faq_a5: "La maintenance Entreprise inclut : corrections de bugs prioritaires, correctifs de sécurité, mises à jour de version, assistance monitoring 24/7, revues d'architecture trimestrielles et un responsable dédié à votre succès.",
        
        // CTA Section
        cta_questions: "Encore des questions ?",
        cta_questions_desc: "Notre équipe est là pour vous aider à trouver la formule parfaite pour vos besoins. Obtenez une démo personnalisée et voyez Yucast en action.",
        
        starter_f1: "<strong>1</strong> cluster Kafka",
        starter_f2: "Jusqu'à <strong>50</strong> topics",
        starter_f3: "<strong>24h</strong> de rétention des métriques",
        pro_f1: "Jusqu'à <strong>5</strong> clusters Kafka",
        pro_f2: "Jusqu'à <strong>500</strong> topics",
        pro_f3: "<strong>30 jours</strong> de rétention des métriques",
        pro_f4: "Jusqu'à <strong>10</strong> membres d'équipe",
        pro_f5: "<strong>Support email</strong> (réponse 48h)",
        enterprise_f1: "Clusters <strong>illimités</strong>",
        enterprise_f2: "Topics <strong>illimités</strong>",
        enterprise_f3: "<strong>1 an</strong> de rétention des métriques",
        enterprise_f4: "Membres d'équipe <strong>illimités</strong>",
        enterprise_f5: "<strong>Support dédié</strong> + SLA",

        demo_producer: "Producteur",
        demo_consumer: "Consommateur",
        demo_cluster_info: "3 brokers • 12 topics",
        demo_active: "● Actif",

        // Features
        feature_1_title: "Visualisation en Temps Réel",
        feature_1_desc: "Observez vos données circuler à travers les topics et partitions en temps réel avec de magnifiques diagrammes animés.",
        feature_2_title: "Gestion Multi-Clusters",
        feature_2_desc: "Connectez et surveillez plusieurs clusters Kafka depuis un tableau de bord unique et unifié.",
        feature_3_title: "Nettoyage des Orphelins",
        feature_3_desc: "Détectez et nettoyez automatiquement les topics inutilisés et les connexions obsolètes pour garder votre cluster sain.",
        feature_4_title: "Métriques en Direct",
        feature_4_desc: "Diffusion de métriques en temps réel via WebSocket. Débit, lag, santé des partitions — tout en un coup d'œil.",
        feature_5_title: "Système de Statut Visuel",
        feature_5_desc: "Des indicateurs de statut colorés et intuitifs avec des animations fluides montrent instantanément la santé du cluster.",
        feature_6_title: "Ultra Rapide",
        feature_6_desc: "Conçu pour la performance. Gère des milliers de topics sans sourciller.",
        
        feature_1_title: "Visualisation en Temps Réel",
        feature_1_desc: "Observez vos données circuler à travers les topics et partitions en temps réel avec de magnifiques diagrammes animés.",
        feature_2_title: "Gestion Multi-Clusters",
        feature_2_desc: "Connectez et surveillez plusieurs clusters Kafka depuis un tableau de bord unique et unifié.",
        feature_3_title: "Nettoyage des Orphelins",
        feature_3_desc: "Détectez et nettoyez automatiquement les topics inutilisés et les connexions obsolètes pour garder votre cluster sain.",
        feature_4_title: "Métriques en Direct",
        feature_4_desc: "Diffusion de métriques en temps réel via WebSocket. Débit, lag, santé des partitions — tout en un coup d'œil.",
        feature_5_title: "Système de Statut Visuel",
        feature_5_desc: "Des indicateurs de statut colorés et intuitifs avec des animations fluides montrent instantanément la santé du cluster.",
        feature_6_title: "Ultra Rapide",
        feature_6_desc: "Conçu pour la performance. Gère des milliers de topics sans sourciller.",

        // Architecture
        arch_backend_title: "Stack Backend",
        arch_frontend_title: "Stack Frontend",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • WebFlux Réactif",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Métriques temps réel",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Diagrammes de nœuds interactifs",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Styling utility-first",

        // Toast messages
        toast_success: "Message envoyé avec succès !",
        toast_error: "Échec de l'envoi. Veuillez réessayer.",

    },
    
    es: {
        // Navigation
        nav_features: "Características",
        nav_schema: "Esquema",
        nav_arch: "Arquitectura",
        nav_pricing: "Precios",
        nav_contact: "Contacto",
        
        // Hero
        hero_title: "Visualiza tus",
        hero_title_span: "Flujos Kafka",
        hero_subtitle: "La forma moderna de monitorear, gestionar y comprender tu infraestructura Kafka. Visualizaciones hermosas, información en tiempo real, cero complejidad.",
        status_version: "v2.0 — Ahora con métricas en tiempo real",
        
        // CTAs
        cta_start: "Comenzar",
        cta_pricing: "Ver Precios",
        cta_touch: "Contáctanos",
        cta_demo: "Programar Demo",
        
        // Features Section
        features_title: "Todo lo que necesitas para",
        features_title_span: "dominar Kafka",
        features_subtitle: "Funciones potentes diseñadas para desarrolladores que quieren claridad y control sobre sus flujos de eventos.",
        
        // Architecture Section
        arch_title: "Arquitectura",
        arch_title_span: "Moderna",
        arch_subtitle: "Construido con tecnologías estándar de la industria para confiabilidad y rendimiento.",
        
        // Contact Section
        contact_title: "Ponte en",
        contact_title_span: "Contacto",
        form_name: "Tu Nombre",
        form_email: "Tu Email",
        form_message: "Tu Mensaje...",
        form_submit: "Enviar Mensaje",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Hecho con ☕ y ❤️ por Cyber Wuruhi.",
        footer_privacy: "Privacidad",
        footer_terms: "Términos",
        
        // Pricing Page
        pricing_badge: "💰 Precios simples y transparentes",
        pricing_title: "Elige tu",
        pricing_title_span: "Plan Perfecto",
        pricing_subtitle: "Comienza gratis, escala según crezcas. Sin tarifas ocultas, sin sorpresas.",
        
        // Billing Toggle
        billing_monthly: "Mensual",
        billing_yearly: "Anual",
        billing_save: "Ahorra 20%",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Perfecto para explorar Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "Para equipos en crecimiento",
        plan_enterprise: "Empresa",
        plan_enterprise_desc: "Para operaciones a gran escala",
        
        // Prices
        price_free: "Gratis",
        price_forever: "para siempre",
        price_month: "mes",
        price_year: "año",
        price_custom: "Personalizado",
        price_pricing: "precios",
        
        // Badges & Buttons
        popular_badge: "Más Popular",
        btn_start_free: "Comenzar Gratis",
        btn_trial: "Prueba 14 Días Gratis",
        btn_contact_sales: "Contactar Ventas",
        
        // Features list
        feature_cluster: "cluster Kafka",
        feature_clusters: "clusters Kafka",
        feature_topics: "topics",
        feature_retention: "retención de métricas",
        feature_team: "miembros del equipo",
        feature_visualization: "Visualización en tiempo real",
        feature_support_community: "Soporte comunitario",
        feature_support_email: "Soporte por email",
        feature_support_dedicated: "Soporte dedicado",
        feature_alerting: "Sistema de alertas",
        feature_alerting_advanced: "Alertas avanzadas",
        feature_export: "Exportación de datos",
        feature_export_csv: "Exportar CSV / JSON",
        feature_sso: "Integración SSO / SAML",
        feature_onpremise: "Despliegue local",
        feature_api: "Acceso API personalizado",
        feature_unlimited: "Ilimitado",
        
        // FAQ
        faq_title: "Preguntas",
        faq_title_span: "Frecuentes",
        faq_q1: "¿Puedo cambiar de plan en cualquier momento?",
        faq_a1: "¡Sí! Puedes mejorar o reducir tu plan en cualquier momento. Al mejorar, se te cobrará la diferencia prorrateada. Al reducir, la nueva tarifa se aplica en tu próximo ciclo de facturación.",
        faq_q2: "¿Hay prueba gratuita para Pro?",
        faq_a2: "¡Por supuesto! Cada suscripción Pro comienza con una prueba gratuita de 14 días. No se requiere tarjeta de crédito. Tendrás acceso completo a todas las funciones Pro durante el período de prueba.",
        faq_q3: "¿Qué métodos de pago aceptan?",
        faq_a3: "Aceptamos todas las principales tarjetas de crédito (Visa, Mastercard, American Express), PayPal y transferencias bancarias para planes Empresa. Todos los pagos se procesan de forma segura a través de Stripe.",
        faq_q4: "¿Puedo auto-hospedar Yucast?",
        faq_a4: "El despliegue local está disponible con el plan Empresa. Esto incluye imágenes Docker, charts Helm de Kubernetes y soporte de instalación dedicado. Contacta a nuestro equipo de ventas para más detalles.",
        faq_q5: "¿Qué incluye el contrato de mantenimiento?",
        faq_a5: "El mantenimiento Empresa incluye: correcciones de errores prioritarias, parches de seguridad, actualizaciones de versión, asistencia de monitoreo 24/7, revisiones de arquitectura trimestrales y un gestor de éxito del cliente dedicado.",
        
        // CTA Section
        cta_questions: "¿Aún tienes preguntas?",
        cta_questions_desc: "Nuestro equipo está aquí para ayudarte a encontrar el plan perfecto para tus necesidades. Obtén una demo personalizada y ve Yucast en acción.",

        starter_f1: "<strong>1</strong> cluster Kafka",
        starter_f2: "Hasta <strong>50</strong> topics",
        starter_f3: "<strong>24h</strong> retención de métricas",
        pro_f1: "Hasta <strong>5</strong> clusters Kafka",
        pro_f2: "Hasta <strong>500</strong> topics",
        pro_f3: "<strong>30 días</strong> retención de métricas",
        pro_f4: "Hasta <strong>10</strong> miembros del equipo",
        pro_f5: "<strong>Soporte email</strong> (respuesta 48h)",
        enterprise_f1: "Clusters <strong>ilimitados</strong>",
        enterprise_f2: "Topics <strong>ilimitados</strong>",
        enterprise_f3: "<strong>1 año</strong> retención de métricas",
        enterprise_f4: "Miembros <strong>ilimitados</strong>",
        enterprise_f5: "<strong>Soporte dedicado</strong> + SLA",

        demo_producer: "Productor",
        demo_consumer: "Consumidor",
        demo_cluster_info: "3 brokers • 12 topics",
        demo_active: "● Activo",

        //Features
        feature_1_title: "Visualización en Tiempo Real",
        feature_1_desc: "Observa tus datos fluir a través de topics y particiones en tiempo real con hermosos diagramas animados.",
        feature_2_title: "Gestión Multi-Cluster",
        feature_2_desc: "Conecta y monitorea múltiples clusters Kafka desde un único panel unificado.",
        feature_3_title: "Limpieza de Huérfanos",
        feature_3_desc: "Detecta y limpia automáticamente topics no utilizados y conexiones obsoletas para mantener tu cluster saludable.",
        feature_4_title: "Métricas en Vivo",
        feature_4_desc: "Transmisión de métricas en tiempo real vía WebSocket. Rendimiento, lag, salud de particiones — todo de un vistazo.",
        feature_5_title: "Sistema de Estado Visual",
        feature_5_desc: "Indicadores de estado codificados por colores con animaciones suaves muestran la salud del cluster instantáneamente.",
        feature_6_title: "Ultra Rápido",
        feature_6_desc: "Construido pensando en el rendimiento. Maneja miles de topics sin despeinarse.",

        feature_1_title: "Visualización en Tiempo Real",
        feature_1_desc: "Observa tus datos fluir a través de topics y particiones en tiempo real con hermosos diagramas animados.",
        feature_2_title: "Gestión Multi-Cluster",
        feature_2_desc: "Conecta y monitorea múltiples clusters Kafka desde un único panel unificado.",
        feature_3_title: "Limpieza de Huérfanos",
        feature_3_desc: "Detecta y limpia automáticamente topics no utilizados y conexiones obsoletas para mantener tu cluster saludable.",
        feature_4_title: "Métricas en Vivo",
        feature_4_desc: "Transmisión de métricas en tiempo real vía WebSocket. Rendimiento, lag, salud de particiones — todo de un vistazo.",
        feature_5_title: "Sistema de Estado Visual",
        feature_5_desc: "Indicadores de estado codificados por colores con animaciones suaves muestran la salud del cluster instantáneamente.",
        feature_6_title: "Ultra Rápido",
        feature_6_desc: "Construido pensando en el rendimiento. Maneja miles de topics sin despeinarse.",

        // Architecture
        arch_backend_title: "Stack Backend",
        arch_frontend_title: "Stack Frontend",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • WebFlux Reactivo",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Métricas en tiempo real",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Diagramas de nodos interactivos",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Estilos utility-first",

        // Toast messages
        toast_success: "¡Mensaje enviado con éxito!",
        toast_error: "Error al enviar. Por favor, inténtalo de nuevo.",
    },
    
    it: {
        // Navigation
        nav_features: "Funzionalità",
        nav_schema: "Schema",
        nav_arch: "Architettura",
        nav_pricing: "Prezzi",
        nav_contact: "Contatto",
        
        // Hero
        hero_title: "Visualizza i tuoi",
        hero_title_span: "Flussi Kafka",
        hero_subtitle: "Il modo moderno per monitorare, gestire e comprendere la tua infrastruttura Kafka. Visualizzazioni eleganti, informazioni in tempo reale, zero complessità.",
        status_version: "v2.0 — Ora con metriche in tempo reale",
        
        // CTAs
        cta_start: "Inizia",
        cta_pricing: "Vedi Prezzi",
        cta_touch: "Contattaci",
        cta_demo: "Prenota una Demo",
        
        // Features Section
        features_title: "Tutto ciò che serve per",
        features_title_span: "padroneggiare Kafka",
        features_subtitle: "Funzionalità potenti progettate per sviluppatori che vogliono chiarezza e controllo sui loro flussi di eventi.",
        
        // Architecture Section
        arch_title: "Architettura",
        arch_title_span: "Moderna",
        arch_subtitle: "Costruito con tecnologie standard del settore per affidabilità e prestazioni.",
        
        // Contact Section
        contact_title: "Mettiti in",
        contact_title_span: "Contatto",
        form_name: "Il tuo Nome",
        form_email: "La tua Email",
        form_message: "Il tuo Messaggio...",
        form_submit: "Invia Messaggio",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Fatto con ☕ e ❤️ da Cyber Wuruhi.",
        footer_privacy: "Privacy",
        footer_terms: "Termini",
        
        // Pricing Page
        pricing_badge: "💰 Prezzi semplici e trasparenti",
        pricing_title: "Scegli il tuo",
        pricing_title_span: "Piano Perfetto",
        pricing_subtitle: "Inizia gratis, scala mentre cresci. Nessun costo nascosto, nessuna sorpresa.",
        
        // Billing Toggle
        billing_monthly: "Mensile",
        billing_yearly: "Annuale",
        billing_save: "Risparmia 20%",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Perfetto per esplorare Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "Per team in crescita",
        plan_enterprise: "Enterprise",
        plan_enterprise_desc: "Per operazioni su larga scala",
        
        // Prices
        price_free: "Gratis",
        price_forever: "per sempre",
        price_month: "mese",
        price_year: "anno",
        price_custom: "Personalizzato",
        price_pricing: "prezzi",
        
        // Badges & Buttons
        popular_badge: "Più Popolare",
        btn_start_free: "Inizia Gratis",
        btn_trial: "Prova 14 Giorni Gratis",
        btn_contact_sales: "Contatta Vendite",
        
        // Features list
        feature_cluster: "cluster Kafka",
        feature_clusters: "cluster Kafka",
        feature_topics: "topic",
        feature_retention: "conservazione metriche",
        feature_team: "membri del team",
        feature_visualization: "Visualizzazione in tempo reale",
        feature_support_community: "Supporto community",
        feature_support_email: "Supporto email",
        feature_support_dedicated: "Supporto dedicato",
        feature_alerting: "Sistema di avvisi",
        feature_alerting_advanced: "Avvisi avanzati",
        feature_export: "Esportazione dati",
        feature_export_csv: "Esporta CSV / JSON",
        feature_sso: "Integrazione SSO / SAML",
        feature_onpremise: "Deploy on-premise",
        feature_api: "Accesso API personalizzato",
        feature_unlimited: "Illimitato",
        
        // FAQ
        faq_title: "Domande",
        faq_title_span: "Frequenti",
        faq_q1: "Posso cambiare piano in qualsiasi momento?",
        faq_a1: "Sì! Puoi passare a un piano superiore o inferiore in qualsiasi momento. Quando passi a un piano superiore, ti verrà addebitata la differenza proporzionale. Quando passi a un piano inferiore, la nuova tariffa si applica al prossimo ciclo di fatturazione.",
        faq_q2: "C'è una prova gratuita per Pro?",
        faq_a2: "Assolutamente! Ogni abbonamento Pro inizia con una prova gratuita di 14 giorni. Nessuna carta di credito richiesta. Avrai accesso completo a tutte le funzionalità Pro durante il periodo di prova.",
        faq_q3: "Quali metodi di pagamento accettate?",
        faq_a3: "Accettiamo tutte le principali carte di credito (Visa, Mastercard, American Express), PayPal e bonifici bancari per i piani Enterprise. Tutti i pagamenti sono elaborati in modo sicuro tramite Stripe.",
        faq_q4: "Posso ospitare Yucast autonomamente?",
        faq_a4: "Il deploy on-premise è disponibile con il piano Enterprise. Include immagini Docker, chart Helm Kubernetes e supporto dedicato all'installazione. Contatta il nostro team vendite per maggiori dettagli.",
        faq_q5: "Cosa include il contratto di manutenzione?",
        faq_a5: "La manutenzione Enterprise include: correzioni bug prioritarie, patch di sicurezza, aggiornamenti di versione, assistenza monitoraggio 24/7, revisioni architetturali trimestrali e un customer success manager dedicato.",
        
        // CTA Section
        cta_questions: "Hai ancora domande?",
        cta_questions_desc: "Il nostro team è qui per aiutarti a trovare il piano perfetto per le tue esigenze. Ottieni una demo personalizzata e guarda Yucast in azione.",

        starter_f1: "<strong>1</strong> cluster Kafka",
        starter_f2: "Fino a <strong>50</strong> topic",
        starter_f3: "<strong>24h</strong> conservazione metriche",
        pro_f1: "Fino a <strong>5</strong> cluster Kafka",
        pro_f2: "Fino a <strong>500</strong> topic",
        pro_f3: "<strong>30 giorni</strong> conservazione metriche",
        pro_f4: "Fino a <strong>10</strong> membri del team",
        pro_f5: "<strong>Supporto email</strong> (risposta 48h)",
        enterprise_f1: "Cluster <strong>illimitati</strong>",
        enterprise_f2: "Topic <strong>illimitati</strong>",
        enterprise_f3: "<strong>1 anno</strong> conservazione metriche",
        enterprise_f4: "Membri <strong>illimitati</strong>",
        enterprise_f5: "<strong>Supporto dedicato</strong> + SLA",

        demo_producer: "Produttore",
        demo_consumer: "Consumatore",
        demo_cluster_info: "3 broker • 12 topic",
        demo_active: "● Attivo",

        // Features
        feature_1_title: "Visualizzazione in Tempo Reale",
        feature_1_desc: "Osserva i tuoi dati fluire attraverso topic e partizioni in tempo reale con bellissimi diagrammi animati.",
        feature_2_title: "Gestione Multi-Cluster",
        feature_2_desc: "Connetti e monitora più cluster Kafka da un'unica dashboard unificata.",
        feature_3_title: "Pulizia Orfani",
        feature_3_desc: "Rileva e pulisci automaticamente topic inutilizzati e connessioni obsolete per mantenere il cluster sano.",
        feature_4_title: "Metriche Live",
        feature_4_desc: "Trasmissione metriche in tempo reale via WebSocket. Throughput, lag, salute partizioni — tutto a colpo d'occhio.",
        feature_5_title: "Sistema di Stato Visivo",
        feature_5_desc: "Indicatori di stato colorati e intuitivi con animazioni fluide mostrano istantaneamente la salute del cluster.",
        feature_6_title: "Ultra Veloce",
        feature_6_desc: "Costruito pensando alle prestazioni. Gestisce migliaia di topic senza problemi.",

        feature_1_title: "Visualizzazione in Tempo Reale",
        feature_1_desc: "Osserva i tuoi dati fluire attraverso topic e partizioni in tempo reale con bellissimi diagrammi animati.",
        feature_2_title: "Gestione Multi-Cluster",
        feature_2_desc: "Connetti e monitora più cluster Kafka da un'unica dashboard unificata.",
        feature_3_title: "Pulizia Orfani",
        feature_3_desc: "Rileva e pulisci automaticamente topic inutilizzati e connessioni obsolete per mantenere il cluster sano.",
        feature_4_title: "Metriche Live",
        feature_4_desc: "Trasmissione metriche in tempo reale via WebSocket. Throughput, lag, salute partizioni — tutto a colpo d'occhio.",
        feature_5_title: "Sistema di Stato Visivo",
        feature_5_desc: "Indicatori di stato colorati e intuitivi con animazioni fluide mostrano istantaneamente la salute del cluster.",
        feature_6_title: "Ultra Veloce",
        feature_6_desc: "Costruito pensando alle prestazioni. Gestisce migliaia di topic senza problemi.",

        // Architecture
        arch_backend_title: "Stack Backend",
        arch_frontend_title: "Stack Frontend",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • WebFlux Reattivo",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Metriche real-time",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Diagrammi nodi interattivi",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Styling utility-first",

        // Toast messages
        toast_success: "Messaggio inviato con successo!",
        toast_error: "Invio fallito. Riprova.",
    },
    
    pt: {
        // Navigation
        nav_features: "Recursos",
        nav_schema: "Esquema",
        nav_arch: "Arquitetura",
        nav_pricing: "Preços",
        nav_contact: "Contato",
        
        // Hero
        hero_title: "Visualize seus",
        hero_title_span: "Fluxos Kafka",
        hero_subtitle: "A forma moderna de monitorar, gerenciar e entender sua infraestrutura Kafka. Visualizações bonitas, insights em tempo real, zero complexidade.",
        status_version: "v2.0 — Agora com métricas em tempo real",
        
        // CTAs
        cta_start: "Começar",
        cta_pricing: "Ver Preços",
        cta_touch: "Entre em Contato",
        cta_demo: "Agendar Demo",
        
        // Features Section
        features_title: "Tudo que você precisa para",
        features_title_span: "dominar Kafka",
        features_subtitle: "Recursos poderosos projetados para desenvolvedores que querem clareza e controle sobre seus fluxos de eventos.",
        
        // Architecture Section
        arch_title: "Arquitetura",
        arch_title_span: "Moderna",
        arch_subtitle: "Construído com tecnologias padrão da indústria para confiabilidade e performance.",
        
        // Contact Section
        contact_title: "Entre em",
        contact_title_span: "Contato",
        form_name: "Seu Nome",
        form_email: "Seu Email",
        form_message: "Sua Mensagem...",
        form_submit: "Enviar Mensagem",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Feito com ☕ e ❤️ por Cyber Wuruhi.",
        footer_privacy: "Privacidade",
        footer_terms: "Termos",
        
        // Pricing Page
        pricing_badge: "💰 Preços simples e transparentes",
        pricing_title: "Escolha seu",
        pricing_title_span: "Plano Perfeito",
        pricing_subtitle: "Comece grátis, escale conforme cresce. Sem taxas ocultas, sem surpresas.",
        
        // Billing Toggle
        billing_monthly: "Mensal",
        billing_yearly: "Anual",
        billing_save: "Economize 20%",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Perfeito para explorar o Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "Para equipes em crescimento",
        plan_enterprise: "Empresarial",
        plan_enterprise_desc: "Para operações em larga escala",
        
        // Prices
        price_free: "Grátis",
        price_forever: "para sempre",
        price_month: "mês",
        price_year: "ano",
        price_custom: "Personalizado",
        price_pricing: "preços",
        
        // Badges & Buttons
        popular_badge: "Mais Popular",
        btn_start_free: "Começar Grátis",
        btn_trial: "Teste 14 Dias Grátis",
        btn_contact_sales: "Contatar Vendas",
        
        // Features list
        feature_cluster: "cluster Kafka",
        feature_clusters: "clusters Kafka",
        feature_topics: "tópicos",
        feature_retention: "retenção de métricas",
        feature_team: "membros da equipe",
        feature_visualization: "Visualização em tempo real",
        feature_support_community: "Suporte da comunidade",
        feature_support_email: "Suporte por email",
        feature_support_dedicated: "Suporte dedicado",
        feature_alerting: "Sistema de alertas",
        feature_alerting_advanced: "Alertas avançados",
        feature_export: "Exportação de dados",
        feature_export_csv: "Exportar CSV / JSON",
        feature_sso: "Integração SSO / SAML",
        feature_onpremise: "Deploy on-premise",
        feature_api: "Acesso API personalizado",
        feature_unlimited: "Ilimitado",
        
        // FAQ
        faq_title: "Perguntas",
        faq_title_span: "Frequentes",
        faq_q1: "Posso trocar de plano a qualquer momento?",
        faq_a1: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Ao fazer upgrade, será cobrada a diferença proporcional. Ao fazer downgrade, a nova tarifa entra em vigor no próximo ciclo de cobrança.",
        faq_q2: "Existe teste grátis para o Pro?",
        faq_a2: "Com certeza! Toda assinatura Pro começa com um teste grátis de 14 dias. Sem necessidade de cartão de crédito. Você terá acesso completo a todos os recursos Pro durante o período de teste.",
        faq_q3: "Quais métodos de pagamento vocês aceitam?",
        faq_a3: "Aceitamos todos os principais cartões de crédito (Visa, Mastercard, American Express), PayPal e transferências bancárias para planos Empresariais. Todos os pagamentos são processados com segurança através do Stripe.",
        faq_q4: "Posso hospedar o Yucast por conta própria?",
        faq_a4: "O deploy on-premise está disponível com o plano Empresarial. Isso inclui imagens Docker, charts Helm Kubernetes e suporte dedicado de instalação. Entre em contato com nossa equipe de vendas para mais detalhes.",
        faq_q5: "O que está incluído no contrato de manutenção?",
        faq_a5: "A manutenção Empresarial inclui: correções de bugs prioritárias, patches de segurança, atualizações de versão, assistência de monitoramento 24/7, revisões de arquitetura trimestrais e um gerente de sucesso do cliente dedicado.",
        
        // CTA Section
        cta_questions: "Ainda tem perguntas?",
        cta_questions_desc: "Nossa equipe está aqui para ajudá-lo a encontrar o plano perfeito para suas necessidades. Obtenha uma demo personalizada e veja o Yucast em ação.",

        starter_f1: "<strong>1</strong> cluster Kafka",
        starter_f2: "Até <strong>50</strong> tópicos",
        starter_f3: "<strong>24h</strong> retenção de métricas",
        pro_f1: "Até <strong>5</strong> clusters Kafka",
        pro_f2: "Até <strong>500</strong> tópicos",
        pro_f3: "<strong>30 dias</strong> retenção de métricas",
        pro_f4: "Até <strong>10</strong> membros da equipe",
        pro_f5: "<strong>Suporte email</strong> (resposta 48h)",
        enterprise_f1: "Clusters <strong>ilimitados</strong>",
        enterprise_f2: "Tópicos <strong>ilimitados</strong>",
        enterprise_f3: "<strong>1 ano</strong> retenção de métricas",
        enterprise_f4: "Membros <strong>ilimitados</strong>",
        enterprise_f5: "<strong>Suporte dedicado</strong> + SLA",

        demo_producer: "Produtor",
        demo_consumer: "Consumidor",
        demo_cluster_info: "3 brokers • 12 tópicos",
        demo_active: "● Ativo",

        // Features
        feature_1_title: "Visualização em Tempo Real",
        feature_1_desc: "Observe seus dados fluírem através de tópicos e partições em tempo real com belos diagramas animados.",
        feature_2_title: "Gestão Multi-Cluster",
        feature_2_desc: "Conecte e monitore múltiplos clusters Kafka a partir de um único painel unificado.",
        feature_3_title: "Limpeza de Órfãos",
        feature_3_desc: "Detecte e limpe automaticamente tópicos não utilizados e conexões obsoletas para manter seu cluster saudável.",
        feature_4_title: "Métricas ao Vivo",
        feature_4_desc: "Transmissão de métricas em tempo real via WebSocket. Throughput, lag, saúde das partições — tudo de relance.",
        feature_5_title: "Sistema de Status Visual",
        feature_5_desc: "Indicadores de status codificados por cores com animações suaves mostram a saúde do cluster instantaneamente.",
        feature_6_title: "Ultra Rápido",
        feature_6_desc: "Construído pensando em performance. Lida com milhares de tópicos sem esforço.",


        feature_1_title: "Visualização em Tempo Real",
        feature_1_desc: "Observe seus dados fluírem através de tópicos e partições em tempo real com belos diagramas animados.",
        feature_2_title: "Gestão Multi-Cluster",
        feature_2_desc: "Conecte e monitore múltiplos clusters Kafka a partir de um único painel unificado.",
        feature_3_title: "Limpeza de Órfãos",
        feature_3_desc: "Detecte e limpe automaticamente tópicos não utilizados e conexões obsoletas para manter seu cluster saudável.",
        feature_4_title: "Métricas ao Vivo",
        feature_4_desc: "Transmissão de métricas em tempo real via WebSocket. Throughput, lag, saúde das partições — tudo de relance.",
        feature_5_title: "Sistema de Status Visual",
        feature_5_desc: "Indicadores de status codificados por cores com animações suaves mostram a saúde do cluster instantaneamente.",
        feature_6_title: "Ultra Rápido",
        feature_6_desc: "Construído pensando em performance. Lida com milhares de tópicos sem esforço.",

        // Architecture
        arch_backend_title: "Stack Backend",
        arch_frontend_title: "Stack Frontend",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • WebFlux Reativo",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Métricas em tempo real",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Diagramas de nós interativos",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Estilização utility-first",

        // Toast messages
        toast_success: "Mensagem enviada com sucesso!",
        toast_error: "Falha no envio. Tente novamente.",

    },
    
    de: {
        // Navigation
        nav_features: "Funktionen",
        nav_schema: "Schema",
        nav_arch: "Architektur",
        nav_pricing: "Preise",
        nav_contact: "Kontakt",
        
        // Hero
        hero_title: "Visualisieren Sie Ihre",
        hero_title_span: "Kafka-Flows",
        hero_subtitle: "Die moderne Art, Ihre Kafka-Infrastruktur zu überwachen, zu verwalten und zu verstehen. Schöne Visualisierungen, Echtzeit-Einblicke, keine Komplexität.",
        status_version: "v2.0 — Jetzt mit Echtzeit-Metriken",
        
        // CTAs
        cta_start: "Loslegen",
        cta_pricing: "Preise ansehen",
        cta_touch: "Kontakt aufnehmen",
        cta_demo: "Demo vereinbaren",
        
        // Features Section
        features_title: "Alles was Sie brauchen um",
        features_title_span: "Kafka zu meistern",
        features_subtitle: "Leistungsstarke Funktionen für Entwickler, die Klarheit und Kontrolle über ihre Event-Streams wollen.",
        
        // Architecture Section
        arch_title: "Moderne",
        arch_title_span: "Architektur",
        arch_subtitle: "Gebaut mit branchenüblichen Technologien für Zuverlässigkeit und Leistung.",
        
        // Contact Section
        contact_title: "Kontakt",
        contact_title_span: "aufnehmen",
        form_name: "Ihr Name",
        form_email: "Ihre E-Mail",
        form_message: "Ihre Nachricht...",
        form_submit: "Nachricht senden",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Gemacht mit ☕ und ❤️ von Cyber Wuruhi.",
        footer_privacy: "Datenschutz",
        footer_terms: "AGB",
        
        // Pricing Page
        pricing_badge: "💰 Einfache, transparente Preise",
        pricing_title: "Wählen Sie Ihren",
        pricing_title_span: "perfekten Plan",
        pricing_subtitle: "Starten Sie kostenlos, skalieren Sie nach Bedarf. Keine versteckten Gebühren, keine Überraschungen.",
        
        // Billing Toggle
        billing_monthly: "Monatlich",
        billing_yearly: "Jährlich",
        billing_save: "20% sparen",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Perfekt zum Erkunden von Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "Für wachsende Teams",
        plan_enterprise: "Enterprise",
        plan_enterprise_desc: "Für Großbetrieb",
        
        // Prices
        price_free: "Kostenlos",
        price_forever: "für immer",
        price_month: "Monat",
        price_year: "Jahr",
        price_custom: "Individuell",
        price_pricing: "Preise",
        
        // Badges & Buttons
        popular_badge: "Beliebteste",
        btn_start_free: "Kostenlos starten",
        btn_trial: "14-Tage-Test starten",
        btn_contact_sales: "Vertrieb kontaktieren",
        
        // Features list
        feature_cluster: "Kafka-Cluster",
        feature_clusters: "Kafka-Cluster",
        feature_topics: "Topics",
        feature_retention: "Metrik-Aufbewahrung",
        feature_team: "Teammitglieder",
        feature_visualization: "Echtzeit-Visualisierung",
        feature_support_community: "Community-Support",
        feature_support_email: "E-Mail-Support",
        feature_support_dedicated: "Dedizierter Support",
        feature_alerting: "Alarmsystem",
        feature_alerting_advanced: "Erweiterte Alarme",
        feature_export: "Datenexport",
        feature_export_csv: "CSV / JSON Export",
        feature_sso: "SSO / SAML Integration",
        feature_onpremise: "On-Premise Deployment",
        feature_api: "Benutzerdefinierter API-Zugang",
        feature_unlimited: "Unbegrenzt",
        
        // FAQ
        faq_title: "Häufig gestellte",
        faq_title_span: "Fragen",
        faq_q1: "Kann ich jederzeit den Plan wechseln?",
        faq_a1: "Ja! Sie können jederzeit upgraden oder downgraden. Beim Upgrade zahlen Sie die anteilige Differenz. Beim Downgrade gilt der neue Preis ab dem nächsten Abrechnungszyklus.",
        faq_q2: "Gibt es eine kostenlose Testversion für Pro?",
        faq_a2: "Absolut! Jedes Pro-Abonnement beginnt mit einer 14-tägigen kostenlosen Testversion. Keine Kreditkarte erforderlich. Sie haben während der Testphase vollen Zugriff auf alle Pro-Funktionen.",
        faq_q3: "Welche Zahlungsmethoden akzeptieren Sie?",
        faq_a3: "Wir akzeptieren alle gängigen Kreditkarten (Visa, Mastercard, American Express), PayPal und Banküberweisungen für Enterprise-Pläne. Alle Zahlungen werden sicher über Stripe abgewickelt.",
        faq_q4: "Kann ich Yucast selbst hosten?",
        faq_a4: "On-Premise Deployment ist mit dem Enterprise-Plan verfügbar. Dies umfasst Docker-Images, Kubernetes Helm Charts und dedizierten Installationssupport. Kontaktieren Sie unser Vertriebsteam für weitere Details.",
        faq_q5: "Was ist im Wartungsvertrag enthalten?",
        faq_a5: "Enterprise-Wartung umfasst: priorisierte Fehlerbehebungen, Sicherheitspatches, Versions-Upgrades, 24/7-Monitoring-Unterstützung, vierteljährliche Architektur-Reviews und einen dedizierten Customer Success Manager.",
        
        // CTA Section
        cta_questions: "Noch Fragen?",
        cta_questions_desc: "Unser Team hilft Ihnen gerne, den perfekten Plan für Ihre Bedürfnisse zu finden. Erhalten Sie eine persönliche Demo und sehen Sie Yucast in Aktion.",

        starter_f1: "<strong>1</strong> Kafka-Cluster",
        starter_f2: "Bis zu <strong>50</strong> Topics",
        starter_f3: "<strong>24h</strong> Metrik-Aufbewahrung",
        pro_f1: "Bis zu <strong>5</strong> Kafka-Cluster",
        pro_f2: "Bis zu <strong>500</strong> Topics",
        pro_f3: "<strong>30 Tage</strong> Metrik-Aufbewahrung",
        pro_f4: "Bis zu <strong>10</strong> Teammitglieder",
        pro_f5: "<strong>E-Mail-Support</strong> (48h Antwort)",
        enterprise_f1: "<strong>Unbegrenzte</strong> Cluster",
        enterprise_f2: "<strong>Unbegrenzte</strong> Topics",
        enterprise_f3: "<strong>1 Jahr</strong> Metrik-Aufbewahrung",
        enterprise_f4: "<strong>Unbegrenzte</strong> Teammitglieder",
        enterprise_f5: "<strong>Dedizierter Support</strong> + SLA",

        demo_producer: "Produzent",
        demo_consumer: "Konsument",
        demo_cluster_info: "3 Broker • 12 Topics",
        demo_active: "● Aktiv",

        // Features
        feature_1_title: "Echtzeit-Visualisierung",
        feature_1_desc: "Beobachten Sie Ihre Daten in Echtzeit durch Topics und Partitionen fließen mit wunderschönen, animierten Diagrammen.",
        feature_2_title: "Multi-Cluster-Verwaltung",
        feature_2_desc: "Verbinden und überwachen Sie mehrere Kafka-Cluster von einem einzigen, einheitlichen Dashboard aus.",
        feature_3_title: "Orphan-Bereinigung",
        feature_3_desc: "Erkennen und bereinigen Sie automatisch ungenutzte Topics und veraltete Verbindungen, um Ihren Cluster gesund zu halten.",
        feature_4_title: "Live-Metriken",
        feature_4_desc: "Echtzeit-Metrik-Übertragung via WebSocket. Durchsatz, Lag, Partition-Gesundheit — alles auf einen Blick.",
        feature_5_title: "Visuelles Statussystem",
        feature_5_desc: "Intuitive farbcodierte Statusindikatoren mit flüssigen Animationen zeigen sofort die Cluster-Gesundheit.",
        feature_6_title: "Blitzschnell",
        feature_6_desc: "Mit Leistung im Sinn gebaut. Verarbeitet tausende Topics ohne ins Schwitzen zu kommen.",

        feature_1_title: "Echtzeit-Visualisierung",
        feature_1_desc: "Beobachten Sie Ihre Daten in Echtzeit durch Topics und Partitionen fließen mit wunderschönen, animierten Diagrammen.",
        feature_2_title: "Multi-Cluster-Verwaltung",
        feature_2_desc: "Verbinden und überwachen Sie mehrere Kafka-Cluster von einem einzigen, einheitlichen Dashboard aus.",
        feature_3_title: "Orphan-Bereinigung",
        feature_3_desc: "Erkennen und bereinigen Sie automatisch ungenutzte Topics und veraltete Verbindungen, um Ihren Cluster gesund zu halten.",
        feature_4_title: "Live-Metriken",
        feature_4_desc: "Echtzeit-Metrik-Übertragung via WebSocket. Durchsatz, Lag, Partition-Gesundheit — alles auf einen Blick.",
        feature_5_title: "Visuelles Statussystem",
        feature_5_desc: "Intuitive farbcodierte Statusindikatoren mit flüssigen Animationen zeigen sofort die Cluster-Gesundheit.",
        feature_6_title: "Blitzschnell",
        feature_6_desc: "Mit Leistung im Sinn gebaut. Verarbeitet tausende Topics ohne ins Schwitzen zu kommen.",

        // Architecture
        arch_backend_title: "Backend-Stack",
        arch_frontend_title: "Frontend-Stack",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • Reaktives WebFlux",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Echtzeit-Metriken",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Interaktive Knotendiagramme",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Utility-first Styling",

        // Toast messages
        toast_success: "Nachricht erfolgreich gesendet!",
        toast_error: "Senden fehlgeschlagen. Bitte erneut versuchen.",
    },
    
    ru: {
        // Navigation
        nav_features: "Возможности",
        nav_schema: "Схема",
        nav_arch: "Архитектура",
        nav_pricing: "Цены",
        nav_contact: "Контакты",
        
        // Hero
        hero_title: "Визуализируйте ваши",
        hero_title_span: "Потоки Kafka",
        hero_subtitle: "Современный способ мониторинга, управления и понимания вашей инфраструктуры Kafka. Красивые визуализации, аналитика в реальном времени, никакой сложности.",
        status_version: "v2.0 — Теперь с метриками реального времени",
        
        // CTAs
        cta_start: "Начать",
        cta_pricing: "Смотреть цены",
        cta_touch: "Связаться с нами",
        cta_demo: "Запланировать демо",
        
        // Features Section
        features_title: "Всё что нужно чтобы",
        features_title_span: "освоить Kafka",
        features_subtitle: "Мощные функции для разработчиков, которые хотят ясности и контроля над потоками событий.",
        
        // Architecture Section
        arch_title: "Современная",
        arch_title_span: "Архитектура",
        arch_subtitle: "Построено на стандартных технологиях индустрии для надёжности и производительности.",
        
        // Contact Section
        contact_title: "Свяжитесь",
        contact_title_span: "с нами",
        form_name: "Ваше имя",
        form_email: "Ваш email",
        form_message: "Ваше сообщение...",
        form_submit: "Отправить",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Сделано с ☕ и ❤️ Cyber Wuruhi.",
        footer_privacy: "Конфиденциальность",
        footer_terms: "Условия",
        
        // Pricing Page
        pricing_badge: "💰 Простые и прозрачные цены",
        pricing_title: "Выберите свой",
        pricing_title_span: "идеальный план",
        pricing_subtitle: "Начните бесплатно, масштабируйтесь по мере роста. Никаких скрытых платежей, никаких сюрпризов.",
        
        // Billing Toggle
        billing_monthly: "Ежемесячно",
        billing_yearly: "Ежегодно",
        billing_save: "Экономия 20%",
        
        // Plans
        plan_starter: "Starter",
        plan_starter_desc: "Идеально для знакомства с Yucast",
        plan_pro: "Pro",
        plan_pro_desc: "Для растущих команд",
        plan_enterprise: "Enterprise",
        plan_enterprise_desc: "Для крупномасштабных операций",
        
        // Prices
        price_free: "Бесплатно",
        price_forever: "навсегда",
        price_month: "месяц",
        price_year: "год",
        price_custom: "Индивидуально",
        price_pricing: "цены",
        
        // Badges & Buttons
        popular_badge: "Самый популярный",
        btn_start_free: "Начать бесплатно",
        btn_trial: "14 дней бесплатно",
        btn_contact_sales: "Связаться с продажами",
        
        // Features list
        feature_cluster: "кластер Kafka",
        feature_clusters: "кластеров Kafka",
        feature_topics: "топиков",
        feature_retention: "хранение метрик",
        feature_team: "членов команды",
        feature_visualization: "Визуализация в реальном времени",
        feature_support_community: "Поддержка сообщества",
        feature_support_email: "Email поддержка",
        feature_support_dedicated: "Выделенная поддержка",
        feature_alerting: "Система оповещений",
        feature_alerting_advanced: "Расширенные оповещения",
        feature_export: "Экспорт данных",
        feature_export_csv: "Экспорт CSV / JSON",
        feature_sso: "Интеграция SSO / SAML",
        feature_onpremise: "Локальное развёртывание",
        feature_api: "Пользовательский API доступ",
        feature_unlimited: "Безлимитно",
        
        // FAQ
        faq_title: "Часто задаваемые",
        faq_title_span: "вопросы",
        faq_q1: "Могу ли я сменить план в любое время?",
        faq_a1: "Да! Вы можете повысить или понизить план в любое время. При повышении вам будет начислена пропорциональная разница. При понижении новый тариф вступит в силу в следующем платёжном периоде.",
        faq_q2: "Есть ли бесплатный пробный период для Pro?",
        faq_a2: "Конечно! Каждая подписка Pro начинается с 14-дневного бесплатного пробного периода. Кредитная карта не требуется. У вас будет полный доступ ко всем функциям Pro в течение пробного периода.",
        faq_q3: "Какие способы оплаты вы принимаете?",
        faq_a3: "Мы принимаем все основные кредитные карты (Visa, Mastercard, American Express), PayPal и банковские переводы для планов Enterprise. Все платежи безопасно обрабатываются через Stripe.",
        faq_q4: "Могу ли я разместить Yucast самостоятельно?",
        faq_a4: "Локальное развёртывание доступно с планом Enterprise. Это включает Docker образы, Kubernetes Helm charts и выделенную поддержку установки. Свяжитесь с нашим отделом продаж для подробностей.",
        faq_q5: "Что включено в контракт на обслуживание?",
        faq_a5: "Обслуживание Enterprise включает: приоритетное исправление ошибок, патчи безопасности, обновления версий, помощь с мониторингом 24/7, ежеквартальные обзоры архитектуры и выделенного менеджера по успеху клиентов.",
        
        // CTA Section
        cta_questions: "Остались вопросы?",
        cta_questions_desc: "Наша команда готова помочь вам найти идеальный план для ваших потребностей. Получите персонализированную демонстрацию и увидите Yucast в действии.",

        starter_f1: "<strong>1</strong> кластер Kafka",
        starter_f2: "До <strong>50</strong> топиков",
        starter_f3: "<strong>24ч</strong> хранение метрик",
        pro_f1: "До <strong>5</strong> кластеров Kafka",
        pro_f2: "До <strong>500</strong> топиков",
        pro_f3: "<strong>30 дней</strong> хранение метрик",
        pro_f4: "До <strong>10</strong> членов команды",
        pro_f5: "<strong>Email поддержка</strong> (ответ 48ч)",
        enterprise_f1: "<strong>Безлимитные</strong> кластеры",
        enterprise_f2: "<strong>Безлимитные</strong> топики",
        enterprise_f3: "<strong>1 год</strong> хранение метрик",
        enterprise_f4: "<strong>Безлимитные</strong> члены команды",
        enterprise_f5: "<strong>Выделенная поддержка</strong> + SLA",

        demo_producer: "Продюсер",
        demo_consumer: "Консьюмер",
        demo_cluster_info: "3 брокера • 12 топиков",
        demo_active: "● Активен",

        // Features
        feature_1_title: "Визуализация в Реальном Времени",
        feature_1_desc: "Наблюдайте за потоком данных через топики и партиции в реальном времени с красивыми анимированными диаграммами.",
        feature_2_title: "Управление Мульти-Кластером",
        feature_2_desc: "Подключайте и мониторьте несколько кластеров Kafka с единой унифицированной панели.",
        feature_3_title: "Очистка Сирот",
        feature_3_desc: "Автоматически обнаруживайте и очищайте неиспользуемые топики и устаревшие подключения для поддержания здоровья кластера.",
        feature_4_title: "Метрики в Реальном Времени",
        feature_4_desc: "Трансляция метрик в реальном времени через WebSocket. Пропускная способность, лаг, здоровье партиций — всё с первого взгляда.",
        feature_5_title: "Визуальная Система Статусов",
        feature_5_desc: "Интуитивные цветовые индикаторы статуса с плавными анимациями мгновенно показывают здоровье кластера.",
        feature_6_title: "Молниеносно Быстро",
        feature_6_desc: "Создано с учётом производительности. Обрабатывает тысячи топиков без усилий.",

        feature_1_title: "Визуализация в Реальном Времени",
        feature_1_desc: "Наблюдайте за потоком данных через топики и партиции в реальном времени с красивыми анимированными диаграммами.",
        feature_2_title: "Управление Мульти-Кластером",
        feature_2_desc: "Подключайте и мониторьте несколько кластеров Kafka с единой унифицированной панели.",
        feature_3_title: "Очистка Сирот",
        feature_3_desc: "Автоматически обнаруживайте и очищайте неиспользуемые топики и устаревшие подключения для поддержания здоровья кластера.",
        feature_4_title: "Метрики в Реальном Времени",
        feature_4_desc: "Трансляция метрик в реальном времени через WebSocket. Пропускная способность, лаг, здоровье партиций — всё с первого взгляда.",
        feature_5_title: "Визуальная Система Статусов",
        feature_5_desc: "Интуитивные цветовые индикаторы статуса с плавными анимациями мгновенно показывают здоровье кластера.",
        feature_6_title: "Молниеносно Быстро",
        feature_6_desc: "Создано с учётом производительности. Обрабатывает тысячи топиков без усилий.",

        // Architecture
        arch_backend_title: "Backend Стек",
        arch_frontend_title: "Frontend Стек",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • Реактивный WebFlux",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • Метрики реального времени",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "Интерактивные диаграммы узлов",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "Utility-first стилизация",

        // Toast messages
        toast_success: "Сообщение успешно отправлено!",
        toast_error: "Ошибка отправки. Попробуйте снова.",
    },
    
    zh: {
        // Navigation
        nav_features: "功能",
        nav_schema: "架构图",
        nav_arch: "架构",
        nav_pricing: "价格",
        nav_contact: "联系我们",
        
        // Hero
        hero_title: "可视化您的",
        hero_title_span: "Kafka 流",
        hero_subtitle: "监控、管理和理解 Kafka 基础设施的现代方式。精美的可视化、实时洞察、零复杂度。",
        status_version: "v2.0 — 现在支持实时指标",
        
        // CTAs
        cta_start: "立即开始",
        cta_pricing: "查看价格",
        cta_touch: "联系我们",
        cta_demo: "预约演示",
        
        // Features Section
        features_title: "掌握 Kafka 所需的",
        features_title_span: "一切功能",
        features_subtitle: "为追求事件流清晰度和控制力的开发者设计的强大功能。",
        
        // Architecture Section
        arch_title: "现代",
        arch_title_span: "架构",
        arch_subtitle: "采用行业标准技术构建，确保可靠性和性能。",
        
        // Contact Section
        contact_title: "联系",
        contact_title_span: "我们",
        form_name: "您的姓名",
        form_email: "您的邮箱",
        form_message: "您的留言...",
        form_submit: "发送消息",
        
        // Footer
        footer_copyright: "© 2026 Yucast. 由 Cyber Wuruhi 用 ☕ 和 ❤️ 制作。",
        footer_privacy: "隐私政策",
        footer_terms: "服务条款",
        
        // Pricing Page
        pricing_badge: "💰 简单透明的定价",
        pricing_title: "选择您的",
        pricing_title_span: "完美方案",
        pricing_subtitle: "免费开始，随需扩展。无隐藏费用，无意外。",
        
        // Billing Toggle
        billing_monthly: "月付",
        billing_yearly: "年付",
        billing_save: "节省20%",
        
        // Plans
        plan_starter: "入门版",
        plan_starter_desc: "适合探索 Yucast",
        plan_pro: "专业版",
        plan_pro_desc: "适合成长中的团队",
        plan_enterprise: "企业版",
        plan_enterprise_desc: "适合大规模运营",
        
        // Prices
        price_free: "免费",
        price_forever: "永久",
        price_month: "月",
        price_year: "年",
        price_custom: "定制",
        price_pricing: "价格",
        
        // Badges & Buttons
        popular_badge: "最受欢迎",
        btn_start_free: "免费开始",
        btn_trial: "开始14天免费试用",
        btn_contact_sales: "联系销售",
        
        // Features list
        feature_cluster: "Kafka 集群",
        feature_clusters: "Kafka 集群",
        feature_topics: "主题",
        feature_retention: "指标保留",
        feature_team: "团队成员",
        feature_visualization: "实时可视化",
        feature_support_community: "社区支持",
        feature_support_email: "邮件支持",
        feature_support_dedicated: "专属支持",
        feature_alerting: "告警系统",
        feature_alerting_advanced: "高级告警",
        feature_export: "数据导出",
        feature_export_csv: "CSV / JSON 导出",
        feature_sso: "SSO / SAML 集成",
        feature_onpremise: "本地部署",
        feature_api: "自定义 API 访问",
        feature_unlimited: "无限制",
        
        // FAQ
        faq_title: "常见",
        faq_title_span: "问题",
        faq_q1: "我可以随时更换方案吗？",
        faq_a1: "可以！您可以随时升级或降级您的方案。升级时，您将按比例支付差额。降级时，新费率将在下一个计费周期生效。",
        faq_q2: "专业版有免费试用吗？",
        faq_a2: "当然！每个专业版订阅都有14天免费试用。无需信用卡。试用期间您可以完全访问所有专业版功能。",
        faq_q3: "你们接受哪些付款方式？",
        faq_a3: "我们接受所有主要信用卡（Visa、Mastercard、American Express）、PayPal，企业版方案还支持银行转账。所有付款通过 Stripe 安全处理。",
        faq_q4: "我可以自己托管 Yucast 吗？",
        faq_a4: "企业版方案支持本地部署。包括 Docker 镜像、Kubernetes Helm charts 和专属安装支持。请联系我们的销售团队了解更多详情。",
        faq_q5: "维护合同包含什么？",
        faq_a5: "企业维护包括：优先修复bug、安全补丁、版本升级、24/7监控协助、季度架构审查和专属客户成功经理。",
        
        // CTA Section
        cta_questions: "还有问题？",
        cta_questions_desc: "我们的团队随时帮助您找到满足需求的完美方案。获取个性化演示，亲眼见证 Yucast 的强大功能。",

        starter_f1: "<strong>1</strong> 个 Kafka 集群",
        starter_f2: "最多 <strong>50</strong> 个主题",
        starter_f3: "<strong>24小时</strong> 指标保留",
        pro_f1: "最多 <strong>5</strong> 个 Kafka 集群",
        pro_f2: "最多 <strong>500</strong> 个主题",
        pro_f3: "<strong>30天</strong> 指标保留",
        pro_f4: "最多 <strong>10</strong> 名团队成员",
        pro_f5: "<strong>邮件支持</strong> (48小时响应)",
        enterprise_f1: "<strong>无限</strong> 集群",
        enterprise_f2: "<strong>无限</strong> 主题",
        enterprise_f3: "<strong>1年</strong> 指标保留",
        enterprise_f4: "<strong>无限</strong> 团队成员",
        enterprise_f5: "<strong>专属支持</strong> + SLA",

        demo_producer: "生产者",
        demo_consumer: "消费者",
        demo_cluster_info: "3 个节点 • 12 个主题",
        demo_active: "● 运行中",


        // Features
        feature_1_title: "实时流可视化",
        feature_1_desc: "通过精美的动画图表，实时观察数据在主题和分区中的流动。",
        feature_2_title: "多集群管理",
        feature_2_desc: "从单一统一的仪表板连接和监控多个 Kafka 集群。",
        feature_3_title: "孤儿清理",
        feature_3_desc: "自动检测并清理未使用的主题和过期连接，保持集群健康。",
        feature_4_title: "实时指标",
        feature_4_desc: "通过 WebSocket 实时广播指标。吞吐量、延迟、分区健康状态——一目了然。",
        feature_5_title: "可视状态系统",
        feature_5_desc: "直观的颜色编码状态指示器配合流畅动画，即时显示集群健康状况。",
        feature_6_title: "极速性能",
        feature_6_desc: "专为性能而生。轻松处理数千个主题。",
        feature_1_title: "实时流可视化",

        feature_1_desc: "通过精美的动画图表，实时观察数据在主题和分区中的流动。",
        feature_2_title: "多集群管理",
        feature_2_desc: "从单一统一的仪表板连接和监控多个 Kafka 集群。",
        feature_3_title: "孤儿清理",
        feature_3_desc: "自动检测并清理未使用的主题和过期连接，保持集群健康。",
        feature_4_title: "实时指标",
        feature_4_desc: "通过 WebSocket 实时广播指标。吞吐量、延迟、分区健康状态——一目了然。",
        feature_5_title: "可视状态系统",
        feature_5_desc: "直观的颜色编码状态指示器配合流畅动画，即时显示集群健康状况。",
        feature_6_title: "极速性能",
        feature_6_desc: "专为性能而生。轻松处理数千个主题。",

        // Architecture
        arch_backend_title: "后端技术栈",
        arch_frontend_title: "前端技术栈",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • 响应式 WebFlux",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • 实时指标",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "交互式节点图",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "实用优先样式",

        // Toast messages
        toast_success: "消息发送成功！",
        toast_error: "发送失败，请重试。",
            },
    
    ja: {
        // Navigation
        nav_features: "機能",
        nav_schema: "スキーマ",
        nav_arch: "アーキテクチャ",
        nav_pricing: "料金",
        nav_contact: "お問い合わせ",
        
        // Hero
        hero_title: "可視化する",
        hero_title_span: "Kafkaフロー",
        hero_subtitle: "Kafkaインフラストラクチャを監視、管理、理解するための最新の方法。美しい可視化、リアルタイムの洞察、複雑さゼロ。",
        status_version: "v2.0 — リアルタイムメトリクス対応",
        
        // CTAs
        cta_start: "始める",
        cta_pricing: "料金を見る",
        cta_touch: "お問い合わせ",
        cta_demo: "デモを予約",
        
        // Features Section
        features_title: "Kafkaをマスターするための",
        features_title_span: "すべての機能",
        features_subtitle: "イベントストリームの明確さとコントロールを求める開発者のために設計された強力な機能。",
        
        // Architecture Section
        arch_title: "モダン",
        arch_title_span: "アーキテクチャ",
        arch_subtitle: "信頼性とパフォーマンスのための業界標準技術で構築。",
        
        // Contact Section
        contact_title: "お問い",
        contact_title_span: "合わせ",
        form_name: "お名前",
        form_email: "メールアドレス",
        form_message: "メッセージ...",
        form_submit: "送信",
        
        // Footer
        footer_copyright: "© 2026 Yucast. Cyber Wuruhiが☕と❤️で作成。",
        footer_privacy: "プライバシー",
        footer_terms: "利用規約",
        
        // Pricing Page
        pricing_badge: "💰 シンプルで透明な料金",
        pricing_title: "最適な",
        pricing_title_span: "プランを選択",
        pricing_subtitle: "無料で始めて、成長に合わせてスケール。隠れた料金なし、サプライズなし。",
        
        // Billing Toggle
        billing_monthly: "月払い",
        billing_yearly: "年払い",
        billing_save: "20%お得",
        
        // Plans
        plan_starter: "スターター",
        plan_starter_desc: "Yucastを試すのに最適",
        plan_pro: "プロ",
        plan_pro_desc: "成長中のチーム向け",
        plan_enterprise: "エンタープライズ",
        plan_enterprise_desc: "大規模運用向け",
        
        // Prices
        price_free: "無料",
        price_forever: "永久",
        price_month: "月",
        price_year: "年",
        price_custom: "カスタム",
        price_pricing: "料金",
        
        // Badges & Buttons
        popular_badge: "人気No.1",
        btn_start_free: "無料で始める",
        btn_trial: "14日間無料トライアル",
        btn_contact_sales: "営業に連絡",
        
        // Features list
        feature_cluster: "Kafkaクラスター",
        feature_clusters: "Kafkaクラスター",
        feature_topics: "トピック",
        feature_retention: "メトリクス保持",
        feature_team: "チームメンバー",
        feature_visualization: "リアルタイム可視化",
        feature_support_community: "コミュニティサポート",
        feature_support_email: "メールサポート",
        feature_support_dedicated: "専任サポート",
        feature_alerting: "アラートシステム",
        feature_alerting_advanced: "高度なアラート",
        feature_export: "データエクスポート",
        feature_export_csv: "CSV / JSON エクスポート",
        feature_sso: "SSO / SAML連携",
        feature_onpremise: "オンプレミス展開",
        feature_api: "カスタムAPIアクセス",
        feature_unlimited: "無制限",
        
        // FAQ
        faq_title: "よくある",
        faq_title_span: "質問",
        faq_q1: "いつでもプランを変更できますか？",
        faq_a1: "はい！いつでもアップグレードまたはダウングレードできます。アップグレード時は日割り差額が請求されます。ダウングレード時は次の請求サイクルから新料金が適用されます。",
        faq_q2: "プロの無料トライアルはありますか？",
        faq_a2: "もちろん！すべてのプロサブスクリプションは14日間の無料トライアルから始まります。クレジットカード不要。トライアル期間中はすべてのプロ機能にフルアクセスできます。",
        faq_q3: "どの支払い方法を受け付けていますか？",
        faq_a3: "主要なクレジットカード（Visa、Mastercard、American Express）、PayPal、エンタープライズプランでは銀行振込を受け付けています。すべての支払いはStripeを通じて安全に処理されます。",
        faq_q4: "Yucastを自己ホストできますか？",
        faq_a4: "オンプレミス展開はエンタープライズプランで利用可能です。Dockerイメージ、Kubernetes Helmチャート、専任のインストールサポートが含まれます。詳細は営業チームにお問い合わせください。",
        faq_q5: "メンテナンス契約には何が含まれますか？",
        faq_a5: "エンタープライズメンテナンスには、優先バグ修正、セキュリティパッチ、バージョンアップグレード、24/7監視支援、四半期ごとのアーキテクチャレビュー、専任のカスタマーサクセスマネージャーが含まれます。",
        
        // CTA Section
        cta_questions: "まだ質問がありますか？",
        cta_questions_desc: "私たちのチームがあなたのニーズに最適なプランを見つけるお手伝いをします。パーソナライズされたデモを受けて、Yucastの実力をご覧ください。",

        starter_f1: "<strong>1</strong> Kafkaクラスター",
        starter_f2: "最大 <strong>50</strong> トピック",
        starter_f3: "<strong>24時間</strong> メトリクス保持",
        pro_f1: "最大 <strong>5</strong> Kafkaクラスター",
        pro_f2: "最大 <strong>500</strong> トピック",
        pro_f3: "<strong>30日間</strong> メトリクス保持",
        pro_f4: "最大 <strong>10</strong> チームメンバー",
        pro_f5: "<strong>メールサポート</strong> (48時間応答)",
        enterprise_f1: "<strong>無制限</strong> クラスター",
        enterprise_f2: "<strong>無制限</strong> トピック",
        enterprise_f3: "<strong>1年間</strong> メトリクス保持",
        enterprise_f4: "<strong>無制限</strong> チームメンバー",
        enterprise_f5: "<strong>専任サポート</strong> + SLA",

        demo_producer: "プロデューサー",
        demo_consumer: "コンシューマー",
        demo_cluster_info: "3ブローカー • 12トピック",
        demo_active: "● アクティブ",

        //Features
        feature_1_title: "リアルタイムフロー可視化",
        feature_1_desc: "美しいアニメーション図で、トピックとパーティションを流れるデータをリアルタイムで観察できます。",
        feature_2_title: "マルチクラスター管理",
        feature_2_desc: "単一の統合ダッシュボードから複数のKafkaクラスターに接続し、監視できます。",
        feature_3_title: "孤立リソースのクリーンアップ",
        feature_3_desc: "未使用のトピックや古い接続を自動的に検出してクリーンアップし、クラスターを健全に保ちます。",
        feature_4_title: "ライブメトリクス",
        feature_4_desc: "WebSocket経由でリアルタイムメトリクスを配信。スループット、ラグ、パーティションの健全性を一目で確認。",
        feature_5_title: "ビジュアルステータスシステム",
        feature_5_desc: "直感的なカラーコード付きステータスインジケーターとスムーズなアニメーションで、クラスターの健全性を即座に表示。",
        feature_6_title: "超高速",
        feature_6_desc: "パフォーマンスを念頭に構築。数千のトピックを楽々処理。",

        // Architecture
        arch_backend_title: "バックエンドスタック",
        arch_frontend_title: "フロントエンドスタック",
        arch_springboot_name: "Spring Boot 3.2",
        arch_springboot_desc: "Java 21 • リアクティブ WebFlux",
        arch_kafka_name: "Apache Kafka",
        arch_kafka_desc: "Admin Client • Streams API",
        arch_websocket_name: "WebSocket",
        arch_websocket_desc: "STOMP • リアルタイムメトリクス",
        arch_react_name: "React 18",
        arch_react_desc: "Hooks • Context API",
        arch_reactflow_name: "React Flow",
        arch_reactflow_desc: "インタラクティブなノード図",
        arch_tailwind_name: "Tailwind CSS",
        arch_tailwind_desc: "ユーティリティファーストスタイリング",

        // Toast messages
        toast_success: "メッセージが正常に送信されました！",
        toast_error: "送信に失敗しました。もう一度お試しください。",
    }
};

const availableLanguages = {
    en: { name: "English", flag: "🇬🇧" },
    fr: { name: "Français", flag: "🇫🇷" },
    es: { name: "Español", flag: "🇪🇸" },
    it: { name: "Italiano", flag: "🇮🇹" },
    pt: { name: "Português", flag: "🇵🇹" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    ru: { name: "Русский", flag: "🇷🇺" },
    zh: { name: "中文", flag: "🇨🇳" },
    ja: { name: "日本語", flag: "🇯🇵" }
};


// =============================================
// HELPER FUNCTION
// =============================================
function getTranslation(key) {
    const currentLang = localStorage.getItem('selectedLang') || 
                        (navigator.language && navigator.language.split('-')[0]) || 
                        'en';
    
    const langData = translations[currentLang] || translations['en'];

    return langData[key] || key;
}

window.getTranslation = getTranslation;


function changeLanguage(lang) {
    if (!translations[lang]) {
        return;
    }
    
    localStorage.setItem('selectedLang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    if (typeof renderFeatures === 'function') {
        renderFeatures();
    }
    if (typeof renderArchitecture === 'function') {
        renderArchitecture();
    }

    if (typeof updateDropdownDisplay === 'function') {
        updateDropdownDisplay(lang);
    }
}

function detectUserLanguage() {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    return 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang = detectUserLanguage();
    changeLanguage(userLang);
});