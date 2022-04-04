import React from "react";
import About from "../components/about/index";

export function AboutContainer({ children, ...restProps }) {
  return (
    <About>
      <About.Main>
        <About.MainTitle>
          About Us
          <About.MainSubTitle>
            From humble beginnings to the future of{" "}
            <About.Span>food</About.Span>.
          </About.MainSubTitle>
        </About.MainTitle>
      </About.Main>
      <About.Story>
        <About.StoryTitle>Our Story</About.StoryTitle>

        <About.StoryBox>
          <About.Image src="https://images.unsplash.com/photo-1571855243959-b1dd13030f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <About.TextBox>
            <About.Heading>Meet the Woodards</About.Heading>
            <About.Text>
              Living and working near New York City, we are always on the go.
              When Vivienne, our daughter, was diagnosed with severe food
              allergies as an infant, we came up short on healthy snacks that
              were safe to eat and delicious. Frustrated by the lack of options,
              Denise left her corporate job and set out to make her own. And
              that’s how Partake was born.
            </About.Text>
          </About.TextBox>
        </About.StoryBox>

        <About.StoryBox>
          <About.Image src="https://images.unsplash.com/photo-1556804409-31e95f0afee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" />
          <About.TextBox>
            <About.Heading>The Future of Food</About.Heading>
            <About.Text>
              As a Black female CEO & founder, Denise is passionate about
              raising awareness of Black and female entrepreneurship and
              increasing opportunity for women and people of color seeking
              careers in the food industry. Food and beverage has a colorful
              future, and Denise is dedicated to mentoring up and coming leaders
              and students excited to forge their paths in the industry. Click
              here to learn more about our Black Futures in Food & Beverage
              fellowship program for actively enrolled HBCU students.
            </About.Text>
          </About.TextBox>
        </About.StoryBox>

        <About.StoryBox>
          <About.Image src="https://images.unsplash.com/photo-1517330156738-0b67722f3751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <About.TextBox>
            <About.Heading>Food Equality Initiative</About.Heading>
            <About.Text>
              Food allergies affect 1 in 13 children across our country, and
              according to Food Allergy Research & Education (FARE), Black
              children are at a significantly higher risk of developing these
              allergies. Getting safe food into the hands of food insecure
              families with food allergies is a top priority for Partake. We are
              partnering with Food Equality Initiative to ensure families in
              need have access to the food, education and advocacy they deserve.
            </About.Text>
          </About.TextBox>
        </About.StoryBox>
      </About.Story>
    </About>
  );
}
