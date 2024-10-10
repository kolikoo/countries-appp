import React, { useState } from "react";
import articleContent from "@/pages/home/static/dummy-data";
import style from "../articleContent/components/articleDescription.module.css";
import ArticleBox from "../articleContent/ArticleBox";
import ArticleTitle from "../articleContent/components/articleTitle";
import ArticleDescription from "../articleContent/components/articleDescription";
import ArticleMainBox from "../articleContent/articleMainBox";
import { Link } from "react-router-dom";
import LikeButton from "../articleContent/components/likebutton";

const ArticleContainer: React.FC = () => {

  const [articles, setArticles] = useState(
    articleContent.map((article) => ({ ...article, likeCount: 0 })) 
  );

  const handleLike = (id: string) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? { ...article, likeCount: article.likeCount + 1 }
          : article
      )
    );
  };

  const [isSortedByLikes, setIsSortedByLikes] = useState(false);

  const toggleSort = () => {
    setIsSortedByLikes((prev) => !prev);
  };

  const sortedArticles = [...articles].sort((a, b) => {
    const likesA = a.likeCount || 0;
    const likesB = b.likeCount || 0;
    return isSortedByLikes ? likesB - likesA : 0;
  });

  return (
    <>
      <button onClick={toggleSort}>
        {isSortedByLikes ? "Show All Articles" : "Sort by Most Likes"}
      </button>

      {sortedArticles.map((content) => (
        <ArticleMainBox key={content.id} id={content.id}>
          <div className={style.articleImg}>
            <img
              src={content.img}
              height="200"
              width="150"
              alt={content.title}
            />
          </div>

          <ArticleBox {...content}>
            <ArticleTitle>{content.title}</ArticleTitle>
            <ArticleDescription>{content.description1}</ArticleDescription>
            <ArticleDescription>{content.description2}</ArticleDescription>

            <Link
              style={{
                borderRadius: "10px",
                backgroundColor: "#c77415",
                padding: "10px",
                color:"white"
              }}
              to={`/home/${content.id}`}
            >
              <ArticleDescription>{content.descriptionSpan}</ArticleDescription>
            </Link>

            <LikeButton
              onClick={() => handleLike(content.id)}
              count={content.likeCount}
            />
          </ArticleBox>
        </ArticleMainBox>
      ))}
    </>
  );
};

export default ArticleContainer;
