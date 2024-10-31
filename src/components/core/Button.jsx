import PropTypes from "prop-types";
import { cn } from "../../utils/index";

const Button = ({ label, children, handleClick, ...rest }) => {
  const { className, type, ...otherProps } = rest;

  return (
    <button
      onClick={handleClick}
      type={type || "button"}
      className={cn(
        "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md",
        className,
        type === "submit" &&
          "hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed",
        type === "reset" &&
          "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
      )}
      {...otherProps}
    >
      {label || children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

export default Button;
