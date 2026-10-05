import { useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import "../styles/photography.css";

gsap.registerPlugin(ScrollTrigger);
const photoProjects = projects.filter((project) => project.category === "photography");
const years = [...new Set(photoProjects.map((project) => project.year))].sort((a, b) => b - a);

export default function Photography() {
  const timelineRef = useRef(null);
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [hash]);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    // Natural scrolling: no pinned sections or extra scroll distance.
    media.add("(min-width: 761px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(timelineRef.current.querySelector(".photo-intro"),
        { opacity: 0.6, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      );
      gsap.utils.toArray(".photo-year", timelineRef.current).forEach((row) => {
        gsap.fromTo(row.querySelector(".photo-year-label"), { opacity: 0.6, y: 16 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 92%", once: true },
        });
        gsap.utils.toArray(".photo-project", row).forEach((card, index) => {
          gsap.fromTo(card, { opacity: 0.65, y: 28 }, {
            opacity: 1, y: 0, duration: 0.65, delay: (index % 3) * 0.08, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 94%", once: true },
          });
        });
        gsap.utils.toArray(".photo-cover-image", row).forEach((image) => {
          gsap.fromTo(image, { yPercent: -2 }, {
            yPercent: 2, ease: "none",
            scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      });
    });
    // Hover animates the cover, independently of the card's scroll entrance.
    media.add("(min-width: 761px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cleanups = gsap.utils.toArray(".photo-project", timelineRef.current).map((card) => {
        const hover = gsap.timeline({ paused: true, defaults: { duration: 0.35, ease: "power2.out" } })
          .to(card.querySelector(".photo-cover"), { scale: 1.08, y: -6 }, 0)
          .to(card.querySelector(".photo-caption"), { y: 8 }, 0)
          .to(card.querySelector(".photo-caption-arrow"), { x: 4, y: -4 }, 0);
        let pointerInside = false;
        let focused = false;
        const update = () => pointerInside || focused ? hover.play() : hover.reverse();
        const enter = () => { pointerInside = true; update(); };
        const leave = () => { pointerInside = false; update(); };
        const focus = () => { focused = true; update(); };
        const blur = () => { focused = false; update(); };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        card.addEventListener("focus", focus);
        card.addEventListener("blur", blur);
        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
          card.removeEventListener("focus", focus);
          card.removeEventListener("blur", blur);
        };
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    });
    return () => media.revert();
  }, []);

  return (
    <main className="photography-page" ref={timelineRef}>
      <header className="photo-intro">
        <p className="photo-eyebrow">Through my lens</p>
        <h1>Photography<span aria-hidden="true">.</span></h1>
        <div className="photo-intro-bottom">
          <p>Places, people, and the stories in between.</p>
          <span className="photo-count">{photoProjects.length} {photoProjects.length === 1 ? "project" : "projects"} / A visual journal</span>
        </div>
      </header>
      {years.length > 1 && (
        <nav className="photo-years" aria-label="Jump to photography year">
          <span>Explore the years</span>
          {years.map((year) => <a key={year} href={`#year-${year}`}>{year}</a>)}
        </nav>
      )}
      <div className="photo-timeline">
        {years.map((year) => (
          <section className="photo-year" id={`year-${year}`} key={year} aria-labelledby={`heading-${year}`}>
            <div className="photo-year-label">
              <span className="photo-eyebrow">Chapter</span>
              <h2 id={`heading-${year}`}>{year}</h2>
            </div>
            <div className="photo-projects">
              {photoProjects.filter((project) => project.year === year).map((project) => (
                <Link className="photo-project" key={project.id} to={`/project/${project.id}`}>
                  <div className="photo-cover">
                    <img className="photo-cover-image" src={project.image} alt={project.imageAlt} loading="lazy" onLoad={() => ScrollTrigger.refresh()} />
                    <span className="photo-open" aria-hidden="true">View project ↗</span>
                  </div>
                  <div className="photo-caption">
                    <div>
                      <p className="photo-date">{project.dateLabel || project.year}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="photo-caption-arrow" aria-hidden="true">↗</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <footer className="photo-footer">
        <p>{photoProjects.length ? "Every frame has a story." : "New stories are on the way."}</p>
        <Link to="/contact">Let’s create something together ↗</Link>
      </footer>
    </main>
  );
}
