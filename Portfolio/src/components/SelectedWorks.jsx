import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWorks() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //TITLE SCROLL ANIMATION
      gsap.from(".works-title", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".works-title",
          start: "top 85%",
        },
      });

      //PROJECT CARD ANIMATIONS
      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Only show featured projects on the homepage
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="section works-section" ref={sectionRef}>
      <div className="content-container">
        <h2 className="section-title section-title-centered works-title">
          SELECTED WORKS
        </h2>

        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 === 1;

          return (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="project-card">
                <div
                  className={
                    "project-row" + (isReversed ? " project-row-reverse" : "")
                  }
                >
                  {/* IMAGE */}
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-img-el"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="project-text">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="body-text">{project.description}</p>
                    <p className="meta-line">
                      <span className="meta-label">Year:</span> {project.year}
                    </p>
                    <p className="meta-line">
                      <span className="meta-label">Role:</span> {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
