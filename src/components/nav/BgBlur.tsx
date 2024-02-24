import { motion } from "framer-motion";

const BgBlur = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="fixed inset-0 -z-10 h-screen backdrop-blur-lg sm:hidden"
    />
  );
};

export default BgBlur;
