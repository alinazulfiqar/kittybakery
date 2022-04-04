import React, { useState, createContext, useContext, useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../../actions/actions";
import {
  Container,
  Title,
  Box,
  Input,
  Button,
  ReturnBox,
  Item,
  Image,
  Text,
  TextSmall,
  TextTitle,
} from "./style/search";

export const SearchContext = createContext();

export default function Search({ children, ...restProps }) {
  const search = useSelector((state) => state.search.search);
  // const [value, setValue] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Container {...restProps}>{children}</Container>
    </SearchContext.Provider>
  );
}

Search.Title = function SearchTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Search.SearchInput = function SearchInput({ children, ...restProps }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const search = useSelector((state) => state.search.search);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(search);
    console.log(
      `search value: ${value} // search: ${search} // searchTerm: ${searchTerm}`
    );
  }, [search]);

  return (
    <Input
      type="search"
      onChange={({ target }) => {
        setSearchTerm(target.value);
      }}
      defaultValue={value}
      {...restProps}
    >
      {children}
    </Input>
  );
};
Search.SearchBox = function SearchBox({ children, ...restProps }) {
  const dispatch = useDispatch();

  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  return (
    <Box
      {...restProps}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(ACTIONS.updateSearch(searchTerm));
      }}
    >
      {children}
    </Box>
  );
};
Search.SearchButton = function SearchButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Search.ReturnBox = function SearchReturnBox({ children, ...restProps }) {
  return <ReturnBox {...restProps}>{children}</ReturnBox>;
};

Search.Item = function SearchItem({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Item {...restProps}>{children}</Item>;
    </ReactRouterLink>
  );
};

Search.Image = function SearchImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Search.Text = function SearchText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Search.TextSmall = function SearchTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Search.TextTitle = function SearchTextTitle({ children, ...restProps }) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};
