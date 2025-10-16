import { Link } from 'react-router-dom';
import { services } from '../data/services';
import heroImage from '../assets/hero-team.jpg';
import seoImage from '../assets/service-seo.jpg';
import contentImage from '../assets/service-content.jpg';
import socialImage from '../assets/service-social.jpg';

const Home = () => {
  const featuredServices = services.slice(0, 6);
  
  const serviceImages: Record<string, string> = {
    'seo-optimization': seoImage,
    'content-marketing': contentImage,
    'social-media-management': socialImage,
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('orderFormAnchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Your Outsourced Marketing Department</h1>
            <p className="hero-subtitle">
              Expert marketing services that help SMBs grow. From strategy to execution, 
              we're your dedicated team delivering results without the overhead.
            </p>
            <div className="hero-actions">
              <a href="#orderFormAnchor" className="btn btn-primary" onClick={scrollToForm}>
                Get Started Today
              </a>
              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in">
              <div className="stat-number">250+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Retention</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">50+</div>
              <div className="stat-label">Marketing Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive marketing solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div key={service.slug} className="service-card card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                {serviceImages[service.slug] && (
                  <img src={serviceImages[service.slug]} alt={service.title} className="service-image" />
                )}
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <div className="service-price">{service.price}</div>
                <Link to={`/services/${service.slug}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>In-House vs Outsourcing</h2>
            <p>See why businesses choose to outsource their marketing</p>
          </div>
          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="comparison-cell"></div>
              <div className="comparison-cell">In-House Team</div>
              <div className="comparison-cell highlight">Iniapolmarket</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Monthly Cost</div>
              <div className="comparison-cell">$8,000 - $15,000+</div>
              <div className="comparison-cell highlight">From $700/month</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Team Size</div>
              <div className="comparison-cell">1-3 people</div>
              <div className="comparison-cell highlight">50+ specialists</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Expertise Areas</div>
              <div className="comparison-cell">Limited</div>
              <div className="comparison-cell highlight">Full spectrum</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Tools & Software</div>
              <div className="comparison-cell">Extra cost</div>
              <div className="comparison-cell highlight">Included</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Flexibility</div>
              <div className="comparison-cell">Fixed overhead</div>
              <div className="comparison-cell highlight">Scale up/down</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Real results from real businesses</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Iniapolmarket transformed our digital presence. Within 6 months, our organic traffic increased by 180% and lead quality improved dramatically."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <div className="author-name">James Davidson</div>
                  <div className="author-title">CEO, TechStart Solutions</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "The best decision we made was outsourcing our marketing. We get enterprise-level expertise at a fraction of the cost of building an in-house team."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div>
                  <div className="author-name">Sarah Martinez</div>
                  <div className="author-title">Marketing Director, GrowthCo</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Professional, responsive, and results-driven. Our ROI from paid advertising improved by 240% in just 3 months."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RK</div>
                <div>
                  <div className="author-name">Robert Kim</div>
                  <div className="author-title">Founder, EcomPro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="orderFormAnchor">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Grow Your Business?</h2>
            <p>Get in touch with our team for a free consultation</p>
          </div>
          <form className="contact-form" id="leadForm" method="POST">
            <input type="hidden" name="__hp" value="" />
            <input type="hidden" name="__ts" value="" />
            <div className="form-row">
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
            </div>
            <div className="form-row">
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
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" name="consent" required />
                <span>I agree to receive marketing communications and have read the <Link to="/privacy-policy">Privacy Policy</Link></span>
              </label>
            </div>
            <div id="form-message" className="form-message" role="alert" aria-live="polite"></div>
            <button type="submit" className="btn btn-primary btn-submit">
              Send Request
            </button>
          </form>
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center;
          color: white;
          margin-top: calc(var(--spacing-sm) * -1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(245, 124, 0, 0.9), rgba(26, 26, 26, 0.8));
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          padding: var(--spacing-xl) 0;
        }

        .hero-content h1 {
          font-size: var(--font-size-h1);
          margin-bottom: var(--spacing-md);
          color: white;
        }

        .hero-subtitle {
          font-size: var(--font-size-large);
          margin-bottom: var(--spacing-lg);
          opacity: 0.95;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .hero-actions .btn-outline {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border-color: white;
        }

        .hero-actions .btn-outline:hover {
          background: white;
          color: var(--color-text);
        }

        .stats-section {
          padding: var(--spacing-xl) 0;
          background: var(--color-background-alt);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: var(--font-size-large);
          color: var(--color-text-light);
        }

        .services-section,
        .comparison-section,
        .testimonials-section,
        .contact-form-section {
          padding: var(--spacing-2xl) 0;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--spacing-xl);
        }

        .section-header h2 {
          margin-bottom: var(--spacing-sm);
        }

        .section-header p {
          font-size: var(--font-size-large);
          color: var(--color-text-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .service-card {
          text-align: center;
        }

        .service-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: var(--border-radius);
          margin-bottom: var(--spacing-md);
        }

        .service-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .service-card p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-md);
        }

        .service-price {
          font-size: var(--font-size-h4);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .section-cta {
          text-align: center;
        }

        .comparison-table {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid var(--color-border);
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .comparison-header {
          background: var(--color-background-alt);
          font-weight: 700;
        }

        .comparison-cell {
          padding: var(--spacing-md);
          border-right: 1px solid var(--color-border);
        }

        .comparison-cell:last-child {
          border-right: none;
        }

        .comparison-cell.highlight {
          background: rgba(245, 124, 0, 0.05);
          color: var(--color-primary);
          font-weight: 600;
        }

        .testimonials-section {
          background: var(--color-background-alt);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .testimonial-card {
          padding: var(--spacing-lg);
        }

        .testimonial-rating {
          color: var(--color-primary);
          font-size: 20px;
          margin-bottom: var(--spacing-sm);
        }

        .testimonial-text {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-md);
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .author-name {
          font-weight: 600;
          margin-bottom: 4px;
        }

        .author-title {
          font-size: var(--font-size-small);
          color: var(--color-text-light);
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          margin-bottom: var(--spacing-md);
        }

        .form-group label {
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

        @media (max-width: 768px) {
          .hero-section {
            min-height: 500px;
          }

          .form-row,
          .comparison-row {
            grid-template-columns: 1fr;
          }

          .comparison-cell {
            text-align: center;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          // Capture UTM parameters and other tracking data
          const params = new URLSearchParams(window.location.search);
          const trackingData = {
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_term: params.get('utm_term') || '',
            utm_content: params.get('utm_content') || '',
            gclid: params.get('gclid') || '',
            fbclid: params.get('fbclid') || '',
            referrer: document.referrer,
            path: location.pathname + location.hash
          };
          sessionStorage.setItem('trackingData', JSON.stringify(trackingData));

          // Form submission handler
          const form = document.getElementById('leadForm');
          if (form) {
            let formStartTime = null;
            
            form.addEventListener('focusin', function(e) {
              if (!formStartTime && (e.target.name === 'first_name' || e.target.name === 'last_name' || e.target.name === 'email' || e.target.name === 'phone')) {
                formStartTime = Date.now();
              }
            }, { once: true });

            form.addEventListener('submit', async function(e) {
              e.preventDefault();
              
              const messageEl = document.getElementById('form-message');
              const submitBtn = form.querySelector('.btn-submit');
              
              // Check honeypot
              if (form.__hp.value) {
                // Silent success for bots
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
              
              // Add tracking data
              const tracking = JSON.parse(sessionStorage.getItem('trackingData') || '{}');
              Object.keys(tracking).forEach(key => {
                formData.append(key, tracking[key] || '');
              });

              // Add fill time
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
                  messageEl.textContent = 'Thank you! Your request has been sent successfully.';
                  messageEl.className = 'form-message success';
                  setTimeout(() => {
                    window.location.hash = '#/thank-you';
                  }, 1500);
                } else {
                  messageEl.textContent = result.error || 'An error occurred. Please try again.';
                  messageEl.className = 'form-message error';
                  submitBtn.disabled = false;
                  submitBtn.textContent = 'Send Request';
                }
              } catch (error) {
                messageEl.textContent = 'Network error. Please check your connection and try again.';
                messageEl.className = 'form-message error';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Request';
              }
            });
          }
        })();
      `}} />
    </div>
  );
};

export default Home;
