import { SIGN_IN } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/types/types";
import axios from "axios";

const signIn = createAsyncThunk(
  "register/signIn",
  async ({ email, password }: User) => {
    try {
      const url = SIGN_IN;
      const userData = {
        email: email,
        password: password,
      };

      const { data } = await axios.post(url, userData, {
        headers: {
          "Content-type": "application/json",
        },
      });

      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
      } else {
        console.log(`Sign in failed: ${e}`);
      }
    }
  },
);

export default signIn;
