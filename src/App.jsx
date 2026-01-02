// src/App.jsx
import React from "react";

const Portfolio = () => {
  return (
    <div style={styles.page}>
      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroLeft}>
          <p style={styles.kicker}>Software Engineer • Student</p>
          <h1 style={styles.name}>Abdulahi Oyebanji</h1>
          <p style={styles.tagline}>
            Building intelligent software, embedded systems, and AI-powered tools that solve real problems.
          </p>
          <div style={styles.heroButtons}>
            <a href="mailto:abdulahioyebanji01@gmail.com" style={styles.primaryButton}>
              Let&apos;s work together
            </a>
            <a
              href="https://github.com/your-github-handle"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              View GitHub
            </a>
          </div>
          <div style={styles.metaRow}>
            <span>Computer Science @ University of Southern Mississippi · GPA 3.80</span>
          </div>
        </div>
        <div style={styles.heroRight}>
          <div style={styles.statsCard}>
            <h3 style={styles.statsTitle}>Quick snapshot</h3>
            <ul style={styles.statsList}>
              <li>Arduino RC car with Bluetooth & PWM motor control</li>
              <li>Secure cloud storage app with JWT auth</li>
              <li>AI code review system powered by GPT-4</li>
              <li>Academic Chair @ ColorStack USM</li>
            </ul>
          </div>
        </div>
      </header>

      {/* Sections container */}
      <main style={styles.main}>
        {/* Projects */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Selected Projects</h2>

          {/* Project 1 */}
          <article style={styles.projectCard}>
            <div>
              <h3 style={styles.projectTitle}>Remote‑Controlled Arduino Robotic Car</h3>
              <p style={styles.projectStack}>Arduino • C/C++ • Bluetooth • Embedded Systems</p>
              <p style={styles.projectText}>
                Programmed an Arduino‑based RC car using C/C++ and PWM for precise motor control, then wired and calibrated
                the hardware for reliable, smooth operation.
              </p>
              <p style={styles.projectText}>
                Implemented Bluetooth remote control with real‑time telemetry and reduced setup errors by 20% through
                systematic testing and tuning.
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article style={styles.projectCard}>
            <div>
              <h3 style={styles.projectTitle}>CloudVault: Personal Cloud Storage Manager</h3>
            </div>
            <p style={styles.projectStack}>Python • Node.js • React • SQLite • Security</p>
            <p style={styles.projectText}>
              Built a secure web‑based platform where users can upload, organize, and download files with a responsive
              React UI.
            </p>
            <p style={styles.projectText}>
              Implemented JWT authentication and role‑based access control, and optimized a SQLite schema for 200+ file
              metadata records, improving query performance by 35%.
            </p>
          </article>

          {/* Project 3 */}
          <article style={styles.projectCard}>
            <div>
              <h3 style={styles.projectTitle}>AI‑Powered Code Review System</h3>
            </div>
            <p style={styles.projectStack}>Python • Node.js • React • OpenAI API • SQLite</p>
            <p style={styles.projectText}>
              Developed an AI code review tool that uses the OpenAI API to detect bugs, suggest optimizations, and
              highlight best practices for submitted code.
            </p>
            <p style={styles.projectText}>
              Wrote 50+ test cases for diverse snippets and edge cases, boosting review efficiency by 40% and cutting
              common errors by 25%, with documentation that makes onboarding contributors effortless.
            </p>
          </article>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills & Tools</h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillColumn}>
              <h3 style={styles.skillHeading}>Languages</h3>
              <ul style={styles.skillList}>
                <li>Python</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML / CSS</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div style={styles.skillColumn}>
              <h3 style={styles.skillHeading}>Frameworks & APIs</h3>
              <ul style={styles.skillList}>
                <li>React</li>
                <li>Node.js</li>
                <li>Material‑UI</li>
                <li>FastAPI</li>
                <li>OpenAI API</li>
              </ul>
            </div>
            <div style={styles.skillColumn}>
              <h3 style={styles.skillHeading}>Tools & Concepts</h3>
              <ul style={styles.skillList}>
                <li>Git / GitHub</li>
                <li>Vercel, VS Code, Google Cloud</li>
                <li>Data Structures & Algorithms</li>
                <li>RESTful API design</li>
                <li>Cybersecurity & CI/CD fundamentals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership & Experience */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Leadership & Experience</h2>

          <div style={styles.experienceGrid}>
            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Academic Chair · ColorStack USM</h3>
              <p style={styles.experienceMeta}>Sep 2025 – Present</p>
              <p style={styles.experienceText}>
                Lead academic initiatives, structured study sessions, and workshops that help computing majors master
                coursework and technical skills.
              </p>
              <p style={styles.experienceText}>
                Foster an inclusive community focused on accountability, growth, and mentorship for computer science
                students.
              </p>
            </article>

            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Team Lead · Google Developer Student Club</h3>
              <p style={styles.experienceMeta}>Oct 2025 – Present</p>
              <p style={styles.experienceText}>
                Led a team of six to design embedded robotic systems using Agile and Scrum, with strong emphasis on
                testing for safety‑critical reliability.
              </p>
              <p style={styles.experienceText}>
                Practiced collaborative development with Git/GitHub and peer learning through talks, demos, and code
                reviews.
              </p>
            </article>

            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Software Engineering Job Simulation · EA</h3>
              <p style={styles.experienceMeta}>Dec 2025 · Remote</p>
              <p style={styles.experienceText}>
                Drafted a feature proposal for EA Sports College Football, then implemented C++ class headers and fixed
                performance bugs using better data structures.
              </p>
            </article>

            <article style={styles.experienceCard}>
              <h3 style={styles.experienceTitle}>Winter Mentor · International Student Scholar Services</h3>
              <p style={styles.experienceMeta}>Dec 2025 – Jan 2026 · USM</p>
              <p style={styles.experienceText}>
                Mentored nine international students on navigating U.S. academics, scheduling, and campus resources while
                serving as their primary contact and support.
              </p>
            </article>
          </div>
        </section>

        {/* Education & Contact */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Education & Contact</h2>
          <div style={styles.educationCard}>
            <div>
              <h3 style={styles.educationTitle}>University of Southern Mississippi</h3>
              <p style={styles.educationMeta}>B.S. Computer Science · Expected May 2028 · GPA 3.80</p>
              <p style={styles.educationText}>
                Relevant coursework: Real‑Time Operating Systems, Computer Architecture, Data Structures & Algorithms,
                Object‑Oriented Programming (C++, Python), Operating Systems, Database Systems, Cybersecurity, Calculus,
                and Statistics.
              </p>
            </div>
            <div style={styles.contactBox}>
              <p style={styles.contactLine}>📧 abdulahioyebanji01@gmail.com</p>
              <p style={styles.contactLine}>📍 Hattiesburg, MS</p>
              <p style={styles.contactLine}>🔗 LinkedIn · GitHub (add your links)</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Designed and coded by Abdulahi Oyebanji · Built with React.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #1d4ed8 0, #020617 40%), radial-gradient(circle at bottom right, #7c3aed 0, #020617 45%)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 1.5rem 2rem",
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
    gap: "2rem",
    alignItems: "center",
  },
  heroLeft: {},
  kicker: {
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.75rem",
    color: "#a5b4fc",
    marginBottom: "0.5rem",
  },
  name: {
    fontSize: "2.75rem",
    fontWeight: 800,
    margin: 0,
    color: "#f9fafb",
  },
  tagline: {
    marginTop: "0.75rem",
    fontSize: "1rem",
    color: "#cbd5f5",
    maxWidth: "32rem",
  },
  heroButtons: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "1.5rem",
    flexWrap: "wrap",
  },
  primaryButton: {
    background:
      "linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #ec4899 100%)",
    color: "#f9fafb",
    padding: "0.7rem 1.4rem",
    borderRadius: "999px",
    border: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  secondaryButton: {
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.7)",
    padding: "0.7rem 1.4rem",
    color: "#e5e7eb",
    fontWeight: 500,
    textDecoration: "none",
    backgroundColor: "rgba(15,23,42,0.7)",
  },
  metaRow: {
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#9ca3af",
  },
  heroRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  statsCard: {
    backgroundColor: "rgba(15,23,42,0.9)",
    borderRadius: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(148,163,184,0.7)",
    maxWidth: "20rem",
    boxShadow: "0 18px 40px rgba(15,23,42,0.9)",
  },
  statsTitle: {
    margin: 0,
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "0.75rem",
  },
  statsList: {
    margin: 0,
    paddingLeft: "1.1rem",
    fontSize: "0.85rem",
    color: "#cbd5e1",
    lineHeight: 1.7,
  },
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1.5rem 2.5rem",
  },
  section: {
    marginTop: "2.5rem",
  },
  sectionTitle: {
    fontSize: "1.4rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#f9fafb",
  },
  projectCard: {
    backgroundColor: "rgba(15,23,42,0.9)",
    borderRadius: "1rem",
    padding: "1.25rem 1.5rem",
    border: "1px solid rgba(51,65,85,0.9)",
    marginBottom: "1rem",
  },
  projectTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    margin: 0,
    color: "#e5e7eb",
  },
  projectStack: {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginTop: "0.35rem",
    color: "#a5b4fc",
  },
  projectText: {
    fontSize: "0.9rem",
    marginTop: "0.6rem",
    color: "#cbd5e1",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "1.25rem",
  },
  skillColumn: {
    backgroundColor: "rgba(15,23,42,0.9)",
    borderRadius: "0.9rem",
    padding: "1rem 1.25rem",
    border: "1px solid rgba(51,65,85,0.9)",
  },
  skillHeading: {
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "#e5e7eb",
  },
  skillList: {
    margin: 0,
    paddingLeft: "1rem",
    fontSize: "0.85rem",
    color: "#cbd5e1",
    lineHeight: 1.7,
  },
  experienceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.25rem",
  },
  experienceCard: {
    backgroundColor: "rgba(15,23,42,0.9)",
    borderRadius: "0.9rem",
    padding: "1rem 1.25rem",
    border: "1px solid rgba(51,65,85,0.9)",
  },
  experienceTitle: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#e5e7eb",
  },
  experienceMeta: {
    fontSize: "0.8rem",
    color: "#9ca3af",
    marginTop: "0.25rem",
  },
  experienceText: {
    fontSize: "0.88rem",
    color: "#cbd5e1",
    marginTop: "0.5rem",
  },
  educationCard: {
    backgroundColor: "rgba(15,23,42,0.9)",
    borderRadius: "1rem",
    padding: "1.25rem 1.5rem",
    border: "1px solid rgba(51,65,85,0.9)",
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.4fr)",
    gap: "1.5rem",
  },
  educationTitle: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#e5e7eb",
  },
  educationMeta: {
    fontSize: "0.85rem",
    marginTop: "0.4rem",
    color: "#a5b4fc",
  },
  educationText: {
    fontSize: "0.88rem",
    marginTop: "0.6rem",
    color: "#cbd5e1",
  },
  contactBox: {
    backgroundColor: "rgba(15,23,42,0.9)",
    borderRadius: "0.9rem",
    padding: "1rem 1.1rem",
    border: "1px dashed rgba(148,163,184,0.7)",
    fontSize: "0.88rem",
    color: "#e5e7eb",
  },
  contactLine: {
    margin: "0.2rem 0",
  },
  footer: {
    borderTop: "1px solid rgba(30,64,175,0.6)",
    marginTop: "2rem",
    padding: "1.25rem 1.5rem 2rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.8rem",
    color: "#9ca3af",
  },
};

export default Portfolio

