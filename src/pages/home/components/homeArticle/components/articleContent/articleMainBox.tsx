import style from "../articleContent/components/articleDescription.module.css";
import React, { PropsWithChildren } from "react";

interface ArticleMainBoxProps {
  id: string;
  className?: string; 
}

const ArticleMainBox: React.FC<PropsWithChildren<ArticleMainBoxProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={`${style.articleBox} ${className}`}>
 
      {children}
    </div>
  );
};

export default ArticleMainBox;
