import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ff9a3c;
  background-position: center;
  background-size: cover;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  padding-top: 5em;
  padding-bottom: 5em;
  padding-left: 9rem;

  @media (max-width: 768px) {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const Title = styled.h1`
  color: #007466;
  font-weight: 600;
  letter-spacing: 1.6px;
  font-family: grouch_btregular, Times New Roman, Times, Baskerville, Georgia,
    serif;

  @media (min-width: 768px) {
    font-size: 4.625rem;
  }
`;

export const SubTitle = styled.h3`
  color: #007466;
  text-wrap: wrap;
  font-weight: 500;
`;

export const Button = styled.button`
  color: #007466;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  padding: 15px;
  min-width: 245px;
  letter-spacing: 1.8px;
  outline: 0;
  text-transform: uppercase;
  text-align: center;
  width: 15vw;
  margin-top: 2em;

  @media (max-width: 768px) {
    margin: auto;
  }
  :hover {
    background: transparent;
    cursor: pointer;
    color: white;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-wrap: wrap;
  width: 50%;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 50%;
  filter: saturate(350%);
`;
