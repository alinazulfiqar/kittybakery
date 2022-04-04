import React from "react";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { MenuContainer } from "../containers/menu";
import { TopContainer } from "../containers/top";
import { FooterContainer } from "../containers/footer";
import { AllergensContainer } from "../containers/allergens";
import { IngredientsContainer } from "../containers/ingredients";

export default function Home({ children }) {
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
      <TopContainer />
      <IngredientsContainer />
      <AllergensContainer />

      <FooterContainer />
      {children}
    </>
  );
}
