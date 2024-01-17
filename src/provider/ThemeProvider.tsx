import { ReactNode, createContext, useState } from "react";

export type TThemeProviderContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type TThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<TThemeProviderContext | undefined>(
  undefined
);

const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(false);
  const values = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
