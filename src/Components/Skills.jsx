import React from "react";
import { Code2, Server, Database } from "lucide-react";
import { icons } from "./Icons";

export default function Skills() {
  const capability = [
    { icon: Code2, name: "Frontend", tech: "React, HTML, CSS" },
    { icon: Server, name: "Backend", tech: "Node.js, Express.js" },
    { icon: Database, name: "Database", tech: "MongoDB, MySQL" },
  ];

  const logos = [
    { src: icons.html, alt: "HTML" },
    { src: icons.css, alt: "CSS" },
    { src: icons.javascript, alt: "JavaScript" },
    { src: icons.reactS, alt: "React" },
    { src: icons.mongodb, alt: "MongoDB" },
    { src: icons.nodes, alt: "Node.js" },
    { src: icons.github, alt: "GitHub" },
    { src: icons.express, alt: "Express" },
    { src: icons.java, alt: "Java" },
    { src: icons.vsCode, alt: "VS Code" },
    { src: icons.s3, alt: "S3 Bucket" },
    { src: icons.elasticBeanstalk, alt: "Elastic Beanstalk" },
    { src: icons.codePipeline, alt: "Code Pipeline" },
    { src: icons.versionControl, alt: "Version Control" },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
            Projects
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Skills</h2>
          <p className="mt-2 text-sm md:text-base text-black/60">
            Technologies & tools I’ve worked with
          </p>
          {/* accent underline */}
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-black/80" />
        </div>

        {/* Capability cards */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {capability.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* soft corner glow */}
              <div
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-black/5 blur-2xl"
                aria-hidden="true"
              />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white shadow">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-black/60">{c.tech}</p>
                </div>
              </div>
              {/* subtle bottom border accent on hover */}
              <span className="absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-black/80 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Logo tiles */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
          {logos.map((l) => (
            <div
              key={l.alt}
              className="flex flex-col items-center rounded-xl border border-black/10 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              title={l.alt}
            >
              <div className="grid h-16 w-16 place-items-center rounded-lg border border-black/10 bg-white">
                <img src={l.src} alt={l.alt} className="h-10 w-10 object-contain" />
              </div>
              <span className="mt-2 text-xs font-medium text-black/70">{l.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
