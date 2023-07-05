import { Dispatch, SetStateAction, createContext } from "react";

export const routeContext = createContext<{
  path?: string[];
  setPath?: Dispatch<SetStateAction<string[]>>;
}>({ path: [] });
export const locationContext = createContext({});
