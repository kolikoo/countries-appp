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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<ArticleListWiev />} />
              <Route path="about" element={<AboutView />} />
              <Route path="contact us" element={<ContactPageView />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
