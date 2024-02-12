import { RootState } from "@/app/rootReducer.tsx";
import { useSelector } from "react-redux";

const PanelTitle = () => {
  // const { userData } = useSelector((state: RootState) => state.register);
  // {userData?.name}
  return <h2 className="text-lg md:text-xl">Hi, </h2>;
};

export default PanelTitle;
