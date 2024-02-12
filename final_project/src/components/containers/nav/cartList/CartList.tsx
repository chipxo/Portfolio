import { RootState } from "@/app/rootReducer.tsx";
import { useAppDispatch } from "@/app/store.tsx";
import ErrorMessage from "@/components/common/ErrorMessage";
import { setAmount } from "@/features/amount/amountSlice";
import { fetchProducts } from "@/hooks/fetchProducts";
import { ProductType } from "@/types/types";
import { mFLoatMenu } from "@/utils/motionSettings";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartListItem from "./CartListItem";
import CartListSkeleton from "./CartListSkeleton";
import ToShoppingCart from "./ToShoppingCart";
import NoItemsAdded from "./NoItemsAdded";
import AmountBadge from "./AmountBadge";
import { nanoid } from "@reduxjs/toolkit";

type ShoppingCartItemProps = {
  isBurger?: boolean;
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  isBurger = false,
}) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { amount } = useSelector((state: RootState) => state.amount);

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const localStorageKeys = Object.keys(localStorage);

  const items = localStorageKeys.map((itemId) => {
    const myCards = products?.find(
      (product) => product.id === parseFloat(itemId),
    );

    return myCards as ProductType;
  });

  useEffect(() => {
    dispatch(fetchProducts());

    const allKeys = Object.keys(localStorage);

    const numberKeys = allKeys.filter((key) => !isNaN(Number(key)));

    dispatch(setAmount(numberKeys.length));
  }, [dispatch]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      <AmountBadge />
      <AnimatePresence>
        {open && !isBurger && amount ? (
          <m.div
            {...mFLoatMenu}
            style={{ x: "-65%" }}
            className="absolute -left-1/2 top-12"
          >
            <div className="absolute -top-5 h-8 w-full bg-transparent" />
            <div className="grid max-h-[44vh] w-max cursor-pointer gap-y-4 overflow-auto rounded-md border bg-background p-4 max-sm:max-w-[80vw]">
              {amount > 0 && <ToShoppingCart onClick={() => setOpen(false)} />}

              {loading && <CartListSkeleton />}
              {error && <ErrorMessage error={error} />}

              {!loading &&
                !error &&
                items?.map(
                  (item) => !!item && <CartListItem key={nanoid()} {...item} />,
                )}
            </div>
          </m.div>
        ) : (
          open && !isBurger && <NoItemsAdded />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShoppingCartItem;
