import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Main,
  Box,
  BoxTitle,
  BoxItems,
  ItemTitle,
  ItemImage,
  ItemContainer,
  ItemCost,
  Title,
} from "./styles/crunchy";

export default function Crunchy({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Crunchy.Main = function CrunchyMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Crunchy.Box = function CrunchyBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Crunchy.BoxTitle = function CrunchyBoxTitle({ children, ...restProps }) {
  return <BoxTitle {...restProps}>{children}</BoxTitle>;
};

Crunchy.BoxItems = function CrunchyBoxItems({ children, ...restProps }) {
  return <BoxItems {...restProps}>{children}</BoxItems>;
};

Crunchy.ItemContainer = function CrunchyItemContainer({
  to,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <ItemContainer {...restProps}>{children}</ItemContainer>
    </ReactRouterLink>
  );
};

Crunchy.ItemTitle = function CrunchyItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Crunchy.ItemImage = function CrunchyItemImage({ children, ...restProps }) {
  return <ItemImage {...restProps}>{children}</ItemImage>;
};

Crunchy.ItemCost = function CrunchyItemCost({ children, ...restProps }) {
  return <ItemCost {...restProps}>{children}</ItemCost>;
};
Crunchy.Title = function CrunchyTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
