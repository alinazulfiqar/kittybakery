import React from "react";
import {
  Container,
  Left,
  Right,
  Column,
  Socials,
  FooterIcon,
  Text,
  Input,
  Subscribe,
  Link,
  SocialWrap,
  InputWrap,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Left = function FooterLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
Footer.Right = function FooterRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

Footer.Socials = function FooterSocials({ children, ...restProps }) {
  return (
    <Socials>
      <a href="www.facebook.com">
        <FooterIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wHeQA8Y4CHCtYeg2yLGb5EYVEMK95yPrTA&usqp=CAU" />
      </a>

      <a href="www.instagram.com">
        <FooterIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9zQlqJPW_a75AtoYXAiiERDKwR97AcFpGQ&usqp=CAU" />
      </a>

      <a href="www.pinterest.com">
        <FooterIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvFYsKOm9Lg5f68NLMnO4nUZWqqUI0yJ52Q&usqp=CAU" />
      </a>
    </Socials>
  );
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Input = function FooterInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Footer.Subscribe = function FooterSubscribe({ children, ...restProps }) {
  return <Subscribe {...restProps}>{children}</Subscribe>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.SocialWrap = function FooterSocialWrap({ children, ...restProps }) {
  return <SocialWrap {...restProps}>{children}</SocialWrap>;
};

Footer.InputWrap = function FooterInputWrap({ children, ...restProps }) {
  return <InputWrap {...restProps}>{children}</InputWrap>;
};
