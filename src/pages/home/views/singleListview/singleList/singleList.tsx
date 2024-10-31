import { useParams } from "react-router-dom";
import ArticleBox from "@/pages/home/components/homeArticle/components/articleContent/ArticleBox";
import ArticleMainBox from "@/pages/home/components/homeArticle/components/articleContent/articleMainBox";
import ArticleDescription from "@/pages/home/components/homeArticle/components/articleContent/components/articleDescription";
import ArticleTitle from "@/pages/home/components/homeArticle/components/articleContent/components/articleTitle";
import articleContent from "@/pages/home/static/dummy-data";
import style from "@/pages/home/components/homeArticle/components/articleContent/components/articleDescription.module.css";

const SingleList = () => {
  const { id } = useParams<{ id: string }>();
  const article = articleContent.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <ArticleMainBox id={article.id}>
        <div className={style.articleImg}>
          <img
            className={style.img}
            src={article.img}
            height="200px"
            width="150px"
            alt={article.title}
          />
        </div>

        <ArticleBox {...article}>
          <ArticleTitle>{article.title}</ArticleTitle>

          <ArticleDescription>{article.description1}</ArticleDescription>

          <ArticleDescription>{article.description2}</ArticleDescription>

          <ArticleDescription>{article.descriptionSpan}</ArticleDescription>
        </ArticleBox>
      </ArticleMainBox>
    </>
  );
};

export default SingleList;
