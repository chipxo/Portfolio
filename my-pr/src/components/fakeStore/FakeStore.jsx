import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "./storeSlice";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";

const FakeStore = () => {
  const [more, setMore] = useState(false);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.fakeStore);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="relative">
      <div className="container">
        <ThemeSwitcher />
        {loading && (
          <div className="grid h-screen place-items-center">
            <span className="loading loading-dots loading-lg scale-125 text-blue-600" />
          </div>
        )}
        <div className="grid grid-cols-2 justify-items-center gap-4 xl:grid-cols-3">
          {error && <h2>Error: {error}</h2>}
          {!loading &&
            !error &&
            products.map(
              ({ category, description, id, image, price, rating, title }) => (
                <div key={id} className="card bg-base-100 w-full shadow-2xl">
                  <figure>
                    <img
                      src={image}
                      className="h-80 w-full bg-white object-contain p-4"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions">
                      <div className="badge badge-outline">{category}</div>
                    </div>
                    <h2 className="card-title gap-8">
                      {title}
                      <div className="badge badge-secondary">{rating.rate}</div>
                    </h2>
                    <p className="h-fit">
                      {description[0].toUpperCase() + description.slice(1, 150)}
                      ...
                    </p>
                    <Button
                      text={`Show ${more ? "less" : "more"}`}
                      onClick={() => setMore(!more)}
                    />
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{price}</div>
                    </div>
                  </div>
                </div>
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default FakeStore;
