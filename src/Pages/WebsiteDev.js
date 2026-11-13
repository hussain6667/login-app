
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const orange = "rgb(214,110,30)";

// REUSABLE SCROLL ANIMATION
const AnimateSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.12, once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const itemAnimation = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const WebsiteDev = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", service: "", message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const services = [
    ["💻", "Custom Website Development", "Professional websites designed for your business."],
    ["📱", "Responsive Web Design", "Perfect layouts for mobile, tablet and desktop."],
    ["🛒", "E-Commerce Development", "Powerful online stores for your products."],
    ["⚛️", "React Development", "Modern and interactive React websites."],
    ["🔧", "Website Maintenance", "Updates, bug fixing and regular support."],
    ["🚀", "Website Optimization", "Fast loading and better website performance."]
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "React.js",
    "Bootstrap", "Node.js", "PHP", "MySQL"
  ];

  const reasons = [
    "Modern professional designs",
    "Mobile-friendly layouts",
    "Fast loading performance",
    "Clean and maintainable code",
    "Better user experience",
    "Reliable support and maintenance"
  ];

  const steps = [
    ["01", "Planning", "Understand your business goals and requirements."],
    ["02", "Design", "Create an attractive and user-friendly design."],
    ["03", "Development", "Convert designs into functional websites."],
    ["04", "Testing", "Test the website and fix errors."],
    ["05", "Launch", "Launch your website for your customers."]
  ];

  return (
    <div className="website-page">

      <style>{`
        * { box-sizing: border-box; }

        .website-page {
          --orange: rgb(214,110,30);
          --dark: #171b22;
          font-family: Arial, sans-serif;
          color: #212529;
          overflow: hidden;
        }

        .website-page section { padding: 90px 8%; }
        .web-container { max-width: 1200px; margin: auto; }

        .web-tag {
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .web-heading {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 45px;
        }

        .web-heading h2 {
          font-size: 36px;
          margin: 15px 0;
        }

        .web-heading p, .web-muted {
          color: #777;
          line-height: 1.8;
        }

        .web-btn {
          display: inline-block;
          padding: 15px 26px;
          background: var(--orange);
          color: white;
          border: 1px solid var(--orange);
          border-radius: 7px;
          text-decoration: none;
          font-weight: bold;
          transition: .3s ease;
        }

        .web-btn:hover {
          background: var(--dark);
          border-color: var(--dark);
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 12px 25px #0002;
        }

        /* HERO */
        .web-hero {
          min-height: 680px;
          display: flex;
          align-items: center;
          gap: 55px;
          background:
            radial-gradient(circle at 85% 20%, #d66e301c, transparent 30%),
            linear-gradient(120deg, #f8f9fa, #fff5ed);
          position: relative;
        }

        .web-hero-content, .web-hero-image { flex: 1; }

        .web-hero h1 {
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.15;
          margin: 22px 0;
          font-weight: 800;
        }

        .web-hero h1 span, .web-about h2 span,
        .web-why h2 span { color: var(--orange); }

        .web-hero-content > p {
          color: #777;
          line-height: 1.9;
          max-width: 550px;
        }

        .web-hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .web-outline {
          background: transparent;
          color: var(--dark);
        }

        .web-outline:hover { color: white; }

        .web-hero-image {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .web-code-card {
          width: 100%;
          max-width: 450px;
          padding: 32px;
          background: linear-gradient(145deg, #292f39, #141820);
          color: white;
          border: 1px solid #ffffff20;
          border-radius: 20px;
          box-shadow: 0 30px 70px #0003;
          animation: floatCard 4s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0) rotateY(-3deg); }
          50% { transform: translateY(-13px) rotateY(3deg); }
        }

        .web-dots { display: flex; gap: 8px; }
        .web-dots span {
          width: 12px; height: 12px;
          border-radius: 50%; background: #ff6258;
        }
        .web-dots span:nth-child(2) { background: #ffc044; }
        .web-dots span:nth-child(3) { background: #39c879; }

        .web-code-card h3 { margin: 25px 0; }
        .web-code-card p {
          font-family: monospace;
          color: #d6dce5;
          line-height: 1.6;
        }
        .web-code-card .orange { color: #ff9a43; }

        .web-status {
          padding: 13px;
          margin-top: 22px;
          border-radius: 7px;
          background: #ffffff12;
          color: #8cf0ae;
        }

        /* ABOUT */
        .web-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .web-about h2, .web-why h2 {
          font-size: 40px;
          line-height: 1.3;
          margin-top: 15px;
        }

        .web-about p { color: #777; line-height: 1.9; }

        /* SERVICES */
        .web-services, .web-process { background: #f7f8fa; }

        .web-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .web-service-card {
          padding: 30px;
          background: white;
          border: 1px solid #eee;
          border-radius: 14px;
          transition: .35s ease;
          position: relative;
          overflow: hidden;
        }

        .web-service-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 3px;
          background: var(--orange);
          transition: .35s;
        }

        .web-service-card:hover::before { width: 100%; }

        .web-service-card:hover {
          transform: translateY(-9px);
          border-color: #d66e3060;
          box-shadow: 0 18px 40px #00000012;
        }

        .web-service-icon {
          width: 62px; height: 62px;
          display: grid; place-items: center;
          background: #fff0e4;
          border-radius: 13px;
          font-size: 29px;
          margin-bottom: 22px;
          transition: .3s;
        }

        .web-service-card:hover .web-service-icon {
          transform: rotate(-8deg) scale(1.1);
        }

        .web-service-card h3 { font-size: 19px; }
        .web-service-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        .web-service-card a {
          display: inline-block;
          color: var(--orange);
          text-decoration: none;
          font-weight: bold;
          margin-top: 10px;
        }

        /* TECHNOLOGIES */
        .web-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .web-tech-card {
          padding: 25px 12px;
          text-align: center;
          border: 1px solid #eee;
          border-radius: 10px;
          font-weight: bold;
          transition: .3s;
        }

        .web-tech-card:hover {
          background: var(--dark);
          color: white;
          transform: translateY(-7px);
          border-color: var(--dark);
          box-shadow: 0 12px 25px #0002;
        }

        .web-tech-card span {
          color: var(--orange);
          margin-right: 8px;
        }

        /* WHY US */
        .web-why {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 55px;
          align-items: center;
          background: var(--dark);
          color: white;
        }

        .web-why-content > p {
          color: #c5c8ce;
          line-height: 1.8;
        }

        .web-reasons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .web-reason {
          display: flex;
          gap: 12px;
          color: #eee;
          line-height: 1.6;
          font-size: 14px;
        }

        .web-reason span {
          color: #ff9a43;
          font-size: 20px;
          font-weight: bold;
        }

        .web-why-box {
          padding: 45px 30px;
          text-align: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #e88740, #c35b19);
          box-shadow: 0 20px 50px #d66e3030;
          transition: .35s;
        }

        .web-why-box:hover { transform: translateY(-8px) scale(1.02); }
        .web-big-icon { font-size: 65px; }
        .web-why-box h3 { font-size: 25px; line-height: 1.5; }
        .web-why-box p { line-height: 1.8; }

        /* PROCESS */
        .web-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .web-process-card {
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 25px 18px;
          transition: .3s;
        }

        .web-process-card:hover {
          transform: translateY(-8px);
          border-color: var(--orange);
          box-shadow: 0 15px 30px #0001;
        }

        .web-step-number {
          color: var(--orange);
          font-size: 32px;
          font-weight: 900;
        }

        .web-process-card p {
          color: #777;
          line-height: 1.7;
          font-size: 14px;
        }

        /* CTA */
        .web-cta {
          text-align: center;
          color: white;
          background: linear-gradient(120deg, #d66e30, #a94b15);
          position: relative;
        }

        .web-cta h2 {
          font-size: clamp(28px, 4vw, 42px);
          margin: 20px 0;
        }

        .web-cta p {
          max-width: 620px;
          margin: 0 auto 25px;
          line-height: 1.8;
        }

        .web-cta .web-btn {
          background: var(--dark);
          border-color: var(--dark);
        }

        .web-cta .web-btn:hover {
          background: white;
          color: var(--dark);
        }

        /* CONTACT */
        .web-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
          background: #f8f9fa;
        }

        .web-contact-info h2 {
          font-size: 38px;
          line-height: 1.3;
          margin: 18px 0;
        }

        .web-contact-info > p {
          color: #777;
          line-height: 1.8;
        }

        .web-contact-detail {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 25px;
        }

        .web-contact-detail > span {
          width: 48px; height: 48px;
          display: grid; place-items: center;
          background: #fff0e4;
          color: var(--orange);
          border-radius: 50%;
          font-size: 21px;
        }

        .web-contact-detail p { color: #777; margin: 5px 0; }

        .web-contact-form {
          padding: 32px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 45px #00000010;
        }

        .web-contact-form h3 { font-size: 25px; margin-bottom: 22px; }

        .web-contact-form input,
        .web-contact-form select,
        .web-contact-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 16px;
          border: 1px solid #e1e1e1;
          border-radius: 7px;
          outline: none;
          font-family: inherit;
          transition: .25s;
        }

        .web-contact-form input:focus,
        .web-contact-form select:focus,
        .web-contact-form textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3018;
        }

        .web-contact-form textarea { resize: vertical; }

        .web-contact-form button {
          width: 100%;
          padding: 15px;
          background: var(--orange);
          color: white;
          border: none;
          border-radius: 7px;
          font-weight: bold;
          cursor: pointer;
          transition: .3s;
        }

        .web-contact-form button:hover {
          background: var(--dark);
          transform: translateY(-3px);
        }

        /* RESPONSIVE */
        @media(max-width: 950px) {
          .web-hero { flex-direction: column; text-align: center; }
          .web-hero-content > p { margin: auto; }
          .web-hero-buttons { justify-content: center; }
          .web-service-grid { grid-template-columns: repeat(2, 1fr); }
          .web-process-grid { grid-template-columns: repeat(3, 1fr); }
          .web-why { grid-template-columns: 1fr; }
        }

        @media(max-width: 600px) {
          .website-page section { padding: 60px 6%; }
          .web-about, .web-contact { grid-template-columns: 1fr; }
          .web-hero { min-height: auto; }
          .web-hero h1 { font-size: 36px; }
          .web-about h2, .web-why h2, .web-contact-info h2 { font-size: 30px; }
          .web-heading h2 { font-size: 29px; }
          .web-service-grid, .web-process-grid { grid-template-columns: 1fr; }
          .web-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .web-reasons { grid-template-columns: 1fr; }
          .web-contact-form { padding: 23px; }
        }

        @media(prefers-reduced-motion: reduce) {
          .web-code-card { animation: none; }
          .website-page *, .website-page *::before {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="web-hero">
        <AnimateSection className="web-hero-content">
          <span className="web-tag">WEBSITE DEVELOPMENT</span>
          <h1>We Build Modern <span>Websites For Your Business</span></h1>
          <p>
            We create beautiful, responsive and user-friendly websites
            that help businesses grow and succeed in the digital world.
          </p>
          <div className="web-hero-buttons">
            <a href="#web-services" className="web-btn">Explore Services →</a>
            <a href="#web-contact" className="web-btn web-outline">Get In Touch</a>
          </div>
        </AnimateSection>

        <AnimateSection className="web-hero-image">
          <div className="web-code-card">
            <div className="web-dots">
              <span /><span /><span />
            </div>
            <h3>Website Development</h3>
            <p className="orange">const website = {"{"}</p>
            <p>design: "Modern",</p>
            <p>responsive: true,</p>
            <p>performance: "Fast",</p>
            <p>quality: "Professional"</p>
            <p className="orange">{"}"}</p>
            <div className="web-status">● Website Ready</div>
          </div>
        </AnimateSection>
      </section>

      {/* ABOUT */}
      <section>
        <AnimateSection className="web-container web-about">
          <div>
            <span className="web-tag">ABOUT OUR SERVICE</span>
            <h2>We Create Websites That <span>Make A Difference</span></h2>
          </div>
          <div>
            <p className="web-muted">
              Website development is the process of creating and maintaining
              websites. It includes designing pages, writing code, adding
              functionality and making websites responsive.
            </p>
            <p className="web-muted">
              Our goal is to build websites that look professional,
              work smoothly and provide a great visitor experience.
            </p>
          </div>
        </AnimateSection>
      </section>

      {/* SERVICES */}
      <section className="web-services" id="web-services">
        <AnimateSection className="web-container">
          <div className="web-heading">
            <span className="web-tag">WHAT WE OFFER</span>
            <h2>Our Website Development Services</h2>
            <p>Complete web solutions to help your business grow online.</p>
          </div>
          <div className="web-service-grid">
            {services.map((item, i) => (
              <motion.div className="web-service-card" variants={itemAnimation} key={i}>
                <div className="web-service-icon">{item[0]}</div>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
                <a href="#web-contact">Learn More →</a>
              </motion.div>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* TECHNOLOGIES */}
      <section>
        <AnimateSection className="web-container">
          <div className="web-heading">
            <span className="web-tag">OUR TECHNOLOGIES</span>
            <h2>Technologies We Work With</h2>
            <p>Modern technologies for powerful websites.</p>
          </div>
          <div className="web-tech-grid">
            {technologies.map((tech, i) => (
              <motion.div className="web-tech-card" variants={itemAnimation} key={i}>
                <span>✦</span>{tech}
              </motion.div>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* WHY CHOOSE US */}
      <section className="web-why">
        <AnimateSection className="web-why-content">
          <span className="web-tag">WHY CHOOSE US</span>
          <h2>Why Our Website Development <span>Services?</span></h2>
          <p>
            We focus on quality, performance and user experience
            to deliver websites that meet your business goals.
          </p>
          <div className="web-reasons">
            {reasons.map((reason, i) => (
              <motion.div className="web-reason" variants={itemAnimation} key={i}>
                <span>✓</span>{reason}
              </motion.div>
            ))}
          </div>
        </AnimateSection>

        <AnimateSection>
          <div className="web-why-box">
            <div className="web-big-icon">🌐</div>
            <h3>Your Business Deserves A Better Website</h3>
            <p>Build your online presence with a modern professional website.</p>
          </div>
        </AnimateSection>
      </section>

      {/* PROCESS */}
      <section className="web-process">
        <AnimateSection className="web-container">
          <div className="web-heading">
            <span className="web-tag">HOW WE WORK</span>
            <h2>Our Website Development Process</h2>
            <p>A simple process to create successful websites.</p>
          </div>
          <div className="web-process-grid">
            {steps.map((step, i) => (
              <motion.div className="web-process-card" variants={itemAnimation} key={i}>
                <span className="web-step-number">{step[0]}</span>
                <h3>{step[1]}</h3>
                <p>{step[2]}</p>
              </motion.div>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* CTA */}
      <section className="web-cta">
        <AnimateSection>
          <span className="web-tag" style={{ color: "white" }}>LET'S BUILD SOMETHING GREAT</span>
          <h2>Ready To Build Your New Website?</h2>
          <p>
            Let's discuss your project and create a website that
            takes your business to the next level.
          </p>
          <a href="#web-contact" className="web-btn">Start Your Project →</a>
        </AnimateSection>
      </section>

      {/* CONTACT */}
      <section className="web-contact" id="web-contact">
        <AnimateSection className="web-contact-info">
          <span className="web-tag">GET IN TOUCH</span>
          <h2>Let's Discuss Your Website Project</h2>
          <p>Tell us about your project. Fill out the form and we will get back to you.</p>

          <div className="web-contact-detail">
            <span>✉</span>
            <div><h4>Email Us</h4><p>info@example.com</p></div>
          </div>

          <div className="web-contact-detail">
            <span>🌐</span>
            <div><h4>Our Services</h4><p>Website Design & Development</p></div>
          </div>
        </AnimateSection>

        <AnimateSection>
          <form className="web-contact-form" onSubmit={handleSubmit}>
            <h3>Get A Free Quote</h3>
            <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select Your Service</option>
              <option value="Custom Website">Custom Website</option>
              <option value="React Development">React Development</option>
              <option value="E-Commerce">E-Commerce Website</option>
              <option value="Responsive Design">Responsive Design</option>
              <option value="Website Maintenance">Website Maintenance</option>
            </select>

            <textarea name="message" placeholder="Tell us about your project..." rows="5" value={formData.message} onChange={handleChange} required />
            <button type="submit">Submit Message →</button>
          </form>
        </AnimateSection>
      </section>

    </div>
  );
};

export default WebsiteDev;
