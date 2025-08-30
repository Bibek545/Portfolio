import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <header className="text-center">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
        Projects
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
    </header>
  );
}
