import { achievements, education } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function AchievementsEducationSection() {
  return (
    <section className="content-card split-card" id="education">
      <div data-reveal="column">
        <SectionHeading
          label="Operational Impact"
          eyebrow="Key Achievements."
          title="Results delivered through automation and reliability."
        />
        <ul className="detail-list">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div data-reveal="column">
        <SectionHeading
          label="Academic Journey"
          eyebrow="Education & Certifications."
          title="A foundation in computer science and continuous learning."
        />
        <div className="education-card interactive-card" data-reveal="card">
          <h3>{education.degree}</h3>
          <p>{education.college}</p>
          <span>{education.period}</span>
          <strong>{education.cgpa}</strong>
        </div>
      </div>
    </section>
  );
}

export default AchievementsEducationSection;
