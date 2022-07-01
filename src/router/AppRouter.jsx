import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../constants/Paths/Path";
import HomePage from "../pages/HomePage";
import TagPage from "../pages/TagPage";
import CertificatePage from "../pages/certificate/CertificatePage";
import HighSchoolRepresentativesPage from '../pages/accounts/HighSchoolRepresentativesPage';
const AppRouter = () => (
  <Routes>
    <Route path={PATH.TAG} element={<TagPage />} />
    <Route path={PATH.INDEX} element={<HomePage />} />
    <Route path={PATH.CERTIFICATE} element={<CertificatePage />} />
    <Route path={PATH.ACCOUNT_HIGHSCHOOL_REPRESENTATIVES} element={<HighSchoolRepresentativesPage />} />
  </Routes>
);
export default AppRouter;
