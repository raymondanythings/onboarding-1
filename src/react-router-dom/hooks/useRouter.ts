import { useContext } from "react";
import { routeContext } from "../context/RouteContext";

const useRouter = () => {
  const { path, setPath } = useContext(routeContext);
  const push = (location: string) => {
    history.pushState({ history: [...(path || []), location] }, "", location);
    setPath && setPath((prev) => [...prev, location]);
  };
  const pop = () => {
    history.back();
  };
  return { push, pop };
};

export default useRouter;
