import { motion } from "framer-motion";
import React from "react";
import { twJoin } from "tailwind-merge";
import Tilt from "react-parallax-tilt";
import Technologies from "./Technologies";

export type ProjectItemProps = {
  id: number;
  name: string;
  technologies: JSX.Element[];
  screen: string;
  src: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  technologies,
  screen,
  src,
}) => {
  const oddNum = id % 2 !== 0;
  const lastItem = id === 4;

  return (
    <motion.div
      initial={{ x: oddNum ? 300 : -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={twJoin(
        "animated_border relative grid items-center justify-evenly gap-4 overflow-hidden rounded-md border bg-background p-6 md:gap-8 lg:grid-cols-[0.6fr_1fr] lg:last:col-span-2",
        oddNum ? "md:max-lg:grid-cols-[1fr_0.5fr]" : "md:grid-cols-[0.5fr_1fr]",
      )}
    >
      <div
        className={twJoin(
          "grid gap-y-3 text-center md:gap-y-4 lg:gap-y-8",
          lastItem && "lg:gap-y-8",
        )}
      >
        <h2
          className={twJoin(
            "text-xl font-semibold",
            lastItem ? "lg:text-3xl" : "xl:text-2xl",
          )}
        >
          {name}
        </h2>
        <p>Made with: </p>
        <div
          className={twJoin(
            "mt-2 items-center gap-4 max-md:flex max-md:flex-wrap max-md:justify-center md:grid md:place-items-center",
            technologies.length > 5 ? "md:grid-cols-5" : "md:grid-cols-4",
          )}
        >
          <Technologies technologies={technologies} />
        </div>
        {/* <a className="inline-flex items-center text-start">
          View code
          <span className="inline-flex">{ArrowRight}</span>
        </a> */}
      </div>

      <a
        href={src}
        target="_blank"
        className={twJoin(
          "h-full w-full overflow-hidden rounded-sm border md:hidden",
        )}
      >
        <img className="h-full w-full object-contain" src={screen} />
      </a>

      <Tilt
        className={twJoin(
          "overflow-hidden rounded-sm border max-md:hidden",
          oddNum && " md:max-lg:-order-1",
        )}
      >
        <a href={src} target="_blank">
          <img className="h-full w-full object-contain" src={screen} />
        </a>
      </Tilt>
    </motion.div>
  );
};

export default ProjectItem;
