import React from "react";
import { twJoin } from "tailwind-merge";

type LinkItemProps = {
  text: string;
  link: string;
  handleOpen: () => void;
  i: number;
};

const LinkIItem: React.FC<LinkItemProps> = ({ text, link, handleOpen, i }) => {
  return (
    <li
      className={twJoin(
        "grid cursor-pointer border-primary/30 py-1.5 text-center transition-colors",
        // activeLinkId === id ? "bg-accent" : "",
        i !== 0 && i !== 3 && "border-l",
        i === 3 && "sm:border-l",
        i < 3 && "max-sm:border-b",
      )}
    >
      <a onClick={handleOpen} href={link} className="sm:hidden">
        {text}
      </a>
      <a href={link} className="max-sm:hidden">
        {text}
      </a>
    </li>
  );
};

export default LinkIItem;
