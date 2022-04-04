import styled from "styled-components/macro";

export const Container = styled.div``;

export const Main = styled.div`
  background-image: url("https://www.thespruceeats.com/thmb/0K_8d2C8yrLls8YEuIMu6IiEYWk=/2121x1414/filters:fill(auto,1)/kidscooking-157f7abfa5a549b68795733baacad7f7.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  letter-spacing: 1.5px;
  padding: 2rem 4rem;
`;

export const MainTitle = styled.h1`
  font-weight: 900;
  text-align: center;
  font-size: 4rem;
`;

export const MainSubTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Story = styled.div`
  padding: 2rem 6rem;
`;

export const StoryTitle = styled.h1`
  font-weight: 900;
  text-align: center;
  font-size: 4rem;
  color: #007367;
`;

export const StoryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 6rem;

  :nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  width: 40%;

  border-radius: 5px;
`;

export const Heading = styled.h2`
  color: #007367;
  font-size: 2rem;
  font-weight: 800;
`;

export const Text = styled.p`
  line-height: 1.8;
  color: #000000;
  font-weight: 500;
`;

export const TextBox = styled.div`
  width: 45%;
`;

export const Span = styled.span`
  color: #007367;
  font-weight: 800;
`;
