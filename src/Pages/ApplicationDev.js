
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// REUSABLE SCROLL ANIMATION
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.12 });

  useEffect(() => {
    controls.start(
      isInView
        ? {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.55,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          }
        : {
            opacity: 0,
            y: 35,
            scale: 0.97,
          }
    );
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const ApplicationDev = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appType: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      appType: "",
      message: "",
    });
  };

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => setSuccess(false), 5000);

    return () => clearTimeout(timer);
  }, [success]);

  const services = [
    {
      icon: "📱",
      title: "Android App Development",
      desc: "We develop user-friendly Android applications with modern features and smooth performance.",
    },
    {
      icon: "🍎",
      title: "iOS App Development",
      desc: "We create professional iPhone and iPad applications with attractive designs and great performance.",
    },
    {
      icon: "🌐",
      title: "Cross-Platform Apps",
      desc: "We build applications that work on both Android and iOS using a single codebase.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Applications",
      desc: "We develop online shopping apps with product listings, carts and secure checkout features.",
    },
    {
      icon: "💬",
      title: "Social Media Applications",
      desc: "We create interactive social applications with messaging, profiles and user engagement features.",
    },
    {
      icon: "🔧",
      title: "App Maintenance",
      desc: "We update applications, fix bugs and improve security and performance.",
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Kotlin",
    "Swift",
    "Java",
    "Firebase",
    "Node.js",
    "MongoDB",
  ];

  const reasons = [
    "Modern and attractive app designs",
    "Easy-to-use interfaces",
    "Fast and smooth performance",
    "Android and iOS compatibility",
    "Secure application development",
    "Regular updates and support",
  ];

  const steps = [
    {
      number: "01",
      title: "Planning",
      desc: "We understand your app idea, target audience and project requirements.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      desc: "We design attractive screens that are simple and easy to use.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Our developers build the application using modern technologies.",
    },
    {
      number: "04",
      title: "Testing",
      desc: "We test the application and fix bugs to ensure smooth performance.",
    },
    {
      number: "05",
      title: "Launch",
      desc: "We prepare and publish your application for users.",
    },
  ];

  const platforms = [
    {
      icon: "🤖",
      title: "Android Applications",
      desc: "Powerful Android apps designed for smartphones and tablets with smooth functionality.",
      tag: "Android Development",
    },
    {
      icon: "🍎",
      title: "iOS Applications",
      desc: "Professional applications for iPhone and iPad with a clean and modern user experience.",
      tag: "iOS Development",
    },
    {
      icon: "🔄",
      title: "Cross-Platform Apps",
      desc: "Applications that work across multiple platforms with shared development code.",
      tag: "Cross-Platform Development",
    },
  ];

  return (
    <div className="application-page">

      <style>{`
        .application-page {
          --app-primary: rgb(214,110,30);
          --app-dark: #212529;
          --app-gray: #777;
          font-family: "Montserrat", Arial, sans-serif;
          color: var(--app-dark);
          overflow: hidden;
        }

        .application-page * {
          box-sizing: border-box;
        }

        .app-tag {
          color: var(--app-primary);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .application-page section {
          position: relative;
        }

        /* HERO */

        .app-hero {
          min-height: 650px;
          padding: 100px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          background:
            radial-gradient(circle at 80% 50%, #ffe3ca, transparent 35%),
            #f8f9fa;
        }

        .app-hero-content {
          flex: 1;
          max-width: 620px;
        }

        .app-hero h1 {
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.2;
          font-weight: 900;
          margin: 20px 0;
        }

        .app-hero h1 span,
        .app-about h2 span,
        .app-why h2 span {
          color: var(--app-primary);
        }

        .app-hero-content > p,
        .app-about-content p,
        .app-why-content > p {
          color: var(--app-gray);
          font-size: 15px;
          line-height: 1.9;
        }

        .app-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 30px;
        }

        .app-btn {
          display: inline-block;
          padding: 15px 26px;
          background: var(--app-primary);
          color: white;
          border: 1px solid var(--app-primary);
          border-radius: 5px;
          text-decoration: none;
          font-weight: 700;
          transition: .3s ease;
        }

        .app-btn:hover {
          background: var(--app-dark);
          border-color: var(--app-dark);
          color: white;
        }

        .app-btn-outline {
          background: transparent;
          color: var(--app-dark);
        }

        /* PHONE MOCKUP */

        .app-hero-visual {
          flex: 1;
          min-height: 470px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, #ffe3ca, transparent 70%);
        }

        .app-phone {
          width: 260px;
          min-height: 440px;
          background: white;
          border: 8px solid #212529;
          border-radius: 35px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,.18);
          animation: phoneFloat 4s ease-in-out infinite;
        }

        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .app-phone-top {
          display: flex;
          justify-content: space-between;
          padding: 12px 18px;
          font-size: 11px;
          font-weight: bold;
          background: #f8f9fa;
        }

        .app-phone-content {
          padding: 18px;
        }

        .app-phone-logo {
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--app-primary);
          color: white;
          font-size: 25px;
          font-weight: bold;
          border-radius: 12px;
          margin-bottom: 18px;
        }

        .app-phone-content h3 {
          margin: 0 0 5px;
        }

        .app-phone-content > p {
          color: #888;
          font-size: 12px;
          margin-bottom: 20px;
        }

        .app-phone-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 8px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
          transition: .3s;
        }

        .app-phone-box:hover {
          transform: translateX(5px);
          border-color: var(--app-primary);
        }

        .app-phone-box > span {
          font-size: 23px;
        }

        .app-phone-box strong,
        .app-phone-box small {
          display: block;
          font-size: 11px;
        }

        .app-phone-box small {
          color: #888;
          margin-top: 4px;
        }

        .app-phone-button {
          width: 100%;
          background: var(--app-primary);
          color: white;
          border: none;
          padding: 12px;
          border-radius: 6px;
          margin-top: 12px;
          font-weight: bold;
        }

        .app-floating-card {
          position: absolute;
          bottom: 35px;
          right: 0;
          background: white;
          padding: 15px 18px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,.1);
          font-size: 12px;
          font-weight: bold;
          animation: floatCard 3s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .app-floating-card span {
          color: #28a745;
          margin-right: 7px;
          font-size: 17px;
        }

        /* ABOUT */

        .app-about {
          padding: 95px 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .app-about-visual {
          min-height: 370px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff4eb;
          border-radius: 15px;
        }

        .app-about-circle {
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: var(--app-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          animation: circlePulse 3s ease-in-out infinite;
        }

        @keyframes circlePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(214,110,30,.2); }
          50% { box-shadow: 0 0 0 18px rgba(214,110,30,0); }
        }

        .app-about-circle span {
          font-size: 100px;
        }

        .app-about-small-card {
          position: absolute;
          bottom: 20px;
          right: 15px;
          background: white;
          padding: 15px 20px;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0,0,0,.1);
        }

        .app-about-small-card p {
          margin: 5px 0 0;
          font-size: 12px;
          color: #777;
        }

        .app-about h2,
        .app-why h2 {
          font-size: 38px;
          line-height: 1.3;
          margin: 18px 0;
        }

        .app-text-link {
          display: inline-block;
          color: var(--app-primary);
          text-decoration: none;
          font-weight: bold;
          margin-top: 15px;
        }

        /* COMMON HEADING */

        .app-section-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .app-section-heading h2 {
          font-size: 36px;
          margin: 15px 0;
          font-weight: 800;
        }

        .app-section-heading p {
          color: var(--app-gray);
          line-height: 1.8;
        }

        /* SERVICES */

        .app-services {
          padding: 95px 8%;
          background: #f8f9fa;
        }

        .app-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .app-service-card {
          padding: 30px;
          background: white;
          border: 1px solid #eee;
          border-radius: 10px;
          transition: .3s ease;
          height: 100%;
        }

        .app-service-card:hover {
          border-color: var(--app-primary);
          box-shadow: 0 15px 35px rgba(0,0,0,.08);
        }

        .app-service-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff0e4;
          border-radius: 10px;
          font-size: 28px;
          margin-bottom: 20px;
          transition: .3s;
        }

        .app-service-card:hover .app-service-icon {
          transform: rotate(8deg) scale(1.08);
        }

        .app-service-card h3 {
          font-size: 19px;
          margin-bottom: 12px;
        }

        .app-service-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        .app-service-card a {
          display: inline-block;
          margin-top: 10px;
          color: var(--app-primary);
          text-decoration: none;
          font-weight: bold;
        }

        /* PLATFORMS */

        .app-platforms {
          padding: 95px 8%;
        }

        .app-platform-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .app-platform-card {
          text-align: center;
          padding: 35px 25px;
          border: 1px solid #eee;
          border-radius: 10px;
          transition: .3s;
          height: 100%;
        }

        .app-platform-card:hover {
          border-color: var(--app-primary);
          box-shadow: 0 12px 30px rgba(0,0,0,.08);
        }

        .app-platform-icon {
          font-size: 55px;
          margin-bottom: 20px;
        }

        .app-platform-card h3 {
          margin-bottom: 12px;
        }

        .app-platform-card p {
          color: #777;
          line-height: 1.7;
          font-size: 14px;
        }

        .app-platform-card > span {
          display: inline-block;
          margin-top: 12px;
          padding: 8px 14px;
          background: #fff0e4;
          color: var(--app-primary);
          font-size: 12px;
          font-weight: bold;
          border-radius: 20px;
        }

        /* TECHNOLOGIES */

        .app-tech {
          padding: 95px 8%;
          background: #f8f9fa;
        }

        .app-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .app-tech-card {
          text-align: center;
          padding: 25px;
          background: white;
          border: 1px solid #eee;
          border-radius: 8px;
          font-weight: bold;
          transition: .3s;
        }

        .app-tech-card span {
          color: var(--app-primary);
          margin-right: 8px;
        }

        .app-tech-card:hover {
          background: var(--app-dark);
          color: white;
        }

        /* WHY CHOOSE US */

        .app-why {
          padding: 95px 8%;
          background: var(--app-dark);
          color: white;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 60px;
          align-items: center;
        }

        .app-why-content > p {
          color: #ccc;
        }

        .app-reasons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 30px;
        }

        .app-reason {
          display: flex;
          gap: 10px;
          font-size: 14px;
          line-height: 1.6;
          transition: .3s;
        }

        .app-reason:hover {
          transform: translateX(5px);
        }

        .app-reason span {
          color: #ff9a43;
          font-weight: bold;
          font-size: 18px;
        }

        .app-why-box {
          padding: 45px 30px;
          background: var(--app-primary);
          border-radius: 12px;
          text-align: center;
          transition: .3s;
        }

        .app-why-box:hover {
          transform: translateY(-8px);
        }

        .app-why-icon {
          font-size: 65px;
          margin-bottom: 20px;
        }

        .app-why-box h3 {
          font-size: 25px;
          line-height: 1.4;
        }

        .app-why-box p {
          line-height: 1.7;
        }

        /* PROCESS */

        .app-process {
          padding: 95px 8%;
        }

        .app-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .app-process-card {
          padding: 25px 20px;
          border: 1px solid #eee;
          border-radius: 8px;
          transition: .3s;
          height: 100%;
        }

        .app-process-card:hover {
          border-color: var(--app-primary);
          box-shadow: 0 10px 25px rgba(0,0,0,.06);
        }

        .app-step-number {
          color: var(--app-primary);
          font-size: 30px;
          font-weight: 800;
        }

        .app-process-card h3 {
          margin: 15px 0 10px;
        }

        .app-process-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.7;
        }

        /* CTA */

        .app-cta {
          padding: 85px 8%;
          text-align: center;
          color: white;
          background: var(--app-primary);
        }

        .app-cta > span {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: bold;
        }

        .app-cta h2 {
          font-size: 38px;
          margin: 18px 0;
        }

        .app-cta p {
          max-width: 600px;
          margin: 0 auto 25px;
          line-height: 1.8;
        }

        .app-cta-btn {
          background: var(--app-dark);
          border-color: var(--app-dark);
        }

        .app-cta-btn:hover {
          background: white;
          color: var(--app-dark);
          border-color: white;
        }

        /* CONTACT */

        .app-contact {
          padding: 95px 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          background: #f8f9fa;
        }

        .app-contact-info h2 {
          font-size: 38px;
          line-height: 1.3;
          margin: 18px 0;
        }

        .app-contact-info > p {
          color: #777;
          line-height: 1.8;
        }

        .app-contact-detail {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-top: 25px;
        }

        .app-contact-detail > span {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff0e4;
          color: var(--app-primary);
          border-radius: 50%;
          font-size: 20px;
        }

        .app-contact-detail h4,
        .app-contact-detail p {
          margin: 4px 0;
        }

        .app-contact-detail p {
          color: #777;
          font-size: 14px;
        }

        .app-contact-form {
          padding: 35px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 35px rgba(0,0,0,.06);
        }

        .app-contact-form h3 {
          font-size: 25px;
          margin-bottom: 25px;
        }

        .app-contact-form input,
        .app-contact-form select,
        .app-contact-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 16px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: none;
          font-size: 14px;
          font-family: inherit;
          transition: .3s;
        }

        .app-contact-form input:focus,
        .app-contact-form select:focus,
        .app-contact-form textarea:focus {
          border-color: var(--app-primary);
          box-shadow: 0 0 0 3px rgba(214,110,30,.1);
        }

        .app-contact-form textarea {
          resize: vertical;
        }

        .app-contact-form button {
          width: 100%;
          padding: 15px;
          background: var(--app-primary);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: .3s;
        }

        .app-contact-form button:hover {
          background: var(--app-dark);
        }

        .app-form-success {
          padding: 13px;
          background: #e8f7ed;
          color: #176b35;
          border-radius: 6px;
          margin-bottom: 18px;
          font-size: 13px;
        }

        /* TABLET */

        @media(max-width: 992px) {
          .app-hero {
            padding: 80px 5%;
          }

          .app-hero h1 {
            font-size: 42px;
          }

          .app-service-grid,
          .app-platform-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .app-process-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .app-tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .app-about,
          .app-why,
          .app-contact {
            padding: 75px 5%;
            gap: 35px;
          }
        }

        /* MOBILE */

        @media(max-width: 600px) {
          .app-hero {
            flex-direction: column;
            padding: 75px 6% 55px;
            text-align: center;
          }

          .app-hero h1 {
            font-size: 34px;
          }

          .app-hero-buttons {
            justify-content: center;
          }

          .app-hero-visual {
            width: 100%;
            min-height: 440px;
          }

          .app-floating-card {
            right: 0;
            bottom: 10px;
          }

          .app-about,
          .app-why,
          .app-contact {
            grid-template-columns: 1fr;
            padding: 65px 6%;
          }

          .app-about h2,
          .app-why h2,
          .app-contact-info h2 {
            font-size: 29px;
          }

          .app-about-visual {
            min-height: 280px;
          }

          .app-about-circle {
            width: 180px;
            height: 180px;
          }

          .app-about-circle span {
            font-size: 75px;
          }

          .app-services,
          .app-platforms,
          .app-tech,
          .app-process {
            padding: 65px 6%;
          }

          .app-section-heading h2 {
            font-size: 28px;
          }

          .app-service-grid,
          .app-platform-grid {
            grid-template-columns: 1fr;
          }

          .app-tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .app-tech-card {
            padding: 18px 10px;
            font-size: 13px;
          }

          .app-reasons,
          .app-process-grid {
            grid-template-columns: 1fr;
          }

          .app-cta {
            padding: 65px 6%;
          }

          .app-cta h2 {
            font-size: 29px;
          }

          .app-contact-form {
            padding: 25px 18px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .application-page *,
          .application-page *::before,
          .application-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="app-hero">

        <motion.div
          className="app-hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="app-tag">APPLICATION DEVELOPMENT</span>

          <h1>
            We Build Powerful
            <span> Mobile Applications</span>
          </h1>

          <p>
            Turn your ideas into powerful mobile applications.
            We create modern, secure and user-friendly apps
            that help your business grow.
          </p>

          <div className="app-hero-buttons">
            <motion.a
              href="#app-services"
              className="app-btn"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Explore Services →
            </motion.a>

            <motion.a
              href="#app-contact"
              className="app-btn app-btn-outline"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="app-hero-visual"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="app-phone">
            <div className="app-phone-top">
              <span>9:41</span>
              <span>● ● ●</span>
            </div>

            <div className="app-phone-content">
              <div className="app-phone-logo">A</div>

              <h3>Welcome Back!</h3>
              <p>Your Business App</p>

              <div className="app-phone-box">
                <span>📊</span>
                <div>
                  <strong>Dashboard</strong>
                  <small>Manage your business</small>
                </div>
              </div>

              <div className="app-phone-box">
                <span>🛍️</span>
                <div>
                  <strong>My Products</strong>
                  <small>Explore your products</small>
                </div>
              </div>

              <div className="app-phone-box">
                <span>👤</span>
                <div>
                  <strong>My Profile</strong>
                  <small>Manage your account</small>
                </div>
              </div>

              <button className="app-phone-button">
                Get Started
              </button>
            </div>
          </div>

          <div className="app-floating-card">
            <span>✓</span>
            Modern App Experience
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="app-about">
        <Reveal>
          <motion.div
            className="app-about-visual"
            whileHover={{ scale: 1.02 }}
          >
            <div className="app-about-circle">
              <span>📲</span>
            </div>

            <div className="app-about-small-card">
              <strong>Smart Solutions</strong>
              <p>Designed for your business</p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="app-about-content">
            <span className="app-tag">ABOUT OUR SERVICE</span>

            <h2>
              Transform Your Ideas Into
              <span> Mobile Applications</span>
            </h2>

            <p>
              Application development is the process of creating
              software applications for mobile devices such as
              smartphones and tablets.
            </p>

            <p>
              We develop applications that provide useful features,
              simple navigation, attractive designs and smooth
              performance for users.
            </p>

            <motion.a
              href="#app-services"
              className="app-text-link"
              whileHover={{ x: 6 }}
            >
              Discover Our Services →
            </motion.a>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="app-services" id="app-services">
        <Reveal>
          <div className="app-section-heading">
            <span className="app-tag">WHAT WE OFFER</span>
            <h2>Our Application Development Services</h2>
            <p>
              We provide complete mobile application solutions
              for different business needs.
            </p>
          </div>
        </Reveal>

        <div className="app-service-grid">
          {services.map((service, index) => (
            <Reveal delay={(index % 3) * 0.1} key={service.title}>
              <motion.div
                className="app-service-card"
                whileHover={{ y: -9, scale: 1.02 }}
              >
                <div className="app-service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <a href="#app-contact">Learn More →</a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="app-platforms">
        <Reveal>
          <div className="app-section-heading">
            <span className="app-tag">SUPPORTED PLATFORMS</span>
            <h2>Applications For Every Platform</h2>
            <p>
              We develop applications for the platforms
              your customers use every day.
            </p>
          </div>
        </Reveal>

        <div className="app-platform-grid">
          {platforms.map((platform, index) => (
            <Reveal delay={index * 0.12} key={platform.title}>
              <motion.div
                className="app-platform-card"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="app-platform-icon">
                  {platform.icon}
                </div>

                <h3>{platform.title}</h3>
                <p>{platform.desc}</p>
                <span>{platform.tag}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="app-tech">
        <Reveal>
          <div className="app-section-heading">
            <span className="app-tag">OUR TECHNOLOGIES</span>
            <h2>Technologies We Use</h2>
            <p>
              We use modern tools and technologies to build
              reliable mobile applications.
            </p>
          </div>
        </Reveal>

        <div className="app-tech-grid">
          {technologies.map((tech, index) => (
            <Reveal delay={(index % 4) * 0.08} key={tech}>
              <motion.div
                className="app-tech-card"
                whileHover={{ y: -6, scale: 1.04 }}
              >
                <span>✦</span>
                {tech}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="app-why">
        <Reveal>
          <div className="app-why-content">
            <span className="app-tag">WHY CHOOSE US</span>

            <h2>
              Why Choose Our
              <span> Application Development Services?</span>
            </h2>

            <p>
              We focus on creating applications that solve
              real problems and provide a great experience
              to your customers.
            </p>

            <div className="app-reasons">
              {reasons.map((reason, index) => (
                <Reveal delay={index * 0.08} key={reason}>
                  <motion.div
                    className="app-reason"
                    whileHover={{ x: 5 }}
                  >
                    <span>✓</span>
                    {reason}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.div
            className="app-why-box"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="app-why-icon">🚀</div>
            <h3>Build Your Next Great App With Us</h3>
            <p>
              Make your business more accessible with a
              professional mobile application.
            </p>
          </motion.div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="app-process">
        <Reveal>
          <div className="app-section-heading">
            <span className="app-tag">HOW WE WORK</span>
            <h2>Our Application Development Process</h2>
            <p>
              We follow a step-by-step process to develop
              successful mobile applications.
            </p>
          </div>
        </Reveal>

        <div className="app-process-grid">
          {steps.map((step, index) => (
            <Reveal delay={index * 0.1} key={step.number}>
              <motion.div
                className="app-process-card"
                whileHover={{ y: -7 }}
              >
                <span className="app-step-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="app-cta">
        <Reveal>
          <motion.div variants={{}}>
            <span>LET'S BUILD YOUR APPLICATION</span>

            <h2>Have An Amazing App Idea?</h2>

            <p>
              Let's turn your idea into a professional mobile
              application that helps your business grow.
            </p>

            <motion.a
              href="#app-contact"
              className="app-btn app-cta-btn"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Start Your Project →
            </motion.a>
          </motion.div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="app-contact" id="app-contact">
        <Reveal>
          <div className="app-contact-info">
            <span className="app-tag">GET IN TOUCH</span>

            <h2>
              Let's Discuss Your Application Project
            </h2>

            <p>
              Have an application idea? Tell us about your
              requirements and let's create something amazing.
            </p>

            <div className="app-contact-detail">
              <span>✉</span>
              <div>
                <h4>Email Us</h4>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="app-contact-detail">
              <span>📱</span>
              <div>
                <h4>Our Services</h4>
                <p>Android, iOS & Cross-Platform Apps</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.form
            className="app-contact-form"
            onSubmit={handleSubmit}
            whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,.09)" }}
          >
            <h3>Get A Free Quote</h3>

            {success && (
              <motion.div
                className="app-form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your application project request has been submitted successfully!
              </motion.div>
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
              name="appType"
              value={formData.appType}
              onChange={handleChange}
              required
            >
              <option value="">Select Application Type</option>
              <option value="Android App">Android Application</option>
              <option value="iOS App">iOS Application</option>
              <option value="Cross Platform App">Cross-Platform App</option>
              <option value="E-Commerce App">E-Commerce App</option>
              <option value="Other">Other Application</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your application idea..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit Message →
            </motion.button>
          </motion.form>
        </Reveal>
      </section>

    </div>
  );
};

export default ApplicationDev;
