import style from "../articleContent/components/articleDescription.module.css"
import React, { PropsWithChildren } from "react";

interface ArticleTitleProps extends PropsWithChildren {
  className?: string; 
}

export const ArticleTitle: React.FC<ArticleTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className="articleTitleDiv">
      <h1 className={`${style.title} ${className}`}>{children}</h1>;
    </div>
  );
};

export default ArticleTitle;
