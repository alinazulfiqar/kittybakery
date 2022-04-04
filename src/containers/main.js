import React from "react";
import Main from "../components/main/index";

export function MainContainer({ children }) {
  return (
    <Main>
      {children}
      <Main.Box>
        <Main.Title>
          <em>the </em>Kitty Bakery
        </Main.Title>
      </Main.Box>
    </Main>
  );
}
