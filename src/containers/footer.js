import React from "react";
import Footer from "../components/footer/index";

export function FooterContainer({ children, ...restProps }) {
  return (
    <Footer>
      {children}
      <Footer.Left>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
          <Footer.Link href="#">Blog</Footer.Link>
          <Footer.Link href="#">Loyalty Program</Footer.Link>
          <Footer.Link href="#">Sitemap</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Press</Footer.Link>
          <Footer.Link href="#">Terms</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Shipping/Returns</Footer.Link>
          <Footer.Link href="#">Wholesale</Footer.Link>
        </Footer.Column>
      </Footer.Left>
      <Footer.Right>
        <Footer.SocialWrap>
          <Footer.Text>Stay in the Know</Footer.Text>
          <Footer.Socials />
        </Footer.SocialWrap>

        <Footer.InputWrap>
          <Footer.Input
            placeholder="Email Address"
            type="email"
            label="email"
          ></Footer.Input>
          <Footer.Subscribe>Subscribe</Footer.Subscribe>
        </Footer.InputWrap>
      </Footer.Right>
    </Footer>
  );
}
