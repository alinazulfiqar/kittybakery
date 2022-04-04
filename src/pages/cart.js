import React from "react";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { MenuContainer } from "../containers/menu";
import { FooterContainer } from "../containers/footer";
import { AllergensContainer } from "../containers/allergens";
import { CartContainer } from "../containers/cart";
import { RecommendationsContainer } from "../containers/recommendations";

export default function Cart() {
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
      <CartContainer />
      <AllergensContainer />
      <RecommendationsContainer />
      <FooterContainer />
    </>
  );
}
