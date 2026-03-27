export default function Projects() {
  const projects = [
    {
      index: '01',
      title: 'ClickerGCP',
      description: 'Production-grade distributed system on Google Cloud Platform featuring real-time WebSocket updates, asynchronous message processing via Pub/Sub, and scalable NoSQL persistence with Firestore. Infrastructure provisioned with Terraform and deployed on Cloud Run.',
      tech: 'Go · GCP · Pub/Sub · Firestore · WebSockets · Cloud Run · Terraform',
      url: 'https://github.com/carlos959358/ClickerGCP',
    },
    {
      index: '02',
      title: 'aibrainbites.com',
      description: 'Self-hosted platform with fully automated CI/CD pipelines, reverse proxy via Nginx, and containerised services managed with Docker. Built and maintained end-to-end — from infrastructure provisioning to production deployment.',
      tech: 'Docker · Nginx · GitHub Actions',
      url: 'https://aibrainbites.com',
    },
    {
      index: '03',
      title: 'EDEM × GFT Hackathon',
      description: 'Hackathon project developed in collaboration with GFT during the EDEM Master programme. Built under time constraints as part of a team, covering end-to-end solution design and implementation.',
      tech: 'TypeScript',
      url: 'https://github.com/carlos959358/EDEM-GFT-Hackaton',
    },
    {
      index: '04',
      title: 'Event-Driven Game Engine — GCP Pub/Sub',
      description: 'Python producer that streams real-time game events to Google Cloud Pub/Sub. Demonstrates event-driven architecture with auto-topic creation, GCP authentication, and interactive game controls.',
      tech: 'Python · GCP · Pub/Sub',
      url: 'https://github.com/carlos959358/hackaton-nttdata',
    },
    {
      index: '05',
      title: 'AWS ECR + App Runner Deployment',
      description: 'End-to-end containerisation and cloud deployment lab using Amazon ECR and AWS App Runner. Covers Docker image builds, registry management, and serverless container deployment on AWS.',
      tech: 'Docker · AWS ECR · AWS App Runner',
      url: 'https://github.com/carlos959358/aws_deployment',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-grid">
        <div className="section-label">Projects</div>
        <div className="section-content">
          <div className="projects-list">
            {projects.map((project) => {
              const Tag = project.url ? 'a' : 'div';
              const linkProps = project.url
                ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Tag key={project.index} className="project-card" {...linkProps}>
                  <div className="project-content">
                    <div className="project-index">{project.index}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">{project.tech}</div>
                  </div>
                  <div className="project-arrow">↗</div>
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
