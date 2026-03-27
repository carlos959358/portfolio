export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <h2 className="contact-heading">
        Open to work. <span className="accent">Let's talk.</span>
      </h2>
      <a href="mailto:beltransanzcarlos@gmail.com" className="contact-email">
        beltransanzcarlos@gmail.com
      </a>
      <div className="contact-socials">
        <a 
          href="https://www.linkedin.com/in/carlos-beltran-sanz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-social-link"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/carlos959358" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-social-link"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
