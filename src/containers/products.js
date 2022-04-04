import React from "react";
import Products from "../components/products/index";
import data from "../utils/data";
import * as ROUTES from "../constants/routes";

export function ProductsContainer({ children }) {
  return (
    <Products>
      {children}
      <Products.Main>
        <Products.Title>
          <em>the </em>Partake Shop
        </Products.Title>
      </Products.Main>
      <Products.Box>
        <Products.BoxTitle>Products-Baked Cookies</Products.BoxTitle>
        <Products.BoxItems>
          {data.map((item) => (
            <Products.ItemContainer key={item.id} to={`/products/${item.id}`}>
              <Products.ItemImage src={item.imageUrl} />
              <Products.ItemTitle>{item.title}</Products.ItemTitle>
              <Products.ItemCost>From $14.99</Products.ItemCost>
            </Products.ItemContainer>
          ))}
        </Products.BoxItems>
      </Products.Box>
    </Products>
  );
}
