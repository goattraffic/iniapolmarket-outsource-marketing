import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.hash === `#${path}`;
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('orderFormAnchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">Iniapolmarket</span>
          </Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contacts" 
              className={isActive('/contacts') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="#orderFormAnchor" 
              className="btn btn-primary"
              onClick={scrollToForm}
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>

      <style>{`
        .main-header {
          background: var(--color-background);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: var(--spacing-sm) 0;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .logo-text {
          display: inline-block;
          transition: var(--transition);
        }

        .logo:hover .logo-text {
          transform: scale(1.05);
        }

        .mobile-menu-toggle {
          display: none;
          font-size: 28px;
          background: none;
          color: var(--color-text);
          padding: 8px;
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .main-nav a {
          color: var(--color-text);
          font-weight: 500;
          position: relative;
          padding: 8px 0;
        }

        .main-nav a:not(.btn):after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width 0.3s;
        }

        .main-nav a:not(.btn):hover:after,
        .main-nav a.active:not(.btn):after {
          width: 100%;
        }

        .main-nav .btn {
          padding: 10px 24px;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .main-nav {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--color-background);
            flex-direction: column;
            padding: var(--spacing-md);
            box-shadow: var(--shadow-md);
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.3s, opacity 0.3s;
            pointer-events: none;
          }

          .main-nav.mobile-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .main-nav a {
            width: 100%;
            text-align: center;
            padding: 12px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
