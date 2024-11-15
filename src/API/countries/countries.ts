import { httpClient } from "..";

type Card = {
  likesCount: number;
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

interface CountriesApiResponse {
  rows: Card[];
  nextOffset: number | null;
}
// getCountries;



export const getCountries = async (
  sortType: "asc" | "desc",
  page: number,
  limit: number,
): Promise<CountriesApiResponse> => {
  try {
    const response = await httpClient.get<{
      data:Card[];
      next:number;
    }>(
      `/countries?_page=${page}&_per_page=${limit}?_sort=${sortType === "asc" ? "countLike" : "-countLike"}`,
    );
    return {
     rows:response.data.data,
     nextOffset:response.data.next
    };
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw new Error("Error fetching countries");
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
    const currentDataResponse = await httpClient.get(`/countries/${id}`);
    const currentData = currentDataResponse.data;

    const updatedLikeCount = currentData.likeCount + 1;

    await httpClient.put(`/countries/${id}`, {
      ...currentData,
      likeCount: updatedLikeCount,
    });
  } catch (error) {
    console.error("Error liking article:", error);
    throw error;
  }
};

export const cardUpdate = async (updatedCard: Card) => {
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
