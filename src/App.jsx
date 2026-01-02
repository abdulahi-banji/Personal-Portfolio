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
              I build practical, intelligent software—from embedded robotics to AI‑powered developer tools—
              and I’m currently sharpening my skills as a Computer Science student driven to solve real problems and create impact.
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
                heading="Foundations"
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
    background: #f3f4f6;
  }

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: #111827;
  }

  .hero {
    background: linear-gradient(120deg, #0f172a 0%, #111827 40%, #1e293b 70%, #1d4ed8 100%);
    color: #f9fafb;
  }

  .hero-main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.2rem 1.5rem 2.4rem;
  }

  .hero-kicker {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.75rem;
    color: #bfdbfe;
    margin-bottom: 0.45rem;
  }

  .hero-name {
    font-size: 2.8rem;
    font-weight: 800;
    margin: 0;
    color: #ffffff;
  }

  .hero-tagline {
    margin-top: 0.9rem;
    font-size: 1rem;
    color: #e5e7eb;
    max-width: 36rem;
    line-height: 1.6;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.5rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    text-decoration: none;
    border: 1px solid transparent;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    cursor: pointer;
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
    color: #bfdbfe;
    border-color: #93c5fd;
  }

  .btn i {
    font-size: 0.9rem;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.35);
  }

  .hero-meta {
    margin-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 999px;
    padding: 0.35rem 0.85rem;
    font-size: 0.8rem;
    color: #e5e7eb;
    background: rgba(15, 23, 42, 0.55);
    border: 1px solid rgba(148, 163, 184, 0.7);
  }

  .pill i {
    font-size: 0.85rem;
  }

  .pill-strong {
    background: rgba(37, 99, 235, 0.9);
    border-color: rgba(191, 219, 254, 0.9);
  }

  .main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.4rem 1.5rem 2.6rem;
  }

  .section {
    margin-top: 2.4rem;
  }

  .section-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: #0f172a;
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

  .card {
    background: #ffffff;
    border-radius: 16px;
    padding: 1.25rem 1.4rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
  }

  .project-card {
    border-top: 3px solid #2563eb;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .project-title {
    font-size: 1.02rem;
    font-weight: 600;
    margin: 0;
    color: #111827;
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

  .project-stack {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.45rem;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.13em;
    color: #4f46e5;
  }

  .project-stack i {
    font-size: 0.75rem;
  }

  .project-text {
    font-size: 0.9rem;
    margin-top: 0.6rem;
    color: #4b5563;
  }

  .skill-heading {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.55rem;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .skill-heading i {
    color: #2563eb;
  }

  .skill-list {
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.85rem;
    color: #4b5563;
    line-height: 1.7;
  }

  .experience-title {
    margin: 0;
    font-size: 0.98rem;
    font-weight: 600;
    color: #111827;
  }

  .experience-meta {
    font-size: 0.8rem;
    color: #6b7280;
    margin-top: 0.25rem;
  }

  .experience-text {
    font-size: 0.88rem;
    color: #4b5563;
    margin-top: 0.5rem;
  }

  .links-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

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

  .footer {
    border-top: 1px solid #e5e7eb;
    padding: 1.1rem 1.5rem 2rem;
    text-align: center;
    background: #f9fafb;
  }

  .footer-text {
    font-size: 0.8rem;
    color: #6b7280;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .grid-3 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    .grid-3,
    .grid-2 {
      grid-template-columns: 1fr;
    }
    .hero-main {
      padding-top: 2.4rem;
      padding-bottom: 2rem;
    }
    .hero-name {
      font-size: 2.2rem;
    }
    .hero-buttons .btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default App;
