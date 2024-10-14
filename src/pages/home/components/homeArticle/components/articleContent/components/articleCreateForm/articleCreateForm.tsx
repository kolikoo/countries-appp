import React, { FormEvent } from "react";
import style from "./articleCreateForm.module.css"
 
type ArticleCreateFormProps={
onArticleCreate:(event:FormEvent<HTMLFormElement>)=> void

}

const ArticleCreateForm: React.FC<ArticleCreateFormProps> = ({onArticleCreate}) => {
  return (
    <form className={style.form} onSubmit={onArticleCreate}>
      
      <div className={style.contact_fields}>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="enter article title"
          required
        />
      </div>

      <div className={style.contact_fields}>
        <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="writex the description"
          required
        />
      </div>

      <button className={style.contact_button} type="submit">
        Create
      </button>
    </form>
  );
};


export default ArticleCreateForm;

