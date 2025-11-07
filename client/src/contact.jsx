import { useState } from "react";
import "./styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    message: "" 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Captured Form Data:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", message: "" });
    }, 3000);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <a href="mailto:2000dev.p@gmail.com">2000dev.p@gmail.com</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <a href="tel:+16479019875">(647) 901-9875</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <p>Toronto, ON</p>
          </div>

          <div className="social-links-contact">
            <a href="https://github.com/devptl23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/devpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:2000dev.p@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="form-title">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName"
                name="fullName" 
                placeholder="Your Name" 
                value={formData.fullName}
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Your message here..." 
                rows="6"
                value={formData.message}
                onChange={handleChange} 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitted}>
              {isSubmitted ? (
                <>
                  <i className="fas fa-check"></i> Message Sent!
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>

            {isSubmitted && (
              <p className="success-message">
                Thank you! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Dev Patel. All rights reserved.</p>
      </footer>
    </section>
  );
}

