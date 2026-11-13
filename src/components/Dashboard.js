
import React, { useState, useEffect } from "react";
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
    description: "Custom software solutions designed to make your business smarter."
  },
  {
    id: 2,
    title: "Website",
    subtitle: "Development",
    image: website,
    description: "Modern, responsive and professional websites for your brand."
  },
  {
    id: 3,
    title: "Application",
    subtitle: "Development",
    image: application,
    description: "Powerful mobile and web applications for modern businesses."
  },
  {
    id: 4,
    title: "Access Control",
    subtitle: "Systems",
    image: accessControl,
    description: "Smart security and access control systems for your organization."
  },
  {
    id: 5,
    title: "CCTV",
    subtitle: "Solutions",
    image: cctv,
    description: "Professional CCTV installation and monitoring solutions."
  },
  {
    id: 6,
    title: "Graphic",
    subtitle: "Designing",
    image: graphic,
    description: "Creative graphic design and branding for your business."
  },
  {
    id: 7,
    title: "Digital",
    subtitle: "Marketing",
    image: digital,
    description: "Grow your business with effective digital marketing."
  },
  {
    id: 8,
    title: "Networking",
    subtitle: "Solutions",
    image: networking,
    description: "Reliable networking and IT infrastructure solutions."
  }
];

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  // SCROLL REVEAL
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".dashboard [data-animate]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "is-visible",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -25px 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // OPTIMIZED SCROLL BUTTON
  useEffect(() => {
    let frame;

    const handleScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        setShowTopButton(window.scrollY > 350);
        frame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", formData);

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
    <div className="dashboard">

      <style>{`

        .dashboard {
          --primary: #d66e1e;
          --orange: #ff9d52;
          --dark: #111722;
          --navy: #182333;
          --muted: #78818d;
          font-family: "Montserrat", sans-serif;
          background: #fff;
          color: var(--dark);
          overflow: hidden;
        }

        .dashboard *,
        .dashboard *::before,
        .dashboard *::after {
          box-sizing: border-box;
        }

        .dashboard a {
          text-decoration: none;
        }

        /* REVEAL ANIMATION */

        .dashboard [data-animate] {
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity .45s ease,
            transform .45s cubic-bezier(.2,.8,.2,1);
        }

        .dashboard [data-animate="left"] {
          transform: translateX(-25px);
        }

        .dashboard [data-animate="right"] {
          transform: translateX(25px);
        }

        .dashboard [data-animate].is-visible {
          opacity: 1;
          transform: translate(0,0);
        }

        /* HERO */

        .dashboard .hero-section {
          min-height: 690px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 78% 45%, rgba(214,110,30,.22), transparent 36%),
            radial-gradient(ellipse at 5% 100%, rgba(38,91,130,.2), transparent 40%),
            linear-gradient(115deg, #0d1420, #172536 55%, #101722);
        }

        .dashboard .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .11;
          background-image:
            linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(90deg, transparent, black);
        }

        .dashboard .hero-section::after {
          content: "";
          position: absolute;
          width: 550px;
          height: 550px;
          right: -170px;
          top: -220px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,.015),
            0 0 0 90px rgba(255,255,255,.012);
          pointer-events: none;
        }

        .dashboard .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 100px 0;
          color: white;
          animation: heroIn .65s ease-out both;
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dashboard .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffb77f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 25px;
        }

        .dashboard .hero-kicker::before {
          content: "";
          width: 30px;
          height: 2px;
          background: var(--orange);
        }

        .dashboard .hero-content h1 {
          max-width: 720px;
          font-size: clamp(42px,5.5vw,72px);
          font-weight: 850;
          line-height: 1.1;
          letter-spacing: -2px;
          margin: 0 0 24px;
        }

        .dashboard .hero-content h1 span {
          display: block;
          color: var(--orange);
        }

        .dashboard .hero-description {
          max-width: 560px;
          color: #b9c3cf;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .dashboard .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .dashboard .primary-btn,
        .dashboard .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 15px 25px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 800;
          transition: .22s ease;
        }

        .dashboard .primary-btn {
          color: white;
          background: var(--primary);
          box-shadow: 0 8px 25px rgba(214,110,30,.2);
        }

        .dashboard .primary-btn:hover {
          color: white;
          background: #ec812d;
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(214,110,30,.3);
        }

        .dashboard .secondary-btn {
          color: white;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.05);
        }

        .dashboard .secondary-btn:hover {
          color: white;
          border-color: var(--orange);
          background: rgba(255,255,255,.1);
          transform: translateY(-3px);
        }

        .dashboard .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 35px;
          margin-top: 55px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,.12);
          max-width: 540px;
        }

        .dashboard .hero-stat strong {
          display: block;
          color: white;
          font-size: 24px;
          font-weight: 850;
        }

        .dashboard .hero-stat span {
          color: #9da9b8;
          font-size: 11px;
        }

        /* HERO TECH VISUAL */

        .dashboard .hero-visual {
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          perspective: 900px;
        }

        .dashboard .tech-orbit {
          width: 370px;
          height: 370px;
          position: absolute;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 65px rgba(214,110,30,.08);
        }

        .dashboard .tech-orbit::before,
        .dashboard .tech-orbit::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(214,110,30,.2);
          border-radius: 50%;
        }

        .dashboard .tech-orbit::before {
          inset: 30px;
        }

        .dashboard .tech-orbit::after {
          inset: 65px;
        }

        .dashboard .tech-core {
          width: 170px;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 35px;
          color: white;
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(145deg, #f18a3c, #a84e12);
          box-shadow:
            0 25px 70px rgba(214,110,30,.3),
            inset 0 1px 1px rgba(255,255,255,.35);
          transform: rotate(-8deg);
          position: relative;
          z-index: 2;
        }

        .dashboard .tech-core span {
          transform: rotate(8deg);
        }

        .dashboard .tech-card {
          position: absolute;
          z-index: 3;
          padding: 15px 18px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 12px;
          background: rgba(255,255,255,.09);
          backdrop-filter: blur(12px);
          box-shadow: 0 15px 40px rgba(0,0,0,.15);
        }

        .dashboard .tech-card small {
          display: block;
          color: #aeb8c5;
          font-size: 10px;
          margin-bottom: 5px;
        }

        .dashboard .tech-card strong {
          color: white;
          font-size: 14px;
        }

        .dashboard .tech-card-one {
          top: 65px;
          right: 0;
        }

        .dashboard .tech-card-two {
          bottom: 55px;
          left: 0;
        }

        .dashboard .tech-dot {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          background: #54d69b;
          margin-right: 7px;
        }

        /* TRUST STRIP */

        .dashboard .trust-strip {
          background: white;
          border-bottom: 1px solid #eee;
          box-shadow: 0 5px 25px rgba(0,0,0,.025);
        }

        .dashboard .trust-inner {
          min-height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .dashboard .trust-label {
          color: #89919b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .dashboard .trust-item {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #354052;
          font-size: 12px;
          font-weight: 800;
        }

        .dashboard .trust-item span {
          color: var(--primary);
          font-size: 19px;
        }

        /* SECTION HEADINGS */

        .dashboard .services-section,
        .dashboard .quote-section {
          padding: 95px 0;
        }

        .dashboard .services-section {
          background: #f7f8fa;
        }

        .dashboard .section-heading {
          max-width: 700px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .dashboard .section-tag {
          display: inline-block;
          color: var(--primary);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2.5px;
          margin-bottom: 13px;
        }

        .dashboard .section-heading h2 {
          color: #182333;
          font-size: 40px;
          font-weight: 850;
          letter-spacing: -1px;
          margin-bottom: 14px;
        }

        .dashboard .section-heading h2 span {
          color: var(--primary);
        }

        .dashboard .section-heading p {
          color: #78818d;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        /* SERVICE CARDS */

        .dashboard .service-card {
          height: 100%;
          min-height: 330px;
          position: relative;
          overflow: hidden;
          padding: 30px 22px;
          background: white;
          border: 1px solid #e9ebef;
          border-radius: 13px;
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
        }

        .dashboard .service-card::before {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          top: -65px;
          right: -65px;
          border-radius: 50%;
          background: rgba(214,110,30,.08);
          transition: transform .3s ease;
        }

        .dashboard .service-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 22px;
          right: 22px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--primary), #ffb477);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }

        .dashboard .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(214,110,30,.35);
          box-shadow: 0 18px 40px rgba(25,35,50,.09);
        }

        .dashboard .service-card:hover::before {
          transform: scale(2);
        }

        .dashboard .service-card:hover::after {
          transform: scaleX(1);
        }

        .dashboard .service-icon {
          width: 82px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 23px;
          position: relative;
          z-index: 1;
          border-radius: 19px;
          background: linear-gradient(145deg, #fff7f0, #ffeadb);
          transition: transform .25s ease;
        }

        .dashboard .service-icon img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .dashboard .service-card:hover .service-icon {
          transform: translateY(-4px) scale(1.05);
        }

        .dashboard .service-card h5 {
          color: #192536;
          font-size: 17px;
          font-weight: 850;
          margin-bottom: 5px;
        }

        .dashboard .service-card h6 {
          color: var(--primary);
          font-size: 13px;
          font-weight: 750;
          margin-bottom: 13px;
        }

        .dashboard .service-card p {
          color: #7b8490;
          font-size: 12px;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .dashboard .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #202b3a;
          font-size: 12px;
          font-weight: 850;
          transition: color .2s ease;
        }

        .dashboard .service-link:hover {
          color: var(--primary);
        }

        /* CTA */

        .dashboard .cta-section {
          padding: 75px 0;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 90% 20%, rgba(214,110,30,.23), transparent 32%),
            linear-gradient(110deg, #111722, #202c3c);
        }

        .dashboard .cta-section::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          right: -100px;
          top: -160px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 35px rgba(255,255,255,.025);
        }

        .dashboard .cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          position: relative;
          z-index: 1;
        }

        .dashboard .cta-content span {
          color: #ffb477;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .dashboard .cta-content h2 {
          color: white;
          font-size: 36px;
          font-weight: 850;
          margin: 12px 0;
        }

        .dashboard .cta-content p {
          max-width: 570px;
          color: #bac3ce;
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        .dashboard .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          flex-shrink: 0;
          padding: 16px 27px;
          border-radius: 6px;
          color: white;
          background: var(--primary);
          font-size: 13px;
          font-weight: 850;
          transition: .22s ease;
        }

        .dashboard .cta-button:hover {
          color: var(--dark);
          background: white;
          transform: translateY(-3px);
        }

        /* QUOTE */

        .dashboard .quote-section {
          background: white;
        }

        .dashboard .quote-wrapper {
          display: grid;
          grid-template-columns: .85fr 1.4fr;
          gap: 28px;
          align-items: stretch;
        }

        .dashboard .quote-info {
          padding: 40px 32px;
          color: white;
          border-radius: 13px;
          background:
            radial-gradient(circle at 100% 0%, rgba(214,110,30,.25), transparent 45%),
            linear-gradient(145deg, #172333, #101722);
        }

        .dashboard .quote-info h3 {
          font-size: 25px;
          font-weight: 850;
          margin-bottom: 15px;
        }

        .dashboard .quote-info > p {
          color: #bac3ce;
          font-size: 13px;
          line-height: 1.9;
          margin-bottom: 32px;
        }

        .dashboard .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .dashboard .contact-item > span {
          width: 45px;
          height: 45px;
          min-width: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: white;
          background: var(--primary);
          font-size: 19px;
        }

        .dashboard .contact-item h6 {
          font-size: 13px;
          font-weight: 850;
          margin-bottom: 5px;
        }

        .dashboard .contact-item p {
          color: #bac3ce;
          font-size: 12px;
          margin: 0;
        }

        /* FORM */

        .dashboard .quote-form-area {
          padding: 36px;
          border: 1px solid #eceef1;
          border-radius: 13px;
          background: white;
          box-shadow: 0 12px 38px rgba(20,30,45,.055);
        }

        .dashboard .quote-form-area label {
          display: block;
          color: #263346;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 9px;
        }

        .dashboard .quote-form-area .form-control,
        .dashboard .quote-form-area .form-select {
          min-height: 48px;
          padding: 12px 14px;
          border: 1px solid #e3e6eb;
          border-radius: 6px;
          background-color: #fafbfc;
          font-size: 13px;
          box-shadow: none;
          transition: .2s ease;
        }

        .dashboard .quote-form-area textarea.form-control {
          min-height: 125px;
          resize: vertical;
        }

        .dashboard .quote-form-area .form-control:focus,
        .dashboard .quote-form-area .form-select:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 3px rgba(214,110,30,.1);
        }

        .dashboard .submit-button {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 6px;
          color: white;
          background: var(--primary);
          font-size: 13px;
          font-weight: 850;
          cursor: pointer;
          transition: .2s ease;
        }

        .dashboard .submit-button:hover {
          background: #192536;
          transform: translateY(-2px);
        }

        .dashboard .success-message {
          padding: 14px;
          margin-bottom: 20px;
          border-radius: 7px;
          color: #155724;
          background: #d4edda;
          font-size: 13px;
          font-weight: 650;
        }

        /* BACK TO TOP */

        .dashboard .scroll-top-button {
          position: fixed;
          right: 23px;
          bottom: 23px;
          z-index: 9999;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 12px;
          color: white;
          background: var(--primary);
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 7px 20px rgba(0,0,0,.16);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: .2s ease;
        }

        .dashboard .scroll-top-button.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dashboard .scroll-top-button:hover {
          background: #172333;
        }

        /* TABLET */

        @media (max-width: 991px) {
          .dashboard .hero-section {
            min-height: 620px;
          }

          .dashboard .hero-visual {
            min-height: 340px;
          }

          .dashboard .tech-orbit {
            width: 280px;
            height: 280px;
          }

          .dashboard .tech-core {
            width: 130px;
            height: 130px;
            font-size: 38px;
          }

          .dashboard .quote-wrapper {
            grid-template-columns: 1fr;
          }

          .dashboard .cta-content h2 {
            font-size: 30px;
          }
        }

        /* MOBILE */

        @media (max-width: 767px) {
          .dashboard .hero-section {
            min-height: auto;
          }

          .dashboard .hero-content {
            padding: 85px 0 30px;
          }

          .dashboard .hero-content h1 {
            font-size: clamp(38px, 10vw, 52px);
            letter-spacing: -1.5px;
          }

          .dashboard .hero-description {
            font-size: 13px;
          }

          .dashboard .hero-stats {
            gap: 24px;
            margin-top: 35px;
          }

          .dashboard .hero-stat strong {
            font-size: 21px;
          }

          .dashboard .hero-visual {
            min-height: 310px;
            margin-bottom: 35px;
          }

          .dashboard .tech-orbit {
            width: 250px;
            height: 250px;
          }

          .dashboard .tech-core {
            width: 115px;
            height: 115px;
            border-radius: 25px;
            font-size: 34px;
          }

          .dashboard .tech-card-one {
            right: 2%;
            top: 25px;
          }

          .dashboard .tech-card-two {
            left: 1%;
            bottom: 25px;
          }

          .dashboard .trust-inner {
            justify-content: center;
            padding: 22px 0;
          }

          .dashboard .trust-label {
            width: 100%;
            text-align: center;
          }

          .dashboard .trust-item {
            font-size: 10px;
          }

          .dashboard .services-section,
          .dashboard .quote-section {
            padding: 65px 0;
          }

          .dashboard .section-heading {
            margin-bottom: 35px;
          }

          .dashboard .section-heading h2 {
            font-size: 30px;
          }

          .dashboard .section-heading p {
            font-size: 12px;
          }

          .dashboard .service-card {
            min-height: 295px;
            padding: 22px 12px;
          }

          .dashboard .service-icon {
            width: 68px;
            height: 68px;
            margin-bottom: 17px;
          }

          .dashboard .service-icon img {
            width: 50px;
            height: 50px;
          }

          .dashboard .service-card h5 {
            font-size: 14px;
          }

          .dashboard .service-card h6 {
            font-size: 11px;
          }

          .dashboard .service-card p {
            font-size: 10px;
          }

          .dashboard .service-link {
            font-size: 11px;
          }

          .dashboard .cta-section {
            padding: 55px 0;
          }

          .dashboard .cta-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .dashboard .cta-content h2 {
            font-size: 27px;
          }

          .dashboard .quote-info {
            padding: 30px 23px;
          }

          .dashboard .quote-form-area {
            padding: 23px 16px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .dashboard *,
          .dashboard *::before,
          .dashboard *::after {
            animation: none !important;
            transition: none !important;
          }

          .dashboard [data-animate] {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

      {/* HERO SECTION */}

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="hero-content">

                <div className="hero-kicker">
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

                <div className="hero-actions">
                  <a href="/AboutUs" className="primary-btn">
                    Explore Our Company <span>↗</span>
                  </a>

                  <a href="#quote" className="secondary-btn">
                    Let's Talk <span>→</span>
                  </a>
                </div>

                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>08+</strong>
                    <span>IT Services</span>
                  </div>

                  <div className="hero-stat">
                    <strong>100%</strong>
                    <span>Client Focus</span>
                  </div>

                  <div className="hero-stat">
                    <strong>24/7</strong>
                    <span>Digital Support</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual">

                <div className="tech-orbit"></div>

                <div className="tech-core">
                  <span>C</span>
                </div>

                <div className="tech-card tech-card-one">
                  <small>OUR TECHNOLOGY</small>
                  <strong>Smart Solutions</strong>
                </div>

                <div className="tech-card tech-card-two">
                  <small><span className="tech-dot"></span> SYSTEM STATUS</small>
                  <strong>Innovation Active</strong>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STRIP */}

      <section className="trust-strip">
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

      <section className="services-section">
        <div className="container">

          <div className="section-heading" data-animate="up">
            <span className="section-tag">WHAT WE DO</span>

            <h2>
              Our Premium <span>Services</span>
            </h2>

            <p>
              We combine creativity, technology and expertise
              to deliver digital solutions that help businesses
              move forward.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div
                className="col-6 col-md-4 col-lg-3"
                key={service.id}
                data-animate="up"
                style={{
                  transitionDelay: `${Math.min(index * 35, 140)}ms`
                }}
              >
                <div className="service-card">

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

                  <a href="#quote" className="service-link">
                    Discover Service <span>→</span>
                  </a>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container">

          <div className="cta-content">

            <div data-animate="left">
              <span>LET'S CREATE SOMETHING AMAZING</span>

              <h2>Ready to Grow Your Business?</h2>

              <p>
                Your next big idea deserves the right technology.
                Let's turn your vision into reality.
              </p>
            </div>

            <div data-animate="right">
              <a href="#quote" className="cta-button">
                Start Your Project <span>↗</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* QUOTE SECTION */}

      <section className="quote-section" id="quote">
        <div className="container">

          <div className="section-heading" data-animate="up">
            <span className="section-tag">CONTACT OUR TEAM</span>

            <h2>
              Let's Discuss Your <span>Project</span>
            </h2>

            <p>
              Share your requirements with us and let's find
              the right solution for your business.
            </p>
          </div>

          <div className="quote-wrapper">

            <div className="quote-info" data-animate="left">
              <h3>Let's Talk About Your Project</h3>

              <p>
                Have a question or a new project? Our team is
                ready to help you with professional IT solutions.
              </p>

              <div className="contact-item">
                <span>✉</span>
                <div>
                  <h6>Email Us</h6>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span>☎</span>
                <div>
                  <h6>Call Us</h6>
                  <p>+92 XXX XXXXXXX</p>
                </div>
              </div>

              <div className="contact-item">
                <span>⌖</span>
                <div>
                  <h6>Our Location</h6>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>

            <div className="quote-form-area" data-animate="right">

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
                        <option key={service.id} value={service.title}>
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
                    <button type="submit" className="submit-button">
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
        className={`scroll-top-button ${showTopButton ? "visible" : ""}`}
        onClick={scrollToTop}
        title="Back to top"
        aria-label="Scroll to top"
        tabIndex={showTopButton ? 0 : -1}
      >
        ↑
      </button>

    </div>
  );
};

export default Dashboard;
