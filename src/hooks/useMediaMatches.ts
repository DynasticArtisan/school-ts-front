import { useCallback, useEffect, useReducer, useState } from "react";

const MATCHDESCTOP = window.matchMedia("(max-width: 1439px)");
const MATCHTABLET = window.matchMedia("(max-width: 989px)");
const MATCHMOBILE = window.matchMedia("(max-width: 767px)");

const useMediaMatches = () => {
  const [desctop, setDesctop] = useState(MATCHDESCTOP.matches);
  const [tablet, setTablet] = useState(MATCHTABLET.matches);
  const [mobile, setMobile] = useState(MATCHMOBILE.matches);

  const handleDesctop = useCallback(
    (e: MediaQueryListEvent) => setDesctop(e.matches),
    []
  );
  const handleTablet = useCallback(
    (e: MediaQueryListEvent) => setTablet(e.matches),
    []
  );
  const handleMobile = useCallback(
    (e: MediaQueryListEvent) => setMobile(e.matches),
    []
  );

  useEffect(() => {
    MATCHDESCTOP.addEventListener("change", handleDesctop);
    MATCHTABLET.addEventListener("change", handleTablet);
    MATCHMOBILE.addEventListener("change", handleMobile);

    return () => {
      MATCHDESCTOP.removeEventListener("change", handleDesctop);
      MATCHTABLET.removeEventListener("change", handleTablet);
      MATCHMOBILE.removeEventListener("change", handleMobile);
    };
  }, []);

  return {
    desctop,
    tablet,
    mobile,
  };
};

export default useMediaMatches;
