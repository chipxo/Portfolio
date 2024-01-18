import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "./storeSlice";
import ThemeSwitcher from "./ThemeSwitcher";
import StoreCard from "./StoreCard";
import NavBar from "./NavBar";

const FakeStore = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.fakeStore);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="">
      <div className="container">
        <NavBar />
        {loading && (
          <div className="grid h-screen place-items-center">
            <span className="loading loading-dots loading-lg scale-125 text-blue-600" />
          </div>
        )}
        <div className="mt-14 grid grid-cols-2 justify-items-center gap-14 xl:grid-cols-3">
          {error && <h2>Error: {error}</h2>}
          {!loading &&
            !error &&
            products.map(
              ({ category, description, id, image, price, rating, title }) => (
                <StoreCard
                  key={id}
                  category={category}
                  description={description}
                  id={id}
                  image={image}
                  price={price}
                  rating={rating}
                  title={title}
                />
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default FakeStore;
