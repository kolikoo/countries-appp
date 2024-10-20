import SectionHero from "@/pages/home/components/section/section-hero/section-hero";
import Card from "../components/card/card";
import CardHeader from "../components/card/ CardHeader/CardHeader";
import CardContent from "../components/card/CardContent/CardContent";
import { country } from "@/myScript";
import CardFooter from "../components/card/CardFooter/CardFooter";
import { lazy } from "react";
import ArticleList from "../components/homeArticle/homeArticle";
import { useParams } from "react-router-dom";
const LazySectionHero = lazy(
  () => import("@/pages/home/components/section/section-hero/section-hero")
);

const LazyCard = lazy(() => import("../components/card/card"));

const LazyCardHeader = lazy(
  () => import("../components/card/ CardHeader/CardHeader")
);
const LazyCardContent = lazy(
  () => import("../components/card/CardContent/CardContent")
);
const Lazycountry = lazy(
  () => import("../components/card/CardFooter/CardFooter")
);
const LazyCardFooter = lazy(
  () => import("../components/card/CardFooter/CardFooter")
);

const ArticleListWiev = () => {

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
export default ArticleListWiev;
