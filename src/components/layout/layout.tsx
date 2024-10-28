import Header from "&/header/header";
import Footer from "&/footer/footer";

import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
