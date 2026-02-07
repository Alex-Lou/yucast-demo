const EMAILJS_CONFIG = {
    publicKey: 'AlcXNClkk7JrUAF-y',
    serviceId: 'service_9nkxilk',
    templateId: 'template_c08wjnn'
};

const featuresData = [
    { icon: '🌊', titleKey: 'feature_1_title', descKey: 'feature_1_desc' },
    { icon: '🔍', titleKey: 'feature_2_title', descKey: 'feature_2_desc' },
    { icon: '🧹', titleKey: 'feature_3_title', descKey: 'feature_3_desc' },
    { icon: '📊', titleKey: 'feature_4_title', descKey: 'feature_4_desc' },
    { icon: '🎨', titleKey: 'feature_5_title', descKey: 'feature_5_desc' },
    { icon: '⚡', titleKey: 'feature_6_title', descKey: 'feature_6_desc' }
];

const architectureData = [
    {
        titleKey: "arch_backend_title",
        mainIcon: "☕",
        iconClass: "ARCH_ICON_BACKEND",
        items: [
            { abbr: "SB", nameKey: "arch_springboot_name", descKey: "arch_springboot_desc", iconClass: "STACK_ICON_SB" },
            { abbr: "K", nameKey: "arch_kafka_name", descKey: "arch_kafka_desc", iconClass: "STACK_ICON_K" },
            { abbr: "WS", nameKey: "arch_websocket_name", descKey: "arch_websocket_desc", iconClass: "STACK_ICON_WS" }
        ]
    },
    {
        titleKey: "arch_frontend_title",
        mainIcon: "⚛️",
        iconClass: "ARCH_ICON_FRONTEND",
        items: [
            { abbr: "R", nameKey: "arch_react_name", descKey: "arch_react_desc", iconClass: "STACK_ICON_R" },
            { abbr: "RF", nameKey: "arch_reactflow_name", descKey: "arch_reactflow_desc", iconClass: "STACK_ICON_RF" },
            { abbr: "TW", nameKey: "arch_tailwind_name", descKey: "arch_tailwind_desc", iconClass: "STACK_ICON_TW" }
        ]
    }
];

const ARCHITECTURE_ICON_CLASSES = {
    ARCH_ICON_BACKEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-lg shadow-inner",
    ARCH_ICON_FRONTEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-lg shadow-inner",
    STACK_ICON_SB: "w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-sm shadow-sm",
    STACK_ICON_K: "w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-400 font-bold text-sm shadow-sm",
    STACK_ICON_WS: "w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm shadow-sm",
    STACK_ICON_R: "w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm shadow-sm",
    STACK_ICON_RF: "w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-sm shadow-sm",
    STACK_ICON_TW: "w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold text-sm shadow-sm"
};
