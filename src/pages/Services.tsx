import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive marketing solutions to grow your business</p>
        </div>
      </section>

      <section className="services-listing">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card card">
                <h3>{service.title}</h3>
                <p className="service-short">{service.short}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="service-price">{service.price}</div>
                <Link to={`/services/${service.slug}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
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

        .services-listing {
          padding: var(--spacing-2xl) 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        .service-card {
          display: flex;
          flex-direction: column;
        }

        .service-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .service-short {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-md);
        }

        .service-features {
          list-style: none;
          margin-bottom: var(--spacing-md);
          flex-grow: 1;
        }

        .service-features li {
          padding: var(--spacing-xs) 0;
          color: var(--color-text-light);
        }

        .service-price {
          font-size: var(--font-size-h4);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
