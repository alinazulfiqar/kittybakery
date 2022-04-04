import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Title,
  Box,
  Item,
  Image,
  TextSmall,
  Text,
} from "./styles/recommendations";

export default function Recommendations({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Recommendations.Title = function RecommendationsTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

Recommendations.Box = function RecommendationsBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Recommendations.Item = function RecommendationsItem({
  to,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <Item {...restProps}>{children}</Item>
    </ReactRouterLink>
  );
};

Recommendations.Image = function RecommendationsImage({
  children,
  ...restProps
}) {
  return <Image {...restProps}>{children}</Image>;
};

Recommendations.TextSmall = function RecommendationsTextSmall({
  children,
  ...restProps
}) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Recommendations.Text = function RecommendationsText({
  children,
  ...restProps
}) {
  return <Text {...restProps}>{children}</Text>;
};
