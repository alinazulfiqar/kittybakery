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
} from "./styles/products";

export default function Products({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Products.Main = function ProductsMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Products.Box = function ProductsBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Products.BoxTitle = function ProductsBoxTitle({ children, ...restProps }) {
  return <BoxTitle {...restProps}>{children}</BoxTitle>;
};

Products.BoxItems = function ProductsBoxItems({ children, ...restProps }) {
  return <BoxItems {...restProps}>{children}</BoxItems>;
};

Products.ItemContainer = function ProductsItemContainer({
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

Products.ItemTitle = function ProductsItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Products.ItemImage = function ProductsItemImage({ children, ...restProps }) {
  return <ItemImage {...restProps}>{children}</ItemImage>;
};

Products.ItemCost = function ProductsItemCost({ children, ...restProps }) {
  return <ItemCost {...restProps}>{children}</ItemCost>;
};
Products.Title = function ProductsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
