import * as React from "react";
import { FunctionComponent, ReactElement } from "react";

const PageMain: FunctionComponent = (): ReactElement => {
  return (
    <main className={`page-content`}>
      <section>
        <h2>Main</h2>
        <article>input</article>
      </section>
    </main>
  );
};

export default PageMain;
