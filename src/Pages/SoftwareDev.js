
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./../App.css";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Reveal = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.12 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.09 } }
    }}
  >
    {children}
  </motion.div>
);

const services = [
  ["💻", "Custom Software", "Development", "Software designed for your business needs."],
  ["🌐", "Web Application", "Development", "Modern and responsive web applications."],
  ["📊", "Business Software", "Solutions", "Smart tools to manage your business."],
  ["📱", "Mobile Application", "Development", "User-friendly Android and iOS applications."],
  ["🔗", "API Development", "Integration", "Secure connections between applications."],
  ["⚙️", "Software Maintenance", "Support", "Updates, bug fixing and technical support."]
];

const technologies = [
  ["🌐", "HTML5"], ["🎨", "CSS3"], ["⚡", "JavaScript"],
  ["⚛️", "React JS"], ["🟢", "Node JS"], ["🐍", "Python"],
  ["💻", "PHP"], ["🗄️", "MySQL"]
];

const benefits = [
  ["⭐", "Quality Solutions", "Reliable and high-quality software."],
  ["🔒", "Secure Development", "Security practices to protect your data."],
  ["📱", "Responsive Design", "Works on mobile, tablet and desktop."],
  ["🤝", "Customer Support", "Technical help whenever you need it."]
];

const steps = [
  ["01", "📝", "Planning", "Understand your ideas and requirements."],
  ["02", "🎨", "Designing", "Create a clean and user-friendly design."],
  ["03", "💻", "Development", "Build software using modern technologies."],
  ["04", "🔍", "Testing", "Test the software and fix errors."],
  ["05", "🚀", "Deployment", "Launch your software and provide support."]
];

const SoftwareDev = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", project: "", message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Software Project:", formData);
    setSubmitted(true);
    setFormData({
      name: "", email: "", phone: "", project: "", message: ""
    });
  };

  return (
    <div className="sd-page">

      <style>{`
        .sd-page {
          --orange: rgb(214,110,30);
          --dark: #171b23;
          --light: #f7f8fa;
          font-family: "Montserrat", Arial, sans-serif;
          color: #242832;
          overflow: hidden;
        }

        .sd-page * { box-sizing: border-box; }
        .sd-page a { text-decoration: none; }

        .sd-section { padding: 90px 7%; }
        .sd-container { max-width: 1250px; margin: auto; }

        .sd-tag {
          color: var(--orange);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .sd-title {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
        }

        .sd-title h2 {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          margin: 15px 0;
        }

        .sd-title h2 span,
        .sd-about h2 span { color: var(--orange); }

        .sd-title p, .sd-muted {
          color: #777;
          line-height: 1.9;
          font-size: 14px;
        }

        .sd-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 27px;
          border-radius: 7px;
          background: var(--orange);
          color: white;
          font-weight: 800;
          font-size: 13px;
          transition: .3s ease;
        }

        .sd-btn:hover {
          background: white;
          color: var(--orange);
          transform: translateY(-5px);
          box-shadow: 0 12px 30px #0003;
        }

        /* HERO */
        .sd-hero {
          min-height: 650px;
          padding: 130px 7% 90px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          color: white;
          background:
            radial-gradient(ellipse at 85% 45%, #d66e3040, transparent 35%),
            linear-gradient(120deg, #11151d, #252d38);
        }

        .sd-hero::before, .sd-hero::after {
          content: "";
          position: absolute;
          border: 1px solid #d66e3050;
          border-radius: 50%;
          z-index: -1;
          animation: sdOrbit 18s linear infinite;
        }

        .sd-hero::before {
          width: 440px; height: 440px;
          right: 9%; top: 12%;
        }

        .sd-hero::after {
          width: 310px; height: 310px;
          right: 14%; top: 22%;
          animation-direction: reverse;
        }

        @keyframes sdOrbit {
          to { transform: rotate(360deg); }
        }

        .sd-hero-inner {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 55px;
        }

        .sd-hero h1 {
          font-size: clamp(38px, 5vw, 65px);
          font-weight: 900;
          line-height: 1.15;
          margin: 22px 0;
        }

        .sd-hero h1 span { color: #f18b45; }

        .sd-hero p {
          color: #c7cbd1;
          max-width: 580px;
          line-height: 1.9;
          font-size: 14px;
        }

        .sd-hero-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .sd-btn-outline {
          background: transparent;
          border: 1px solid #ffffff65;
        }

        .sd-code {
          padding: 32px;
          border: 1px solid #ffffff25;
          border-radius: 18px;
          background: #ffffff0d;
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px #0005;
          animation: sdFloat 4s ease-in-out infinite;
        }

        @keyframes sdFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }

        .sd-dots { display: flex; gap: 8px; }
        .sd-dots i {
          width: 11px; height: 11px;
          border-radius: 50%; background: #ff6258;
        }
        .sd-dots i:nth-child(2) { background: #ffc044; }
        .sd-dots i:nth-child(3) { background: #39c879; }

        .sd-code h3 { margin: 28px 0; font-size: 22px; }
        .sd-code p {
          font-family: monospace;
          color: #d9dce3;
          margin: 8px 0;
        }
        .sd-code .orange { color: #ff9b53; }

        .sd-code-status {
          margin-top: 25px;
          padding: 13px;
          border-radius: 7px;
          background: #ffffff12;
          color: #8ff0ae;
          font-size: 13px;
        }

        /* ABOUT */
        .sd-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .sd-about-art {
          min-height: 380px;
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: linear-gradient(135deg, #fff0e5, #ffd9bd);
        }

        .sd-about-art::before, .sd-about-art::after {
          content: "";
          position: absolute;
          width: 250px; height: 250px;
          border: 2px dashed var(--orange);
          border-radius: 50%;
          animation: sdOrbit 22s linear infinite;
        }

        .sd-about-art::after {
          width: 180px; height: 180px;
          animation-direction: reverse;
        }

        .sd-about-art span {
          font-size: 115px;
          z-index: 1;
          animation: sdFloat 4s ease-in-out infinite;
        }

        .sd-about h2 {
          font-size: clamp(29px, 4vw, 42px);
          font-weight: 900;
          line-height: 1.3;
          margin: 16px 0;
        }

        .sd-checks {
          list-style: none;
          padding: 0;
          margin-top: 22px;
        }

        .sd-checks li {
          margin: 14px 0;
          font-size: 14px;
          font-weight: 700;
        }

        .sd-checks span { color: var(--orange); margin-right: 10px; }

        /* CARDS */
        .sd-services, .sd-tech, .sd-contact { background: var(--light); }

        .sd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .sd-card {
          height: 100%;
          padding: 30px 25px;
          background: white;
          border: 1px solid #eee;
          border-radius: 15px;
          position: relative;
          overflow: hidden;
          transition: .35s ease;
        }

        .sd-card::before {
          content: "";
          position: absolute;
          height: 3px;
          width: 0;
          left: 0; top: 0;
          background: var(--orange);
          transition: .35s;
        }

        .sd-card:hover::before { width: 100%; }

        .sd-card:hover {
          transform: translateY(-9px);
          border-color: #e9b58f;
          box-shadow: 0 20px 40px #00000012;
        }

        .sd-icon {
          width: 65px; height: 65px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #fff0e5;
          font-size: 30px;
          margin-bottom: 23px;
          transition: .35s;
        }

        .sd-card:hover .sd-icon {
          transform: rotate(-8deg) scale(1.1);
        }

        .sd-card h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .sd-card h4 {
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
        }

        .sd-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.8;
          margin: 14px 0 0;
        }

        /* BENEFITS */
        .sd-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .sd-benefit {
          display: flex;
          gap: 18px;
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 14px;
          transition: .3s;
        }

        .sd-benefit:hover {
          transform: translateY(-6px);
          border-color: var(--orange);
          box-shadow: 0 12px 30px #0000000d;
        }

        .sd-benefit-icon {
          min-width: 55px; height: 55px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #fff0e5;
          font-size: 25px;
        }

        .sd-benefit h3 { font-size: 16px; font-weight: 800; }
        .sd-benefit p { color: #777; font-size: 13px; line-height: 1.8; margin: 0; }

        /* TECHNOLOGIES */
        .sd-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .sd-tech-card {
          padding: 28px 15px;
          text-align: center;
          border-radius: 13px;
          border: 1px solid #eee;
          background: white;
          transition: .3s;
        }

        .sd-tech-card:hover {
          background: var(--dark);
          color: white;
          transform: translateY(-7px);
          box-shadow: 0 12px 25px #0002;
        }

        .sd-tech-card span {
          display: block;
          font-size: 35px;
          margin-bottom: 12px;
        }

        .sd-tech-card h3 { font-size: 14px; font-weight: 800; margin: 0; }

        /* PROCESS */
        .sd-process { background: #171b23; color: white; }

        .sd-process .sd-title p { color: #b9bec7; }

        .sd-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
        }

        .sd-step {
          padding: 27px 17px;
          text-align: center;
          border: 1px solid #ffffff20;
          border-radius: 14px;
          background: #ffffff08;
          transition: .3s;
        }

        .sd-step:hover {
          transform: translateY(-8px);
          border-color: var(--orange);
          background: #d66e3015;
        }

        .sd-step-number {
          color: #ff9b53;
          font-size: 30px;
          font-weight: 900;
        }

        .sd-step-icon { font-size: 27px; margin: 15px 0; }
        .sd-step h3 { font-size: 16px; font-weight: 800; }
        .sd-step p { color: #b9bec7; font-size: 12px; line-height: 1.8; }

        /* CTA */
        .sd-cta {
          padding: 70px 7%;
          color: white;
          background: linear-gradient(110deg, #d66e30, #a94c18);
        }

        .sd-cta-inner {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .sd-cta h2 { font-size: 34px; font-weight: 900; margin: 13px 0; }
        .sd-cta p { font-size: 14px; line-height: 1.8; margin: 0; }

        .sd-cta .sd-btn {
          background: white;
          color: var(--orange);
          flex-shrink: 0;
        }

        .sd-cta .sd-btn:hover { background: var(--dark); color: white; }

        /* CONTACT */
        .sd-form-box {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 50px #0000000d;
        }

        .sd-form-info {
          padding: 45px 35px;
          background: var(--dark);
          color: white;
        }

        .sd-form-info h3 { font-size: 27px; font-weight: 900; line-height: 1.4; }
        .sd-form-info p { color: #c6cbd2; font-size: 13px; line-height: 1.9; }
        .sd-form-info h4 { font-size: 14px; margin-top: 27px; font-weight: 800; }

        .sd-form { padding: 40px; }
        .sd-form h3 { font-size: 23px; font-weight: 900; margin-bottom: 25px; }

        .sd-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .sd-field.full { grid-column: 1 / -1; }

        .sd-field label {
          display: block;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .sd-field input, .sd-field select, .sd-field textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #e3e3e3;
          border-radius: 7px;
          outline: none;
          font: inherit;
          font-size: 13px;
          transition: .25s;
        }

        .sd-field input:focus, .sd-field select:focus, .sd-field textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3018;
        }

        .sd-field textarea { resize: vertical; }

        .sd-submit {
          width: 100%;
          padding: 15px;
          border: 0;
          border-radius: 7px;
          background: var(--orange);
          color: white;
          font-weight: 800;
          cursor: pointer;
          transition: .3s;
        }

        .sd-submit:hover { background: var(--dark); transform: translateY(-3px); }

        .sd-success {
          padding: 13px;
          margin-bottom: 20px;
          background: #e8f7ed;
          color: #176b35;
          border-radius: 8px;
          font-size: 13px;
        }

        /* RESPONSIVE */
        @media(max-width: 950px) {
          .sd-hero-inner { grid-template-columns: 1fr; }
          .sd-hero-content { text-align: center; }
          .sd-hero p { margin: auto; }
          .sd-hero-actions { justify-content: center; }
          .sd-code { max-width: 500px; margin: auto; width: 100%; }
          .sd-about { grid-template-columns: 1fr; }
          .sd-process-grid { grid-template-columns: repeat(3, 1fr); }
          .sd-form-box { grid-template-columns: 1fr; }
        }

        @media(max-width: 600px) {
          .sd-section { padding: 60px 6%; }
          .sd-hero { padding: 100px 6% 65px; min-height: auto; }
          .sd-hero h1 { font-size: 36px; }
          .sd-hero::before { width: 250px; height: 250px; right: -30px; }
          .sd-hero::after { display: none; }
          .sd-about-art { min-height: 270px; }
          .sd-about-art span { font-size: 90px; }
          .sd-grid { grid-template-columns: 1fr; }
          .sd-benefits { grid-template-columns: 1fr; }
          .sd-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .sd-process-grid { grid-template-columns: 1fr 1fr; }
          .sd-cta-inner { flex-direction: column; align-items: flex-start; }
          .sd-cta h2 { font-size: 27px; }
          .sd-form-info { padding: 30px 23px; }
          .sd-form { padding: 25px 18px; }
          .sd-fields { grid-template-columns: 1fr; }
          .sd-field.full { grid-column: auto; }
        }

        @media(max-width: 380px) {
          .sd-process-grid { grid-template-columns: 1fr; }
        }

        @media(prefers-reduced-motion: reduce) {
          .sd-page *, .sd-page *::before, .sd-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-hero-inner">
          <Reveal>
            <motion.div variants={item} className="sd-hero-content">
              <span className="sd-tag">OUR PROFESSIONAL SERVICES</span>
              <h1>
                Professional <span>Software</span> Development Solutions
              </h1>
              <p>
                We develop powerful, secure and modern software solutions
                that help businesses improve performance, save time and grow faster.
              </p>
              <div className="sd-hero-actions">
                <a href="#sd-services" className="sd-btn">Explore Services →</a>
                <a href="#sd-contact" className="sd-btn sd-btn-outline">Get In Touch</a>
              </div>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div variants={item} className="sd-code">
              <div className="sd-dots"><i /><i /><i /></div>
              <h3>Software Development</h3>
              <p className="orange">const solution = {"{"}</p>
              <p>quality: "Premium",</p>
              <p>security: "Advanced",</p>
              <p>performance: "Fast",</p>
              <p>design: "Modern"</p>
              <p className="orange">{"}"}</p>
              <div className="sd-code-status">● System Ready</div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sd-section">
        <div className="sd-container sd-about">
          <Reveal>
            <motion.div variants={item} className="sd-about-art">
              <span>💻</span>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div variants={item}>
              <span className="sd-tag">ABOUT OUR SERVICES</span>
              <h2>Smart Software Solutions For <span>Your Business</span></h2>
              <p className="sd-muted">
                Software development is the process of designing, creating,
                testing and maintaining computer programs and applications.
              </p>
              <p className="sd-muted">
                We provide reliable and easy-to-use software that solves
                business problems and makes daily work easier.
              </p>
              <ul className="sd-checks">
                {[
                  "Custom Software Solutions",
                  "Modern and User-Friendly Design",
                  "Secure and Reliable Applications",
                  "Maintenance and Technical Support"
                ].map((x, i) => <li key={i}><span>✔</span>{x}</li>)}
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sd-section sd-services" id="sd-services">
        <div className="sd-container">
          <Reveal>
            <motion.div variants={item} className="sd-title">
              <span className="sd-tag">WHAT WE PROVIDE</span>
              <h2>Our Software <span>Services</span></h2>
              <p>Complete software solutions to meet your business and technology requirements.</p>
            </motion.div>
          </Reveal>

          <Reveal className="sd-grid">
            {services.map((s, i) => (
              <motion.div variants={item} className="sd-card" key={i}>
                <div className="sd-icon">{s[0]}</div>
                <h3>{s[1]}</h3>
                <h4>{s[2]}</h4>
                <p>{s[3]}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sd-section">
        <div className="sd-container">
          <Reveal>
            <motion.div variants={item} className="sd-title">
              <span className="sd-tag">OUR ADVANTAGES</span>
              <h2>Why Choose <span>Us?</span></h2>
              <p>We focus on quality, security and customer satisfaction.</p>
            </motion.div>
          </Reveal>

          <Reveal className="sd-benefits">
            {benefits.map((b, i) => (
              <motion.div variants={item} className="sd-benefit" key={i}>
                <div className="sd-benefit-icon">{b[0]}</div>
                <div><h3>{b[1]}</h3><p>{b[2]}</p></div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="sd-section sd-tech">
        <div className="sd-container">
          <Reveal>
            <motion.div variants={item} className="sd-title">
              <span className="sd-tag">OUR TECH STACK</span>
              <h2>Technologies We <span>Use</span></h2>
              <p>Modern programming languages and technologies for powerful applications.</p>
            </motion.div>
          </Reveal>

          <Reveal className="sd-tech-grid">
            {technologies.map((t, i) => (
              <motion.div variants={item} className="sd-tech-card" key={i}>
                <span>{t[0]}</span><h3>{t[1]}</h3>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sd-section sd-process">
        <div className="sd-container">
          <Reveal>
            <motion.div variants={item} className="sd-title">
              <span className="sd-tag">HOW WE WORK</span>
              <h2>Our Development Process</h2>
              <p>We follow a simple and organized process to turn your ideas into working software.</p>
            </motion.div>
          </Reveal>

          <Reveal className="sd-process-grid">
            {steps.map((s, i) => (
              <motion.div variants={item} className="sd-step" key={i}>
                <div className="sd-step-number">{s[0]}</div>
                <div className="sd-step-icon">{s[1]}</div>
                <h3>{s[2]}</h3>
                <p>{s[3]}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta">
        <Reveal>
          <motion.div variants={item} className="sd-cta-inner">
            <div>
              <span className="sd-tag" style={{ color: "white" }}>LET'S BUILD SOMETHING GREAT</span>
              <h2>Have a Software Project in Mind?</h2>
              <p>Share your idea with us and let's create something amazing together.</p>
            </div>
            <a href="#sd-contact" className="sd-btn">Start Your Project →</a>
          </motion.div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="sd-section sd-contact" id="sd-contact">
        <div className="sd-container">
          <Reveal>
            <motion.div variants={item} className="sd-title">
              <span className="sd-tag">GET IN TOUCH</span>
              <h2>Discuss Your <span>Project</span></h2>
              <p>Tell us about your software development requirements.</p>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div variants={item} className="sd-form-box">
              <div className="sd-form-info">
                <h3>Let's Create Something Amazing Together!</h3>
                <p>
                  Need custom software for your business? Contact our team
                  and discuss your project requirements.
                </p>
                <h4>💻 Custom Software Development</h4>
                <p>Modern, secure and reliable solutions for your business.</p>
                <h4>🤝 Professional Support</h4>
                <p>We are ready to help with your software development needs.</p>
              </div>

              <div className="sd-form">
                <h3>Get A Free Quote</h3>

                {submitted && (
                  <div className="sd-success">
                    Thank you! Your request has been submitted.
                    Connect a backend to receive and store requests.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="sd-fields">
                    <div className="sd-field">
                      <label>Full Name</label>
                      <input name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="sd-field">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="sd-field">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="sd-field">
                      <label>Project Type</label>
                      <select name="project" value={formData.project} onChange={handleChange} required>
                        <option value="">Select Project Type</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile Application">Mobile Application</option>
                        <option value="Business Software">Business Software</option>
                        <option value="API Development">API Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="sd-field full">
                      <label>Project Details</label>
                      <textarea name="message" rows="5" placeholder="Describe your project..." value={formData.message} onChange={handleChange} required />
                    </div>

                    <div className="sd-field full">
                      <button className="sd-submit" type="submit">
                        Submit Project Request →
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default SoftwareDev;
