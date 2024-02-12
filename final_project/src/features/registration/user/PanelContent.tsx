import React, { useState } from "react";
import PanelTitle from "./PanelTitle";
import { Button } from "@/components/ui/button";
import { motion as m, AnimatePresence } from "framer-motion";
import { mOpacity } from "@/utils/motionSettings";
import { useAppDispatch } from "@/app/store";
import { setSignedIn, showUserPanel } from "../registerSlice";

const PanelContent = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    document.body?.removeAttribute("class");
    dispatch(showUserPanel(false));

    setTimeout(() => {
      localStorage.removeItem("signedIn");
      dispatch(setSignedIn(false));
    }, 800);
  };

  const handleDeleteAcc = () => {
    dispatch(showUserPanel(false));

    setTimeout(() => {
      localStorage.removeItem("signedIn");
      localStorage.removeItem("userData");
      dispatch(setSignedIn(false));
    }, 800);
  };

  return (
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
  );
};

export default PanelContent;
