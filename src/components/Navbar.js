
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const services = [
    "Software Development",
    "Website Development",
    "Application Development",
    "Access Control System",
    "CCTV Surveillance",
    "Graphic Designing",
    "Digital Marketing",
    "Networking",
  ];

  const closeMenus = () => {
    setShowDropdown(false);
    setShowMobileMenu(false);
  };

  const getServicePath = (service) => {
    const paths = {
      "Software Development": "/software-dev",
      "Website Development": "/Website-Dev",
      "Application Development": "/Application-Dev",
      "Networking": "/Networking",
      "Digital Marketing": "/digital-marketing",
      "Graphic Designing": "/graphic-designing",
      "Access Control System": "/access-control",
      "CCTV Surveillance": "/cctv-surveillance",
    };

    return paths[service] || `/services/${service.toLowerCase().replaceAll(" ", "-")}`;
  };

  return (
    <div className="main-navbar">

      <style>{`

        .main-navbar {
          --primary: rgb(214, 110, 30);
          --dark: #212529;
          font-family: "Montserrat", sans-serif;
          position: relative;
          z-index: 9999;
        }

        .main-navbar * {
          box-sizing: border-box;
        }

        /* TOP BAR ANIMATION */

        .top-contact-bar {
          background: var(--dark);
          color: white;
          padding: 9px 5%;
          animation: topBarEnter .6s ease both;
        }

        .top-contact-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .top-contact-left {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .top-contact-bar a {
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          transition: color .3s ease;
        }

        .top-contact-bar a:hover {
          color: var(--primary);
        }

        .top-contact-icon {
          color: var(--primary);
          margin-right: 7px;
        }

        .top-contact-right {
          font-size: 12px;
          color: #ddd;
        }

        /* MAIN NAVBAR */

        .main-navigation {
          background: white;
          width: 100%;
          box-shadow: 0 5px 25px rgba(0,0,0,.07);
          position: sticky;
          top: 0;
          animation: navbarEnter .7s cubic-bezier(.22,1,.36,1) both;
        }

        .navigation-container {
          max-width: 1320px;
          margin: auto;
          padding: 12px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        @keyframes navbarEnter {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes topBarEnter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* LOGO */

        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform .35s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.04);
        }

        .navbar-logo img {
          height: 58px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
        }

        /* NAVIGATION LINKS */

        .navigation-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .navigation-links > a,
        .services-toggle {
          position: relative;
          text-decoration: none;
          color: var(--dark);
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          border: none;
          padding: 12px 0;
          cursor: pointer;
          font-family: inherit;
          transition: color .3s ease;
        }

        /* ANIMATED UNDERLINE */

        .navigation-links > a::after,
        .services-toggle::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 5px;
          width: 100%;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }

        .navigation-links > a:hover::after,
        .navigation-links > a.active::after,
        .services-toggle:hover::after,
        .services-toggle.open::after {
          transform: scaleX(1);
        }

        .navigation-links > a:hover,
        .navigation-links > a.active,
        .services-toggle:hover,
        .services-toggle.open {
          color: var(--primary);
        }

        .dropdown-arrow {
          display: inline-block;
          margin-left: 6px;
          font-size: 11px;
          transition: transform .3s ease;
        }

        .services-toggle.open .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* SERVICES DROPDOWN */

        .services-dropdown {
          position: relative;
        }

        .services-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: -15px;
          width: 245px;
          background: white;
          border-radius: 10px;
          padding: 10px 0;
          margin: 0;
          list-style: none;
          box-shadow: 0 15px 40px rgba(0,0,0,.13);
          border-top: 3px solid var(--primary);

          opacity: 0;
          visibility: hidden;
          pointer-events: none;

          transform: translateY(15px) scale(.97);
          transform-origin: top center;

          transition:
            opacity .25s ease,
            transform .3s cubic-bezier(.22,1,.36,1),
            visibility .25s ease;

          z-index: 1000;
        }

        .services-menu.show {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .services-menu li {
          opacity: 0;
          transform: translateX(-10px);
          transition:
            opacity .25s ease,
            transform .3s ease;
        }

        .services-menu.show li {
          opacity: 1;
          transform: translateX(0);
        }

        .services-menu.show li:nth-child(1) { transition-delay: .03s; }
        .services-menu.show li:nth-child(2) { transition-delay: .06s; }
        .services-menu.show li:nth-child(3) { transition-delay: .09s; }
        .services-menu.show li:nth-child(4) { transition-delay: .12s; }
        .services-menu.show li:nth-child(5) { transition-delay: .15s; }
        .services-menu.show li:nth-child(6) { transition-delay: .18s; }
        .services-menu.show li:nth-child(7) { transition-delay: .21s; }
        .services-menu.show li:nth-child(8) { transition-delay: .24s; }

        .services-menu li a {
          display: block;
          padding: 11px 18px;
          font-size: 12px;
          font-weight: 600;
          color: var(--dark);
          text-decoration: none;
          transition:
            color .25s ease,
            background .25s ease,
            padding-left .25s ease;
        }

        .services-menu li a:hover {
          color: var(--primary);
          background: #fff7f0;
          padding-left: 26px;
        }

        /* CONTACT BUTTON */

        .navbar-contact-btn {
          display: inline-block;
          background: var(--primary);
          color: white !important;
          padding: 13px 23px !important;
          border-radius: 50px;
          font-size: 13px !important;
          font-weight: 700;
          text-decoration: none;
          transition:
            background .3s ease,
            transform .3s ease,
            box-shadow .3s ease;
        }

        .navbar-contact-btn::after {
          display: none;
        }

        .navbar-contact-btn:hover {
          background: var(--dark);
          color: white !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,.16);
        }

        .navbar-contact-btn:active {
          transform: scale(.96);
        }

        /* MOBILE BUTTON */

        .mobile-menu-button {
          display: none;
          width: 43px;
          height: 43px;
          background: var(--primary);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 24px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: transform .3s ease, background .3s ease;
        }

        .mobile-menu-button:hover {
          background: var(--dark);
          transform: rotate(5deg);
        }

        /* TABLET */

        @media (max-width: 991px) {

          .navigation-container {
            padding: 12px 20px;
          }

          .mobile-menu-button {
            display: flex;
          }

          .navigation-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 15px 25px 25px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 5px;

            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-12px);

            box-shadow: 0 12px 20px rgba(0,0,0,.08);

            transition:
              opacity .3s ease,
              transform .35s cubic-bezier(.22,1,.36,1),
              visibility .3s ease;
          }

          .navigation-links.mobile-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .navigation-links > a,
          .services-toggle {
            display: block;
            width: 100%;
            text-align: left;
            padding: 13px 5px;
          }

          .services-dropdown {
            width: 100%;
          }

          .services-menu {
            position: static;
            display: block;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-8px);
            box-shadow: none;
            border: 1px solid #eee;
            border-top: 3px solid var(--primary);
            margin-top: 5px;
            border-radius: 8px;
            padding: 0;
            transition:
              max-height .4s ease,
              opacity .3s ease,
              transform .3s ease,
              visibility .3s ease,
              padding .3s ease;
          }

          .services-menu.show {
            max-height: 450px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
            padding: 8px 0;
          }

          .services-menu li {
            transform: translateX(-8px);
          }

          .navbar-contact-btn {
            text-align: center !important;
            width: fit-content !important;
            margin-top: 10px;
          }
        }

        /* MOBILE */

        @media (max-width: 576px) {

          .top-contact-bar {
            padding: 8px 12px;
          }

          .top-contact-inner {
            justify-content: center;
          }

          .top-contact-left {
            justify-content: center;
            gap: 8px 15px;
          }

          .top-contact-bar a {
            font-size: 10px;
          }

          .top-contact-right {
            display: none;
          }

          .navigation-container {
            padding: 10px 15px;
          }

          .navbar-logo img {
            height: 45px;
            max-width: 180px;
          }

          .mobile-menu-button {
            width: 40px;
            height: 40px;
            font-size: 21px;
          }

          .navigation-links {
            padding: 12px 20px 20px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .main-navbar *,
          .main-navbar *::before,
          .main-navbar *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }

      `}</style>

      {/* TOP CONTACT BAR */}

      <div className="top-contact-bar">
        <div className="top-contact-inner">

          <div className="top-contact-left">

            <a href="tel:0483768405">
              <span className="top-contact-icon">☎</span>
              048-3768405
            </a>

            <a href="tel:+923030918095">
              <span className="top-contact-icon">☎</span>
              +92-303-0918095
            </a>

            <a href="tel:+923407460699">
              <span className="top-contact-icon">☎</span>
              +92-340-7460699
            </a>

          </div>

          <div className="top-contact-right">
            Professional IT Solutions & Services
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}

      <nav className="main-navigation">

        <div className="navigation-container">

          {/* LOGO */}

          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenus}
          >
            <img
              src={require("./../Assets/sirwaseem60.c58a0dcf21dc92c70987.png")}
              alt="Company Logo"
            />
          </Link>

          {/* MOBILE BUTTON */}

          <button
            className="mobile-menu-button"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setShowDropdown(false);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={showMobileMenu}
          >
            {showMobileMenu ? "✕" : "☰"}
          </button>

          {/* NAVIGATION LINKS */}

          <div
            className={`navigation-links ${
              showMobileMenu ? "mobile-open" : ""
            }`}
          >

            <NavLink to="/" onClick={closeMenus} end>
              Home
            </NavLink>

            {/* SERVICES */}

            <div className="services-dropdown">

              <button
                className={`services-toggle ${
                  showDropdown ? "open" : ""
                }`}
                onClick={() => setShowDropdown(!showDropdown)}
                aria-expanded={showDropdown}
              >
                Services
                <span className="dropdown-arrow">▼</span>
              </button>

              <ul
                className={`services-menu ${
                  showDropdown ? "show" : ""
                }`}
              >

                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to={getServicePath(service)}
                      onClick={closeMenus}
                    >
                      {service}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>

            <NavLink to="/about" onClick={closeMenus}>
              About Us
            </NavLink>

            <NavLink to="/contact" onClick={closeMenus}>
              Contact Us
            </NavLink>

            <Link
              to="/contact"
              className="navbar-contact-btn"
              onClick={closeMenus}
            >
              Get A Quote →
            </Link>

          </div>

        </div>

      </nav>

    </div>
  );
};

export default Navbar;
