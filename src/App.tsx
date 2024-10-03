import React, { Suspense, lazy } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "&/layout/layout";

// Lazy loaded components
const ArticleListWiev = lazy(() => import("./pages/home/views"));
const AboutView = lazy(() => import("./pages/about/view/about-view"));
const ContactPageView = lazy(() => import("./pages/contact/views"));

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

                  <Route path="/"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <ArticleListWiev />             
                          </Suspense>
                    } />

              <Route path="about" element={
                <Suspense fallback={<div>Loading...</div>}>
                   <AboutView />
                     </Suspense>
             } />


              <Route path="contact us" element={
                <Suspense fallback={<div>loading...</div>}>
                  <ContactPageView />
                  </Suspense>
                 } />
                  
                  
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
