import styled from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  border: 0;
`;

export const Box = styled.div`
  background-image: url("https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80");
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 3rem;
  letter-spacing: 1px;
  font-weight: bolder;
  text-align: left;
`;
