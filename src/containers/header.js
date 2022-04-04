import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/header/index";
import { useSelector } from "react-redux";
import kitty from "../images/icons/kitty.jpg";
import kitty2 from "../images/icons/kitty2.jpg";

import * as ROUTES from "../constants/routes";
export function HeaderContainer({ children }) {
  const cart = useSelector((state) => state.cart.cart);

  const [searchTerm, setSearchTerm] = useState("");

  const [count, setCount] = useState(0);
  useEffect(() => {
    let counter = 0;
    if (cart.length === 0) {
      setCount(0);
    } else {
      cart.forEach((item) => {
        counter = counter + item.qty;
        setCount(counter);
        console.log(cart.length);
      });
    }
  }, [cart, count, setCount]);

  return (
    <Header>
      <Header.Banner>
        <Header.Text>Enjoy free shipping on orders over $24.99</Header.Text>
      </Header.Banner>

      <Header.NavContainer>
        <Header.Nav>
          <Header.ItemLinks to={ROUTES.SHOP} num={1}>
            Products
          </Header.ItemLinks>
          <Header.ItemLinks to={ROUTES.HOME} num={2}>
            Our Story
          </Header.ItemLinks>
          <Header.ItemLinks to={ROUTES.HOME} num={3}>
            Ingredients
          </Header.ItemLinks>
          <Header.Logo to={ROUTES.HOME} src={kitty2}></Header.Logo>
          <Header.ItemLinks to={ROUTES.HOME} num={4}>
            Blog
          </Header.ItemLinks>
          <Header.ItemLinks to={ROUTES.HOME} num={5}>
            Find us
          </Header.ItemLinks>

          <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
            {children}
          </Header.Search>
          <Header.UserDiv count={count}>
            <Header.UserCart to={ROUTES.CART} />
          </Header.UserDiv>
          <Header.HamIcon></Header.HamIcon>
        </Header.Nav>

        <Header.Products toSoft={ROUTES.SOFT} toCrunchy={ROUTES.CRUNCHY}>
          {children}
        </Header.Products>
        <Header.OurStory to={ROUTES.ABOUT}>{children}</Header.OurStory>
      </Header.NavContainer>

      {children}
    </Header>
  );
}
