import React from "react";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { MenuContainer } from "../containers/menu";
import { AboutContainer } from "../containers/about";
import { FooterContainer } from "../containers/footer";
import { AllergensContainer } from "../containers/allergens";

export default function About() {
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
      <AboutContainer />
      <AllergensContainer />

      <FooterContainer />
    </>
  );
}
