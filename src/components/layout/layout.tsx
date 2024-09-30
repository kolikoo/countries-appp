import Header from "../header/header";
import SectionHero from "../section/section-hero/section-hero";
import Footer from "../footer/footer";
import {  PropsWithChildren } from "react";

const Layout : React.FC<PropsWithChildren> =({children})=>{
 return(
  <>
<Header/>
<SectionHero/>
{children}
<Footer/>


  </>


 )
}

export default Layout;