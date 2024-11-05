import React from "react";
import ArticleBox from "@/pages/home/components/homeArticle/components/articleContent/ArticleBox";
import ArticleMainBox from "@/pages/home/components/homeArticle/components/articleContent/articleMainBox";
import ArticleDescription from "@/pages/home/components/homeArticle/components/articleContent/components/articleDescription";
import ArticleTitle from "@/pages/home/components/homeArticle/components/articleContent/components/articleTitle";
import style from "@/pages/home/components/homeArticle/components/articleContent/components/articleDescription.module.css";

type Article = {
  id: string;
  img: string;
  title: {
    ka: string;
    en: string;
  };
  description1: {
    ka: string;
    en: string;
  };
  description2: {
    ka: string;
    en: string;
  };
  descriptionSpan: {
    ka: string;
    en: string;
  };
};

interface SingleListProps {
  article: Article;
}

const SingleList: React.FC<SingleListProps> = ({ article }) => {
  return (
    <ArticleMainBox id={article.id}>
      <div className={style.articleImg}>
        <img
          className={style.img}
          src={article.img}
          height="200px"
          width="150px"
          alt={article.title.en}
        />
      </div>

      <ArticleBox {...article}>
        <ArticleTitle>{article.title.en}</ArticleTitle>

        <ArticleDescription>{article.description1.en}</ArticleDescription>

        <ArticleDescription>{article.description2.en}</ArticleDescription>
      </ArticleBox>
    </ArticleMainBox>
  );
};

export default SingleList;
