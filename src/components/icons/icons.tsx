import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import frMotionLogo from "@/assets/frMotionLogo.svg";

export const FirebaseIcon = (
  <IoLogoFirebase className="text-3xl text-yellow-400" />
);

export const TsIcon = <BiLogoTypescript className="text-4xl text-blue-500" />;

export const ReduxIcon = <TbBrandRedux className="text-4xl text-violet-700" />;

export const TailwindIcon = <SiTailwindcss className="text-4xl text-sky-500" />;

export const ScssIcon = <SiSass className="text-3xl text-pink-400" />;

export const ReactIcon = <img src={reactLogo} alt="React Logo" />;

export const ViteIcon = <img src={viteLogo} alt="Vite Logo" />;

export const FrMotionIcon = <img src={frMotionLogo} alt="Framer Motion Logo" />;
