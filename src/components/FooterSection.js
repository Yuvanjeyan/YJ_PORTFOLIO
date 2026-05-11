import { contactDetails } from '../data/portfolioData';

function FooterSection() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-lead">
        <span>Get In Touch</span>
        <h2>Yuvan Jeyan G.</h2>
        <p>
          Engineering modern and scalable web solutions with a strong focus on
          security, structure, and real-world usability.
        </p>
      </div>

      <div className="footer-main-grid">
        <div className="footer-contact-panel">
          <h3>Contact</h3>
          <div className="contact-list" data-reveal="column">
            {contactDetails.map((item, index) => (
              <a
                key={item.title}
                className="footer-contact-item"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                data-reveal="card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <span>{item.title}</span>
                <strong>{item.label}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Ready to start?</p>
        <a href="#contact">Let&apos;s Talk</a>
      </div>
    </footer>
  );
}

export default FooterSection;
