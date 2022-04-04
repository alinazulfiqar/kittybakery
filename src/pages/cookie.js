import React from "react";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { MenuContainer } from "../containers/menu";
import { SoftContainer } from "../containers/soft";
import { FooterContainer } from "../containers/footer";
import { AllergensContainer } from "../containers/allergens";
import { CookiesContainer } from "../containers/cookies";
import { RecommendationsContainer } from "../containers/recommendations";
import ScrollToTop from "../components/scrollToTop/index";
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Cookie() {
  // let location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   console.log("change detected");
  // }, [location.pathname]);
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
      <CookiesContainer />
      <AllergensContainer />
      <RecommendationsContainer />
      <FooterContainer />
    </>
  );
}
