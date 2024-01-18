import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <div className="mt-4">
      <button className="btn btn-active btn-primary" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
