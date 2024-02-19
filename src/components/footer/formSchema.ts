import { z } from "zod";

const signUpSchema = z.object({
  user_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  user_email: z
    .string()
    .min(4, { message: "Email must be at least 4 characters" })
    .email({ message: "Must be a valid email" }),
  message: z.string().min(6, "Message must be at least 6 characters"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export default signUpSchema;
