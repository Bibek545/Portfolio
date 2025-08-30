import React, { useState, useEffect, useRef } from "react";
import { Download, MessageCircle, ArrowRight, Code, Database, Server } from "lucide-react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 800);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const skills = [
    { icon: Code, name: "Frontend", tech: "React, HTML, CSS" },
    { icon: Server, name: "Backend", tech: "Node.js, Express.js" },
    { icon: Database, name: "Database", tech: "MongoDB, MySQL" },
  ];

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden scroll-mt-24"
      aria-label="Introduction"
    >
      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200/40 rounded-full blur-lg" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* header */}
        <div
          className={[
            "mb-12 transform transition-all duration-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Introduction
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
        </div>

        {/* text */}
        <div
          className={[
            "mb-12 transform transition-all duration-1000 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              I am <span className="font-semibold text-black-600">Bibek Hamal</span>, a passionate and
              detail-oriented{" "}
              <span className="font-semibold bg-yellow-100 px-2 py-1 rounded">Full Stack Developer</span>{" "}
              specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). Recently graduated
              in IT, I love building scalable, user-friendly applications.
            </p>
          </div>
        </div>

        {/* skills */}
        <div
          className={[
            "mb-12 transform transition-all duration-1000 delay-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {skills.map((s, i) => (
              <div
                key={s.name}
                className={[
                  "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform",
                  animateSkills ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95",
                  "hover:-translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: `${600 + i * 150}ms` }}
              >
                <s.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className={[
            "flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            <span>Contact Me</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </button>

          <a
            href="/Bibek_Hamal_Resume.pdf"  // put your real file in /public
            download="Bibek_Hamal-Software_Developer.pdf"
            className="group border-2 border-gray-400 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-50 flex items-center gap-3"
            rel="noopener"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
