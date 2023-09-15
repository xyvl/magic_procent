import React from "react";
interface IProps {
  value: string | number;
  fun: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export const Input = ({ value, fun, placeholder }: IProps) => {
  return (
    <input
      type="number"
      onChange={fun}
      value={value}
      placeholder={placeholder}
    />
  );
};
