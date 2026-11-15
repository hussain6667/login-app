
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } }
};

const Reveal = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
  >
    {children}
  </motion.div>
);

const services = [
  {
    icon: "🎨",
    title: "Logo Design",
    desc: "Unique and professional logos that represent your brand identity.",
    details: "We create memorable and professional logos that communicate your brand's personality. Our designs help your business build recognition and stand out from competitors.",
    features: ["Custom Logo Concepts", "Modern Typography", "Brand Color Selection", "High Resolution Files"],
    color: "#fff0e5"
  },
  {
    icon: "📱",
    title: "Social Media Design",
    desc: "Creative posts, banners and advertisements for your business.",
    details: "Make your social media profiles more attractive with creative and engaging graphics. We design professional visuals that help your business connect with its audience.",
    features: ["Instagram Posts", "Facebook Covers", "Social Media Ads", "Story Designs"],
    color: "#e9f3ff"
  },
  {
    icon: "📄",
    title: "Brochure Design",
    desc: "Professional brochures and flyers to promote your services.",
    details: "Present your products and services through beautiful, informative and professionally designed brochures and flyers.",
    features: ["Business Brochures", "Promotional Flyers", "Product Catalogs", "Print Ready Designs"],
    color: "#f1eaff"
  },
  {
    icon: "💼",
    title: "Brand Identity",
    desc: "Build a consistent identity with colors, fonts and visual elements.",
    details: "Create a strong and consistent visual identity for your business. We combine typography, colors and visual elements to make your brand recognizable.",
    features: ["Brand Guidelines", "Color Palettes", "Typography Selection", "Business Stationery"],
    color: "#e9f8ef"
  },
  {
    icon: "🖥️",
    title: "UI/UX Design",
    desc: "Attractive and user-friendly website and application interfaces.",
    details: "We design modern and user-friendly interfaces that improve user experience and make websites and applications easier to use.",
    features: ["Website UI Design", "Mobile App Design", "Wireframes", "Interactive Prototypes"],
    color: "#fff4df"
  },
  {
    icon: "🖼️",
    title: "Banner Design",
    desc: "Creative promotional graphics for online and offline marketing.",
    details: "Promote your business with eye-catching banners that communicate your message clearly and professionally.",
    features: ["Website Banners", "Advertising Banners", "YouTube Banners", "Promotional Graphics"],
    color: "#ffeaf0"
  }
];

const categories = [
  {
    title: "Logo Design",
    image: "photo-1626785774573-4b799315345d"
  },
  {
    title: "Brand Identity",
    image: "photo-1634942536790-253d9f4b2c3b"
  },
  {
    title: "Social Media Posts",
    image: "photo-1611162617474-5b21e879e113"
  },
  {
    title: "Creative Posters",
    image: "photo-1541701494587-cb58502866ab"
  },
  {
    title: "UI/UX Design",
    image: "photo-1559028012-481c04fa702d"
  },
  {
    title: "Marketing Graphics",
    image: "photo-1558655146-9f40138edfeb"
  }
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

  const [selectedService, setSelectedService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Close modal with Escape key and prevent background scrolling
  useEffect(() => {
    if (!selectedService) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSubmitted(false);
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

  const goToContact = () => {
    setSelectedService(null);

    setFormData((prev) => ({
      ...prev,
      service: selectedService?.title || prev.service
    }));

    setTimeout(() => {
      document.getElementById("gd-contact")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 150);
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

        .graphic-page * {
          box-sizing: border-box;
        }

        .graphic-page a {
          text-decoration: none;
        }

        .gd-container {
          max-width: 1200px;
          margin: auto;
        }

        .gd-section {
          padding: 90px 8%;
        }

        .gd-tag {
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .gd-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 45px;
        }

        .gd-heading h2 {
          font-size: clamp(28px,4vw,40px);
          font-weight: 800;
          margin: 15px 0;
        }

        .gd-heading p {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.9;
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
          transform: translateY(-3px);
        }

        /* HERO */

        .gd-hero {
          min-height: 620px;
          padding: 100px 8%;
          display: flex;
          align-items: center;
          color: white;
          background:
            linear-gradient(100deg,rgba(15,15,15,.94),rgba(15,15,15,.55)),
            url("https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=75")
            center/cover;
        }

        .gd-hero-content {
          max-width: 750px;
        }

        .gd-hero small {
          color: #ffad70;
          letter-spacing: 3px;
          font-weight: 800;
        }

        .gd-hero h1 {
          font-size: clamp(36px,5vw,60px);
          line-height: 1.2;
          font-weight: 800;
          margin: 22px 0;
        }

        .gd-hero h1 span {
          color: var(--orange);
        }

        .gd-hero p {
          color: #ddd;
          line-height: 1.9;
          max-width: 620px;
          font-size: 15px;
        }

        /* ABOUT */

        .gd-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .gd-about-image {
          min-height: 420px;
          border-radius: 15px;
          background:
            url("https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=750&q=70")
            center/cover;
          box-shadow: 15px 15px 0 var(--orange);
          transition: .4s;
        }

        .gd-about-image:hover {
          transform: translateY(-7px);
        }

        .gd-about-content h2 {
          font-size: clamp(29px,4vw,40px);
          line-height: 1.3;
          font-weight: 800;
          margin: 18px 0;
        }

        .gd-about-content h2 span {
          color: var(--orange);
        }

        .gd-about-content p {
          color: var(--gray);
          line-height: 1.9;
          font-size: 14px;
        }

        /* SERVICES */

        .gd-services,
        .gd-contact {
          background: var(--light);
        }

        .gd-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 23px;
        }

        .gd-card {
          height: 100%;
          padding: 32px 26px;
          border-radius: 15px;
          background: white;
          border: 1px solid #eee;
          box-shadow: 0 5px 25px #00000008;
          transition: .35s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .gd-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 0;
          background: var(--orange);
          transition: .35s;
        }

        .gd-card:hover::before {
          width: 100%;
        }

        .gd-card:hover {
          transform: translateY(-10px);
          border-color: #e9b18b;
          box-shadow: 0 18px 40px #00000012;
        }

        .gd-icon {
          width: 68px;
          height: 68px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #fff0e5;
          font-size: 31px;
          margin-bottom: 20px;
          transition: .35s;
        }

        .gd-card:hover .gd-icon {
          transform: rotate(-8deg) scale(1.1);
        }

        .gd-card h3 {
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .gd-card p {
          color: var(--gray);
          font-size: 13px;
          line-height: 1.8;
        }

        .gd-card-link {
          display: inline-block;
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          margin-top: 12px;
        }

        /* SERVICE MODAL */

        .gd-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(10,12,15,.78);
          backdrop-filter: blur(7px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .gd-modal {
          position: relative;
          width: 100%;
          max-width: 580px;
          max-height: 88vh;
          overflow-y: auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 25px 80px #00000040;
        }

        .gd-modal-close {
          position: absolute;
          top: 17px;
          right: 18px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: #f1f1f1;
          color: #333;
          font-size: 23px;
          cursor: pointer;
          transition: .3s;
        }

        .gd-modal-close:hover {
          background: var(--orange);
          color: white;
          transform: rotate(90deg);
        }

        .gd-modal-icon {
          width: 75px;
          height: 75px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          font-size: 36px;
          margin-bottom: 22px;
        }

        .gd-modal h2 {
          font-size: 29px;
          font-weight: 800;
          margin: 10px 0 15px;
        }

        .gd-modal-description {
          color: #777;
          font-size: 14px;
          line-height: 1.9;
        }

        .gd-modal h4 {
          font-size: 16px;
          margin: 25px 0 15px;
          font-weight: 800;
        }

        .gd-modal-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .gd-modal-feature {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: #555;
          padding: 12px;
          border-radius: 9px;
          background: #f8f8f8;
        }

        .gd-modal-feature span {
          color: var(--orange);
          font-size: 16px;
          font-weight: 900;
        }

        .gd-modal .gd-btn {
          width: 100%;
          text-align: center;
        }

        /* PORTFOLIO */

        .gd-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .gd-portfolio-card {
          height: 280px;
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          background: linear-gradient(135deg,#eee,#ddd);
          box-shadow: 0 8px 25px #0000000b;
        }

        .gd-portfolio-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .gd-portfolio-card:hover img {
          transform: scale(1.09);
        }

        .gd-overlay {
          position: absolute;
          inset: 0;
          padding: 23px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
          background: linear-gradient(
            transparent 15%,
            rgba(0,0,0,.82)
          );
          opacity: 0;
          transition: .35s;
        }

        .gd-portfolio-card:hover .gd-overlay {
          opacity: 1;
        }

        .gd-overlay h3 {
          margin: 0 0 5px;
          font-size: 19px;
        }

        .gd-overlay p {
          margin: 0;
          font-size: 13px;
        }

        /* WHY CHOOSE US */

        .gd-why {
          background: var(--dark);
          color: white;
        }

        .gd-why .gd-heading p {
          color: #bbb;
        }

        .gd-why-card {
          height: 100%;
          padding: 30px;
          background: #2b3035;
          border-radius: 14px;
          border-left: 4px solid var(--orange);
          transition: .35s;
        }

        .gd-why-card:hover {
          transform: translateY(-9px);
          background: #343a40;
        }

        .gd-why-icon {
          font-size: 33px;
        }

        .gd-why-card h3 {
          font-size: 18px;
          margin: 14px 0;
        }

        .gd-why-card p {
          color: #bbb;
          font-size: 13px;
          line-height: 1.8;
        }

        /* PROCESS */

        .gd-process {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 16px;
        }

        .gd-process-card {
          height: 100%;
          padding: 27px 15px;
          border-radius: 13px;
          background: var(--light);
          text-align: center;
          transition: .3s;
        }

        .gd-process-card:hover {
          transform: translateY(-8px);
          background: #fff0e5;
        }

        .gd-process-card span {
          width: 50px;
          height: 50px;
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
          padding: 38px;
          border-radius: 16px;
          background: white;
          box-shadow: 0 12px 40px #0000000c;
        }

        .gd-contact-form h3 {
          font-size: 25px;
          font-weight: 800;
          margin: 0 0 25px;
        }

        .gd-contact-form input,
        .gd-contact-form select,
        .gd-contact-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 17px;
          border: 1px solid #e2e2e2;
          border-radius: 8px;
          outline: none;
          font: inherit;
          font-size: 13px;
          transition: .3s;
          background: white;
        }

        .gd-contact-form input:focus,
        .gd-contact-form select:focus,
        .gd-contact-form textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3020;
        }

        .gd-contact-form textarea {
          resize: vertical;
        }

        .gd-contact-form button {
          width: 100%;
          margin-top: 0;
        }

        .gd-success {
          padding: 14px;
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
          font-size: clamp(28px,4vw,41px);
          font-weight: 800;
          margin: 18px 0;
        }

        .gd-cta p {
          max-width: 650px;
          margin: auto;
          line-height: 1.9;
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
          .gd-section {
            padding: 75px 5%;
          }

          .gd-grid,
          .gd-portfolio-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .gd-process {
            grid-template-columns: repeat(3,1fr);
          }

          .gd-about,
          .gd-contact-grid {
            gap: 30px;
          }
        }

        @media(max-width: 650px) {
          .gd-section {
            padding: 60px 6%;
          }

          .gd-hero {
            min-height: 540px;
            padding: 80px 6%;
          }

          .gd-hero h1 {
            font-size: 36px;
          }

          .gd-hero p {
            font-size: 13px;
          }

          .gd-heading {
            margin-bottom: 35px;
          }

          .gd-heading h2 {
            font-size: 28px;
          }

          .gd-about,
          .gd-contact-grid {
            grid-template-columns: 1fr;
          }

          .gd-about-image {
            min-height: 290px;
          }

          .gd-grid,
          .gd-portfolio-grid {
            grid-template-columns: 1fr;
          }

          .gd-process {
            grid-template-columns: 1fr 1fr;
          }

          .gd-portfolio-card {
            height: 260px;
          }

          .gd-overlay {
            opacity: 1;
          }

          .gd-contact-form {
            padding: 25px 18px;
          }

          .gd-modal {
            padding: 30px 22px;
          }

          .gd-modal h2 {
            font-size: 24px;
          }

          .gd-modal-features {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 380px) {
          .gd-process {
            grid-template-columns: 1fr;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .graphic-page *,
          .graphic-page *::before,
          .graphic-page *::after {
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
          transition={{ duration: .7 }}
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
            whileHover={{ y: -4, scale: 1.04 }}
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
            <motion.div
              variants={item}
              className="gd-about-image"
            />
          </Reveal>

          <Reveal>
            <motion.div
              variants={item}
              className="gd-about-content"
            >
              <span className="gd-tag">
                ABOUT GRAPHIC DESIGNING
              </span>

              <h2>
                We Turn Your Ideas Into
                <span> Creative Designs</span>
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
                role="button"
                tabIndex={0}
                aria-label={`View ${s.title} details`}
                onClick={() => setSelectedService(s)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(s);
                  }
                }}
              >
                <div
                  className="gd-icon"
                  style={{ background: s.color }}
                >
                  {s.icon}
                </div>

                <h3>{s.title}</h3>

                <p>{s.desc}</p>

                <span className="gd-card-link">
                  Explore Details →
                </span>
              </motion.div>
            ))}
          </Reveal>

        </div>
      </section>

      {/* SERVICE MODAL */}

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="gd-modal-backdrop"
            onClick={() => setSelectedService(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="gd-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="gd-modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 45, scale: .92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: .94 }}
              transition={{ duration: .3, ease: "easeOut" }}
            >

              <button
                type="button"
                className="gd-modal-close"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
              >
                ×
              </button>

              <div
                className="gd-modal-icon"
                style={{ background: selectedService.color }}
              >
                {selectedService.icon}
              </div>

              <span className="gd-tag">
                OUR PROFESSIONAL SERVICES
              </span>

              <h2 id="gd-modal-title">
                {selectedService.title}
              </h2>

              <p className="gd-modal-description">
                {selectedService.details}
              </p>

              <h4>What's Included?</h4>

              <div className="gd-modal-features">
                {selectedService.features.map((feature, index) => (
                  <div className="gd-modal-feature" key={index}>
                    <span>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="gd-btn"
                onClick={goToContact}
              >
                Get This Service →
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=550&q=60`}
                  alt={category.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  fetchPriority={i < 2 ? "high" : "auto"}
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="gd-overlay">
                  <h3>{category.title}</h3>
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
            <motion.div
              variants={item}
              className="gd-contact-info"
            >
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
                  ✓ Thank you! Your request has been submitted.
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

                {services.map((s, i) => (
                  <option key={i} value={s.title}>
                    {s.title}
                  </option>
                ))}
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
          <motion.div
            variants={item}
            className="gd-container"
          >
            <span
              className="gd-tag"
              style={{ color: "white" }}
            >
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
