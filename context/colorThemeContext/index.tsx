import { createContext, Dispatch, useReducer } from "react";
import AppReducer, { IAction } from "./reducer";

interface IColorCodeTheme {
  background_color: string;
  headerOne: string;
  headerTwo: string;
  paragraph: string;
}

interface IColorCode {
  [ThemeEnum.LIGHT]: IColorCodeTheme;
  [ThemeEnum.DARK]: IColorCodeTheme;
}

export enum ThemeEnum {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const ColorCodes: IColorCode = {
  [ThemeEnum.LIGHT]: {
    background_color: "#F0F1F5",
    headerOne: "#5F5AFA",
    headerTwo: "#5F5AFA",
    paragraph: "#000000",
  },
  [ThemeEnum.DARK]: {
    background_color: "#082b36",
    headerOne: "#5F5AFA",
    headerTwo: "#d23681",
    paragraph: "#F0F1F5",
  },
};

export interface IAppContextState {
  theme: ThemeEnum;
  colorCode: IColorCodeTheme;
}

export interface InitialContextProps {
  appState: IAppContextState;
  appDispatch: Dispatch<IAction>;
}

const InitialAppContextState: IAppContextState = {
  theme: ThemeEnum.LIGHT,
  colorCode: ColorCodes[ThemeEnum.LIGHT],
};

export const ColorThemeContext = createContext({} as InitialContextProps);

const ColorThemeProvider: React.FC = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    AppReducer,
    InitialAppContextState
  );

  return (
    <ColorThemeContext.Provider value={{ appState, appDispatch }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeProvider;
