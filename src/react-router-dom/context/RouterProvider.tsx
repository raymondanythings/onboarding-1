import {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { routeContext } from "../context/RouteContext";
export type LocationMap = { [key in string]: ReactNode };
const RouterProvider = ({
  locationMap,
}: PropsWithChildren<{
  locationMap: LocationMap;
}>) => {
  const initialPath = useMemo(() => window.location.pathname, []);
  const [path, setPath] = useState<string[]>([window.location.pathname]);
  const renderItem = locationMap[window.location.pathname];

  const handleListener = useCallback(
    (event: PopStateEvent) => {
      event.preventDefault();
      setPath(event.state ?? [initialPath]);
    },
    [initialPath]
  );
  useEffect(() => {
    window.addEventListener("popstate", handleListener);
    return () => {
      window.removeEventListener("popstate", handleListener);
    };
  }, [handleListener]);

  if (!renderItem) {
    return <>Has No Route path.</>;
  }

  return (
    <routeContext.Provider value={{ path, setPath }}>
      {renderItem}
    </routeContext.Provider>
  );
};

export default RouterProvider;
