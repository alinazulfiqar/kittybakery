import React, { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Items } from "./styles/menu";
import { MenuToggleContext } from "../menu/MenuContext";

Menu.Items = function MenuItems({ to, children, ...restProps }) {
  const { showMenu, setShowMenu } = useContext(MenuToggleContext);

  return (
    <ReactRouterLink to={to}>
      <Items onClick={() => setShowMenu(!showMenu)} {...restProps}>
        {children}
      </Items>
    </ReactRouterLink>
  );
};

export default function Menu({ children, ...restProps }) {
  const { showMenu, setShowMenu } = useContext(MenuToggleContext);

  return showMenu ? (
    <Container transform="translateX(0)" {...restProps}>
      {children}
    </Container>
  ) : (
    <Container {...restProps}>{children}</Container>
  );
}
