import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import profilePic from '@/assets/profile-pic.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Name Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative mx-auto mb-8 w-40 h-40 md:w-52 md:h-52"
          >
            <div className="absolute inset-0 rounded-full warm-gradient animate-rotate-slow opacity-50 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img 
                  src={profilePic} 
                  alt="Srikanth Babu Labbi" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider"
          >
            <span className="gradient-text glow-text">SRIKANTH BABU</span>
            <br />
            <span className="text-foreground">LABBI</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            AI Solutions Architect| Full-Stack Developer | AI Enthusiast
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-body text-base md:text-lg text-muted-foreground/80 mb-10 max-w-3xl mx-auto"
          >
            Innovating at the intersection of Artificial Intelligence and software. 
            Designer and Developer of <span className="text-accent">TechMatch.in</span>. Passionate about building 
            smart cities, voice-controlled systems, and scalable web applications.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a
              href="https://www.linkedin.com/in/kanth-babu-sri"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/LABBISRIKANTHBABU"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a
              href="mailto:kanthbabusri@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">Email</span>
            </a>
            <a
              href="tel:+917075841474"
              className="group flex items-center gap-2 px-6 py-3 glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">+91 7075841474</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 warm-gradient text-primary-foreground font-display font-semibold rounded-xl hover:scale-105 transition-transform duration-300 glow-orange"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-card font-display font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border border-primary/30"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
