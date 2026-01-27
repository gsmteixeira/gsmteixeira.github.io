import { Bleed, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type NavItem = {
  label: string;
  id: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Begin", id: "inicio" },
  { label: "About", id: "sobre" },
  { label: "Research", id: "pesquisa" },
  { label: "Publications", id: "publicacoes" },
  { label: "Talks", id: "palestras" },
  { label: "Projects", id: "projetos" },
  { label: "Contact", id: "contato" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");

  const handleScrollTo =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    };

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 8);

      let current = "inicio";
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY - 120; // ajuste fino
          if (offset >= top) current = item.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bleed className="fixed inset-x-0 top-0 z-50 max-w-full">
      {/* Barra principal */}
      <Flex
        className={`h-16 items-center border-b border-slate-200/60 backdrop-blur-md transition-colors ${
          isScrolled ? "bg-[#f3f3f3]/95 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Título / marca */}
          <a
            href="#inicio"
            onClick={handleScrollTo("inicio")}
            className="flex items-center gap-3"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-base md:text-lg font-semibold text-[#1F3A5F]">
                Gabriel Teixeira
              </span>
              <span className="text-[0.65rem] md:text-xs text-[#355C85]">
                Astrophysics &amp; Deep Learning
              </span>
            </div>
          </a>

          {/* Links desktop (agora com div em vez de HStack) */}
          <div className="hidden md:flex gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleScrollTo(item.id)}
                  className={`relative rounded-full px-3 py-1 text-xs md:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#1F3A5F]"
                      : "text-slate-700 hover:text-[#1F3A5F]"
                  } hover:bg-slate-100/70`}
                >
                  {item.label}
                  {isActive && (
                    <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-[#355C85]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-xs font-medium text-[#1F3A5F] shadow-sm hover:bg-[#1F3A5F] hover:text-white transition md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="text-base">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </Flex>

      {/* Menu mobile */}
      {isOpen && (
        <div className="border-b border-slate-200/60 bg-[#f3f3f3]/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-4 py-3 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleScrollTo(item.id)}
                  className={`rounded-lg px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-slate-100 text-[#1F3A5F]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#1F3A5F]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </Bleed>
  );
}

export default NavBar;
