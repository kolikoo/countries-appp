import CardHeader from "@/pages/home/components/card/ CardHeader/CardHeader";

import Card from "@/pages/home/components/card/card";
import CardContent from "@/pages/home/components/card/CardContent/CardContent";
import { country } from "@/myScript";
import CardFooter from "@/pages/home/components/card/CardFooter/CardFooter";
import { useParams } from "react-router-dom";

type Prop = {
  children: React.ReactNode; // This will still be there
};

const PageContainer: React.FC<Prop> = ({ children }) => {
  const { language } = useParams<{ language?: "ka" | "en" }>();
  const lang = language || "ka";

  return (
    <>
      <Card>
        <CardHeader />
        <CardContent
          name={country[lang].name}
          population={country[lang].population}
          city={country[lang].city}
        />
        <CardFooter />
      </Card>
      {children}
    </>
  );
};

export default PageContainer;
