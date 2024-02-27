import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import livia from '../../assets/images/livia.png'
import {
  AnimatedSpan,
  DogContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>Lívia Souza</Name>
        <Position>
          <div className="text first" aria-label="Full Stack Developer">
            {produceSpans("Engenheira de Software")}
          </div>
          <div className="text second" aria-label="UI/UX Enthusiast">
            {produceSpans("Estudante de Doutorado")}
          </div>
        </Position>
      </TextContainer>
      <DogContainer>
        <img src={livia} alt="Dog" />

      </DogContainer>
    </HomeWrapper>
  );
};
