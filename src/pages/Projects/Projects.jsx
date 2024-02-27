import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { ProjectItem } from "./ProjectItem";
import { ProjectContainer } from "./Projects.styled";

export const Projects = () => {
  const ref = useRef(null);


  return (
    <Page header="Projetos">
      <ProjectContainer ref={ref}>
        <div className="wrapper">
          {projects.map((data, index) => (
            <ProjectItem data={data} key={index} index={index} />
          ))}
        </div>
      </ProjectContainer>
    </Page>
  );
};
