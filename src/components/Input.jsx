import { useId } from "react";

const Input = ({ type, label, value, onChange, error }) => {
  const id = useId();
  // autoComplete =
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}*</label>
      <input
        id={id}
        autoComplete={type}
        type={type}
        value={value}
        name={label}
        placeholder={label}
        onChange={onChange}
        required
      />
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default Input;
