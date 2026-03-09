import { forwardRef } from "react";

const Input = forwardRef(({ label, id, error, className = "", ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={`px-4 py-3 rounded-xl border ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-600 focus:ring-blue-600"
        } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-shadow`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
