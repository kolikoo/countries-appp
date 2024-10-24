import React, { FormEvent, useState } from "react";
import style from "./articleCreateForm.module.css";

type ArticleCreateFormProps = {
  onArticleCreate: (event: FormEvent<HTMLFormElement>, img: string) => void;
  title: string;
  description: string;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ArticleCreateForm: React.FC<ArticleCreateFormProps> = ({
  onArticleCreate,
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}) => {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const validateForm = () => {
    let isValid = true;

    if (title.length > 7) {
      setTitleError("მაქსიმუმ 7 სიმბოლო უნდა იყოს");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (description.length < 3) {
      setDescriptionError("მინიმუმ სამი სიმბოლო უნდა იყოს");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    return isValid;
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;

      
      if (fileType === "image/jpeg" || fileType === "image/png") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); 
        };
        reader.readAsDataURL(file);
      } else {
        alert("გთხოვთ ატვირთოთ მხოლოდ JPG ან PNG ფორმატის სურათები.");
        setImage(null); 
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      onArticleCreate(event, image as string); 
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.contact_fields}>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="enter article title"
          value={title}
          onChange={onTitleChange}
          required
        />
        {titleError && <span className={style.error}>{titleError}</span>}
      </div>

      <div className={style.contact_fields}>
        <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="write the description"
          value={description}
          onChange={onDescriptionChange}
          required
        />
        {descriptionError && (
          <span className={style.error}>{descriptionError}</span>
        )}

        <label htmlFor="myfile">Select a file:</label>
        <input
          type="file"
          id="myfile"
          name="myfile"
          onChange={handleImageChange}
        />
      </div>

      <button className={style.contact_button} type="submit">
        Create
      </button>
    </form>
  );
};

export default ArticleCreateForm;
