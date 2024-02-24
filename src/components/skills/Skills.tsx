import { AnimatePresence } from "framer-motion";
import skillsList from "./skillsList";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="mx-auto mb-8 w-fit text-2xl">My Skills</h2>
      <div className="container grid grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))] items-center gap-2 px-12 lg:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
        <AnimatePresence>
          {skillsList.map((skill) => (
            <SkillItem key={skill.id} {...skill} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
