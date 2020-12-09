import React from "react";

export const Header = () => {
  let a = [1, 2, 3];
  return (
    <>
      <h1>header works</h1>
      <ul>
        {a.map((a) => {
          return <li>{a}</li>;
        })}
      </ul>
    </>
  );
};
