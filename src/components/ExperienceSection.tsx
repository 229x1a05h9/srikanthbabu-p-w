import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, ExternalLink, Rocket } from 'lucide-react';

const experiences = [
  {
    title: "Founder & Developer",
    company: "TechMatch IT Solutions & Consultancy",
    period: "2024 - Present",
    type: "startup",
    link: "https://github.com/LABBISRIKANTHBABU/TechMatch",
    highlights: [
      "Founded TechMatch.in - an IT consultancy and educational admission counseling platform",
      "Built SEO-optimized web solutions for students and businesses",
      "Developed digital solutions for career guidance and technical consulting",
      "Managing end-to-end project delivery and client relationships"
    ]
  },
  {
    title: "Full Stack Web Development Internship",
    company: "InturnsUp",
    period: "Jun 2024 - Aug 2024",
    type: "internship",
    highlights: [
      "Built a restaurant ordering web app with item browsing and basic order flow",
      "Developed a real-time weather app using external weather APIs",
      "Created a personal portfolio site and a functional stopwatch application"
    ]
  },
  {
    title: "Smart India Hackathon 2023 – Finalist",
    company: "Government of India Initiative",
    period: "Dec 2023",
    type: "achievement",
    highlights: [
      "Created a Tkinter GUI to identify modulation and FEC schemes",
      "Implemented logic for classifying BPSK, QPSK, and 16-QAM",
      "Designed an interactive interface for real-time results"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">EXPERIENCE</span> & ACHIEVEMENTS
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="project-card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`p-4 rounded-2xl ${exp.type === 'achievement' ? 'bg-accent/20' : exp.type === 'startup' ? 'bg-gradient-to-br from-primary to-accent' : 'warm-gradient'} shrink-0`}>
                  {exp.type === 'achievement' ? (
                    <Award className="w-8 h-8 text-accent" />
                  ) : exp.type === 'startup' ? (
                    <Rocket className="w-8 h-8 text-primary-foreground" />
                  ) : (
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
                        {exp.title}
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </h3>
                      <p className="text-primary font-body text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
