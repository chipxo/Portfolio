import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { ThemeProvider } from "@/features/theme/themeSlice";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "./store";
import { RootState } from "./rootReducer";
import { useSelector } from "react-redux";
import fetchCurWeath from "@/hooks/fetchCurWeath";
import { Button } from "@/components/ui/button";
import { setSity } from "@/features/curWeath/curWeathSlice";
import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CurWeath from "@/features/curWeath/CurWeath";

{
  /* {import.meta.env.VITE_API_KEY} */
}

const App = () => {
  const dispatch = useAppDispatch();

  const { weather, city, loading, error } = useSelector(
    (state: RootState) => state.curWeath,
  );

  const fetchWeather = () => {
    dispatch(fetchCurWeath(city as string));
    console.log(city);

    if (weather) {
      dispatch(setSity(city));
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container gap-x-4 space-y-4 py-6">
        <div className="grid grid-cols-[0.01fr_1fr_0.2fr] gap-x-4 rounded-md border p-2">
          <ThemeToggle />

          <Input
            placeholder="Enter your sity..."
            value={city}
            onChange={(e) => dispatch(setSity(e.target.value))}
          />

          <Button onClick={fetchWeather}>search</Button>
        </div>
        {!loading && !error && <CurWeath />}
      </div>
    </ThemeProvider>
  );
};

export default App;
