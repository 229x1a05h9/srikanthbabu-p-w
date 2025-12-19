import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">LET'S</span> CONNECT
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              
              <a
                href="mailto:229x1a05h9@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-colors group"
              >
                <div className="p-3 rounded-xl warm-gradient group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <p className="text-foreground font-body">kanthbabusri@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917075841474"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-colors group"
              >
                <div className="p-3 rounded-xl warm-gradient group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Phone</p>
                  <p className="text-foreground font-body">+91 7075841474</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <div className="p-3 rounded-xl bg-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Location</p>
                  <p className="text-foreground font-body">Kurnool, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Connect Socially
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/kanth-babu-sri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-[#0077B5]/20 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-[#0077B5]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-body font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground font-mono">@kanthbabusri</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-[#0077B5] transition-colors" />
                </a>

                <a
                  href="https://github.com/LABBISRIKANTHBABU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-muted group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-body font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground font-mono">@LABBISRIKANTHBABU</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground font-mono text-sm">
            © 2025 Srikanth Babu Labbi. Built with passion and code.
          </p>
          <p className="text-primary font-mono text-xs mt-2">
            Developer of TechMatch.in | AI Solutions Architect
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
