import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 2rem 4rem;
`;
export const Title = styled.h1`
  text-align: center;
  color: #007367;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  font-size: 2.6rem;
  font-weight: 800;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const Image = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;

  @media (max-width: 780px) {
    max-width: 7rem;
    max-height: 7rem;
  }
`;
export const Text = styled.h3`
  color: #007367;
  :hover {
    color: #ff8200;
  }
  text-align: center;
`;
export const TextSmall = styled.h4`
  color: #007367;
  margin-bottom: 5rem;
`;
