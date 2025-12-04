import { projects } from "../data/projects";

export default function Photography() {
  const photoProjects = projects.filter(
    (project) => project.category === "photography"
  );

  return (
    <main className="page">
      <section className="section">
        <div className="content-container">
          <h1 className="section-title section-title-centered">Photography</h1>

          {photoProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div key={project.id} className="project-card">
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
            );
          })}
        </div>
      </section>
    </main>
  );
}
