import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const PageMain: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section>
          <h2>Main</h2>
          <article>input</article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageMain;
