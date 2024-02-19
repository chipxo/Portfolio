import { twJoin } from "tailwind-merge";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import links from "./links.json";
import Burger from "../burger/Burger";

const NavBar = () => {
  // const [activeLinkId, setActiveLinkId] = useState(links[0].id);

  const body = document.body;

  const [open, setOpen] = useState(window.innerWidth >= 640 ? true : false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;

  //     links.forEach(({ id, link }) => {
  //       const targetSection = document.querySelector(link) as HTMLElement;

  //       if (targetSection) {
  //         const { offsetTop, offsetHeight } = targetSection;

  //         if (
  //           scrollPosition >= offsetTop - 300 &&
  //           scrollPosition < offsetTop + offsetHeight - 300
  //         ) {
  //           setActiveLinkId(id);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [links]);

  const container = {
    hidden: { y: -200, opacity: 0, scale: 0 },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeIn" },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: -200,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 -z-10 backdrop-blur-sm sm:hidden"
            />
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="xl:text-md grid grid-cols-3 overflow-hidden border bg-background text-sm shadow-lg sm:grid-cols-6 sm:rounded-3xl"
            >
              {links.map(({ id, text, link }, i) => (
                <li
                  key={id + i}
                  className={twJoin(
                    "grid cursor-pointer py-1.5 text-center transition-colors",
                    // activeLinkId === id ? "bg-accent" : "",
                    i !== 0 && i !== 3 && "border-l",
                    i === 3 && "sm:border-l",
                    i < 3 && "max-sm:border-b",
                  )}
                >
                  <a onClick={hanldeOpen} href={link} className="sm:hidden">
                    {text}
                  </a>
                  <a href={link} className="max-sm:hidden">
                    {text}
                  </a>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
