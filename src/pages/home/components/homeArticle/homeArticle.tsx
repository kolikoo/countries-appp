import React, { PropsWithChildren } from "react";
import style from "./homeArticle.module.css";

import ArticleContainerTest from "./components/testcontainer/testcontainer";

// type Prop = {
//   children?: React.ReactNode;
// };
const ArticleList: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className={style.articleList}>
      {children}
      <ArticleContainerTest />
    </article>
  );
};

export default ArticleList;
