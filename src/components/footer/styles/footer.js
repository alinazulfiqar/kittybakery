import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #007367;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;
  position: relative;
  margin-top: 2rem;
  ::before {
    content: "";
    height: 60px;
    width: 100%;
    background-color: #007367;
    position: absolute;
    top: -30px;
    border-radius: 100%;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;
  justify-content: space-between;
  padding-left: 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  text-align: left;
`;
export const Right = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const Socials = styled.div``;
export const FooterIcon = styled.img`
  height: 3vh;
  width: 2vw;
  margin-right: 2rem;
  border-radius: 50%;
`;
export const Text = styled.p`
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  overflow-wrap: break-word;
`;
export const Input = styled.input`
  border: none;
  background-color: #007367;
  color: #fff;
  border-bottom: 2px solid white;

  ::placeholder {
    color: white;
  }

  :hover {
    filter: brightness(115%);
  }
`;
export const Subscribe = styled.button`
  background-color: #007367;
  color: #fff;
  border: 2px solid white;
  box-sizing: border-box;
  padding: 0.5rem 2rem;
  margin-left: 5px;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: color 0.2s;

  :hover {
    background-color: white;
    color: #007367;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2.2px;
  :hover {
    color: #ff8200;
  }
`;

export const SocialWrap = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;
export const InputWrap = styled.div``;
