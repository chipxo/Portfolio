import { useAppDispatch } from "@/app/store.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  closeForm,
  closeUserPanel,
  setRegistered,
} from "@/features/registration/registerSlice.tsx";
import React from "react";

type BtnProps = {
  signIn?: boolean;
  text: string;
};

const BtnRegisSign: React.FC<BtnProps> = ({ signIn = false, text }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(closeUserPanel());
    dispatch(closeForm());

    setTimeout(() => {
      dispatch(setRegistered(signIn));
    }, 3000);
  };

  return (
    <Button onClick={handleClick} variant="outline">
      {text}
    </Button>
  );
};

export default BtnRegisSign;
