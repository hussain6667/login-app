
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

import software from "./../Assets/ww (1).19187bed19d69ed0e694.png";
import website from "./../Assets/ww (2).2b90ebfb89541cd0a19b.png";
import application from "./../Assets/ww (3).262daaf8bef48163481c.png";
import accessControl from "./../Assets/ww (4).86eeb36aa87041caaa03.png";
import cctv from "./../Assets/ww (5).39aeb71e0b277cd633b2.png";
import graphic from "./../Assets/ww (6).e9397525de1559e9155f.png";
import digital from "./../Assets/ww (7).f0deb844e214f87925d6.png";
import networking from "./../Assets/ww (8).131aaa6a552a3ca6237f.png";

const services = [
  {
    id: 1,
    title: "Software",
    subtitle: "Development",
    image: software,
    description: "Powerful and customized software solutions for your business.",
    link: "/software-dev"
  },
  {
    id: 2,
    title: "Website",
    subtitle: "Development",
    image: website,
    description: "Modern, responsive and professional websites for your brand.",
    link: "/website-dev"
  },
  {
    id: 3,
    title: "Application",
    subtitle: "Development",
    image: application,
    description: "Smart mobile and web applications for modern businesses.",
    link: "/application-dev"
  },
  {
    id: 4,
    title: "Access Control",
    subtitle: "Systems",
    image: accessControl,
    description: "Smart access control and security solutions for organizations.",
    link: "/quote"
  },
  {
    id: 5,
    title: "CCTV",
    subtitle: "Solutions",
    image: cctv,
    description: "Professional CCTV installation and monitoring solutions.",
    link: "/quote"
  },
  {
    id: 6,
    title: "Graphic",
    subtitle: "Designing",
    image: graphic,
    description: "Creative graphic design and branding for your business.",
    link: "/graphic-designing"
  },
  {
    id: 7,
    title: "Digital",
    subtitle: "Marketing",
    image: digital,
    description: "Grow your business with effective digital marketing.",
    link: "/digital-marketing"
  },
  {
    id: 8,
    title: "Networking",
    subtitle: "Solutions",
    image: networking,
    description: "Reliable networking and IT infrastructure solutions.",
    link: "/networking"
  }
];

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "show",
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(
      ".dashboard-page .reveal"
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Project Request:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="dashboard-page">

      <style>{`

        .dashboard-page {
          --orange: #e97828;
          --orange-light: #ffab70;
          --dark: #111b2a;
          --muted: #748092;
          font-family: 'Montserrat', sans-serif;
          color: var(--dark);
          background: #fff;
          overflow: hidden;
        }

        .dashboard-page * {
          box-sizing: border-box;
        }

        .dashboard-page a {
          text-decoration: none;
        }

        .dashboard-page .container {
          max-width: 1200px;
        }

        /* ANIMATIONS */

        .dashboard-page .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .dashboard-page .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .dashboard-page .hero {
          min-height: 660px;
          display: flex;
          align-items: center;
          position: relative;
          background:
            radial-gradient(circle at 80% 30%, rgba(233,120,40,.22), transparent 32%),
            linear-gradient(120deg,#101927,#1c2b3d,#111b29);
          overflow: hidden;
        }

        .dashboard-page .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image:
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px);
          background-size: 45px 45px;
        }

        .dashboard-page .hero-content {
          position: relative;
          z-index: 2;
          padding: 90px 0;
          animation: heroEntry .8s ease both;
        }

        @keyframes heroEntry {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dashboard-page .hero-tag {
          display: inline-block;
          color: #ffb783;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .dashboard-page .hero h1 {
          color: white;
          font-size: clamp(42px,5vw,68px);
          font-weight: 850;
          line-height: 1.12;
          letter-spacing: -2px;
          margin-bottom: 25px;
        }

        .dashboard-page .hero h1 span {
          display: block;
          color: var(--orange-light);
        }

        .dashboard-page .hero-description {
          color: #bac5d1;
          max-width: 560px;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .dashboard-page .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .dashboard-page .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 25px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .dashboard-page .hero-primary {
          background: var(--orange);
          color: white;
        }

        .dashboard-page .hero-primary:hover {
          background: #ff9149;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(233,120,40,.3);
        }

        .dashboard-page .hero-secondary {
          border: 1px solid rgba(255,255,255,.3);
          color: white;
        }

        .dashboard-page .hero-secondary:hover {
          background: white;
          color: var(--dark);
        }

        .dashboard-page .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          margin-top: 50px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,.15);
        }

        .dashboard-page .stat strong {
          display: block;
          font-size: 25px;
          color: white;
          font-weight: 850;
        }

        .dashboard-page .stat span {
          color: #aeb9c6;
          font-size: 12px;
        }

        /* HERO VISUAL */

        .dashboard-page .hero-visual {
          min-height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .dashboard-page .orbit {
          width: 340px;
          height: 340px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 50%;
          position: absolute;
          animation: orbitRotate 25s linear infinite;
        }

        .dashboard-page .orbit::before,
        .dashboard-page .orbit::after {
          content: "";
          position: absolute;
          inset: 30px;
          border: 1px solid rgba(233,120,40,.25);
          border-radius: 50%;
        }

        .dashboard-page .orbit::after {
          inset: 65px;
        }

        @keyframes orbitRotate {
          to { transform: rotate(360deg); }
        }

        .dashboard-page .hero-logo {
          width: 155px;
          height: 155px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg,#ffad70,#c65b16);
          color: white;
          border-radius: 35px;
          font-size: 52px;
          font-weight: 900;
          box-shadow: 0 25px 65px rgba(233,120,40,.3);
          transform: rotate(-8deg);
          z-index: 2;
        }

        .dashboard-page .floating-card {
          position: absolute;
          z-index: 3;
          padding: 15px 19px;
          border-radius: 10px;
          color: white;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.15);
          backdrop-filter: blur(10px);
          animation: floating 3s ease-in-out infinite;
        }

        .dashboard-page .floating-card strong {
          font-size: 13px;
        }

        .dashboard-page .floating-one {
          top: 55px;
          right: 0;
        }

        .dashboard-page .floating-two {
          bottom: 55px;
          left: 0;
          animation-delay: 1s;
        }

        @keyframes floating {
          50% { transform: translateY(-12px); }
        }

        /* TRUST */

        .dashboard-page .trust-section {
          padding: 28px 0;
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .dashboard-page .trust-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .dashboard-page .trust-label {
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1px;
          color: #8a929e;
        }

        .dashboard-page .trust-item {
          font-size: 13px;
          font-weight: 800;
          color: #354154;
        }

        .dashboard-page .trust-item span {
          color: var(--orange);
          font-size: 19px;
          margin-right: 7px;
        }

        /* SERVICES */

        .dashboard-page .services-section {
          padding: 100px 0;
          background: #f7f8fa;
        }

        .dashboard-page .section-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 55px;
        }

        .dashboard-page .section-tag {
          color: var(--orange);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 3px;
        }

        .dashboard-page .section-heading h2 {
          font-size: 40px;
          font-weight: 850;
          color: #192536;
          margin: 13px 0;
        }

        .dashboard-page .section-heading h2 span {
          color: var(--orange);
        }

        .dashboard-page .section-heading p {
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
        }

        /* SERVICE CARDS */

        .dashboard-page .service-card {
          display: block;
          height: 100%;
          min-height: 340px;
          padding: 28px 23px;
          position: relative;
          overflow: hidden;
          border: 1px solid #e8ebef;
          border-radius: 15px;
          background: white;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        .dashboard-page .service-card::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          right: -80px;
          top: -80px;
          border-radius: 50%;
          background: rgba(233,120,40,.08);
          transition: transform .4s ease;
        }

        .dashboard-page .service-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 22px;
          right: 22px;
          height: 3px;
          background: linear-gradient(90deg,#e97828,#ffbd8d);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }

        .dashboard-page .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(233,120,40,.4);
          box-shadow: 0 20px 45px rgba(25,35,50,.10);
        }

        .dashboard-page .service-card:hover::before {
          transform: scale(2);
        }

        .dashboard-page .service-card:hover::after {
          transform: scaleX(1);
        }

        .dashboard-page .service-icon {
          width: 82px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff2e8;
          border-radius: 20px;
          margin-bottom: 23px;
          position: relative;
          z-index: 1;
          transition: .3s ease;
        }

        .dashboard-page .service-icon img {
          width: 58px;
          height: 58px;
          object-fit: contain;
        }

        .dashboard-page .service-card:hover .service-icon {
          transform: scale(1.08) rotate(-4deg);
        }

        .dashboard-page .service-card h5 {
          color: #192536;
          font-size: 17px;
          font-weight: 850;
          margin-bottom: 5px;
        }

        .dashboard-page .service-card h6 {
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .dashboard-page .service-card p {
          color: #7c8795;
          font-size: 12px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .dashboard-page .service-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #263346;
          font-size: 12px;
          font-weight: 850;
          transition: .25s ease;
        }

        .dashboard-page .service-card:hover .service-link {
          color: var(--orange);
          gap: 15px;
        }

        /* CTA */

        .dashboard-page .cta-section {
          padding: 80px 0;
          background:
            radial-gradient(circle at 90% 10%,rgba(233,120,40,.2),transparent 30%),
            linear-gradient(110deg,#111b29,#243448);
        }

        .dashboard-page .cta-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .dashboard-page .cta-content span {
          color: #ffb783;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .dashboard-page .cta-content h2 {
          color: white;
          font-size: 36px;
          font-weight: 850;
          margin: 12px 0;
        }

        .dashboard-page .cta-content p {
          color: #bac5d1;
          font-size: 13px;
          line-height: 1.9;
          max-width: 550px;
          margin: 0;
        }

        .dashboard-page .cta-button {
          flex-shrink: 0;
          display: inline-flex;
          padding: 16px 26px;
          color: white;
          background: var(--orange);
          border-radius: 6px;
          font-size: 13px;
          font-weight: 850;
          transition: .3s ease;
        }

        .dashboard-page .cta-button:hover {
          background: white;
          color: var(--dark);
          transform: translateY(-4px);
        }

        /* CONTACT */

        .dashboard-page .contact-section {
          padding: 100px 0;
          background: white;
        }

        .dashboard-page .contact-wrapper {
          display: grid;
          grid-template-columns: .85fr 1.4fr;
          gap: 28px;
        }

        .dashboard-page .contact-info {
          padding: 40px 30px;
          border-radius: 14px;
          color: white;
          background: linear-gradient(145deg,#1d2b3e,#101927);
        }

        .dashboard-page .contact-info h3 {
          font-size: 25px;
          font-weight: 850;
          margin-bottom: 15px;
        }

        .dashboard-page .contact-info > p {
          color: #b9c4d0;
          font-size: 13px;
          line-height: 1.9;
          margin-bottom: 35px;
        }

        .dashboard-page .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .dashboard-page .contact-icon {
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background: var(--orange);
          font-size: 19px;
        }

        .dashboard-page .contact-item h6 {
          font-size: 13px;
          font-weight: 850;
          margin-bottom: 5px;
        }

        .dashboard-page .contact-item p {
          font-size: 12px;
          color: #b9c4d0;
          margin: 0;
        }

        .dashboard-page .contact-form {
          padding: 35px;
          border: 1px solid #e9edf1;
          border-radius: 14px;
          box-shadow: 0 12px 35px rgba(20,30,45,.05);
        }

        .dashboard-page .contact-form label {
          display: block;
          font-size: 12px;
          font-weight: 800;
          color: #263346;
          margin-bottom: 9px;
        }

        .dashboard-page .contact-form .form-control,
        .dashboard-page .contact-form .form-select {
          min-height: 48px;
          padding: 12px 14px;
          border: 1px solid #e2e7ed;
          border-radius: 6px;
          background: #fafbfc;
          font-size: 13px;
          box-shadow: none;
        }

        .dashboard-page .contact-form textarea.form-control {
          min-height: 125px;
          resize: vertical;
        }

        .dashboard-page .contact-form .form-control:focus,
        .dashboard-page .contact-form .form-select:focus {
          border-color: var(--orange);
          background: white;
          box-shadow: 0 0 0 3px rgba(233,120,40,.1);
        }

        .dashboard-page .submit-btn {
          width: 100%;
          padding: 15px;
          border: 0;
          border-radius: 6px;
          color: white;
          background: var(--orange);
          font-size: 13px;
          font-weight: 850;
          cursor: pointer;
          transition: .3s ease;
        }

        .dashboard-page .submit-btn:hover {
          background: #192536;
          transform: translateY(-3px);
        }

        .dashboard-page .success-message {
          padding: 14px;
          margin-bottom: 20px;
          border-radius: 7px;
          background: #e0f7e9;
          color: #176b39;
          font-size: 13px;
          font-weight: 700;
        }

        /* BACK TO TOP */

        .dashboard-page .top-button {
          position: fixed;
          right: 23px;
          bottom: 23px;
          z-index: 9999;
          width: 48px;
          height: 48px;
          border: 0;
          border-radius: 12px;
          color: white;
          background: var(--orange);
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px);
          transition: .3s ease;
          box-shadow: 0 8px 22px rgba(0,0,0,.15);
        }

        .dashboard-page .top-button.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dashboard-page .top-button:hover {
          background: #172333;
        }

        /* RESPONSIVE */

        @media(max-width: 991px) {
          .dashboard-page .hero {
            min-height: auto;
          }

          .dashboard-page .hero-visual {
            min-height: 350px;
          }

          .dashboard-page .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 767px) {
          .dashboard-page .hero-content {
            padding: 75px 0 25px;
          }

          .dashboard-page .hero h1 {
            font-size: 42px;
          }

          .dashboard-page .hero-description {
            font-size: 13px;
          }

          .dashboard-page .hero-stats {
            gap: 23px;
          }

          .dashboard-page .hero-visual {
            min-height: 300px;
            margin-bottom: 35px;
          }

          .dashboard-page .orbit {
            width: 250px;
            height: 250px;
          }

          .dashboard-page .hero-logo {
            width: 120px;
            height: 120px;
            font-size: 40px;
          }

          .dashboard-page .trust-inner {
            justify-content: center;
          }

          .dashboard-page .trust-label {
            width: 100%;
            text-align: center;
          }

          .dashboard-page .trust-item {
            font-size: 11px;
          }

          .dashboard-page .services-section,
          .dashboard-page .contact-section {
            padding: 65px 0;
          }

          .dashboard-page .section-heading h2 {
            font-size: 30px;
          }

          .dashboard-page .service-card {
            min-height: 310px;
            padding: 22px 14px;
          }

          .dashboard-page .service-icon {
            width: 65px;
            height: 65px;
          }

          .dashboard-page .service-icon img {
            width: 48px;
            height: 48px;
          }

          .dashboard-page .service-card h5 {
            font-size: 14px;
          }

          .dashboard-page .service-card h6 {
            font-size: 11px;
          }

          .dashboard-page .service-card p {
            font-size: 10px;
          }

          .dashboard-page .service-link {
            font-size: 10px;
          }

          .dashboard-page .cta-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .dashboard-page .cta-content h2 {
            font-size: 28px;
          }

          .dashboard-page .contact-form {
            padding: 23px 16px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .dashboard-page *,
          .dashboard-page *::before,
          .dashboard-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

      {/* HERO */}

      <section className="hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="hero-content">

                <div className="hero-tag">
                  NEXT GENERATION IT SOLUTIONS
                </div>

                <h1>
                  Transform Your Business
                  <span>With Smart Technology.</span>
                </h1>

                <p className="hero-description">
                  We create powerful digital experiences through
                  innovative software, modern websites, smart
                  security and reliable IT solutions.
                </p>

                <div className="hero-buttons">
                  <a href="#services" className="hero-btn hero-primary">
                    Explore Services ↗
                  </a>

                  <a href="#contact" className="hero-btn hero-secondary">
                    Let's Talk →
                  </a>
                </div>

                <div className="hero-stats">
                  <div className="stat">
                    <strong>08+</strong>
                    <span>IT Services</span>
                  </div>

                  <div className="stat">
                    <strong>100%</strong>
                    <span>Client Focus</span>
                  </div>

                  <div className="stat">
                    <strong>24/7</strong>
                    <span>Digital Support</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual">

                <div className="orbit"></div>

                <div className="hero-logo">IT</div>

                <div className="floating-card floating-one">
                  <small>OUR TECHNOLOGY</small>
                  <br />
                  <strong>Smart Solutions</strong>
                </div>

                <div className="floating-card floating-two">
                  <small>✓ SYSTEM STATUS</small>
                  <br />
                  <strong>Innovation Active</strong>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="trust-section">
        <div className="container">
          <div className="trust-inner">

            <div className="trust-label">
              YOUR DIGITAL GROWTH PARTNER
            </div>

            <div className="trust-item">
              <span>✦</span> Creative Ideas
            </div>

            <div className="trust-item">
              <span>⌘</span> Smart Technology
            </div>

            <div className="trust-item">
              <span>✓</span> Reliable Solutions
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section" id="services">
        <div className="container">

          <div className="section-heading reveal">
            <span className="section-tag">WHAT WE DO</span>

            <h2>
              Our Premium <span>Services</span>
            </h2>

            <p>
              We combine creativity, technology and expertise
              to deliver professional digital solutions that
              help your business grow.
            </p>
          </div>

          <div className="row g-4">

            {services.map((service, index) => (
              <div
                className="col-6 col-md-4 col-lg-3 reveal"
                key={service.id}
                style={{
                  transitionDelay: `${Math.min(index * 50, 250)}ms`
                }}
              >

                <Link
                  to={service.link === "/quote" ? "#quote" : service.link}
                  onClick={(e) => {
                    if (service.link === "/quote") {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="service-card"
                >

                  <div className="service-icon">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  <h5>{service.title}</h5>

                  <h6>{service.subtitle}</h6>

                  <p>{service.description}</p>

                  <span className="service-link">
                    Discover Service <span>→</span>
                  </span>

                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container">

          <div className="cta-content">

            <div className="reveal">
              <span>LET'S CREATE SOMETHING AMAZING</span>

              <h2>Ready to Grow Your Business?</h2>

              <p>
                Your next big idea deserves the right technology.
                Let's turn your vision into reality.
              </p>
            </div>

            <div className="reveal">
              <a href="#contact" className="cta-button">
                Start Your Project ↗
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section" id="contact">
        <div className="container">

          <div className="section-heading reveal">
            <span className="section-tag">CONTACT OUR TEAM</span>

            <h2>
              Let's Discuss Your <span>Project</span>
            </h2>

            <p>
              Share your requirements with us and let's find
              the right solution for your business.
            </p>
          </div>

          <div className="contact-wrapper">

            <div className="contact-info reveal">

              <h3>Let's Talk About Your Project</h3>

              <p>
                Have a question or a new project? Our team is
                ready to help you with professional IT solutions.
              </p>

              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <h6>Email Us</h6>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <div>
                  <h6>Call Us</h6>
                  <p>+92 XXX XXXXXXX</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⌖</div>
                <div>
                  <h6>Our Location</h6>
                  <p>Pakistan</p>
                </div>
              </div>

            </div>

            <div className="contact-form reveal">

              {submitted && (
                <div className="success-message">
                  Your request has been submitted!
                  Connect your backend to receive actual requests.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label htmlFor="quote-name">Full Name</label>

                    <input
                      id="quote-name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="quote-email">Email Address</label>

                    <input
                      id="quote-email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="quote-phone">Phone Number</label>

                    <input
                      id="quote-phone"
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="quote-service">Select Service</label>

                    <select
                      id="quote-service"
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a service</option>

                      {services.map((service) => (
                        <option
                          key={service.id}
                          value={`${service.title} ${service.subtitle}`}
                        >
                          {service.title} {service.subtitle}
                        </option>
                      ))}

                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="quote-message">Project Details</label>

                    <textarea
                      id="quote-message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="submit-btn">
                      Send Project Request →
                    </button>
                  </div>

                </div>
              </form>

            </div>

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}

      <button
        className={`top-button ${showTopButton ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTopButton ? 0 : -1}
      >
        ↑
      </button>

    </div>
  );
}

export default Dashboard;
