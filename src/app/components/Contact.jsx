import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mdapkjlz");

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

      {state.succeeded ? (
        <div className="contact-success">
          Message sent — I'll get back to you soon.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor="name" className="contact-form-label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="contact-form-input"
                placeholder="Your name"
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="email" className="contact-form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="contact-form-input"
                placeholder="your@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="contact-form-error" />
            </div>
          </div>
          <div className="contact-form-field">
            <label htmlFor="message" className="contact-form-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="contact-form-input contact-form-textarea"
              placeholder="Tell me about your project or opportunity..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="contact-form-error" />
          </div>
          <button type="submit" disabled={state.submitting} className="contact-form-submit">
            {state.submitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      )}
    </section>
  );
}
