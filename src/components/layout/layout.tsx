import Header from "&/header/header";
import Footer from "&/footer/footer";
import {  PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout =()=>{
 return(
  <>
<Header/>

<Outlet/>
<Footer/>


  </>


 )
}

export default DefaultLayout;