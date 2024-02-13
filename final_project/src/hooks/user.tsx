import { setAlertText } from "@/features/alert/alertSlice";
import { auth } from "@/features/registration/form/firebase";
import { setSignedIn, showForm } from "@/features/registration/registerSlice";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async ({ email, password, dispatch }) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);

    dispatch(setSignedIn(true));
    dispatch(showForm(false));
    dispatch(setAlertText("You successfully signed in!"));
    dispatch(showAlert(true));
    localStorage.setItem("signedIn", "true");
  },
  {
    const: { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ),
  };
