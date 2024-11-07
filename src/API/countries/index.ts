import { Article } from "@/pages/home/components/homeArticle/components/articleContent/components/reducer/reducer";
import { httpClient } from "..";

type Card = {
  id: string;
  title: string;
  img: string;
  likesCount: number;
};


export const getCountries = async (): Promise<Article[]> => {
  try {
    const response = await httpClient.get("/countries");
    return response.data; 
    
  } catch (error) {
    console.log("Error fetching countries:", error);
    return []; 
  }
};


export const updateCountry = ({
  id,
  payload,
}: {
  id: string;
  payload: string;
}) => {
  return httpClient.patch(`/countries/${id}`, payload).then((res) => res.data);
};

export const CarddeleteCountry = async (id: string) => {
  try {
    await httpClient.delete(`/countries/${id}`);
  } catch (error) {
    console.log("error:", error);
  }
};

export const articleLike = async (id: string) => {
  try {
    await httpClient.put(`/countries/${id}`, { incrementLike: true });
  } catch (error) {
    console.log("Can't like article", error);
    throw error;
  }
};

export const cardUpdate = async (updatedCard: Article) => {
  try {
    await httpClient.put(`/countries/${updatedCard.id}`, updatedCard);
  } catch (error) {
    console.log("error:", error);
  }
};

export const addCard = async (newCard: Card) => {
  try {
    await httpClient.post("/countries", newCard);
  } catch (error) {
    console.log("error:", error);
  }
};
