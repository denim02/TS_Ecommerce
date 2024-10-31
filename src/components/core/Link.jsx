import PropTypes from "prop-types";
import useTheme from "../../hooks/useTheme";
import { Link as RouterLink } from "react-router-dom";
import { cn } from "../../utils";
import { THEME_OPTIONS } from "../../stores/themeContext";

const LINK_VARIANTS = {
  filled: "filled",
  underline: "underline",
  plain: "plain",
};

const Link = ({ children, to, variant = "plain", ...rest }) => {
  const { theme } = useTheme();
  const { className, ...otherProps } = rest;

  return (
    <RouterLink
      className={cn(
        "text-sm px-2 py-1 text-slate-900 hover:text-slate-600 rounded-md",
        theme === THEME_OPTIONS.DARK_MODE && "text-white hover:text-purple-200",
        variant === LINK_VARIANTS.underline &&
          "relative no-underline after:content-[''] after:absolute after:bottom-1 after:h-[1px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left",
        variant === LINK_VARIANTS.filled &&
          (theme === THEME_OPTIONS.DARK_MODE
            ? "bg-white border border-blue-950 text-blue-950 hover:border-blue-800 hover:text-sky-500"
            : "bg-sky-900 text-white hover:bg-sky-700"),
        className
      )}
      to={to}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(LINK_VARIANTS)),
};

export default Link;
