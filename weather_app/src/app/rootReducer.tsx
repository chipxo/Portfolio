import { combineReducers } from "@reduxjs/toolkit";
import curWeathReducer from "@/features/curWeath/curWeathSlice";

const rootReducer = combineReducers({
  curWeath: curWeathReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
