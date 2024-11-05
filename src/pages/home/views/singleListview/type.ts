// types.ts
export interface Country {
  id: string;
  title: {
    ka: string;
    en: string;
  };
  description1: {
    ka: string;
    en: string;
  };
  img: string;
  likeCount: number;
  isDeleted: boolean;
}
