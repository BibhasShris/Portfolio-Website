import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/photography.css";

export default function PhotographyDetail({ project }) {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.id]);

  // Gallery content is independent of the preview cover; older projects still work.
  const gallery = project.gallery?.length ? project.gallery : [{
    src: project.detailImage || project.image,
    alt: project.detailImageAlt || project.imageAlt,
  }];

  return (
    <main className="photo-detail">
      <Link className="photo-back" to={`/photography#year-${project.year}`}>← Back to photography</Link>
      <header>
        <p className="photo-eyebrow">Photography / {project.dateLabel || project.year}</p>
        <h1>{project.title}</h1>
        <p className="photo-detail-meta">{project.role}</p>
        <p className="photo-detail-description">{project.detailDescription || project.description}</p>
      </header>
      <section className="photo-gallery" aria-label={`${project.title} photographs`}>
        {gallery.map((photo, index) => (
          <figure key={`${photo.src}-${index}`}>
            <img src={photo.src} alt={photo.alt || project.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}
      </section>
      <footer className="photo-footer">
        <Link to={`/photography#year-${project.year}`}>← Explore photography</Link>
        <Link to="/contact">Let’s work together ↗</Link>
      </footer>
    </main>
  );
}
