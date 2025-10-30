import { motion } from 'framer-motion';
import './about.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <div className="journey-page">
      <motion.div
        className="journey-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="journey-title">My Journey</h1>
        <p className="journey-subtitle">
          Started with <code style={{ color: '#38bdf8' }}>&lt;Hello World/&gt;</code>, still chasing the next line of innovation.
        </p>
      </motion.div>

      <motion.div
        className="journey-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Terminal-style whoami section */}
        <motion.div className="terminal-card" variants={fadeInUp}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn-close"></span>
              <span className="btn-minimize"></span>
              <span className="btn-maximize"></span>
            </div>
            <div className="terminal-title">terminal</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">whoami</span>
            </div>
            <div className="terminal-output">
              <p className="output-text">fulltime_learner</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Terminal */}
        <motion.div className="terminal-card" variants={fadeInUp}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn-close"></span>
              <span className="btn-minimize"></span>
              <span className="btn-maximize"></span>
            </div>
            <div className="terminal-title">skills.sh</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">cat skills.txt</span>
            </div>
            <div className="terminal-output">
              <p className="output-text">Programming | Data Science | GenAI | Jetpack Compose</p>
            </div>
          </div>
        </motion.div>

        {/* Mission Terminal */}
        <motion.div className="terminal-card" variants={fadeInUp}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn-close"></span>
              <span className="btn-minimize"></span>
              <span className="btn-maximize"></span>
            </div>
            <div className="terminal-title">mission.sh</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">echo $MISSION</span>
            </div>
            <div className="terminal-output">
              <p className="output-text">Learn something every day!</p>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div className="about-card" variants={fadeInUp}>
          <h2 className="section-heading">About Me</h2>
          <div className="about-content">
          <p>
            I'm a <span className="highlight">Passionate Programmer</span> who thrives at the intersection of <span className="highlight">Data Science</span>, <span className="highlight">AI</span>, <span className="highlight">ML</span>, and <span className="highlight">GenAI</span> - fascinated by how machines can learn, think, and create. I enjoy experimenting with intelligent systems that turn data into innovation and imagination into automation. My curiosity doesn't stop there - I also love developing elegant Android apps with <span className="highlight">Jetpack Compose</span> and have a deep interest in <span className="highlight">Cybersecurity</span>, understanding how to build and protect the technology we rely on every day.
            </p>
          </div>
        </motion.div>

        {/* Two Column Cards - Interests and Languages */}
        <motion.div className="two-column-section" variants={fadeInUp}>
          {/* Interests Card */}
          <div className="info-card">
            <div className="info-header">
              <span className="info-icon">🎯</span>
              <h3 className="info-title">Interests</h3>
            </div>
            <div className="info-list">
              <div className="info-item">
                <span className="item-icon">🧩</span>
                <span className="item-text">Sudoku</span>
              </div>
              <div className="info-item">
                <span className="item-icon">♟️</span>
                <span className="item-text">Chess</span>
              </div>
              <div className="info-item">
                <span className="item-icon">🎲</span>
                <span className="item-text">Rubik's Cubes</span>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="info-card">
            <div className="info-header">
              <span className="info-icon">🗣️</span>
              <h3 className="info-title">Human Languages</h3>
            </div>
            <div className="info-list">
              <div className="info-item">
                <span className="item-text">Bengali</span>
              </div>
              <div className="info-item">
                <span className="item-text">English</span>
              </div>
              <div className="info-item">
                <span className="item-text">Hindi</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div className="experience-section" variants={fadeInUp}>
          <div className="section-header">
            <span className="section-icon">💼</span>
            <h2 className="section-heading">Experience</h2>
          </div>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h3 className="experience-title">Freelancer</h3>
                <p className="experience-period">2024 - Present</p>
                <p className="experience-description">
                  Freelance developer specializing in Python automation, web scraping, chatbot development, Generative AI, and Android app development with Jetpack Compose. Focused on building intelligent, efficient, and user-centric solutions that streamline workflows and elevate digital experiences.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h3 className="experience-title">AI Engineer & Operations Manager</h3>
                <p className="experience-period">2024 - Present</p>
                <p className="experience-description">
                  Building AI-powered platforms that combine Generative AI, automation, and NLP to deliver smarter, more personalized user experiences. Focused on developing intelligent systems that enhance efficiency, decision-making, and engagement across digital solutions.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <h3 className="experience-title">Associate Software Engineer</h3>
                <p className="experience-period">2022 - 2024</p>
                <p className="experience-description">
                  Worked on building AI-driven and cloud-based solutions, including intelligent document processing, transport management, and renewable energy forecasting systems. Focused on automating workflows, optimizing backend architectures, and enabling data-driven decision-making using AWS, Python, Golang, and NLP technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div className="certifications-section" variants={fadeInUp}>
          <div className="section-header">
            <span className="section-icon">🏆</span>
            <h2 className="section-heading">Certifications</h2>
          </div>

          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">🤖</div>
              <div className="cert-content">
                <h3 className="cert-title">Ultimate Data Science</h3>
                <p className="cert-issuer">CWH</p>
                <p className="cert-date">2025</p>
              </div>
              <div className="cert-badge">Verified</div>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🖥️</div>
              <div className="cert-content">
                <h3 className="cert-title">Generative AI Fundamentals</h3>
                <p className="cert-issuer">Google Cloud Skills Boost,
                Databricks</p>
                <p className="cert-date">2023</p>
              </div>
              <div className="cert-badge">Verified</div>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🔐</div>
              <div className="cert-content">
                <h3 className="cert-title">Google Cybersecurity</h3>
                <p className="cert-issuer">Google</p>
                <p className="cert-date">2024</p>
              </div>
              <div className="cert-badge">Verified</div>
            </div>

            <div className="cert-card">
              <div className="cert-icon">📊</div>
              <div className="cert-content">
                <h3 className="cert-title">Databricks Certified Data
                Engineer Associate</h3>
                <p className="cert-issuer">Databricks</p>
                <p className="cert-date">2023</p>
              </div>
              <div className="cert-badge">Verified</div>
            </div>
          </div>

          <div className="see-more-container">
            <a 
              href="https://www.linkedin.com/in/mamata-shee/details/certifications/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="see-more-btn"
            >
              + See More
            </a>
          </div>
        </motion.div>
      </motion.div>

        {/* Education Section */}
        <motion.div className="education-section" variants={fadeInUp}>
          <div className="section-header">
            <span className="section-icon">🎓</span>
            <h2 className="section-heading">Education</h2>
          </div>
          
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <h3 className="education-title">Master of Computer Application (MCA)</h3>
                <span className="education-badge">2019 - 2022</span>
              </div>
              <p className="education-location">West Bengal, India</p>
              <p className="education-description">
                Focused on advanced programming, data structures, algorithms, and software engineering principles.
              </p>
            </div>

            <div className="education-card">
              <div className="education-header">
                <h3 className="education-title">B.Sc. (Hons) in Mathematics</h3>
                <span className="education-badge">2016 - 2019</span>
              </div>
              <p className="education-location">West Bengal, India</p>
              <p className="education-description">
                Strong foundation in mathematical concepts, analytical thinking, and problem-solving skills.
              </p>
            </div>
          </div>
        </motion.div>

    </div>
  );
}
