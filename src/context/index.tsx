import { createContext, useState, useContext } from "react";
import type { PropsWithChildren } from "react";

interface InitialState {
  auth_token: string | null;
}

type AppContext = [
  InitialState,
  React.Dispatch<React.SetStateAction<InitialState>>
];

const initialState: InitialState = {
  auth_token: null,
};

export const AppContext = createContext<AppContext>([initialState, () => {}]);

export function AppProvider({ children }: PropsWithChildren) {
  const appState = useState<InitialState>(initialState);

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const appState = useContext(AppContext);
  return appState;
}
