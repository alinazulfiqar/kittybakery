import styled from "styled-components/macro";

export const Container = styled.div``;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  color: #007367;
`;
export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GridContainer = styled.div`
  padding: 2rem 5rem;
  @media (max-width: 540px) {
    padding: 0;
  }
  @media (max-width: 660px) {
    padding: 1rem 2rem;
  }
`;

export const GridBox = styled.div`
  display: grid;

  grid-template-columns: 3fr 1fr 2fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);

  @media (max-width: 540px) {
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
`;
export const Column = styled.div`
  color: #007367;
  font-size: 1.15rem;
  :nth-of-type(1) {
    text-align: center;
  }
  :nth-of-type(3) {
    text-align: center;
  }

  @media (max-width: 540px) {
    :nth-of-type(2),
    :nth-of-type(4) {
      display: none;
    }

    text-align: center;
  }
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  @media (max-width: 388px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ProductImage = styled.img`
  width: 6rem;
  min-width: 5rem;
  min-height: 3rem;
  height: 6rem;
  border-radius: 50%;

  @media (max-width: 540px) {
    border-radius: 15px;
  }
`;

export const ProductTitle = styled.p``;

export const ProductPrice = styled.p`
  @media (max-width: 540px) {
    display: none;
  }
`;

export const ProductQuantity = styled.input`
  border: none;
  border-bottom: 1px solid #007367;
  text-align: center;
`;

export const Total = styled.p`
  @media (max-width: 540px) {
    display: none;
  }
`;
export const CheckOutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
`;
export const CheckOutTotal = styled.p`
  grid-column-start: 4;
  color: #007367;

  @media (max-width: 540px) {
    grid-column-start: 2;
    text-align: center;
  }
`;

export const CheckOut = styled.button`
  display: flex;
  text-align: center;
  padding: 1.5rem 3rem;

  font-weight: 600;
  letter-spacing: 1.2px;
  color: white;
  background: #007367;
  border: 1px solid white;
  cursor: pointer;
  :hover {
    color: #007367;
    background: #fff;
    border: 1px solid #007367;
  }
`;

export const Text = styled.p`
  text-align: center;

  ::before {
    content: "🍪  ";

    height: 2vh;
    width: 10vw;
  }
`;

export const Trash = styled.img`
  width: 5vw;
  height: 5vh;
  cursor: pointer;

  display: flex;
  align-self: center;

  :hover {
    transform: scale(1.5) rotate(-35deg);
    transition: transform 0.2s;
  }

  @media (max-width: 388px) {
    transform: rotate(90deg);
  }
`;
