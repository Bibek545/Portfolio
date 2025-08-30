import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop({ threshold = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={[
        "fixed right-5 bottom-6 z-[60] rounded-full p-3",
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg",
        "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
        "hover:shadow-xl hover:-translate-y-0.5 motion-reduce:transition-none",
        "supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]" // play nice with mobile safe area
      ].join(" ")}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
