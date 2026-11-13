
import React, { useState } from "react";
import { motion } from "framer-motion";

const orange = "rgb(214,110,30)";

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
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
      show: { transition: { staggerChildren: 0.1 } }
    }}
  >
    {children}
  </motion.div>
);

const services = [
  ["🌐", "Network Installation", "Professional network installation for offices and businesses."],
  ["📡", "Wireless Network Setup", "Fast and reliable Wi-Fi installation and configuration."],
  ["🔌", "LAN & WAN Solutions", "Connect computers and multiple business locations."],
  ["🔒", "Network Security", "Protect your network with firewalls and access controls."],
  ["🛠️", "Network Maintenance", "Network monitoring, troubleshooting and maintenance."],
  ["⚙️", "Router & Switch Setup", "Professional router and switch configuration."]
];

const solutions = [
  ["🏢", "Office Networking", "Connect office computers, printers and devices."],
  ["🏫", "School Networks", "Reliable networks for classrooms and computer labs."],
  ["🏭", "Business Networking", "Connect business departments and locations."],
  ["☁️", "Cloud Networking", "Secure connectivity for cloud-based systems."]
];

const types = [
  ["01", "LAN", "Connects devices in a small area like an office or home."],
  ["02", "WAN", "Connects networks across large geographical areas."],
  ["03", "WLAN", "Connects devices through wireless communication."],
  ["04", "MAN", "Connects networks across a city."]
];

const technologies = [
  "Cisco", "MikroTik", "Ubiquiti", "TP-Link",
  "LAN", "WAN", "Wi-Fi", "Firewall"
];

const reasons = [
  "Reliable network connectivity",
  "Professional configuration",
  "Secure network infrastructure",
  "Fast technical support",
  "Scalable network solutions",
  "Regular network maintenance"
];

const steps = [
  ["01", "Planning", "Understand your network requirements."],
  ["02", "Designing", "Prepare a suitable network layout."],
  ["03", "Installation", "Install cables and network devices."],
  ["04", "Configuration", "Configure routers, switches and security."],
  ["05", "Testing", "Test the network and provide support."]
];

const Networking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Networking Request:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="network-page">

      <style>{`
        .network-page {
          --orange: ${orange};
          --dark: #212529;
          --gray: #747474;
          --light: #f8f9fa;
          font-family: "Montserrat", Arial, sans-serif;
          color: var(--dark);
          overflow: hidden;
        }

        .network-page * { box-sizing: border-box; }
        .network-page a { text-decoration: none; }

        .n-tag {
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        /* HERO */

        .n-hero {
          min-height: 620px;
          padding: 100px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          background: linear-gradient(120deg,#fff,#fff0e5);
        }

        .n-hero-content { flex: 1; max-width: 620px; }

        .n-hero h1 {
          font-size: clamp(36px,5vw,57px);
          line-height: 1.2;
          font-weight: 800;
          margin: 20px 0;
        }

        .n-hero h1 span,
        .n-about h2 span,
        .n-why h2 span { color: var(--orange); }

        .n-hero p,.n-about p,.n-why p {
          color: var(--gray);
          line-height: 1.9;
          font-size: 15px;
        }

        .n-buttons { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 30px; }

        .n-btn {
          display: inline-block;
          padding: 14px 25px;
          border-radius: 50px;
          background: var(--orange);
          color: white;
          font-weight: 700;
          transition: .3s;
        }

        .n-btn:hover { background: var(--dark); color: white; }

        .n-outline {
          background: transparent;
          color: var(--dark);
          border: 1px solid var(--orange);
        }

        .n-visual {
          flex: 1;
          min-height: 430px;
          display: grid;
          place-items: center;
          position: relative;
          background: radial-gradient(circle,#ffdfc4,transparent 70%);
        }

        .n-circle {
          width: 300px;
          height: 300px;
          border: 2px dashed var(--orange);
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
          animation: nRotate 25s linear infinite;
        }

        .n-center {
          width: 105px;
          height: 105px;
          background: var(--orange);
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 50px;
          box-shadow: 0 10px 30px #d66e3050;
          animation: nCounter 25s linear infinite;
        }

        .n-node {
          position: absolute;
          width: 58px;
          height: 58px;
          background: white;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 27px;
          box-shadow: 0 8px 25px #0002;
          animation: nCounter 25s linear infinite;
        }

        .n-node:nth-child(2) { top: -24px; left: 120px; }
        .n-node:nth-child(3) { right: -25px; top: 70px; }
        .n-node:nth-child(4) { right: 10px; bottom: 5px; }
        .n-node:nth-child(5) { left: 10px; bottom: 5px; }
        .n-node:nth-child(6) { left: -25px; top: 70px; }

        @keyframes nRotate { to { transform: rotate(360deg); } }
        @keyframes nCounter { to { transform: rotate(-360deg); } }

        .n-status {
          position: absolute;
          bottom: 15px;
          right: 0;
          padding: 14px 18px;
          border-radius: 10px;
          background: white;
          box-shadow: 0 8px 25px #0002;
          font-size: 13px;
          font-weight: 800;
        }

        .n-status span {
          display: inline-block;
          width: 9px;
          height: 9px;
          background: #20a45a;
          border-radius: 50%;
          margin-right: 8px;
        }

        /* ABOUT */

        .n-about,.n-contact {
          padding: 90px 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .n-about-visual {
          min-height: 350px;
          background: linear-gradient(135deg,#fff0e4,#ffdfc4);
          border-radius: 20px;
          display: grid;
          place-items: center;
          position: relative;
        }

        .n-about-icon {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--orange);
          display: grid;
          place-items: center;
          font-size: 90px;
          animation: nFloat 4s ease-in-out infinite;
        }

        @keyframes nFloat {
          50% { transform: translateY(-15px); }
        }

        .n-about-card {
          position: absolute;
          bottom: 18px;
          right: 15px;
          background: white;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 8px 25px #0002;
        }

        .n-about-card p { margin: 5px 0 0; font-size: 12px; }

        .n-about h2,.n-why h2 {
          font-size: clamp(29px,4vw,40px);
          line-height: 1.3;
          font-weight: 800;
          margin: 18px 0;
        }

        /* COMMON SECTIONS */

        .n-section { padding: 85px 8%; }

        .n-heading {
          max-width: 700px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .n-heading h2 {
          font-size: clamp(28px,4vw,39px);
          font-weight: 800;
          margin: 15px 0;
        }

        .n-heading p { color: var(--gray); font-size: 14px; line-height: 1.8; }

        .n-light { background: var(--light); }

        /* GRIDS & CARDS */

        .n-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .n-card {
          padding: 28px;
          background: white;
          border: 1px solid #eee;
          border-radius: 14px;
          transition: .35s;
          height: 100%;
        }

        .n-card:hover {
          transform: translateY(-9px);
          border-color: #edb58e;
          box-shadow: 0 15px 35px #00000012;
        }

        .n-icon {
          width: 62px;
          height: 62px;
          background: #fff0e4;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-size: 30px;
          margin-bottom: 18px;
          transition: .3s;
        }

        .n-card:hover .n-icon { transform: rotate(8deg) scale(1.08); }

        .n-card h3 { font-size: 18px; font-weight: 800; }
        .n-card p { color: var(--gray); font-size: 13px; line-height: 1.8; }

        .n-card a { color: var(--orange); font-size: 13px; font-weight: 800; }

        .n-four { grid-template-columns: repeat(4,1fr); }

        .n-four .n-card { text-align: center; padding: 28px 20px; }

        .n-four .n-icon {
          margin: 0 auto 18px;
          font-size: 38px;
          background: transparent;
        }

        .n-type-number { color: var(--orange); font-size: 28px; font-weight: 800; }

        .n-type-card h3 { font-size: 24px; margin: 12px 0; }

        .n-tech-card {
          padding: 24px;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: center;
          font-weight: 800;
          transition: .3s;
        }

        .n-tech-card span { color: var(--orange); margin-right: 8px; }

        .n-tech-card:hover {
          background: var(--orange);
          color: white;
          transform: translateY(-7px);
        }

        .n-tech-card:hover span { color: white; }

        /* WHY CHOOSE US */

        .n-why {
          padding: 90px 8%;
          background: var(--dark);
          color: white;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 50px;
          align-items: center;
        }

        .n-why p { color: #ccc; }

        .n-reasons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 25px;
        }

        .n-reason { font-size: 13px; line-height: 1.7; }
        .n-reason span { color: #ffad70; margin-right: 9px; font-size: 18px; }

        .n-why-box {
          padding: 40px 25px;
          background: var(--orange);
          border-radius: 16px;
          text-align: center;
        }

        .n-why-box div { font-size: 65px; }
        .n-why-box h3 { font-size: 25px; line-height: 1.4; }
        .n-why-box p { color: white; }

        /* PROCESS */

        .n-process { grid-template-columns: repeat(5,1fr); }

        .n-process .n-card { padding: 24px 18px; }
        .n-process h3 { font-size: 16px; }
        .n-process p { font-size: 12px; }

        /* CTA */

        .n-cta {
          padding: 80px 8%;
          text-align: center;
          background: var(--orange);
          color: white;
        }

        .n-cta h2 { font-size: clamp(28px,4vw,40px); font-weight: 800; margin: 18px 0; }
        .n-cta p { max-width: 600px; margin: 0 auto 25px; line-height: 1.8; font-size: 14px; }
        .n-cta .n-btn { background: var(--dark); }
        .n-cta .n-btn:hover { background: white; color: var(--dark); }

        /* CONTACT */

        .n-contact { background: var(--light); }

        .n-contact-info h2 {
          font-size: 36px;
          line-height: 1.3;
          font-weight: 800;
          margin: 18px 0;
        }

        .n-contact-info > p { color: var(--gray); line-height: 1.8; font-size: 14px; }

        .n-detail { display: flex; gap: 15px; align-items: center; margin-top: 25px; }
        .n-detail > span {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #fff0e4;
          font-size: 21px;
        }

        .n-detail h4 { margin: 0 0 5px; font-size: 15px; }
        .n-detail p { margin: 0; color: var(--gray); font-size: 13px; }

        .n-form {
          background: white;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 12px 35px #0000000c;
        }

        .n-form h3 { font-size: 24px; font-weight: 800; margin: 0 0 22px; }

        .n-form input,.n-form select,.n-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 7px;
          outline: none;
          font: inherit;
          font-size: 13px;
          transition: .3s;
        }

        .n-form input:focus,.n-form select:focus,.n-form textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3020;
        }

        .n-form textarea { resize: vertical; }

        .n-form button {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 50px;
          background: var(--orange);
          color: white;
          font-weight: 800;
          cursor: pointer;
          transition: .3s;
        }

        .n-form button:hover { background: var(--dark); transform: translateY(-3px); }

        .n-success {
          background: #e8f7ed;
          color: #176b35;
          padding: 13px;
          border-radius: 8px;
          margin-bottom: 18px;
          font-size: 13px;
        }

        /* RESPONSIVE */

        @media(max-width: 1000px) {
          .n-hero { padding: 80px 5%; }
          .n-about,.n-contact,.n-why { padding: 70px 5%; gap: 30px; }
          .n-section { padding: 70px 5%; }
          .n-grid { grid-template-columns: repeat(2,1fr); }
          .n-four { grid-template-columns: repeat(2,1fr); }
          .n-process { grid-template-columns: repeat(3,1fr); }
        }

        @media(max-width: 600px) {
          .n-hero { flex-direction: column; text-align: center; padding: 85px 6% 55px; }
          .n-hero h1 { font-size: 35px; }
          .n-buttons { justify-content: center; }
          .n-visual { width: 100%; min-height: 320px; }
          .n-circle { width: 245px; height: 245px; }
          .n-center { width: 85px; height: 85px; font-size: 42px; }
          .n-node { width: 49px; height: 49px; font-size: 22px; }
          .n-node:nth-child(2) { left: 96px; }
          .n-node:nth-child(3),.n-node:nth-child(6) { top: 55px; }
          .n-status { bottom: 0; right: 0; }

          .n-about,.n-contact,.n-why { grid-template-columns: 1fr; padding: 60px 6%; }
          .n-about-visual { min-height: 280px; }
          .n-about-icon { width: 170px; height: 170px; font-size: 75px; }
          .n-about h2,.n-why h2,.n-contact-info h2 { font-size: 29px; }

          .n-section { padding: 60px 6%; }
          .n-heading { margin-bottom: 35px; }
          .n-heading h2 { font-size: 28px; }

          .n-grid,.n-four,.n-process { grid-template-columns: 1fr; }
          .n-tech-grid { grid-template-columns: repeat(2,1fr); }
          .n-reasons { grid-template-columns: 1fr; }

          .n-cta { padding: 65px 6%; }
          .n-form { padding: 25px 18px; }
        }

        @media(prefers-reduced-motion: reduce) {
          .network-page *, .network-page *::before, .network-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="n-hero">
        <motion.div
          className="n-hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <span className="n-tag">PROFESSIONAL NETWORKING SERVICES</span>
          <h1>Building Strong <span>& Secure Networks</span></h1>
          <p>
            We provide reliable networking solutions that connect your
            devices, people and business. Our goal is to make your network
            fast, secure and dependable.
          </p>

          <div className="n-buttons">
            <motion.a href="#network-services" className="n-btn" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: .96 }}>
              Explore Services
            </motion.a>
            <motion.a href="#network-contact" className="n-btn n-outline" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: .96 }}>
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="n-visual"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .9 }}
        >
          <div className="n-circle">
            <div className="n-center">🌐</div>
            <div className="n-node">💻</div>
            <div className="n-node">📱</div>
            <div className="n-node">🖥️</div>
            <div className="n-node">📡</div>
            <div className="n-node">🔒</div>
          </div>
          <div className="n-status"><span /> Network Connected</div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="n-about">
        <Reveal>
          <motion.div variants={item} className="n-about-visual">
            <div className="n-about-icon">🌐</div>
            <div className="n-about-card">
              <strong>Connected World</strong>
              <p>Reliable network communication</p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.div variants={item}>
            <span className="n-tag">ABOUT NETWORKING</span>
            <h2>Connecting Your Business <span>To The Digital World</span></h2>
            <p>
              Computer networking connects computers and devices so they
              can communicate and share information, resources and services.
            </p>
            <p>
              We design, install and maintain networks that help organizations
              communicate efficiently and work smoothly.
            </p>
            <a href="#network-services" style={{ color: orange, fontWeight: 800 }}>
              Explore Our Solutions →
            </a>
          </motion.div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="n-section n-light" id="network-services">
        <Reveal>
          <motion.div variants={item} className="n-heading">
            <span className="n-tag">WHAT WE OFFER</span>
            <h2>Our Networking Services</h2>
            <p>Complete networking solutions for homes, offices and businesses.</p>
          </motion.div>
        </Reveal>

        <Reveal className="n-grid">
          {services.map((s, i) => (
            <motion.div variants={item} whileHover={{ y: -8 }} className="n-card" key={i}>
              <div className="n-icon">{s[0]}</div>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
              <a href="#network-contact">Learn More →</a>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* SOLUTIONS */}
      <section className="n-section">
        <Reveal>
          <motion.div variants={item} className="n-heading">
            <span className="n-tag">NETWORK SOLUTIONS</span>
            <h2>Networking For Every Organization</h2>
            <p>Connected and efficient networking environments for every organization.</p>
          </motion.div>
        </Reveal>

        <Reveal className="n-grid n-four">
          {solutions.map((s, i) => (
            <motion.div variants={item} whileHover={{ y: -8 }} className="n-card" key={i}>
              <div className="n-icon">{s[0]}</div>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* NETWORK TYPES */}
      <section className="n-section n-light">
        <Reveal>
          <motion.div variants={item} className="n-heading">
            <span className="n-tag">NETWORK TYPES</span>
            <h2>Understanding Different Networks</h2>
            <p>Different network types according to your requirements.</p>
          </motion.div>
        </Reveal>

        <Reveal className="n-grid n-four">
          {types.map((t, i) => (
            <motion.div variants={item} whileHover={{ y: -7 }} className="n-card n-type-card" key={i}>
              <span className="n-type-number">{t[0]}</span>
              <h3>{t[1]}</h3>
              <p>{t[2]}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* TECHNOLOGIES */}
      <section className="n-section">
        <Reveal>
          <motion.div variants={item} className="n-heading">
            <span className="n-tag">OUR TECHNOLOGIES</span>
            <h2>Tools & Technologies We Use</h2>
            <p>Modern networking equipment and technologies for reliable connectivity.</p>
          </motion.div>
        </Reveal>

        <Reveal className="n-grid n-four n-tech-grid">
          {technologies.map((tech, i) => (
            <motion.div variants={item} whileHover={{ y: -7, scale: 1.03 }} className="n-tech-card" key={i}>
              <span>✦</span>{tech}
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section className="n-why">
        <Reveal>
          <motion.div variants={item}>
            <span className="n-tag">WHY CHOOSE US</span>
            <h2>Reliable Networking <span>Solutions For Your Business</span></h2>
            <p>
              We focus on building stable, secure and efficient networks
              that support your daily business operations.
            </p>

            <div className="n-reasons">
              {reasons.map((r, i) => (
                <motion.div variants={item} className="n-reason" key={i}>
                  <span>✓</span>{r}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.div variants={item} whileHover={{ scale: 1.04 }} className="n-why-box">
            <div>🔐</div>
            <h3>Secure Your Network, Connect Your Future</h3>
            <p>Build reliable network infrastructure for better communication and productivity.</p>
          </motion.div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="n-section">
        <Reveal>
          <motion.div variants={item} className="n-heading">
            <span className="n-tag">HOW WE WORK</span>
            <h2>Our Networking Process</h2>
            <p>Our professional process for delivering reliable network solutions.</p>
          </motion.div>
        </Reveal>

        <Reveal className="n-grid n-process">
          {steps.map((s, i) => (
            <motion.div variants={item} whileHover={{ y: -7 }} className="n-card" key={i}>
              <span className="n-type-number">{s[0]}</span>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="n-cta">
        <Reveal>
          <motion.div variants={item}>
            <span className="n-tag" style={{ color: "white" }}>LET'S CONNECT YOUR BUSINESS</span>
            <h2>Need A Reliable Networking Solution?</h2>
            <p>Contact us today to discuss your networking requirements and find the right solution.</p>
            <motion.a href="#network-contact" className="n-btn" whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: .96 }}>
              Start Your Project →
            </motion.a>
          </motion.div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="n-contact" id="network-contact">
        <Reveal>
          <motion.div variants={item} className="n-contact-info">
            <span className="n-tag">GET IN TOUCH</span>
            <h2>Let's Discuss Your Networking Requirements</h2>
            <p>Tell us about your network requirements. We will help you find the right solution.</p>

            <div className="n-detail">
              <span>✉</span>
              <div><h4>Email Us</h4><p>info@example.com</p></div>
            </div>

            <div className="n-detail">
              <span>🌐</span>
              <div><h4>Our Services</h4><p>Network Installation & Maintenance</p></div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.form variants={item} className="n-form" onSubmit={handleSubmit}>
            <h3>Get A Free Quote</h3>

            {submitted && (
              <div className="n-success">
                Thank you! Your request has been submitted.
              </div>
            )}

            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select Networking Service</option>
              <option>Network Installation</option>
              <option>Wi-Fi Setup</option>
              <option>LAN & WAN</option>
              <option>Network Security</option>
              <option>Router Configuration</option>
              <option>Network Maintenance</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your networking requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit Message →</button>
          </motion.form>
        </Reveal>
      </section>
    </div>
  );
};

export default Networking;
