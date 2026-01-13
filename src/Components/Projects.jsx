import React, { useEffect, useState } from "react";
import Card from "./Card";
import { icons } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";

/* ---------- responsive items-per-page hook ---------- */
function useItemsPerPage(breakpoints = { md: 1, lg: 2 }) {
  const calc = () => {
    if (window.innerWidth >= 1024) return breakpoints.lg; // lg+
    if (window.innerWidth >= 768) return breakpoints.md;  // md
    return 1;                                             // sm
  };
  const [ipp, setIpp] = useState(calc);
  useEffect(() => {
    const on = () => setIpp(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return ipp;
}

/* ---------- slide variants (shared) ---------- */
const variants = {
  enter: (dir) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir * -60, opacity: 0 }),
};

export default function Projects() {
  /* ===== Featured / Full-Stack ===== */
  const fullstackProjects = [
    {
      image: icons.thpClient,
      title: "The Hidden Pour",
      description:
        "Modern restaurant website with menus, events, membership, and careers. Responsive UI, smooth navigation, and scalable architecture.",
      // url: "http://thp-client-fe-bucket.s3-website-ap-southeast-2.amazonaws.com/",
     url:  "https://mybar-fe-qo25.vercel.app/",
      github: "https://github.com/Bibek545/mybar-fe",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "AWS S3", "CodePipeline"],
    },
    {
      image: icons.thpAdmin,
      title: "The Hidden Pour Admin Dashboard",
      description:
        "Admin dashboard for The Hidden Pour — manage bookings, authentication (JWT), and a clean Bootstrap UI. Features include real-time booking details, approving/declining requests, and secure admin login.",
      // url: "http://thp-admin-fe-bucket.s3-website-ap-southeast-2.amazonaws.com/login",
      url: "https://mybar-admin-fe.vercel.app/login",
      github: "https://github.com/Bibek545/mybar-fe",
      tech: ["MERN", "JWT", "Bootstrap", "React", "Node.js", "Express", "MongoDB"],
    },
        {
      image: icons.thpAdmin,
      title: "The Hidden Pour Admin Dashboard",
      description:
        "Admin dashboard for The Hidden Pour — manage bookings, authentication (JWT), and a clean Bootstrap UI. Features include real-time booking details, approving/declining requests, and secure admin login.",
      // url: "http://thp-admin-fe-bucket.s3-website-ap-southeast-2.amazonaws.com/login",
      url: "https://mybar-admin-fe.vercel.app/login",
      github: "https://github.com/Bibek545/LMS-FE",
      tech: ["MERN", "JWT", "Bootstrap", "React", "Node.js", "Express", "MongoDB"],
    },
        {
      image: icons.LMS,
      title: "Library Management System",
      description:
        "Modern library management system with features for cataloging, user management, and circulation tracking. Responsive UI and smooth navigation.",
      // url: "http://thp-client-fe-bucket.s3-website-ap-southeast-2.amazonaws.com/",
     url:  "https://lms-fe-jade.vercel.app/",
      github: "https://github.com/Bibek545/mybar-fe",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "AWS S3", "CodePipeline"],
    },
    {
      image: icons.ecommerceClient,
      title: "B&M TechStore",
      description:
        "Full-featured online shopping platform with authentication, product catalog, shopping cart, and secure Stripe payments. Deployed via AWS S3 + CodePipeline.",
      url: "http://ecommerce-client-fe-global-bucket.s3-website-ap-southeast-2.amazonaws.com/",
      github: "https://github.com/Bibek545/ecommerce_FE",
      tech: ["MERN", "JWT", "Redux", "Stripe", "AWS S3", "CodePipeline", "Email Integration"],
    },
    {
      image: icons.ecommerceAdmin,
      title: "E-commerce Admin CMS",
      description:
        "Comprehensive admin dashboard to manage products, orders, customers, inventory, and sales analytics. Deployed with AWS (EC2, Lambda, CodePipeline).",
      url: "http://ecommerce-global-bucket.s3-website-ap-southeast-2.amazonaws.com/",
      github: "https://github.com/Bibek545/ecommerce-admin-be",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "AWS EC2", "Lambda", "CodePipeline"],
    },
  ];

  /* ===== Practice / Mini ===== */
  const practiceProjects = [
    { image: icons.myDC, title: "React Digital Clock", description: "Live time with React hooks.", url: "https://digital-clock-react-rho.vercel.app/", tech: ["React", "JS"] },
    { image: icons.ntdl, title: "Not To Do List", description: "Track anti-tasks to stay focused.", url: "https://ntdl-k7lndwr9d-bibeks-projects-f59c395a.vercel.app/", tech: ["React", "Bootstrap"] },
    { image: icons.calculator, title: "Calculator", description: "A simple calculator built with React.", url: "https://react-calculator-gamma-flame.vercel.app/", tech: ["React", "JS"] },
    { image: icons.colorPicker, title: "Color Selector", description: "Pick and copy colors quickly.", url: "https://color-picker-react-three.vercel.app/", tech: ["React", "JS"] },
    { image: icons.movieWorld, title: "Movie World", description: "Browse via OMDB API.", url: "https://movie-world-lake.vercel.app/", tech: ["React", "API"] },
    { image: icons.quiz, title: "Quiz Game", description: "Tiny quiz app with web basics.", url: "https://bibek545.github.io/quiz-app/", tech: ["HTML", "CSS", "JS"] },
  ];

  /* ---------- FULL-STACK slider state ---------- */
  const fsIpp = useItemsPerPage({ md: 1, lg: 2 }); // 1 on md, 2 on lg+
  const [fsPage, setFsPage] = useState(0);
  const [fsDir, setFsDir] = useState(1);

  const fsMaxPage = Math.max(0, Math.ceil(fullstackProjects.length / fsIpp) - 1);
  useEffect(() => {
    if (fsPage > fsMaxPage) setFsPage(fsMaxPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fsIpp, fullstackProjects.length]);

  const fsStart = fsPage * fsIpp;
  const fsVisible = fullstackProjects.slice(fsStart, fsStart + fsIpp);

  const fsPrev = () => { setFsDir(-1); setFsPage((p) => Math.max(0, p - 1)); };
  const fsNext = () => { setFsDir(1);  setFsPage((p) => Math.min(fsMaxPage, p + 1)); };

  /* ---------- PRACTICE slider state (your existing pattern) ---------- */
  const prIpp = useItemsPerPage({ md: 2, lg: 3 }); // 1/2/3 for practice
  const [prPage, setPrPage] = useState(0);
  const [prDir, setPrDir] = useState(1);

  const prMaxPage = Math.max(0, Math.ceil(practiceProjects.length / prIpp) - 1);
  useEffect(() => {
    if (prPage > prMaxPage) setPrPage(prMaxPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prIpp, practiceProjects.length]);

  const prStart = prPage * prIpp;
  const prVisible = practiceProjects.slice(prStart, prStart + prIpp);

  const prPrev = () => { setPrDir(-1); setPrPage((p) => Math.max(0, p - 1)); };
  const prNext = () => { setPrDir(1);  setPrPage((p) => Math.min(prMaxPage, p + 1)); };

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
        {/* ===== Full-Stack (slider) ===== */}
        <div>
          <span className="inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
            Full-Stack
          </span>
          <div className="mt-3 flex items-end justify-between flex-wrap gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Full-Stack Projects</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={fsPrev}
                disabled={fsPage === 0}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-black hover:text-white disabled:opacity-40"
              >
                Prev
              </button>
              <button
                onClick={fsNext}
                disabled={fsPage === fsMaxPage}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-black hover:text-white disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
          <p className="mt-1 text-sm text-black/60">
            Flagship projects built end-to-end (client + server + deployment).
          </p>
          <div className="mt-3 h-[3px] w-16 rounded-full bg-black/80" />

          {/* slide area */}
          <div className="relative mt-6 overflow-hidden">
            <AnimatePresence custom={fsDir} mode="popLayout">
              <motion.div
                key={fsPage}
                custom={fsDir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`grid gap-7 ${fsIpp === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
              >
                {fsVisible.map((p) => (
                  <Card key={p.title} {...p} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: fsMaxPage + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i !== fsPage) setFsDir(i > fsPage ? 1 : -1);
                  setFsPage(i);
                }}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === fsPage ? "bg-black" : "bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to full-stack page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ===== Practice (existing slider) ===== */}
        <div className="mt-14">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <span className="inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
                Practice
              </span>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">Practice Projects</h3>
              <p className="mt-1 text-sm text-black/60">Smaller apps I built to learn and experiment.</p>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-black/70" />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prPrev}
                disabled={prPage === 0}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-black hover:text-white disabled:opacity-40"
              >
                Prev
              </button>
              <button
                onClick={prNext}
                disabled={prPage === prMaxPage}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-black hover:text-white disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden">
            <AnimatePresence custom={prDir} mode="popLayout">
              <motion.div
                key={prPage}
                custom={prDir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`grid gap-6 ${prIpp >= 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : prIpp === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
              >
                {prVisible.map((p, i) => (
                  <Card key={p.title + i} {...p} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: prMaxPage + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i !== prPage) setPrDir(i > prPage ? 1 : -1);
                  setPrPage(i);
                }}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === prPage ? "bg-black" : "bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to practice page ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-3 text-center text-sm text-black/60">
            Page {prPage + 1} / {prMaxPage + 1}
          </div>
        </div>
      </div>
    </section>
  );
}
