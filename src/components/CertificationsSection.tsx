import { motion } from 'framer-motion';
import { Award, Trophy, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: "Smart India Hackathon 2023",
    issuer: "Government of India",
    type: "Finalist",
    icon: Trophy
  },
  {
    title: "Developer of TechMatch IT Solutions",
    issuer: "TechMatch IT Solutions & Consultancy (techmatch.in)",
    type: "Founder",
    icon: Award
  }
];

const activities = [
  "XR Fusion Workshop - Developed AR application displaying 3D models by scanning images",
  "State-Level OpenAI Academy x NxtWave Buildathon - Team project qualifier",
  "Bharatiya Antariksh Hackathon 2025 - Certificate of Acknowledgement from ISRO"
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">CERTIFICATIONS</span> & ACTIVITIES
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Continuous learning and active participation in tech communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${cert.type === 'Finalist' ? 'warm-gradient' : 'bg-muted'}`}>
                    <cert.icon className={`w-5 h-5 ${cert.type === 'Finalist' ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    cert.type === 'Finalist' 
                      ? 'bg-primary/20 text-primary' 
                      : cert.type === 'Founder'
                      ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-accent'
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {cert.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent" />
              Notable Activities
            </h3>
            <div className="glass-card p-6">
              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="flex items-start gap-3 text-muted-foreground font-body"
                  >
                    <span className="w-2 h-2 rounded-full warm-gradient mt-2 shrink-0" />
                    {activity}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
