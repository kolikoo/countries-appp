
// import imgBrazil from "../components/images/brazil.jpg";
// import img_georgia from "../components/images/georgia-card.png";
 
import imgBrazil from "../../../../../images/brazil.jpg"
import img_georgia from "../../../../../images/georgia-card.png"
import { Article } from "./reducer";


const articleInitialState: Article[] = [
  {
    img: imgBrazil,
    title: "BRAZIL",
    description1: "კონტინენტი: სამხრეთ ამერიკა",
    description2: "ენა: პორტუგალიური",
    descriptionSpan: "მეტი ინფორმაციისთვის დააჭირეთ...",
    id: "1",
    likeCount: 0,
    isDeleted: false,
  },
  {
    img: img_georgia,
    title: "GEORGIA",
    description1: "კონტინენტი: ევროპა",
    description2: "ენა: ქართული",
    descriptionSpan: "მეტი ინფორმაციი‍სათვის დააჭირეთ...",
    id: "2",
    likeCount: 0,
    isDeleted: false,
  },
  // Add more articles as needed...
];

export default articleInitialState;
