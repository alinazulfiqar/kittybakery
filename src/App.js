import React from "react";
import { HeaderContainer } from "./containers/header";
import { MenuContainer } from "./containers/menu";
import { MenuToggleContextProvider } from "./components/menu/MenuContext";
import { TopContainer } from "./containers/top";
import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Soft from "./pages/soft";
import Crunchy from "./pages/crunchy";
import Home from "./pages/home";
import Cookie from "./pages/cookie";
import Products from "./pages/products";
import About from "./pages/about";
import Cart from "./pages/cart";
import Search from "./pages/search";
import ScrollToTop from "./components/scrollToTop/index";

function App() {
  return (
    <>
      <MenuToggleContextProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/soft" element={<Soft />} />
            <Route path="/crunchy" element={<Crunchy />} />
            <Route path="/products/:id" element={<Cookie />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </MenuToggleContextProvider>
    </>
  );
}

export default App;
