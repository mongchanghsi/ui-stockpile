import { createContext, Dispatch, useReducer } from "react";
import AppReducer, { IAction } from "./reducer";

export interface IAppContextState {
  isInitialLoaded: boolean;
}

export interface InitialContextProps {
  appState: IAppContextState;
  appDispatch: Dispatch<IAction>;
}

const InitialAppContextState: IAppContextState = {
  isInitialLoaded: false,
};

export const LoaderContext = createContext({} as InitialContextProps);

const LoaderContextProvider: React.FC = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    AppReducer,
    InitialAppContextState
  );

  return (
    <LoaderContext.Provider value={{ appState, appDispatch }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
