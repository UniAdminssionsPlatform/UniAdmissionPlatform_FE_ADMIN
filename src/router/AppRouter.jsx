import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../constants/Paths/Path";
import HomePage from "../pages/HomePage";
import MajorGroupPage from "../pages/MajorGroupPage";
import MajorPage from "../pages/MajorPage";
import TagPage from "../pages/TagPage";
const AppRouter = () => (
  <Routes>
    <Route path={PATH.TAG} element={<TagPage />} />
    <Route path={PATH.INDEX} element={<HomePage />} />
    <Route path={PATH.MAJOR_GROUP} element={<MajorGroupPage />} />
    <Route path={PATH.MAJOR} element={<MajorPage />} />
  </Routes>
);
export default AppRouter;
