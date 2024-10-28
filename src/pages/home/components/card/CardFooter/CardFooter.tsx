
import style from "./CardFooter.module.css";
// import style from './CardFooter.module.css'

// interface CardFooterProps {
//   children?: React.ReactNode; // აქ დამატებულია
// }

const CardFooter: React.FC = () => {
  return (
    <div className={style.article_footer}>
      <p className={style.article_p1}>ინფორმაციის დასასრული</p>
    </div>
  );
};

export default CardFooter;
