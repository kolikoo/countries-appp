import React, { PropsWithChildren } from "react";
import style from "./homeArticle.module.css";

import ArticleContainer from "./components/articleContainer/articleContainer";

// type Prop = {
//   children?: React.ReactNode;
// };
const ArticleList: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className={style.articleList}>
      {children}
      <ArticleContainer />
    </article>
  );
};

export default ArticleList;
