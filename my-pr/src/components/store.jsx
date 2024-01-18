import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/cardSlice";
import colorReducer from "./color/colorSlice";
import usersReducer from "./users/usersSlice";
import productsReducer from "./fakeStore/storeSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    colorPicker: colorReducer,
    users: usersReducer,
    fakeStore: productsReducer,
  },
});
