import styled from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  border: 0;
`;

export const Main = styled.div`
  background-image: url("https://cdn.shopify.com/s/files/1/0012/2296/7353/files/partake-foods-products-cookies_1_1440x.png?v=1627972789");
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  margin-top: 3em;
  text-align: center;
`;

export const BoxTitle = styled.h1`
  color: #007367;
  font-sizing: 38px;
`;

export const BoxItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5rem;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const ItemContainer = styled.div`
  margin-top: 50px;
  color: #007367;
  font-weight: bold;
`;

export const ItemImage = styled.img`
  width: 15em;
  height: 15em;
  border-radius: 50%;
  border: 6px solid #af460f;
  box-shadow: 5px 10px 100px #fed39f;
  transition: border 0.2s;

  :hover {
    box-shadow: 5px 10px 100px #f09027;
    border: 6px solid #f09027;
  }
`;

export const ItemTitle = styled.p`
  :hover {
    color: #ff8200;
  }
`;

export const ItemCost = styled.p`
  font-size: 14px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 36px;
  text-align: left;
`;
