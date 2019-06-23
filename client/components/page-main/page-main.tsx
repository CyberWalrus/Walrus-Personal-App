import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const PageMain: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <header className={`page-header`}>
        <div className={`logo`}>
          <Link to={RoutePath.INDEX} className={`logo__link`}>
            <img className={`logo__img`} src={`img/walrus-icon-white.png`} />
          </Link>
        </div>
        <nav className={`menu`}>
          <ul>
            <li className={`menu__item`}>
              <Link to={RoutePath.INDEX} className={`menu__link`}>
                Main
              </Link>
            </li>
            <li className={`menu__item`}>
              <Link to={RoutePath.INFO} className={`menu__link`}>
                Info
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`user`}>
          <Link to={RoutePath.LOGIN} className={`user__link`}>
            Sign In
          </Link>
        </div>
      </header>
      <main className={`page-content`}>
        <section>
          <h2>Hello Walrus</h2>
          <article>input</article>
        </section>
      </main>
      <footer className={`page-footer`}>
        <div className={`logo logo_footer`}>
          <Link to={RoutePath.INDEX} className={`logo__link`}>
            <img className={`logo__img`} src={`img/walrus-icon-white.png`} />
          </Link>
        </div>
        <div className={`copyright`}>
          <p>© 2019 Walrus Personal App</p>
        </div>
      </footer>
    </div>
  );
};

export default PageMain;
