import { experience } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ExperienceSection() {
  return (
    <section className="content-card" id="experience">
      <SectionHeading
        label="Career Path"
        eyebrow="Professional Experience."
        title="Where I've delivered technical impact."
        intro="My background spans infrastructure operations, automation, compliance support, and application-focused engineering."
      />
      <div className="timeline-item interactive-card" data-reveal="card">
        <div className="timeline-meta">
          <h3>{experience.role}</h3>
          <span>{experience.period}</span>
        </div>
        <p className="timeline-company">{experience.company}</p>
        <ul className="detail-list">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
