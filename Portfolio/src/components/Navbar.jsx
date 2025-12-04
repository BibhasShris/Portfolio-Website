import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="nav-left">
          {/* HOME */}
          <Link to="/" className="nav-link">
            Home
          </Link>

          {/* WORK DROPDOWN */}
          <div className="nav-item nav-work">
            <button className="nav-link nav-link-work">
              Work <span className="nav-link-caret">▾</span>
            </button>

            <div className="nav-dropdown">
              <Link to="/graphic-design" className="dropdown-link">
                Graphic Design
              </Link>
              <Link to="/ui-ux" className="dropdown-link">
                UI / UX
              </Link>
              <Link to="/photography" className="dropdown-link">
                Photography
              </Link>
              <Link to="/videography" className="dropdown-link">
                Videography
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* NAME / BRAND */}
        <div className="nav-center">
          <span className="nav-brand">Bibhas Shris</span>
        </div>

        <div className="nav-right">{/* empty for now */}</div>
      </nav>
    </header>
  );
}
