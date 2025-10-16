import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('orderFormAnchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#/?scroll=form';
    }
  };

  return (
    <div className="service-detail-page">
      <nav className="breadcrumbs">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/services">Services</Link>
          <span className="separator">/</span>
          <span>{service.title}</span>
        </div>
      </nav>

      <section className="service-hero">
        <div className="container">
          <h1>{service.title}</h1>
          <p className="service-tagline">{service.short}</p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <div 
                className="service-description" 
                dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              />
              
              <div className="cta-box">
                <h3>Ready to Get Started?</h3>
                <p>Contact us today for a free consultation and let's discuss how we can help your business grow.</p>
                <a href="#orderFormAnchor" className="btn btn-primary" onClick={scrollToForm}>
                  Request a Consultation
                </a>
              </div>
            </div>

            <aside className="content-sidebar">
              <div className="sidebar-card">
                <h4>Service Overview</h4>
                <div className="service-price-box">
                  <div className="price-label">Starting at</div>
                  <div className="price-value">{service.price}</div>
                </div>
                
                <h5>Key Features</h5>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                
                <a href="#orderFormAnchor" className="btn btn-primary btn-block" onClick={scrollToForm}>
                  Get This Service
                </a>
              </div>

              <div className="sidebar-card">
                <h4>Other Services</h4>
                <ul className="related-services">
                  {services
                    .filter(s => s.slug !== slug)
                    .slice(0, 4)
                    .map(s => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`}>{s.title}</Link>
                      </li>
                    ))}
                </ul>
                <Link to="/services" className="view-all-link">
                  View All Services →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .breadcrumbs {
          background: var(--color-background-alt);
          padding: var(--spacing-sm) 0;
          font-size: var(--font-size-small);
        }

        .breadcrumbs .container {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .separator {
          color: var(--color-text-light);
        }

        .service-hero {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          padding: var(--spacing-xl) 0;
        }

        .service-hero h1 {
          color: white;
          margin-bottom: var(--spacing-sm);
        }

        .service-tagline {
          font-size: var(--font-size-large);
          opacity: 0.95;
        }

        .service-content {
          padding: var(--spacing-2xl) 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-xl);
        }

        .content-main {
          min-width: 0;
        }

        .service-description {
          line-height: 1.8;
        }

        .service-description h3 {
          margin-top: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .service-description p {
          margin-bottom: var(--spacing-md);
          color: var(--color-text-light);
        }

        .cta-box {
          background: var(--color-background-alt);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          text-align: center;
          margin-top: var(--spacing-xl);
        }

        .cta-box h3 {
          margin-bottom: var(--spacing-sm);
        }

        .cta-box p {
          margin-bottom: var(--spacing-md);
        }

        .sidebar-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-sm);
          margin-bottom: var(--spacing-md);
        }

        .sidebar-card h4 {
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-sm);
          border-bottom: 2px solid var(--color-primary);
        }

        .sidebar-card h5 {
          margin-top: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
        }

        .service-price-box {
          text-align: center;
          padding: var(--spacing-md);
          background: var(--color-background-alt);
          border-radius: var(--border-radius);
          margin-bottom: var(--spacing-md);
        }

        .price-label {
          font-size: var(--font-size-small);
          color: var(--color-text-light);
          margin-bottom: var(--spacing-xs);
        }

        .price-value {
          font-size: var(--font-size-h3);
          font-weight: 700;
          color: var(--color-primary);
        }

        .features-list {
          list-style: none;
          margin-bottom: var(--spacing-md);
        }

        .features-list li {
          padding: var(--spacing-xs) 0;
          color: var(--color-text-light);
        }

        .btn-block {
          display: block;
          width: 100%;
        }

        .related-services {
          list-style: none;
        }

        .related-services li {
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--color-border);
        }

        .related-services li:last-child {
          border-bottom: none;
        }

        .view-all-link {
          display: block;
          margin-top: var(--spacing-md);
          text-align: center;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .content-sidebar {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
