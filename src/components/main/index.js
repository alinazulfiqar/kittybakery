import React from "react";
import { Container, Box, Title } from "./styles/main";

export default function Main({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Main.Box = function MainBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
Main.Title = function MainTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
