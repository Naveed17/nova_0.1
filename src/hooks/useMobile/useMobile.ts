import { useEffect, useState } from "react";
type UseMobileResult = {
  isMobile: boolean;
};
const MOBILE_BREAKPOINT = 768;
function useMobile(): UseMobileResult {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return { isMobile };
}
export default useMobile;
