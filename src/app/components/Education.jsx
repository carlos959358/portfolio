export default function Education() {
  const education = [
    {
      degree: 'Data & Cloud Master',
      institution: 'EDEM',
      location: 'Valencia',
      period: '2025 – 2026',
      highlights: [
        'Cloud-native architectures and services (Google Cloud Platform)',
        'Data processing and analytics fundamentals',
        'Deployment and scalability concepts in cloud environments',
        'CI/CD and modern cloud workflows',
      ],
      current: true,
    },
    {
      degree: 'Cybersecurity Specialization',
      institution: 'CIPFP',
      location: 'Valencia',
      period: '2024 – 2025',
      highlights: [
        'Secure system and application design',
        'Risk analysis and data protection principles',
      ],
      current: false,
    },
    {
      degree: 'Web Development Specialization',
      institution: 'CIPFP',
      location: 'Valencia',
      period: '2020 – 2022',
      highlights: [
        'Frontend: HTML, JavaScript',
        'Backend: PHP, MySQL',
        'API development and database integration',
        'Practical web deployment and CI/CD experience',
      ],
      current: false,
    },
  ];

  return (
    <section id="education" className="section">
      <div className="section-grid">
        <div className="section-label">Education</div>
        <div className="section-content">
          <div className="education-list">
            {education.map((item) => (
              <div key={item.degree} className="education-item">
                <div className="education-header">
                  <div className="education-meta">
                    <h3 className="education-degree">
                      {item.degree}
                      {item.current && <span className="education-badge">Current</span>}
                    </h3>
                    <p className="education-institution">{item.institution} · {item.location}</p>
                  </div>
                  <span className="education-period">{item.period}</span>
                </div>
                <ul className="education-highlights">
                  {item.highlights.map((h) => (
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
