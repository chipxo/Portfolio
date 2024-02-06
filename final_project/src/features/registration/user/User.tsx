import { RootState } from "@/app/rootReducer.tsx";
import AlertModal from "@/features/alert/AlerModal.tsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "../form/Form.tsx";
import UserPannel from "./UserPanel.tsx";
import UserAvatar from "./UserAvatar.tsx";

const User = () => {
  const { signedIn, openForm, userData, openUserPanel } = useSelector(
    (state: RootState) => state.register,
  );

  const [name, setName] = useState("");

  useEffect(() => {
    setName(userData?.name.slice(0, 1).toUpperCase() as string);
  }, [userData]);

  return (
    <>
      <AnimatePresence>
        <UserAvatar name={name} />
      </AnimatePresence>

      <div className="fixed left-1/2 top-20 z-[999] -translate-x-1/2">
        <AlertModal />
      </div>
      <AnimatePresence>
        {openUserPanel && signedIn ? <UserPannel /> : openForm && <Form />}
      </AnimatePresence>
    </>
  );
};

export default User;
