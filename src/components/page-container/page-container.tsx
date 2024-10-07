import CardHeader from "@/pages/home/components/card/ CardHeader/CardHeader";
import Layout from "../layout/layout";
import Card from "@/pages/home/components/card/card";
import CardContent from "@/pages/home/components/card/CardContent/CardContent";
import { country } from "@/myScript";
import CardFooter from "@/pages/home/components/card/CardFooter/CardFooter";

type Prop = {
  children: React.ReactNode;
};
const PageContainer: React.FC<Prop> = ({ children }) => {
  return (
    <body>
      {
        <Layout>
          <Card>
            <CardHeader />
            <CardContent
              name={country.name}
              population={country.population}
              city={country.city}
            />
            <CardFooter />
          </Card>
        </Layout>
      }
    </body>
  );
};
export default PageContainer;
