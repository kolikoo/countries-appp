


import "@/App.css";


 
import { country }from "./myScript";

import Card from '&/card/card';

import CardHeader from '&/components/card/ CardHeader/CardHeader';
import CardContent from './components/card/CardContent/CardContent';
import CardFooter from './components/card/CardFooter/CardFooter';
import Layout from './components/layout/layout';




const App: React.FC = () => {


  return (
    <>
      <body>
        <Layout>

          <Card>
            <CardHeader />
            <CardContent name = {country.name} population={country.population} city={country.city}/>
            <CardFooter />
          </Card>

        </Layout>

     

      </body>
    </>
  );
}

export default App
