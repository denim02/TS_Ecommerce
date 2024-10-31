import PropTypes from "prop-types";
import { cn } from "../../utils";
import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";

const IconButton = ({ children, handleClick, ...rest }) => {
  const { className, type, ...otherProps } = rest;
  const { theme } = useTheme();

  return (
    <button
      onClick={handleClick}
      type={type || "button"}
      className={cn(
        "px-4 py-2 text-blue-900 rounded-md hover:text-blue-600 transition-colors duration-300",
        theme === THEME_OPTIONS.DARK_MODE && "text-white hover:text-purple-300",
        type === "submit" &&
          "text-green-500 hover:text-green-700 disabled:text-gray-400 disabled:cursor-not-allowed",
        type === "reset" && "text-gray-400  hover:text-red-500",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default IconButton;
