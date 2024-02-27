import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import dyp from "../../assets/images/dyp.png";
import highschool from "../../assets/images/highschool.jpeg";
import sos from "../../assets/images/sos.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="Sobre">
        <Text>
          <Paragraph>
          <p>Minha jornada profissional começou no mestrado, com a descoberta da Estatística aplicada.
          A partir daí eu soube que queria aprofundar meu conhecimento nessa área.</p>
          
          <p>Estou constantemente buscando desafios que me permitam crescer profissional 
          e pessoalmente. Sou apaixonada por aprender e estou sempre aberta a 
          novas oportunidades de desenvolvimento e colaboração.</p>

          <p>Obrigada por visitar o meu portfólio. Estou ansiosa para conectarmos e colaborarmos juntos!</p>
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Universidade Federal de Pernambuco",
                p: "Doutorado em Ciência de Computação",
                image: dyp,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Universidade de Pernambuco",
                p: "Mestrado em Gestão Sustentável (2017-2019)",
                image: highschool,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "UniFBV - Wyden",
                p: "Bacharelado em Engenharia de Software (2007-2017)",
                image: sos,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
