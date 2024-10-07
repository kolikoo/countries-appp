import React, { PropsWithChildren } from "react";
import style from "../articleContent/components/articleDescription.module.css";



const ArticleBox : React.FC <PropsWithChildren>=({children})=>{
 return <div className={style.boxText}>{children}</div>;
}
export default ArticleBox;
