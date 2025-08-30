import React from "react";
import { ExternalLink } from "lucide-react";

export default function Card({ image, title, description, url = "#", github, tech = [] }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      {/* media */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-sm text-black/40">
            No preview
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
        {!!url && (
          <span className="absolute right-3 top-3 rounded-full bg-black/85 px-2.5 py-1 text-[10px] font-semibold text-white shadow">
            LIVE
          </span>
        )}
      </div>

      {/* content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-black/70 line-clamp-3">{description}</p>

        {tech?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          {!!url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-black/20 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              View Live <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {!!github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-black/20 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              GitHub <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-black/80 transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}
