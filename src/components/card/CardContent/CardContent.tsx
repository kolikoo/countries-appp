import style from "../card.module.css";




const CardContent: React.FC<{name: string;population: number;city:string}> = ({ name, population, city }) => {
  return (
    <div className={style.article_card_content}>
   
      {/* Use the imported style object */}
      <h3 className={style.article_H3}>
       
        {/* Use the imported style object */}
        <span>ქვეყნის სახელი </span>
        {name}
      </h3>
      <h3 className={style.article_H3}>
      
        {/* Use the imported style object */}
        <span>მოსახლეობის რაოდენობა </span> {population}
      </h3>
      <h3 className={style.article_H3}>
     
        {/* Use the imported style object */}
        <span>დედაქალაქი </span>
        {city}
      </h3>
    </div>
  );
};

export default CardContent;
