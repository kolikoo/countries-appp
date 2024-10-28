import Style from "./about-description.module.css";

const Section1 = () => {
  return (
    <section className={Style.aboutsection}>
      <div className={Style.box}>
        <h2 className={Style.title}>
          ABOUT US
          <p className={Style.text}>
            ჩვენ ვართ თანამედროვე ორგანიზაცია, რომელიც მიაწვდს მაღალი ხარისხის
            მომსახურებას და პროდუქტებს ჩვენს მომხმარებლებს. ჩვენი მიზანია,
            უზრუნველვყოთ საუკეთესო გამოცდილება და უზრუნველვყოთ მომხმარებელთა
            კმაყოფილება. ჩვენს გუნდში შედიან პროფესიონალები, რომლებიც მუშაობენ
            ინდუსტრიის ყველაზე უახლეს ტექნოლოგიებზე და გადაწყვეტებზე. ჩვენ
            მუდმივად ვგანვითარებით და ვვითარდებით, რათა შევძლოთ ბაზრის
            მოთხოვნების დაკმაყოფილება.
          </p>
        </h2>
      </div>
    </section>
  );
};
export default Section1;
