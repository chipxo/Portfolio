import { twJoin } from "tailwind-merge";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import links from "./links.json";
import Burger from "../burger/Burger";

const NavBar = () => {
  const [activeLinkId, setActiveLinkId] = useState(links[0].id);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // let foundActiveLink = false;

      links.forEach(({ id, link }) => {
        const targetSection = document.querySelector(link) as HTMLElement;

        if (targetSection) {
          const { offsetTop, offsetHeight } = targetSection;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
            // && !foundActiveLink
          ) {
            setActiveLinkId(id);
            // foundActiveLink = true;
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
    hidden: { y: -200, opacity: 0, scale: 0 },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeIn", delayChildren: 0.6 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: -200,
      transition: { duration: 0.4, ease: "linear" },
    },
  };

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { ease: "linear" } },
  };
  const body = document.body;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 640) {
        setOpen(true);
        body.removeAttribute("class");
      } else if (width < 640) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hanldeOpen = () => {
    !open
      ? body.setAttribute("class", "overflow-hidden")
      : body.removeAttribute("class");

    setOpen((o) => !o);
  };

  return (
    <motion.nav className="font-Raleway sm:container sm:py-3">
      <Burger open={open} onClick={hanldeOpen} />
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="xl:text-md grid grid-cols-3 overflow-hidden border bg-background text-sm shadow-lg sm:grid-cols-6 sm:rounded-3xl"
          >
            <motion.div className="fixed inset-0 -z-10 backdrop-blur-sm sm:hidden" />
            {links.map(({ id, text, link }, i) => (
              <motion.li
                key={text + i}
                variants={item}
                className={twJoin(
                  "inline-flex cursor-pointer justify-center py-1.5 transition-colors hover:animate-pulse",
                  activeLinkId === id ? "bg-accent" : "",
                  i !== 0 && i !== 3 && "border-l",
                  i === 3 && "sm:border-l",
                  i < 3 && "max-sm:border-b",
                )}
              >
                <a href={link}>{text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
