import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="font-Poiret">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="container text-center"
      >
        <h2 className="mb-4 text-2xl font-extrabold">About me</h2>
        <p className="md:text-lg lg:px-12">
          In the final year of studying
          <span className="font-bold"> International Relations</span>, I decided
          that I wanted to try something new. I've always been interested in
          programming, but I used to think it required a lot of complex
          mathematical knowledge. When I realized that's not true at all, I
          decided to give it a try and learn{" "}
          <span className="font-bold">front-end development</span>.{" "}
          <span className="italic">My favorite part about programming</span> is
          that you can create something, and it can be whatever you want. I like
          to follow the latest tools like
          <span className="font-bold">
            {" "}
            React, Vite, TypeScript, TailwindCSS, and others
          </span>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default About;
