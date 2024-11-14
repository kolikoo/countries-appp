import axios from "axios";
import fs from "fs";

const clearDatabase = () => {
  const dbPath = "./database.json";
  if (fs.existsSync(dbPath)) {
    const emptyDb = { countries: [] };
    fs.writeFileSync(dbPath, JSON.stringify(emptyDb, null, 2));
  }
};
fetch("https://api.spaceflightnewsapi.net/v4/articles?limit=1000");
axios
  .get("https://restcountries.com/v3.1/all")
  .then((res) => {
    clearDatabase();

    const countriesData = res.data.map((country) => ({
      id: country.cca2,
      title: {
        ka: country.name.common,
        en: country.name.common,
      },
      description1: {
        ka: `ინფორმაცია ${country.name.common} შესახებ`,
        en: `Information about ${country.name.common}`,
      },
      description2: {
        ka: "",
        en: "",
      },
      descriptionSpan: {
        ka: "მეტი ინფორმაციისთვის დააჭირეთ...",
        en: "For more information, click here...",
      },
      img: country.flags.svg || "",
      likeCount: 0,
      isDeleted: false,
    }));

    const dbPath = "./database.json";
    const db = { countries: countriesData };

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    console.log("Database seeded successfully.");
  })
  .catch((err) => {
    console.error("Error fetching country data:", err);
  });
