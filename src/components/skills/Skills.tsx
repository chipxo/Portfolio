import { AnimatePresence, motion } from "framer-motion";
import skillsList from "./skillsList";

const Skills = () => {
  return (
    <section id="skills" className="">
      <h2 className="mx-auto mb-8 w-fit text-2xl">My Skills</h2>
      <motion.div
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="container grid grid-cols-[repeat(auto-fill,_minmax(50px,_1fr))] place-items-center gap-x-4 gap-y-6 px-12 sm:grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] lg:flex lg:justify-between"
      >
        <AnimatePresence>
          {skillsList.map(({ text, icon, className }, i) => (
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              key={text + i}
              id={text}
              className={className}
            >
              {icon}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
