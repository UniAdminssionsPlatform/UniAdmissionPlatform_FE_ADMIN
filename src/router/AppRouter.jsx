import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../constants/Paths/Path";
import HomePage from "../pages/HomePage";
import TagPage from "../pages/TagPage";
import CertificatePage from "../pages/certificate/CertificatePage";
import HighSchoolRepresentativesPage from '../pages/accounts/HighSchoolRepresentativesPage';
import UniversityRepresentativesPage from '../pages/accounts/UniversityRepresentativesPage';
import CreateHighSchoolProfilePage from '../pages/highSchool/CreateHighSchoolProfilePage';
const AppRouter = () => (
  <Routes>
    <Route path={PATH.TAG} element={<TagPage />} />
    <Route path={PATH.INDEX} element={<HomePage />} />
    <Route path={PATH.CERTIFICATE} element={<CertificatePage />} />
    <Route path={PATH.ACCOUNT_HIGHSCHOOL_REPRESENTATIVES} element={<HighSchoolRepresentativesPage />} />
    <Route path={PATH.ACCOUNT_UNIVERSITY_REPRESENTATIVES} element={<UniversityRepresentativesPage />} />
    <Route path={PATH.CREATE_HIGH_SCHOOL_PROFILE} element={<CreateHighSchoolProfilePage />} />
  </Routes>
);
export default AppRouter;
