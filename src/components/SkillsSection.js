import { skillGroups } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function SkillBadge({ name, accent, glyph, iconSrc }) {
  return (
    <div className="skill-badge interactive-lift" style={{ '--accent': accent }}>
      <span className="skill-icon">
        {iconSrc ? (
          <img className="skill-logo" src={iconSrc} alt={name} loading="lazy" />
        ) : (
          <span className="skill-glyph">{glyph}</span>
        )}
      </span>
      <span className="skill-name">{name}</span>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="content-card" id="skills">
      <SectionHeading
        label="Portfolio"
        eyebrow="Skills & Technologies"
        title="Tools I use to build secure, scalable applications."
      />
      <p className="skills-intro" data-reveal="section-copy">
        A practical toolkit built around modern product development, API
        design, infrastructure reliability, and deployment workflows.
      </p>
      <div className="skills-layout">
        {skillGroups.map((group, index) => (
          <article
            className="skill-group interactive-card"
            key={group.title}
            data-reveal="card"
            style={{ '--delay': `${index * 0.08}s` }}
          >
            <div className="skill-group-head">
              <h3>{group.title}</h3>
              <span>{group.items.length} skills</span>
            </div>
            <div className="skill-list">
              {group.items.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
