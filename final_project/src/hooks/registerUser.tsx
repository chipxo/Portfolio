import { CREATE_USER } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/types/types";
import axios from "axios";

const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ name, email, password }: User) => {
    try {
      const url = CREATE_USER;
      const userData = {
        name: name,
        email: email,
        password: password,
        avatar: "https://picsum.photos/800"
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

export default registerUser;
