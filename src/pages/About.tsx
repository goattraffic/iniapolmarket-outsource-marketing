const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Iniapolmarket</h1>
          <p>Your trusted partner for outsourced marketing excellence</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-section">
            <h2>Who We Are</h2>
            <p>
              Iniapolmarket is a full-service marketing agency specializing in providing outsourced marketing departments for small and medium-sized businesses. We understand that building an in-house marketing team is expensive, time-consuming, and often impractical for growing companies.
            </p>
            <p>
              That's why we've created a solution that gives you access to a complete marketing department without the overhead. Our team of 50+ marketing specialists brings expertise across every marketing discipline, from SEO and content marketing to paid advertising and marketing automation.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              We're on a mission to democratize enterprise-level marketing for businesses of all sizes. Every company deserves access to world-class marketing expertise, not just those with million-dollar budgets.
            </p>
            <p>
              By providing outsourced marketing services, we help SMBs compete effectively in their markets, grow their customer base, and build sustainable businesses. We measure our success by your success.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Results-Driven</h3>
              <p>We're obsessed with delivering measurable results that impact your bottom line.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We see ourselves as an extension of your team, invested in your long-term success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Data-Driven</h3>
              <p>Every decision is backed by data and analytics, not guesswork or trends.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Agility</h3>
              <p>We move fast, adapt quickly, and stay ahead of marketing trends and changes.</p>
            </div>
          </div>

          <div className="content-section">
            <h2>Why Choose Outsourced Marketing?</h2>
            <p>
              Building an in-house marketing team means hiring multiple specialists, providing benefits, buying expensive tools, and managing complex workflows. For most SMBs, this represents a significant investment with considerable risk.
            </p>
            <p>
              Outsourcing your marketing department gives you immediate access to experienced specialists, proven processes, and enterprise-grade tools—all at a fraction of the cost of building an in-house team. You get flexibility to scale up or down based on your needs, without the commitment of full-time employees.
            </p>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>How is outsourcing different from hiring an agency?</h3>
              <p>
                Traditional agencies often work with you on specific projects or campaigns. When you outsource your marketing department to us, we become your ongoing marketing team. We're involved in strategy, execution, and continuous optimization across all your marketing activities.
              </p>
            </div>

            <div className="faq-item">
              <h3>What size businesses do you work with?</h3>
              <p>
                We primarily serve small to medium-sized businesses with revenue between $1M and $50M. Our clients typically have 10-200 employees and are looking to grow without the overhead of a full in-house marketing team.
              </p>
            </div>

            <div className="faq-item">
              <h3>How quickly can we get started?</h3>
              <p>
                Most clients are up and running within 2-3 weeks. We start with a comprehensive discovery phase to understand your business, then move quickly into strategy development and execution.
              </p>
            </div>

            <div className="faq-item">
              <h3>What if we already have some marketing in place?</h3>
              <p>
                Perfect! We'll audit your existing marketing activities, identify what's working and what isn't, and build on your successes. We can complement your existing efforts or take over entirely—whatever makes sense for your business.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do you measure success?</h3>
              <p>
                We establish clear KPIs during our discovery phase based on your business goals. Common metrics include lead generation, conversion rates, customer acquisition cost, and ROI. We provide detailed monthly reports showing progress against these metrics.
              </p>
            </div>

            <div className="faq-item">
              <h3>What tools and platforms do you use?</h3>
              <p>
                We use industry-leading tools for analytics, SEO, content management, social media, email marketing, and more. All tool costs are included in our service fees—you don't need to purchase separate licenses or subscriptions.
              </p>
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

        .about-content {
          padding: var(--spacing-2xl) 0;
        }

        .content-section {
          max-width: 800px;
          margin: 0 auto var(--spacing-xl);
        }

        .content-section h2 {
          margin-bottom: var(--spacing-md);
        }

        .content-section p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-md);
          line-height: 1.8;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin: var(--spacing-xl) 0;
        }

        .value-card {
          text-align: center;
          padding: var(--spacing-lg);
          background: white;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: var(--spacing-md);
        }

        .value-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .value-card p {
          color: var(--color-text-light);
        }

        .faq-section {
          max-width: 800px;
          margin: var(--spacing-2xl) auto 0;
        }

        .faq-section h2 {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .faq-item {
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--color-border);
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-item h3 {
          color: var(--color-primary);
          margin-bottom: var(--spacing-sm);
        }

        .faq-item p {
          color: var(--color-text-light);
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
