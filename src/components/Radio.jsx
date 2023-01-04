import { useId } from "react";

const Radio = ({ label, value, onChange, options, error }) => {
  const id = useId();
  return (
    <div className="input-container">
      <p>{label}*</p>
      <div style={{display: "flex",}}>
      {options.map((item,index) => {
        return (
          <div key={id+index} style={{marginRight: "1rem"}}>
            <input
              id={id+index}
              type="radio"
              value={item}
              name={label}
              onChange={onChange}
            />
            <label htmlFor={id+index}>{item}</label>
          </div>  
        );
      })}
      </div>
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default Radio;
