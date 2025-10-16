import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="thank-you-content">
          <div className="success-icon">✓</div>
          <h1>Thank You!</h1>
          <p className="success-message">
            Your information has been successfully submitted. Our team will contact you within 24 hours to discuss how we can help grow your business.
          </p>
          <div className="next-steps">
            <h2>What Happens Next?</h2>
            <ul>
              <li>Our marketing consultant will review your submission</li>
              <li>We'll reach out to schedule a free consultation</li>
              <li>We'll discuss your goals and create a customized strategy</li>
              <li>You'll receive a detailed proposal tailored to your needs</li>
            </ul>
          </div>
          <div className="action-buttons">
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .thank-you-page {
          min-height: 70vh;
          display: flex;
          align-items: center;
          padding: var(--spacing-2xl) 0;
        }

        .thank-you-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .success-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto var(--spacing-lg);
          background: var(--color-success);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          font-weight: 700;
        }

        .thank-you-content h1 {
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }

        .success-message {
          font-size: var(--font-size-large);
          color: var(--color-text-light);
          margin-bottom: var(--spacing-xl);
          line-height: 1.8;
        }

        .next-steps {
          background: var(--color-background-alt);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          margin-bottom: var(--spacing-xl);
          text-align: left;
        }

        .next-steps h2 {
          text-align: center;
          margin-bottom: var(--spacing-md);
        }

        .next-steps ul {
          list-style: none;
          max-width: 500px;
          margin: 0 auto;
        }

        .next-steps li {
          padding: var(--spacing-sm) 0 var(--spacing-sm) var(--spacing-lg);
          position: relative;
          color: var(--color-text-light);
        }

        .next-steps li:before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: 700;
        }

        .action-buttons {
          display: flex;
          gap: var(--spacing-sm);
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .action-buttons {
            flex-direction: column;
          }

          .action-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
