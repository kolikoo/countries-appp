import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DefaultLayout from "&/layout/layout";

// Lazy loaded components
const ArticleListWiev = lazy(() => import("./pages/home/views"));
const AboutView = lazy(() => import("./pages/about/view/about-view"));
const ContactPageView = lazy(() => import("./pages/contact/views"));
const SingleListView = lazy(
  () => import("./pages/home/views/singleListview/singleList")
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:language" element={<DefaultLayout />}>
          <Route
            path="home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ArticleListWiev />
              </Suspense>
            }
          />

          <Route
            path="home/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleListView />
              </Suspense>
            }
          />

          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutView />
              </Suspense>
            }
          />
          <Route
            path="contact us"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContactPageView />
              </Suspense>
            }
          />
        </Route>
        <Route path="/" element={<Navigate to="/ka/home" />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
