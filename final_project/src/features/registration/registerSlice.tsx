import register from "@/hooks/registerUser";
import signIn from "@/hooks/signIn";
import { User } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Error = {
  message: string;
  statusCode: number;
};

type InitialState = {
  alreadyRegistered: boolean;
  signedIn: boolean;
  openForm: boolean;
  openUserPanel: boolean;
  data: User | null;
  loading: boolean;
  error: {} | Error | null;
};

const initialState: InitialState = {
  alreadyRegistered: true,
  signedIn: false,
  openForm: false,
  openUserPanel: false,
  data: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegistered: (state, action: PayloadAction<boolean>) => {
      state.alreadyRegistered = action.payload;
    },
    setSignedIn: (state, action: PayloadAction<boolean>) => {
      state.signedIn = action.payload;
    },
    showForm: (state, action: PayloadAction<boolean>) => {
      state.openForm = action.payload;
    },
    showUserPanel: (state, action: PayloadAction<boolean>) => {
      state.openUserPanel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.data = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload ?? "Fetch failed";
        state.loading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = action.payload === undefined && true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = (action.payload as Error) ?? "Fetch failed";
        state.loading = false;
      });
  },
});

export const { setRegistered, setSignedIn, showForm, showUserPanel } =
  registerSlice.actions;

export default registerSlice.reducer;
