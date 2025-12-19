import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    institution: "G. Pulla Reddy Engineering College (Autonomous), Kurnool",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    period: "Nov 2022 – Jun 2026",
    grade: "CGPA: 7.16 (Till 6th Sem)",
    current: true
  },
  {
    institution: "Narayana Junior College, Kurnool",
    degree: "Intermediate in MPC (Maths, Physics, Chemistry)",
    period: "Jul 2020 - Mar 2022",
    grade: "Percentage: 56%",
    current: false
  },
  {
    institution: "Ridge School, Kurnool",
    degree: "Secondary School Certificate (CBSE)",
    period: "Year 2020",
    grade: "Percentage: 64%",
    current: false
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">EDUCATION</span> JOURNEY
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Building a strong foundation in Computer Science and Engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`timeline-dot ${edu.current ? 'animate-pulse-glow' : ''}`} />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  {edu.current && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Current
                    </span>
                  )}
                  
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg warm-gradient">
                      <GraduationCap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-primary font-body text-base mb-2">
                    {edu.degree}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground font-mono">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="text-accent font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
