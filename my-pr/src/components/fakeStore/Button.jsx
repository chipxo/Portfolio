import React from "react";

const Button = ({ onClick, text, color }) => {
  return (
    <div className="">
      <button
        className={`btn btn-${color} btn-outline hover:btn-${color}-content`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
