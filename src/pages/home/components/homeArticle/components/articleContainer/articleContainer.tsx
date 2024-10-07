import articleContent from '@/pages/home/static/dummy-data';
import style from '../articleContent/components/articleDescription.module.css'
import ArticleBox from '../articleContent/ArticleBox';
import ArticleTitle from '../articleContent/components/articleTitle';
import ArticleDescription from '../articleContent/components/articleDescription';
import { PropsWithChildren } from 'react';
import ArticleMainBox from '../articleContent/articleMainBox';







const ArticleConteiner: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <ArticleMainBox id={articleContent[0].id}>
        <div className={style.articleImg}>
          <img
            className={style.img}
            src={articleContent[0].img}
            height="200px"
            width="150px"
            alt="gamodi" // Updated to use title for better accessibility
          />
        </div>

        <ArticleBox {...articleContent[0]}>
          <ArticleTitle>{articleContent[0].title}</ArticleTitle>

          <ArticleDescription>
            {articleContent[0].description1}
          </ArticleDescription>

          <ArticleDescription>
            {articleContent[0].description2}
          </ArticleDescription>

          <ArticleDescription>
            {articleContent[0].descriptionSpan}
          </ArticleDescription>
        </ArticleBox>
      </ArticleMainBox>
      {/* {firstcardfirstcardfirstcardfirstcardfirstcardfirstcardfirstcard} */}

      {/* {second cardsecond cardsecond cardsecond cardsecond cardsecond card} */}

      <ArticleMainBox id={articleContent[1].id}>
        <div className={style.articleImg}>
          <img
            className={style.img}
            src={articleContent[1].img}
            height="200px"
            width="150px"
            alt="gamodi" // Updated to use title for better accessibility
          />
        </div>

        <ArticleBox {...articleContent[1]}>
          <ArticleTitle>{articleContent[1].title}</ArticleTitle>

          <ArticleDescription>
            {articleContent[1].description1}
          </ArticleDescription>

          <ArticleDescription>
            {articleContent[1].description2}
          </ArticleDescription>

          <ArticleDescription>
            {articleContent[1].descriptionSpan}
          </ArticleDescription>
        </ArticleBox>
        
      </ArticleMainBox>
    </>
  );
};

export default ArticleConteiner;
