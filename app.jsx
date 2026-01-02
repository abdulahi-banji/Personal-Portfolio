import React from "react";

const App = () => {
  return (
    <>
      {/* Global responsive styles & fonts */}
      <style>{globalStyles}</style>

      <div style={styles.page}>
        {/* HERO */}
        <header style={styles.hero}>
          <div style={styles.heroLeft}>
            <p style={styles.kicker}>Aspiring AI Engineer · Full‑Stack Developer</p>
            <h1 style={styles.name}>Abdulahi Oyebanji</h1>
            <p style={styles.tagline}>
              I build intelligent systems, from embedded robotics to AI‑powered developer tools,
              while studying Computer Science at the University of Southern Mississippi.
            </p>

            <div style={styles.heroButtons}>
              <a href="mailto:abdulahioyebanji01@gmail.com" className="btn btn-primary">
                <i className="fa-solid fa-paper-plane"></i>
                <span>Contact me</span>
              </a>
              <a
                href="https://github.com/abdulahi-banji"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulahi-oyebanji/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>

            <p style={styles.metaRow}>
              B.S. Computer Science · University of Southern Mississippi · GPA 3.80 · Hattiesburg, MS
            </p>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.statsCard}>
              <h3 style={styles.statsTitle}>
                <i className="fa-solid fa-bolt stats-icon"></i>
                Focus areas
              </h3>
              <ul style={styles.statsList}>
                <li>AI tools that make developers faster and more confident.</li>
                <li>Secure full‑stack apps with clean interfaces.</li>
                <li>Embedded and robotic systems that interact with the real world.</li>
              </ul>
            </div>
          </div>
        </header>

        <main style={styles.main}>
          {/* PROJECTS */}
          <section style={styles.section}>
            <SectionTitle icon="fa-code" title="Featured Projects" />

            <div className="grid grid-3">
              <ProjectCard
                badge="AI · DevTools"
                title="AI‑Powered Code Review System"
                iconClass="fa-robot"
                stack="Python · Node.js · React · OpenAI API · SQLite"
                bullets={[
                  "Built an AI‑driven assistant that analyzes code, flags bugs, and suggests optimizations with clear explanations.",
                  "Designed and tested many scenarios and edge cases to boost review efficiency and reduce repeat errors.",
                ]}
              />
              <ProjectCard
                badge="Security · Full‑Stack"
                title="CloudVault · Personal Cloud Storage"
                iconClass="fa-cloud"
                stack="Python · Node.js · React · SQLite · JWT"
                bullets={[
                  "Created a secure storage platform with upload, organization, and download flows in a responsive React UI.",
                  "Implemented JWT auth and role‑based access control, then tuned the database for smoother queries.",
                ]}
              />
              <ProjectCard
                badge="Embedded · Robotics"
                title="Remote‑Controlled Arduino Robotic Car"
                iconClass="fa-microchip"
                stack="Arduino · C/C++ · Bluetooth · PWM"
                bullets={[
                  "Programmed PWM motor control and Bluetooth remote driving with real‑time feedback.",
                  "Focused on wiring, calibration, and testing to achieve smooth, repeatable operation.",
                ]}
              />
            </div>
          </section>

          {/* SKILLS */}
          <section style={styles.section}>
            <SectionTitle icon="fa-toolbox" title="Skills & Stack" />

            <div className="grid grid-3">
              <SkillColumn
                icon="fa-code"
                heading="Languages"
                items={["Python", "C++", "JavaScript", "HTML & CSS", "SQLite"]}
              />
              <SkillColumn
                icon="fa-layer-group"
                heading="Frameworks & Tools"
                items={[
                  "React · Node.js · FastAPI",
                  "Material‑UI · OpenAI API",
                  "Git & GitHub · Vercel",
                  "VS Code · Google Cloud · Figma",
                ]}
              />
              <SkillColumn
                icon="fa-graduation-cap"
                heading="Foundations"
                items={[
                  "Data Structures & Algorithms",
                  "Object‑Oriented Design",
                  "REST APIs · Web Security basics",
                  "Machine Learning & Generative AI fundamentals",
                  "CI/CD and testing mindset",
                ]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section style={styles.section}>
            <SectionTitle icon="fa-users" title="Leadership & Experience" />

            <div className="grid grid-2">
              <ExperienceCard
                title="Academic Chair · ColorStack USM"
                meta="Sep 2025 – Present"
                text={[
                  "Lead study sessions, technical workshops, and peer support for computing majors.",
                  "Help students share resources and grow together toward internships and software careers.",
                ]}
              />
              <ExperienceCard
                title="Team Lead · Google Developer Student Club"
                meta="Oct 2025 – Present"
                text={[
                  "Led a team of six on embedded robotics projects using Agile and Scrum practices.",
                  "Emphasized testing and GitHub‑based collaboration for reliable systems.",
                ]}
              />
              <ExperienceCard
                title="Software Engineering Virtual Experience · EA"
                meta="Dec 2025 · Remote"
                text={[
                  "Completed a feature proposal and C++ engineering tasks for a sports game simulation.",
                  "Worked on class design and performance improvements in an existing codebase.",
                ]}
              />
              <ExperienceCard
                title="Winter Mentor · International Student Scholar Services"
                meta="Dec 2025 – Jan 2026 · USM"
                text={[
                  "Mentored international students on academics, scheduling, and campus resources.",
                  "Served as a welcoming, reliable point of contact during their first term.",
                ]}
              />
            </div>
          </section>

          {/* LINKS */}
          <section style={styles.section}>
            <SectionTitle icon="fa-link" title="Open Source & Links" />

            <div className="links-row">
              <a
                href="https://github.com/abdulahi-banji"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub · @abdulahi-banji</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulahi-oyebanji/"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn · Abdulahi Oyebanji</span>
              </a>
              <a href="mailto:abdulahioyebanji01@gmail.com" className="pill-link">
                <i className="fa-solid fa-envelope"></i>
                <span>Email · abdulahioyebanji01@gmail.com</span>
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
    </>
  );
};

/* Small reusable components */

const SectionTitle = ({ icon, title }) => (
  <h2 style={styles.sectionTitle}>
    <span className="section-icon">
      <i className={`fa-solid ${icon}`}></i>
    </span>
    {title}
  </h2>
);

const ProjectCard = ({ badge, title, iconClass, stack, bullets }) => (
  <article className="card">
    <div style={styles.projectHeaderRow}>
      <h3 style={styles.projectTitle}>{title}</h3>
      <span className="badge">{badge}</span>
    </div>
    <p style={styles.projectStack}>
      <i className={`fa-solid ${iconClass}`} style={{ fontSize: 12, marginRight: 6 }}></i>
      {stack}
    </p>
    {bullets.map((b, i) => (
      <p key={i} style={styles.projectText}>
        {b}
      </p>
    ))}
  </article>
);

const SkillColumn = ({ icon, heading, items }) => (
  <div className="card">
    <h3 style={styles.skillHeading}>
      <i className={`fa-solid ${icon}`} style={styles.skillIcon}></i>
      {heading}
    </h3>
    <ul style={styles.skillList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, meta, text }) => (
  <article className="card">
    <h3 style={styles.experienceTitle}>{title}</h3>
    <p style={styles.experienceMeta}>{meta}</p>
    {text.map((t, i) => (
      <p key={i} style={styles.experienceText}>
        {t}
      </p>
    ))}
  </article>
);

/* Layout + base styles */

const globalStyles = `
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: #0f172a;
  }

  /* Simple grid utilities */
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  .grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Card base */
  .card {
    background: #ffffff;
    color: #111827;
    border-radius: 16px;
    padding: 1.25rem 1.4rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 18px 35px rgba(15, 23, 42, 0.08);
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    text-decoration: none;
    border: 1px solid transparent;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }
  .btn-primary {
    background: linear-gradient(110deg, #2563eb 0%, #4f46e5 45%, #0ea5e9 100%);
    color: #f9fafb;
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
  }
  .btn-ghost {
    background: #0f172a;
    color: #e5e7eb;
    border-color: #1f2937;
  }
  .btn-outline {
    background: transparent;
    color: #1d4ed8;
    border-color: #bfdbfe;
  }
  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
  }

  /* Pills */
  .pill-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 999px;
    padding: 0.55rem 1.25rem;
    font-size: 0.85rem;
    color: #0f172a;
    text-decoration: none;
    background: #e5f0ff;
    border: 1px solid #bfdbfe;
  }

  .pill-link i {
    color: #1d4ed8;
  }

  .badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    background: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
    white-space: nowrap;
  }

  .section-icon {
    width: 28px;
    height: 28px;
    border-radius: 999px;
    border: 1px solid #e0f2fe;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #eff6ff;
    color: #0369a1;
    font-size: 0.75rem;
  }

  .stats-icon {
    margin-right: 0.5rem;
  }

  .links-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  /* RESPONSIVE BREAKPOINTS */
  @media (max-width: 900px) {
    .grid-3 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .grid-3,
    .grid-2 {
      grid-template-columns: 1fr;
    }

    header.hero {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 480px) {
    .btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #1d4ed8 0, #020617 45%), radial-gradient(circle at bottom right, #0ea5e9 0, #020617 55%)",
    color: "#0f172a",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  hero: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "3.2rem 1.5rem 2.3rem",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.8fr) minmax(0, 1.3fr)",
    gap: "2.2rem",
    alignItems: "center",
  },
  heroLeft: {
    color: "#f9fafb",
  },
  kicker: {
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.75rem",
    color: "#bfdbfe",
    marginBottom: "0.45rem",
  },
  name: {
    fontSize: "2.7rem",
    fontWeight: 800,
    margin: 0,
    color: "#ffffff",
  },
  tagline: {
    marginTop: "0.9rem",
    fontSize: "1rem",
    color: "#e5e7eb",
    maxWidth: "34rem",
    lineHeight: 1.6,
  },
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginTop: "1.5rem",
  },
  metaRow: {
    marginTop: "1.2rem",
    fontSize: "0.85rem",
    color: "#cbd5f5",
  },
  heroRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  statsCard: {
    background: "#ffffff",
    borderRadius: 18,
    padding: "1.4rem 1.5rem",
    border: "1px solid #e5e7eb",
    boxShadow: "0 18px 35px rgba(15, 23, 42, 0.15)",
    maxWidth: 320,
  },
  statsTitle: {
    margin: 0,
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: "0.75rem",
    display: "flex",
    alignItems: "center",
  },
  statsList: {
    margin: 0,
    paddingLeft: "1.1rem",
    fontSize: "0.86rem",
    color: "#4b5563",
    lineHeight: 1.7,
  },
  main: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem 2.5rem",
  },
  section: {
    marginTop: "2.5rem",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "1.1rem",
    color: "#f9fafb",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  projectHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  projectTitle: {
    fontSize: "1.02rem",
    fontWeight: 600,
    margin: 0,
  },
  projectStack: {
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    marginTop: "0.45rem",
    color: "#4f46e5",
    display: "flex",
    alignItems: "center",
  },
  projectText: {
    fontSize: "0.9rem",
    marginTop: "0.55rem",
    color: "#4b5563",
  },
  skillHeading: {
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBottom: "0.55rem",
    color: "#111827",
    display: "flex",
    alignItems: "center",
  },
  skillIcon: {
    marginRight: 8,
    color: "#2563eb",
  },
  skillList: {
    margin: 0,
    paddingLeft: "1.1rem",
    fontSize: "0.85rem",
    color: "#4b5563",
    lineHeight: 1.7,
  },
  experienceTitle: {
    margin: 0,
    fontSize: "0.98rem",
    fontWeight: 600,
    color: "#111827",
  },
  experienceMeta: {
    fontSize: "0.8rem",
    color: "#6b7280",
    marginTop: "0.25rem",
  },
  experienceText: {
    fontSize: "0.88rem",
    color: "#4b5563",
    marginTop: "0.5rem",
  },
  footer: {
    borderTop: "1px solid rgba(15,23,42,0.4)",
    padding: "1.1rem 1.5rem 2rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.8rem",
    color: "#9ca3af",
  },
};

export default App;
