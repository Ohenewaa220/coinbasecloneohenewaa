function Card({ children, className = "", padding = "p-6", ...props }) {
  return (
    <div 
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
