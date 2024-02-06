import { RootState } from "@/app/rootReducer.tsx";
import { useAppDispatch } from "@/app/store.tsx";
import Logo from "@/components/common/Logo.tsx";
import { closeIcon } from "@/components/common/icons.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  setSignedIn,
  setUserData,
  showUserPanel,
} from "@/features/registration/registerSlice.tsx";
import { ModeToggle } from "@/features/theme/mode-toggle.tsx";
import { mOpacity } from "@/utils/motionSettings.tsx";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form.tsx";
import PanelTitle from "./PanelTitle.tsx";
import BtnRegisSign from "./buttons/BtnRegisSign.tsx";

type UserPanelProps = {
  isBurger?: boolean;
};

const UserPannel: React.FC<UserPanelProps> = ({ isBurger = false }) => {
  const dispatch = useAppDispatch();
  const { userData, openForm, signedIn } = useSelector(
    (state: RootState) => state.register,
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString !== null) {
      const userDataFromStorage = JSON.parse(userDataString);
      dispatch(setUserData(userDataFromStorage));
    }
  }, [dispatch]);

  const handleSignOut = () => {
    localStorage.removeItem("signedIn");
    document.body?.removeAttribute("class");
    dispatch(showUserPanel(false));

    setTimeout(() => {
      dispatch(setSignedIn(false));
    }, 800);
  };

  const handleDeleteAcc = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem(`user-${userData?.email}`);
    localStorage.removeItem("signedIn");
    dispatch(showUserPanel(false));

    setTimeout(() => {
      dispatch(setSignedIn(false));
    }, 800);
  };

  const handleClosePanel = () => {
    document.body?.removeAttribute("class");
    dispatch(showUserPanel(false));
  };

  return (
    <m.div
      {...mOpacity}
      className="fixed inset-0 right-0 top-0 z-[999] grid bg-black/40"
    >
      <m.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative space-y-4 justify-self-end border-l bg-background bg-user-panel bg-cover bg-center bg-no-repeat p-4 max-sm:w-[72vw] md:w-[40vw] md:p-6 lg:w-[34vw]"
      >
        <nav className="top-4 grid grid-cols-[1fr_0.4fr] border-b pb-4 max-sm:mb-4 max-sm:border-b max-sm:pb-4 md:left-8 md:top-6">
          <ul className="grid cursor-pointer place-items-center gap-x-4 justify-self-start text-xl max-md:grid-cols-2">
            <li onClick={handleClosePanel}>
              <Button variant="ghost" className="text-xl">
                {closeIcon}
              </Button>
            </li>
            <li className="scale-110 md:hidden">
              <ModeToggle />
            </li>
          </ul>
          <div className="hidden justify-self-end pr-4 sm:block">
            <Logo />
          </div>
        </nav>
        {signedIn && (
          <div className="grid w-full gap-y-4 text-end">
            <PanelTitle />
            <div className="grid w-full gap-x-3 border-t pt-6 max-sm:gap-y-3 sm:grid-cols-2 md:gap-x-6 lg:gap-x-12">
              <Button onClick={handleSignOut} variant="outline">
                Sign out
              </Button>
              <Button onClick={() => setOpen(!open)} variant="default">
                Delete account
              </Button>

              <AnimatePresence>
                {open && (
                  <m.div
                    {...mOpacity}
                    className="col-span-2 mt-5 text-center text-lg"
                  >
                    <h2>Are you sure?</h2>
                    <div className="mt-4 grid grid-cols-2 gap-x-16">
                      <Button onClick={handleDeleteAcc} variant="default">
                        Yes
                      </Button>
                      <Button onClick={() => setOpen(!open)} variant="outline">
                        No
                      </Button>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
        {isBurger && (
          <>
            {!signedIn && (
              <div className="space-y-4">
                <h2 className="max-sm:text-md ml-6 text-end">
                  Sign in or register to acces private cabinet
                </h2>
                <div className="border-neutral grid gap-x-6 gap-y-1 border-t pt-4 sm:grid-cols-[1fr_0.1fr_1fr]">
                  <BtnRegisSign text="Sign in" signIn />
                  <h2 className="place-self-center max-sm:text-sm">or</h2>
                  <BtnRegisSign text="Register" />
                </div>
              </div>
            )}
            <AnimatePresence>
              {openForm && (
                <div>
                  <Form />
                </div>
              )}
            </AnimatePresence>
          </>
        )}
      </m.div>
    </m.div>
  );
};

export default UserPannel;
