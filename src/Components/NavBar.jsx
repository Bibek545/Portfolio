import React, { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "intro", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="grid grid-cols-3 items-center">
        {/* Left: name pill */}
        <div className="flex justify-start pl-6">
          <button
            onClick={() => go("home")}
            className="pointer-events-auto rounded-full border border-black/10 bg-white/90 shadow-md backdrop-blur px-5 py-2 font-bold text-black hover:text-black/70 transition"
          >
            Bibek Hamal
          </button>
        </div>

        {/* Center: nav pill */}
        <div className="flex justify-center">
          <nav
            className="pointer-events-auto rounded-full border border-black/10 bg-white/90 shadow-md backdrop-blur px-6"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-6 py-2">
              {LINKS.map((l) => {
                const isActive = active === l.id;
                return (
                  <li key={l.id} className="relative">
                    <button
                      onClick={() => go(l.id)}
                      className={[
                        "px-2 text-sm sm:text-base font-medium transition-colors",
                        isActive ? "text-black" : "text-black/70 hover:text-black",
                      ].join(" ")}
                    >
                      {l.label}
                    </button>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-1 h-[3px] w-6 -translate-x-1/2 rounded-full bg-black"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right: empty for now */}
        <div />
      </div>
    </div>
  );
}
