
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// REUSABLE SCROLL ANIMATION
const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}) => {
  const directions = {
    up: { y: 55, x: 0 },
    down: { y: -55, x: 0 },
    left: { x: 55, y: 0 },
    right: { x: -55, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
        scale: 0.96
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

const AboutUs = () => {
  const orange = 'rgb(214, 110, 30)';
  const dark = '#34383C';

  const image = require('./../Assets/C WORLD, Website, Slider (3).be26b794f41e4ef674f3.jpg');

  const services = [
    ['fa-code', 'Software Development', 'Custom software solutions for businesses.'],
    ['fa-globe', 'Website Development', 'Modern and responsive websites.'],
    ['fa-mobile-alt', 'Application Development', 'Smart and user-friendly applications.'],
    ['fa-shield-alt', 'Access Control', 'Advanced security and access systems.'],
    ['fa-video', 'CCTV Surveillance', 'Professional CCTV security solutions.'],
    ['fa-palette', 'Graphic Designing', 'Creative designs and brand identity.'],
    ['fa-bullhorn', 'Digital Marketing', 'Grow your online business presence.'],
    ['fa-network-wired', 'Networking', 'Reliable networking infrastructure.']
  ];

  const reasons = [
    ['fa-star', 'Quality Services', 'We focus on quality and professional work.'],
    ['fa-users', 'Expert Team', 'Dedicated professionals for your projects.'],
    ['fa-lightbulb', 'Modern Technology', 'Smart and innovative IT solutions.'],
    ['fa-headset', 'Customer Support', 'We value customer satisfaction.']
  ];

  const process = [
    ['01', 'Consultation', 'Understanding your business requirements.'],
    ['02', 'Planning', 'Creating the right project strategy.'],
    ['03', 'Development', 'Building your required IT solution.'],
    ['04', 'Delivery', 'Testing, delivery and support.']
  ];

  const purpose = [
    {
      icon: 'fa-bullseye',
      name: 'Our Mission',
      desc: 'To provide innovative, affordable and reliable IT solutions that help businesses solve problems, improve productivity and achieve their goals.'
    },
    {
      icon: 'fa-eye',
      name: 'Our Vision',
      desc: 'To become a trusted technology partner recognized for quality services, innovation and long-term relationships with our clients.'
    }
  ];

  const heading = {
    color: dark,
    fontSize: 'clamp(27px, 4vw, 40px)',
    fontWeight: '900',
    marginBottom: '15px',
    lineHeight: '1.25'
  };

  const paragraph = {
    color: '#777',
    fontSize: '14px',
    lineHeight: '1.9'
  };

  const title = (tag, headingText, desc) => (
    <Reveal>
      <div className="text-center mb-5 about-section-heading">
        <span className="about-tag">{tag}</span>
        <h2 style={{ ...heading, marginTop: '13px' }}>
          {headingText}
        </h2>
        <p style={{
          ...paragraph,
          maxWidth: '650px',
          margin: 'auto'
        }}>
          {desc}
        </p>
        <div className="about-line" />
      </div>
    </Reveal>
  );

  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              115deg,
              rgba(25,29,33,.96),
              rgba(52,56,60,.88),
              rgba(25,29,33,.95)
            ),
            url(${image})
          `
        }}
      >
        <div className="about-hero-glow glow-one" />
        <div className="about-hero-glow glow-two" />
        <div className="about-hero-circle circle-one" />
        <div className="about-hero-circle circle-two" />

        <motion.div
          className="about-floating-icon floating-one"
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <i className="fas fa-code" />
        </motion.div>

        <motion.div
          className="about-floating-icon floating-two"
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <i className="fas fa-laptop-code" />
        </motion.div>

        <div className="container about-hero-content">
          <Reveal>
            <span className="about-tag">
              WELCOME TO C WORLD
            </span>
          </Reveal>

          <Reveal delay={0.12}>
            <h1>
              About <span>Us</span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="about-hero-text">
              Your trusted partner for innovative IT services,
              smart technology and digital business solutions.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right" />
              <strong>About Us</strong>
            </div>
          </Reveal>

          <motion.div
            className="about-scroll-indicator"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <i className="fas fa-chevron-down" />
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="container py-5 my-4">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <Reveal direction="right">
              <span className="about-tag">WHO WE ARE</span>

              <h2 style={{ ...heading, marginTop: '15px' }}>
                We Transform Ideas Into Digital Solutions
              </h2>

              <p style={paragraph}>
                C WORLD is an IT solutions company based in Sargodha,
                Pakistan, committed to providing professional technology
                services for individuals, businesses and organizations.
              </p>

              <p style={paragraph}>
                We specialize in software development, website and
                application development, access control systems,
                CCTV surveillance, graphic designing, digital marketing
                and networking solutions.
              </p>

              <p style={paragraph}>
                Our goal is to understand our clients' needs and provide
                practical, reliable and effective technology solutions
                that support business growth.
              </p>

              <div className="about-feature-line">
                <i className="fas fa-check-circle" />
                <span>Professional and reliable IT solutions</span>
              </div>

              <div className="about-feature-line">
                <i className="fas fa-check-circle" />
                <span>Customer-focused technology services</span>
              </div>

              <Link to="/contact" className="about-btn">
                Contact Us <i className="fas fa-arrow-right" />
              </Link>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal direction="left" delay={0.15}>
              <motion.div
                className="about-image-box"
                whileHover={{ y: -10, rotate: 0.5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="about-image-shape" />
                <img src={image} alt="C WORLD IT Solutions" />

                <motion.div
                  className="about-image-caption"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="caption-icon">
                    <i className="fas fa-laptop-code" />
                  </div>
                  <div>
                    <h5>Technology With Purpose</h5>
                    <p>Complete IT solutions under one roof.</p>
                  </div>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="about-light-section">
        <div className="container">

          {title(
            'WHAT WE DO',
            'Our Services',
            'We provide complete IT solutions to help businesses build, secure and grow their digital presence.'
          )}

          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={item[1]}>
                <Reveal delay={(index % 4) * 0.08}>
                  <motion.div
                    className="about-card"
                    whileHover={{
                      y: -12,
                      scale: 1.025,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="about-icon">
                      <i className={`fas ${item[0]}`} />
                    </div>

                    <h6>{item[1]}</h6>
                    <p>{item[2]}</p>

                    <div className="about-card-arrow">
                      <i className="fas fa-arrow-right" />
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="container py-5 my-4">
        {title(
          'OUR PURPOSE',
          'Mission & Vision',
          'Our commitment to innovation, quality and customer satisfaction.'
        )}

        <div className="row g-4">
          {purpose.map((item, index) => (
            <div className="col-md-6" key={item.name}>
              <Reveal delay={index * 0.15}>
                <motion.div
                  className="about-purpose-card"
                  whileHover={{ y: -10, scale: 1.015 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="purpose-icon">
                    <i className={`fas ${item.icon}`} />
                  </div>

                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>

                  <div className="purpose-decoration">
                    <i className={`fas ${item.icon}`} />
                  </div>
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-light-section">
        <div className="container">

          {title(
            'WHY C WORLD',
            'Why Choose Us?',
            'We focus on quality, technical expertise and customer satisfaction.'
          )}

          <div className="row g-4">
            {reasons.map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={item[1]}>
                <Reveal delay={index * 0.12}>
                  <motion.div
                    className="about-card about-reason-card"
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="reason-icon">
                      <i className={`fas ${item[0]}`} />
                    </div>

                    <h5>{item[1]}</h5>
                    <p>{item[2]}</p>
                  </motion.div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="container py-5 my-4">
        {title(
          'OUR APPROACH',
          'Our Working Process',
          'We follow a simple and organized process to turn your ideas into successful solutions.'
        )}

        <div className="row g-4">
          {process.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item[0]}>
              <Reveal delay={index * 0.12}>
                <motion.div
                  className="about-process-card"
                  whileHover={{ y: -10, scale: 1.025 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="process-number">{item[0]}</div>
                  <div className="process-icon">
                    <i className={[
                      'fas fa-comments',
                      'fas fa-clipboard-list',
                      'fas fa-laptop-code',
                      'fas fa-rocket'
                    ][index]} />
                  </div>

                  <h5>{item[1]}</h5>
                  <p>{item[2]}</p>
                  <div className="process-bottom-line" />
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-cta-glow" />

        <div className="container position-relative">
          <Reveal>
            <span className="about-tag">LET'S WORK TOGETHER</span>

            <h2>
              Ready To Start Your <span>Project?</span>
            </h2>

            <p>
              Let's work together to create innovative technology
              solutions for your business.
            </p>

            <Link to="/contact" className="about-btn about-cta-btn">
              Get A Quote <i className="fas fa-arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .about-page {
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
          background: #fff;
          color: ${dark};
        }

        .about-page * {
          box-sizing: border-box;
        }

        .about-tag {
          color: ${orange};
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2.5px;
          display: inline-block;
        }

        /* HERO */

        .about-hero {
          min-height: 490px;
          padding: 105px 20px 95px;
          text-align: center;
          color: #fff;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .about-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(214,110,30,.10),
            transparent 80%
          );
          background-size: 200% 200%;
          animation: heroGradient 8s ease infinite;
        }

        @keyframes heroGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .about-hero-content {
          position: relative;
          z-index: 3;
        }

        .about-hero h1 {
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 950;
          margin: 20px 0;
          letter-spacing: -2px;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .about-hero h1 span {
          color: ${orange};
          text-shadow: 0 0 25px rgba(214,110,30,.3);
        }

        @keyframes titleGlow {
          from { text-shadow: 0 0 0 rgba(214,110,30,0); }
          to { text-shadow: 0 5px 30px rgba(214,110,30,.18); }
        }

        .about-hero-text {
          max-width: 650px;
          margin: auto;
          color: #e2e2e2;
          font-size: 15px;
          line-height: 1.9;
        }

        .about-breadcrumb {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          font-size: 14px;
        }

        .about-breadcrumb a {
          color: #fff;
          text-decoration: none;
          transition: color .3s;
        }

        .about-breadcrumb a:hover {
          color: ${orange};
        }

        .about-breadcrumb i,
        .about-breadcrumb strong {
          color: ${orange};
        }

        .about-hero-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          filter: blur(85px);
          opacity: .22;
          z-index: -1;
          animation: glowMove 7s ease-in-out infinite alternate;
        }

        .glow-one {
          background: ${orange};
          top: 0;
          left: 5%;
        }

        .glow-two {
          background: #f5a45f;
          bottom: -100px;
          right: 5%;
          animation-delay: 2s;
        }

        @keyframes glowMove {
          from { transform: translate(0, 0) scale(.8); }
          to { transform: translate(50px, 30px) scale(1.2); }
        }

        .about-hero-circle {
          position: absolute;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          z-index: -1;
          animation: circleRotate 18s linear infinite;
        }

        .circle-one {
          width: 320px;
          height: 320px;
          top: -160px;
          right: 12%;
        }

        .circle-two {
          width: 200px;
          height: 200px;
          bottom: -100px;
          left: 12%;
          animation-direction: reverse;
        }

        @keyframes circleRotate {
          to { transform: rotate(360deg); }
        }

        .about-floating-icon {
          position: absolute;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 16px;
          color: ${orange};
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
          font-size: 24px;
          z-index: 2;
        }

        .floating-one {
          top: 25%;
          left: 12%;
        }

        .floating-two {
          bottom: 22%;
          right: 12%;
        }

        .about-scroll-indicator {
          position: absolute;
          bottom: -65px;
          left: 50%;
          transform: translateX(-50%);
          color: ${orange};
          font-size: 18px;
        }

        /* SECTION HEADINGS */

        .about-section-heading {
          position: relative;
        }

        .about-line {
          width: 65px;
          height: 4px;
          background: ${orange};
          border-radius: 20px;
          margin: 20px auto 0;
          position: relative;
        }

        .about-line::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 20px;
          border-radius: 20px;
          background: #34383c;
          animation: lineMove 2s ease-in-out infinite alternate;
        }

        @keyframes lineMove {
          from { left: 0; }
          to { left: 45px; }
        }

        .about-light-section {
          background: linear-gradient(135deg, #f8f9fa, #fff8f2);
          padding: 85px 15px;
          position: relative;
        }

        /* BUTTON */

        .about-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: ${orange};
          color: #fff;
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          margin-top: 15px;
          position: relative;
          overflow: hidden;
          transition: all .35s ease;
          box-shadow: 0 7px 20px rgba(214,110,30,.2);
        }

        .about-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;
          background: linear-gradient(
            100deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
          );
          transform: skewX(-25deg);
          transition: left .6s ease;
        }

        .about-btn:hover::before {
          left: 140%;
        }

        .about-btn:hover {
          background: #b95717;
          color: #fff;
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(214,110,30,.35);
        }

        .about-btn i {
          transition: transform .3s ease;
        }

        .about-btn:hover i {
          transform: translateX(5px);
        }

        /* ABOUT FEATURES */

        .about-feature-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 12px 0;
          font-size: 13px;
          font-weight: 700;
          color: ${dark};
        }

        .about-feature-line i {
          color: ${orange};
          font-size: 17px;
        }

        /* IMAGE */

        .about-image-box {
          position: relative;
          background: #fff2e8;
          padding: 14px;
          border-radius: 22px;
          box-shadow: 0 18px 45px rgba(0,0,0,.10);
          transition: box-shadow .4s ease;
        }

        .about-image-box:hover {
          box-shadow: 0 25px 55px rgba(214,110,30,.18);
        }

        .about-image-box img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 14px;
          display: block;
        }

        .about-image-shape {
          position: absolute;
          width: 110px;
          height: 110px;
          border: 5px solid ${orange};
          border-radius: 20px;
          top: -18px;
          right: -18px;
          z-index: -1;
          animation: shapeFloat 4s ease-in-out infinite;
        }

        @keyframes shapeFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .about-image-caption {
          background: ${dark};
          color: #fff;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px;
          border-radius: 13px;
          margin-top: 14px;
        }

        .caption-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${orange};
          color: #fff;
          font-size: 20px;
        }

        .about-image-caption h5 {
          color: ${orange};
          font-weight: 800;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .about-image-caption p {
          margin: 0;
          font-size: 12px;
          color: #ddd;
        }

        /* SERVICE CARDS */

        .about-card {
          background: #fff;
          border: 1px solid #eee;
          padding: 30px 17px 25px;
          border-radius: 17px;
          text-align: center;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: border-color .35s, box-shadow .35s;
        }

        .about-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 0;
          background: ${orange};
          transition: width .4s ease;
        }

        .about-card:hover::before {
          width: 100%;
        }

        .about-card:hover {
          border-color: rgba(214,110,30,.4);
          box-shadow: 0 18px 35px rgba(0,0,0,.09);
        }

        .about-icon {
          width: 68px;
          height: 68px;
          background: #fff2e8;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          transition: all .4s ease;
        }

        .about-icon i {
          color: ${orange};
          font-size: 26px;
          transition: transform .5s ease, color .3s;
        }

        .about-card:hover .about-icon {
          background: ${orange};
          border-radius: 50%;
          transform: rotate(-8deg);
        }

        .about-card:hover .about-icon i {
          color: #fff;
          transform: rotateY(180deg) scale(1.1);
        }

        .about-card h6 {
          color: ${dark};
          font-weight: 900;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .about-card p {
          color: #777;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .about-card-arrow {
          color: ${orange};
          font-size: 13px;
          margin-top: 15px;
          opacity: 0;
          transform: translateY(8px);
          transition: all .3s ease;
        }

        .about-card:hover .about-card-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* MISSION AND VISION */

        .about-purpose-card {
          background: linear-gradient(135deg, #34383c, #22272b);
          border-bottom: 4px solid ${orange};
          border-radius: 18px;
          padding: 40px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: box-shadow .35s ease;
        }

        .about-purpose-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,.18);
        }

        .purpose-icon {
          width: 70px;
          height: 70px;
          background: rgba(214,110,30,.14);
          border: 1px solid rgba(214,110,30,.3);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: all .4s ease;
        }

        .about-purpose-card:hover .purpose-icon {
          background: ${orange};
          transform: rotate(-8deg) scale(1.05);
        }

        .purpose-icon i {
          color: ${orange};
          font-size: 30px;
          transition: color .3s;
        }

        .about-purpose-card:hover .purpose-icon i {
          color: #fff;
        }

        .about-purpose-card h3 {
          color: #fff;
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
        }

        .about-purpose-card p {
          color: #ccc;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .purpose-decoration {
          position: absolute;
          right: -25px;
          bottom: -45px;
          color: rgba(255,255,255,.045);
          font-size: 170px;
          transform: rotate(-15deg);
          transition: transform .5s ease;
        }

        .about-purpose-card:hover .purpose-decoration {
          transform: rotate(0deg) scale(1.1);
        }

        /* WHY CHOOSE US */

        .about-reason-card {
          padding: 32px 20px;
        }

        .reason-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #fff2e8;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 22px;
          transition: all .4s ease;
        }

        .reason-icon i {
          color: ${orange};
          font-size: 29px;
          transition: all .4s ease;
        }

        .about-reason-card:hover .reason-icon {
          background: ${orange};
          transform: rotateY(180deg);
        }

        .about-reason-card:hover .reason-icon i {
          color: #fff;
          transform: rotateY(180deg);
        }

        .about-reason-card h5 {
          color: ${dark};
          font-size: 17px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .about-reason-card p {
          font-size: 13px;
        }

        /* WORKING PROCESS */

        .about-process-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 15px;
          padding: 30px 23px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: box-shadow .35s ease;
        }

        .about-process-card:hover {
          box-shadow: 0 17px 35px rgba(0,0,0,.09);
        }

        .process-number {
          position: absolute;
          top: 12px;
          right: 18px;
          color: rgba(214,110,30,.12);
          font-size: 48px;
          font-weight: 950;
          transition: color .3s;
        }

        .about-process-card:hover .process-number {
          color: rgba(214,110,30,.25);
        }

        .process-icon {
          width: 58px;
          height: 58px;
          background: #fff2e8;
          color: ${orange};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 23px;
          margin-bottom: 22px;
          transition: all .4s ease;
        }

        .about-process-card:hover .process-icon {
          background: ${orange};
          color: #fff;
          transform: translateY(-5px) rotate(5deg);
        }

        .about-process-card h5 {
          color: ${dark};
          font-weight: 900;
          font-size: 17px;
          margin-bottom: 12px;
        }

        .about-process-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        .process-bottom-line {
          height: 3px;
          width: 35px;
          background: ${orange};
          border-radius: 10px;
          margin-top: 20px;
          transition: width .4s ease;
        }

        .about-process-card:hover .process-bottom-line {
          width: 75px;
        }

        /* CTA */

        .about-cta {
          background: linear-gradient(120deg, #252a2e, #34383c);
          padding: 90px 15px;
          text-align: center;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .about-cta::before,
        .about-cta::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          z-index: -1;
        }

        .about-cta::before {
          width: 350px;
          height: 350px;
          top: -180px;
          left: -80px;
          animation: circleRotate 20s linear infinite;
        }

        .about-cta::after {
          width: 280px;
          height: 280px;
          bottom: -150px;
          right: -50px;
          animation: circleRotate 25s linear infinite reverse;
        }

        .about-cta-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          background: ${orange};
          border-radius: 50%;
          filter: blur(100px);
          opacity: .2;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .about-cta h2 {
          color: #fff;
          font-size: clamp(28px, 4.5vw, 45px);
          font-weight: 950;
          margin: 20px 0;
        }

        .about-cta h2 span {
          color: ${orange};
        }

        .about-cta p {
          color: #ccc;
          font-size: 14px;
          max-width: 600px;
          margin: 0 auto 25px;
          line-height: 1.9;
        }

        .about-cta-btn {
          padding: 15px 35px;
        }

        /* RESPONSIVE */

        @media (max-width: 992px) {
          .about-floating-icon {
            opacity: .55;
          }

          .about-image-box img {
            height: 310px;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            min-height: 420px;
            padding: 80px 15px;
          }

          .about-hero h1 {
            letter-spacing: -1px;
          }

          .about-floating-icon {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .floating-one {
            left: 5%;
          }

          .floating-two {
            right: 5%;
          }

          .about-light-section {
            padding: 65px 12px;
          }

          .about-image-box img {
            height: 280px;
          }

          .about-purpose-card {
            padding: 30px;
          }

          .about-cta {
            padding: 70px 15px;
          }
        }

        @media (max-width: 576px) {
          .about-page .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .about-hero {
            min-height: 390px;
            padding: 75px 12px;
          }

          .about-hero-text {
            font-size: 13px;
          }

          .about-floating-icon {
            display: none;
          }

          .about-card {
            padding: 23px 10px;
            border-radius: 13px;
          }

          .about-card h6 {
            font-size: 12px;
          }

          .about-card p {
            font-size: 11px;
          }

          .about-icon {
            width: 55px;
            height: 55px;
            border-radius: 16px;
            margin-bottom: 15px;
          }

          .about-icon i {
            font-size: 21px;
          }

          .about-card-arrow {
            opacity: 1;
            transform: none;
          }

          .about-purpose-card {
            padding: 25px;
          }

          .about-purpose-card h3 {
            font-size: 21px;
          }

          .about-purpose-card p {
            font-size: 13px;
          }

          .about-process-card {
            padding: 23px;
          }

          .about-image-caption {
            padding: 14px;
          }

          .about-image-caption h5 {
            font-size: 13px;
          }

          .about-image-caption p {
            font-size: 11px;
          }

          .about-cta {
            padding: 60px 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
