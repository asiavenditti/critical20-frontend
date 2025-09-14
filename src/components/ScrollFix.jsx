import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollFix() {
  const location = useLocation();

  useEffect(() => {
    // Rimuove overflow hidden impostato da modal o animazioni
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";

    // Scroll in cima o verso hash
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el)
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }, [location]);

  return null;
}
