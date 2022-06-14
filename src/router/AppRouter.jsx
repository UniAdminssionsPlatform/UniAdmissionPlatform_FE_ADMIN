import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../constants/Paths/Path";
import HomePage from "../pages/HomePage";
import TagPage from "../pages/TagPage";
import CertificatePage from "../pages/certificate/CertificatePage";
const AppRouter = () => (
  <Routes>
    <Route path={PATH.TAG} element={<TagPage />} />
    <Route path={PATH.INDEX} element={<HomePage />} />
    <Route path={PATH.CERTIFICATE} element={<CertificatePage />} />
  </Routes>
);
export default AppRouter;
