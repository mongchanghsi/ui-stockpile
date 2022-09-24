/* eslint-disable no-case-declarations */
import { SET_LOADER_CONTEXT } from "../actionType";
import { IAppContextState } from ".";

export interface IAction {
  type: typeof SET_LOADER_CONTEXT;
  value: any;
}

const LoaderReducer = (
  state: IAppContextState,
  action: IAction
): IAppContextState => {
  switch (action.type) {
    case SET_LOADER_CONTEXT:
      return {
        ...state,
        isInitialLoaded: true,
      };
    default:
      return state;
  }
};

export default LoaderReducer;
