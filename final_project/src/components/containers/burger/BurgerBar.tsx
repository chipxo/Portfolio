import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { showUserPanel } from "@/features/registration/registerSlice";
import Form from "@/features/registration/form/Form";
import UserPannel from "@/features/registration/user/UserPanel";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Burger from "./Burger";

const BurgerBar = () => {
  const dispatch = useAppDispatch();
  const { openUserPanel, openForm } = useSelector(
    (state: RootState) => state.register,
  );

  return (
    <>
      <div onClick={() => dispatch(showUserPanel(true))}>
        <Burger />
      </div>
      <AnimatePresence>
        {openUserPanel && <UserPannel isBurger />}
      </AnimatePresence>
      <AnimatePresence>{openForm && <Form />}</AnimatePresence>
    </>
  );
};

export default BurgerBar;
