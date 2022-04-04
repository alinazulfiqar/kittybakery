import React from "react";
import {
  Container,
  Title,
  TitleSection,
  GridContainer,
  GridBox,
  Column,
  ProductColumn,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductQuantity,
  CheckOut,
  CheckOutBox,
  CheckOutTotal,
  Total,
  Text,
  Trash,
} from "./styles/cart";
import { useSelector, useDispatch } from "react-redux";

export default function Cart({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Cart.TitleSection = function CartTitleSection({ children, ...restProps }) {
  return <TitleSection {...restProps}>{children}</TitleSection>;
};
Cart.Title = function CartTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Cart.GridContainer = function CartGridContainer({ children, ...restProps }) {
  return <GridContainer {...restProps}>{children}</GridContainer>;
};

Cart.GridBox = function CartGridBox({ children, ...restProps }) {
  return <GridBox {...restProps}>{children}</GridBox>;
};

Cart.Column = function CartColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Cart.ProductColumn = function CartProductColumn({ children, ...restProps }) {
  return <ProductColumn {...restProps}>{children}</ProductColumn>;
};

Cart.ProductImage = function CartProductImage({ children, ...restProps }) {
  return <ProductImage {...restProps}>{children}</ProductImage>;
};

Cart.ProductTitle = function CartProductTitle({ children, ...restProps }) {
  return <ProductTitle {...restProps}>{children}</ProductTitle>;
};

Cart.ProductPrice = function CartProductPrice({ children, ...restProps }) {
  return <ProductPrice {...restProps}>{children}</ProductPrice>;
};

Cart.ProductQuantity = function CartProductQuantity({
  children,
  ...restProps
}) {
  return (
    <ProductQuantity type="number" min="0" max="25" {...restProps}>
      {children}
    </ProductQuantity>
  );
};

Cart.Total = function CartTotal({ children, ...restProps }) {
  return <Total {...restProps}>{children}</Total>;
};

Cart.CheckOut = function CartCheckOut({ children, ...restProps }) {
  return <CheckOut {...restProps}>{children}</CheckOut>;
};

Cart.CheckOutBox = function CartCheckOutBox({ children, ...restProps }) {
  return <CheckOutBox {...restProps}>{children}</CheckOutBox>;
};

Cart.CheckOutTotal = function CartCheckOutTotal({ children, ...restProps }) {
  return <CheckOutTotal {...restProps}>{children}</CheckOutTotal>;
};

Cart.Text = function CartText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Cart.Trash = function CartTrash({ children, ...restProps }) {
  return <Trash {...restProps}>{children}</Trash>;
};
