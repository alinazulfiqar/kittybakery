import React, { useState } from "react";
import Ingredients from "../components/ingredients/index";
import plus from "../images/icons/plus.svg";
import milk from "../images/png/milk.png";
import butter from "../images/png/butter.png";
import chocolate from "../images/png/chocolate.png";
import coconut from "../images/png/coconut.png";

export function IngredientsContainer({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <Ingredients>
      <Ingredients.Holder>
        <Ingredients.TitleBox>
          <Ingredients.Title>Because Ingredients Matter</Ingredients.Title>
          <Ingredients.Text>
            All of our products are baked with wholesome, allergy-friendly
            ingredients like buckwheat, cassava, oats, and cinnamon so those
            with allergies and without can share with confidence.
          </Ingredients.Text>
          <Ingredients.Button>
            Learn more about our ingredients
          </Ingredients.Button>
        </Ingredients.TitleBox>
        <Ingredients.IngWrapper>
          <Ingredients.Ing>
            <Ingredients.Image
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-apples2_240x.png?v=1600282797"
              alt="apples"
            />
            <Ingredients.Icon
              onClick={() => setOpen(!open)}
              open={open}
              src={plus}
            />
            <Ingredients.Popup open={open}>
              <Ingredients.PHeader>Apples</Ingredients.PHeader>
              <Ingredients.SmallText>
                This sweet fruit is full of vitamin A, vitamin C, vitamin E,
                vitamin K and folate.
              </Ingredients.SmallText>
            </Ingredients.Popup>
          </Ingredients.Ing>

          <Ingredients.Ing>
            <Ingredients.Image src={milk} alt="milk" />
            <Ingredients.Icon
              onClick={() => setOpen1(!open1)}
              open={open1}
              src={plus}
            />
            <Ingredients.Popup open={open1}>
              <Ingredients.PHeader>Milk</Ingredients.PHeader>
              <Ingredients.SmallText>
                Milk is super duper healthy and nutritious.
              </Ingredients.SmallText>
            </Ingredients.Popup>
          </Ingredients.Ing>

          <Ingredients.Ing>
            <Ingredients.Image src={butter} alt="butter" />
            <Ingredients.Icon
              onClick={() => setOpen2(!open2)}
              open={open2}
              src={plus}
            />
            <Ingredients.Popup open={open2}>
              <Ingredients.PHeader>Butter</Ingredients.PHeader>
              <Ingredients.SmallText>
                Butter is super duper healthy and nutritious.
              </Ingredients.SmallText>
            </Ingredients.Popup>
          </Ingredients.Ing>

          <Ingredients.Ing>
            <Ingredients.Image src={chocolate} alt="chocolate" />
            <Ingredients.Icon
              onClick={() => setOpen3(!open3)}
              open={open3}
              src={plus}
            />
            <Ingredients.Popup open={open3}>
              <Ingredients.PHeader>Chocolate</Ingredients.PHeader>
              <Ingredients.SmallText>
                Chocolate is super duper healthy and nutritious.
              </Ingredients.SmallText>
            </Ingredients.Popup>
          </Ingredients.Ing>

          <Ingredients.Ing>
            <Ingredients.Image src={coconut} alt="coconut" />
            <Ingredients.Icon
              onClick={() => setOpen4(!open4)}
              open={open4}
              src={plus}
            />
            <Ingredients.Popup open={open4}>
              <Ingredients.PHeader>Coconut</Ingredients.PHeader>
              <Ingredients.SmallText>
                Coconut is super duper healthy and nutritious.
              </Ingredients.SmallText>
            </Ingredients.Popup>
          </Ingredients.Ing>
        </Ingredients.IngWrapper>
      </Ingredients.Holder>
    </Ingredients>
  );
}
