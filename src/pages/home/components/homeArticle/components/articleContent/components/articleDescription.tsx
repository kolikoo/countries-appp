import style from "./articleDescription.module.css";
import React, { PropsWithChildren } from "react";

const ArticleDescription: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <p className={style.description}></p>
      {children}
    </>
  );
};

export default ArticleDescription;
