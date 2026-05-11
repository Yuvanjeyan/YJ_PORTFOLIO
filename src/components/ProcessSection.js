import { processSteps } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ProcessSection() {
  return (
    <section className="content-card" id="process">
      <SectionHeading
        label="How It Works"
        eyebrow="My Development Process."
        title="A clean path from idea to launch."
        intro="I combine structured execution with practical engineering decisions so products stay usable, scalable, and reliable."
      />
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article
            className="process-card interactive-card"
            key={step.title}
            data-reveal="card"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <span className="process-index">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
