import Header from "&/header/header";


import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
     
    </>
  );
};

export default DefaultLayout;
