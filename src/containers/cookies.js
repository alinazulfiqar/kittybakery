import React, { useState } from "react";
import data from "../utils/data.json";
import { useParams } from "react-router-dom";
import Cookies from "../components/cookies/index";
import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from "../actions/actions";

export function CookiesContainer({ children, ...restProps }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { id } = useParams();

  const [text, setText] = useState("add to cart");

  return (
    <Cookies {...restProps}>
      {children}
      {data
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Cookies.Holder bg={item.bg} key={index}>
            <Cookies.ImageBox>
              {/* <Cookies.Image src={item.imageUrl} /> */}
            </Cookies.ImageBox>

            <Cookies.TextBox>
              <Cookies.Title>{item.title}</Cookies.Title>
              <Cookies.Size>Includes 3 boxes</Cookies.Size>
              <Cookies.Cost>$14.99</Cookies.Cost>
              <Cookies.CartContainer>
                <Cookies.QTY itemID={item.id} />
                <Cookies.CartBtn text={text} setText={setText} itemID={item.id}>
                  {text}
                </Cookies.CartBtn>
              </Cookies.CartContainer>
              <Cookies.Description>{item.desc}</Cookies.Description>
            </Cookies.TextBox>
          </Cookies.Holder>
        ))}
    </Cookies>
  );
}
