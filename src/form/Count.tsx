import React from "react";
interface IProps{
	header: string;
	plus: () => void
	minus: () => void
}
export const Count = ({header, plus, minus}: IProps) => {
  return (
    <div>
      <p>{header}</p>
      <button
        onClick={plus}
      >
        +
      </button>
      <button
        onClick={minus}
      >
        -
      </button>
    </div>
  );
};
