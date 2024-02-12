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
        avatar:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcentrechurch.org%2Fabout%2Fimg-person-placeholder%2F&psig=AOvVaw0EHIXNpmsv8kXHkTdh6NRn&ust=1707819833135000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKD78-XKpYQDFQAAAAAdAAAAABAE",
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
