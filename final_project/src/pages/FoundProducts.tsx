import { RootState } from "@/app/rootReducer";
import ErrorMessage from "@/components/common/ErrorMessage";
import NoProducts from "@/components/common/NoProducts";
import CardSkeleton from "@/features/cards/commonCard/CardSkeleton";
import CommonCard from "@/features/cards/commonCard/CommonCard";
import { mOpacity } from "@/utils/motionSettings";
import { nanoid } from "@reduxjs/toolkit";
import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";

const FoundProducts = () => {
  const { inputValue, products, loading, error } = useSelector(
    (state: RootState) => state.searchProducts,
  );

  return (
    <section className="min-h-[70vh] border-y">
      {error && <ErrorMessage error={error} />}
      {products && inputValue.length > 0 && products?.length > 0 ? (
        <div className="container py-6 md:py-12">
          {inputValue.length > 0 && (
            <h2 className="mb-10 text-3xl font-semibold">
              Results for: "{inputValue}"
            </h2>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-home gap-4">
            {loading &&
              "qwerty".split("").map((char) => <CardSkeleton key={char} />)}

            {!loading &&
              !error &&
              products?.map((product) => (
                <m.div {...mOpacity} key={nanoid()}>
                  <CommonCard {...product} />
                </m.div>
              ))}
          </div>
        </div>
      ) : (
        <NoProducts />
      )}
    </section>
  );
};

export default FoundProducts;
