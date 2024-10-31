import { useContext } from "react";
import { themeContext } from "../stores/themeContext";

const useTheme = () => {
  return useContext(themeContext);
};

export default useTheme;
