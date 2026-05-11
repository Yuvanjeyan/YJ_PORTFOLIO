import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
  return (
    <section className="content-card" id="projects">
      <SectionHeading
        label="Portfolio"
        eyebrow="Featured Work."
        title="Selected projects shaped by product thinking and backend structure."
        intro="A selection of work that highlights application architecture, secure authentication, payment flow integration, and operational problem-solving."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className="project-card interactive-card"
            key={project.title}
            data-reveal="card"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="project-preview">
              <div className="project-preview-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="project-preview-body">
                <strong>{project.preview}</strong>
                <p>{project.title}</p>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="detail-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {project.link ? (
              <a
                className="text-link interactive-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
