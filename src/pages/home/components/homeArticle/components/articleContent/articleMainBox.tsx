import { Link } from "react-router-dom";
import style from "../articleContent/components/articleDescription.module.css";
import React, { PropsWithChildren } from "react";

const ArticleMainBox: React.FC<PropsWithChildren<{id:string}>> = ({id, children }) => {
  return (

    <Link style={{color:"black",textDecoration:"none"}} to={`${id}`}>
      <div className={style.articleBox}>
        {children} {/* Render children here */}
      </div>
    </Link>
  );
};

export default ArticleMainBox;
