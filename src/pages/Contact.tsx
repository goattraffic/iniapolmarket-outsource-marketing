const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for a free consultation</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Talk About Your Marketing</h2>
              <p>
                Ready to grow your business with professional marketing services? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="info-card">
                <h3>Business Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>

              <div className="info-card">
                <h3>What to Expect</h3>
                <ul>
                  <li>✓ Free initial consultation</li>
                  <li>✓ Customized marketing strategy</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ No long-term contracts required</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" id="contactForm" method="POST">
                <input type="hidden" name="__hp" value="" />
                <input type="hidden" name="__ts" value="" />
                
                <div className="form-group">
                  <label htmlFor="first_name">First Name *</label>
                  <input 
                    type="text" 
                    id="first_name" 
                    name="first_name" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last_name">Last Name *</label>
                  <input 
                    type="text" 
                    id="last_name" 
                    name="last_name" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    className="form-input"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="consent" required />
                    <span>I agree to receive marketing communications *</span>
                  </label>
                </div>

                <div id="contact-form-message" className="form-message" role="alert" aria-live="polite"></div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          padding: var(--spacing-xl) 0;
          text-align: center;
        }

        .page-hero h1 {
          color: white;
          margin-bottom: var(--spacing-sm);
        }

        .page-hero p {
          font-size: var(--font-size-large);
          opacity: 0.95;
        }

        .contact-content {
          padding: var(--spacing-2xl) 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        .contact-info h2 {
          margin-bottom: var(--spacing-md);
        }

        .contact-info > p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-xl);
          line-height: 1.8;
        }

        .info-card {
          background: var(--color-background-alt);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          margin-bottom: var(--spacing-md);
        }

        .info-card h3 {
          margin-bottom: var(--spacing-md);
        }

        .info-card p {
          margin-bottom: var(--spacing-xs);
          color: var(--color-text-light);
        }

        .info-card ul {
          list-style: none;
        }

        .info-card li {
          padding: var(--spacing-xs) 0;
          color: var(--color-text-light);
        }

        .contact-form-wrapper {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .contact-form .form-group {
          margin-bottom: var(--spacing-md);
        }

        .contact-form label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .form-input {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          transition: var(--transition);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 124, 0, 0.1);
        }

        textarea.form-input {
          resize: vertical;
        }

        .checkbox-label {
          display: flex;
          align-items: start;
          gap: var(--spacing-xs);
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          margin-top: 4px;
        }

        .btn-submit {
          width: 100%;
          padding: 16px;
          font-size: var(--font-size-large);
        }

        .form-message {
          padding: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
          border-radius: var(--border-radius);
          display: none;
        }

        .form-message.success {
          display: block;
          background: rgba(76, 175, 80, 0.1);
          color: var(--color-success);
          border: 1px solid var(--color-success);
        }

        .form-message.error {
          display: block;
          background: rgba(244, 67, 54, 0.1);
          color: var(--color-error);
          border: 1px solid var(--color-error);
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          const form = document.getElementById('contactForm');
          if (form) {
            let formStartTime = null;
            
            form.addEventListener('focusin', function(e) {
              if (!formStartTime) {
                formStartTime = Date.now();
              }
            }, { once: true });

            form.addEventListener('submit', async function(e) {
              e.preventDefault();
              
              const messageEl = document.getElementById('contact-form-message');
              const submitBtn = form.querySelector('.btn-submit');
              
              // Check honeypot
              if (form.__hp.value) {
                window.location.hash = '#/thank-you';
                return;
              }

              // Validate consent
              if (!form.consent.checked) {
                messageEl.textContent = 'Please agree to receive communications';
                messageEl.className = 'form-message error';
                return;
              }

              submitBtn.disabled = true;
              submitBtn.textContent = 'Sending...';
              messageEl.style.display = 'none';

              const formData = new FormData(form);
              formData.set('__ts', Date.now().toString());
              
              const tracking = JSON.parse(sessionStorage.getItem('trackingData') || '{}');
              Object.keys(tracking).forEach(key => {
                formData.append(key, tracking[key] || '');
              });

              if (formStartTime) {
                formData.append('fill_time', Math.round((Date.now() - formStartTime) / 1000).toString());
              }

              try {
                const response = await fetch('/api/lead.php', {
                  method: 'POST',
                  headers: {
                    'X-Requested-With': 'fetch'
                  },
                  body: formData
                });

                const result = await response.json();

                if (result.ok) {
                  messageEl.textContent = 'Thank you! Your message has been sent successfully.';
                  messageEl.className = 'form-message success';
                  setTimeout(() => {
                    window.location.hash = '#/thank-you';
                  }, 1500);
                } else {
                  messageEl.textContent = result.error || 'An error occurred. Please try again.';
                  messageEl.className = 'form-message error';
                  submitBtn.disabled = false;
                  submitBtn.textContent = 'Send Message';
                }
              } catch (error) {
                messageEl.textContent = 'Network error. Please check your connection and try again.';
                messageEl.className = 'form-message error';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
              }
            });
          }
        })();
      `}} />
    </div>
  );
};

export default Contact;
