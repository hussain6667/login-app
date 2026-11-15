
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./../App.css";

const services = [
  {
    icon: "💻",
    title: "Custom Software",
    subtitle: "Development",
    description: "Powerful software designed around your business requirements.",
    details: "We create customized software solutions that simplify business operations, improve productivity and help organizations manage their daily activities efficiently.",
    features: [
      "Custom business management systems",
      "Inventory and stock management",
      "Employee management systems",
      "Automated business operations",
      "Reports and analytics dashboards",
      "Database management"
    ],
    technologies: ["React JS", "Node JS", "PHP", "MySQL"],
    process: "Requirement Analysis → UI Design → Development → Testing → Deployment"
  },
  {
    icon: "🌐",
    title: "Web Application",
    subtitle: "Development",
    description: "Modern, responsive and powerful web applications.",
    details: "We build professional web applications that provide a smooth experience across desktops, tablets and mobile devices. Our solutions focus on speed, security and usability.",
    features: [
      "Responsive web interfaces",
      "Admin dashboards and portals",
      "User login and authentication",
      "Database integration",
      "API integration",
      "Performance optimization"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React JS", "Node JS"],
    process: "Planning → UI/UX Design → Frontend → Backend → Testing → Launch"
  },
  {
    icon: "📊",
    title: "Business Software",
    subtitle: "Solutions",
    description: "Smart tools to manage your business operations.",
    details: "Our business software helps organizations manage sales, purchases, customers and business records through organized and easy-to-use systems.",
    features: [
      "Business management systems",
      "Sales and purchase management",
      "Customer record management",
      "Invoice and billing systems",
      "Business performance reports",
      "Organized data management"
    ],
    technologies: ["React JS", "PHP", "Node JS", "MySQL"],
    process: "Business Analysis → System Planning → Development → Testing → Implementation"
  },
  {
    icon: "📱",
    title: "Mobile Application",
    subtitle: "Development",
    description: "User-friendly Android and iOS applications.",
    details: "We develop modern mobile applications that help businesses connect with customers and provide their services through convenient mobile experiences.",
    features: [
      "Android application development",
      "iOS application development",
      "User-friendly interfaces",
      "API and database integration",
      "Push notification integration",
      "Mobile performance optimization"
    ],
    technologies: ["React Native", "JavaScript", "Node JS", "MySQL"],
    process: "Idea → App Design → Development → Testing → App Launch"
  },
  {
    icon: "🔗",
    title: "API Development",
    subtitle: "Integration",
    description: "Secure communication between different applications.",
    details: "We develop and integrate APIs that allow applications and software systems to communicate, share information and work together efficiently.",
    features: [
      "REST API development",
      "Third-party API integration",
      "Secure data communication",
      "Authentication and authorization",
      "API testing",
      "API documentation"
    ],
    technologies: ["Node JS", "Express JS", "PHP", "MySQL"],
    process: "API Planning → Development → Integration → Security Testing → Deployment"
  },
  {
    icon: "⚙️",
    title: "Software Maintenance",
    subtitle: "Support",
    description: "Updates, bug fixing and reliable technical support.",
    details: "We maintain existing software to keep it secure, stable and reliable. Our maintenance services focus on resolving issues and improving application performance.",
    features: [
      "Bug fixing and troubleshooting",
      "Software updates",
      "Performance improvements",
      "Database maintenance",
      "Security improvements",
      "Technical support"
    ],
    technologies: ["React JS", "Node JS", "PHP", "MySQL"],
    process: "System Review → Issue Detection → Fixing → Testing → Ongoing Support"
  }
];

const technologies = [
  ["🌐", "HTML5"],
  ["🎨", "CSS3"],
  ["⚡", "JavaScript"],
  ["⚛️", "React JS"],
  ["🟢", "Node JS"],
  ["🐍", "Python"],
  ["💻", "PHP"],
  ["🗄️", "MySQL"]
];

const benefits = [
  ["⭐", "Quality Solutions", "Reliable and high-quality software solutions."],
  ["🔒", "Secure Development", "Security practices to protect your data."],
  ["📱", "Responsive Design", "Works smoothly on mobile, tablet and desktop."],
  ["🤝", "Customer Support", "Technical assistance whenever you need it."]
];

const steps = [
  ["01", "📝", "Planning", "Understand your ideas and requirements."],
  ["02", "🎨", "Designing", "Create a clean and user-friendly design."],
  ["03", "💻", "Development", "Build software using modern technologies."],
  ["04", "🔍", "Testing", "Test the software and fix errors."],
  ["05", "🚀", "Deployment", "Launch your software and provide support."]
];

const reveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" }
  }
};

const Reveal = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.08 }}
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: 0.045 }
      }
    }}
  >
    {children}
  </motion.div>
);

const SoftwareDev = () => {
  const [selectedService, setSelectedService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Software Project:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      message: ""
    });
  };

  const goToContact = () => {
    setSelectedService(null);

    setTimeout(() => {
      document.getElementById("sd-contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 120);
  };

  return (
    <div className="sd-page">

      <style>{`
        .sd-page {
          --orange: rgb(214,110,30);
          --dark: #171b23;
          --light: #f7f8fa;
          color: #242832;
          font-family: "Montserrat", Arial, sans-serif;
          overflow: hidden;
        }

        .sd-page * {
          box-sizing: border-box;
        }

        .sd-page a {
          text-decoration: none;
        }

        .sd-container {
          max-width: 1250px;
          margin: auto;
        }

        .sd-section {
          padding: 85px 7%;
        }

        .sd-tag {
          color: var(--orange);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .sd-title {
          max-width: 700px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .sd-title h2 {
          margin: 14px 0;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 900;
        }

        .sd-title h2 span,
        .sd-about h2 span {
          color: var(--orange);
        }

        .sd-title p,
        .sd-muted {
          color: #777;
          font-size: 14px;
          line-height: 1.9;
        }

        .sd-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 14px 25px;
          border: 1px solid var(--orange);
          border-radius: 7px;
          background: var(--orange);
          color: white;
          font-size: 13px;
          font-weight: 800;
          transition: background .18s ease, color .18s ease, transform .18s ease;
          cursor: pointer;
        }

        .sd-btn:hover {
          background: white;
          color: var(--orange);
          transform: translateY(-2px);
        }

        /* HERO */

        .sd-hero {
          min-height: 610px;
          padding: 120px 7% 85px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          color: white;
          background:
            radial-gradient(ellipse at 85% 40%, #d66e3030, transparent 35%),
            linear-gradient(120deg, #11151d, #252d38);
        }

        .sd-hero::before {
          content: "";
          position: absolute;
          width: 390px;
          height: 390px;
          right: 8%;
          top: 15%;
          border: 1px solid #d66e3040;
          border-radius: 50%;
          z-index: -1;
          pointer-events: none;
        }

        .sd-hero-inner {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 50px;
        }

        .sd-hero h1 {
          margin: 20px 0;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.15;
          font-weight: 900;
        }

        .sd-hero h1 span {
          color: #f18b45;
        }

        .sd-hero p {
          max-width: 570px;
          color: #c7cbd1;
          font-size: 14px;
          line-height: 1.9;
        }

        .sd-hero-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .sd-btn-outline {
          background: transparent;
          border-color: #ffffff70;
        }

        .sd-code {
          padding: 30px;
          border: 1px solid #ffffff25;
          border-radius: 17px;
          background: #ffffff0d;
          box-shadow: 0 15px 45px #0003;
        }

        .sd-dots {
          display: flex;
          gap: 8px;
        }

        .sd-dots i {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff6258;
        }

        .sd-dots i:nth-child(2) {
          background: #ffc044;
        }

        .sd-dots i:nth-child(3) {
          background: #39c879;
        }

        .sd-code h3 {
          margin: 25px 0;
          font-size: 22px;
        }

        .sd-code p {
          margin: 8px 0;
          color: #d9dce3;
          font-family: monospace;
        }

        .sd-code .orange {
          color: #ff9b53;
        }

        .sd-code-status {
          margin-top: 22px;
          padding: 12px;
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
          min-height: 360px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: linear-gradient(135deg, #fff0e5, #ffd9bd);
          position: relative;
          overflow: hidden;
        }

        .sd-about-art::before,
        .sd-about-art::after {
          content: "";
          position: absolute;
          border: 1px solid #d66e3040;
          border-radius: 50%;
          width: 230px;
          height: 230px;
        }

        .sd-about-art::after {
          width: 300px;
          height: 300px;
        }

        .sd-about-art span {
          font-size: 110px;
          z-index: 1;
        }

        .sd-about h2 {
          margin: 15px 0;
          font-size: clamp(29px, 4vw, 42px);
          line-height: 1.3;
          font-weight: 900;
        }

        .sd-checks {
          padding: 0;
          margin-top: 20px;
          list-style: none;
        }

        .sd-checks li {
          margin: 13px 0;
          font-size: 14px;
          font-weight: 700;
        }

        .sd-checks span {
          margin-right: 10px;
          color: var(--orange);
        }

        /* SERVICE CARDS */

        .sd-services,
        .sd-tech,
        .sd-contact {
          background: var(--light);
        }

        .sd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .sd-card {
          width: 100%;
          min-height: 270px;
          height: 100%;
          padding: 28px 25px;
          position: relative;
          overflow: hidden;
          display: block;
          text-align: left;
          color: #242832;
          border: 1px solid #eee;
          border-radius: 14px;
          background: white;
          cursor: pointer;
          font-family: inherit;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .sd-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--orange);
          transition: width .23s ease;
        }

        .sd-card:hover {
          transform: translateY(-6px);
          border-color: #e9b58f;
          box-shadow: 0 12px 25px #00000010;
        }

        .sd-card:hover::before {
          width: 100%;
        }

        .sd-icon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
          border-radius: 13px;
          background: #fff0e5;
          font-size: 28px;
          transition: transform .2s ease, background .2s ease;
        }

        .sd-card:hover .sd-icon {
          transform: scale(1.08);
          background: #ffe3cf;
        }

        .sd-card h3 {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 900;
        }

        .sd-card h4 {
          margin: 0;
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
        }

        .sd-card p {
          margin: 13px 0 0;
          color: #777;
          font-size: 13px;
          line-height: 1.8;
        }

        .sd-card-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          color: var(--orange);
          font-size: 13px;
          font-weight: 900;
        }

        .sd-card-more span {
          transition: transform .18s ease;
        }

        .sd-card:hover .sd-card-more span {
          transform: translateX(5px);
        }

        .sd-card:focus-visible,
        .sd-modal-close:focus-visible,
        .sd-btn:focus-visible {
          outline: 3px solid #f1a36d;
          outline-offset: 4px;
        }

        /* BENEFITS */

        .sd-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .sd-benefit {
          display: flex;
          align-items: flex-start;
          gap: 17px;
          padding: 23px;
          border: 1px solid #eee;
          border-radius: 13px;
          transition: transform .2s ease, border-color .2s ease;
        }

        .sd-benefit:hover {
          transform: translateY(-4px);
          border-color: var(--orange);
        }

        .sd-benefit-icon {
          min-width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #fff0e5;
          font-size: 24px;
        }

        .sd-benefit h3 {
          font-size: 16px;
          font-weight: 900;
        }

        .sd-benefit p {
          margin: 0;
          color: #777;
          font-size: 13px;
          line-height: 1.8;
        }

        /* TECHNOLOGIES */

        .sd-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .sd-tech-card {
          padding: 25px 12px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: white;
          text-align: center;
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }

        .sd-tech-card:hover {
          transform: translateY(-5px);
          background: var(--dark);
          color: white;
        }

        .sd-tech-card span {
          display: block;
          margin-bottom: 10px;
          font-size: 32px;
        }

        .sd-tech-card h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 900;
        }

        /* PROCESS */

        .sd-process {
          background: #171b23;
          color: white;
        }

        .sd-process .sd-title p {
          color: #b9bec7;
        }

        .sd-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .sd-step {
          padding: 25px 15px;
          border: 1px solid #ffffff20;
          border-radius: 12px;
          background: #ffffff08;
          text-align: center;
          transition: transform .2s ease, border-color .2s ease;
        }

        .sd-step:hover {
          transform: translateY(-5px);
          border-color: var(--orange);
        }

        .sd-step-number {
          color: #ff9b53;
          font-size: 29px;
          font-weight: 900;
        }

        .sd-step-icon {
          margin: 13px 0;
          font-size: 27px;
        }

        .sd-step h3 {
          font-size: 15px;
          font-weight: 900;
        }

        .sd-step p {
          color: #b9bec7;
          font-size: 12px;
          line-height: 1.8;
        }

        /* CTA */

        .sd-cta {
          padding: 65px 7%;
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

        .sd-cta h2 {
          margin: 12px 0;
          font-size: 33px;
          font-weight: 900;
        }

        .sd-cta p {
          font-size: 14px;
          line-height: 1.8;
        }

        .sd-cta .sd-btn {
          flex-shrink: 0;
          border-color: white;
          background: white;
          color: var(--orange);
        }

        .sd-cta .sd-btn:hover {
          border-color: var(--dark);
          background: var(--dark);
          color: white;
        }

        /* CONTACT */

        .sd-form-box {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          overflow: hidden;
          border-radius: 17px;
          background: white;
          box-shadow: 0 12px 35px #0000000b;
        }

        .sd-form-info {
          padding: 40px 32px;
          background: var(--dark);
          color: white;
        }

        .sd-form-info h3 {
          font-size: 26px;
          font-weight: 900;
          line-height: 1.4;
        }

        .sd-form-info p {
          color: #c6cbd2;
          font-size: 13px;
          line-height: 1.9;
        }

        .sd-form-info h4 {
          margin-top: 25px;
          font-size: 14px;
          font-weight: 900;
        }

        .sd-form {
          padding: 38px;
        }

        .sd-form h3 {
          margin-bottom: 23px;
          font-size: 23px;
          font-weight: 900;
        }

        .sd-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .sd-field.full {
          grid-column: 1 / -1;
        }

        .sd-field label {
          display: block;
          margin-bottom: 8px;
          font-size: 12px;
          font-weight: 800;
        }

        .sd-field input,
        .sd-field select,
        .sd-field textarea {
          width: 100%;
          padding: 13px;
          border: 1px solid #e3e3e3;
          border-radius: 7px;
          outline: none;
          font-family: inherit;
          font-size: 13px;
          transition: border-color .18s ease, box-shadow .18s ease;
        }

        .sd-field input:focus,
        .sd-field select:focus,
        .sd-field textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3015;
        }

        .sd-field textarea {
          resize: vertical;
        }

        .sd-submit {
          width: 100%;
          padding: 14px;
          border: 0;
          border-radius: 7px;
          background: var(--orange);
          color: white;
          font-weight: 900;
          cursor: pointer;
          transition: background .18s ease;
        }

        .sd-submit:hover {
          background: var(--dark);
        }

        .sd-success {
          padding: 13px;
          margin-bottom: 18px;
          border-radius: 7px;
          background: #e8f7ed;
          color: #176b35;
          font-size: 13px;
        }

        /* PREMIUM SERVICE MODAL */

        .sd-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
          background: rgba(10, 13, 19, .78);
          /* No backdrop blur: faster rendering */
        }

        .sd-modal {
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 17px;
          background: white;
          box-shadow: 0 20px 60px #0005;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: var(--orange) #eee;
        }

        .sd-modal-top {
          position: relative;
          padding: 38px;
          color: white;
          background:
            radial-gradient(circle at 90% 10%, #d66e3040, transparent 35%),
            linear-gradient(120deg, #171b23, #303946);
        }

        .sd-modal-top::after {
          content: "";
          position: absolute;
          right: 55px;
          bottom: -35px;
          width: 100px;
          height: 100px;
          border: 1px solid #d66e3050;
          border-radius: 50%;
          pointer-events: none;
        }

        .sd-modal-close {
          position: absolute;
          top: 17px;
          right: 18px;
          z-index: 2;
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid #ffffff45;
          border-radius: 50%;
          background: #ffffff12;
          color: white;
          font-size: 24px;
          cursor: pointer;
          transition: background .16s ease, transform .16s ease;
        }

        .sd-modal-close:hover {
          background: var(--orange);
          transform: rotate(90deg);
        }

        .sd-modal-icon {
          width: 68px;
          height: 68px;
          display: grid;
          place-items: center;
          margin-bottom: 19px;
          border: 1px solid #d66e3060;
          border-radius: 15px;
          background: #d66e3025;
          font-size: 34px;
        }

        .sd-modal-top h2 {
          margin: 13px 0;
          font-size: clamp(24px, 4vw, 35px);
          font-weight: 900;
        }

        .sd-modal-top h2 span {
          color: #ff9b53;
        }

        .sd-modal-top p {
          max-width: 680px;
          margin: 0;
          color: #d0d4dc;
          font-size: 13px;
          line-height: 1.9;
        }

        .sd-modal-content {
          padding: 32px 38px;
        }

        .sd-modal-section {
          margin-bottom: 28px;
        }

        .sd-modal-section h3 {
          margin: 0 0 17px;
          color: #202630;
          font-size: 18px;
          font-weight: 900;
        }

        .sd-modal-section h3::after {
          content: "";
          display: block;
          width: 42px;
          height: 3px;
          margin-top: 9px;
          border-radius: 5px;
          background: var(--orange);
        }

        .sd-modal-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .sd-modal-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px;
          border: 1px solid #f0f0f0;
          border-radius: 8px;
          background: #fafafa;
          color: #555;
          font-size: 12px;
          line-height: 1.7;
          transition: border-color .16s ease, background .16s ease;
        }

        .sd-modal-feature:hover {
          border-color: #efc5a7;
          background: #fff8f3;
        }

        .sd-modal-feature span {
          color: var(--orange);
          font-weight: 900;
        }

        .sd-modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .sd-modal-tech span {
          padding: 9px 15px;
          border: 1px solid #f5d2ba;
          border-radius: 25px;
          background: #fff0e5;
          color: #b75a20;
          font-size: 12px;
          font-weight: 800;
          transition: background .16s ease, color .16s ease;
        }

        .sd-modal-tech span:hover {
          background: var(--orange);
          color: white;
        }

        .sd-modal-process {
          padding: 17px;
          border-left: 3px solid var(--orange);
          border-radius: 7px;
          background: #f7f8fa;
          color: #555;
          font-size: 13px;
          line-height: 1.9;
        }

        .sd-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          padding-top: 22px;
          border-top: 1px solid #eee;
        }

        .sd-modal-footer p {
          margin: 0;
          color: #777;
          font-size: 12px;
        }

        /* RESPONSIVE */

        @media(max-width: 950px) {
          .sd-hero-inner {
            grid-template-columns: 1fr;
          }

          .sd-hero-content {
            text-align: center;
          }

          .sd-hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .sd-hero-actions {
            justify-content: center;
          }

          .sd-code {
            max-width: 500px;
            width: 100%;
            margin: auto;
          }

          .sd-about {
            grid-template-columns: 1fr;
          }

          .sd-process-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .sd-form-box {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 650px) {
          .sd-section {
            padding: 60px 6%;
          }

          .sd-hero {
            min-height: auto;
            padding: 95px 6% 60px;
          }

          .sd-hero h1 {
            font-size: 36px;
          }

          .sd-hero::before {
            width: 240px;
            height: 240px;
            right: -80px;
          }

          .sd-about-art {
            min-height: 250px;
          }

          .sd-about-art span {
            font-size: 85px;
          }

          .sd-grid,
          .sd-benefits {
            grid-template-columns: 1fr;
          }

          .sd-tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sd-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sd-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .sd-cta h2 {
            font-size: 27px;
          }

          .sd-form-info {
            padding: 28px 22px;
          }

          .sd-form {
            padding: 25px 18px;
          }

          .sd-fields {
            grid-template-columns: 1fr;
          }

          .sd-field.full {
            grid-column: auto;
          }

          .sd-modal-overlay {
            padding: 9px;
          }

          .sd-modal {
            max-height: 94vh;
          }

          .sd-modal-top {
            padding: 27px 20px;
          }

          .sd-modal-content {
            padding: 24px 19px;
          }

          .sd-modal-features {
            grid-template-columns: 1fr;
          }

          .sd-modal-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .sd-modal-footer .sd-btn {
            width: 100%;
          }
        }

        @media(max-width: 380px) {
          .sd-process-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .sd-page *,
          .sd-page *::before,
          .sd-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="sd-hero">
        <div className="sd-hero-inner">

          <Reveal>
            <motion.div variants={reveal} className="sd-hero-content">

              <span className="sd-tag">
                OUR PROFESSIONAL SERVICES
              </span>

              <h1>
                Professional <span>Software</span> Development Solutions
              </h1>

              <p>
                We develop powerful, secure and modern software solutions
                that help businesses improve performance, save time and grow faster.
              </p>

              <div className="sd-hero-actions">
                <a href="#sd-services" className="sd-btn">
                  Explore Services →
                </a>

                <a href="#sd-contact" className="sd-btn sd-btn-outline">
                  Get In Touch
                </a>
              </div>

            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div variants={reveal} className="sd-code">

              <div className="sd-dots">
                <i />
                <i />
                <i />
              </div>

              <h3>Software Development</h3>

              <p className="orange">const solution = {"{"}</p>
              <p>quality: "Premium",</p>
              <p>security: "Advanced",</p>
              <p>performance: "Fast",</p>
              <p>design: "Modern"</p>
              <p className="orange">{"}"}</p>

              <div className="sd-code-status">
                ● System Ready
              </div>

            </motion.div>
          </Reveal>

        </div>
      </section>

      {/* ABOUT */}

      <section className="sd-section">
        <div className="sd-container sd-about">

          <Reveal>
            <motion.div variants={reveal} className="sd-about-art">
              <span>💻</span>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div variants={reveal}>

              <span className="sd-tag">ABOUT OUR SERVICES</span>

              <h2>
                Smart Software Solutions For <span>Your Business</span>
              </h2>

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
                ].map((x) => (
                  <li key={x}>
                    <span>✔</span>{x}
                  </li>
                ))}
              </ul>

            </motion.div>
          </Reveal>

        </div>
      </section>

      {/* SERVICES */}

      <section className="sd-section sd-services" id="sd-services">
        <div className="sd-container">

          <Reveal>
            <motion.div variants={reveal} className="sd-title">

              <span className="sd-tag">WHAT WE PROVIDE</span>

              <h2>
                Our Software <span>Services</span>
              </h2>

              <p>
                Explore our professional software solutions.
                Select any service to discover its features and details.
              </p>

            </motion.div>
          </Reveal>

          <Reveal className="sd-grid">

            {services.map((s, index) => (
              <motion.button
                variants={reveal}
                type="button"
                className="sd-card"
                key={s.title}
                aria-label={`View ${s.title} details`}
                onClick={() => setSelectedService(s)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.16 }}
              >

                <div className="sd-icon">
                  {s.icon}
                </div>

                <h3>{s.title}</h3>
                <h4>{s.subtitle}</h4>

                <p>{s.description}</p>

                <span className="sd-card-more">
                  View Details <span>→</span>
                </span>

              </motion.button>
            ))}

          </Reveal>

        </div>
      </section>

      {/* BENEFITS */}

      <section className="sd-section">
        <div className="sd-container">

          <Reveal>
            <motion.div variants={reveal} className="sd-title">

              <span className="sd-tag">OUR ADVANTAGES</span>

              <h2>
                Why Choose <span>Us?</span>
              </h2>

              <p>
                We focus on quality, security and customer satisfaction.
              </p>

            </motion.div>
          </Reveal>

          <Reveal className="sd-benefits">

            {benefits.map((b) => (
              <motion.div
                variants={reveal}
                className="sd-benefit"
                key={b[1]}
              >

                <div className="sd-benefit-icon">
                  {b[0]}
                </div>

                <div>
                  <h3>{b[1]}</h3>
                  <p>{b[2]}</p>
                </div>

              </motion.div>
            ))}

          </Reveal>

        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="sd-section sd-tech">
        <div className="sd-container">

          <Reveal>
            <motion.div variants={reveal} className="sd-title">

              <span className="sd-tag">OUR TECH STACK</span>

              <h2>
                Technologies We <span>Use</span>
              </h2>

              <p>
                Modern programming languages and technologies
                for powerful applications.
              </p>

            </motion.div>
          </Reveal>

          <Reveal className="sd-tech-grid">

            {technologies.map((t) => (
              <motion.div
                variants={reveal}
                className="sd-tech-card"
                key={t[1]}
              >
                <span>{t[0]}</span>
                <h3>{t[1]}</h3>
              </motion.div>
            ))}

          </Reveal>

        </div>
      </section>

      {/* PROCESS */}

      <section className="sd-section sd-process">
        <div className="sd-container">

          <Reveal>
            <motion.div variants={reveal} className="sd-title">

              <span className="sd-tag">HOW WE WORK</span>

              <h2>Our Development Process</h2>

              <p>
                We follow a simple and organized process
                to turn your ideas into working software.
              </p>

            </motion.div>
          </Reveal>

          <Reveal className="sd-process-grid">

            {steps.map((s) => (
              <motion.div
                variants={reveal}
                className="sd-step"
                key={s[0]}
              >

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

          <motion.div variants={reveal} className="sd-cta-inner">

            <div>

              <span className="sd-tag" style={{ color: "white" }}>
                LET'S BUILD SOMETHING GREAT
              </span>

              <h2>Have a Software Project in Mind?</h2>

              <p>
                Share your idea with us and let's create
                something amazing together.
              </p>

            </div>

            <a href="#sd-contact" className="sd-btn">
              Start Your Project →
            </a>

          </motion.div>

        </Reveal>
      </section>

      {/* CONTACT */}

      <section className="sd-section sd-contact" id="sd-contact">
        <div className="sd-container">

          <Reveal>
            <motion.div variants={reveal} className="sd-title">

              <span className="sd-tag">GET IN TOUCH</span>

              <h2>
                Discuss Your <span>Project</span>
              </h2>

              <p>
                Tell us about your software development requirements.
              </p>

            </motion.div>
          </Reveal>

          <Reveal>

            <motion.div variants={reveal} className="sd-form-box">

              <div className="sd-form-info">

                <h3>
                  Let's Create Something Amazing Together!
                </h3>

                <p>
                  Need custom software for your business?
                  Contact our team and discuss your project requirements.
                </p>

                <h4>💻 Custom Software Development</h4>

                <p>
                  Modern, secure and reliable solutions for your business.
                </p>

                <h4>🤝 Professional Support</h4>

                <p>
                  We are ready to help with your software development needs.
                </p>

              </div>

              <div className="sd-form">

                <h3>Get A Free Quote</h3>

                {submitted && (
                  <div className="sd-success">
                    Thank you! Your request has been submitted.
                    Connect your backend to receive and store requests.
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  <div className="sd-fields">

                    <div className="sd-field">
                      <label>Full Name</label>

                      <input
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="sd-field">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="sd-field">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="sd-field">
                      <label>Project Type</label>

                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                      >
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

                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Describe your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
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

      {/* SERVICE DETAILS MODAL */}

      <AnimatePresence>
        {selectedService && (

          <motion.div
            className="sd-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedService(null);
              }
            }}
          >

            <motion.div
              className="sd-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="sd-modal-title"
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.99 }}
              transition={{ duration: 0.13, ease: "easeOut" }}
              onMouseDown={(e) => e.stopPropagation()}
            >

              <div className="sd-modal-top">

                <button
                  type="button"
                  className="sd-modal-close"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close details"
                >
                  ×
                </button>

                <div className="sd-modal-icon">
                  {selectedService.icon}
                </div>

                <span className="sd-tag">
                  PROFESSIONAL SOFTWARE SERVICES
                </span>

                <h2 id="sd-modal-title">
                  {selectedService.title}{" "}
                  <span>{selectedService.subtitle}</span>
                </h2>

                <p>{selectedService.details}</p>

              </div>

              <div className="sd-modal-content">

                <div className="sd-modal-section">

                  <h3>What We Offer</h3>

                  <div className="sd-modal-features">

                    {selectedService.features.map((feature) => (
                      <div className="sd-modal-feature" key={feature}>
                        <span>✔</span>
                        {feature}
                      </div>
                    ))}

                  </div>

                </div>

                <div className="sd-modal-section">

                  <h3>Technologies We Use</h3>

                  <div className="sd-modal-tech">

                    {selectedService.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                  </div>

                </div>

                <div className="sd-modal-section">

                  <h3>Our Development Process</h3>

                  <div className="sd-modal-process">
                    {selectedService.process}
                  </div>

                </div>

                <div className="sd-modal-footer">

                  <p>
                    Have a project idea? Let's discuss your requirements.
                  </p>

                  <button
                    type="button"
                    className="sd-btn"
                    onClick={goToContact}
                  >
                    Get A Free Quote →
                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  );
};

export default SoftwareDev;
