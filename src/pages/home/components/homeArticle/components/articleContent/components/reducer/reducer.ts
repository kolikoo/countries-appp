

export type Article = {
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

export type ArticleState = {
  articles: Article[];
  isSortedByLikes: boolean;
};

export type ArticleAction =
  | { type: "LIKE_ARTICLE"; payload: string }
  | { type: "CREATE_ARTICLE"; payload: { articleObj: Article } }
  | { type: "DELETE_ARTICLE"; payload: string }
  | { type: "RESTORE_ARTICLE"; payload: string }
  | { type: "TOGGLE_SORT" };

export const articleReducer = (
  state: ArticleState,
  action: ArticleAction,
): ArticleState => {
  switch (action.type) {
    case "LIKE_ARTICLE":
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.payload
            ? { ...article, likeCount: article.likeCount + 1 }
            : article,
        ),
      };

    case "CREATE_ARTICLE": {
      return {
        ...state,
        articles: [...state.articles, action.payload.articleObj],
      };
    }

    case "DELETE_ARTICLE":
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.payload
            ? { ...article, isDeleted: true }
            : article,
        ),
      };

    case "RESTORE_ARTICLE":
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.payload
            ? { ...article, isDeleted: false }
            : article,
        ),
      };

    case "TOGGLE_SORT":
      return {
        ...state,
        isSortedByLikes: !state.isSortedByLikes,
      };

    default:
      return state;
  }
};
