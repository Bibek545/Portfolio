import React, { useEffect, useState } from "react";
import Card from "./Card";
import { icons } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";

// ----- responsive items per page for practice grid: 1 / 2 / 3
function useItemsPerPage() {
  const calc = () =>
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const [ipp, setIpp] = useState(calc);
  useEffect(() => {
    const on = () => setIpp(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return ipp;
}

export default function Projects() {
  // ===== Featured / Full-Stack =====
  const fullstackProjects = [
    {
      image: icons.ecommerceClient,
      title: "B&M TechStore",
      description:
        "Full-featured online shopping platform with authentication, product catalog, shopping cart, and secure Stripe payments. Deployed via AWS S3 + CodePipeline.",
      url: "http://ecommerce-client-fe-global-bucket.s3-website-ap-southeast-2.amazonaws.com/",
      github: "https://github.com/Bibek545/ecommerce_FE",
      tech: [
        "MERN",
        "JWT",
        "Redux",
        "Stripe",
        "AWS S3",
        "CodePipeline",
        "Email Integration",
      ],
    },
    {
      image: icons.ecommerceAdmin,
      title: "E-commerce Admin CMS",
      description:
        "Comprehensive admin dashboard to manage products, orders, customers, inventory, and sales analytics. Deployed with AWS (EC2, Lambda, CodePipeline).",
      url: "http://ecommerce-global-bucket.s3-website-ap-southeast-2.amazonaws.com/",
      github: "https://github.com/Bibek545/ecommerce-admin-be",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Chart.js",
        "AWS EC2",
        "Lambda",
        "CodePipeline",
      ],
    },
  ];

  // ===== Practice / Mini =====
  const practiceProjects = [
    {
      image: icons.myDC,
      title: "React Digital Clock",
      description: "Live time with React hooks.",
      url: "https://digital-clock-react-rho.vercel.app/",
      tech: ["React", "JS"],
    },
    {
      image: icons.ntdl,
      title: "Not To Do List",
      description: "Track anti-tasks to stay focused.",
      url: "https://ntdl-k7lndwr9d-bibeks-projects-f59c395a.vercel.app/",
      tech: ["React", "Bootstrap"],
    },
    {
      image: icons.calculator,
      title: "Calculator",
      description: "A simple calculator built with React.",
      url: "https://react-calculator-gamma-flame.vercel.app/",
      tech: ["React", "JS"],
    },
    {
      image: icons.colorPicker,
      title: "Color Selector",
      description: "Pick and copy colors quickly.",
      url: "https://color-picker-react-three.vercel.app/",
      tech: ["React", "JS"],
    },
    {
      image: icons.movieWorld,
      title: "Movie World",
      description: "Browse via OMDB API.",
      url: "https://movie-world-lake.vercel.app/",
      tech: ["React", "API"],
    },
    {
      image: icons.quiz,
      title: "Quiz Game",
      description: "Tiny quiz app with web basics.",
      url: "https://bibek545.github.io/quiz-app/",
      tech: ["HTML", "CSS", "JS"],
    },
  ];

  // ----- paging state for practice projects
  const ipp = useItemsPerPage();
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 next, -1 prev

  const maxPage = Math.max(0, Math.ceil(practiceProjects.length / ipp) - 1);

  useEffect(() => {
    if (page > maxPage) setPage(maxPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipp, practiceProjects.length]);

  const start = page * ipp;
  const visible = practiceProjects.slice(start, start + ipp);

  const goPrev = () => {
    setDirection(-1);
    setPage((p) => Math.max(0, p - 1));
  };
  const goNext = () => {
    setDirection(1);
    setPage((p) => Math.min(maxPage, p + 1));
  };

  // slide variants
  const variants = {
    enter: (dir) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir * -60, opacity: 0 }),
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
        {/* ====== Full-Stack ====== */}
        <div>
          <span className="inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
            Full-Stack
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Full-Stack Projects
          </h2>
          <p className="mt-1 text-sm text-black/60">
            Flagship projects built end-to-end (client + server + deployment).
          </p>
          <div className="mt-3 h-[3px] w-16 rounded-full bg-black/80" />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {fullstackProjects.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </div>

        {/* ====== Practice (with sliding pager) ====== */}
        <div className="mt-14">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <span className="inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
                Practice
              </span>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                Practice Projects
              </h3>
              <p className="mt-1 text-sm text-black/60">
                Smaller apps I built to learn and experiment.
              </p>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-black/70" />
            </div>

            {/* controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={page === 0}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-black hover:text-white disabled:opacity-40"
                aria-label="Previous"
              >
                Prev
              </button>
              <button
                onClick={goNext}
                disabled={page === maxPage}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-black hover:text-white disabled:opacity-40"
                aria-label="Next"
              >
                Next
              </button>
            </div>
          </div>

          {/* animated row */}
          <div className="relative mt-6">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 will-change-transform"
              >
                {visible.map((p, i) => (
                  <Card key={p.title + i} {...p} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => {
                  if (i !== page) setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === page ? "bg-black" : "bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>

          <div className="mt-3 text-center text-sm text-black/60">
            Page {page + 1} / {maxPage + 1}
          </div>
        </div>
      </div>
    </section>
  );
}
