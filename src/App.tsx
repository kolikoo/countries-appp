import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headerLogo from '../../images/logo_image.png';

import { country } from "./myScript";
import Header from './components/header/header'
import SectionHero from './components/section/section-hero/section-hero'
import Card from './components/card/card';
import Footer from './components/footer/footer';




const App: React.FC = () => {


  return (
    <>
      <body>

        <Header />

        {/* sectionsectionsectionsectionsectionsectionsectionsectionsectionsection */}

        <SectionHero />

        {/* sectionsectionsectionsectionsectionsectionsectionsectionsectionsection */}

        {/* artickle artickle artickle artickle artickle artickle artickle artickle */}

        <Card />

        {/* artickle artickle artickle artickle artickle artickle artickle artickle */}

        <Footer />
        
      </body>
    </>
  );
}

export default App
