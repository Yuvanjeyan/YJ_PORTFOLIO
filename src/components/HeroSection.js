import {
  contactLinks,
  heroContent,
  heroStats,
  navLinks,
} from '../data/portfolioData';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <nav className="topbar" data-reveal="nav">
        <div className="brand-block">
          <div className="brand-mark">YJ</div>
          <div className="brand-copy">
            <span>Portfolio</span>
            <strong>Yuvan Jeyan G</strong>
          </div>
        </div>
        <div className="topbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy hero-copy-centered">
          <p className="eyebrow" data-reveal="hero-copy">{heroContent.lead}</p>
          <h1>
            <span data-reveal="hero-copy">{heroContent.title[0]}</span>
            <span data-reveal="hero-copy">{heroContent.title[1]}</span>
          </h1>
          <p className="hero-summary" data-reveal="hero-copy">
            {heroContent.summary}
          </p>

          <div className="hero-actions" data-reveal="hero-copy">
            <a className="primary-btn interactive-lift" href={heroContent.primaryAction.href}>
              {heroContent.primaryAction.label}
            </a>
            <a className="secondary-btn interactive-lift" href={heroContent.secondaryAction.href}>
              {heroContent.secondaryAction.label}
            </a>
            <a
              className="ghost-btn interactive-link"
              href="/YUVAN_JEYAN_G_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="contact-strip" data-reveal="hero-copy">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="interactive-link"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-stats-grid">
        {heroStats.map((stat, index) => (
          <div
            className="stat-card"
            key={stat.label}
            data-reveal="card"
            style={{ '--delay': `${0.18 + index * 0.08}s` }}
          >
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
