import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (consentData: typeof preferences) => {
    const tcString = generateTCString(consentData);
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...consentData,
      tcString,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    saveConsent(onlyNecessary);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const generateTCString = (prefs: typeof preferences) => {
    // Simplified TCF v2.2 string generation
    const purposeConsents = [
      prefs.necessary ? 1 : 0,
      prefs.functional ? 1 : 0,
      prefs.analytics ? 1 : 0,
      prefs.marketing ? 1 : 0
    ].join('');
    return `TCFV2_${btoa(purposeConsents)}_${Date.now()}`;
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>We value your privacy</h3>
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="cookie-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>

        {!showPreferences ? (
          <div className="cookie-actions">
            <button className="btn btn-outline" onClick={rejectAll}>
              Reject All
            </button>
            <button className="btn btn-secondary" onClick={() => setShowPreferences(true)}>
              Customize
            </button>
            <button className="btn btn-primary" onClick={acceptAll}>
              Accept All
            </button>
          </div>
        ) : (
          <div className="cookie-preferences">
            <div className="preference-item">
              <label>
                <input 
                  type="checkbox" 
                  checked={preferences.necessary} 
                  disabled 
                />
                <div>
                  <strong>Necessary Cookies</strong>
                  <p>Required for the website to function properly</p>
                </div>
              </label>
            </div>
            <div className="preference-item">
              <label>
                <input 
                  type="checkbox" 
                  checked={preferences.functional}
                  onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                />
                <div>
                  <strong>Functional Cookies</strong>
                  <p>Enable personalized features and functionality</p>
                </div>
              </label>
            </div>
            <div className="preference-item">
              <label>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                />
                <div>
                  <strong>Analytics Cookies</strong>
                  <p>Help us understand how visitors use our website</p>
                </div>
              </label>
            </div>
            <div className="preference-item">
              <label>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                />
                <div>
                  <strong>Marketing Cookies</strong>
                  <p>Used to deliver relevant advertisements</p>
                </div>
              </label>
            </div>
            <div className="cookie-actions">
              <button className="btn btn-outline" onClick={() => setShowPreferences(false)}>
                Back
              </button>
              <button className="btn btn-primary" onClick={savePreferences}>
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          padding: var(--spacing-md);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .cookie-content {
          max-width: var(--container-max-width);
          margin: 0 auto;
        }

        .cookie-text h3 {
          margin-bottom: var(--spacing-xs);
          color: var(--color-text);
        }

        .cookie-text p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-sm);
        }

        .cookie-links {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .cookie-links a {
          font-size: var(--font-size-small);
          text-decoration: underline;
        }

        .cookie-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .cookie-actions .btn {
          padding: 10px 20px;
        }

        .btn-secondary {
          background: var(--color-background-alt);
          color: var(--color-text);
        }

        .btn-secondary:hover {
          background: var(--color-border);
        }

        .cookie-preferences {
          margin-top: var(--spacing-md);
        }

        .preference-item {
          margin-bottom: var(--spacing-sm);
          padding: var(--spacing-sm);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
        }

        .preference-item label {
          display: flex;
          gap: var(--spacing-sm);
          cursor: pointer;
          align-items: start;
        }

        .preference-item input[type="checkbox"] {
          margin-top: 4px;
          cursor: pointer;
        }

        .preference-item input[type="checkbox"]:disabled {
          cursor: not-allowed;
        }

        .preference-item strong {
          display: block;
          margin-bottom: 4px;
        }

        .preference-item p {
          font-size: var(--font-size-small);
          color: var(--color-text-light);
          margin: 0;
        }

        @media (max-width: 768px) {
          .cookie-banner {
            padding: var(--spacing-sm);
          }

          .cookie-actions {
            flex-direction: column;
          }

          .cookie-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
