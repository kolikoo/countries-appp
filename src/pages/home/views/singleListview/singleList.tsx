import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleList from "./singleList/singleList";
import { getCountries } from "@/API/countries";

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
  const [cardList, setCardList] = useState<Article[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getCountries();
        setCardList(response);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchCountries();
  }, []);

  const cardInfo = cardList.find((country) => country.id === id);

  if (!cardInfo) {
    return <div style={{ color: "#fff" }}> There's no such card </div>;
  }

  return <SingleList article={cardInfo} />;
};

export default SingleListView;
