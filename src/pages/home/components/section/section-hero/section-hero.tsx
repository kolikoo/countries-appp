import styles from "./section-hero.module.css"


const SectionHero: React.FC = () =>{
return (
  <section className={styles.sectionHero}>
    <div className={styles.section1_hero}>
      <div className={styles.hero_Text}>
        <h3 className={styles.heroH3}>Information About Our Platform</h3>

        <p className={styles.heroP}>
          ჩვენი პლატფორმა შეიქმნა 2015 წელს და დაარსებიდან ჩვენი მთავარი მიზანია
          თქვენი კომფორტი
        </p>

        <button>Follow Us</button>
      </div>
    </div>
  </section>
);

}

export default SectionHero;