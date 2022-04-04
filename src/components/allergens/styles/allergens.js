import styled from "styled-components/macro";

export const Container = styled.div`
  height: 200px;
  width: 100%;
  background: #eee;
  padding-bottom: 7rem;
`;
export const Box = styled.div``;
export const ListBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 1rem;
  background: #eee;
  padding-left: 0;
`;
export const Item = styled.li`
  list-style-type: none;
`;
export const Img = styled.img`
  border: none;
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  color: #007367;
  letter-spacing: 2px;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  margin-top: 0;
  padding-top: 50px;
  color: #007367;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const Span = styled.span`
  text-decoration: underline;
  font-family: "Pushster", cursive;
`;
