import SectionHeading from './SectionHeading';

function AboutSection() {
  return (
    <section className="content-card" id="about">
      <SectionHeading
        label="Discover My Journey"
        eyebrow="About Me."
        title="A full-stack builder with infrastructure depth."
        intro="I bring together frontend craftsmanship, backend problem-solving, and enterprise operations experience to create practical digital products."
      />
      <div className="about-grid">
        <div className="about-copy" data-reveal="about-copy">
          <p>
            Certified MERN stack professional with hands-on experience in
            React.js, Node.js, MongoDB, and RESTful API development. My
            background in enterprise infrastructure shaped a strong approach to
            reliability, automation, and secure system design.
          </p>
          <p>
            I enjoy translating complex requirements into clean user
            experiences and well-structured backend systems. That blend of
            product building and infrastructure awareness helps me create
            solutions that are both practical and production-minded.
          </p>
          <a
            className="text-link interactive-link"
            href="/YUVAN_JEYAN_G_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="about-profile-shell" data-reveal="about-panel">
          <div className="about-portrait">
            <div className="portrait-frame">
              <img
                className="about-portrait-image"
                src="/YJ_AI.png"
                alt="Yuvan Jeyan G portrait"
              />
            </div>
          </div>
          {/* <div className="about-profile-card">
            {aboutProfile.map((item, index) => (
              <div
                className="about-profile-row"
                key={item.label}
                data-reveal="card"
                style={{ '--delay': `${0.08 + index * 0.06}s` }}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
