import React, { FormEvent, useReducer, useState } from "react";
import style from "../articleContent/components/articleDescription.module.css";
import ArticleBox from "../articleContent/ArticleBox";
import ArticleTitle from "../articleContent/components/articleTitle";
import ArticleDescription from "../articleContent/components/articleDescription";
import ArticleMainBox from "../articleContent/articleMainBox";
import { Link, useParams } from "react-router-dom";
import LikeButton from "../articleContent/components/likebutton";
import ArticleCreateForm from "../articleContent/components/articleCreateForm/articleCreateForm";
import { articleReducer } from "../articleContent/components/reducer/reducer";
import articleInitialState from "../articleContent/components/reducer/state";
import OtpInput from "../articleContent/components/OtpInput/otpInput";

const ArticleContainer: React.FC = () => {
  const [state, dispatch] = useReducer(articleReducer, {
    articles: articleInitialState,
    isSortedByLikes: false,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handleLike = (id: string) => {
    dispatch({ type: "LIKE_ARTICLE", payload: id });
  };

  const handleCreateArticle = (
    event: FormEvent<HTMLFormElement>,
    img: string,
  ) => {
    event.preventDefault();

    const articleObj = {
      id: Date.now().toString(),
      title: {
        ka: title,
        en: title,
      },
      description1: {
        ka: description,
        en: description,
      },
      description2: {
        ka: "",
        en: "",
      },
      descriptionSpan: {
        ka: "მეტი ინფორმაციასთვის დააჭირეთ...",
        en: "For more information, click here...",
      },
      img,
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
    (article) => !article.isDeleted,
  );
  const sortedArticles = [...displayedArticles].sort((a, b) => {
    return state.isSortedByLikes ? b.likeCount - a.likeCount : 0;
  });

  const { language } = useParams<{ language: "ka" | "en" }>();

  return (
    <>
      <OtpInput length={4} value={otp} onChange={handleOtpChange} />
      <div className={style.formAndButton}>
        {/* OTP Input */}
        <button style={{ background: "#c77415" }} onClick={toggleSort}>
          {state.isSortedByLikes
            ? "ყველა სტატიის ჩვენება"
            : "სტატიის მოწონების მიხედვით "}
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
              alt={article.title?.en || "სტატიის სურათი"}
            />
          </div>

          <ArticleBox {...article}>
            <ArticleTitle>
              {language === "ka" ? article.title.ka : article.title.en}
            </ArticleTitle>
            <ArticleDescription>
              {language === "ka"
                ? article.description1.ka
                : article.description1.en}
            </ArticleDescription>

            <Link
              style={{
                borderRadius: "10px",
                backgroundColor: "#c77415",
                padding: "5px",
                color: "white",
                width: "20%",
                fontSize: "20px",
              }}
              to={`/${language}/home/${article.id}`}
            >
              <ArticleDescription>
                {language === "ka"
                  ? article.descriptionSpan.ka
                  : article.descriptionSpan.en}
              </ArticleDescription>
            </Link>

            <LikeButton
              onClick={() => handleLike(article.id)}
              count={article.likeCount}
            />
            <div
              style={{ color: "red", fontSize: "26px" }}
              onClick={() => handleDeleteArticle(article.id)}
            >
              წაშლა
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
                {language === "ka" ? article.title.ka : article.title.en}
              </ArticleTitle>
              <ArticleDescription>
                {language === "ka"
                  ? article.description1.ka
                  : article.description1.en}
              </ArticleDescription>
              <ArticleDescription>
                {language === "ka"
                  ? article.description2.ka
                  : article.description2.en}
              </ArticleDescription>

              <div style={{ color: "red", fontSize: "26px" }}>
                ეს სტატია წაშლილია
              </div>
              <button onClick={() => handleRestoreArticle(article.id)}>
                აღდგენა
              </button>
            </ArticleBox>
          </ArticleMainBox>
        ))}
    </>
  );
};

export default ArticleContainer;
