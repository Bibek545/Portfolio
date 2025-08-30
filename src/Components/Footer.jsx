import React from "react";
import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="scroll-mt-24 bg-gray-50 border-t border-gray-200 mt-20"
    >
      {/* Back to top */}
      {/* <div className="flex justify-center -mt-6">
        <a
          href="#home"
          aria-label="Back to top"
          className="group flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div> */}

      {/* Social icons */}
      <div className="mt-8 flex justify-center gap-6 text-gray-600">
        <a
          href="https://www.linkedin.com/in/bibek-hamal-b231291a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/Bibek545"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>

      {/* Divider + copy */}
      <div className="mt-6 border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bibek Hamal — All rights reserved.
      </div>
    </footer>
  );
}
