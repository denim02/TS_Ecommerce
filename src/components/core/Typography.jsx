import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";
import { cn } from "../../utils";
import PropTypes from "prop-types";

const TYPOGRAPHY_COMPONENTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle: "h6",
  body: "p",
};

const Typography = ({ children, component, ...rest }) => {
  const { theme } = useTheme();
  const { className, ...otherProps } = rest;
  const Component = TYPOGRAPHY_COMPONENTS[component] || "span";

  return (
    <Component
      className={cn(
        "text-slate-800 text-sm",
        theme === THEME_OPTIONS.DARK_MODE && "text-white",
        component === "h1" && "text-xl font-semibold",
        component === "h2" && "text-lg font-semibold",
        component === "h3" && "text-base font-medium",
        component === "subtitle" && "text-sm font-light",
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOf(Object.keys(TYPOGRAPHY_COMPONENTS)),
};

export default Typography;
