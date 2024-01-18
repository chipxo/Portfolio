import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
const StoreCard = ({ category, description, image, price, rating, title }) => {
  const [more, setMore] = useState(false);
  const randomNum = Math.floor(Math.random() * 50);
  return (
    <div className="card w-full bg-base-100 shadow-2xl">
      <figure>
        <img
          src={image}
          className="h-80 w-full bg-white object-contain p-4"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <div className="badge badge-outline border-primary p-3">
            {category}
          </div>
        </div>
        <h2 className="card-title gap-8">
          {title}
          <div className="badge badge-secondary">{rating.rate}</div>
        </h2>
        <p className="h-fit">
          {description.length < 150
            ? description
            : more
              ? description
              : description[0].toUpperCase() +
                description.slice(1, 150) +
                "..."}
        </p>
        <div className="flex items-center justify-between">
          {description.length > 150 && (
            <Button
              text={`Show ${more ? "less" : "more"}`}
              onClick={() => setMore(!more)}
              color={"primary"}
            />
          )}
          <Button text="Add to shopping cart" color={"accent"} />
        </div>
        <div className="card-actions mt-2">
          <div className="badge badge-outline border-neutral p-3 opacity-60">
            <span className="line-through">
              ${Math.floor(price + price / randomNum)}
            </span>
          </div>
          <div className="badge badge-outline border-secondary p-3">
            ${price}
          </div>
          <div className="badge badge-outline ml-auto border-accent p-3">
            <FontAwesomeIcon className="mr-2" icon={faUser} /> {rating.count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
