import { useState } from 'react';
import { contactLinks, socialLinks } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ContactSection() {
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
    <section className="content-card contact-card-section" id="contact">
      <SectionHeading
        label="Let's Connect"
        eyebrow="Contact & Collaboration"
        title="I’m available for full-stack roles, internships, and freelance MERN projects."
        intro="Use the form to send a note, or connect directly through email, GitHub, and LinkedIn."
      />

      <div className="contact-section-grid">
        <div className="contact-column">
          <p className="contact-section-text">
            I build full-stack applications with secure APIs, responsive UI, and deployment-ready workflows. Reach out to discuss product ideas, developer roles, or collaboration on real-world MERN projects.
          </p>

          <div className="contact-stack">
            {contactLinks.map((item) => (
              <article className="contact-card interactive-card" key={item.label}>
                <div className="contact-index">{item.label === 'LinkedIn' ? 'in' : item.label === 'GitHub' ? 'gh' : item.label === 'Email' ? '@' : '☎'}</div>
                <div className="contact-copy">
                  <span>{item.label}</span>
                  <p>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {item.href.replace(/^mailto:|^tel:/, '')}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="social-row">
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
          </div>
        </div>

        <form className="contact-form-panel interactive-card" onSubmit={handleSubmit}>
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
              rows="6"
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
    </section>
  );
}

export default ContactSection;
