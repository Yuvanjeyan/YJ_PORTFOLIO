import { services } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ServicesSection() {
  return (
    <section className="content-card" id="services">
      <SectionHeading
        label="What I Do"
        eyebrow="Services"
        title="Built around product, backend, and infrastructure delivery."
        intro="Delivering end-to-end solutions from user interface development to API design, deployment, and operational reliability."
      />
      <div className="service-grid">
        {services.map((service, index) => (
          <article
            className="service-card interactive-card"
            key={service.title}
            data-reveal="card"
            style={{ '--delay': `${index * 0.08}s` }}
          >
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
