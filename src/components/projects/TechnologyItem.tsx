import { motion } from "framer-motion";

type TechnologyItemProps = {
  technology: JSX.Element;
  i: number;
};

const TechnologyItem: React.FC<TechnologyItemProps> = ({ technology, i }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + i * 0.3 }}
    >
      {technology}
    </motion.div>
  );
};

export default TechnologyItem;
