import React from "react";
import Soft from "../components/soft/index";
import data from "../utils/data";
import * as ROUTES from "../constants/routes";

export function SoftContainer({ children }) {
  return (
    <Soft>
      {children}

      <Soft.Box>
        <Soft.BoxTitle>Soft-Baked Cookies</Soft.BoxTitle>
        <Soft.BoxItems>
          {data
            .filter((item) => item.type === "soft")
            .map((item) => (
              <Soft.ItemContainer key={item.id} to={`/products/${item.id}`}>
                <Soft.ItemImage src={item.imageUrl} />
                <Soft.ItemTitle>{item.title}</Soft.ItemTitle>
                <Soft.ItemCost>From $14.99</Soft.ItemCost>
              </Soft.ItemContainer>
            ))}
        </Soft.BoxItems>
      </Soft.Box>
    </Soft>
  );
}
