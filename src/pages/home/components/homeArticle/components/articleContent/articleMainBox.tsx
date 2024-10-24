import style from "../articleContent/components/articleDescription.module.css";
import React, { PropsWithChildren } from "react";

interface ArticleMainBoxProps {
  id: string; // Ensure id is defined here
  className?: string;
}

const ArticleMainBox: React.FC<PropsWithChildren<ArticleMainBoxProps>> = ({
  children,
  className,
  id,
}) => {
  return (
    <div className={`${style.articleBox} ${className}`} id={id}>
      {" "}
      {/* Add id here */}
      {children}
    </div>
  );
};

export default ArticleMainBox;
