import React from "react";
import {
  Container,
  Box,
  ListBox,
  Item,
  Img,
  Text,
  Title,
  Span,
} from "./styles/allergens";

export default function Allergens({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Allergens.Box = function AllergensBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Allergens.ListBox = function AllergensListBox({ children, ...restProps }) {
  return <ListBox {...restProps}>{children}</ListBox>;
};

Allergens.Item = function AllergensItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
Allergens.Text = function AllergensText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Allergens.Img = function AllergensImg({ children, ...restProps }) {
  return <Img {...restProps}>{children}</Img>;
};

Allergens.Title = function AllergensTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Allergens.Span = function AllergensSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
