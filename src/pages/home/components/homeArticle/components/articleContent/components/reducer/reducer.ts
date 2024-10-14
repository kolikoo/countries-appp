import listImg from "../../../articleContainer/create img.png";

export type Article = {
  isDeleted: boolean;
  img: string;
  title: string;
  description1: string;
  description2: string;
  descriptionSpan: string;
  id: string;
  likeCount: number;
};

export type ArticleState = {
  articles: Article[];
  isSortedByLikes: boolean;
};

export type ArticleAction =
  | { type: "LIKE_ARTICLE"; payload: string }
  | { type: "CREATE_ARTICLE"; payload: { articleObj: any } }
  | { type: "DELETE_ARTICLE"; payload: string }
  | { type: "RESTORE_ARTICLE"; payload: string }
  | { type: "TOGGLE_SORT" };

export const articleReducer = (state: ArticleState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case "LIKE_ARTICLE":
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload ? { ...article, likeCount: article.likeCount + 1 } : article
        ),
      };
    case "CREATE_ARTICLE": {
      const newArticle = {
        ...action.payload.articleObj,
        img: listImg,
        likeCount: 0,
        id: (Number(state.articles.at(-1)?.id) + 1).toString(),
        isDeleted: false,
      };
      return { ...state, articles: [...state.articles, newArticle] };
    }
    case "DELETE_ARTICLE":
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload ? { ...article, isDeleted: true } : article
        ),
      };
    case "RESTORE_ARTICLE":
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload ? { ...article, isDeleted: false } : article
        ),
      };
    case "TOGGLE_SORT":
      return { ...state, isSortedByLikes: !state.isSortedByLikes };
    default:
      return state;
  }
};
