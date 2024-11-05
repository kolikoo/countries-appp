import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleList from "./singleList/singleList";

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

const SingleListView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [articleInfo, setArticleInfo] = useState<Article | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/countries/${id}`)
      .then((res) => {
        setArticleInfo(res.data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, [id]);
  if (!articleInfo) {
    return <div>Article not found</div>;
  }

  return <SingleList article={articleInfo} />;
};

export default SingleListView;
