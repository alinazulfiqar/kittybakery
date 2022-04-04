import React from "react";
import Menu from "../components/menu";
import { BrowserRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function MenuContainer({ children, ...restProps }) {
  return (
    <Menu>
      <Menu.Items to={ROUTES.SHOP}>Products</Menu.Items>
      <Menu.Items to={ROUTES.HOME}>Our Story</Menu.Items>
      <Menu.Items to={ROUTES.HOME}>Ingredients</Menu.Items>
      <Menu.Items to={ROUTES.HOME}>Find us</Menu.Items>
    </Menu>
  );
}
