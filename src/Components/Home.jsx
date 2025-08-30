import React, { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { icons } from "./Icons";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "MERN Stack Developer",
];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const current = roles[idx];
    let i = 0;
    const id = setInterval(() => {
      if (i <= current.length) {
        setTypedText(current.slice(0, i));
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => setIdx((p) => (p + 1) % roles.length), 1800);
      }
    }, 90);
    return () => clearInterval(id);
  }, [idx]);

  const toProjects = () =>
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr,1.25fr] gap-x-12 lg:gap-x-20 gap-y-10 items-center">
          {/* Photo */}
          <div className="w-full max-w-sm aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-black transition duration-300">
            <img
              src={icons.bibek}
              alt="Bibek Hamal"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              I&apos;m <span className=" decoration-2">Bibek Hamal</span>
            </h1>
            <div className="mt-3 h-9">
              <p className="text-lg md:text-xl font-semibold text-black/80">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>

            {/* Personal, friendly bio moved from About */}
            <p className="mt-5 max-w-xl text-black/70 leading-relaxed">
              Hi, I’m Bibek, a <strong> MERN full-Stack Developer</strong> who
              enjoys turning ideas into clean, scalable web apps with{" "}
              <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
              <strong>Express</strong>. I care about{" "}
              <strong>clean architecture</strong>,{" "}
              <strong>accessible UIs</strong>, <strong>robust APIs</strong>, and
              performance that actually feels fast. As a fresh graduate, I’m
              excited to step into my first developer role where I can
              contribute, learn quickly, and grow with a team.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="h-11 px-6 rounded-full bg-black text-white font-medium hover:opacity-90 transition">
                Explore My Work →
              </button>
              <a
                href="/Bibek_Hamal_Resume.pdf"
                download
                className="h-11 px-6 inline-flex items-center rounded-full border border-black/20 font-medium hover:bg-black hover:text-white transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
