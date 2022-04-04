import React, { useState, createContext, useContext } from "react";
import {
  Container,
  Holder,
  TitleBox,
  Title,
  Text,
  Button,
  IngWrapper,
  Ing,
  Image,
  Icon,
  Popup,
  PHeader,
  SmallText,
} from "./styles/ingredients";

export default function Ingredients({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Ingredients.Holder = function IngredientsHolder({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>;
};

Ingredients.TitleBox = function IngredientsTitleBox({
  children,
  ...restProps
}) {
  return <TitleBox {...restProps}>{children}</TitleBox>;
};

Ingredients.Title = function IngredientsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Ingredients.Text = function IngredientsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Ingredients.Button = function IngredientsButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Ingredients.IngWrapper = function IngredientsIngWrapper({
  children,
  ...restProps
}) {
  return <IngWrapper {...restProps}>{children}</IngWrapper>;
};

Ingredients.Ing = function IngredientsIng({ children, ...restProps }) {
  return <Ing {...restProps}>{children}</Ing>;
};

Ingredients.Image = function IngredientsImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Ingredients.Icon = function IngredientsIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Ingredients.Popup = function IngredientsPopup({ children, ...restProps }) {
  return <Popup {...restProps}>{children}</Popup>;
};

Ingredients.PHeader = function IngredientsPHeader({ children, ...restProps }) {
  return <PHeader {...restProps}>{children}</PHeader>;
};

Ingredients.SmallText = function IngredientsSmallText({
  children,
  ...restProps
}) {
  return <SmallText {...restProps}>{children}</SmallText>;
};
