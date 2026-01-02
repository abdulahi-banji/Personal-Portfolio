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
