import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Iniapolmarket</h4>
            <p>Your outsourced marketing department. We help SMBs grow through strategic, data-driven marketing.</p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/seo-optimization">SEO Optimization</Link></li>
              <li><Link to="/services/content-marketing">Content Marketing</Link></li>
              <li><Link to="/services/social-media-management">Social Media</Link></li>
              <li><Link to="/services/ppc-advertising">PPC Advertising</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/refunds">Refunds Policy</Link>
          </div>
          <p className="footer-copyright">
            © {currentYear} Iniapolmarket. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .main-footer {
          background: var(--color-text);
          color: white;
          padding: var(--spacing-xl) 0 var(--spacing-md);
          margin-top: var(--spacing-2xl);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .footer-col h4 {
          color: white;
          margin-bottom: var(--spacing-sm);
          font-size: var(--font-size-large);
        }

        .footer-col p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: var(--spacing-xs);
        }

        .footer-col a {
          color: rgba(255, 255, 255, 0.8);
          transition: var(--transition);
        }

        .footer-col a:hover {
          color: var(--color-primary);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: var(--spacing-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .footer-legal {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.7);
          font-size: var(--font-size-small);
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.7);
          font-size: var(--font-size-small);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
