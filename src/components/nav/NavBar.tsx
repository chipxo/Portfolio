import ThemeToggle from "@/features/theme/ThemeToggle";
import Li from "./Li";
import { twJoin } from "tailwind-merge";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import links from "./links.json";

const NavBar = () => {
  const [activeLinkId, setActiveLinkId] = useState(links[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let foundActiveLink = false;

      links.forEach(({ id, link }) => {
        const targetSection = document.querySelector(link) as HTMLElement;

        if (targetSection) {
          const { offsetTop, offsetHeight } = targetSection;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100 &&
            !foundActiveLink
          ) {
            setActiveLinkId(id);
            foundActiveLink = true;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const container = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeIn", delayChildren: 0.4 },
    },
  };

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { ease: "linear" } },
  };

  return (
    <motion.nav className="font-Raleway container py-3">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="xl:text-md grid grid-cols-6 divide-x overflow-hidden rounded-3xl border bg-background text-sm shadow-lg"
      >
        {links.map(({ id, text, link }, i) => (
          <motion.li
            key={text + i}
            id={text}
            variants={item}
            className={twJoin(
              "inline-flex cursor-pointer justify-center py-1.5 transition-colors",
              activeLinkId === id ? "bg-accent" : "",
            )}
          >
            <a href={link}>{text}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavBar;
