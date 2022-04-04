import React from "react";
import Crunchy from "../components/crunchy/index";
import data from "../utils/data";
import * as ROUTES from "../constants/routes";

export function CrunchyContainer({ children }) {
  return (
    <Crunchy>
      {children}

      <Crunchy.Box>
        <Crunchy.BoxTitle>Crunchy Cookies</Crunchy.BoxTitle>
        <Crunchy.BoxItems>
          {data
            .filter((item) => item.type === "crunchy")
            .map((item) => (
              <Crunchy.ItemContainer key={item.id} to={`/products/${item.id}`}>
                <Crunchy.ItemImage src={item.imageUrl} />
                <Crunchy.ItemTitle>{item.title}</Crunchy.ItemTitle>
                <Crunchy.ItemCost>From $14.99</Crunchy.ItemCost>
              </Crunchy.ItemContainer>
            ))}
        </Crunchy.BoxItems>
      </Crunchy.Box>
    </Crunchy>
  );
}
