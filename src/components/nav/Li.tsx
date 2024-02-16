import React, { useState } from "react";

type LiProps = {
  children: React.ReactElement;
};

const Li: React.FC<LiProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative cursor-pointer"
      onMouseLeave={() => setOpen((o) => !o)}
      onMouseEnter={() => setOpen((o) => !o)}
    >
      {/* <div
        style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
        className="absolute -bottom-2 -left-2 -right-2 h-1  origin-left rounded-sm bg-primary transition-transform duration-300 ease-out"
      /> */}
      {children}
    </li>
  );
};

export default Li;
