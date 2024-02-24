import { motion } from "framer-motion";
import links from "./links";
import React from "react";
import LinkIItem from "./LinkIItem";

type LinksListProps = {
  handleOpen: () => void;
};

const LinksList: React.FC<LinksListProps> = ({ handleOpen }) => {
  const container = {
    hidden: { y: -200, opacity: 0, scale: 0 },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: -200,
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="xl:text-md grid grid-cols-3 overflow-hidden border border-primary/30 bg-background text-sm shadow-lg drop-shadow-primary sm:grid-cols-6 sm:rounded-3xl"
    >
      {links.map((link, i) => (
        <LinkIItem key={link.id + i} {...link} i={i} handleOpen={handleOpen} />
      ))}
    </motion.ul>
  );
};

export default LinksList;
