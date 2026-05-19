import { useState } from 'react';
import { contactLinks } from '../data/portfolioData';

function FooterSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please complete all fields before sending your message.');
      return;
    }

    setStatusMessage('Thank you! Your message is ready to be sent. I will respond soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
        <div className="footer-copy-panel">
          <h3>Contact</h3>
          <p>
            Want to build a secure MERN app or discuss a full-stack role? Send a quick message below, or use the small contact links underneath.
          </p>
          <div className="footer-contact-row">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="footer-contact-chip"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form-panel interactive-card footer-form-panel" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project or opportunity"
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button className="primary-btn contact-submit" type="submit">
            Send Message
          </button>

          {statusMessage ? <p className="contact-status">{statusMessage}</p> : null}
        </form>
      </div>

      {/* <div className="footer-social-row">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            className="social-chip"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            {link.short}
          </a>
        ))}
      </div> */}
    </footer>
  );
}

export default FooterSection;
