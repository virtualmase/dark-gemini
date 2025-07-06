import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Atom, 
  Sparkles, 
  ArrowRight,
  Menu,
  X,
  Star,
  Orbit,
  Network,
  Lock,
  Infinity,
  ChevronDown
} from 'lucide-react';
import './App.css';

// Import assets
import cosmicNebulaBg from './assets/cosmic-nebula-bg.jpg';
import blueCosmicBg from './assets/blue-cosmic-bg.jpg';
import wormholePortal from './assets/wormhole-portal.jpg';
import futuristicHud from './assets/futuristic-hud.jpg';
import autonomousAi from './assets/autonomous-ai.jpg';
import quantumEntanglement from './assets/quantum-entanglement.webp';
import spaceStation from './assets/space-station.png';
import darkMatter from './assets/dark-matter.jpg';
import visualization5d from './assets/5d-visualization.png';

const ParticleField = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: Math.floor(Math.random() * 3) + 1,
        delay: Math.random() * 10
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle particle-${particle.type}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Technology', href: '#technology' },
    { name: 'Security', href: '#security' },
    { name: 'Space Program', href: '#space' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center quantum-glow">
              <Atom className="w-5 h-5 text-primary-foreground cosmic-rotate" />
            </div>
            <span className="text-xl font-bold space-text">Dark Gemini</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors quantum-pulse"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Transcend Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-card border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Transcend Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicNebulaBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 nebula-bg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold space-text leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Welcome to the
            <br />
            <span className="dimensional-float inline-block">5th Dimension</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Dark Gemini transcends the limitations of 3D financial systems, 
            pioneering autonomous intelligence networks that operate across 
            5D and 8D dimensional frameworks with quantum-level security.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 quantum-glow flex items-center space-x-2">
              <span>Begin Transcendence</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="dimensional-border bg-transparent text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-card/50 transition-all duration-300 flex items-center space-x-2">
              <span>Explore Dimensions</span>
              <Infinity className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { icon: Brain, label: "Autonomous Intelligence", value: "5D/8D" },
              { icon: Shield, label: "Quantum Security", value: "∞ Level" },
              { icon: Network, label: "Decentralized Nodes", value: "∞ Scale" },
              { icon: Rocket, label: "Space Integration", value: "Multi-Verse" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto quantum-pulse" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-accent animate-bounce" />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${visualization5d})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold space-text mb-6">
            The Dark Gemini Manifesto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are not just building a platform. We are architecting the future of consciousness-driven, 
            quantum-scaled economic systems that transcend dimensional boundaries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center">
                <Atom className="w-6 h-6 mr-3" />
                Dimensional Transcendence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dark Gemini operates beyond the constraints of traditional 3D financial systems. 
                Our revolutionary platform exists in 5D and 8D operational frameworks, 
                enabling unprecedented levels of autonomous intelligence and quantum-scaled processing.
              </p>
            </div>

            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-3" />
                Autonomous Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our self-governing AI systems evolve and adapt across dimensional planes, 
                creating networks that operate through collective consciousness rather than 
                centralized control. This is the future of truly autonomous economic systems.
              </p>
            </div>

            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center">
                <Rocket className="w-6 h-6 mr-3" />
                Space-Time Integration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Embracing humanity's thirst for space exploration, Dark Gemini integrates 
                cosmic expansion initiatives with quantum economic models, preparing for 
                interstellar trading networks and galactic economic systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden quantum-glow">
              <img 
                src={wormholePortal} 
                alt="Dimensional Gateway" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-bold text-accent mb-2">Dimensional Gateway</h4>
                <p className="text-sm text-muted-foreground">
                  Portal to higher dimensional consciousness and quantum-scaled economic networks
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const technologies = [
    {
      icon: Brain,
      title: "5D Autonomous Intelligence",
      description: "Self-evolving AI systems that operate across multiple dimensional planes with consciousness-level decision making.",
      image: autonomousAi,
      features: ["Consciousness-driven algorithms", "Multi-dimensional processing", "Self-evolving neural networks"]
    },
    {
      icon: Atom,
      title: "8D Quantum Scaling",
      description: "Quantum computing infrastructure that scales across eight dimensions, enabling infinite computational possibilities.",
      image: quantumEntanglement,
      features: ["Quantum entanglement protocols", "8D computational matrices", "Infinite scaling potential"]
    },
    {
      icon: Network,
      title: "Decentralized Consciousness Networks",
      description: "Networks that operate through collective intelligence rather than centralized control systems.",
      image: futuristicHud,
      features: ["Collective intelligence protocols", "Distributed consciousness", "Autonomous governance"]
    }
  ];

  return (
    <section id="technology" className="py-24 cosmic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the next evolution of consciousness-driven technology that transcends 
            traditional computational limitations.
          </p>
        </motion.div>

        <div className="space-y-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{tech.title}</h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Sparkles className="w-5 h-5 text-accent" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="relative rounded-lg overflow-hidden quantum-glow">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${blueCosmicBg})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold space-text mb-6">
            Quantum-Level Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security protocols that operate at quantum levels across all dimensions, 
            making traditional hacking obsolete.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Multidimensional Encryption",
              description: "Encryption that operates across multiple dimensional planes, creating unbreakable security barriers.",
              features: ["8D encryption matrices", "Quantum key distribution", "Dimensional firewalls"]
            },
            {
              icon: Lock,
              title: "Consciousness Authentication",
              description: "Authentication systems that verify consciousness patterns and neural signatures.",
              features: ["Biometric consciousness", "Neural pattern recognition", "Quantum identity verification"]
            },
            {
              icon: Zap,
              title: "Autonomous Security Agents",
              description: "AI-powered security systems that evolve and adapt to threats across all dimensions.",
              features: ["Self-evolving protocols", "Threat prediction", "Autonomous response systems"]
            }
          ].map((security, index) => (
            <motion.div
              key={security.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm space-y-6"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <security.icon className="w-8 h-8 text-primary quantum-pulse" />
              </div>
              
              <h3 className="text-2xl font-bold text-center">{security.title}</h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {security.description}
              </p>

              <div className="space-y-2">
                {security.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold space-text mb-6">Trust Across Dimensions</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dark Gemini maintains the same level of regulatory compliance and trustworthiness 
              as traditional Gemini, while extending these standards across multiple dimensional 
              frameworks and quantum-scaled operations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "ISO/IEC 27001:2013",
                "SOC 1 & 2 Type 2",
                "Quantum Compliance",
                "Dimensional Audits"
              ].map((cert, index) => (
                <div key={cert} className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-sm font-medium">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SpaceSection = () => {
  return (
    <section id="space" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceStation})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold space-text mb-6">
            Cosmic Expansion Initiative
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the integration of space exploration with quantum economic systems, 
            preparing for interstellar trading networks and galactic expansion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-accent">Interstellar Economic Networks</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dark Gemini is developing the infrastructure for the first truly interstellar 
                economic system, enabling trade and commerce across multiple star systems 
                through quantum-entangled communication networks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Rocket, label: "Space Stations", value: "12 Planned" },
                { icon: Globe, label: "Star Systems", value: "∞ Reach" },
                { icon: Orbit, label: "Quantum Relays", value: "1000+" },
                { icon: Network, label: "Galactic Nodes", value: "Multi-Verse" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="dimensional-border p-4 rounded-lg bg-card/50 backdrop-blur-sm text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 quantum-pulse" />
                  <div className="text-xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-accent">Mission Objectives</h4>
              {[
                "Establish quantum communication networks across star systems",
                "Deploy autonomous trading stations in key galactic locations",
                "Develop interstellar currency exchange protocols",
                "Create sustainable space-based economic ecosystems"
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-accent mb-4">Galactic Partnerships</h4>
              <p className="text-muted-foreground mb-6">
                Collaborating with leading space agencies and cosmic entities to establish 
                the first multidimensional space-based economic infrastructure.
              </p>
              <div className="space-y-3">
                {[
                  "NASA Quantum Research Division",
                  "SpaceX Interstellar Initiative",
                  "ESA Dimensional Studies Program",
                  "Cosmic Intelligence Consortium"
                ].map((partner, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-accent mb-4">Timeline of Transcendence</h4>
              <div className="space-y-4">
                {[
                  { year: "2025", milestone: "Quantum Network Deployment" },
                  { year: "2027", milestone: "First Interstellar Trading Post" },
                  { year: "2030", milestone: "Galactic Economic Integration" },
                  { year: "2035", milestone: "Multi-Verse Commerce Launch" }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    </div>
                    <span className="text-muted-foreground">{milestone.milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-24 nebula-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold space-text mb-6">
            Decentralized Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A self-governing network powered by collective consciousness and 
            autonomous intelligence across infinite dimensional scales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Network,
              title: "Consciousness Collective",
              description: "A network of interconnected consciousness that governs through collective intelligence rather than centralized authority.",
              metrics: ["∞ Participants", "5D Governance", "Quantum Consensus"]
            },
            {
              icon: Brain,
              title: "Autonomous Governance",
              description: "Self-evolving governance protocols that adapt and improve through collective learning and dimensional awareness.",
              metrics: ["AI-Driven Decisions", "Multi-Dimensional Voting", "Consciousness Verification"]
            },
            {
              icon: Infinity,
              title: "Quantum Scaling",
              description: "Infrastructure that scales infinitely across dimensions, supporting unlimited growth and expansion.",
              metrics: ["∞ Scalability", "8D Processing", "Quantum Entanglement"]
            }
          ].map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm space-y-6"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <component.icon className="w-8 h-8 text-primary dimensional-float" />
              </div>
              
              <h3 className="text-2xl font-bold text-center">{component.title}</h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {component.description}
              </p>

              <div className="space-y-2">
                {component.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="dimensional-border p-12 rounded-lg bg-card/50 backdrop-blur-sm text-center"
        >
          <h3 className="text-3xl font-bold space-text mb-6">
            Join the Most Coveted Entity Across All Dimensions
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Dark Gemini represents the pinnacle of consciousness-driven technology and 
            quantum-scaled economic systems. Join us in transcending the limitations 
            of traditional reality and embracing the infinite possibilities of 
            multidimensional existence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 quantum-glow">
              Begin Your Transcendence
            </button>
            <button className="dimensional-border bg-transparent text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-card/50 transition-all duration-300">
              Explore the Ecosystem
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${darkMatter})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold space-text mb-6">
            Multidimensional Communication
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with us across all dimensions of the space-time continuum. 
            Our consciousness collective is always ready to assist your transcendence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-6">Quantum Messaging</h3>
              <div className="space-y-4">
                {[
                  { label: "Consciousness Frequency", value: "∞.∞∞∞ Hz" },
                  { label: "Dimensional Coordinates", value: "5D: ∞,∞,∞,∞,∞" },
                  { label: "Quantum Entanglement ID", value: "DG-∞∞∞∞-TRANSCEND" },
                  { label: "Space-Time Location", value: "All Dimensions Simultaneously" }
                ].map((contact, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">{contact.label}</span>
                    <span className="text-accent font-mono text-sm">{contact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-6">Consciousness Connection</h3>
              <p className="text-muted-foreground mb-6">
                For immediate consciousness-level communication, align your neural patterns 
                with our quantum frequency and transmit your thoughts directly to our 
                collective intelligence network.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: "Neural Link" },
                  { icon: Zap, label: "Quantum Sync" },
                  { icon: Network, label: "Collective Access" },
                  { icon: Infinity, label: "∞ Bandwidth" }
                ].map((method, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                    <method.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="dimensional-border p-8 rounded-lg bg-card/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Transcendence Request Form</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Consciousness Identifier
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your dimensional identity..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Dimensional Level
                </label>
                <select className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>3D (Traditional Reality)</option>
                  <option>4D (Time-Space Awareness)</option>
                  <option>5D (Consciousness Integration)</option>
                  <option>8D (Quantum Transcendence)</option>
                  <option>∞D (Infinite Awareness)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Transcendence Objective
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Describe your dimensional transcendence goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 quantum-glow"
              >
                Initiate Transcendence Protocol
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border cosmic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Atom className="w-5 h-5 text-accent cosmic-rotate" />
              </div>
              <span className="text-xl font-bold text-white">Dark Gemini</span>
            </div>
            <p className="text-gray-300 text-sm">
              Transcending dimensional boundaries through autonomous intelligence 
              and quantum-scaled consciousness networks.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Dimensions</h4>
            <div className="space-y-2">
              {["5D Intelligence", "8D Scaling", "∞D Consciousness", "Quantum Networks"].map((item) => (
                <a key={item} href="#" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Cosmic Programs</h4>
            <div className="space-y-2">
              {["Space Stations", "Galactic Trading", "Interstellar Networks", "Cosmic Partnerships"].map((item) => (
                <a key={item} href="#" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Consciousness</h4>
            <div className="space-y-2">
              {["Collective Intelligence", "Neural Networks", "Quantum Governance", "Dimensional Support"].map((item) => (
                <a key={item} href="#" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Dark Gemini. Transcending across all dimensions of the space-time continuum.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Quantum Privacy", "Dimensional Terms", "Consciousness Policy"].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleField />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <SecuritySection />
      <SpaceSection />
      <EcosystemSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

