import React from 'react';
import { site, experience, projects, about } from './content.js';

const Nav = () => (
  <nav className="nav" aria-label="Sections">
    <a href="#top" className="nav-name">{site.name}</a>
    <div className="nav-links">
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href={site.links[0].href} target="_blank" rel="noopener">Resume</a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="hero" id="top">
    <img className="hero-photo" src={site.photo} alt="" width="120" height="120" />
    <h1 className="hero-name">{site.name}</h1>
    <p className="hero-now">{site.now}</p>
    <ul className="hero-links">
      {site.links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            className={l.primary ? 'button' : 'link'}
            target={l.href.startsWith('http') || l.primary ? '_blank' : undefined}
            rel="noopener"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </header>
);

const Role = ({ r }) => (
  <article className="role">
    <div className="role-when">
      <span>{r.when}</span>
      <span className="role-place">{r.place}</span>
    </div>
    <div className="role-body">
      <h3 className="role-org">
        {r.logo && <img className="role-logo" src={r.logo} alt="" />}
        {r.org}
        <span className="role-title"> {r.role}</span>
      </h3>
      <p className="role-summary">{r.summary}</p>
      {r.points.length > 0 && (
        <ul className="role-points">
          {r.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
      {r.stack && <p className="role-stack">{r.stack}</p>}
    </div>
  </article>
);

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>
    <div className="ledger">
      {experience.map((r) => <Role key={r.org} r={r} />)}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <p className="section-intro">
      Side projects, mostly backend. The ones without a link are private or still in progress; ask and I will walk you through the code.
    </p>
    <ul className="projects">
      {projects.map((p) => (
        <li key={p.name} className="project">
          {p.image && <img className="project-image" src={p.image} alt="" loading="lazy" />}
          <h3>
            {p.href ? (
              <a href={p.href} target="_blank" rel="noopener">{p.name}</a>
            ) : (
              p.name
            )}
          </h3>
          <p className="project-blurb">{p.blurb}</p>
          <p className="project-stack">{p.stack}</p>
        </li>
      ))}
    </ul>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <h2>About</h2>
    <dl className="about">
      <dt>Education</dt>
      <dd>{about.education}</dd>
      <dt>Awards</dt>
      <dd>
        <ul>{about.awards.map((a) => <li key={a}>{a}</li>)}</ul>
      </dd>
      <dt>Tools I reach for</dt>
      <dd>{about.tools}</dd>
      <dt>Elsewhere</dt>
      <dd>{about.personal}</dd>
    </dl>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>
      Reach me at <a href={`mailto:${site.email}`}>{site.email}</a>. Based in Philadelphia.
    </p>
    <p className="footer-links">
      {site.links.slice(1, 3).map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener">{l.label}</a>
      ))}
    </p>
  </footer>
);

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
