export default function Skills() {
  const skills = {
    backend: ['PHP', 'Python', 'Java', 'REST APIs', 'MySQL', 'OOP'],
    data: ['BigQuery', 'Pub/Sub', 'Dataflow', 'Cloud Storage', 'Terraform', 'Real-time ingestion'],
    cloud: ['GCP', 'Docker', 'CI/CD', 'Nginx', 'Cloud Run', 'AWS'],
    platform: ['Git', 'GitHub Actions', 'Grafana', 'Linux', 'Agile/Scrum', 'Cybersecurity'],
  };

  return (
    <section id="skills" className="section">
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="skill-category-title">Backend</h3>
          <div className="skill-tags">
            {skills.backend.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">Data Engineering</h3>
          <div className="skill-tags">
            {skills.data.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">Cloud & Infra</h3>
          <div className="skill-tags">
            {skills.cloud.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">Platform</h3>
          <div className="skill-tags">
            {skills.platform.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
