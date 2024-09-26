import { Children, useState } from 'react'


import './App.css'
import headerLogo from '../../images/logo_image.png';

import { country } from "./myScript";
import Header from './components/header/header'
import SectionHero from './components/section/section-hero/section-hero'
import Card from './components/card/card';
import Footer from './components/footer/footer';
import CardHeader from './components/card/ CardHeader/CardHeader';
import CardContent from './components/card/CardContent/CardContent';
import CardFooter from './components/card/CardFooter/CardFooter';




const App: React.FC = () => {


  return (
    <>
      <body>

        <Header />

        {/* sectionsectionsectionsectionsectionsectionsectionsectionsectionsection */}

        <SectionHero />

        {/* sectionsectionsectionsectionsectionsectionsectionsectionsectionsection */}

        {/* artickle artickle artickle artickle artickle artickle artickle artickle */}
        <Card>
          <CardHeader/>
          <CardContent/>
          <CardFooter/>

        </Card >

        {/* artickle artickle artickle artickle artickle artickle artickle artickle */}

        <Footer />
        
      </body>
    </>
  );
}

export default App
