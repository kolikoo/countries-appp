import style from "../articleContent/components/articleDescription.module.css";
import React, { PropsWithChildren } from "react";

const ArticleMainBox: React.FC<PropsWithChildren<{ id: string }>> = ({
  children,
}) => {
  return (
    <div className={style.articleBox}>
      {children} {/* Render children here */}
    </div>
  );
};

export default ArticleMainBox;
