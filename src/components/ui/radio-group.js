export function RadioGroup({ children, ...props }) {
    return <div {...props}>{children}</div>;
  }
  
  export function RadioGroupItem({ value, id, ...props }) {
    return (
      <div>
        <input type="radio" id={id} name="radio-group" value={value} {...props} />
        <label htmlFor={id}>{value}</label>
      </div>
    );
  }
  