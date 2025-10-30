import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './services.css';

export default function Services() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services-page">
      <motion.div
        className="services-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Terminal Window */}
        <motion.div 
          className="terminal-window"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn-close"></span>
              <span className="btn-minimize"></span>
              <span className="btn-maximize"></span>
            </div>
            <div className="terminal-title">services.sh</div>
          </div>

          <div className="terminal-body">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">sudo run services</span>
              </div>

              <div className="output-section">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="output-line"
                >
                  <span className="success">✓</span> Building services module...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="output-line"
                >
                  <span className="success">✓</span> Compiling features...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="output-line loading"
                >
                  <span className="loader">⚡</span> Initializing Services{dots}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Status Message */}
        <motion.div
          className="status-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="status-icon">🚧</div>
          <h2 className="status-title">Under Development</h2>
          <p className="status-message">
            This page is currently under construction. We're working hard to bring you something amazing!
          </p>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </div>
          <p className="progress-text">65% Complete</p>
        </motion.div>

        {/* Features Coming Soon */}
        <motion.div
          className="features-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3 className="feature-title">Programming</h3>
            <p className="feature-status">Coming Soon</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Data Science</h3>
            <p className="feature-status">Coming Soon</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-title">GenAI</h3>
            <p className="feature-status">Coming Soon</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Jetpack Compose</h3>
            <p className="feature-status">Coming Soon</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

