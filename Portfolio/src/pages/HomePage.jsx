export default function HomePage() {
  return (
    <main className="page">
      {/* ABOUT ME SECTION */}
      <section className="section about-section">
        <div className="content-container about-layout">
          <div className="about-text">
            <h1 className="section-title">ABOUT ME</h1>
            <p className="body-text">
              Hi, I’m Bibhas, a Creative Designer who has experience with
              graphic design, UI/UX, photography, and video production. I’m
              passionate about blending creativity, storytelling, and technology
              to solve design problems. I think every problem has a story, and
              great design begins by understanding it.
            </p>
          </div>

          <div className="about-graphic">
            {/* Placeholder for your circular skill graphic */}
            <div className="about-circle">
              <span className="about-circle-label">Skills Graphic</span>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS SECTION */}
      <section className="section works-section">
        <div className="content-container">
          <h2 className="section-title section-title-centered">
            SELECTED WORKS
          </h2>

          {/* PROJECT 1 – THE HIVE (image left, text right) */}
          <div className="project-row">
            <div className="project-image placeholder-image">
              {/* replace with <img src="..." alt="The Hive" /> later */}
              <span>THE HIVE – Video Still</span>
            </div>
            <div className="project-text">
              <h3 className="project-title">THE HIVE</h3>
              <p className="body-text">
                Video project highlighting what THE HIVE @ ALTEC represents as a
                collaborative community space.
              </p>
              <p className="meta-line">
                <span className="meta-label">Year:</span> 2025
              </p>
              <p className="meta-line">
                <span className="meta-label">Role:</span> Video Producer
              </p>
            </div>
          </div>

          {/* PROJECT 2 – PRIME VIDEO (text left, image right) */}
          <div className="project-row project-row-reverse">
            <div className="project-image placeholder-image">
              <span>Prime Video – Concept</span>
            </div>
            <div className="project-text">
              <h3 className="project-title">PRIME VIDEO</h3>
              <p className="body-text">
                A redesign concept exploring how Prime Video could increase
                retention by transforming the platform from a passive watching
                experience into a more interactive and community-driven space.
              </p>
              <p className="meta-line">
                <span className="meta-label">Year:</span> 2025
              </p>
              <p className="meta-line">
                <span className="meta-label">Role:</span> UI/UX Designer
              </p>
            </div>
          </div>

          {/* PROJECT 3 – CRAFTERNOON (image left, text right) */}
          <div className="project-row">
            <div className="project-image placeholder-image">
              <span>Crafternoon – Poster</span>
            </div>
            <div className="project-text">
              <h3 className="project-title">CRAFTERNOON</h3>
              <p className="body-text">
                Poster design created for the annual ALTEC event at the
                University of Colorado Boulder. The event promotes cultural
                awareness through fun, hands-on crafting and language
                activities.
              </p>
              <p className="meta-line">
                <span className="meta-label">Year:</span> 2025
              </p>
              <p className="meta-line">
                <span className="meta-label">Role:</span> Graphic Designer
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
