import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { mOpacity } from "@/utils/motionSettings";
import { AnimatePresence, motion as m } from "framer-motion";
import { useSelector } from "react-redux";
import { showForm, showUserPanel } from "../registerSlice";
import { cartUser } from "@/components/common/icons";
import { useEffect, useState } from "react";

const UserAvatar = () => {
  const dispatch = useAppDispatch();

  const { signedIn } = useSelector((state: RootState) => state.register);

  const [name, setName] = useState("");

  // useEffect(() => {
  //   setName(userData?.name.slice(0, 1).toUpperCase() as string);
  // }, [userData]);

  const handleUserClick = () => {
    document.body?.setAttribute("class", "overflow-hidden md:mr-[15px]");
    signedIn ? dispatch(showUserPanel(true)) : dispatch(showForm(true));
  };

  return (
    <AnimatePresence>
      {signedIn ? (
        <m.div {...mOpacity}>
          <Avatar onClick={handleUserClick} className="cursor-pointer">
            <AvatarFallback className="border-2 border-primary/60 bg-background">
              {name}
            </AvatarFallback>
          </Avatar>
        </m.div>
      ) : (
        <m.div {...mOpacity}>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleUserClick}
            className="relative z-[50] cursor-pointer"
          >
            {cartUser}
          </Button>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default UserAvatar;
