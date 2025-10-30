import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ragBasedAiAssistantImg from '../assets/images/rag_based_ai_assistant_img.png';
import mailBotImg from '../assets/images/mailbot_img.png';
import numberGuessingGameImg from '../assets/images/number_guessing_game_img.png';
import ProjectModal from '../components/ProjectModal';
import './home.css';

const roles = [
  'Programmer',
  'Data Scientist',
  'AI Engineer',
  'GenAI Developer',
  'Android Developer',
  'Full-time Learner'
];

const projects = [
  { 
    title: 'RAG Based AI Assistant', 
    tech: 'Python, Ollama, Flask, Whisper, Pandas, NumPy, Joblib, PyTorch',
    image: ragBasedAiAssistantImg,
    description: 'A Retrieval-Augmented Generation (RAG) system that creates an intelligent Q&A assistant from your YouTube video collection. The system downloads videos, transcribes them, creates vector embeddings, and enables semantic search to answer questions about video content with precise timestamps.',
    github: 'https://github.com/geekytaurus115/rag-based-ai-assistant'
  },
  { 
    title: 'MailBot', 
    tech: 'Python, SMTP, gspread, oauth2client, Google Sheets API, Google Drive API',
    image: mailBotImg,
    description: 'MailBot is a Python-based automation script that connects Google Sheets with your email service to send personalized emails directly from a spreadsheet. It’s perfect for sending updates, newsletters, or notifications - all controlled from an easy-to-edit Google Sheet.',
    github: 'https://github.com/geekytaurus115/gen-ai-projects/tree/main/MailBot'
  },
  { 
    title: 'Guess My Number Game', 
    tech: 'HTML, CSS, JavaScript',
    image: numberGuessingGameImg,
    description: 'A fun Number Guessing Game built using HTML, CSS, and JavaScript where the user tries to guess a randomly generated number. The game provides hints and if the guessed number is too high or too low. And tracks the player’s score based on correct guesses.',
    github: 'https://github.com/geekytaurus115/html-css-js-projects/tree/main/JS-Projects/Guess-My-Number-Game'
  },
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <div>
      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />

      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-text-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="greeting-hi">Hi,</h2>
            
            <div className="greeting-im-container">
              <div className="greeting-im">I'm</div>
              <h1 className="greeting-name">Mamata Shee</h1>
            </div>

            <div className="typewriter-wrapper">
              <span className="typewriter-text">{displayedText}</span>
              <span className="typewriter-cursor">|</span>
            </div>

            <div className="hero-buttons">
              <Link to="/projects" className="btn-code-action">
                Code in Action
              </Link>
              <Link to="/contact" className="btn-lets-talk">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-wrapper">
        <motion.div
          className="about-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column - Terminal Cards */}
          <div className="left-side">
            <div className="info-cards">
              <motion.div
                className="info-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3><span>👨‍💻</span> whoami</h3>
                <p>fulltime_learner</p>
              </motion.div>

              <motion.div
                className="info-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3><span>🧠</span> skills</h3>
                <p>Programming | Data Science | GenAI | Jetpack Compose </p>
              </motion.div>

              <motion.div
                className="info-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3><span>🚀</span> mission</h3>
                <p>Learn something every day!</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - About Text */}
          <motion.div
            className="right-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Learn.Code.Secure. — MS</h2>
            <p>
            I’m a <span className="highlight">Passionate Programmer</span> who thrives at the intersection of <span className="highlight">Data Science</span>, <span className="highlight">AI</span>, <span className="highlight">ML</span>, and <span className="highlight">GenAI</span> - fascinated by how machines can learn, think, and create. I enjoy experimenting with intelligent systems that turn data into innovation and imagination into automation. My curiosity doesn’t stop there - I also love developing elegant Android apps with <span className="highlight">Jetpack Compose</span> and have a deep interest in <span className="highlight">Cybersecurity</span>, understanding how to build and protect the technology we rely on every day.
            </p>
            <div className="more-link">
              <Link to="/journey">+ More About Me</Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="projects-wrapper">
        <motion.div
          className="projects-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-heading">My Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-card-content">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-divider"></div>
                    <p className="project-tech">{project.tech}</p>
                  </div>
                  <div className="project-overlay">
                    <button 
                      className="view-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="view-more-link">
            <Link to="/projects">+ View More</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
