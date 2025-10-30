import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';
import './footer.css';

export default function Footer() {
  return (
    <footer className="outer-container">
      {/* Main Columns */}
      <div className="main-columns">
        {/* Column 1: Logo & Quote */}
        <div className="column column-1">
          <img src={logoImage} alt="Geekytaurus Logo" className="footer-logo" />
          <p className="footer-quote">
            Code isn't just what I write - it's how I think, build, and solve real world problems.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mamata-shee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/geekytaurus115" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/msgeekytaurus" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Empty Space */}
        <div className="column column-2"></div>

        {/* Column 3: Quick Links */}
        <div className="column column-3">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-links">
            <Link to="/journey">&gt; Know Me Better</Link>
            <Link to="/projects">&gt; My Creations</Link>
            <Link to="/services">&gt; My Help Kit</Link>
            <Link to="/contact">&gt; Slide Into My Inbox</Link>
          </div>
        </div>

        {/* Column 4: Geeky Snippet */}
        <div className="column column-4">
          <h3 className="footer-heading">Geeky Snippet</h3>
          <pre 
            className="code-snippet"
            dangerouslySetInnerHTML={{
              __html: `<span class="code-keyword">val</span> life = mapOf(
  <span class="code-string">"code"</span> to <span class="code-boolean">true</span>,
  <span class="code-string">"coffee"</span> to <span class="code-string">"strong"</span>,
  <span class="code-string">"sleep"</span> to <span class="code-error">"optional"</span>
)`
            }}
          />
        </div>
      </div>

      {/* Bottom Row with Centered Email */}
      <div className="footer-bottom">
        <div className="bottom-email">geekytaurus@2025</div>
      </div>
    </footer>
  );
}
