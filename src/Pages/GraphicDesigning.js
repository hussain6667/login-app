
import React, { useState } from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
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
  ["🎨", "Logo Design", "Unique and professional logos that represent your brand identity."],
  ["📱", "Social Media Design", "Creative posts, banners and advertisements for your business."],
  ["📄", "Brochure Design", "Professional brochures and flyers to promote your services."],
  ["💼", "Brand Identity", "Build a consistent identity with colors, fonts and visual elements."],
  ["🖥️", "UI/UX Design", "Attractive and user-friendly website and application interfaces."],
  ["🖼️", "Banner Design", "Creative promotional graphics for online and offline marketing."]
];

const categories = [
  ["Logo Design", "photo-1626785774573-4b799315345d"],
  ["Brand Identity", "photo-1634942536790-253d9f4b2c3b"],
  ["Social Media Posts", "photo-1611162617474-5b21e879e113"],
  ["Creative Posters", "photo-1541701494587-cb58502866ab"],
  ["UI/UX Design", "photo-1559028012-481c04fa702d"],
  ["Marketing Graphics", "photo-1558655146-9f40138edfeb"]
];

const reasons = [
  ["🎨", "Creative Designs", "Unique designs that make your brand different."],
  ["⭐", "High Quality", "Professional work with attention to every detail."],
  ["⏰", "On Time Delivery", "Projects completed according to schedule."],
  ["💡", "Modern Ideas", "Modern trends and creative design concepts."],
  ["🤝", "Client Satisfaction", "We understand your needs and value your feedback."],
  ["🔄", "Easy Revisions", "Design improvements according to your requirements."]
];

const process = [
  "Understanding Requirements",
  "Research & Planning",
  "Creative Design",
  "Client Feedback",
  "Final Delivery"
];

const GraphicDesigning = () => {
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
    console.log("Graphic Design Request:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="graphic-page">

      <style>{`
        .graphic-page {
          --orange: rgb(214,110,30);
          --dark: #212529;
          --gray: #777;
          --light: #f8f9fa;
          font-family: "Montserrat", Arial, sans-serif;
          color: var(--dark);
          overflow: hidden;
        }

        .graphic-page * { box-sizing: border-box; }
        .graphic-page a { text-decoration: none; }

        .gd-tag {
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .gd-section { padding: 85px 8%; }

        .gd-container {
          max-width: 1200px;
          margin: auto;
        }

        .gd-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 45px;
        }

        .gd-heading h2 {
          font-size: clamp(28px,4vw,39px);
          font-weight: 800;
          margin: 15px 0;
        }

        .gd-heading p {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.8;
        }

        /* HERO */

        .gd-hero {
          min-height: 620px;
          padding: 100px 8%;
          display: flex;
          align-items: center;
          color: white;
          background:
            linear-gradient(100deg,rgba(15,15,15,.94),rgba(15,15,15,.58)),
            url("https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1800&q=85") center/cover;
        }

        .gd-hero-content { max-width: 750px; }

        .gd-hero small {
          color: #ffad70;
          letter-spacing: 3px;
          font-weight: 800;
        }

        .gd-hero h1 {
          font-size: clamp(36px,5vw,58px);
          line-height: 1.2;
          font-weight: 800;
          margin: 22px 0;
        }

        .gd-hero h1 span { color: var(--orange); }

        .gd-hero p {
          color: #ddd;
          line-height: 1.9;
          max-width: 620px;
          font-size: 15px;
        }

        .gd-btn {
          display: inline-block;
          padding: 15px 28px;
          margin-top: 22px;
          border: none;
          border-radius: 50px;
          background: var(--orange);
          color: white;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s;
        }

        .gd-btn:hover {
          background: var(--dark);
          color: white;
        }

        /* ABOUT */

        .gd-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .gd-about-image {
          min-height: 400px;
          border-radius: 15px;
          background: url("https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1000&q=85") center/cover;
          box-shadow: 15px 15px 0 var(--orange);
          transition: .4s;
        }

        .gd-about-image:hover { transform: translateY(-7px); }

        .gd-about-content h2 {
          font-size: clamp(29px,4vw,40px);
          line-height: 1.3;
          font-weight: 800;
          margin: 18px 0;
        }

        .gd-about-content h2 span { color: var(--orange); }

        .gd-about-content p {
          color: var(--gray);
          line-height: 1.9;
          font-size: 14px;
        }

        /* SERVICES */

        .gd-services,.gd-contact { background: var(--light); }

        .gd-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 23px;
        }

        .gd-card {
          height: 100%;
          padding: 30px 25px;
          border-radius: 13px;
          background: white;
          border: 1px solid #eee;
          box-shadow: 0 5px 25px #00000008;
          transition: .35s;
        }

        .gd-card:hover {
          transform: translateY(-9px);
          border-color: #e9b18b;
          box-shadow: 0 15px 35px #00000012;
        }

        .gd-icon {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #fff0e5;
          font-size: 30px;
          margin-bottom: 20px;
          transition: .3s;
        }

        .gd-card:hover .gd-icon {
          transform: rotate(8deg) scale(1.08);
        }

        .gd-card h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .gd-card p {
          color: var(--gray);
          font-size: 13px;
          line-height: 1.8;
        }

        /* PORTFOLIO */

        .gd-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .gd-portfolio-card {
          height: 270px;
          position: relative;
          overflow: hidden;
          border-radius: 13px;
          background: #eee;
        }

        .gd-portfolio-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .6s;
        }

        .gd-portfolio-card:hover img { transform: scale(1.12); }

        .gd-overlay {
          position: absolute;
          inset: 0;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
          background: linear-gradient(transparent,rgba(0,0,0,.85));
          opacity: 0;
          transition: .35s;
        }

        .gd-portfolio-card:hover .gd-overlay { opacity: 1; }
        .gd-overlay h3 { margin: 0 0 5px; font-size: 19px; }
        .gd-overlay p { margin: 0; font-size: 13px; }

        /* WHY CHOOSE US */

        .gd-why {
          background: var(--dark);
          color: white;
        }

        .gd-why .gd-heading p { color: #bbb; }

        .gd-why-card {
          height: 100%;
          padding: 28px;
          background: #2b3035;
          border-radius: 12px;
          border-left: 4px solid var(--orange);
          transition: .3s;
        }

        .gd-why-card:hover {
          transform: translateY(-8px);
          background: #343a40;
        }

        .gd-why-icon { font-size: 32px; }
        .gd-why-card h3 { font-size: 18px; margin: 13px 0; }
        .gd-why-card p { color: #bbb; font-size: 13px; line-height: 1.8; }

        /* PROCESS */

        .gd-process {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 16px;
        }

        .gd-process-card {
          height: 100%;
          padding: 25px 15px;
          border-radius: 12px;
          background: var(--light);
          text-align: center;
          transition: .3s;
        }

        .gd-process-card:hover {
          transform: translateY(-8px);
          background: #fff0e5;
        }

        .gd-process-card span {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--orange);
          color: white;
          font-weight: 800;
          margin: 0 auto 15px;
        }

        .gd-process-card h4 {
          font-size: 14px;
          line-height: 1.7;
        }

        /* CONTACT */

        .gd-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .gd-contact-info h2 {
          font-size: clamp(29px,4vw,40px);
          font-weight: 800;
          line-height: 1.3;
          margin: 18px 0;
        }

        .gd-contact-info p {
          color: var(--gray);
          line-height: 1.9;
          font-size: 14px;
        }

        .gd-contact-form {
          padding: 35px;
          border-radius: 14px;
          background: white;
          box-shadow: 0 10px 35px #0000000c;
        }

        .gd-contact-form h3 {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 22px;
        }

        .gd-contact-form input,
        .gd-contact-form select,
        .gd-contact-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 16px;
          border: 1px solid #ddd;
          border-radius: 7px;
          outline: none;
          font: inherit;
          font-size: 13px;
          transition: .3s;
        }

        .gd-contact-form input:focus,
        .gd-contact-form select:focus,
        .gd-contact-form textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3020;
        }

        .gd-contact-form textarea { resize: vertical; }

        .gd-contact-form button {
          width: 100%;
          margin-top: 0;
        }

        .gd-success {
          padding: 13px;
          margin-bottom: 18px;
          border-radius: 8px;
          background: #e8f7ed;
          color: #176b35;
          font-size: 13px;
        }

        /* CTA */

        .gd-cta {
          text-align: center;
          background: var(--orange);
          color: white;
        }

        .gd-cta h2 {
          font-size: clamp(28px,4vw,40px);
          font-weight: 800;
          margin: 18px 0;
        }

        .gd-cta p {
          max-width: 650px;
          margin: auto;
          line-height: 1.8;
          font-size: 14px;
        }

        .gd-cta .gd-btn {
          background: white;
          color: var(--orange);
        }

        .gd-cta .gd-btn:hover {
          background: var(--dark);
          color: white;
        }

        /* RESPONSIVE */

        @media(max-width: 1000px) {
          .gd-section { padding: 70px 5%; }
          .gd-grid,.gd-portfolio-grid { grid-template-columns: repeat(2,1fr); }
          .gd-process { grid-template-columns: repeat(3,1fr); }
          .gd-about,.gd-contact-grid { gap: 30px; }
        }

        @media(max-width: 650px) {
          .gd-section { padding: 60px 6%; }
          .gd-hero { min-height: 540px; padding: 80px 6%; }
          .gd-hero h1 { font-size: 36px; }
          .gd-hero p { font-size: 13px; }

          .gd-heading { margin-bottom: 35px; }
          .gd-heading h2 { font-size: 28px; }

          .gd-about,.gd-contact-grid { grid-template-columns: 1fr; }
          .gd-about-image { min-height: 280px; }

          .gd-grid,.gd-portfolio-grid { grid-template-columns: 1fr; }
          .gd-process { grid-template-columns: 1fr 1fr; }

          .gd-portfolio-card { height: 250px; }
          .gd-overlay { opacity: 1; }
          .gd-contact-form { padding: 25px 18px; }
        }

        @media(prefers-reduced-motion: reduce) {
          .graphic-page *, .graphic-page *::before, .graphic-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="gd-hero">
        <motion.div
          className="gd-hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
        >
          <small>CREATIVE GRAPHIC DESIGN AGENCY</small>
          <h1>
            Creative Designs That
            <span> Build Your Brand</span>
          </h1>
          <p>
            We create beautiful, unique and professional graphic designs
            that help your business stand out. From logo design to complete
            brand identity, we bring your ideas to life.
          </p>

          <motion.a
            href="#gd-contact"
            className="gd-btn"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: .96 }}
          >
            Start Your Project →
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="gd-section">
        <div className="gd-container gd-about">
          <Reveal>
            <motion.div variants={item} className="gd-about-image" />
          </Reveal>

          <Reveal>
            <motion.div variants={item} className="gd-about-content">
              <span className="gd-tag">ABOUT GRAPHIC DESIGNING</span>
              <h2>
                We Turn Your Ideas Into <span>Creative Designs</span>
              </h2>
              <p>
                Graphic designing is the art of creating visual content
                to communicate messages and ideas. It combines colors,
                images, typography and creative layouts.
              </p>
              <p>
                Our designers create attractive and meaningful designs
                that help businesses build brand recognition and connect
                with customers.
              </p>
              <a href="#gd-services" className="gd-btn">
                Explore Our Services →
              </a>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="gd-section gd-services" id="gd-services">
        <div className="gd-container">
          <Reveal>
            <motion.div variants={item} className="gd-heading">
              <span className="gd-tag">WHAT WE DO</span>
              <h2>Our Graphic Designing Services</h2>
              <p>
                Creative design solutions to make your business look
                professional and memorable.
              </p>
            </motion.div>
          </Reveal>

          <Reveal className="gd-grid">
            {services.map((s, i) => (
              <motion.div
                variants={item}
                whileHover={{ y: -8 }}
                className="gd-card"
                key={i}
              >
                <div className="gd-icon">{s[0]}</div>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="gd-section" id="gd-portfolio">
        <div className="gd-container">
          <Reveal>
            <motion.div variants={item} className="gd-heading">
              <span className="gd-tag">OUR CREATIVE WORK</span>
              <h2>Explore Our Design Categories</h2>
              <p>
                Different types of creative designs to help your brand
                make a strong impression.
              </p>
            </motion.div>
          </Reveal>

          <Reveal className="gd-portfolio-grid">
            {categories.map((category, i) => (
              <motion.div
                variants={item}
                whileHover={{ y: -7 }}
                className="gd-portfolio-card"
                key={i}
              >
                <img
                  src={`https://images.unsplash.com/${category[1]}?auto=format&fit=crop&w=800&q=85`}
                  alt={category[0]}
                  loading="lazy"
                />
                <div className="gd-overlay">
                  <h3>{category[0]}</h3>
                  <p>Creative Graphic Design</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="gd-section gd-why">
        <div className="gd-container">
          <Reveal>
            <motion.div variants={item} className="gd-heading">
              <span className="gd-tag">WHY CHOOSE US</span>
              <h2>What Makes Our Designs Different?</h2>
              <p>
                We combine creativity and professionalism to deliver
                quality design solutions.
              </p>
            </motion.div>
          </Reveal>

          <Reveal className="gd-grid">
            {reasons.map((r, i) => (
              <motion.div
                variants={item}
                whileHover={{ y: -8 }}
                className="gd-why-card"
                key={i}
              >
                <div className="gd-why-icon">{r[0]}</div>
                <h3>{r[1]}</h3>
                <p>{r[2]}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="gd-section">
        <div className="gd-container">
          <Reveal>
            <motion.div variants={item} className="gd-heading">
              <span className="gd-tag">OUR WORK PROCESS</span>
              <h2>How We Create Your Designs</h2>
              <p>
                Our simple process helps us understand your ideas and
                turn them into professional designs.
              </p>
            </motion.div>
          </Reveal>

          <Reveal className="gd-process">
            {process.map((p, i) => (
              <motion.div
                variants={item}
                whileHover={{ y: -7 }}
                className="gd-process-card"
                key={i}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h4>{p}</h4>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="gd-section gd-contact" id="gd-contact">
        <div className="gd-container gd-contact-grid">
          <Reveal>
            <motion.div variants={item} className="gd-contact-info">
              <span className="gd-tag">GET IN TOUCH</span>
              <h2>Have A Creative Project In Mind?</h2>
              <p>
                Let's work together to create something amazing.
                Share your design requirements and our team will help
                bring your vision to life.
              </p>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.form
              variants={item}
              className="gd-contact-form"
              onSubmit={handleSubmit}
            >
              <h3>Request A Design</h3>

              {submitted && (
                <div className="gd-success">
                  Thank you! Your request has been submitted.
                </div>
              )}

              <input
                type="text"
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

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Design Service</option>
                <option>Logo Design</option>
                <option>Social Media Design</option>
                <option>Brochure Design</option>
                <option>Brand Identity</option>
                <option>UI/UX Design</option>
                <option>Banner Design</option>
              </select>

              <textarea
                name="message"
                placeholder="Describe your design project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                className="gd-btn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: .97 }}
              >
                Submit Request →
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gd-section gd-cta">
        <Reveal>
          <motion.div variants={item} className="gd-container">
            <span className="gd-tag" style={{ color: "white" }}>
              LET'S CREATE SOMETHING AMAZING
            </span>
            <h2>Let's Make Your Brand Look Amazing!</h2>
            <p>
              Get professional graphic design solutions for your business
              and stand out from the competition.
            </p>
            <motion.a
              href="#gd-contact"
              className="gd-btn"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: .96 }}
            >
              Contact Us Today →
            </motion.a>
          </motion.div>
        </Reveal>
      </section>

    </div>
  );
};

export default GraphicDesigning;
