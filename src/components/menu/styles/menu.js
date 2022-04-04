import styled from "styled-components/macro";
import { keyframes } from "styled-components";

export const menuAnimation = keyframes`
0%{
  transform: translateX(-100%);
}
100%{
  transform: translateX(0)
}
`;
export const Container = styled.div`
  z-index: 3;
  position: absolute;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #007367;
  transform: ${({ transform }) =>
    transform === "translateX(0)" ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.5s;
`;

export const Items = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: bold;
  color: #fff;
`;
