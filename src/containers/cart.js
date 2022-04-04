import React, { useState, useEffect } from "react";
import data from "../utils/data.json";
import { useParams } from "react-router-dom";
import Cart from "../components/cart/index";
import { useSelector, useDispatch } from "react-redux";
import { GridContainer } from "../components/cart/styles/cart";
import * as ACTIONS from "../actions/actions";
import trash from "../images/icons/trash.svg";
import trash2 from "../images/icons/trash2.svg";

export function CartContainer({ children, ...restProps }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.cart.products);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.qty * +item.price;
    });
    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  return (
    <Cart {...restProps}>
      {children}
      <Cart.TitleSection>
        <Cart.Title>Cart</Cart.Title>
      </Cart.TitleSection>

      <Cart.GridContainer>
        <Cart.GridBox>
          <Cart.Column>Product</Cart.Column>
          <Cart.Column>Price</Cart.Column>
          <Cart.Column>Quantity</Cart.Column>
          <Cart.Column>Total</Cart.Column>
        </Cart.GridBox>

        {cart.map((item, index) => (
          <Cart.GridBox key={index}>
            <Cart.ProductColumn>
              <Cart.Trash
                onClick={() => dispatch(ACTIONS.removeFromCart(item.id))}
                src={trash2}
              />
              <Cart.ProductImage src={item.bg} />
              <Cart.ProductTitle>{item.title}</Cart.ProductTitle>
            </Cart.ProductColumn>
            <Cart.ProductPrice>{`$${item.price}`}</Cart.ProductPrice>
            <Cart.ProductQuantity
              onChange={(e) =>
                dispatch(ACTIONS.adjustQTY(item.id, e.target.value))
              }
              value={item.qty}
            ></Cart.ProductQuantity>
            <Cart.Total>{`$${+item.price * item.qty}`}</Cart.Total>
          </Cart.GridBox>
        ))}
        <Cart.GridBox>
          <Cart.Text>Cart Total</Cart.Text>
          <Cart.CheckOutTotal>{`$${totalPrice}`}</Cart.CheckOutTotal>
        </Cart.GridBox>
      </Cart.GridContainer>
      <Cart.CheckOutBox>
        <Cart.CheckOut>Check Out</Cart.CheckOut>
      </Cart.CheckOutBox>
    </Cart>
  );
}
