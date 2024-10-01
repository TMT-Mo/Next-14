// hooks/useDeviceDetection.js
import { useEffect, useState } from "react";

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
      setIsDesktop(window.innerWidth > 1028);
      setIsTablet(window.innerWidth <= 1028 && window.innerWidth > 768);
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isDesktop, isTablet };
};

export default useDeviceDetection;
