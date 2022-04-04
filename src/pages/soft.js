import React from "react";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { MenuContainer } from "../containers/menu";
import { SoftContainer } from "../containers/soft";
import { FooterContainer } from "../containers/footer";
import { AllergensContainer } from "../containers/allergens";
import { MainContainer } from "../containers/main";

export default function Soft() {
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
      <MainContainer />
      <SoftContainer />
      <AllergensContainer />

      <FooterContainer />
    </>
  );
}
