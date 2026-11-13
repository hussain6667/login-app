
import React, { useState } from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Reveal = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.12 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.12 } },
    }}
  >
    {children}
  </motion.div>
);

const DigitalMarketing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const services = [
    ["📱", "Social Media Marketing", "Promote your business on Facebook, Instagram, LinkedIn and other social platforms."],
    ["🔍", "Search Engine Optimization", "Improve your website ranking on Google and attract organic visitors."],
    ["📢", "Google Ads & PPC", "Reach your target audience through paid advertising and generate quality leads."],
    ["✍️", "Content Marketing", "Create useful and engaging content that builds trust and attracts customers."],
    ["📧", "Email Marketing", "Connect with customers through professional email campaigns and updates."],
    ["📊", "Analytics & Reporting", "Track marketing performance and improve campaigns using data and reports."],
  ];

  const strategies = [
    ["01", "Brand Awareness", "Make your brand recognizable and build a strong online presence."],
    ["02", "Lead Generation", "Find potential customers interested in your products and services."],
    ["03", "Customer Engagement", "Build strong relationships through regular communication."],
    ["04", "Business Growth", "Use effective campaigns to increase sales and business growth."],
  ];

  const reasons = [
    ["🎯", "Targeted Marketing", "We reach the right audience for your business."],
    ["💡", "Creative Ideas", "We create unique campaigns that attract attention."],
    ["📈", "Growth Focused", "Our strategies focus on business growth and results."],
    ["🤝", "Expert Team", "Our team works together to achieve your goals."],
    ["📊", "Regular Reports", "We track campaigns and share performance updates."],
    ["⚡", "Latest Tools", "We use modern digital tools and marketing techniques."],
  ];

  const process = [
    "Understanding Your Business",
    "Research & Planning",
    "Strategy Development",
    "Campaign Execution",
    "Performance Analysis",
  ];

  return (
    <div className="digital-page">

      <style>{`
        .digital-page {
          --orange: rgb(214,110,30);
          --dark: #212529;
          --light: #f8f9fa;
          font-family: 'Montserrat', sans-serif;
          color: var(--dark);
          overflow: hidden;
        }

        .digital-page * {
          box-sizing: border-box;
        }

        .digital-page section {
          padding: 90px 8%;
        }

        .dm-container {
          max-width: 1200px;
          margin: auto;
        }

        .dm-label {
          color: var(--orange);
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 13px;
        }

        .dm-heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .dm-heading h2 {
          font-size: 36px;
          font-weight: 800;
          margin: 13px 0;
        }

        .dm-heading p {
          color: #777;
          line-height: 1.8;
          max-width: 650px;
          margin: auto;
        }

        /* HERO */

        .dm-hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          color: white;
          background:
            linear-gradient(110deg, rgba(15,15,15,.95), rgba(20,20,20,.65)),
            url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85")
            center/cover;
        }

        .dm-hero-content {
          max-width: 760px;
        }

        .dm-hero small {
          color: #ffad70;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .dm-hero h1 {
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.2;
          font-weight: 900;
          margin: 22px 0;
        }

        .dm-hero h1 span {
          color: var(--orange);
        }

        .dm-hero p {
          color: #ddd;
          max-width: 620px;
          line-height: 1.9;
        }

        .dm-btn {
          display: inline-block;
          padding: 15px 30px;
          background: var(--orange);
          color: white;
          border: 2px solid var(--orange);
          border-radius: 5px;
          text-decoration: none;
          font-weight: 700;
          cursor: pointer;
          margin-top: 22px;
          transition: .3s;
        }

        .dm-btn:hover {
          background: white;
          border-color: white;
          color: var(--orange);
          transform: translateY(-4px);
        }

        /* ABOUT */

        .dm-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .dm-about-image {
          min-height: 420px;
          border-radius: 12px;
          background:
            url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85")
            center/cover;
          box-shadow: 18px 18px 0 var(--orange);
        }

        .dm-about-content h2 {
          font-size: 36px;
          line-height: 1.3;
          margin: 15px 0;
        }

        .dm-about-content p {
          color: #777;
          line-height: 1.9;
        }

        /* SERVICES */

        .dm-services,
        .dm-contact {
          background: var(--light);
        }

        .dm-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .dm-service-card {
          background: white;
          padding: 32px 25px;
          border-radius: 12px;
          border-bottom: 3px solid transparent;
          box-shadow: 0 5px 25px rgba(0,0,0,.05);
          transition: .35s;
          height: 100%;
        }

        .dm-service-card:hover {
          border-color: var(--orange);
          box-shadow: 0 15px 35px rgba(0,0,0,.12);
        }

        .dm-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff0e5;
          border-radius: 12px;
          font-size: 30px;
          margin-bottom: 22px;
        }

        .dm-service-card h3 {
          font-size: 19px;
          margin-bottom: 12px;
        }

        .dm-service-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        /* STRATEGIES */

        .dm-strategy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .dm-strategy-card {
          padding: 30px 22px;
          border: 1px solid #eee;
          border-radius: 12px;
          transition: .35s;
          background: white;
          height: 100%;
        }

        .dm-strategy-card:hover {
          background: var(--orange);
          color: white;
          border-color: var(--orange);
        }

        .dm-strategy-card strong {
          color: var(--orange);
          font-size: 36px;
        }

        .dm-strategy-card:hover strong,
        .dm-strategy-card:hover p {
          color: white;
        }

        .dm-strategy-card h3 {
          font-size: 19px;
          margin: 15px 0;
        }

        .dm-strategy-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        /* WHY CHOOSE US */

        .dm-why {
          background: var(--dark);
          color: white;
        }

        .dm-why .dm-heading p {
          color: #bbb;
        }

        .dm-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .dm-why-item {
          background: #2b3035;
          padding: 28px;
          border-radius: 10px;
          border-left: 4px solid var(--orange);
          transition: .35s;
          height: 100%;
        }

        .dm-why-item:hover {
          background: #353b41;
          transform: translateY(-7px);
        }

        .dm-why-item h3 {
          margin: 12px 0;
        }

        .dm-why-item p {
          color: #bbb;
          line-height: 1.8;
          font-size: 14px;
        }

        /* PROCESS */

        .dm-process {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
        }

        .dm-process-item {
          background: var(--light);
          border-radius: 10px;
          text-align: center;
          padding: 25px 12px;
          transition: .3s;
        }

        .dm-process-item:hover {
          background: #fff0e5;
          transform: translateY(-6px);
        }

        .dm-process-item span {
          width: 50px;
          height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--orange);
          color: white;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .dm-process-item h4 {
          font-size: 14px;
          line-height: 1.6;
        }

        /* CONTACT */

        .dm-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .dm-contact-info h2 {
          font-size: 38px;
          line-height: 1.3;
          margin: 15px 0;
        }

        .dm-contact-info p {
          color: #777;
          line-height: 1.9;
        }

        .dm-form {
          background: white;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 8px 35px rgba(0,0,0,.07);
        }

        .dm-form h3 {
          margin: 0 0 22px;
        }

        .dm-form input,
        .dm-form select,
        .dm-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 17px;
          border: 1px solid #ddd;
          border-radius: 6px;
          outline: none;
          font-family: inherit;
          font-size: 14px;
          transition: .3s;
        }

        .dm-form input:focus,
        .dm-form select:focus,
        .dm-form textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px rgba(214,110,30,.1);
        }

        .dm-form textarea {
          min-height: 120px;
          resize: vertical;
        }

        .dm-form button {
          width: 100%;
          margin-top: 0;
        }

        .dm-success {
          background: #e8f8ed;
          color: #18743b;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 18px;
          font-size: 14px;
        }

        /* CTA */

        .dm-cta {
          text-align: center;
          background: var(--orange);
          color: white;
        }

        .dm-cta h2 {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .dm-cta p {
          line-height: 1.8;
        }

        .dm-cta .dm-btn {
          background: white;
          color: var(--orange);
          border-color: white;
        }

        .dm-cta .dm-btn:hover {
          background: var(--dark);
          color: white;
          border-color: var(--dark);
        }

        @media(max-width: 950px) {
          .dm-service-grid,
          .dm-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dm-strategy-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dm-process {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media(max-width: 650px) {
          .digital-page section {
            padding: 65px 6%;
          }

          .dm-hero {
            min-height: 550px;
          }

          .dm-heading h2,
          .dm-about-content h2 {
            font-size: 28px;
          }

          .dm-about-grid,
          .dm-contact-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .dm-about-image {
            min-height: 280px;
          }

          .dm-service-grid,
          .dm-strategy-grid,
          .dm-why-grid {
            grid-template-columns: 1fr;
          }

          .dm-process {
            grid-template-columns: repeat(2, 1fr);
          }

          .dm-contact-info h2 {
            font-size: 30px;
          }

          .dm-form {
            padding: 23px;
          }

          .dm-cta h2 {
            font-size: 28px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .digital-page *,
          .digital-page *::before,
          .digital-page *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="dm-hero">
        <div className="dm-container">
          <motion.div
            className="dm-hero-content"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <small>DIGITAL MARKETING AGENCY</small>

            <h1>
              Grow Your Business With
              <span> Digital Marketing</span>
            </h1>

            <p>
              We help businesses grow online through creative marketing
              strategies, social media campaigns, SEO and powerful
              digital advertising solutions.
            </p>

            <motion.a
              href="#dm-contact"
              className="dm-btn"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started Today →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="dm-container dm-about-grid">
          <Reveal>
            <motion.div
              className="dm-about-image"
              variants={item}
              whileHover={{ scale: 1.02 }}
            />
          </Reveal>

          <Reveal>
            <motion.div
              className="dm-about-content"
              variants={item}
            >
              <span className="dm-label">ABOUT DIGITAL MARKETING</span>
              <h2>Make Your Brand Stronger In The Digital World</h2>

              <p>
                Digital marketing is the process of promoting products
                and services through the internet and digital platforms.
                It helps businesses connect with their target audience.
              </p>

              <p>
                Our team creates effective marketing strategies to
                increase brand awareness, attract customers and improve
                your online business performance.
              </p>

              <motion.a
                href="#dm-services"
                className="dm-btn"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                Explore Services →
              </motion.a>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="dm-services" id="dm-services">
        <div className="dm-container">
          <Reveal>
            <motion.div className="dm-heading" variants={item}>
              <span className="dm-label">WHAT WE OFFER</span>
              <h2>Our Digital Marketing Services</h2>
              <p>
                We provide complete digital marketing solutions to
                help your business reach more people and grow faster.
              </p>
            </motion.div>

            <div className="dm-service-grid">
              {services.map((service, index) => (
                <motion.div
                  className="dm-service-card"
                  key={index}
                  variants={item}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="dm-icon">{service[0]}</div>
                  <h3>{service[1]}</h3>
                  <p>{service[2]}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STRATEGIES */}
      <section>
        <div className="dm-container">
          <Reveal>
            <motion.div className="dm-heading" variants={item}>
              <span className="dm-label">OUR STRATEGIES</span>
              <h2>Marketing That Delivers Results</h2>
              <p>
                We focus on the right marketing strategies to achieve
                your business goals.
              </p>
            </motion.div>

            <div className="dm-strategy-grid">
              {strategies.map((strategy, index) => (
                <motion.div
                  className="dm-strategy-card"
                  key={index}
                  variants={item}
                  whileHover={{ y: -8 }}
                >
                  <strong>{strategy[0]}</strong>
                  <h3>{strategy[1]}</h3>
                  <p>{strategy[2]}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="dm-why">
        <div className="dm-container">
          <Reveal>
            <motion.div className="dm-heading" variants={item}>
              <span className="dm-label">WHY CHOOSE US</span>
              <h2>Why Work With Our Team?</h2>
              <p>
                We focus on quality, creativity and measurable results.
              </p>
            </motion.div>

            <div className="dm-why-grid">
              {reasons.map((reason, index) => (
                <motion.div
                  className="dm-why-item"
                  key={index}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div style={{ fontSize: "30px" }}>{reason[0]}</div>
                  <h3>{reason[1]}</h3>
                  <p>{reason[2]}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="dm-container">
          <Reveal>
            <motion.div className="dm-heading" variants={item}>
              <span className="dm-label">HOW WE WORK</span>
              <h2>Our Digital Marketing Process</h2>
              <p>
                We follow a simple process to plan, execute and improve
                every marketing campaign.
              </p>
            </motion.div>

            <div className="dm-process">
              {process.map((processItem, index) => (
                <motion.div
                  className="dm-process-item"
                  key={index}
                  variants={item}
                  whileHover={{ y: -7, scale: 1.03 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{processItem}</h4>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="dm-contact" id="dm-contact">
        <div className="dm-container dm-contact-grid">
          <Reveal>
            <motion.div
              className="dm-contact-info"
              variants={item}
            >
              <span className="dm-label">CONTACT US</span>
              <h2>Let's Grow Your Business Together!</h2>
              <p>
                Ready to improve your online presence? Contact us and
                tell us about your business goals. Our team will help
                you find the right digital marketing solution.
              </p>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.form
              className="dm-form"
              onSubmit={handleSubmit}
              variants={item}
            >
              <h3>Request A Free Consultation</h3>

              {submitted && (
                <div className="dm-success" role="status">
                  Thank you! Your message has been submitted successfully.
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
                <option value="">Select Marketing Service</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="SEO">SEO</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Email Marketing">Email Marketing</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                className="dm-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message →
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="dm-cta">
        <div className="dm-container">
          <Reveal>
            <motion.div variants={item}>
              <h2>Ready To Take Your Business Online?</h2>
              <p>
                Let's create a digital marketing strategy that helps
                your business reach the next level.
              </p>

              <motion.a
                href="#dm-contact"
                className="dm-btn"
                whileHover={{ scale: 1.06, y: -4 }}
              >
                Contact Our Team →
              </motion.a>
            </motion.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketing;
