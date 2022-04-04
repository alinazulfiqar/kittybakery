import styled from "styled-components/macro";

export const Container = styled.div`
  text-decoration: none;
  overflow: hidden;
  border: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
`;

export const UserDiv = styled.div`
  position: relative;

  ::after {
    content: "${({ count }) => `${count}`}";
    font-size: 0.6rem;
    color: #007367;
    font-weight: bolder;
    position: absolute;
    left: 2.75rem;
    top: 1rem;
  }
`;

export const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.4);

  display: flex;
  align-self: flex-end;
  border-radius: 50%;
  z-index: 5;
`;

export const Search = styled.form`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 520px) {
    display: none;
  }
`;
export const SearchIcon = styled.img`
  max-width: 30px;
  align-self: center;
  padding-left: 8px;
  cursor: pointer;
`;
export const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 100)
  width: 200px;
  color: #007367;
  border: 3px solid #D2691E;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  :focus{
  outline: 1px solid #D2691E;
    
  }
  @media (max-width:1024px){
  transition: width 0.5s;
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  margin-left: ${({ active }) => (active === true ? "5px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
  }`;

export const UserCart = styled.img`
  padding-left: 20px;

  max-width: 30px;
`;

export const Nav = styled.ul`
margin: 0;
  display: flex;
  padding: 0;
  // flex-wrap: wrap;
  list-style-type: none;
  flex-direction: row;
  align-items: center;
  // border: 2px solid red;
 justify-content: space-evenly;
 width: 85vw;
  
  }
`;

export const HamIcon = styled.div`
  display: none;
  height: 30px;
  width: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-top: 8px;
    padding-right: 1em;
  }
`;
export const HamButton = styled.button`
  border: 0;
  background-color: yellow;
`;
export const Banner = styled.div`
  background-color: #007367;
  width: 100%;
  font-weight: 800;
  font-size: 20px;
  margin: auto;
  height: 8vh;
`;

export const Text = styled.p`
  text-align: center;

  color: #fff;
  text-transform: capitalize;
`;
export const NavContainer = styled.div`
  display: flex;
  
  flex-direction: column;

  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
   display:flex;
   align-items: center;
   justify-content: space-between;
   margin: auto;
   border: 0;
  position: relative;
  width: 100%;
  ${UserDiv}{
    padding:0;
    right:2em;
    top: 45%;
    position: absolute;
  }

   ${Search}{
     padding: 0;
     left: 6em;
     position: absolute;
   }
   ${HamIcon}{
     padding:0;
     position: absolute;
     left: 2em;
   }
  }
  @media (max-width: 1024px)and (min-width:640px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    
   
    
    ${Nav} {
      display: flex;
      width: 80vw;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      position: relative;
      // border: 2px solid black;
      ${Logo}{
        position: relative;
        right:25%;
      }
      ${UserDiv}{
        position: absolute;
        right: 1rem;
        top: 45%;
      }
      ${HamIcon}{
       
      }
      ${SearchInput} {
        @media (maxwidth: 1024px) {
          margin-left: ${({ active }) => (active === true ? "10px" : "0")};
          padding: ${({ active }) => (active === true ? "0 10px" : "0")};
          opacity: ${({ active }) => (active === true ? "1" : "0")};
          width: ${({ active }) => (active === true ? "200px" : "0px")};
        }
      }
      }
    }

   
  }
`;

export const HamIcon1 = styled.div`
  height: 2px;
  width: 30px;
  background-color: black;
  transform: ${({ showMenu }) =>
    showMenu === true ? "rotate(-45deg)" : "rotate(0deg)"};
  transition: transform 0.5s;
`;
export const HamIcon2 = styled.div`
  transform: translateY(-7px);
  height: 2px;
  width: 30px;
  background-color: ${({ showMenu }) => (showMenu === true ? "" : "black")};
  transition: transform 0.5s;
`;
export const HamIcon3 = styled.div`
  transform: translateY(-14px);
  height: 2px;
  width: 30px;
  background-color: black;
  transform: ${({ showMenu }) =>
    showMenu === true
      ? "rotate(45deg) translate(-3px, -5px)"
      : "rotate(0) translate(0, -14px)"};
  transition: transform 0.5s;
`;

export const HamburgerContainer = styled.div`
  background-color: black;
`;

export const Products = styled.div`
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-evenly;
`;
export const ProductsBox = styled.div`
  pointer: click;
`;

export const ProductsTitle = styled.p`
  color: #007367;
  font-weight: 600;
  text-align: center;
`;
export const ProductsImage = styled.img`
  width: 200px;
  border-radius: 30px;
  height: 200px;
`;

export const OurStory = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 30rem;
`;
export const OurStoryTitle = styled.p`
  color: #007367;
  font-weight: 600;
  text-align: center;
`;
export const OurStoryImage = styled.img`
  width: 200px;
  border-radius: 30px;
  height: 200px;
`;

export const Blog = styled.div``;
export const BlogTitle = styled.p``;
export const BlogImage = styled.img``;
export const ItemLinks = styled.li`
  margin: 20px;

  font-size: 20px;
  color: #007367;
  letter-spacing: 1.5px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: #ff8200;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
