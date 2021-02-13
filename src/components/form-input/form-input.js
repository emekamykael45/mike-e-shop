import React from "react";

import "./form-input.scss";

const FormInput = ({
  name,
  label,
  type,
  placeholder,
  accept,
  value,
  inputRef,
  readOnly,
  error,
  errorMessage,
}) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      accept={accept}
      defaultValue={value}
      className="form-control"
      ref={inputRef}
      readOnly={readOnly ? true : false}
    />
    {error && <span>* {errorMessage}</span>}
  </div>
);

export default FormInput;
