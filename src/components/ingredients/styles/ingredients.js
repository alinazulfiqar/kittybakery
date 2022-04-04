import styled from "styled-components/macro";

export const Container = styled.div`
  background: #b6e1e0;
  box-sizing: border-box;
  margin: 0;
`;

export const Holder = styled.div`
  padding: 1rem 9rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TitleBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.2px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #007367;
  padding-right: 1rem;
  font-weight: 900;
  font-size: 2.5rem;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: #007367;
  font-weight: 700;
  line-height: 1.5;
`;

export const Button = styled.button`
  color: #007367;
  background: #fff;
  text-align: center;
  text-transform: uppercase;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  margin-top: 1em;
  font-weight: 600;
  border: solid 2px white;
  :hover {
    background: transparent;
    border: solid 2px white;
    color: #fff;
  }
`;

export const IngWrapper = styled.div`
  display: flex;
  position: relative;
  //   border: solid 2px yellow;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-right: 2rem;
  padding-left: 2rem;
  height: 90vh;
  //   margin-top: 5rem;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Popup = styled.div`
  color: #007367;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ff8200;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 1;
  padding: 1rem 1.5rem;

  position: absolute;
  top: 10%;
  left: 70%;
  width: 100%;
  transition: opacity 0.2s;
  ${({ open }) => (open === true ? "opacity=1" : "opacity:0")}
`;

export const Image = styled.img`
  @media (min-width: 768px) {
    max-height: 9.4rem;
  }
  @media (max-width: 1128px) {
    max-height: 8rem;
  }
  @media (max-width: 800px) {
    max-height: 5rem;
  }
  @media (max-width: 500px) {
    max-height: 3rem;
  }
  z-index: 0;
  position: relative;
`;

export const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 85%;
  transition: transform 0.2s;
  ${({ open }) => (open === true ? "transform: rotate(45deg)" : null)}
`;

export const Ing = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  :nth-of-type(1) {
    left: 25%;
  }
  :nth-of-type(2) {
    left: 60%;
    // border: solid 2px red;
  }
  :nth-of-type(3) {
    top: 60%;
    left: 35%;
    // border: solid 2px purple;
  }

  :nth-of-type(4) {
    right: 10%;
    top: 50%;
    // border: solid 2px orange;
  }

  :nth-of-type(5) {
    top: 50%;
    // border: solid 2px blue;
  }

  :nth-of-type(6) {
    right: 40%;
    top: 20%;
    // border: solid 2px pink;
  }
`;

export const PHeader = styled.h2`
  text-decoration: underline;
  margin-bottom: 0px;
`;

export const SmallText = styled.p`
  font-size: 0.9rem;

  overflow-wrap: break-word;
`;
