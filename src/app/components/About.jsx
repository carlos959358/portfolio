export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-grid">
        <div className="section-label">About</div>
        <div className="section-content">
          <h2 className="about-heading">
            Backend engineer moving into <span className="italic">data engineering</span> — with production scars to prove it.
          </h2>
          <p className="about-text">
            5+ years building backend systems in production — most recently at Turbo Energy, where I designed
            REST APIs handling real-time monitoring for ~5,500 devices across international energy markets.
            I've worked hands-on with event-driven ingestion, observability pipelines, and zero-downtime deployments on GCP.
          </p>
          <p className="about-text">
            Currently completing a Data & Cloud Master at EDEM (Valencia), deepening my expertise in
            cloud-native data architectures, GCP data services, and scalable pipeline design. I'm actively
            bridging backend engineering with data engineering — building things like distributed systems
            on Pub/Sub, Firestore, and Cloud Run in my own time.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years in Production</div>
            </div>
            <div className="stat">
              <div className="stat-value">5,500</div>
              <div className="stat-label">Devices Monitored</div>
            </div>
            <div className="stat">
              <div className="stat-value">3,000</div>
              <div className="stat-label">Users Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
