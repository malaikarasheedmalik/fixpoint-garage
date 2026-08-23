"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/fixpoint-data.json";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

// Build a simple searchable index from the central JSON data
function buildSearchIndex() {
  const items: { title: string; href: string; type: string }[] = [];
  navLinks.forEach((l) => items.push({ title: l.label, href: l.href, type: "Page" }));
  data.services.forEach((s) =>
    items.push({ title: s.title, href: `/services/${s.slug}`, type: "Service" })
  );
  data.team.forEach((t) =>
    items.push({ title: t.name, href: "/team", type: "Team Member" })
  );
  return items;
}

const searchIndex = buildSearchIndex();

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? searchIndex.filter((i) =>
        i.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function goToFirstResult(e: React.FormEvent) {
    e.preventDefault();
    if (results.length > 0) {
      router.push(results[0].href);
      setQuery("");
      setShowResults(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <Link href="/" className="font-serif text-xl font-bold text-burgundy shrink-0">
          FixPoint <span className="text-terracotta">Garage</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-burgundy/80 hover:text-terracotta transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Search bar */}
        <div ref={boxRef} className="relative hidden md:block w-64">
          <form onSubmit={goToFirstResult}>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              type="text"
              placeholder="Search services, pages..."
              className="w-full rounded-full border border-beige bg-offwhite px-4 py-2 text-sm text-burgundy placeholder:text-warmgray/70 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
            />
          </form>
          <AnimatePresence>
            {showResults && query.trim() && (
              <motion.ul
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 w-full bg-offwhite border border-beige rounded-xl shadow-soft overflow-hidden max-h-72 overflow-y-auto scrollbar-thin"
              >
                {results.length > 0 ? (
                  results.map((r) => (
                    <li key={r.href + r.title}>
                      <Link
                        href={r.href}
                        onClick={() => {
                          setQuery("");
                          setShowResults(false);
                        }}
                        className="flex items-center justify-between px-4 py-2 text-sm hover:bg-beige/40 transition-colors"
                      >
                        <span>{r.title}</span>
                        <span className="text-xs text-warmgray">{r.type}</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-sm text-warmgray">No results found</li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-burgundy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-burgundy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-burgundy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-beige bg-cream"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search services, pages..."
                className="w-full rounded-full border border-beige bg-offwhite px-4 py-2 text-sm focus:outline-none"
              />
              {results.map((r) => (
                <Link
                  key={r.href + r.title}
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-burgundy/80"
                >
                  {r.title} <span className="text-xs text-warmgray">({r.type})</span>
                </Link>
              ))}
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-burgundy py-1"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
