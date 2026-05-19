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
            {project.techStack ? (
              <div className="project-meta">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-stack-item">
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
            <ul className="detail-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.frontendRepo ? (
                <a
                  className="project-link-item"
                  href={project.frontendRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Repo
                </a>
              ) : null}
              {project.backendRepo ? (
                <a
                  className="project-link-item"
                  href={project.backendRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Repo
                </a>
              ) : null}
              {project.frontendDeployedUrl ? (
                <a
                  className="project-link-item"
                  href={project.frontendDeployedUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Live
                </a>
              ) : null}
              {project.backendDeployedUrl ? (
                <a
                  className="project-link-item"
                  href={project.backendDeployedUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Live
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
