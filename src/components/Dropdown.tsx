import { forwardRef } from "react";

interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange"
  > {
  label?: string;
  options: DropdownOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      value,
      onChange,
      className = "",
      containerClassName = "",
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
        )}
        <select
          ref={ref}
          value={value}
          onChange={handleChange}
          className={`
              block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900
              focus:border-blue-500 focus:ring-blue-500
              dark:border-gray-600 dark:bg-gray-700 dark:text-white
              dark:placeholder-gray-400 dark:focus:border-blue-500
              dark:focus:ring-blue-500
              ${error ? "border-red-500 dark:border-red-500" : ""}
              ${className}
            `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
