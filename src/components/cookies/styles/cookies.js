import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0;

  background-color: gray;

  @media (max-width: 640px) {
    margin: auto;
    padding: 0;
  }
`;
export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 4rem;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const ImageBox = styled.div`
  width: 50vw;

  @media (max-width: 778px) {
    display: none;
  }
`;
export const TextBox = styled.div`
  width: 40vw;

  border-radius: 5%;
  outline: 10px ridge rgb(0, 115, 103, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: outline 0.3s;
  backdrop-filter: saturate(150%) blur(8px);

  :hover {
    outline: 10px ridge rgb(0, 115, 103, 0.6);
  }
  @media (max-width: 778px) {
    justify-content: center;
    // background: #f6e4ad;
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #007367;
  letter-spacing: 1.3px;
  max-width: 30vw;
  font-weight: 700;
  text-align: center;

  @media (max-width: 640px) {
    max-width: 50vw;
    text-align: center;
  }
`;
export const Cost = styled.p`
  color: #007367;
  padding-top: 1em;
  padding-bottom: 2em;
  font-size: 2rem;
  font-weight: 800;
  // -webkit-text-stroke: 1px black;
`;
export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const CartBtn = styled.button`
  background: ${({ clicked }) =>
    clicked === true
      ? "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2536766%2Fscreenshots%2F6424972%2Fcookie-bites-gif.gif&f=1&nofb=1')"
      : "#007367"};

  background-position: center;
  background-size: cover;
  // background-repeat: no-repeat;
  text-transform: uppercase;
  color: ${({ clicked }) => (clicked === true ? "brown;" : "white;")};
  font-weight: 600;
  padding: 2vw 4vw;
  text-align: center;
  height: 3vh;
min-width: 20vw;
height: 100%;
font-size: 1.3rem;



@media(max-width: 440px){
  font-size: 4vw;

}
@media(max-width: 778px){
  min-height: 10vh;
  min-width: 45vw;
  
}

  cursor: pointer;
  justify-self: center;
  margin-left: 2em;
  border: ${({ clicked }) =>
    clicked === true ? "3px solid brown;" : "1px solid #fff;"}
  
   

  transition: all 0.2s;
  transform: ${({ clicked }) => (clicked === true ? "translateY(5px);" : "")};
  box-shadow: ${({ clicked }) =>
    clicked === true ? "2px 8px 15px rgba(0,0,0,0.7);" : ""};
`;
export const QTY = styled.input`
  width: 4vw;
  border: none;
  color: white;
  border-bottom: 3px solid #007367;

  background: transparent;

  :focus {
    outline: none;
    border-bottom: 3px solid #007367;
    margin-top: 0em;
  }

  @media (max-width: 640px) {
    color: #007367;
  }
`;

export const Image = styled.img`
  border-radius: 51% 49% 100% 0% / 100% 100% 0% 0%;
`;
export const Description = styled.p`
  font-weight: 700;
  color: #007367;
  background: #f6e4ad;
  letter-spacing: 0.5px;
  line-height: 1.2;
  // -webkit-text-stroke: 1px black;
  text-align: center;
`;

export const Size = styled.h3`
  color: #007367;
`;
