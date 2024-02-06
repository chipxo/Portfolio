import { RootState } from "@/app/rootReducer.tsx";
import { useAppDispatch } from "@/app/store.tsx";
import ErrorMessage from "@/components/common/ErrorMessage.tsx";
import NoProducts from "@/components/common/NoProducts";
import CardSkeleton from "@/features/cards/commonCard/CardSkeleton";
import CommonCard from "@/features/cards/commonCard/CommonCard";
import CategoriesLayout from "@/features/categories/CategoriesLayout.tsx";
import FilterCategories from "@/features/categories/FilterCategories.tsx";
import { fetchCategoryProducts } from "@/hooks/fetchCategoryProducts.tsx";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setHighestPr,
  setLowestPr,
} from "./categoryFilteredProducts/filteredProductsSlice";

const CategoryProducts = () => {
  const dispatch = useAppDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.categoryProducts,
  );

  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchCategoryProducts(`${categoryId}`));
  }, [dispatch, categoryId]);

  return (
    <>
      {loading && (
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-home">
          {"qwer".split("").map((_) => (
            <CardSkeleton key={nanoid()} />
          ))}
        </div>
      )}
      <section>
        <div className="container min-h-[70vh] py-10">
          {error && <ErrorMessage error={error} />}
          <CategoriesLayout />
          <FilterCategories />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-home">
            {!loading && !error && products && products.length > 0 ? (
              products.map((product) => (
                <CommonCard key={nanoid()} {...product} />
              ))
            ) : (
              <NoProducts />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
