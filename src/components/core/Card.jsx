import PropTypes from "prop-types";
import useTheme from "../../hooks/useTheme";
import { cn } from "../../utils";
import { THEME_OPTIONS } from "../../stores/themeContext";

const Card = ({ children, ...rest }) => {
  const { theme } = useTheme();
  const { className, ...otherProps } = rest;

  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg shadow",
        theme === THEME_OPTIONS.DARK_MODE && "bg-gray-800 border-gray-700",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
