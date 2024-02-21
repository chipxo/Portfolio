import { motion } from "framer-motion";
import React from "react";

type SkillItemProps = {
  className?: string;
  icon: JSX.Element;
  text: string;
  id: number;
};

const SkillItem: React.FC<SkillItemProps> = ({ icon, text, id }) => {
  return (
    <motion.div
      initial={{ x: -20 * id, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + id * 0.1 }}
      className="grid h-full w-full place-items-center gap-2 rounded-md border px-4 py-2 text-center shadow-md lg:py-3"
    >
      <div>{icon}</div>
      {/* className={className} */}
      <p className="text-lg lg:font-semibold">{text}</p>
    </motion.div>
  );
};

export default SkillItem;
