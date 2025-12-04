import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="page">
        <section className="section">
          <div className="content-container">
            <p className="body-text">Project not found.</p>
          </div>
        </section>
      </main>
    );
  }

  // use detail fields if they exist, otherwise fall back
  const heroImage = project.detailImage || project.image;
  const mainDescription = project.detailDescription || project.description;

  return (
    <main className="page">
      <section className="section">
        <div className="content-container">
          <h1 className="section-title">{project.title}</h1>

          <p className="meta-line">
            <span className="meta-label">Year:</span> {project.year}
          </p>
          <p className="meta-line">
            <span className="meta-label">Role:</span> {project.role}
          </p>
          <br />
          {/* MAIN DESCRIPTION */}
          <p className="body-text">{mainDescription}</p>

          {/* HERO IMAGE */}
          {heroImage && (
            <div style={{ marginTop: "32px", marginBottom: "32px" }}>
              <div className="project-image" style={{ maxWidth: "720px" }}>
                <img
                  src={heroImage}
                  alt={project.imageAlt}
                  className="project-img-el"
                />
              </div>
            </div>
          )}

          {/* LOCAL VIDEO SECTION */}
          {project.videoFile && (
            <div style={{ marginTop: "32px", marginBottom: "32px" }}>
              <video
                controls
                src={project.videoFile}
                style={{
                  width: "100%",
                  maxWidth: "720px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 35px rgba(0, 0, 0, 0.45)",
                }}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
