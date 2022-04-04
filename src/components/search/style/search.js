import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 1rem 2rem;
  box-sizing: border-box;
`;
export const Title = styled.h1`
  text-align: center;
  color: #007367;
`;
export const Box = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  width: 60vw;
  color: #007367;
  padding: 1rem;
  border: 1px solid #007367;
  :focus {
    outline: none;
  }
`;
export const Button = styled.button`
  color: white;
  text-transform: uppercase;
  background: #007367;
  padding: 1rem 3rem;
  cursor: pointer;

  :hover {
    border: 1px solid #007367;
    background: white;
    color: #007367;
  }
`;
export const ReturnBox = styled.div`
  margin-top: 4rem;
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  :hover {
    color: #ff8200;
  }
`;
export const Image = styled.img`
  width: 10rem;
  height: 12rem;
  border-radius: 15px;
  box-shadow: 5px 5px 10px #f09027;
`;
export const Text = styled.h3`
  color: #007367;
`;
export const TextSmall = styled.p`
  color: #007367;
`;

export const TextTitle = styled.h2`
  text-align: center;
  padding-left: 25vw;
  width: 100%;
  color: #007367;
`;
