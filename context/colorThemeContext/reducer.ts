/* eslint-disable no-case-declarations */
import { SET_COLOR_THEME_LIGHT, SET_COLOR_THEME_DARK } from "../actionType";
import { IAppContextState, ThemeEnum, ColorCodes } from ".";

export interface IAction {
  type: typeof SET_COLOR_THEME_LIGHT | typeof SET_COLOR_THEME_DARK;
  value: any;
}

const LoaderReducer = (
  state: IAppContextState,
  action: IAction
): IAppContextState => {
  switch (action.type) {
    case SET_COLOR_THEME_LIGHT:
      return {
        ...state,
        theme: ThemeEnum.LIGHT,
        colorCode: ColorCodes[ThemeEnum.LIGHT],
      };
    case SET_COLOR_THEME_DARK:
      return {
        ...state,
        theme: ThemeEnum.DARK,
        colorCode: ColorCodes[ThemeEnum.DARK],
      };
    default:
      return state;
  }
};

export default LoaderReducer;
