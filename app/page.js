"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const tabs = {
  skills: {
    title: "Skills",
    content: [
      { label: "Frontend", value: "HTML / CSS / TailwindCSS / Javascript / React.js / Next.js" },
      { label: "Backend", value: "Node.js / Express.js" },
      { label: "Database", value: "MongoDB / SQL" },
      { label: "Tools", value: "Git & Github / Postman / ChatGPT / Claude.ai / Deepseek" },
    ],
  },
  experience: {
    title: "Experience",
    content: [{ label: "6 months Experience", value: "Working as a Full-Stack Developer at Nexcore Alliance" }],
  },
  education: {
    title: "Education",
    content: [
      { label: "2020", value: "12th from Siddharth College Maharashtra Board" },
      { label: "2024", value: "Graduated in BSc.IT from Siddharth College" },
      { label: "2024", value: "Completed MERN Stack course from Apna College online course" },
      { label: "2025", value: "Pursuing in MSc.IT - Cloud Computing from B.K. Birla College, Kalyan" },
    ],
  },
};

const projects = [
  {
    title: "amfah.com",
    url: "https://amfah.com",
    description: "Live website: amfah.com",
    image: "/thumbs/amfah.png",
  },
  {
    title: "workernear.com",
    url: "https://workernear.com",
    description: "Live website: workernear.com",
    image: "/thumbs/workernear.png",
  },
  {
    title: "Hotel Booking",
    url: "https://hotel-booking-omega-brown.vercel.app/",
    description: "Hotel booking application (live)",
    image: "/thumbs/hotel.png",
  },
];

const services = [
  {
    icon: "fa-solid fa-code",
    title: "Web Design",
    description:
      "I design clean, modern, and responsive website interfaces that align with branding and real-world use.",
  },
  {
    icon: "fa-brands fa-android",
    title: "Web App",
    description:
      "I build scalable, secure, and high-performance web applications tailored to real-world business needs.",
  },
  {
    icon: "fa-solid fa-crop-simple",
    title: "UI/UX Design",
    description:
      "Create intuitive and user-friendly interfaces using Figma, focusing on usability, visual hierarchy, and consistency.",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("skills");
  const [menuOpen, setMenuOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    const emailjsApi = window.emailjs;
    if (emailjsApi) {
      emailjsApi.init("LTjmpNG4mG3h7V9o7");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const emailjsApi = window.emailjs;

    if (!form || !emailjsApi) {
      setStatusMessage("Email service is unavailable right now.");
      setStatusType("error");
      return;
    }

    try {
      await emailjsApi.sendForm("service_f4p5xwr", "template_sr21o9a", form);
      setStatusMessage("✅ Message Sent Successfully");
      setStatusType("success");
      form.reset();
      window.setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 5000);
    } catch (error) {
      setStatusMessage("❌ Failed to send message");
      setStatusType("error");
      console.error(error);
    }
  };

  return (
    <main>
      <header id="header">
        <div className="container">
          <nav>
            <a href="#header" className="logo-title">
              <h1>Vivek</h1>
            </a>
            <ul id="sidemenu" className={menuOpen ? "open" : ""}>
              <li>
                <a href="#header" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <Link href="/experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/education" onClick={() => setMenuOpen(false)}>
                  Education
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </ul>
            <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <i className="fa-solid fa-bars"></i>
            </button>
          </nav>
        </div>
        <div className="header-text">
          <p>Full-Stack Developer</p>
          <h1>
            Hi, I'm <span>Vivek Singh</span>
            <br /> from India
          </h1>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="/about3.png" alt="Vivek Singh" loading="lazy" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Hello, my name is Vivek Singh. I have completed my Bachelor of Science in Information
                Technology (BSc.IT) from Siddharth College of Arts, Commerce and Science, affiliated
                with Mumbai University, where I also completed my 12th grade.
                <br />
                <br />
                Currently, I am pursuing a Master of Science in Information Technology (MSc.IT) with a
                specialization in Cloud Computing from B.K. Birla College, Kalyan, affiliated with Mumbai
                University.
                <br />
                <br />
                I am working as a Full Stack Developer at Nexcore Alliance, where I design and develop
                scalable web applications using modern technologies across both frontend and backend.
              </p>
              <div className="tab-title">
                {Object.keys(tabs).map((tabKey) => (
                  <button
                    key={tabKey}
                    className={`tab-button ${activeTab === tabKey ? "active-link" : ""}`}
                    onClick={() => setActiveTab(tabKey)}
                  >
                    {tabs[tabKey].title}
                  </button>
                ))}
              </div>
              {Object.entries(tabs).map(([tabKey, tab]) => (
                <div key={tabKey} className={`tab-contents ${activeTab === tabKey ? "active-tab" : ""}`}>
                  <ul>
                    {tab.content.map((item) => (
                      <li key={item.label}>
                        <span>{item.label}</span>
                        <br />
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            {services.map((service) => (
              <div key={service.title}>
                <i className={service.icon}></i>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href="#">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Projects</h1>
          <div className="work-list">
            {projects.map((project) => (
              <div className="work" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="layer">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      ) : (
                        <a href="#">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      )}
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="btn">
            See More
          </a>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <i className="fa-solid fa-envelope"></i> vviveksingh8874@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-square-phone"></i> 9305380267
              </p>
            </div>
            <div className="contact-right">
              <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              {statusMessage ? <span id="msg" className={statusType === "error" ? "error" : ""}>{statusMessage}</span> : null}
            </div>
          </div>
        </div>
      </section>

      <footer className="copyright">
        <p>
          Copyright © Vivek. Made By <i className="fa-solid fa-heart"></i> Vivek Singh
        </p>
      </footer>
    </main>
  );
}
