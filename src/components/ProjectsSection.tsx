import { motion } from 'framer-motion';
import { Github, ExternalLink, Plane, Building2, Globe, Cpu, Brain, Radio } from 'lucide-react';

const projects = [
  {
    title: "Voice-Controlled Drone",
    subtitle: "Simulation System",
    icon: Plane,
    tags: ["Python", "NLP", "ArduPilot", "QGroundControl"],
    description: "A hands-free drone navigation system integrating ArduPilot with the Vosk offline speech engine. Capable of processing natural language commands for autonomous takeoff, landing, and maneuvering.",
    highlights: [
      "Designed speech recognition for drone control",
      "Enabled voice commands for directional movement",
      "Optimized accuracy and responsiveness"
    ],
    github: "https://github.com/LABBISRIKANTHBABU/VoiceControlDrone",
    gradient: "from-primary via-accent to-secondary"
  },
  {
    title: "CityMind AI",
    subtitle: "Urban Analytics Platform",
    icon: Building2,
    tags: ["AI/ML", "Gradio", "Hugging Face", "Urban Planning"],
    description: "An intelligent assistant for urban analytics hosted on Hugging Face Spaces. Utilizing Gradio to provide AI-driven insights for smart city management and planning.",
    highlights: [
      "Built AI-powered urban insights engine",
      "Deployed interactive Gradio interface",
      "Real-time smart city analytics"
    ],
    github: "https://github.com/LABBISRIKANTHBABU/cityMind-AI",
    gradient: "from-accent via-primary to-yellow-glow"
  },
  {
    title: "AI Career Navigator",
    subtitle: "OpenAI Buildathon Project",
    icon: Brain,
    tags: ["OpenAI API", "n8n", "LLMs", "Automation"],
    description: "An AI-powered career assistant designed to streamline the job application process with resume optimization, interview simulation, and auto-apply workflows.",
    highlights: [
      "ATS-friendly resume generation",
      "LLM-powered mock interviews",
      "Automated job application workflow"
    ],
    gradient: "from-secondary via-primary to-accent"
  },
  {
    title: "FEC Scheme Identifier",
    subtitle: "Smart India Hackathon 2023",
    icon: Radio,
    tags: ["Python", "Signal Processing", "GUI", "ML"],
    description: "System to automatically identify Forward Error Correction schemes from unknown demodulated signals. Critical for signal intelligence and cognitive radio applications.",
    highlights: [
      "Blind signal analysis without prior knowledge",
      "GUI for visualizing signals and results",
      "Classification of error correction methods"
    ],
    github: "https://github.com/LABBISRIKANTHBABU/fec",
    gradient: "from-accent via-secondary to-primary"
  },
  {
    title: "Full-Stack Restaurant System",
    subtitle: "Web Application",
    icon: Globe,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    description: "Complete restaurant management system with user authentication, order processing, real-time reservations, and a responsive weather application with live API integration.",
    highlights: [
      "User authentication & order processing",
      "Real-time reservations system",
      "Weather app with dynamic city search"
    ],
    github: "https://github.com/LABBISRIKANTHBABU/Internship_Projects",
    gradient: "from-primary via-secondary to-accent"
  },
  {
    title: "TechMatch.in",
    subtitle: "Startup & IT Consultancy",
    icon: Cpu,
    tags: ["Startup", "SEO", "Digital Solutions"],
    description: "Founder of an IT consultancy and educational admission counseling platform. Focused on delivering SEO-optimized content and digital solutions for students and businesses.",
    highlights: [
      "Founded IT consultancy platform",
      "SEO-optimized digital solutions",
      "Educational admission counseling"
    ],
    link: "https://techmatch.in",
    gradient: "from-yellow-glow via-accent to-primary"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">FEATURED</span> PROJECTS
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Innovative solutions spanning AI, web development, and hardware integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group project-card p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-primary text-sm font-mono mb-3">
                {project.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-muted/50 rounded-md text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body text-sm mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mt-auto">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
