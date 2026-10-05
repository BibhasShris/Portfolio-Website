import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { key: routeKey } = useLocation();
  const [openForRoute, setOpenForRoute] = useState(null);
  const workRef = useRef(null);
  const workButtonRef = useRef(null);
  const isWorkOpen = openForRoute === routeKey;

  useEffect(() => {
    if (!isWorkOpen) return;
    const closeOutside = (event) => {
      if (!workRef.current?.contains(event.target)) setOpenForRoute(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [isWorkOpen]);

  const selectWork = () => {
    setOpenForRoute(null);
    // Do not leave keyboard focus inside the now-hidden panel.
    workButtonRef.current?.focus();
  };

  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="nav-left">
          {/* HOME */}
          <Link to="/" className="nav-link">
            Home
          </Link>

          {/* WORK DROPDOWN */}
          <div
            className="nav-item nav-work"
            ref={workRef}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setOpenForRoute(routeKey);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setOpenForRoute(null);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setOpenForRoute(null);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                selectWork();
              }
            }}
          >
            <button
              type="button"
              ref={workButtonRef}
              className="nav-link nav-link-work"
              aria-expanded={isWorkOpen}
              aria-controls="work-dropdown"
              onClick={() => setOpenForRoute(isWorkOpen ? null : routeKey)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setOpenForRoute(routeKey);
                }
              }}
            >
              Work <span className="nav-link-caret">▾</span>
            </button>

            <div id="work-dropdown" className={`nav-dropdown${isWorkOpen ? " is-open" : ""}`}>
              <Link to="/graphic-design" className="dropdown-link" onClick={selectWork}>
                Graphic Design
              </Link>
              <Link to="/ui-ux" className="dropdown-link" onClick={selectWork}>
                UI / UX
              </Link>
              <Link to="/photography" className="dropdown-link" onClick={selectWork}>
                Photography
              </Link>
              <Link to="/videography" className="dropdown-link" onClick={selectWork}>
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
