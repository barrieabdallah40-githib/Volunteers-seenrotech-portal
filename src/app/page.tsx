import VolunteerApplicationForm from "./volunteer-application-form";

const opportunities = [
  {
    number: "01",
    title: "Software & Engineering",
    description:
      "Contribute to web applications, APIs, software development, testing, and technical problem-solving.",
    skills: ["Web development", "Programming", "QA & testing"],
    icon: "⌘",
  },
  {
    number: "02",
    title: "Product & Design",
    description:
      "Help turn ideas into useful digital experiences through research, interface design, and product thinking.",
    skills: ["UI/UX design", "Research", "Prototyping"],
    icon: "✳",
  },
  {
    number: "03",
    title: "Community & Communications",
    description:
      "Help people discover SEENRO, share useful information, build relationships, and grow our community.",
    skills: ["Writing", "Social media", "Community"],
    icon: "◎",
  },
  {
    number: "04",
    title: "Business & Operations",
    description:
      "Support planning, documentation, coordination, partnerships, and the day-to-day work behind our projects.",
    skills: ["Organisation", "Research", "Coordination"],
    icon: "↗",
  },
];

const values = [
  {
    number: "01",
    title: "Learn by contributing",
    description:
      "Build practical experience by contributing to real projects and collaborating with others.",
  },
  {
    number: "02",
    title: "Work collaboratively",
    description:
      "Share ideas, learn from different perspectives, and contribute as part of a team.",
  },
  {
    number: "03",
    title: "Make an impact",
    description:
      "Help develop technology and digital services with a focus on useful outcomes.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="SEENRO Technology home">
            <span className="brand-mark">S</span>
            <span className="brand-name">
              SEENRO<span>TECHNOLOGY</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#experience">The experience</a>
          </nav>

          <a className="nav-cta" href="#apply">
            Apply to volunteer <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            SEENRO TECHNOLOGY · VOLUNTEER PROGRAMME
          </div>

          <h1>
            Your skills can help
            <br />
            <span>build what comes next.</span>
          </h1>

          <p className="hero-description">
            Join a community of people who want to learn, create, and
            contribute to meaningful technology projects. Bring your ideas.
            Bring your skills. Grow with us.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#apply">
              Start your application <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#opportunities">
              Explore opportunities
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Open to people with different skills, interests, and experience
          </div>
        </div>

        <div className="hero-side-label" aria-hidden="true">
          PEOPLE · IDEAS · TECHNOLOGY
        </div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div>
            <p className="section-kicker">01 / ABOUT THE PROGRAMME</p>
            <h2>
              Be part of
              <br />
              <span>something being built.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              SEENRO Technology is building digital products and services.
              We welcome people who want to contribute their abilities,
              explore new ideas, and gain experience through collaboration.
            </p>
            <p>
              Whether your strengths are technical, creative, organisational,
              or community-focused, there may be a way for you to contribute.
              Tell us what you can bring and what you hope to learn.
            </p>
            <a className="text-link" href="#apply">
              Tell us about yourself <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="opportunities-section section-pad" id="opportunities">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / WHERE YOU CAN CONTRIBUTE</p>
              <h2>Find your place.</h2>
            </div>
            <p>
              Explore the areas below and choose the one that best matches
              your interests and abilities.
            </p>
          </div>

          <div className="opportunity-grid">
            {opportunities.map((item) => (
              <article className="opportunity-card" key={item.number}>
                <div className="card-topline">
                  <span className="card-number">{item.number}</span>
                  <span className="card-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="skill-list">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <a
                  className="card-link"
                  href="#apply"
                  aria-label={`Apply for ${item.title}`}
                >
                  Express your interest <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="opportunity-note">
            These are areas of contribution, not a guarantee of a specific
            placement. We will review your interests and experience.
          </p>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="container">
          <div className="experience-heading">
            <p className="section-kicker">03 / THE EXPERIENCE</p>
            <h2>
              Contribute with purpose.
              <br />
              <span>Grow through experience.</span>
            </h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-item" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="application-section section-pad" id="apply">
        <div className="container application-grid">
          <div className="application-intro">
            <p className="section-kicker">04 / YOUR NEXT STEP</p>
            <h2>
              Let&apos;s hear
              <br />
              <span>from you.</span>
            </h2>
            <p>
              Share a little about yourself, your interests, and how you would
              like to contribute. You do not need to have everything figured
              out before expressing your interest.
            </p>

            <div className="application-aside">
              <span className="aside-symbol">✳</span>
              <div>
                <strong>Different skills. Shared ambition.</strong>
                <p>
                  Tell us what you know, what you are learning, and what you
                  would like to explore.
                </p>
              </div>
            </div>
          </div>

          <VolunteerApplicationForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">S</span>
            <span className="brand-name">
              SEENRO<span>TECHNOLOGY</span>
            </span>
          </a>
          <p>Building technology. Creating possibilities.</p>
          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 SEENRO Technology</span>
          <span>Volunteer Programme</span>
        </div>
      </footer>
    </main>
  );
}
