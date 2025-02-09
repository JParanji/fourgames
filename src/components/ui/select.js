export function Select({ children, ...props }) {
    return <select className="border px-2 py-1 rounded" {...props}>{children}</select>;
  }
  
  export function SelectContent({ children }) {
    return <>{children}</>;
  }
  
  export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
  }
  
  export function SelectTrigger({ children }) {
    return <div className="border px-2 py-1 rounded">{children}</div>;
  }
  
  export function SelectValue({ children }) {
    return <span>{children}</span>;
  }
  