import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Videography() {
  const videoProjects = projects.filter(
    (project) => project.category === "videography"
  );

  return (
    <main className="page">
      <section className="section works-section">
        <div className="content-container">
          <h1 className="section-title section-title-centered">Videography</h1>

          {videoProjects.map((project, index) => {
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
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="project-img-el"
                      />
                    </div>

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
    </main>
  );
}
