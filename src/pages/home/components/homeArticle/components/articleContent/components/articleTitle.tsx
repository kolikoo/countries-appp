import style from "../components/articleDescription.module.css";
import React, { PropsWithChildren } from "react";

interface ArticleTitleProps extends PropsWithChildren {
  className?: string; //
}

const ArticleTitle: React.FC<ArticleTitleProps> = ({ children, className }) => {
  return <h2 className={`${style.title} ${className}`}>{children}</h2>;
};

export default ArticleTitle;
