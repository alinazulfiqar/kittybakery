import React from "react";
import {
  Container,
  Main,
  MainTitle,
  MainSubTitle,
  Story,
  StoryBox,
  Image,
  Heading,
  Text,
  TextBox,
  Span,
  StoryTitle,
} from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Main = function AboutMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

About.MainTitle = function AboutMainTitle({ children, ...restProps }) {
  return <MainTitle {...restProps}>{children}</MainTitle>;
};
About.MainSubTitle = function AboutMainSubTitle({ children, ...restProps }) {
  return <MainSubTitle {...restProps}>{children}</MainSubTitle>;
};

About.StoryTitle = function AboutStoryTitle({ children, ...restProps }) {
  return <StoryTitle {...restProps}>{children}</StoryTitle>;
};
About.Story = function AboutStory({ children, ...restProps }) {
  return <Story {...restProps}>{children}</Story>;
};

About.StoryBox = function AboutStoryBox({ children, ...restProps }) {
  return <StoryBox {...restProps}>{children}</StoryBox>;
};

About.Image = function AboutImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

About.Heading = function AboutHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.TextBox = function AboutTextBox({ children, ...restProps }) {
  return <TextBox {...restProps}>{children}</TextBox>;
};

About.Span = function AboutSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
