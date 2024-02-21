import { GitHubIcon, ShadcnIcon } from "./../icons/icons";
import {
  FirebaseIcon,
  ReduxIcon,
  ScssIcon,
  TailwindIcon,
  TsIcon,
  ReactIcon,
  ViteIcon,
  FrMotionIcon,
} from "../icons/icons";

const skillsList = [
  {
    id: 1,
    text: "React",
    icon: ReactIcon,
    className: "drop-shadow-ReactIcon",
  },
  {
    id: 2,
    text: "Vite",
    icon: ViteIcon,
    className: "drop-shadow-ViteIcon",
  },
  {
    id: 3,
    text: "Redux",
    icon: ReduxIcon,
    className: "drop-shadow-ReduxIcon",
  },
  { id: 4, text: "TypeScript", icon: TsIcon, className: "drop-shadow-TsIcon" },
  {
    id: 5,
    text: "TailwindCSS",
    icon: TailwindIcon,
    className: "drop-shadow-TailwindIcon",
  },
  {
    id: 6,
    text: "SCSS",
    icon: ScssIcon,
    className: "drop-shadow-ScssIcon",
  },
  {
    id: 7,
    text: "Firebase",
    icon: FirebaseIcon,
    className: "drop-shadow-FirebaseIcon",
  },
  {
    id: 8,
    text: "Framer Motion",
    icon: FrMotionIcon,
    className: "drop-shadow-FrMotionIcon",
  },
  {
    id: 9,
    text: "Shadcn/ui",
    icon: ShadcnIcon,
    className: "drop-shadow-2xl",
  },
  {
    id: 10,
    text: "GitHub",
    icon: GitHubIcon,
    className: "drop-shadow-2xl",
  },
  // {
  //   text: "RestAPI",
  //   icon: "Rest API",
  //   className: "drop-shadow-RestAPI text-secondary text-2xl font-extrabold",
  // },
];

// const skillsList = [
//   ReactIcon,
//   ViteIcon,
//   ReduxIcon,
//   TsIcon,
//   TailwindIcon,
//   ScssIcon,
//   FirebaseIcon,
//   "RestAPI",
// ];

export default skillsList;
