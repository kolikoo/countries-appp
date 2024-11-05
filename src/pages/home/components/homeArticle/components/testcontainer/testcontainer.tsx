import React, { FormEvent, useEffect, useRef, useState } from "react";
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
  const [editableCard, setEditableCard] = useState<Article | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

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

  const handleCreateOrUpdateArticle = (
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

    if (editableCard) {
      const updatedCard = {
        ...editableCard,
        title: articleObj.title,
        description1: articleObj.description1,
      };
      axios
        .put(`http://localhost:3000/countries/${editableCard.id}`, updatedCard)
        .then(() => {
          setArticleList((prevArticles) =>
            prevArticles.map((article) =>
              article.id === editableCard.id ? updatedCard : article,
            ),
          );
          setEditableCard(null);
          setTitle("");
          setDescription("");
        })
        .catch((error) => {
          console.error("Error updating article:", error);
        });
    } else {
      axios.post("http://localhost:3000/countries", articleObj).then(() => {
        setArticleList((prevArticles) => [...prevArticles, articleObj]);
        setTitle(""); // Reset form fields after creation
        setDescription("");
      });
    }
  };

  const handleDeleteArticle = (id: string) => {
    axios.delete(`http://localhost:3000/countries/${id}`).then(() => {
      setArticleList((prevArticleList) =>
        prevArticleList.filter((article) => article.id !== id),
      );
    });
  };

  const handleEditClick = (id: string) => {
    const articleToEdit = articleList.find((article) => article.id === id);
    if (articleToEdit) {
      setEditableCard(articleToEdit);
      setTitle(articleToEdit.title.en);
      setDescription(articleToEdit.description1.en);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArticleSort = (sortType: "asc" | "desc") => {
    const sortedArticles = [...articleList];
    sortedArticles.sort((a, b) =>
      sortType === "asc"
        ? a.likeCount - b.likeCount
        : b.likeCount - a.likeCount,
    );
    setArticleList(sortedArticles);
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
          ref={formRef}
          onArticleCreate={handleCreateOrUpdateArticle}
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
              alt={article.title?.en || "Article Image"}
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
              style={{ color: "red", fontSize: "26px", cursor: "pointer" }}
              onClick={() => handleDeleteArticle(article.id)}
            >
              Delete
            </div>

            <div
              style={{ color: "blue", fontSize: "26px", cursor: "pointer" }}
              onClick={() => handleEditClick(article.id)}
            >
              Edit
            </div>
          </ArticleBox>
        </ArticleMainBox>
      ))}
    </>
  );
};

export default ArticleContainerTest;
