import { Link } from "react-router-dom";

function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  to, 
  onClick, 
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
