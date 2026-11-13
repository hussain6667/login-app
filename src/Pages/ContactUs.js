
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import ApiUrl from "../components/ApiUrl";
import "./../App.css";

const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const positions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { x: 35, y: 0 },
    right: { x: -35, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...positions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Location",
      text: "Add your company address here.",
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone Number",
      text: "Add your contact number here.",
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      text: "Add your business email here.",
    },
  ];

  const reasons = [
    {
      icon: "fas fa-award",
      title: "Quality Services",
      text: "Reliable and high-quality IT solutions according to your business needs.",
    },
    {
      icon: "fas fa-bolt",
      title: "Fast Support",
      text: "Our team is ready to help with your questions and technical problems.",
    },
    {
      icon: "fas fa-users",
      title: "Professional Team",
      text: "Experienced professionals delivering modern digital solutions.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // SEND DATA TO BACKEND
  const sendData = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);

      const params = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        services: formData.service,
        message: formData.message.trim(),
      };

      const response = await axios.post(
        `${ApiUrl}/unit/create`,
        params
      );

      console.log("Backend Response:", response.data);

      if (response.data.status === "success") {
        toast.success(
          response.data.message ||
          "Your message has been submitted successfully!"
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(
          response.data.message || "Something went wrong!"
        );
      }
    } catch (error) {
      console.error(
        "API Error:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message ||
        "Unable to submit your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      <style>{`

        .contact-page {
          --orange: rgb(214, 110, 30);
          --dark: #292e32;
          --gray: #777;
          font-family: "Montserrat", sans-serif;
          overflow: hidden;
          color: var(--dark);
          background: #fff;
        }

        .contact-page * {
          box-sizing: border-box;
        }

        .contact-hero {
          min-height: 390px;
          padding: 85px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            linear-gradient(
              110deg,
              rgba(25,29,32,.96),
              rgba(33,37,41,.82),
              rgba(25,29,32,.94)
            ),
            url("./../Assets/C WORLD, Website, Slider (3).be26b794f41e4ef674f3.jpg");
          background-position: center;
          background-size: cover;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: var(--orange);
          opacity: .15;
          filter: blur(90px);
          right: -100px;
          top: -130px;
          z-index: -1;
          animation: contactGlow 5s ease-in-out infinite alternate;
        }

        @keyframes contactGlow {
          to {
            transform: translate(-70px, 70px) scale(1.2);
          }
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
        }

        .contact-hero .hero-tag,
        .contact-heading > span {
          color: var(--orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2.5px;
        }

        .contact-hero h1 {
          font-size: clamp(38px, 6vw, 62px);
          font-weight: 950;
          margin: 18px 0;
        }

        .contact-hero h1 span,
        .contact-heading h2 span {
          color: var(--orange);
        }

        .contact-hero p {
          max-width: 620px;
          margin: auto;
          color: #ddd;
          font-size: 14px;
          line-height: 1.9;
        }

        .hero-orbit {
          position: absolute;
          width: 210px;
          height: 210px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          right: 9%;
          bottom: -130px;
          animation: orbit 14s linear infinite;
        }

        .hero-orbit-two {
          width: 130px;
          height: 130px;
          left: 10%;
          right: auto;
          bottom: auto;
          top: -75px;
          animation-direction: reverse;
        }

        @keyframes orbit {
          to {
            transform: rotate(360deg);
          }
        }

        .contact-section {
          padding: 75px 0;
        }

        .contact-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .contact-heading h2 {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 900;
          margin: 12px 0;
          color: var(--dark);
        }

        .contact-heading p {
          color: var(--gray);
          font-size: 13px;
          line-height: 1.9;
          max-width: 620px;
          margin: auto;
        }

        .contact-line {
          width: 55px;
          height: 4px;
          background: var(--orange);
          border-radius: 10px;
          margin: 17px auto 0;
        }

        .contact-info-card {
          position: relative;
          height: 100%;
          padding: 30px 18px;
          text-align: center;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fff;
          overflow: hidden;
          transition: .3s ease;
        }

        .contact-info-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--orange);
          transition: width .35s ease;
        }

        .contact-info-card:hover::before {
          width: 100%;
        }

        .contact-info-card:hover {
          border-color: rgba(214,110,30,.35);
          box-shadow: 0 14px 32px rgba(0,0,0,.08);
        }

        .contact-info-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          border-radius: 18px;
          background: #fff2e8;
          color: var(--orange);
          font-size: 24px;
          transition: .35s ease;
        }

        .contact-info-card:hover .contact-info-icon {
          color: #fff;
          background: var(--orange);
          border-radius: 50%;
          transform: rotateY(180deg);
        }

        .contact-info-card h5 {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .contact-info-card p {
          color: var(--gray);
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
          overflow-wrap: anywhere;
        }

        .contact-form-section {
          background: linear-gradient(135deg, #f8f9fa, #fff5ed);
        }

        .contact-form-wrapper {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 15px 45px rgba(0,0,0,.07);
        }

        .contact-form-info {
          position: relative;
          overflow: hidden;
          padding: 45px 35px;
          background: linear-gradient(145deg, #292e32, #171b1e);
          color: white;
        }

        .contact-form-info::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -85px;
          bottom: -85px;
          border: 25px solid rgba(214,110,30,.12);
          border-radius: 50%;
        }

        .contact-form-info > span {
          color: var(--orange);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .contact-form-info h3 {
          font-size: 27px;
          font-weight: 900;
          line-height: 1.4;
          margin: 15px 0;
        }

        .contact-form-info h3 span {
          color: var(--orange);
        }

        .contact-form-info > p {
          color: #ccc;
          font-size: 12px;
          line-height: 1.9;
          margin-bottom: 32px;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 22px;
          transition: transform .25s ease;
        }

        .contact-detail:hover {
          transform: translateX(6px);
        }

        .contact-detail-icon {
          min-width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--orange);
          border-radius: 13px;
          color: white;
          font-size: 16px;
        }

        .contact-detail h6 {
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .contact-detail p {
          color: #ccc;
          font-size: 12px;
          margin: 0;
        }

        .contact-form-area {
          padding: 45px 40px;
        }

        .contact-form-area .contact-heading {
          margin-bottom: 25px;
        }

        .contact-form-area .contact-heading h2 {
          margin-top: 10px;
        }

        .contact-form-area label {
          display: block;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 8px;
          color: #333;
        }

        .contact-form-area .form-control,
        .contact-form-area .form-select {
          min-height: 48px;
          border: 1px solid #e5e5e5;
          border-radius: 9px;
          font-size: 12px;
          padding: 12px 14px;
          box-shadow: none;
          transition: .3s ease;
        }

        .contact-form-area .form-control:focus,
        .contact-form-area .form-select:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px rgba(214,110,30,.10);
        }

        .contact-form-area textarea.form-control {
          min-height: 130px;
          resize: vertical;
        }

        .contact-submit {
          width: 100%;
          border: none;
          border-radius: 9px;
          padding: 15px 20px;
          background: var(--orange);
          color: white;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .contact-submit:hover {
          background: #292e32;
          box-shadow: 0 10px 25px rgba(0,0,0,.15);
        }

        .contact-submit:disabled {
          opacity: .7;
          cursor: not-allowed;
        }

        .contact-why-section {
          background: #fff;
        }

        .why-card {
          height: 100%;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 28px 22px;
          border: 1px solid #eee;
          border-radius: 15px;
          background: #fff;
          transition: .3s ease;
        }

        .why-card:hover {
          border-color: rgba(214,110,30,.4);
          box-shadow: 0 15px 35px rgba(0,0,0,.07);
        }

        .why-icon {
          min-width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #fff2e8;
          color: var(--orange);
          font-size: 22px;
        }

        .why-card h5 {
          font-size: 15px;
          font-weight: 900;
          margin: 5px 0 10px;
        }

        .why-card p {
          color: var(--gray);
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .contact-cta {
          padding: 65px 0;
          background: linear-gradient(120deg, #252a2e, #171b1e);
          color: white;
        }

        .contact-cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .contact-cta-content span {
          color: var(--orange);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .contact-cta-content h2 {
          font-size: clamp(25px, 4vw, 35px);
          font-weight: 900;
          margin: 12px 0;
        }

        .contact-cta-content p {
          color: #ccc;
          font-size: 13px;
          margin: 0;
        }

        .contact-cta-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 25px;
          border-radius: 8px;
          background: var(--orange);
          color: white;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: .3s ease;
        }

        .contact-cta-button:hover {
          color: white;
          background: #fff;
          color: var(--dark);
        }

        @media(max-width: 991px) {
          .contact-form-wrapper {
            grid-template-columns: 1fr;
          }

          .contact-form-info,
          .contact-form-area {
            padding: 35px 25px;
          }
        }

        @media(max-width: 767px) {
          .contact-section {
            padding: 55px 0;
          }

          .contact-hero {
            min-height: 330px;
            padding: 65px 15px;
          }

          .contact-cta-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-cta {
            padding: 50px 0;
          }
        }

        @media(max-width: 480px) {
          .contact-form-info,
          .contact-form-area {
            padding: 30px 18px;
          }

          .contact-info-card {
            padding: 25px 15px;
          }
        }

      `}</style>

      {/* HERO SECTION */}

      <section className="contact-hero">

        <div className="hero-orbit" />
        <div className="hero-orbit hero-orbit-two" />

        <Reveal>
          <div className="contact-hero-content">

            <span className="hero-tag">
              CONTACT US
            </span>

            <h1>
              Get In <span>Touch</span>
            </h1>

            <p>
              Have a question or need professional assistance?
              We are here to help you. Contact our team today.
            </p>

          </div>
        </Reveal>

      </section>

      {/* CONTACT INFORMATION */}

      <section className="contact-section">

        <div className="container">

          <Reveal>
            <div className="contact-heading">

              <span>GET IN TOUCH</span>

              <h2>
                We'd Love To <span>Hear From You</span>
              </h2>

              <p>
                Feel free to contact us for any questions,
                services or business inquiries.
              </p>

              <div className="contact-line" />

            </div>
          </Reveal>

          <div className="row g-4">

            {contactInfo.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={item.title}>

                <Reveal delay={index * 0.1}>

                  <motion.div
                    className="contact-info-card"
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.25 }}
                  >

                    <div className="contact-info-icon">
                      <i className={item.icon} />
                    </div>

                    <h5>{item.title}</h5>

                    <p>{item.text}</p>

                  </motion.div>

                </Reveal>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section
        className="contact-section contact-form-section"
        id="contact-form"
      >

        <div className="container">

          <Reveal>

            <div className="contact-form-wrapper">

              {/* LEFT SIDE */}

              <div className="contact-form-info">

                <span>CONTACT DETAILS</span>

                <h3>
                  We'd Love To Hear <span>From You!</span>
                </h3>

                <p>
                  Have questions or need professional assistance?
                  Send us a message. Our team will get back to you.
                </p>

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <i className="fas fa-phone-alt" />
                  </div>

                  <div>
                    <h6>Call Us</h6>
                    <p>+92 XXX XXXXXXX</p>
                  </div>

                </div>

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <i className="fas fa-envelope" />
                  </div>

                  <div>
                    <h6>Email Us</h6>
                    <p>info@example.com</p>
                  </div>

                </div>

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <i className="fas fa-clock" />
                  </div>

                  <div>
                    <h6>Working Hours</h6>
                    <p>Monday - Saturday</p>
                  </div>

                </div>

              </div>

              {/* RIGHT SIDE FORM */}

              <div className="contact-form-area">

                <div className="contact-heading text-start mb-4">

                  <span>SEND MESSAGE</span>

                  <h2>
                    Get In <span>Touch</span>
                  </h2>

                </div>

                <form onSubmit={sendData}>

                  <div className="row g-3">

                    <div className="col-md-6">

                      <label>Your Name</label>

                      <input
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

                      <label>Email Address</label>

                      <input
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

                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="col-md-6">

                      <label>Select Service</label>

                      <select
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Choose a service
                        </option>

                        <option value="Software Development">
                          Software Development
                        </option>

                        <option value="Website Development">
                          Website Development
                        </option>

                        <option value="Application Development">
                          Application Development
                        </option>

                        <option value="Graphic Designing">
                          Graphic Designing
                        </option>

                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>

                        <option value="Networking">
                          Networking
                        </option>

                        <option value="CCTV">
                          CCTV & Security Systems
                        </option>

                      </select>

                    </div>

                    <div className="col-12">

                      <label>Your Message</label>

                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="col-12">

                      <motion.button
                        type="submit"
                        className="contact-submit"
                        disabled={loading}
                        whileHover={{
                          scale: loading ? 1 : 1.015,
                        }}
                        whileTap={{
                          scale: loading ? 1 : 0.98,
                        }}
                      >

                        {loading ? (
                          <>
                            <i className="fas fa-spinner fa-spin me-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <i className="fas fa-paper-plane ms-2" />
                          </>
                        )}

                      </motion.button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="contact-section contact-why-section">

        <div className="container">

          <Reveal>

            <div className="contact-heading">

              <span>WHY CHOOSE US</span>

              <h2>
                Why Work <span>With Us?</span>
              </h2>

              <p>
                We focus on quality, innovation and customer satisfaction
                to deliver the best digital solutions.
              </p>

              <div className="contact-line" />

            </div>

          </Reveal>

          <div className="row g-4">

            {reasons.map((item, index) => (

              <div className="col-lg-4 col-md-6" key={item.title}>

                <Reveal delay={index * 0.1}>

                  <motion.div
                    className="why-card"
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.25 }}
                  >

                    <div className="why-icon">
                      <i className={item.icon} />
                    </div>

                    <div>

                      <h5>{item.title}</h5>

                      <p>{item.text}</p>

                    </div>

                  </motion.div>

                </Reveal>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="contact-cta">

        <div className="container">

          <Reveal>

            <div className="contact-cta-content">

              <div>

                <span>LET'S WORK TOGETHER</span>

                <h2>
                  Have a Project in Mind?
                </h2>

                <p>
                  Let's turn your ideas into reality with our
                  professional IT services.
                </p>

              </div>

              <motion.a
                href="#contact-form"
                className="contact-cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >

                Contact Us Now
                <i className="fas fa-arrow-right" />

              </motion.a>

            </div>

          </Reveal>

        </div>

      </section>

    </div>
  );
};

export default ContactUs;
