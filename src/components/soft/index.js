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
} from "./styles/soft";

export default function Soft({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Soft.Main = function SoftMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Soft.Box = function SoftBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Soft.BoxTitle = function SoftBoxTitle({ children, ...restProps }) {
  return <BoxTitle {...restProps}>{children}</BoxTitle>;
};

Soft.BoxItems = function SoftBoxItems({ children, ...restProps }) {
  return <BoxItems {...restProps}>{children}</BoxItems>;
};

Soft.ItemContainer = function SoftItemContainer({
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

Soft.ItemTitle = function SoftItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Soft.ItemImage = function SoftItemImage({ children, ...restProps }) {
  return <ItemImage {...restProps}>{children}</ItemImage>;
};

Soft.ItemCost = function SoftItemCost({ children, ...restProps }) {
  return <ItemCost {...restProps}>{children}</ItemCost>;
};
Soft.Title = function SoftTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
