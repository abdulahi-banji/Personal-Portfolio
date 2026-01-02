import React from "react";

const App = () => {
  return (
    <>
      <style>{globalStyles}</style>

      <div className="page">
        {/* HERO */}
        <header className="hero">
          <div className="hero-main">
            <p className="hero-kicker">Aspiring AI Engineer · Full‑Stack Developer</p>
            <h1 className="hero-name">Abdulahi Oyebanji</h1>
            <p className="hero-tagline">
              I build practical, intelligent softwares. From embedded robotics to AI‑powered developer tools—
              and I’m currently sharpening my skills as a Computer Science student passioante to learn new technologies, solve real problems and create impact.
            </p>

            <div className="hero-buttons">
              <a href="mailto:abdulahioyebanji01@gmail.com" className="btn btn-primary">
                <i className="fa-solid fa-paper-plane" />
                <span>Contact me</span>
              </a>
              <a
                href="https://github.com/abdulahi-banji"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <i className="fa-brands fa-github" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulahi-oyebanji/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-brands fa-linkedin" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="hero-meta">
              <span className="pill pill-strong">
                <i className="fa-solid fa-graduation-cap" />
                B.S. Computer Science · University of Southern Mississippi
              </span>
              <span className="pill">
                <i className="fa-regular fa-calendar" />
                Expected: May 2028
              </span>
              <span className="pill">
                <i className="fa-solid fa-star" />
                GPA: 3.80 / 4.00
              </span>
            </div>
          </div>
        </header>

        <main className="main">
          {/* PROJECTS */}
          <section className="section">
            <SectionTitle icon="fa-code" title="Featured Projects" />

            <div className="grid grid-3">
              <ProjectCard
                badge="AI · DevTools"
                title="AI‑Powered Code Review System"
                iconClass="fa-robot"
                stack="Python · Node.js · React · OpenAI API · SQLite"
                bullets={[
                  "Built an AI‑driven assistant that reviews code, flags bugs and security risks, and suggests concrete improvements with line‑level feedback.",
                  "Designed and executed a robust set of test cases and edge scenarios to raise code review efficiency and reduce repetitive mistakes.",
                ]}
              />
              <ProjectCard
                badge="Security · Full‑Stack"
                title="CloudVault · Personal Cloud Storage"
                iconClass="fa-cloud"
                stack="Python · Node.js · React · SQLite · JWT"
                bullets={[
                  "Developed a secure file storage platform with upload, organization, and download flows built on a responsive React UI.",
                  "Implemented JWT authentication and role‑based access, then tuned SQLite queries for fast access to growing file metadata.",
                ]}
              />
              <ProjectCard
                badge="Embedded · Robotics"
                title="Remote‑Controlled Arduino Robotic Car"
                iconClass="fa-microchip"
                stack="Arduino · C/C++ · Bluetooth · PWM"
                bullets={[
                  "Programmed PWM motor control and Bluetooth steering for an Arduino RC car, enabling precise, responsive movement.",
                  "Focused on hardware wiring, debugging, and calibration to achieve stable performance over repeated test runs.",
                ]}
              />
            </div>
          </section>

          {/* SKILLS */}
          <section className="section">
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
                icon="fa-circle-nodes"
                heading="Concepts"
                items={[
                  "Data Structures & Algorithms",
                  "Object‑Oriented Design",
                  "REST APIs · Web Security basics",
                  "Machine Learning & Generative AI fundamentals",
                  "CI/CD and automated testing mindset",
                ]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="section">
            <SectionTitle icon="fa-users" title="Leadership & Experience" />

            <div className="grid grid-2">
              <ExperienceCard
                title="Academic Chair · ColorStack USM"
                meta="Sep 2025 – Present"
                text={[
                  "Lead academic strategy for the chapter by organizing rigorous study sessions, technical workshops, and exam prep for computing majors.",
                  "Create an inclusive environment where members share resources, practice interview questions, and hold each other accountable.",
                ]}
              />
              <ExperienceCard
                title="Team Lead · Google Developer Student Club"
                meta="Oct 2025 – Present"
                text={[
                  "Led a team of six on embedded robotics projects using Agile and Scrum ceremonies to plan, build, and test features.",
                  "Emphasized safety‑critical testing, documentation, and GitHub‑based collaboration to keep the codebase reliable and maintainable.",
                ]}
              />
              <ExperienceCard
                title="Software Engineering Virtual Experience · Electronic Arts (EA)"
                meta="Dec 2025 · Remote"
                text={[
                  "Completed a structured simulation for EA Sports College Football, including feature proposal, C++ class design, and code optimization.",
                  "Improved existing logic using more efficient data structures while keeping the codebase clean and easy to extend.",
                ]}
              />
              <ExperienceCard
                title="Winter Mentor · International Student Scholar Services"
                meta="Dec 2025 – Jan 2026 · USM"
                text={[
                  "Mentored new international students, helping them understand course expectations, schedules, and campus resources.",
                  "Acted as a trusted point of contact to reduce friction in their first semester and build a supportive community.",
                ]}
              />
            </div>
          </section>

          {/* LINKS */}
          <section className="section">
            <SectionTitle icon="fa-link" title="Open Source & Contact" />

            <div className="links-row">
              <a
                href="https://github.com/abdulahi-banji"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                <i className="fa-brands fa-github" />
                <span>GitHub · @abdulahi-banji</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulahi-oyebanji/"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                <i className="fa-brands fa-linkedin" />
                <span>LinkedIn · Abdulahi Oyebanji</span>
              </a>
              <a href="mailto:abdulahioyebanji01@gmail.com" className="pill-link">
                <i className="fa-solid fa-envelope" />
                <span>Email · abdulahioyebanji01@gmail.com</span>
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-text">
            © {new Date().getFullYear()} Abdulahi Oyebanji · Designed and built in React.
          </p>
        </footer>
      </div>
    </>
  );
};

/* Reusable components */

const SectionTitle = ({ icon, title }) => (
  <h2 className="section-title">
    <span className="section-icon">
      <i className={`fa-solid ${icon}`} />
    </span>
    {title}
  </h2>
);

const ProjectCard = ({ badge, title, iconClass, stack, bullets }) => (
  <article className="card project-card">
    <div className="project-header">
      <h3 className="project-title">{title}</h3>
      <span className="badge">{badge}</span>
    </div>
    <p className="project-stack">
      <i className={`fa-solid ${iconClass}`} />
      <span>{stack}</span>
    </p>
    {bullets.map((b, i) => (
      <p key={i} className="project-text">
        {b}
      </p>
    ))}
  </article>
);

const SkillColumn = ({ icon, heading, items }) => (
  <div className="card">
    <h3 className="skill-heading">
      <i className={`fa-solid ${icon}`} />
      <span>{heading}</span>
    </h3>
    <ul className="skill-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, meta, text }) => (
  <article className="card">
    <h3 className="experience-title">{title}</h3>
    <p className="experience-meta">{meta}</p>
    {text.map((t, i) => (
      <p key={i} className="experience-text">
        {t}</p>
    ))}
  </article>
);

/* Global styles */

const globalStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    background: radial-gradient(1200px 600px at 10% -10%, #1e293b 0%, #020617 60%);
    color: #e5e7eb;
  }

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* HERO */
  .hero {
    background: linear-gradient(
      135deg,
      #020617 0%,
      #020617 35%,
      #0f172a 60%,
      #1e3a8a 100%
    );
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  }

  .hero-main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.4rem 1.5rem 2.6rem;
  }

  .hero-kicker {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.7rem;
    color: #93c5fd;
    margin-bottom: 0.6rem;
  }

  .hero-name {
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(90deg, #e5e7eb, #93c5fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-tagline {
    margin-top: 1rem;
    font-size: 1.02rem;
    color: #cbd5f5;
    max-width: 38rem;
    line-height: 1.7;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.6rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.7rem 1.5rem;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .btn-primary {
    background: linear-gradient(110deg, #2563eb, #4f46e5, #0ea5e9);
    color: #020617;
    box-shadow: 0 12px 40px rgba(37, 99, 235, 0.45);
  }

  .btn-ghost {
    background: rgba(15, 23, 42, 0.7);
    color: #e5e7eb;
    border: 1px solid rgba(148, 163, 184, 0.25);
  }

  .btn-outline {
    background: transparent;
    color: #93c5fd;
    border: 1px solid rgba(147, 197, 253, 0.6);
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.7);
  }

  .hero-meta {
    margin-top: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    border-radius: 999px;
    padding: 0.35rem 0.85rem;
    font-size: 0.78rem;
    color: #e5e7eb;
    background: rgba(2, 6, 23, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.25);
  }

  .pill-strong {
    background: linear-gradient(120deg, #2563eb, #4f46e5);
    color: #020617;
    border: none;
  }

  /* MAIN */
  .main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.8rem 1.5rem 3rem;
  }

  .section {
    margin-top: 2.8rem;
  }

  .section-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: #e5e7eb;
  }

  .section-icon {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #0ea5e9);
    color: #020617;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }

  /* GRID */
  .grid {
    display: grid;
    gap: 1.6rem;
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  /* CARDS */
  .card {
    background: linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.9),
      rgba(2, 6, 23, 0.95)
    );
    border-radius: 18px;
    padding: 1.4rem 1.5rem;
    border: 1px solid rgba(148, 163, 184, 0.15);
    box-shadow: 0 20px 45px rgba(2, 6, 23, 0.9);
  }

  .project-card {
    border-top: 3px solid #2563eb;
  }

  .project-title,
  .experience-title,
  .skill-heading {
    color: #f1f5f9;
  }

  .badge {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.18);
    color: #93c5fd;
    border: 1px solid rgba(147, 197, 253, 0.35);
  }

  .project-stack {
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    color: #93c5fd;
    margin-top: 0.5rem;
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }

  .project-text,
  .experience-text,
  .skill-list,
  .experience-meta {
    color: #cbd5f5;
    font-size: 0.88rem;
    line-height: 1.6;
  }

  /* LINKS */
  .pill-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 999px;
    padding: 0.55rem 1.25rem;
    font-size: 0.85rem;
    color: #e5e7eb;
    text-decoration: none;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(148, 163, 184, 0.25);
  }

  /* FOOTER */
  .footer {
    border-top: 1px solid rgba(148, 163, 184, 0.15);
    padding: 1.4rem;
    text-align: center;
  }

  .footer-text {
    font-size: 0.8rem;
    color: #94a3b8;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .grid-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 720px) {
    .grid-3,
    .grid-2 {
      grid-template-columns: 1fr;
    }
    .hero-name {
      font-size: 2.3rem;
    }
    .btn {
      width: 100%;
      justify-content: center;
    }
  }
`;
export default App;
