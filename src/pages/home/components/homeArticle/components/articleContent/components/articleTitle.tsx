

import style from '../components/articleDescription.module.css'
import React, { PropsWithChildren } from "react";


export const ArticleTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return(
     <h1 className={style.title}>{children}</h1>
     )
};

export default ArticleTitle;