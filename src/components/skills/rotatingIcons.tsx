import {
  FirebaseIcon,
  ReduxIcon,
  ScssIcon,
  TailwindIcon,
  TsIcon,
  reactIcon,
  viteIcon,
} from "../icons/icons";
import { motion } from "framer-motion";

const rotatingIcons = () => {
  return (
    <motion.div
      id="iconsContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
      className="mx-auto grid w-fit place-items-center gap-x-52 gap-y-4 py-8"
    >
      <div id="ReduxIcon" className="col-span-2">
        {ReduxIcon}
      </div>
      <div id="viteIcon">{viteIcon}</div>
      <div id="TsIcon" className="">
        {TsIcon}
      </div>
      <div id="reactIcon" className="col-span-2 my-8 scale-[1.3]">
        {reactIcon}
      </div>
      <div id="TailwindIcon">{TailwindIcon}</div>
      <div id="ScssIcon" className="">
        {ScssIcon}
      </div>
      <div id="FirebaseIcon" className="col-span-2">
        {FirebaseIcon}
      </div>
    </motion.div>
  );
};

export default rotatingIcons;
