import style from "../card.module.css";

// import style from './CardContent.module.css'
import { country } from "../../../myScript";

const CardContent: React.FC = () => {
  return (
    <div className={style.article_card_content}>
   
      {/* Use the imported style object */}
      <h3 className={style.article_H3}>
       
        {/* Use the imported style object */}
        <span>ქვეყნის სახელი </span>
        {country.name}
      </h3>
      <h3 className={style.article_H3}>
      
        {/* Use the imported style object */}
        <span>მოსახლეობის რაოდენობა </span> {country.population}
      </h3>
      <h3 className={style.article_H3}>
     
        {/* Use the imported style object */}
        <span>დედაქალაქი </span>
        {country.city}
      </h3>
    </div>
  );
};

export default CardContent;
