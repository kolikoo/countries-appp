import style from "../components/articleDescription.module.css";
import React, { PropsWithChildren } from "react";

interface ArticleTitleProps extends PropsWithChildren {
  className?: string; //
}

 const ArticleTitle: React.FC<ArticleTitleProps> = ({
  children,
  className,
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};

export default ArticleTitle;
