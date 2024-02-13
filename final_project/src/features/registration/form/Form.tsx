import { RootState } from "@/app/rootReducer.tsx";
import { useAppDispatch } from "@/app/store.tsx";
import { showPasswordIcon } from "@/components/common/icons.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { setAlertText, showAlert } from "@/features/alert/alertSlice.tsx";
import {
  setRegistered,
  setSignedIn,
  showForm,
} from "@/features/registration/registerSlice.tsx";
import { mOpacity } from "@/utils/motionSettings.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { twJoin } from "tailwind-merge";
import { z } from "zod";
import FormHeader from "./FormHeader";
import signIn from "@/hooks/signIn";
import registerUser from "@/hooks/registerUser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  handleGoogleSignIn,
} from "@/features/registration/form/firebase";
import { FirebaseError } from "firebase/app";

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .optional(),
  email: z
    .string()
    .min(4, { message: "Email must be at least 4 characters" })
    .email({ message: "Must be a valid email" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type TSignUpSchema = z.infer<typeof signUpSchema>;

const Form = () => {
  const dispatch = useAppDispatch();

  const { alreadyRegistered } = useSelector(
    (state: RootState) => state.register,
  );

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = async ({
    name,
    email,
    password,
  }) => {
    try {
      if (alreadyRegistered) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        console.log(user);

        dispatch(showForm(false));
        dispatch(setSignedIn(true));
        dispatch(setAlertText("You successfully signed in!"));
        dispatch(showAlert(true));
        localStorage.setItem("signedIn", "true");
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        console.log(user);

        dispatch(setRegistered(true));
        dispatch(setAlertText("You successfully registered!"));
        dispatch(showAlert(true));
        dispatch(showForm(false));
        localStorage.setItem("userName", `${name}`);
      }
    } catch (e) {
      const error = e as FirebaseError;
      console.log(error);

      if (error.message.includes("email-already-in-use")) {
        dispatch(setAlertText("Email is already in use, try again!"));
        dispatch(showAlert(true));
        reset();
      } else if (error.message.includes("invalid-credential")) {
        dispatch(
          setAlertText("Email isn't registeres or wrong password, try again!"),
        );
        dispatch(showAlert(true));
        reset();
      } else {
        dispatch(setAlertText("Authentication error, try again!"));
        dispatch(showAlert(true));
        reset();
      }
    }
  };

  return (
    <m.div
      {...mOpacity}
      className="fixed inset-0 z-[200] grid items-center bg-black/70 px-4"
    >
      <div className="relative left-1/2 -translate-x-1/2 rounded-md bg-background max-md:container md:max-w-[45vw] xl:max-w-[35vw]">
        <FormHeader reset={reset} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-14 border-b px-6 py-8">
            {!alreadyRegistered && (
              <label htmlFor="name" className="relative">
                <span className="absolute -top-6 text-sm opacity-60">Name</span>
                <Input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  className={twJoin(
                    "w-full rounded-md border bg-transparent p-2",
                    errors.name ? "border-red-600" : "border-neutral",
                  )}
                />
                {errors.name && (
                  <p className="absolute top-11 text-red-600">{`${errors.name.message}`}</p>
                )}
              </label>
            )}
            <label htmlFor="email" className="relative">
              <span className="absolute -top-6 text-sm opacity-60">Email</span>
              <Input
                {...register("email")}
                type="text"
                name="email"
                id="email"
                className={twJoin(
                  "w-full rounded-md border bg-transparent p-2",
                  errors.email ? "border-red-600" : "border-neutral",
                )}
              />
              {errors.email && (
                <p className="absolute top-11 text-red-600">{`${errors.email.message}`}</p>
              )}
            </label>
            <label htmlFor="password" className="relative">
              <span className="absolute -top-6 text-sm opacity-60">
                Password
              </span>
              <Input
                {...register("password")}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                id="password"
                className={twJoin(
                  "w-full rounded-md border bg-transparent p-2",
                  errors.password ? "border-red-600" : "border-neutral",
                )}
              />

              {/* Icon to show/hide password  */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={twJoin(
                  "absolute right-2 top-2 cursor-pointer",
                  !showPassword &&
                    "before:bg-base-300 opacity-30 before:absolute before:top-[10px] before:h-[2px] before:w-5 before:-rotate-45",
                )}
              >
                {showPasswordIcon}
              </span>
              {errors.password && (
                <p className="absolute top-11 text-red-600">{`${errors.password.message}`}</p>
              )}
            </label>
          </div>
          <div className="grid gap-4 px-6 py-4 text-sm">
            {/* Submitting button */}
            <Button>{alreadyRegistered ? "Sign in" : "Register"}</Button>
            <Button
              type="button"
              onClick={() => handleGoogleSignIn(dispatch)}
              className="bg-google"
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </m.div>
  );
};

export default Form;
