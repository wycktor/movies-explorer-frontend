function NavTab() {
  return (
    <section className="navtab">
      <nav className="navtab__nav">
        <ul className="navtab__list">
          <li className="navtab__item">
            <a href="#project" className="navtab__link">
              О проекте
            </a>
          </li>
          <li className="navtab__item">
            <a href="#techs" className="navtab__link">
              Технологии
            </a>
          </li>
          <li className="navtab__item">
            <a href="#student" className="navtab__link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
