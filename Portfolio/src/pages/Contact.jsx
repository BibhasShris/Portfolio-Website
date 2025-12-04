export default function Contact() {
  return (
    <main className="page">
      <section className="section">
        <div className="content-container">
          <h1 className="section-title">Contact</h1>

          <p className="body-text">
            I'd love to connect! Whether it's about design, photography,
            videography, or collaboration, feel free to reach out.
          </p>

          <div style={{ marginTop: "32px", lineHeight: "2" }}>
            <p className="body-text">
              <strong>Email:</strong> shrisbibhas@gmail.com
            </p>
            <p className="body-text">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/bibhas-shris/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f6e2a6", textDecoration: "underline" }}
              >
                https://www.linkedin.com/in/bibhas-shris/
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
