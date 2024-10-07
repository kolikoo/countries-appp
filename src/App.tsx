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
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />{" "}
          {/* Redirect root to /home */}
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ArticleListWiev />
              </Suspense>
            }
          />
          <Route path="/home/:id" element={<SingleListView />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
