import { createGlobalStyle } from "styled-components";
// import "normalize.css";
export const GlobalStyles = createGlobalStyle`
html, body{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font: 18px/1.2 Walsheim,Arial,Helvetica Neue,Helvetica,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #999;
    overflow-x:hidden;
    z-index:-1;
}
html{
    height: 100%;
    overflow-y: scroll;
}
body{
    // height: 100%;
}
a{
    text-decoration: none;
}

`;
