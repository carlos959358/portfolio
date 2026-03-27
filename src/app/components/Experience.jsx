export default function Experience() {
  const jobs = [
    {
      role: 'Backend Developer',
      company: 'Turbo Energy',
      period: '2022 – 2025',
      highlights: [
        'Designed and maintained REST APIs for a real-time energy monitoring platform serving ~5,500 devices and ~3,000 users across international markets.',
        'Built backend APIs for international electricity contract management systems, handling complex business rules and regulatory requirements.',
        'Implemented cloud-oriented infrastructure using Docker in both local and production environments on GCP.',
        'Established observability pipelines with Grafana, enabling proactive incident detection and a zero-downtime deployment mindset.',
        'Drove real-time data ingestion at scale using PHP and Python.',
      ],
    },
    {
      role: 'Backend Developer',
      company: 'GFT',
      period: '2022',
      highlights: [
        'Developed REST APIs using Java within an enterprise-level financial backend system.',
        'Participated in Agile ceremonies and contributed to structured code review processes.',
        'Collaborated with cross-functional teams on large-scale, multi-stakeholder backend services.',
      ],
    },
    {
      role: 'Backend Developer — Internship',
      company: 'Innovatrium',
      period: '2020 – 2022',
      highlights: [
        'Developed and maintained CRM features using PHP and MySQL.',
        'Gained hands-on experience across the full development lifecycle, from requirements to deployment.',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="section-grid">
        <div className="section-label">Experience</div>
        <div className="section-content">
          <div className="experience-list">
            {jobs.map((job) => (
              <div key={job.company + job.period} className="experience-item">
                <div className="experience-header">
                  <div className="experience-meta">
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-company">{job.company}</p>
                  </div>
                  <span className="experience-period">{job.period}</span>
                </div>
                <ul className="experience-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
