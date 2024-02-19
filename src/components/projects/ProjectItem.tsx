import { motion } from "framer-motion";
import React from "react";
import { twJoin } from "tailwind-merge";
import Tilt from "react-parallax-tilt";

type ProjectItemProps = {
  id: number;
  name: string;
  technologies: JSX.Element[];
  screen: string;
  src: string;
  i: number;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  technologies,
  screen,
  src,
  i,
}) => {
  const oddNum = i % 2 !== 0;
  const lastItem = i === 4;

  return (
    <motion.div
      initial={{ x: 0, opacity: 0, scale: 0 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={twJoin(
        "grid items-center justify-evenly gap-4 rounded-md border border-accent bg-background p-6 drop-shadow-2xl md:gap-8 lg:grid-cols-[0.6fr_1fr] lg:last:col-span-2",
        oddNum ? "md:max-lg:grid-cols-[1fr_0.5fr]" : "md:grid-cols-[0.5fr_1fr]",
      )}
    >
      <div
        className={twJoin(
          "grid gap-y-3 text-center md:gap-y-4",
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
            technologies.length >= 5 ? "md:grid-cols-4" : "md:grid-cols-3",
          )}
        >
          {technologies.map((technology, i) => (
            <div key={name + i}>{technology}</div>
          ))}
        </div>
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
          "h-full w-full overflow-hidden rounded-sm border max-md:hidden",
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
