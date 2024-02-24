import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Theme, useTheme } from "./theme-provider";
import { nanoid } from "@reduxjs/toolkit";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const themes = ["light", "dark", "system"];

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-primary/60"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes.map((theme) => (
            <DropdownMenuItem
              key={nanoid()}
              className="cursor-pointer"
              onClick={() => setTheme(theme as Theme)}
            >
              {`${theme[0].toUpperCase()}${theme.slice(1)}`}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};

export default ThemeToggle;
