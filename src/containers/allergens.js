import React from "react";
import Allergens from "../components/allergens/index";
import chemicals from "../images/icons/chemicals.svg";
import peanuts from "../images/icons/peanuts.svg";
import eggs from "../images/icons/eggs.svg";

export function AllergensContainer({ children, ...restProps }) {
  return (
    <Allergens>
      <Allergens.Box>
        <Allergens.Title>
          Absolutely <Allergens.Span>NO:</Allergens.Span>
        </Allergens.Title>
        <Allergens.ListBox>
          <Allergens.Item>
            <Allergens.Img src={peanuts} />
            <Allergens.Text>peanuts</Allergens.Text>
          </Allergens.Item>

          <Allergens.Item>
            <Allergens.Img src={chemicals} />
            <Allergens.Text>preservatives</Allergens.Text>
          </Allergens.Item>

          <Allergens.Item>
            <Allergens.Img src={eggs} />
            <Allergens.Text>eggs</Allergens.Text>
          </Allergens.Item>
        </Allergens.ListBox>
      </Allergens.Box>
    </Allergens>
  );
}
