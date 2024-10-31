import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { retrieve, store } from "../utils";

export const THEME_OPTIONS = {
  LIGHT_MODE: "LIGHT_MODE",
  DARK_MODE: "DARK_MODE",
};

const INITIAL_STATE = {
  chosenScheme: THEME_OPTIONS.LIGHT_MODE,
};

export const themeContext = createContext(INITIAL_STATE);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(INITIAL_STATE.chosenScheme);

  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === THEME_OPTIONS.LIGHT_MODE
        ? THEME_OPTIONS.DARK_MODE
        : THEME_OPTIONS.LIGHT_MODE;
    store("theme", newTheme);
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = retrieve("theme");
    setTheme(storedTheme ?? INITIAL_STATE.chosenScheme);
  }, []);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
