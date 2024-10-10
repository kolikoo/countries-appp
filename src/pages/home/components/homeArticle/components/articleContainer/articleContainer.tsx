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
  const [isSortedByLikes, setIsSortedByLikes] = useState(false);
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({
    "1": 0,
    "2": 0,
  });

  const [articles, setArticles] = useState(articleContent); 

  const handleLike = (id: string) => {
    setLikeCounts((prevCounts) => {
      const newCount = (prevCounts[id] || 0) + 1;
      console.log(`Article ${id} has ${newCount} likes`);
      return {
        ...prevCounts,
        [id]: newCount,
      };
    });
  };

  const toggleSort = () => {
    setIsSortedByLikes((prev) => !prev);
  };

  const sortedArticles = [...articles].sort((a, b) => {
    const likesA = likeCounts[a.id] || 0;
    const likesB = likeCounts[b.id] || 0;
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
              className={style.img}
              src={content.img}
              height="200px"
              width="150px"
              alt={content.title}
            />
          </div>

          <ArticleBox {...content}>
            <ArticleTitle>{content.title}</ArticleTitle>
            <ArticleDescription>{content.description1}</ArticleDescription>
            <ArticleDescription>{content.description2}</ArticleDescription>

            <Link
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#8d8d8d",
              }}
              to={`/home/${content.id}`}
            >
              <ArticleDescription>{content.descriptionSpan}</ArticleDescription>
            </Link>

            <LikeButton
              onClick={() => handleLike(content.id)}
              count={likeCounts[content.id]}
            />
          </ArticleBox>
        </ArticleMainBox>
      ))}
    </>
  );
};

export default ArticleContainer;
