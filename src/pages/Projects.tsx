import { motion } from 'framer-motion';
import { useState } from 'react';
import ragBasedAiAssistantImg from '../assets/images/rag_based_ai_assistant_img.png';
import mailBotImg from '../assets/images/mailbot_img.png';
import numberGuessingGameImg from '../assets/images/number_guessing_game_img.png';
import flaskWeatherAppImg from '../assets/images/python_flask_weather_app.png';
import omnifoodImg from '../assets/images/omnifood_img.png';
import spamSmsClassifierImg from '../assets/images/spam_sms_classifier.png';
import kmeansCustomerSegmentationImg from '../assets/images/kmeans_customer_segmentation.png';
import gridQuestQLearningImg from '../assets/images/gridquest_qlearning.png';
import ProjectModal from '../components/ProjectModal';
import './projects.css';

const projects = [
  { 
    title: 'RAG Based AI Assistant', 
    tech: 'Python, Ollama, Flask, Whisper, Pandas, NumPy, Joblib, PyTorch',
    image: ragBasedAiAssistantImg,
    description: 'A Retrieval-Augmented Generation (RAG) system that creates an intelligent Q&A assistant from your YouTube video collection. The system downloads videos, transcribes them, creates vector embeddings, and enables semantic search to answer questions about video content with precise timestamps.',
    github: 'https://github.com/geekytaurus115/rag-based-ai-assistant',
    category: 'Data Science'
  },
  { 
    title: 'SMS Spam Detection', 
    tech: 'Python, Pandas, Scikit-learn, LogisticRegression',
    image: spamSmsClassifierImg,
    description: 'A machine learning mini-project that classifies SMS messages as Spam or Ham (Not Spam). It uses the SMS Spam Collection Dataset and applies CountVectorizer to convert text into numerical features, followed by a Logistic Regression model to accurately detect unwanted spam messages.',
    github: 'https://github.com/geekytaurus115/practical-data-science/tree/main/supervised_learning/spam_sms_classifier',
    category: 'Data Science'
  },
  { 
    title: 'KMeans - Customer Segmentation', 
    tech: 'Python, Pandas, Scikit-learn, KMeans, Matplotlib, Joblib',
    image: kmeansCustomerSegmentationImg,
    description: 'This project demonstrates how to use unsupervised learning for customer segmentation, using the Mall Customers dataset.',
    github: 'https://github.com/geekytaurus115/practical-data-science/tree/main/unsupervised_learning/kmeans_customer_segmentation',
    category: 'Data Science'
  },
  { 
    title: 'GridQuest: Q-Learning Agent', 
    tech: 'Python, Flask, NumPy, Q-Learning, HTML, CSS',
    image: gridQuestQLearningImg,
    description: 'An agent learns to navigate a 5x5 grid world using Q-learning, aiming to reach a goal while maximizing rewards. The trained Q-table enables policy visualization and further testing.',
    github: 'https://github.com/geekytaurus115/practical-data-science/tree/main/reinforcement_learning/gridquest_qlearning_agent',
    category: 'Data Science'
  },
  { 
    title: 'MailBot', 
    tech: 'Python, SMTP, gspread, oauth2client, Google Sheets API, Google Drive API',
    image: mailBotImg,
    description: 'MailBot is a Python-based automation script that connects Google Sheets with your email service to send personalized emails directly from a spreadsheet. It is perfect for sending updates, newsletters, or notifications - all controlled from an easy-to-edit Google Sheet.',
    github: 'https://github.com/geekytaurus115/gen-ai-projects/tree/main/MailBot',
    category: 'Fullstack'
  },
  { 
    title: 'Flask Weather App', 
    tech: 'Python, Flask, SQLAlchemy, Bootstrap, requests, python-dotenv',
    image: flaskWeatherAppImg,
    description: 'This project is a simple weather dashboard that lets you look up real-time conditions for any city using the free OpenWeatherMap API. It stores recent searches in a SQLite database so you can quickly revisit previous lookups.',
    github: 'https://github.com/geekytaurus115/python-flask-django/tree/main/flask_weather_app',
    category: 'Fullstack'
  },
  { 
    title: 'Guess My Number Game', 
    tech: 'HTML, CSS, JavaScript',
    image: numberGuessingGameImg,
    description: 'A fun Number Guessing Game built using HTML, CSS, and JavaScript where the user tries to guess a randomly generated number. The game provides hints and if the guessed number is too high or too low. And tracks the player score based on correct guesses.',
    github: 'https://github.com/geekytaurus115/html-css-js-projects/tree/main/JS-Projects/Guess-My-Number-Game',
    category: 'Frontend'
  },
  { 
    title: 'Omnifood', 
    tech: 'HTML, CSS, JavaScript',
    image: omnifoodImg,
    description: 'This is a single page static food delivery responsive webpage using HTML, CSS and JavaScript.',
    github: 'https://github.com/geekytaurus115/Omnifood',
    category: 'Frontend'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-page-wrapper">
      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />

      <motion.h2
        className="projects-page-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      {/* Filter Tabs */}
      <motion.div 
        className="filter-tabs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {['All', 'Data Science', 'Fullstack', 'Frontend'].map((category) => (
          <button
            key={category}
            className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      <motion.div
        className="projects-page-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card-modern"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="project-card-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
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
      </motion.div>
    </div>
  );
}
