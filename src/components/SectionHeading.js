function SectionHeading({ eyebrow, title, intro, label }) {
  return (
    <div className="section-heading" data-reveal="section-heading">
      {label ? <span className="section-label">{label}</span> : null}
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <div className="section-intro">{intro}</div> : null}
    </div>
  );
}

export default SectionHeading;
