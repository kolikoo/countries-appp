import style from "../card.module.css";
// import styles from './cardHeader.module.css'

const CardHeader: React.FC = () => {
  return (
    <div className={style.article_card_header}>
      {/* Use the imported style object */}
      <h2 className={style.article_H2}>ინფორმაცია</h2>
      {/* Use the imported style object */}
    </div>
  );
};

export default CardHeader;
