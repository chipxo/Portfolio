import React from "react";
import { ProjectItemProps } from "./ProjectItem";
import TechnologyItem from "./TechnologyItem";

type TechnologiesProps = Pick<ProjectItemProps, "technologies">;

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <>
      {technologies.map((technology, i) => (
        <TechnologyItem
          key={technologies.length + i}
          technology={technology}
          i={i}
        />
      ))}
    </>
  );
};

export default Technologies;
