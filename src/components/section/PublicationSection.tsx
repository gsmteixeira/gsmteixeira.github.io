// src/components/sections/PublicationsSection.tsx

import React from "react";
import { publications, type Publication } from "../../data/publications";

const typeColorMap: Record<Publication["type"], string> = {
  "First author": "text-[#355C85]",
  Collaboration: "text-[#355C85]",
  Other: "text-slate-600",
};

const PublicationsSection: React.FC = () => {
  return (
    <section id="publicacoes" className="py-16 md:py-20">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-3">
          Selected publications
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-2xl">
          I contribute to projects spanning photometric redshifts,
          gravitational-wave cosmology, galaxy evolution, and survey
          optimization. Below is a selection of publications and collaborations.
        </p>
      </div>

      <div className="space-y-4">
        {publications.map((pub) => (
          <PublicationCard key={pub.title} pub={pub} />
        ))}

        <p className="text-xs md:text-sm text-slate-600 pt-2">
          A full and regularly updated list of publications is available in my
          publication list and ADS profile.
        </p>
      </div>
    </section>
  );
};

type PublicationCardProps = {
  pub: Publication;
};

const PublicationCard: React.FC<PublicationCardProps> = ({ pub }) => {
  const typeColor = typeColorMap[pub.type];

  return (
    <article className="rounded-2xl bg-white/90 border border-[#d7dde5] p-4 md:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className={`text-xs font-semibold uppercase ${typeColor}`}>
          {pub.type}
        </p>
        <p className="text-[0.7rem] md:text-xs text-slate-500">{pub.year}</p>
      </div>

      <p className="mt-1 text-sm md:text-base font-semibold text-slate-900">
        {pub.title}
      </p>

      <p className="mt-1 text-xs md:text-sm text-slate-700">
        {pub.authors} — {pub.venue}
      </p>

      {pub.doi && (
        <a
          href={pub.doi}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex text-xs md:text-sm font-medium text-[#355C85] hover:text-[#1F3A5F] hover:underline"
        >
          View article (DOI)
        </a>
      )}
    </article>
  );
};

export default PublicationsSection;
