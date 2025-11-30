export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="nav-left">
          <button className="nav-link">Home</button>
          <button className="nav-link">Work</button>
          <button className="nav-link">Contact</button>
        </div>

        <div className="nav-center">
          <span className="nav-brand">Bibhas Shris</span>
        </div>

        <div className="nav-right">{/* empty for now */}</div>
      </nav>
    </header>
  );
}
