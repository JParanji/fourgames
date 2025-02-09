export function Card({ children }) {
    return <div className="border rounded-lg shadow p-4">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="font-bold text-lg">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  }
  