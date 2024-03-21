/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface AppContextInterface {}
const initialAppContext: AppContextInterface = {};
export const AppContext =
  React.createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  return React.useContext(AppContext);
};
