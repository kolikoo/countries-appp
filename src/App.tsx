import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headerLogo from '../src/images/logo_image.png'
import { country } from "./myScript";


function App() {


  return (
    <>
      <body>
        {/* header header headerheaderheaderheaderheaderheaderheaderheader */}
        <header>
          <img className="headerlogo" src={headerLogo} alt="headerlogo" />

          <nav className="nav">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </header>
        {/* header header headerheaderheaderheaderheaderheaderheaderheader */}
        {/* sectionsectionsectionsectionsectionsectionsectionsectionsectionsection */}
        <section className="sectionHero">
          <div className="section1_hero">
            <div className="hero_Text">
              <h3 className="heroH3">Information About Our Platform</h3>

              <p className="heroP">
                ჩვენი პლატფორმა შეიქმნა 2015 წელს და დაარსებიდან ჩვენი მთავარი
                მიზანია თქვენი კომფორტი
              </p>

              <button>Follow Us</button>
            </div>
          </div>
        </section>
        {/* sectionsectionsectionsectionsectionsectionsectionsectionsectionsection */}
        {/* artickle artickle artickle artickle artickle artickle artickle artickle */}

        <article className="article">
          <div className="article_Card">

            <div className="text_Article">


            <h3 className="article_H3"><span>ქვეყნის სახელი </span>{country.name}</h3>

            <h3 className="article_H3"> <span>მოსახლეობის რაოდენობა  </span> {country.population}</h3>

            <h3 className="article_H3"><span>დედაქალაქი </span>{country.city}</h3>

            </div>
          </div>
        </article>

        {/* artickle artickle artickle artickle artickle artickle artickle artickle */}




        <footer></footer>
      </body>
    </>
  );
}

export default App
