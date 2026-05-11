import { certifications } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function CertificationsContactSection() {
  return (
    <section className="content-card certifications-card">
      <div className="certifications-column" data-reveal="column">
        <SectionHeading
          label="Continuous Learning"
          eyebrow="Training & Credentials."
          title="Certifications that support my development journey."
        />
        <div className="cert-list">
          {certifications.map((item, index) => (
            <article
              className="cert-card interactive-card"
              key={item.name}
              data-reveal="card"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <h3>{item.name}</h3>
              <p>{item.org}</p>
              {item.detail ? <span>{item.detail}</span> : null}
              {item.link ? (
                <a
                  className="text-link interactive-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View credential
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsContactSection;
