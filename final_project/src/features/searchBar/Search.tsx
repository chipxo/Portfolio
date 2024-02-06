import { RootState } from "@/app/rootReducer.tsx";
import { useAppDispatch } from "@/app/store.tsx";
import { setInputValue } from "@/features/searchBar/searchSlice";
import { useSelector } from "react-redux";
import { fetchSearchProducts } from "@/hooks/fetchSearch";
import { mOpacity } from "@/utils/motionSettings";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchPage from "./searchPage/SearchPage";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";

const Search = () => {
  const dispatch = useAppDispatch();

  const { inputValue } = useSelector(
    (state: RootState) => state.searchProducts,
  );

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const inputElement = document.activeElement as HTMLElement;
      if (e.key === "Enter" && inputElement.getAttribute("name") === "search") {
        setOpen(false);
        navigate("/searchResults");
        inputElement.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const { products: searchProducts } = useSelector(
    (state: RootState) => state.searchProducts,
  );

  useEffect(() => {
    dispatch(fetchSearchProducts(inputValue));
  }, [dispatch, inputValue]);

  const handleChange = (value: string) => {
    setOpen(true);
    dispatch(setInputValue(value));
  };

  return (
    <div className="relative">
      <SearchInput
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />

      <AnimatePresence>{open && <SearchBtn />}</AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <m.div
              {...mOpacity}
              className="fixed inset-0 z-[99] h-screen w-screen bg-black/40"
              onClick={() => setOpen(false)}
            />
            <m.div
              {...mOpacity}
              style={{ x: "-50%" }}
              className="absolute left-1/2 top-11 z-[200] w-[140%] sm:w-[120%] md:w-full"
            >
              <SearchPage searchResults={searchProducts} />
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
