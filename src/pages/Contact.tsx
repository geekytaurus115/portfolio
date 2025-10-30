import { motion } from 'framer-motion';
import './contact.css';

export default function Contact() {

  return (
    <div className="contact-page">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Let's connect! Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </motion.div>

      <motion.div
        className="contact-content-centered"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Contact Information */}
        <div className="contact-info-card">
          <div className="info-section">
            <h3 className="info-section-title">Contact Details</h3>
            
            <div className="info-item">
              <span className="info-icon">📧</span>
              <p className="info-text">
                <a href="mailto:mps.ofc.3@gmail.com" className="info-link">
                  mps.ofc.3@gmail.com
                </a>
              </p>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <p className="info-text">West Bengal, India</p>
            </div>
          </div>

          <div className="info-section">
            <h3 className="info-section-title">Social Links</h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/mamata-shee/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/geekytaurus115"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/msgeekytaurus"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="info-section">
            <h3 className="info-section-title">Availability</h3>
            <div className="info-item">
              <span className="info-icon">🟢</span>
              <p className="info-text">Available for freelance projects</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
