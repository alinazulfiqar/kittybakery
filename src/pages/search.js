import React from "react";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { MenuContainer } from "../containers/menu";
import { FooterContainer } from "../containers/footer";
import { AllergensContainer } from "../containers/allergens";
import { SearchContainer } from "../containers/search";
import { RecommendationsContainer } from "../containers/recommendations";

export default function Search() {
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
      <SearchContainer />
      <AllergensContainer />
      <RecommendationsContainer />
      <FooterContainer />
    </>
  );
}
