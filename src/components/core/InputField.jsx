import PropTypes from "prop-types";
import { forwardRef } from "react";
import { cn } from "../../utils";
import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";

const InputField = forwardRef(function InputField(
  { name, value, defaultValue, label, handleChange, id, ...rest },
  ref
) {
  const { theme } = useTheme();
  const { className, ...otherProps } = rest;

  return (
    <div className={label && "space-x-2"}>
      {label && (
        <label
          className={cn(
            "text-sm font-medium text-gray-700",
            theme === THEME_OPTIONS.DARK_MODE && "text-white"
          )}
          htmlFor={id ?? name}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={cn(
          "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          theme === THEME_OPTIONS.DARK_MODE &&
            "border-blue-900 bg-slate-700 text-white focus:border-sky-900 focus:ring-sky-900",
          className
        )}
        ref={ref}
        {...otherProps}
      />
    </div>
  );
});

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
};

export default InputField;
