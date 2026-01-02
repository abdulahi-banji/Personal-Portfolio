import React from "react";

const App = () => {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.hero}>
        <div style={styles.heroLeft}>
          <p style={styles.kicker}>Aspiring AI Engineer · Full‑Stack Developer</p>
          <h1 style={styles.name}>Abdulahi Oyebanji</h1>
          <p style={styles.tagline}>
            I design and build intelligent systems, from embedded robotics to AI‑powered developer tools,
            while studying Computer Science at the University of Southern Mississippi.
          </p>

          <div style={styles.heroButtons}>
            <a href="mailto:abdulahioyebanji01@gmail.com" style={styles.primaryButton}>
              <i className="fa-solid fa-paper-plane" style={{ marginRight: 8 }}></i>
              Contact me
            </a>
            <a
              href="https://github.com/abdulahi-banji"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              <i className="fa-brands fa-github" style={{ marginRight: 8 }}></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdulahi-oyebanji/"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButtonAlt}
            >
              <i className="fa-brands fa-linkedin" style={{ marginRight: 8 }}></i>
              LinkedIn
            </a>
          </div>

          <div style={styles.metaRow}>
            <span>B.S. Computer Science · University of Southern Mississippi · GPA 3.80 · Hattiesburg, MS</span>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.statsCard}>
            <h3 style={styles.statsTitle}>
              <i className="fa-solid fa-bolt" style={{ marginRight: 8, color: "#facc15" }}></i>
              Focus areas
            </h3>
            <ul style={styles.statsList}>
              <li>AI tools that make developers faster and more confident</li>
              <li>Secure full‑stack apps with thoughtful UX</li>
              <li>Embedded and robotic systems that interact with the real world</li>
            </ul>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        {/* PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIconWrap}>
              <i className="fa-solid fa-code"></i>
            </span>
            Featured Projects
          </h2>

          <div style={styles.projectsGrid}>
            {/* AI Code Review */}
            <article style={styles.projectCard}>
              <div style={styles.projectHeaderRow}>
                <h3 style={styles.projectTitle}>AI‑Powered Code Review System</h3>
                <span style={styles.projectBadge}>AI · DevTools</span>
              </div>
              <p style={styles.projectStack}>
                <i className="fa-solid fa-robot" style={styles.stackIcon}></i>
                Python · Node.js · React · OpenAI API · SQLite
              </p>
              <p style={styles.projectText}>
                Built an AI‑driven code review assistant that analyzes code, flags bugs, suggests optimizations,
                and highlights best practices so developers get instant, actionable feedback.
              </p>
              <p style={styles.projectText}>
                Designed and tested dozens of scenarios and edge cases, boosting review efficiency and reducing
                recurring mistakes through automated guidance and clear explanations.
              </p>
            </article>

            {/* CloudVault */}
            <article style={styles.projectCard}>
              <div style={styles.projectHeaderRow}>
                <h3 style={styles.projectTitle}>CloudVault · Personal Cloud Storage</h3>
                <span style={styles.projectBadge}>Security · Full‑Stack</span>
              </div>
              <p style={styles.projectStack}>
                <i className="fa-solid fa-cloud" style={styles.stackIcon}></i>
                Python · Node.js · React · SQLite · JWT
              </p>
              <p style={styles.projectText}>
                Created a secure cloud storage platform where users can upload, organize, and download files with a
                responsive React UI and clean Material‑UI design.
              </p>
              <p style={styles.projectText}>
                Implemented JWT auth and role‑based access control, and tuned the SQLite schema for smoother queries on
                growing file metadata.
              </p>
            </article>

            {/* Arduino Car */}
            <article style={styles.projectCard}>
              <div style={styles.projectHeaderRow}>
                <h3 style={styles.projectTitle}>Remote‑Controlled Arduino Robotic Car</h3>
                <span style={styles.projectBadge}>Embedded · Robotics</span>
              </div>
              <p style={styles.projectStack}>
                <i className="fa-solid fa-microchip" style={styles.stackIcon}></i>
                Arduino · C/C++ · Bluetooth · PWM
              </p>
              <p style={styles.projectText}>
                Programmed and wired an Arduino‑based RC car with PWM motor control for precise steering and Bluetooth
                remote control with telemetry feedback.
              </p>
              <p style={styles.projectText}>
                Focused on calibration and testing to reduce setup errors and achieve stable, smooth operation over
                repeated runs.
              </p>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIconWrap}>
              <i className="fa-solid fa-toolbox"></i>
            </span>
            Skills & Stack
          </h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillColumn}>
              <h3 style={styles.skillHeading}>
                <i className="fa-solid fa-code" style={styles.skillIcon}></i>
                Languages
              </h3>
              <ul style={styles.skillList}>
                <li>Python</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div style={styles.skillColumn}>
              <h3 style={styles.skillHeading}>
                <i className="fa-solid fa-layer-group" style={styles.skillIcon}></i>
                Frameworks & Tools
              </h3>
              <ul style={styles.skillList}>
                <li>React · Node.js · FastAPI</li>
                <li>Material‑UI · OpenAI API</li>
                <li>Git & GitHub · Vercel</li>
                <li>VS Code · Google Cloud · Figma</li>
              </ul>
            </div>
            <div style={styles.skillColumn}>
              <h3 style={styles.skillHeading}>
                <i className="fa-solid fa-graduation-cap" style={styles.skillIcon}></i>
                Foundations
              </h3>
              <ul style={styles.skillList}>
                <li>Data Structures & Algorithms</li>
                <li>Object‑Oriented Design</li>
                <li>REST APIs · Web Security basics</li>
                <li>Machine Learning & Generative AI fundamentals</li>
                <li>CI/CD and testing mindset</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE / LEADERSHIP */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIconWrap}>
              <i className="fa-solid fa-users"></i>
            </span>
            Leadership & Experience
          </h2>
          <div style={styles.experienceGrid}>
            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Academic Chair · ColorStack USM</h3>
              <p style={styles.experienceMeta}>Sep 2025 – Present</p>
              <p style={styles.experienceText}>
                Lead structured study sessions, technical workshops, and peer‑support programs so computing majors can
                master coursework and grow together.
              </p>
            </article>

            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Team Lead · Google Developer Student Club</h3>
              <p style={styles.experienceMeta}>Oct 2025 – Present</p>
              <p style={styles.experienceText}>
                Led a team of six on embedded robotics projects using Agile and Scrum, emphasizing safety‑critical
                testing and collaborative development with GitHub.
              </p>
            </article>

            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Software Engineering Virtual Experience · EA</h3>
              <p style={styles.experienceMeta}>Dec 2025 · Remote</p>
              <p style={styles.experienceText}>
                Completed a feature proposal and C++ engineering tasks for a sports game simulation, including class
                design and performance improvements.
              </p>
            </article>

            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Winter Mentor · International Student Scholar Services</h3>
              <p style={styles.experienceMeta}>Dec 2025 – Jan 2026 · USM</p>
              <p style={styles.experienceText}>
                Mentored international students through U.S. academics, scheduling, and campus resources as a welcoming,
                reliable point of contact.
              </p>
            </article>
          </div>
        </section>

        {/* LINKS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIconWrap}>
              <i className="fa-solid fa-link"></i>
            </span>
            Open Source & Links
          </h2>
          <div style={styles.linksRow}>
            <a
              href="https://github.com/abdulahi-banji"
              target="_blank"
              rel="noreferrer"
              style={styles.linkPill}
            >
              <i className="fa-brands fa-github" style={{ marginRight: 8 }}></i>
              GitHub · @abdulahi-banji
            </a>
            <a
              href="https://www.linkedin.com/in/abdulahi-oyebanji/"
              target="_blank"
              rel="noreferrer"
              style={styles.linkPill}
            >
              <i className="fa-brands fa-linkedin" style={{ marginRight: 8 }}></i>
              LinkedIn · Abdulahi Oyebanji
            </a>
            <a href="mailto:abdulahioyebanji01@gmail.com" style={styles.linkPill}>
              <i className="fa-solid fa-envelope" style={{ marginRight: 8 }}></i>
              Email · abdulahioyebanji01@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} Abdulahi Oyebanji · Built with React.
        </p>
      </footer>
    </div>
  );
};

/* COLOR PALETTE:
   Background: deep navy / blue‑gray gradient
   Accent: indigo, cyan, and amber
   Cards: slightly lighter navy with subtle borders/shadows
*/

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #1d4ed8 0, #020617 45%), radial-gradient(circle at bottom right, #0ea5e9 0, #020617 50%)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  hero: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "3.5rem 1.5rem 2.5rem",
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.4fr)",
    gap: "2.5rem",
    alignItems: "center",
  },
  heroLeft: {},
  kicker: {
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.75rem",
    color: "#93c5fd",
    marginBottom: "0.45rem",
  },
  name: {
    fontSize: "3rem",
    fontWeight: 800,
    margin: 0,
    color: "#f9fafb",
  },
  tagline: {
    marginTop: "0.9rem",
    fontSize: "1rem",
    color: "#dbeafe",
    maxWidth: "34rem",
    lineHeight: 1.6,
  },
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginTop: "1.6rem",
  },
  primaryButton: {
    background:
      "linear-gradient(110deg, #2563eb 0%, #6366f1 40%, #0ea5e9 100%)",
    color: "#f9fafb",
    padding: "0.75rem 1.6rem",
    borderRadius: "999px",
    border: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
    boxShadow: "0 14px 30px rgba(15,23,42,0.7)",
  },
  secondaryButton: {
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.9)",
    padding: "0.75rem 1.5rem",
    color: "#e5e7eb",
    fontWeight: 500,
    textDecoration: "none",
    backgroundColor: "rgba(15,23,42,0.9)",
  },
  secondaryButtonAlt: {
    borderRadius: "999px",
    border: "1px solid rgba(59,130,246,0.9)",
    padding: "0.75rem 1.5rem",
    color: "#bfdbfe",
    fontWeight: 500,
    textDecoration: "none",
    backgroundColor: "rgba(15,23,42,0.9)",
  },
  metaRow: {
    marginTop: "1.2rem",
    fontSize: "0.85rem",
    color: "#9ca3af",
  },
  heroRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  statsCard: {
    background:
      "linear-gradient(140deg, rgba(15,23,42,0.95) 0%, rgba(30,64,175,0.95) 50%, rgba(15,23,42,0.95) 100%)",
    borderRadius: "1.1rem",
    padding: "1.6rem 1.5rem",
    border: "1px solid rgba(148,163,184,0.9)",
    maxWidth: "21rem",
    boxShadow: "0 22px 45px rgba(15,23,42,0.95)",
  },
  statsTitle: {
    margin: 0,
    fontSize: "0.97rem",
    fontWeight: 600,
    color: "#f9fafb",
    marginBottom: "0.8rem",
    display: "flex",
    alignItems: "center",
  },
  statsList: {
    margin: 0,
    paddingLeft: "1.1rem",
    fontSize: "0.86rem",
    color: "#e5e7eb",
    lineHeight: 1.7,
  },
  main: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem 2.7rem",
  },
  section: {
    marginTop: "2.7rem",
  },
  sectionTitle: {
    fontSize: "1.35rem",
    fontWeight: 700,
    marginBottom: "1.2rem",
    color: "#f9fafb",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  sectionIconWrap: {
    width: 26,
    height: 26,
    borderRadius: "999px",
    border: "1px solid rgba(56,189,248,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7dd3fc",
    backgroundColor: "rgba(15,23,42,0.9)",
    fontSize: 13,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.4rem",
  },
  projectCard: {
    backgroundColor: "rgba(15,23,42,0.96)",
    borderRadius: "1rem",
    padding: "1.25rem 1.5rem",
    border: "1px solid rgba(30,64,175,0.9)",
    boxShadow: "0 14px 30px rgba(15,23,42,0.8)",
  },
  projectHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  projectTitle: {
    fontSize: "1.05rem",
    fontWeight: 600,
    margin: 0,
    color: "#e5e7eb",
  },
  projectBadge: {
    fontSize: "0.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    padding: "0.25rem 0.6rem",
    borderRadius: "999px",
    backgroundColor: "rgba(56,189,248,0.12)",
    color: "#7dd3fc",
    border: "1px solid rgba(56,189,248,0.7)",
    whiteSpace: "nowrap",
  },
  projectStack: {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    marginTop: "0.5rem",
    color: "#a5b4fc",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  stackIcon: {
    fontSize: 12,
  },
  projectText: {
    fontSize: "0.9rem",
    marginTop: "0.6rem",
    color: "#e5e7eb",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "1.25rem",
  },
  skillColumn: {
    backgroundColor: "rgba(15,23,42,0.96)",
    borderRadius: "0.9rem",
    padding: "1.05rem 1.25rem",
    border: "1px solid rgba(30,64,175,0.9)",
  },
  skillHeading: {
    fontSize: "0.96rem",
    fontWeight: 600,
    marginBottom: "0.6rem",
    color: "#f9fafb",
    display: "flex",
    alignItems: "center",
  },
  skillIcon: {
    marginRight: 8,
    color: "#38bdf8",
  },
  skillList: {
    margin: 0,
    paddingLeft: "1.1rem",
    fontSize: "0.85rem",
    color: "#e5e7eb",
    lineHeight: 1.7,
  },
  experienceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.25rem",
  },
  experienceCard: {
    backgroundColor: "rgba(15,23,42,0.96)",
    borderRadius: "0.9rem",
    padding: "1rem 1.3rem",
    border: "1px solid rgba(30,64,175,0.9)",
  },
  experienceTitle: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#f9fafb",
  },
  experienceMeta: {
    fontSize: "0.8rem",
    color: "#9ca3af",
    marginTop: "0.3rem",
  },
  experienceText: {
    fontSize: "0.88rem",
    color: "#e5e7eb",
    marginTop: "0.55rem",
  },
  linksRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginBottom: "0.7rem",
  },
  linkPill: {
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.9)",
    padding: "0.55rem 1.25rem",
    fontSize: "0.85rem",
    color: "#e5e7eb",
    textDecoration: "none",
    backgroundColor: "rgba(15,23,42,0.95)",
    display: "inline-flex",
    alignItems: "center",
  },
  footer: {
    borderTop: "1px solid rgba(30,64,175,0.7)",
    marginTop: "3rem",
    padding: "1.2rem 1.5rem 2.1rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.8rem",
    color: "#9ca3af",
  },
};

export default App;
