import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import signUpSchema, { TSignUpSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { twJoin } from "tailwind-merge";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const imp = import.meta.env;

  const SERVICE_ID = imp.VITE_SERVICE_ID;
  const TEMPLATE_ID = imp.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = imp.VITE_PUBLIC_KEY;

  const onSubmit: SubmitHandler<TSignUpSchema> = async ({
    user_name,
    user_email,
    message,
  }) => {
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current as HTMLFormElement,
        {
          publicKey: PUBLIC_KEY,
        },
      );
      console.log(`${user_name}, ${user_email}, ${message}`);
    } catch (e) {
      console.log(`Error in form: ${e}`);
    } finally {
      reset();
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-y-8 overflow-hidden sm:place-items-center"
    >
      <div className="grid gap-y-8 sm:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Label htmlFor="user_name" className="relative">
            <Input
              {...register("user_name")}
              name="user_name"
              type="text"
              placeholder="Your name"
              // "w-full rounded-md border bg-transparent p-2",
              className={twJoin(
                "bg-background",
                errors.user_name ? "border-red-600" : "border-neutral",
              )}
            />
            {errors.user_name && (
              <p className="absolute top-11 text-red-600">{`${errors.user_name.message}`}</p>
            )}
          </Label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Label htmlFor="user_email" className="relative">
            <Input
              {...register("user_email")}
              name="user_email"
              type="text"
              placeholder="Your email"
              // "w-full rounded-md border bg-transparent p-2",
              className={twJoin(
                "bg-background",
                errors.user_email ? "border-red-600" : "border-neutral",
              )}
            />
            {errors.user_email && (
              <p className="absolute top-11 text-red-600">{`${errors.user_email.message}`}</p>
            )}
          </Label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <Label htmlFor="message" className="relative">
            <Textarea
              {...register("message")}
              name="message"
              placeholder="Your message"
              className={twJoin(
                "relative bg-background",
                errors.message ? "border-red-600" : "border-neutral",
              )}
            />
            {errors.message && (
              <p className="absolute -bottom-6 text-red-600">{`${errors.message.message}`}</p>
            )}
          </Label>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6 }}
        className="sm:w-1/2"
      >
        <Button variant="default" className="w-full">
          Send
        </Button>
      </motion.div>{" "}
    </form>
  );
};

export default Form;
