import { motion } from "framer-motion";
import AboutTitle from "./AboutTitle";
import AboutDescription from "./AboutDescription";

const About = () => {
  return (
    <section id="about" className="py-8 font-Poiret lg:py-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="container text-center"
      >
        <AboutTitle />
        <AboutDescription />
      </motion.div>
    </section>
  );
};

export default About;
