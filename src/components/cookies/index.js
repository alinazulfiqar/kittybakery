import React, { useState, createContext, useContext } from "react";
import {
  Container,
  ImageBox,
  TextBox,
  Title,
  Cost,
  CartContainer,
  CartBtn,
  QTY,
  Description,
  Image,
  Holder,
  Size,
} from "./styles/cookies";
import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from "../../actions/actions";
import { click } from "@testing-library/user-event/dist/click";

const InputContext = createContext();
export default function Cookies({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Cookies.Holder = function CookiesHolder({ bg, children, ...restProps }) {
  return (
    <Holder bg={bg} {...restProps}>
      {children}
    </Holder>
  );
};
Cookies.ImageBox = function CookiesImageBox({ children, ...restProps }) {
  return <ImageBox {...restProps}>{children}</ImageBox>;
};
Cookies.TextBox = function CookiesTextBox({ children, ...restProps }) {
  return <TextBox {...restProps}>{children}</TextBox>;
};
Cookies.Title = function CookiesTitle({ title, children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Cookies.Cost = function CookiesCost({ children, ...restProps }) {
  return <Cost {...restProps}>{children}</Cost>;
};

Cookies.CartContainer = function CookiesCartContainer({
  children,
  ...restProps
}) {
  const [input, setInput] = useState();

  return (
    <InputContext.Provider value={{ input, setInput }}>
      <CartContainer {...restProps}>{children}</CartContainer>;
    </InputContext.Provider>
  );
};

Cookies.CartBtn = function CookiesCartBtn({
  text,
  setText,
  itemID,
  children,
  ...restProps
}) {
  const dispatch = useDispatch();
  const { input, setInput } = useContext(InputContext);
  const [clicked, setClicked] = useState(false);

  return (
    <CartBtn
      clicked={clicked}
      onClick={() => {
        dispatch(ACTIONS.addToCart(itemID, input));
        setClicked(!clicked);
        setText("added!");
      }}
      {...restProps}
    >
      {children}
    </CartBtn>
  );
};

Cookies.QTY = function CookiesQTY({ itemID, children, ...restProps }) {
  const dispatch = useDispatch();

  const { input, setInput } = useContext(InputContext);

  const onChangeHandler = (e) => {
    setInput(+e.target.value);

    dispatch(ACTIONS.adjustQTY(itemID, e.target.value));
  };
  return (
    <QTY
      type="number"
      min="0"
      max="25"
      onChange={onChangeHandler}
      {...restProps}
    >
      {children}
    </QTY>
  );
};
Cookies.Description = function CookiesDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Cookies.Image = function CookiesImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Cookies.Size = function CookiesSize({ children, ...restProps }) {
  return <Size {...restProps}>{children}</Size>;
};
