import { motion } from 'framer-motion';
import { Linkedin, ThumbsUp, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const posts = [
  {
    title: "AI Career Navigator",
    event: "OpenAI Buildathon / NxtWave",
    content: "Built an AI-powered career assistant that streamlines job applications with resume optimization, interview simulation, and auto-apply workflows using OpenAI API and n8n automation.",
    likes: 124,
    comments: 18,
    shares: 32
  },
  {
    title: "Smart India Hackathon 2023 Finalist",
    event: "SIH 2023 - Team Innovation Alteers",
    content: "Developed a system to identify and extract Forward Error Correction (FEC) schemes from unknown signals. Critical for signal intelligence and cognitive radio applications.",
    likes: 89,
    comments: 12,
    shares: 24
  },
  {
    title: "Bharatiya Antariksh Hackathon 2025",
    event: "ISRO Initiative",
    content: "Received Certificate of Acknowledgement from ISRO for idea submission in the Bharatiya Antariksh Hackathon 2025. Exploring the intersection of space technology and AI.",
    likes: 156,
    comments: 27,
    shares: 45
  }
];

const LinkedInSection = () => {
  return (
    <section id="linkedin" className="relative py-24 px-4">
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">THOUGHT</span> LEADERSHIP
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Highlights from my professional journey on LinkedIn
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="project-card p-6"
            >
              <div className="flex items-start gap-4">
                {/* LinkedIn Icon */}
                <div className="p-3 rounded-xl bg-[#0077B5]/20 shrink-0">
                  <Linkedin className="w-6 h-6 text-[#0077B5]" />
                </div>

                <div className="flex-1">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {post.title}
                      </h3>
                      <p className="text-primary text-sm font-mono">
                        {post.event}
                      </p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-muted-foreground font-body mb-4">
                    {post.content}
                  </p>

                  {/* Engagement Stats */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4 text-primary" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-accent" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-secondary" />
                      {post.shares}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://linkedin.com/in/srikanthbabuintern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 warm-gradient text-primary-foreground font-display font-semibold rounded-xl hover:scale-105 transition-transform duration-300 glow-orange"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInSection;
