import { motion } from "framer-motion";
import { twJoin } from "tailwind-merge";

const AboutTitle = () => {
  return (
    <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">
      {"Aboutme".split("").map((char, i) => (
        <motion.div
          key={i}
          initial={{ x: -40 * i, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 * i }}
          className={twJoin("inline-flex", char === "t" && "mr-2")}
        >
          {char}
        </motion.div>
      ))}
    </h2>
  );
};

export default AboutTitle;
