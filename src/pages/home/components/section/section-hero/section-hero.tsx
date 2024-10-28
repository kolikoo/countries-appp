import styles from "./section-hero.module.css";
import sectionContent from "./section";
import { useParams } from "react-router-dom";

const SectionHero: React.FC = () => {
  const { language } = useParams<{ language?: "ka" | "en" }>();

  const lang = language || "ka";
  console.log(language);
  return (
    <section className={styles.sectionHero}>
      <div className={styles.section1_hero}>
        <div className={styles.hero_Text}>
          <h3 className={styles.heroH3}>{sectionContent[lang].title}</h3>

          <p className={styles.heroP}>{sectionContent[lang].description}</p>

          <button style={{ backgroundColor: "gold", border: "0px" }}>
            {sectionContent[lang].buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
