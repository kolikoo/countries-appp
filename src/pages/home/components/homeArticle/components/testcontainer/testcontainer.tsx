import React, { FormEvent, useEffect, useState } from "react";
import style from "../articleContent/components/articleDescription.module.css";
import ArticleBox from "../articleContent/ArticleBox";
import ArticleTitle from "../articleContent/components/articleTitle";
import ArticleDescription from "../articleContent/components/articleDescription";
import ArticleMainBox from "../articleContent/articleMainBox";
import { Link, useParams } from "react-router-dom";
import LikeButton from "../articleContent/components/likebutton";
import ArticleCreateForm from "../articleContent/components/articleCreateForm/articleCreateForm";
import OtpInput from "../articleContent/components/OtpInput/otpInput";
import axios from "axios";

type Article = {
  isDeleted: boolean;
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
  id: string;
  likeCount: number;
};

const ArticleContainerTest: React.FC = () => {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/countries").then((res) => {
      console.log(res.data);
      setArticleList(res.data);
    });
  }, []);

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handleLike = (id: string) => {
    setArticleList((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? { ...article, likeCount: article.likeCount + 1 }
          : article,
      ),
    );
  };

  // Handle Article creation
  const handleCreateArticle = (
    event: FormEvent<HTMLFormElement>,
    img: string,
  ) => {
    event.preventDefault();

    const articleObj: Article = {
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
        ka: "მეტი ინფორმაციისთვის დააჭირეთ...",
        en: "For more information, click here...",
      },
      img,
      likeCount: 0,
      isDeleted: false,
    };

    const formData = new FormData(event.currentTarget);

    for (const [key, value] of formData) {
      if (Object.prototype.hasOwnProperty.call(articleObj, key)) {
        (articleObj as Record<string, unknown>)[key] = value;
      }
    }

    setArticleList((prevArticles) => [...prevArticles, articleObj]);
  };

  // Handle Article deletion
  const handleDeleteArticle = (id: string) => {
    axios.delete(`http://localhost:3000/countries/${id}`).then(() => {
      setArticleList((prevArticleList) =>
        prevArticleList.filter((article) => article.id !== id),
      );
    });
  };

  // Handle Article sorting
  const handleArticleSort = (sortType: "asc" | "desc") => {
    const copiedActiveCards = [...articleList];

    if (sortType === "asc") {
      copiedActiveCards.sort((a, b) => a.likeCount - b.likeCount);
    } else if (sortType === "desc") {
      copiedActiveCards.sort((a, b) => b.likeCount - a.likeCount);
    }

    setArticleList(copiedActiveCards);
  };

  const { language } = useParams<{ language: "ka" | "en" }>();

  return (
    <>
      <OtpInput length={4} value={otp} onChange={handleOtpChange} />
      <div className={style.formAndButton}>
        <p className={style.sort}>
          Sort by <span> </span>
          <button onClick={() => handleArticleSort("desc")}>Most Voted</button>/
          <button onClick={() => handleArticleSort("asc")}>Least Voted</button>
        </p>
        <ArticleCreateForm
          onArticleCreate={handleCreateArticle}
          title={title}
          description={description}
          onTitleChange={(e) => setTitle(e.target.value)}
          onDescriptionChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {articleList.map((article) => (
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
              {article.title
                ? language === "ka"
                  ? article.title.ka
                  : article.title.en
                : "Title not available"}
            </ArticleTitle>

            <ArticleDescription>
              {article.description1
                ? language === "ka"
                  ? article.description1.ka
                  : article.description1.en
                : "Description not available"}
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
                {article.descriptionSpan
                  ? language === "ka"
                    ? article.descriptionSpan.ka
                    : article.descriptionSpan.en
                  : "More info"}
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
    </>
  );
};

export default ArticleContainerTest;
