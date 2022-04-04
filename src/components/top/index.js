import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Button,
  Box,
  Image,
  ImageContainer,
} from "./styles/top";

export default function Top({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Top.Title = function TopTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Top.SubTitle = function TopSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Top.Button = function TopButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Top.Box = function TopBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Top.ImageContainer = function TopImageContainer({ children, ...restProps }) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Top.Image = function TopImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
