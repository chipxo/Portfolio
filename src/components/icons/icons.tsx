import { BiLogoTypescript, BiLogoJquery } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import frMotionLogo from "@/assets/frMotionLogo.svg";
import shadcnLogo from "@/assets/shadcnLogo.png";
import { IoLogoCss3 } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../ui/button";
import { twJoin } from "tailwind-merge";

export const FirebaseIcon = (
  <IoLogoFirebase className="text-2xl text-yellow-400 sm:text-3xl" />
);

export const TsIcon = (
  <BiLogoTypescript className="text-2xl text-blue-500 sm:text-4xl" />
);

export const ReduxIcon = (
  <TbBrandRedux className="text-2xl text-violet-700 sm:text-4xl" />
);

export const TailwindIcon = (
  <SiTailwindcss className="text-2xl text-sky-500 sm:text-4xl" />
);

export const ScssIcon = (
  <SiSass className="text-2xl text-pink-400 sm:text-3xl" />
);

export const ReactIcon = (
  <img src={reactLogo} alt="React Logo" className="w-6 sm:w-8" />
);

export const ViteIcon = (
  <img src={viteLogo} alt="Vite Logo" className="w-6 sm:w-8" />
);

export const FrMotionIcon = (
  <img src={frMotionLogo} alt="Framer Motion Logo" className="w-6 sm:w-7" />
);

export const HTMLIcon = (
  <IoLogoHtml5 className="text-2xl text-orange-600 sm:text-4xl" />
);

export const JsIcon = (
  <IoLogoJavascript className="text-2xl text-yellow-400 sm:text-4xl" />
);

export const CssIcon = (
  <IoLogoCss3 className="text-2xl text-blue-500 sm:text-4xl" />
);

export const JqueryIcon = (
  <BiLogoJquery className="text-2xl text-sky-400 sm:text-3xl" />
);

export const ShadcnIcon = (
  <img
    src={shadcnLogo}
    alt="Shadcn Logo"
    className="w-6 rounded-md object-cover sm:w-8"
  />
);

export const ArrowDown = (
  <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
);

export const ArrowRight = (
  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
);

export const GitHubIcon = (
  <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-3xl" />
);

export const LinkedinIcon = (
  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
);

export const MenuIcon = (
  <FontAwesomeIcon
    icon={faBars}
    className="text-2xl font-extrabold text-primary"
  />
);

export const LinkedinButton = ({ isHome = false }) => (
  <Button
    variant="ghost"
    size="icon"
    className={twJoin("text-2xl", isHome && "max-md:hidden")}
  >
    <a
      className="inline-flex items-center justify-center"
      href="https://www.linkedin.com/in/serhii-chyipesh-b57488275/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </Button>
);

export const GitHubButton = ({ isHome = false }) => (
  <Button
    variant="ghost"
    size="icon"
    className={twJoin("rounded-full text-2xl", isHome && "max-md:hidden")}
  >
    <a
      className="inline-flex items-center justify-center"
      href="https://github.com/chipxo"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </Button>
);
