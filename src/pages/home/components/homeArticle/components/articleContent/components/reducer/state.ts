import imgBrazil from "../../../../../images/brazil.jpg";
import img_georgia from "../../../../../images/georgia-card.png";
import { Article } from "./reducer";

const articleInitialState: Article[] = [
  {
    img: imgBrazil,
    title: {
      ka: "ბრაზილია",
      en: "BRAZIL",
    },
    description1: {
      ka: "კონტინენტი: სამხრეთ ამერიკა",
      en: "Continent: South America",
    },
    description2: {
      ka: "ენა: პორტუგალიური",
      en: "Language: Portuguese",
    },
    descriptionSpan: {
      ka: "მეტი ინფორმაციისთვის დააჭირეთ...",
      en: "For more information, click here...",
    },
    id: "1",
    likeCount: 0,
    isDeleted: false,
  },
  {
    img: img_georgia,
    title: {
      ka: "საქართველო",
      en: "GEORGIA",
    },
    description1: {
      ka: "კონტინენტი: ევროპა",
      en: "Continent: Europe",
    },
    description2: {
      ka: "ენა: ქართული",
      en: "Language: Georgian",
    },
    descriptionSpan: {
      ka: "მეტი ინფორმაციი‍სათვის დააჭირეთ...",
      en: "For more information, click here...",
    },
    id: "2",
    likeCount: 0,
    isDeleted: false,
  },
];

export default articleInitialState;
