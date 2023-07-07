import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main"
import Header from "../components/common/Header";
import BgContainer from "../components/common/BgContainer";


const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BgContainer />}>
              <Route path="/" element={<><Header /><Main /></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
