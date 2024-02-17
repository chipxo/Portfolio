import React from "react";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { twJoin } from "tailwind-merge";

type BurgerProps = {
  onClick: () => void;
  open: boolean;
};

const Burger: React.FC<BurgerProps> = ({ onClick, open }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="icon"
      className="relative left-2 top-2 mb-4 sm:hidden"
    >
      <ChevronRightIcon
        className={twJoin(
          "h-4 w-4 transition-transform",
          open ? "rotate-90" : "",
        )}
      />
    </Button>
  );
};

export default Burger;
