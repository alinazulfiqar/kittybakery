import React, { useState, useEffect, useContext, createContext } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Logo,
  Search,
  UserDiv,
  UserCart,
  NavContainer,
  SearchIcon,
  SearchInput,
  ItemLinks,
  Nav,
  Text,
  Banner,
  HamIcon,
  HamIcon1,
  HamIcon2,
  HamIcon3,
  Products,
  ProductsBox,
  OurStory,
  Blog,
  ProductsImage,
  ProductsTitle,
  OurStoryImage,
  OurStoryTitle,
  BlogImage,
  BlogTitle,
} from "./styles/header";
import { MenuToggleContext } from "../menu/MenuContext";
import * as ACTIONS from "../../actions/actions";

export const OpenContext = createContext();
export default function Header({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <OpenContext.Provider value={{ open, setOpen, open2, setOpen2 }}>
      <Container {...restProps}>{children}</Container>
    </OpenContext.Provider>
  );
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps}>{children}</Logo>
    </ReactRouterLink>
  );
};

Header.Banner = function HeaderBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(search);
    console.log(
      `header value: ${value} // search: ${search} // searchTerm: ${searchTerm}`
    );
  }, [search]);

  return (
    <Search
      {...restProps}
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/search");
        dispatch(ACTIONS.updateSearch(searchTerm));
      }}
    >
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fresults-icon-png-17.png&f=1&nofb=1"
      />
      <SearchInput
        type="search"
        defaultValue={value}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search store"
        active={searchActive}
      />
    </Search>
  );
};

Header.UserCart = function HeaderUserCart({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <UserCart src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolnJzZ2RLLZvtR4LcOAMGir_ckL0xxlKUYQ&usqp=CAU">
        {children}
      </UserCart>
    </ReactRouterLink>
  );
};

Header.ItemLinks = function HeaderItemLinks({
  num,
  to,
  children,
  ...restProps
}) {
  const { open, setOpen, open2, setOpen2 } = useContext(OpenContext);

  if (num === 1) {
    return (
      <ReactRouterLink to={to}>
        <ItemLinks
          onMouseOver={() => {
            setOpen(!open);
            setOpen2(false);
          }}
          {...restProps}
        >
          {children}
        </ItemLinks>
      </ReactRouterLink>
    );
  }
  if (num === 2) {
    return (
      <ReactRouterLink to={to}>
        <ItemLinks
          onMouseOver={() => {
            setOpen2(!open2);
            setOpen(false);
          }}
          {...restProps}
        >
          {children}
        </ItemLinks>
      </ReactRouterLink>
    );
  } else
    return (
      <ReactRouterLink to={to}>
        <ItemLinks {...restProps}>{children}</ItemLinks>
      </ReactRouterLink>
    );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.NavContainer = function HeaderNavContainer({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>;
};

Header.HamIcon = function HeaderHamIcon({ children, ...restProps }) {
  const { showMenu, setShowMenu } = useContext(MenuToggleContext);
  return (
    <HamIcon onClick={() => setShowMenu(!showMenu)} {...restProps}>
      {children}
      <HamIcon1 showMenu={showMenu}></HamIcon1>
      <HamIcon2 showMenu={showMenu}></HamIcon2>
      <HamIcon3 showMenu={showMenu}></HamIcon3>
    </HamIcon>
  );
};

Header.Products = function HeaderProducts({
  toSoft,
  toCrunchy,
  children,
  ...restProps
}) {
  const { open, setOpen } = useContext(OpenContext);

  return open ? (
    <Products {...restProps}>
      {children}
      <ReactRouterLink to={toSoft}>
        <ProductsBox>
          <ProductsImage src="https://sallysbakingaddiction.com/wp-content/uploads/2013/02/Soft-Thick-Peanut-Butter-Cookies-22-180x180.jpg" />
          <ProductsTitle>Soft</ProductsTitle>
        </ProductsBox>
      </ReactRouterLink>

      <ReactRouterLink to={toCrunchy}>
        <ProductsBox>
          <ProductsImage src="https://handletheheat.com/wp-content/uploads/2013/10/Crisp-and-Thin-Chocolate-Chip-Cookies-2-180x180.jpg" />
          <ProductsTitle>Crunchy</ProductsTitle>
        </ProductsBox>
      </ReactRouterLink>
    </Products>
  ) : null;
};

Header.OurStory = function HeaderOurStory({ to, children, ...restProps }) {
  const { open2 } = useContext(OpenContext);
  return open2 ? (
    <OurStory {...restProps}>
      {children}
      <ReactRouterLink to={to}>
        <OurStoryImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFhIhvAOKBBwEIOHZHotm62uc4ex_MQTSCg&usqp=CAU" />

        <OurStoryTitle>Meet the Chefs</OurStoryTitle>
      </ReactRouterLink>
    </OurStory>
  ) : null;
};

Header.Blog = function HeaderBlog({ children, ...restProps }) {
  return (
    <Blog {...restProps}>
      {children}
      <BlogTitle></BlogTitle>
      <BlogImage></BlogImage>
    </Blog>
  );
};

Header.UserDiv = function HeaderUserDiv({ count, children, ...restProps }) {
  return (
    <UserDiv count={count} {...restProps}>
      {children}
    </UserDiv>
  );
};
