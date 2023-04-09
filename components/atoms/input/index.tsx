import React from "react";

interface InputProps {
  label: string;
}
const InputForm = (props: InputProps) => {
  const { label, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder={`Enter your ${label}`}
        {...nativeProps} //behaviour dari sebuah input
      />
    </>
  );
};

export default InputForm;
