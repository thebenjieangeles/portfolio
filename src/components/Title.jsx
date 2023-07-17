import React from "react";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-5xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white pb-20 pt-20"
    >
      {children}
    </h1>
  );
}

export default Title;
