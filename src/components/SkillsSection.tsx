import { motion } from 'framer-motion';
import { Code2, Brain, Database, Wrench, Globe, Cpu } from 'lucide-react';

const skills = [
  {
    category: "AI & ML",
    icon: Brain,
    items: ["Python", "Vosk (Offline Speech)", "Gradio", "Hugging Face", "NLP", "ML Basics", "Data Analytics"],
    color: "from-primary to-accent"
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    color: "from-accent to-yellow-glow"
  },
  {
    category: "Web Development",
    icon: Globe,
    items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    color: "from-secondary to-primary"
  },
  {
    category: "Libraries",
    icon: Cpu,
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    color: "from-primary to-secondary"
  },
  {
    category: "Database & Tools",
    icon: Database,
    items: ["SQL", "MongoDB", "Git", "VS Code"],
    color: "from-accent to-primary"
  },
  {
    category: "Hardware/IoT",
    icon: Wrench,
    items: ["ArduPilot", "Drone Flight Control", "Serial Communication", "QGroundControl"],
    color: "from-secondary to-accent"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">TECHNICAL</span> ARSENAL
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group project-card p-6"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                {skill.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm font-mono bg-muted/50 rounded-lg text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
