import reactIcon from "@/assets/react.svg";
import { ConfigProp } from "particles-bg";

const particleConfig: ConfigProp = {
  num: [3, 8],
  rps: 0.1,
  radius: [5, 30],
  life: [1.5, 3],
  v: [2, 3],
  tha: [180, 180],
  alpha: [0.6, 0],
  scale: [0.1, 1],
  body: reactIcon,
  position: "all",
  color: ["random", "#ff0000"],
  cross: "dead",
  random: 5,
  g: 0,
};

export default particleConfig;
