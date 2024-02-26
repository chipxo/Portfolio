import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Burger from "../burger/Burger";
import BgBlur from "./BgBlur";
import LinksList from "./LinksList";

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

  const handleOpen = () => {
    !open
      ? body.setAttribute("class", "overflow-hidden")
      : body.removeAttribute("class");

    setOpen((o) => !o);
  };

  return (
    <motion.nav className="font-Raleway sm:container max-sm:hidden sm:py-3">
      <Burger open={open} onClick={handleOpen} />

      <AnimatePresence>
        {open && (
          <>
            <BgBlur />
            <LinksList handleOpen={handleOpen} />
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
