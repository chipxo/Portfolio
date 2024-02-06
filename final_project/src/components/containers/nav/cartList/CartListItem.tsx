import { ProductType } from "@/types/types";
import React from "react";

const CartListItem: React.FC<ProductType> = ({ id, images, title, price }) => {
  return (
    <div key={id} className="grid grid-cols-[50px_1fr] items-center gap-x-8">
      <div className="h-16 w-16">
        <img
          src={images?.[0]}
          alt={title}
          className="rounded-sm object-contain"
        />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default CartListItem;
