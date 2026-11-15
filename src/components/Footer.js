
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const orange = "rgb(214, 110, 30)";

  // ===============================
  // FOOTER DATA
  // ===============================

const company = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" }
];
  const services = [
  { name: "Software Development", path: "/software-dev" },
  { name: "Website Development", path: "/website-dev" },
  { name: "Application Development", path: "/application-dev" },
  { name: "Access Control System", path: "/AccessControl" },
  { name: "CCTV Surveillance", path: "/CCTV" },
  { name: "Graphic Designing", path: "/graphic-designing" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Networking", path: "/networking" }
];

  const phones = [
    "048-3768405",
    "+92-303-0918095",
    "+92-340-7460699"
  ];

  const socials = [
    {
      icon: "fab fa-facebook-f",
      link: "https://facebook.com",
      name: "Facebook"
    },
    {
      icon: "fab fa-instagram",
      link: "https://instagram.com",
      name: "Instagram"
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://linkedin.com",
      name: "LinkedIn"
    },
    {
      icon: "fab fa-youtube",
      link: "https://youtube.com",
      name: "YouTube"
    }
  ];

  // ===============================
  // SCROLL ANIMATION
  // ===============================

  useEffect(() => {

    const element = footerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08
      }
    );

    observer.observe(element);

    return () => observer.disconnect();

  }, []);

  // ===============================
  // FOOTER LINK COMPONENT
  // ===============================

  const FooterLink = ({ item, index }) => {

    return (
      <div
        className="footer-link-item"
        style={{
          transitionDelay: visible ? `${index * 35}ms` : "0ms"
        }}
      >

        <Link to={item.path} className="footer-link">

          <span className="footer-arrow">›</span>

          {item.name}

        </Link>

      </div>
    );

  };

  return (

    <footer
      className={`advanced-footer ${visible ? "footer-visible" : ""}`}
      ref={footerRef}
    >

      <style>{`

        .advanced-footer {
          --footer-orange: ${orange};
          position: relative;
          overflow: hidden;
          margin-top: 60px;
          background: #191d25;
          color: white;
          font-family: "Montserrat", sans-serif;
        }

        /* ===============================
           ANIMATED TOP LINE
        =============================== */

        .advanced-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent,
            ${orange},
            #ffbd85,
            ${orange},
            transparent
          );
          animation: footerLine 5s linear infinite;
        }

        @keyframes footerLine {
          from { left: -100%; }
          to { left: 100%; }
        }

        /* ===============================
           BACKGROUND GLOW
        =============================== */

        .footer-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(214,110,30,.07);
          filter: blur(80px);
          pointer-events: none;
          animation: footerGlow 8s ease-in-out infinite alternate;
        }

        .footer-glow.one {
          top: -180px;
          right: 5%;
        }

        .footer-glow.two {
          bottom: -180px;
          left: 5%;
          animation-delay: 2s;
        }

        @keyframes footerGlow {
          from {
            transform: translate(0,0) scale(.9);
          }
          to {
            transform: translate(35px,25px) scale(1.2);
          }
        }

        /* ===============================
           FOOTER CONTAINER
        =============================== */

        .footer-main {
          position: relative;
          z-index: 2;
          padding: 75px 0 60px;
        }

        .footer-column {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.22,1,.36,1);
        }

        .footer-visible .footer-column {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===============================
           BRAND AREA
        =============================== */

        .footer-brand {
          font-size: 29px;
          font-weight: 900;
          letter-spacing: 1px;
          margin-bottom: 18px;
        }

        .footer-brand span {
          color: var(--footer-orange);
        }

        .footer-description {
          color: #aeb3bd;
          font-size: 13px;
          line-height: 1.9;
          max-width: 290px;
          margin-bottom: 25px;
        }

        /* ===============================
           HEADINGS
        =============================== */

        .footer-heading {
          color: white;
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 27px;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 42px;
          height: 3px;
          border-radius: 5px;
          background: var(--footer-orange);
          transition: width .35s ease;
        }

        .footer-column:hover .footer-heading::after {
          width: 75px;
        }

        /* ===============================
           LINKS
        =============================== */

        .footer-link-item {
          margin-bottom: 13px;
          opacity: 0;
          transform: translateX(-12px);
          transition:
            opacity .5s ease,
            transform .5s ease;
        }

        .footer-visible .footer-link-item {
          opacity: 1;
          transform: translateX(0);
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #bfc2ca;
          text-decoration: none;
          font-size: 13px;
          transition: all .3s ease;
        }

        .footer-arrow {
          color: var(--footer-orange);
          font-size: 20px;
          line-height: 1;
          transition: transform .3s ease;
        }

        .footer-link:hover {
          color: var(--footer-orange);
          transform: translateX(6px);
        }

        .footer-link:hover .footer-arrow {
          transform: translateX(4px);
        }

        /* ===============================
           CONTACT DETAILS
        =============================== */

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 19px;
          color: #c4c7cf;
          font-size: 13px;
          line-height: 1.7;
          text-decoration: none;
          transition: all .3s ease;
        }

        .footer-contact-icon {
          min-width: 39px;
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(214,110,30,.13);
          color: var(--footer-orange);
          font-size: 15px;
          transition: all .35s ease;
        }

        .footer-contact-item:hover {
          color: white;
          transform: translateX(5px);
        }

        .footer-contact-item:hover .footer-contact-icon {
          color: white;
          background: var(--footer-orange);
          transform: rotate(-8deg) scale(1.08);
          box-shadow: 0 5px 20px rgba(214,110,30,.2);
        }

        /* ===============================
           ADDRESS
        =============================== */

        .footer-address {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          color: #bfc2ca;
          font-size: 13px;
          line-height: 1.9;
        }

        .footer-address-icon {
          min-width: 39px;
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(214,110,30,.13);
          color: var(--footer-orange);
        }

        /* ===============================
           SOCIAL ICONS
        =============================== */

        .footer-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .footer-social {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: white;
          background: #292e38;
          border: 1px solid rgba(255,255,255,.08);
          text-decoration: none;
          font-size: 16px;
          transition: all .35s cubic-bezier(.22,1,.36,1);
        }

        .footer-social:hover {
          color: white;
          background: var(--footer-orange);
          border-color: var(--footer-orange);
          transform: translateY(-7px) rotate(-5deg);
          box-shadow: 0 8px 20px rgba(214,110,30,.25);
        }

        /* ===============================
           COPYRIGHT
        =============================== */

        .footer-bottom {
          position: relative;
          z-index: 2;
          padding: 23px 15px;
          border-top: 1px solid rgba(255,255,255,.09);
          background: rgba(0,0,0,.15);
          text-align: center;
        }

        .footer-bottom p {
          margin: 0;
          color: #aeb3bd;
          font-size: 12px;
          line-height: 1.8;
        }

        .footer-bottom span {
          color: var(--footer-orange);
          font-weight: 800;
        }

        /* ===============================
           RESPONSIVE
        =============================== */

        @media (max-width: 991px) {

          .footer-main {
            padding: 60px 0 45px;
          }

          .footer-heading {
            font-size: 17px;
          }

        }

        @media (max-width: 576px) {

          .advanced-footer {
            margin-top: 35px;
          }

          .footer-main {
            padding: 50px 0 30px;
          }

          .footer-brand {
            font-size: 25px;
          }

          .footer-heading {
            margin-bottom: 20px;
            font-size: 17px;
          }

          .footer-description {
            font-size: 12px;
          }

          .footer-link {
            font-size: 12px;
          }

          .footer-contact-item,
          .footer-address {
            font-size: 12px;
          }

          .footer-social {
            width: 38px;
            height: 38px;
          }

          .footer-bottom p {
            font-size: 11px;
          }

        }

        /* ===============================
           REDUCED MOTION
        =============================== */

        @media (prefers-reduced-motion: reduce) {

          .advanced-footer *,
          .advanced-footer *::before,
          .advanced-footer *::after {
            animation: none !important;
            transition: none !important;
          }

          .footer-column,
          .footer-link-item {
            opacity: 1 !important;
            transform: none !important;
          }

        }

      `}</style>

      <div className="footer-glow one"></div>
      <div className="footer-glow two"></div>

      {/* ===============================
          MAIN FOOTER
      =============================== */}

      <div className="container-fluid px-4 px-md-5 footer-main">

        <div className="row g-5">

          {/* COMPANY */}

          <div className="col-12 col-sm-6 col-lg-3 footer-column">

            <div className="footer-brand">
              C <span>WORLD.</span>
            </div>

            <p className="footer-description">
              We provide innovative technology solutions,
              professional software development and
              creative digital services to help businesses
              grow in the modern world.
            </p>

            <div className="footer-socials">

              {socials.map((social, index) => (

                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>

              ))}

            </div>

          </div>

          {/* COMPANY LINKS */}

          <div
            className="col-12 col-sm-6 col-lg-2 footer-column"
            style={{ transitionDelay: "100ms" }}
          >

            <h5 className="footer-heading">
              Company
            </h5>

            {company.map((item, index) => (

              <FooterLink
                key={item.name}
                item={item}
                index={index}
              />

            ))}

          </div>

          {/* SERVICES */}

          <div
            className="col-12 col-sm-6 col-lg-3 footer-column"
            style={{ transitionDelay: "200ms" }}
          >

            <h5 className="footer-heading">
              Our Services
            </h5>

            {services.map((item, index) => (

              <FooterLink
                key={item.name}
                item={item}
                index={index}
              />

            ))}

          </div>

          {/* CONTACT */}

          <div
            className="col-12 col-sm-6 col-lg-2 footer-column"
            style={{ transitionDelay: "300ms" }}
          >

            <h5 className="footer-heading">
              Contact Us
            </h5>

            {phones.map((phone, index) => (

              <a
                key={index}
                href={`tel:${phone}`}
                className="footer-contact-item"
              >

                <span className="footer-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </span>

                {phone}

              </a>

            ))}

            <a
              href="mailto:info@example.com"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <i className="fas fa-envelope"></i>
              </span>

              info@example.com

            </a>

          </div>

          {/* ADDRESS */}

          <div
            className="col-12 col-lg-2 footer-column"
            style={{ transitionDelay: "400ms" }}
          >

            <h5 className="footer-heading">
              Our Address
            </h5>

            <div className="footer-address">

              <span className="footer-address-icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>

              <span>
                Office No. 121, First Floor,
                Al-Rehman Trade Center,
                University Road, Sargodha,
                Punjab, Pakistan.
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ===============================
          COPYRIGHT
      =============================== */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} <span>C WORLD.</span>
          {" "}All Rights Reserved.
          {" "}Made with <span>♥</span> by <span>C WORLD.</span>
        </p>

      </div>

    </footer>

  );

};

export default Footer;
