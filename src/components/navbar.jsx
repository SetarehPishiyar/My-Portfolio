const Navbar = () => {
  return (
    <header className="nav">
      <div className="container nav__row">
        <div className="nav__logo">Setareh Pishiyar</div>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
