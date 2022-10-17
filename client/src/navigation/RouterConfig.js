import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home/home";
import Modals from '../components/Modals/modals'

const AppRoutes = () => {

  return (
    <AnimatePresence>
      <BrowserRouter>
        <Modals />
        <Routes>

          <Route path="/" element={<Home />} />

          {/* <Route
            path="/design/:id"
            element={
              <RequireAuth isLoggedIn={isLoggedIn}>
                <Design editing={true} />
              </RequireAuth>
            }
          /> */}

        </Routes>
      </BrowserRouter>
    </AnimatePresence>

  );
};

export default AppRoutes;
