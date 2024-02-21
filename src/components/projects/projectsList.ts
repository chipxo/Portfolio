import {
  CssIcon,
  FirebaseIcon,
  FrMotionIcon,
  GitHubIcon,
  HTMLIcon,
  JqueryIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  ShadcnIcon,
  TailwindIcon,
  TsIcon,
  ViteIcon,
} from "../icons/icons";
import solisScreen from "@/assets/solisScreen.jpg";
import monticelloScreen from "@/assets/monticelloScreen.jpg";
import vivoScreen from "@/assets/vivoScreen.jpg";
import webDrumsScreen from "@/assets/webDrumsScreen.jpg";
import simonGameScreen from "@/assets/simonGameScreen.jpg";

const projectsList = [
  {
    id: 0,
    name: "Solis landing page",
    technologies: [HTMLIcon, ScssIcon, JsIcon, GitHubIcon],
    screen: solisScreen,
    src: "https://solic1234.web.app/",
  },
  {
    id: 1,
    name: "Web drums",
    technologies: [HTMLIcon, CssIcon, JsIcon, GitHubIcon],
    screen: webDrumsScreen,
    src: "https://web-drums.web.app/",
  },
  {
    id: 2,
    name: "Simon game",
    technologies: [HTMLIcon, CssIcon, JsIcon, JqueryIcon, GitHubIcon],
    screen: simonGameScreen,
    src: "https://simon-game-cd90a.web.app/",
  },
  {
    id: 3,
    name: "Monticello landing page",
    technologies: [ReactIcon, ViteIcon, TailwindIcon, GitHubIcon],
    screen: monticelloScreen,
    src: "https://monticello-7d745.web.app/",
  },
  {
    id: 4,
    name: "Vivo E-Commerce website",
    technologies: [
      ReactIcon,
      ViteIcon,
      TailwindIcon,
      ReduxIcon,
      TsIcon,
      FirebaseIcon,
      FrMotionIcon,
      ShadcnIcon,
      GitHubIcon,
    ],
    screen: vivoScreen,
    src: "https://vivo-1b48c.web.app/",
  },
];

export default projectsList;
