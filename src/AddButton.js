import React from "react";

export default function AddButton({ handleOnClick, title }) {
  return <button onClick={handleOnClick}>{title}</button>;
}
