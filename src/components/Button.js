import React from "react";

function Button(props) {
  return (
    <button className="px-4 py-2 font-semibold text-white bg-misty-red rounded hover:bg-red-500">
      {props.children}
    </button>
  );
}

export default Button;
