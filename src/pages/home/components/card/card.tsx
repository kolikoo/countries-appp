// import { Children } from 'react'
import style from "./card.module.css";
// import { country } from '../../myScript';

// interface CardProps {
//   children: React.ReactNode; // Allow children elements
// }
interface CardProps {
  children?: React.ReactNode; // Make children optional
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article className={style.article}>
      <div className={style.article_Card}>
        <div className={style.text_Article}>{children}</div>
      </div>
    </article>
  );
};

export default Card;
