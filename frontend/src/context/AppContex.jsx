import { createContext, useContext } from "react";

const AppContext = createContext();
export default AppContext;

export const useAppContext = () => useContext(AppContext)