import React, { useState, useEffect, useRef } from 'react';

// ============================================
// YUCAST - Kafka Flow Visualizer Landing Page
// Modern, Fluid, Smooth UI
// ============================================

// Animated gradient background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[#0a0a0f]" />
    <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
    <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[128px] animate-pulse delay-500" />
    
    {/* Grid overlay */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}
    />
  </div>
);

// Floating Kafka nodes animation
const FloatingNodes = () => {
  const nodes = [
    { id: 1, x: '10%', y: '20%', delay: 0, size: 'w-3 h-3' },
    { id: 2, x: '85%', y: '15%', delay: 0.5, size: 'w-2 h-2' },
    { id: 3, x: '75%', y: '75%', delay: 1, size: 'w-4 h-4' },
    { id: 4, x: '15%', y: '70%', delay: 1.5, size: 'w-2 h-2' },
    { id: 5, x: '50%', y: '85%', delay: 2, size: 'w-3 h-3' },
    { id: 6, x: '90%', y: '45%', delay: 0.8, size: 'w-2 h-2' },
    { id: 7, x: '5%', y: '45%', delay: 1.2, size: 'w-3 h-3' },
  ];

  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {nodes.map((node) => (
        <div
          key={node.id}
          className={`absolute ${node.size} rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 animate-float`}
          style={{
            left: node.x,
            top: node.y,
            animationDelay: `${node.delay}s`,
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
          }}
        />
      ))}
    </div>
  );
};

// Glowing button component
const GlowButton = ({ children, primary = false, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`
      relative px-8 py-4 rounded-xl font-semibold text-sm tracking-wide
      transition-all duration-300 ease-out
      ${primary 
        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105' 
        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105'
      }
      ${className}
    `}
  >
    {primary && (
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity" />
    )}
    {children}
  </button>
);

// Feature card component
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <div 
    className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm
               hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 ease-out
               hover:transform hover:-translate-y-2"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Glow effect on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

// Animated stat counter
const StatCounter = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(value);
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

// Flow visualization preview
const FlowPreview = () => (
  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/[0.05] bg-[#0d0d12]">
    {/* Simulated flow visualization */}
    <svg className="w-full h-full" viewBox="0 0 800 400">
      {/* Connection lines with animation */}
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Animated flowing lines */}
      <g filter="url(#glow)">
        <path 
          d="M 100 200 Q 250 100 400 200 T 700 200" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="2"
          strokeDasharray="10 5"
          className="animate-dash"
        />
        <path 
          d="M 100 150 Q 300 250 500 150 T 700 180" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="2"
          strokeDasharray="10 5"
          className="animate-dash delay-500"
        />
        <path 
          d="M 100 280 Q 200 180 400 280 T 700 250" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="2"
          strokeDasharray="10 5"
          className="animate-dash delay-1000"
        />
      </g>

      {/* Cluster nodes */}
      <g>
        {/* Producer */}
        <rect x="60" y="170" width="80" height="60" rx="12" fill="#1a1a24" stroke="#22d3ee" strokeWidth="2" />
        <text x="100" y="205" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Producer</text>
        
        {/* Kafka Cluster */}
        <rect x="320" y="140" width="160" height="120" rx="16" fill="#1a1a24" stroke="#a855f7" strokeWidth="2" />
        <text x="400" y="180" textAnchor="middle" fill="#a855f7" fontSize="14" fontWeight="bold">Kafka Cluster</text>
        <text x="400" y="200" textAnchor="middle" fill="#666" fontSize="10">3 brokers • 12 topics</text>
        <text x="400" y="220" textAnchor="middle" fill="#22d3ee" fontSize="10">● Active</text>
        
        {/* Consumer */}
        <rect x="660" y="170" width="80" height="60" rx="12" fill="#1a1a24" stroke="#22d3ee" strokeWidth="2" />
        <text x="700" y="205" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Consumer</text>
      </g>

      {/* Animated data particles */}
      <circle r="4" fill="#22d3ee" filter="url(#glow)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 100 200 Q 250 100 400 200 T 700 200" />
      </circle>
      <circle r="4" fill="#a855f7" filter="url(#glow)">
        <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 100 150 Q 300 250 500 150 T 700 180" />
      </circle>
      <circle r="4" fill="#22d3ee" filter="url(#glow)">
        <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M 100 280 Q 200 180 400 280 T 700 250" />
      </circle>
    </svg>

    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
  </div>
);

// Navigation component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.05]' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-black text-lg">Y</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Yucast</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
          <a href="#demo" className="text-gray-400 hover:text-white transition-colors text-sm">Demo</a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
          <a href="#docs" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors text-sm hidden sm:block">Sign In</button>
          <GlowButton primary className="!py-2 !px-5 !text-xs">Get Started</GlowButton>
        </div>
      </div>
    </nav>
  );
};

// Main Landing Page Component
const YucastLanding = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <AnimatedBackground />
      <FloatingNodes />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">v2.0 — Now with real-time metrics</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
            Visualize Your
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kafka Flows
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            The modern way to monitor, manage, and understand your Kafka infrastructure. 
            Beautiful visualizations, real-time insights, zero complexity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <GlowButton primary>
              <span className="flex items-center gap-2">
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </GlowButton>
            <GlowButton>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </span>
            </GlowButton>
          </div>

          {/* Flow Preview */}
          <div className="animate-fade-in-up delay-500">
            <FlowPreview />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value="50" suffix="+" label="Clusters Managed" />
          <StatCounter value="10" suffix="M+" label="Messages/Day" />
          <StatCounter value="99" suffix="%" label="Uptime" />
          <StatCounter value="500" suffix="+" label="Happy Teams" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Everything you need to
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> master Kafka</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features designed for developers who want clarity and control over their event streams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon="🌊"
              title="Real-Time Flow Visualization"
              description="Watch your data flow through topics and partitions in real-time with beautiful, animated diagrams."
              delay={0}
            />
            <FeatureCard 
              icon="🔍"
              title="Multi-Cluster Management"
              description="Connect and monitor multiple Kafka clusters from a single, unified dashboard."
              delay={100}
            />
            <FeatureCard 
              icon="🧹"
              title="Orphan Cleanup"
              description="Automatically detect and clean up unused topics and stale connections to keep your cluster healthy."
              delay={200}
            />
            <FeatureCard 
              icon="📊"
              title="Live Metrics"
              description="Real-time metrics broadcasting via WebSocket. Throughput, lag, partition health — all at a glance."
              delay={300}
            />
            <FeatureCard 
              icon="🎨"
              title="Visual Status System"
              description="Intuitive color-coded status indicators with smooth animations show cluster health instantly."
              delay={400}
            />
            <FeatureCard 
              icon="⚡"
              title="Blazing Fast"
              description="Built with performance in mind. Handles thousands of topics without breaking a sweat."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/[0.1]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-4">Ready to visualize your Kafka?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Join hundreds of teams who've transformed how they understand and manage their event streams.
              </p>
              <GlowButton primary className="!text-base">
                Get Started — It's Free
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-gray-400 text-sm">© 2025 Yucast. Built with ☕ by Lou.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 3s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default YucastLanding;
