import SectionHero from "@/pages/home/components/section/section-hero/section-hero";
import Card from "../components/card/card";
import CardHeader from "../components/card/ CardHeader/CardHeader";
import CardContent from "../components/card/CardContent/CardContent";
import { country } from "@/myScript";
import CardFooter from "../components/card/CardFooter/CardFooter";
import ArticleList from "../components/homeArticle/homeArticle";
import { useParams } from "react-router-dom";

const ArticleListView = () => {
  const { language } = useParams<{ language?: "ka" | "en" }>();
  const lang = language || "ka";

  return (
    <>
      <SectionHero />
      <Card>
        <CardHeader />
        <CardContent
          name={country[lang].name}
          population={country[lang].population}
          city={country[lang].city}
        />
        <CardFooter />
      </Card>
      <ArticleList />
    </>
  );
};

export default ArticleListView;
