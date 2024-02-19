import { Button } from "../ui/button";
import CV_photo from "@/assets/CV_photo.jpg";
import CV from "@/assets/CV.pdf";
import { motion } from "framer-motion";
import { ArrowDown, GitHubIcon, LinkedinIcon } from "../icons/icons";
import Tilt from "react-parallax-tilt";

const Home = () => {
  return (
    <section id="home" className="mt-14 overflow-hidden">
      <div className="container grid gap-4 gap-y-6 lg:grid-cols-[0.5fr_1fr]">
        <Tilt>
          <motion.div
            initial={{ x: -200, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto w-32 rounded-full border-transparent bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-border md:w-64"
          >
            <img
              src={CV_photo}
              alt="Serhii Chyipesh Photo"
              className="aspect-square h-full w-full rounded-full object-cover p-1.5"
            />
          </motion.div>
        </Tilt>
        <div className="flex flex-col gap-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="mx-auto w-fit pt-4 text-center text-xl font-bold sm:text-2xl md:text-4xl md:font-extrabold lg:text-end"
          >
            Hi, <span className="text-primary">I'm Serhii.</span> I'm a{" "}
            <span className="text-primary">front-end developer.</span> I enjoy
            building websites.
          </motion.h2>
          <div className="grid flex-grow grid-cols-2 items-end justify-evenly gap-4 pb-4 md:flex lg:justify-end">
            <a href="#contact" className="max-md:mx-auto">
              <Button variant="outline" size="lg">
                Contact me
              </Button>
            </a>
            <a
              href={CV}
              download="Serhii Chyipesh CV"
              target="_blank"
              rel="noreferrer"
              className="max-md:mx-auto"
            >
              <Button variant="outline" size="lg">
                My CV {ArrowDown}
              </Button>
            </a>
            <LinkedinIcon isHome />
            <GitHubIcon isHome />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
