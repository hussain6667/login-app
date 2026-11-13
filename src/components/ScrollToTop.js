
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const height =
            document.documentElement.scrollHeight - window.innerHeight;

          setScroll(height > 0 ? (scrollTop / height) * 100 : 0);
          setShowButton(scrollTop > 300);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button
        onClick={goToTop}
        className={`global-scroll-button ${showButton ? "active" : ""}`}
        title="Back to Top"
        aria-label="Scroll to top"
        tabIndex={showButton ? 0 : -1}
      >
        <svg className="progress-ring" viewBox="0 0 52 52">
          <circle
            className="ring-bg"
            cx="26"
            cy="26"
            r="23"
          />
          <circle
            className="ring-progress"
            cx="26"
            cy="26"
            r="23"
            style={{
              strokeDashoffset: 144.5 - (144.5 * scroll) / 100
            }}
          />
        </svg>

        <span className="top-arrow">↑</span>
      </button>

      <style>{`
        .global-scroll-button {
          position: fixed;
          right: 25px;
          bottom: 25px;
          width: 58px;
          height: 58px;
          border: none;
          border-radius: 50%;
          background: linear-gradient(145deg, #f28b43, rgb(214,110,30));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 99999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(.8);
          transition:
            opacity .3s ease,
            transform .35s cubic-bezier(.2,.8,.2,1),
            visibility .3s;
          box-shadow: 0 8px 25px rgba(214,110,30,.35);
          outline: none;
        }

        .global-scroll-button.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .global-scroll-button:hover {
          background: #212529;
          transform: translateY(-6px) scale(1.06);
          box-shadow: 0 12px 30px rgba(0,0,0,.3);
        }

        .global-scroll-button:active {
          transform: scale(.93);
        }

        .progress-ring {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
          pointer-events: none;
        }

        .progress-ring circle {
          fill: none;
          stroke-width: 2.5;
        }

        .ring-bg {
          stroke: rgba(255,255,255,.25);
        }

        .ring-progress {
          stroke: white;
          stroke-linecap: round;
          stroke-dasharray: 144.5;
          transition: stroke-dashoffset .15s linear;
        }

        .top-arrow {
          font-size: 32px;
          line-height: 1;
          font-weight: bold;
          position: relative;
          transition: transform .3s ease;
        }

        .global-scroll-button:hover .top-arrow {
          transform: translateY(-4px);
        }

        .global-scroll-button:focus-visible {
          outline: 3px solid #212529;
          outline-offset: 4px;
        }

        @media(max-width: 576px) {
          .global-scroll-button {
            width: 48px;
            height: 48px;
            right: 15px;
            bottom: 15px;
          }

          .top-arrow {
            font-size: 27px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .global-scroll-button,
          .top-arrow,
          .ring-progress {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
