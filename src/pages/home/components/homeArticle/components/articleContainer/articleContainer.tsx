import React, { FormEvent, useReducer, useState } from "react";
import style from "../articleContent/components/articleDescription.module.css";
import ArticleBox from "../articleContent/ArticleBox";
import ArticleTitle from "../articleContent/components/articleTitle";
import ArticleDescription from "../articleContent/components/articleDescription";
import ArticleMainBox from "../articleContent/articleMainBox";
import { Link } from "react-router-dom";
import LikeButton from "../articleContent/components/likebutton";
import ArticleCreateForm from "../articleContent/components/articleCreateForm/articleCreateForm";
import { articleReducer } from "../articleContent/components/reducer/reducer";
import articleInitialState from "../articleContent/components/reducer/state";

const ArticleContainer: React.FC = () => {
  const [state, dispatch] = useReducer(articleReducer, {
    articles: articleInitialState,
    isSortedByLikes: false,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleLike = (id: string) => {
    dispatch({ type: "LIKE_ARTICLE", payload: id });
  };

  const handleCreateArticle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const articleObj = {
      id: Date.now().toString(),
      title,
      description,
      likeCount: 0,
      isDeleted: false,
    };
    dispatch({ type: "CREATE_ARTICLE", payload: { articleObj } });

    setTitle("");
    setDescription("");
  };

  const handleDeleteArticle = (id: string) => {
    dispatch({ type: "DELETE_ARTICLE", payload: id });
  };

  const handleRestoreArticle = (id: string) => {
    dispatch({ type: "RESTORE_ARTICLE", payload: id });
  };

  const toggleSort = () => {
    dispatch({ type: "TOGGLE_SORT" });
  };

  const displayedArticles = state.articles.filter(
    (article) => !article.isDeleted
  );
  const sortedArticles = [...displayedArticles].sort((a, b) => {
    return state.isSortedByLikes ? b.likeCount - a.likeCount : 0;
  });

  return (
    <>
      <div className={style.formAndButton}>
        <button style={{ background: "#c77415" }} onClick={toggleSort}>
          {state.isSortedByLikes ? "Show All Articles" : "Sort by Most Likes"}
        </button>
        <ArticleCreateForm
          onArticleCreate={handleCreateArticle}
          title={title}
          description={description}
          onTitleChange={(e) => setTitle(e.target.value)}
          onDescriptionChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {sortedArticles.map((article) => (
        <ArticleMainBox key={article.id} id={article.id}>
          <div className={style.articleImg}>
            <img
              src={article.img}
              height="200"
              width="150"
              alt={article.title}
            />
          </div>

          <ArticleBox {...article}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleDescription>{article.description1}</ArticleDescription>
            <ArticleDescription>{article.description2}</ArticleDescription>

            <Link
              style={{
                borderRadius: "10px",
                backgroundColor: "#c77415",
                padding: "5px",
                color: "white",
                width: "20%",
                fontSize: "20px",
              }}
              to={`/home/${article.id}`}
            >
              <ArticleDescription>{article.descriptionSpan}</ArticleDescription>
            </Link>

            <LikeButton
              onClick={() => handleLike(article.id)}
              count={article.likeCount}
            />
            <div
              style={{ color: "red", fontSize: "26px" }}
              onClick={() => handleDeleteArticle(article.id)}
            >
              delete
            </div>
          </ArticleBox>
        </ArticleMainBox>
      ))}

      {state.articles
        .filter((article) => article.isDeleted)
        .map((article) => (
          <ArticleMainBox
            key={article.id}
            id={article.id}
            className="deletedArticle"
          >
            <ArticleBox {...article}>
              <ArticleTitle className={"deletedArticle"}>
                {article.title}
              </ArticleTitle>
              <ArticleDescription>{article.description1}</ArticleDescription>
              <ArticleDescription>{article.description2}</ArticleDescription>

              <div style={{ color: "red", fontSize: "26px" }}>
                This article has been deleted
              </div>
              <button onClick={() => handleRestoreArticle(article.id)}>
                Restore
              </button>
            </ArticleBox>
          </ArticleMainBox>
        ))}
    </>
  );
};

export default ArticleContainer;
