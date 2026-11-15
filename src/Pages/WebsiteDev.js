
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";



// REUSABLE SMOOTH SCROLL ANIMATION
const AnimateSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.12, once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 22 }
      }
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const itemAnimation = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

// WEBSITE SERVICES
const services = [
  {
    icon: "💻",
    title: "Custom Website Development",
    description: "Professional websites designed according to your business needs.",
    details:
      "We build custom websites that represent your brand and help your business grow online. Every website is developed with a clean design, smooth functionality and a user-friendly experience.",
    features: [
      "Custom layouts according to your requirements",
      "Professional and modern design",
      "Responsive pages for all devices",
      "Clean and maintainable code",
      "User-friendly navigation",
      "Reliable website performance"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
    process: [
      "Understand your business requirements",
      "Plan the website structure",
      "Design and develop website pages",
      "Test website functionality",
      "Launch the final website"
    ]
  },
  {
    icon: "📱",
    title: "Responsive Web Design",
    description: "Beautiful website layouts for mobile, tablet and desktop.",
    details:
      "We create responsive websites that automatically adjust to different screen sizes. Your visitors get a smooth and consistent experience whether they use a mobile phone, tablet or desktop computer.",
    features: [
      "Mobile-first design approach",
      "Flexible layouts and sections",
      "Responsive navigation menus",
      "Optimized images and content",
      "Consistent experience on all screens",
      "Cross-browser compatibility"
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    process: [
      "Review screen size requirements",
      "Create responsive layouts",
      "Develop flexible components",
      "Test on different screen sizes",
      "Optimize the final design"
    ]
  },
  {
    icon: "🛒",
    title: "E-Commerce Development",
    description: "Powerful online stores to sell your products easily.",
    details:
      "We develop modern e-commerce websites that make online shopping simple. From product pages to shopping carts, we focus on creating a convenient shopping experience for your customers.",
    features: [
      "Product listing and detail pages",
      "Shopping cart functionality",
      "Customer-friendly navigation",
      "Responsive product layouts",
      "Order management integration",
      "Secure payment integration support"
    ],
    technologies: ["React.js", "JavaScript", "Node.js", "MySQL"],
    process: [
      "Understand your store requirements",
      "Plan product and category structure",
      "Develop shopping functionality",
      "Test cart and checkout flow",
      "Prepare the store for launch"
    ]
  },
  {
    icon: "⚛️",
    title: "React Development",
    description: "Modern and interactive websites using React.js.",
    details:
      "We build fast and interactive web applications using React.js. Reusable components and modern development practices help create scalable applications that are easier to maintain and improve.",
    features: [
      "Reusable React components",
      "Interactive user interfaces",
      "React Router navigation",
      "API integration",
      "Dynamic forms and dashboards",
      "Smooth user interactions"
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "Bootstrap"],
    process: [
      "Plan components and application structure",
      "Create reusable UI components",
      "Connect APIs and application logic",
      "Test application functionality",
      "Optimize and deploy the application"
    ]
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    description: "Regular updates, bug fixing and website support.",
    details:
      "A website needs regular care to keep working properly. We help maintain your website through updates, troubleshooting, performance improvements and ongoing technical support.",
    features: [
      "Website bug fixing",
      "Content and design updates",
      "Performance improvements",
      "Responsive layout corrections",
      "Technical troubleshooting",
      "Regular website checks"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
    process: [
      "Review the existing website",
      "Identify errors and improvements",
      "Apply required updates",
      "Test all important features",
      "Verify the final website"
    ]
  },
  {
    icon: "🚀",
    title: "Website Optimization",
    description: "Improve loading speed and overall website performance.",
    details:
      "We improve website performance by identifying unnecessary delays and optimizing important website resources. A faster website provides a better experience for visitors.",
    features: [
      "Image and asset optimization",
      "Reduce unnecessary code",
      "Improve page loading speed",
      "Optimize responsive performance",
      "Improve website structure",
      "Performance testing"
    ],
    technologies: ["JavaScript", "React.js", "HTML5", "CSS3"],
    process: [
      "Analyze current website performance",
      "Identify slow-loading resources",
      "Optimize images and code",
      "Test loading performance",
      "Review the final improvements"
    ]
  }
];

const WebsiteDev = () => {
  const [selectedService, setSelectedService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Node.js",
    "PHP",
    "MySQL"
  ];

  const reasons = [
    "Modern professional designs",
    "Mobile-friendly layouts",
    "Fast loading performance",
    "Clean and maintainable code",
    "Better user experience",
    "Reliable support and maintenance"
  ];

  const steps = [
    ["01", "Planning", "Understand your business goals and requirements."],
    ["02", "Design", "Create an attractive and user-friendly design."],
    ["03", "Development", "Convert designs into functional websites."],
    ["04", "Testing", "Test the website and fix errors."],
    ["05", "Launch", "Launch your website for your customers."]
  ];

  // CLOSE MODAL WITH ESCAPE AND LOCK BACKGROUND SCROLL
  useEffect(() => {
    if (!selectedService) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.body.style.overflow = "hidden";
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const goToContact = () => {
    setSelectedService(null);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById("web-contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  };

  return (
    <div className="website-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        .website-page {
          --orange: rgb(214,110,30);
          --dark: #171b22;
          --light: #f7f8fa;
          font-family: Arial, sans-serif;
          color: #212529;
          overflow: hidden;
        }

        .website-page section {
          padding: 90px 8%;
        }

        .web-container {
          max-width: 1200px;
          margin: auto;
        }

        .web-tag {
          display: inline-block;
          color: var(--orange);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .web-heading {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 45px;
        }

        .web-heading h2 {
          font-size: 36px;
          line-height: 1.25;
          margin: 15px 0;
        }

        .web-heading p,
        .web-muted {
          color: #777;
          line-height: 1.8;
        }

        .web-btn {
          display: inline-block;
          padding: 15px 26px;
          background: var(--orange);
          color: white;
          border: 1px solid var(--orange);
          border-radius: 7px;
          text-decoration: none;
          font-weight: bold;
          transition: background .2s ease, transform .2s ease;
        }

        .web-btn:hover {
          background: var(--dark);
          border-color: var(--dark);
          color: white;
          transform: translateY(-3px);
        }

        /* HERO */

        .web-hero {
          min-height: 680px;
          display: flex;
          align-items: center;
          gap: 55px;
          background:
            radial-gradient(circle at 85% 20%, #d66e3020, transparent 30%),
            linear-gradient(120deg, #f8f9fa, #fff5ed);
          position: relative;
        }

        .web-hero-content,
        .web-hero-image {
          flex: 1;
        }

        .web-hero h1 {
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.15;
          margin: 22px 0;
          font-weight: 800;
        }

        .web-hero h1 span,
        .web-about h2 span,
        .web-why h2 span {
          color: var(--orange);
        }

        .web-hero-content > p {
          color: #777;
          line-height: 1.9;
          max-width: 550px;
        }

        .web-hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .web-outline {
          background: transparent;
          color: var(--dark);
        }

        .web-outline:hover {
          color: white;
        }

        .web-hero-image {
          display: flex;
          justify-content: center;
        }

        .web-code-card {
          width: 100%;
          max-width: 450px;
          padding: 32px;
          background: linear-gradient(145deg, #292f39, #141820);
          color: white;
          border: 1px solid #ffffff20;
          border-radius: 20px;
          box-shadow: 0 25px 55px #0002;
          animation: webFloat 5s ease-in-out infinite;
        }

        @keyframes webFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        .web-dots {
          display: flex;
          gap: 8px;
        }

        .web-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff6258;
        }

        .web-dots span:nth-child(2) {
          background: #ffc044;
        }

        .web-dots span:nth-child(3) {
          background: #39c879;
        }

        .web-code-card h3 {
          margin: 25px 0;
        }

        .web-code-card p {
          font-family: monospace;
          color: #d6dce5;
          line-height: 1.6;
        }

        .web-code-card .orange {
          color: #ff9a43;
        }

        .web-status {
          padding: 13px;
          margin-top: 22px;
          border-radius: 7px;
          background: #ffffff12;
          color: #8cf0ae;
        }

        /* ABOUT */

        .web-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .web-about h2,
        .web-why h2 {
          font-size: 40px;
          line-height: 1.3;
          margin-top: 15px;
        }

        .web-about p {
          color: #777;
          line-height: 1.9;
        }

        /* SERVICES */

        .web-services,
        .web-process {
          background: #f7f8fa;
        }

        .web-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .web-service-card {
          width: 100%;
          min-height: 285px;
          padding: 30px;
          text-align: left;
          font-family: inherit;
          color: #212529;
          background: white;
          border: 1px solid #eee;
          border-radius: 14px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition:
            transform .22s ease,
            box-shadow .22s ease,
            border-color .22s ease;
        }

        .web-service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--orange);
          transition: width .22s ease;
        }

        .web-service-card:hover::before {
          width: 100%;
        }

        .web-service-card:hover {
          transform: translateY(-7px);
          border-color: #d66e3060;
          box-shadow: 0 15px 35px #00000012;
        }

        .web-service-card:focus-visible {
          outline: 3px solid #d66e3060;
          outline-offset: 3px;
        }

        .web-service-icon {
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          background: #fff0e4;
          border-radius: 13px;
          font-size: 29px;
          margin-bottom: 22px;
          transition: transform .22s ease;
        }

        .web-service-card:hover .web-service-icon {
          transform: rotate(-6deg) scale(1.06);
        }

        .web-service-card h3 {
          font-size: 19px;
          margin: 0 0 12px;
        }

        .web-service-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
          margin: 0 0 17px;
        }

        .web-learn-more {
          color: var(--orange);
          font-weight: bold;
          font-size: 14px;
        }

        /* MODAL */

        .web-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background: rgba(10, 13, 18, .78);
        }

        .web-modal {
          position: relative;
          width: 100%;
          max-width: 760px;
          max-height: 88vh;
          overflow-y: auto;
          background: #fff;
          border-radius: 17px;
          box-shadow: 0 25px 80px #0005;
          scrollbar-width: thin;
          scrollbar-color: var(--orange) #eee;
        }

        .web-modal::-webkit-scrollbar {
          width: 6px;
        }

        .web-modal::-webkit-scrollbar-thumb {
          background: var(--orange);
          border-radius: 10px;
        }

        .web-modal-header {
          position: relative;
          padding: 35px 35px 30px;
          color: white;
          background: linear-gradient(120deg, #242a34, #141820);
        }

        .web-modal-close {
          position: absolute;
          top: 17px;
          right: 17px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid #ffffff35;
          border-radius: 50%;
          background: #ffffff15;
          color: white;
          font-size: 23px;
          cursor: pointer;
          transition: background .2s ease, transform .2s ease;
        }

        .web-modal-close:hover {
          background: var(--orange);
          transform: rotate(90deg);
        }

        .web-modal-icon {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          background: #ffffff17;
          border: 1px solid #ffffff25;
          border-radius: 15px;
          font-size: 32px;
          margin-bottom: 20px;
        }

        .web-modal-header .web-tag {
          color: #ffad72;
        }

        .web-modal-header h2 {
          font-size: 29px;
          margin: 12px 45px 10px 0;
          line-height: 1.3;
        }

        .web-modal-header p {
          color: #d3d6dc;
          line-height: 1.7;
          margin: 0;
        }

        .web-modal-content {
          padding: 30px 35px 35px;
        }

        .web-modal-section {
          margin-bottom: 27px;
        }

        .web-modal-section h3 {
          font-size: 19px;
          margin: 0 0 14px;
          color: #20242b;
        }

        .web-modal-description {
          color: #707780;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .web-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .web-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px;
          border-radius: 8px;
          background: #f8f8f9;
          color: #555d66;
          font-size: 13px;
          line-height: 1.6;
        }

        .web-feature-item span {
          color: var(--orange);
          font-weight: bold;
          font-size: 16px;
        }

        .web-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .web-tech-tag {
          padding: 9px 14px;
          background: #fff1e7;
          color: #bb581b;
          border-radius: 6px;
          font-size: 13px;
          font-weight: bold;
        }

        .web-modal-steps {
          display: grid;
          gap: 12px;
        }

        .web-modal-step {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        .web-modal-step strong {
          flex-shrink: 0;
          color: var(--orange);
          font-size: 14px;
        }

        .web-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          padding-top: 22px;
          border-top: 1px solid #eee;
        }

        .web-modal-footer p {
          margin: 0;
          color: #777;
          font-size: 13px;
        }

        /* TECHNOLOGIES */

        .web-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .web-tech-card {
          padding: 25px 12px;
          text-align: center;
          border: 1px solid #eee;
          border-radius: 10px;
          font-weight: bold;
          transition:
            background .2s ease,
            color .2s ease,
            transform .2s ease;
        }

        .web-tech-card:hover {
          background: var(--dark);
          color: white;
          transform: translateY(-5px);
          border-color: var(--dark);
        }

        .web-tech-card span {
          color: var(--orange);
          margin-right: 8px;
        }

        /* WHY CHOOSE US */

        .web-why {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 55px;
          align-items: center;
          background: var(--dark);
          color: white;
        }

        .web-why-content > p {
          color: #c5c8ce;
          line-height: 1.8;
        }

        .web-reasons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .web-reason {
          display: flex;
          gap: 12px;
          color: #eee;
          line-height: 1.6;
          font-size: 14px;
        }

        .web-reason span {
          color: #ff9a43;
          font-size: 20px;
          font-weight: bold;
        }

        .web-why-box {
          padding: 45px 30px;
          text-align: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #e88740, #c35b19);
          box-shadow: 0 15px 40px #d66e3030;
          transition: transform .25s ease;
        }

        .web-why-box:hover {
          transform: translateY(-6px);
        }

        .web-big-icon {
          font-size: 65px;
        }

        .web-why-box h3 {
          font-size: 25px;
          line-height: 1.5;
        }

        .web-why-box p {
          line-height: 1.8;
        }

        /* PROCESS */

        .web-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .web-process-card {
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 25px 18px;
          transition:
            transform .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .web-process-card:hover {
          transform: translateY(-6px);
          border-color: var(--orange);
          box-shadow: 0 12px 25px #0001;
        }

        .web-step-number {
          color: var(--orange);
          font-size: 32px;
          font-weight: 900;
        }

        .web-process-card p {
          color: #777;
          line-height: 1.7;
          font-size: 14px;
        }

        /* CTA */

        .web-cta {
          text-align: center;
          color: white;
          background: linear-gradient(120deg, #d66e30, #a94b15);
        }

        .web-cta h2 {
          font-size: clamp(28px, 4vw, 42px);
          margin: 20px 0;
        }

        .web-cta p {
          max-width: 620px;
          margin: 0 auto 25px;
          line-height: 1.8;
        }

        .web-cta .web-btn {
          background: var(--dark);
          border-color: var(--dark);
        }

        .web-cta .web-btn:hover {
          background: white;
          color: var(--dark);
        }

        /* CONTACT */

        .web-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
          background: #f8f9fa;
        }

        .web-contact-info h2 {
          font-size: 38px;
          line-height: 1.3;
          margin: 18px 0;
        }

        .web-contact-info > p {
          color: #777;
          line-height: 1.8;
        }

        .web-contact-detail {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 25px;
        }

        .web-contact-detail > span {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: #fff0e4;
          color: var(--orange);
          border-radius: 50%;
          font-size: 21px;
        }

        .web-contact-detail p {
          color: #777;
          margin: 5px 0;
        }

        .web-contact-form {
          padding: 32px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 12px 35px #00000010;
        }

        .web-contact-form h3 {
          font-size: 25px;
          margin: 0 0 22px;
        }

        .web-contact-form input,
        .web-contact-form select,
        .web-contact-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 16px;
          border: 1px solid #e1e1e1;
          border-radius: 7px;
          outline: none;
          font-family: inherit;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .web-contact-form input:focus,
        .web-contact-form select:focus,
        .web-contact-form textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px #d66e3018;
        }

        .web-contact-form textarea {
          resize: vertical;
        }

        .web-contact-form button {
          width: 100%;
          padding: 15px;
          background: var(--orange);
          color: white;
          border: none;
          border-radius: 7px;
          font-weight: bold;
          cursor: pointer;
          transition: background .2s ease, transform .2s ease;
        }

        .web-contact-form button:hover {
          background: var(--dark);
          transform: translateY(-2px);
        }

        /* RESPONSIVE */

        @media(max-width: 950px) {
          .web-hero {
            flex-direction: column;
            text-align: center;
          }

          .web-hero-content > p {
            margin: auto;
          }

          .web-hero-buttons {
            justify-content: center;
          }

          .web-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .web-process-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .web-why {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 600px) {
          .website-page section {
            padding: 60px 6%;
          }

          .web-about,
          .web-contact {
            grid-template-columns: 1fr;
          }

          .web-hero {
            min-height: auto;
          }

          .web-hero h1 {
            font-size: 36px;
          }

          .web-about h2,
          .web-why h2,
          .web-contact-info h2 {
            font-size: 30px;
          }

          .web-heading h2 {
            font-size: 29px;
          }

          .web-service-grid,
          .web-process-grid {
            grid-template-columns: 1fr;
          }

          .web-tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .web-reasons {
            grid-template-columns: 1fr;
          }

          .web-contact-form {
            padding: 23px;
          }

          .web-modal-overlay {
            padding: 10px;
          }

          .web-modal {
            max-height: 92vh;
            border-radius: 12px;
          }

          .web-modal-header {
            padding: 25px 22px;
          }

          .web-modal-header h2 {
            font-size: 23px;
          }

          .web-modal-content {
            padding: 23px 20px;
          }

          .web-feature-grid {
            grid-template-columns: 1fr;
          }

          .web-modal-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .web-modal-footer .web-btn {
            text-align: center;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .web-code-card {
            animation: none;
          }

          .website-page *,
          .website-page *::before,
          .website-page *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="web-hero">
        <AnimateSection className="web-hero-content">
          <span className="web-tag">WEBSITE DEVELOPMENT</span>

          <h1>
            We Build Modern
            <span> Websites For Your Business</span>
          </h1>

          <p>
            We create beautiful, responsive and user-friendly websites
            that help businesses grow and succeed in the digital world.
          </p>

          <div className="web-hero-buttons">
            <a href="#web-services" className="web-btn">
              Explore Services →
            </a>

            <a href="#web-contact" className="web-btn web-outline">
              Get In Touch
            </a>
          </div>
        </AnimateSection>

        <AnimateSection className="web-hero-image">
          <div className="web-code-card">
            <div className="web-dots">
              <span />
              <span />
              <span />
            </div>

            <h3>Website Development</h3>

            <p className="orange">const website = {"{"}</p>
            <p>design: "Modern",</p>
            <p>responsive: true,</p>
            <p>performance: "Fast",</p>
            <p>quality: "Professional"</p>
            <p className="orange">{"}"}</p>

            <div className="web-status">
              ● Website Ready
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* ABOUT */}
      <section>
        <AnimateSection className="web-container web-about">
          <div>
            <span className="web-tag">ABOUT OUR SERVICE</span>

            <h2>
              We Create Websites That
              <span> Make A Difference</span>
            </h2>
          </div>

          <div>
            <p className="web-muted">
              Website development is the process of creating and maintaining
              websites. It includes designing pages, writing code, adding
              functionality and making websites responsive.
            </p>

            <p className="web-muted">
              Our goal is to build websites that look professional,
              work smoothly and provide a great visitor experience.
            </p>
          </div>
        </AnimateSection>
      </section>

      {/* SERVICES */}
      <section className="web-services" id="web-services">
        <AnimateSection className="web-container">
          <div className="web-heading">
            <span className="web-tag">WHAT WE OFFER</span>

            <h2>Our Website Development Services</h2>

            <p>
              Complete web solutions to help your business grow online.
              Explore our services to learn more.
            </p>
          </div>

          <div className="web-service-grid">
            {services.map((service, index) => (
              <motion.button
                type="button"
                className="web-service-card"
                variants={itemAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                key={index}
                onClick={() => setSelectedService(service)}
                aria-label={`View details for ${service.title}`}
              >
                <div className="web-service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="web-learn-more">
                  Explore Details <span>→</span>
                </span>
              </motion.button>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* SERVICE DETAILS MODAL */}
      <AnimatePresence initial={false}>
        {selectedService && (
          <motion.div
            className="web-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.13, ease: "easeOut" }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="web-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="web-modal-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 7 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="web-modal-header">
                <button
                  type="button"
                  className="web-modal-close"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close service details"
                >
                  ×
                </button>

                <div className="web-modal-icon">
                  {selectedService.icon}
                </div>

                <span className="web-tag">
                  SERVICE DETAILS
                </span>

                <h2 id="web-modal-title">
                  {selectedService.title}
                </h2>

                <p>{selectedService.description}</p>
              </div>

              <div className="web-modal-content">

                {/* DESCRIPTION */}
                <div className="web-modal-section">
                  <h3>About This Service</h3>

                  <p className="web-modal-description">
                    {selectedService.details}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="web-modal-section">
                  <h3>What We Provide</h3>

                  <div className="web-feature-grid">
                    {selectedService.features.map((feature, index) => (
                      <div className="web-feature-item" key={index}>
                        <span>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECHNOLOGIES */}
                <div className="web-modal-section">
                  <h3>Technologies We Use</h3>

                  <div className="web-tech-tags">
                    {selectedService.technologies.map((tech, index) => (
                      <span className="web-tech-tag" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PROCESS */}
                <div className="web-modal-section">
                  <h3>Our Working Process</h3>

                  <div className="web-modal-steps">
                    {selectedService.process.map((step, index) => (
                      <div className="web-modal-step" key={index}>
                        <strong>
                          {String(index + 1).padStart(2, "0")}
                        </strong>

                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="web-modal-footer">
                  <p>
                    Interested in this service? Let's discuss your project.
                  </p>

                  <button
                    type="button"
                    className="web-btn"
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

      {/* TECHNOLOGIES */}
      <section>
        <AnimateSection className="web-container">
          <div className="web-heading">
            <span className="web-tag">OUR TECHNOLOGIES</span>

            <h2>Technologies We Work With</h2>

            <p>
              Modern technologies for powerful and professional websites.
            </p>
          </div>

          <div className="web-tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                className="web-tech-card"
                variants={itemAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                key={index}
              >
                <span>✦</span>
                {tech}
              </motion.div>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* WHY CHOOSE US */}
      <section className="web-why">
        <AnimateSection className="web-why-content">
          <span className="web-tag">WHY CHOOSE US</span>

          <h2>
            Why Our Website Development
            <span> Services?</span>
          </h2>

          <p>
            We focus on quality, performance and user experience
            to deliver websites that meet your business goals.
          </p>

          <div className="web-reasons">
            {reasons.map((reason, index) => (
              <motion.div
                className="web-reason"
                variants={itemAnimation}
                key={index}
              >
                <span>✓</span>
                {reason}
              </motion.div>
            ))}
          </div>
        </AnimateSection>

        <AnimateSection>
          <div className="web-why-box">
            <div className="web-big-icon">🌐</div>

            <h3>Your Business Deserves A Better Website</h3>

            <p>
              Build your online presence with a modern professional website.
            </p>
          </div>
        </AnimateSection>
      </section>

      {/* PROCESS */}
      <section className="web-process">
        <AnimateSection className="web-container">
          <div className="web-heading">
            <span className="web-tag">HOW WE WORK</span>

            <h2>Our Website Development Process</h2>

            <p>
              A simple and effective process to create successful websites.
            </p>
          </div>

          <div className="web-process-grid">
            {steps.map((step, index) => (
              <motion.div
                className="web-process-card"
                variants={itemAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                key={index}
              >
                <span className="web-step-number">
                  {step[0]}
                </span>

                <h3>{step[1]}</h3>

                <p>{step[2]}</p>
              </motion.div>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* CTA */}
      <section className="web-cta">
        <AnimateSection>
          <span
            className="web-tag"
            style={{ color: "white" }}
          >
            LET'S BUILD SOMETHING GREAT
          </span>

          <h2>Ready To Build Your New Website?</h2>

          <p>
            Let's discuss your project and create a website that
            takes your business to the next level.
          </p>

          <a href="#web-contact" className="web-btn">
            Start Your Project →
          </a>
        </AnimateSection>
      </section>

      {/* CONTACT */}
      <section className="web-contact" id="web-contact">
        <AnimateSection className="web-contact-info">
          <span className="web-tag">GET IN TOUCH</span>

          <h2>Let's Discuss Your Website Project</h2>

          <p>
            Tell us about your project. Fill out the form and
            we will get back to you.
          </p>

          <div className="web-contact-detail">
            <span>✉</span>

            <div>
              <h4>Email Us</h4>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="web-contact-detail">
            <span>🌐</span>

            <div>
              <h4>Our Services</h4>
              <p>Website Design & Development</p>
            </div>
          </div>
        </AnimateSection>

        <AnimateSection>
          <form
            className="web-contact-form"
            onSubmit={handleSubmit}
          >
            <h3>Get A Free Quote</h3>

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
              <option value="">Select Your Service</option>
              <option value="Custom Website">
                Custom Website
              </option>
              <option value="React Development">
                React Development
              </option>
              <option value="E-Commerce">
                E-Commerce Website
              </option>
              <option value="Responsive Design">
                Responsive Design
              </option>
              <option value="Website Maintenance">
                Website Maintenance
              </option>
              <option value="Website Optimization">
                Website Optimization
              </option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Submit Message →
            </button>
          </form>
        </AnimateSection>
      </section>

    </div>
  );
};

export default WebsiteDev;
