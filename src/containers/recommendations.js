import React, { useState, useEffect } from "react";
import Recommendations from "../components/recommendations";
import { useSelector } from "react-redux";

export function RecommendationsContainer({ children, ...restProps }) {
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart.cart);
  // create functionality to avoid duplicate items already in cart 5/1

  const url = window.location.pathname;
  const value = url.slice(-1);
  const CrunchArr = products.filter((item) => item.id > 3);
  const SoftArr = products.filter((item) => item.id <= 3);
  console.log(CrunchArr, SoftArr);

  return (
    <Recommendations {...restProps}>
      {children}
      <Recommendations.Title>
        We Think You Might Also Like...
      </Recommendations.Title>
      <Recommendations.Box>
        {children}
        {value > 3
          ? CrunchArr.filter((item) => item.id !== value).map((item, index) => (
              <Recommendations.Item to={`/products/${item.id}`} key={index}>
                {children}
                <Recommendations.Image src={item.imageUrl} />
                <Recommendations.Text>{item.title}</Recommendations.Text>
                <Recommendations.TextSmall>
                  From $14.99
                </Recommendations.TextSmall>
              </Recommendations.Item>
            ))
          : SoftArr.filter((item) => item.id !== value).map((item, index) => (
              <Recommendations.Item to={`/products/${item.id}`} key={index}>
                {children}
                <Recommendations.Image src={item.imageUrl} />
                <Recommendations.Text>{item.title}</Recommendations.Text>
                <Recommendations.TextSmall>
                  From $14.99
                </Recommendations.TextSmall>
              </Recommendations.Item>
            ))}
      </Recommendations.Box>
    </Recommendations>
  );
}
