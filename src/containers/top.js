import React from "react";
import Top from "../components/top/index";
import toast from "../images/icons/toast.svg";

export function TopContainer({ children, ...restProps }) {
  return (
    <Top>
      <Top.Box>
        <Top.Title>Pawsitively Purrfect</Top.Title>
        <Top.SubTitle>Let's raise our glasses and toast to 2022.</Top.SubTitle>
        <Top.Button>Read more</Top.Button>
      </Top.Box>
      <Top.ImageContainer>
        <Top.Image src={toast} />
      </Top.ImageContainer>
    </Top>
  );
}
