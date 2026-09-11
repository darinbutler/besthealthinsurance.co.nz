"use client";
import Link from "next/link";
import { useState } from "react";
import { COVERAGE_TYPES, FOR_YOU_SEGMENTS } from "../../data/coverage";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <>
      {/* Announcement bar */}
      <div className="sticky top-0 z-50 bg-emerald-600 text-white text-xs text-center py-1.5 px-4 font-medium">
        <span className="sm:hidden">🇳🇿 Compare NZ Health Insurance — Vetted Specialist Brokers, No Obligation</span>
        <span className="hidden sm:inline">🇳🇿 Independent NZ Health Insurance Information — Free Quote From a Vetted Specialist Broker</span>
      </div>

      {/* Main nav */}
      <nav className="sticky top-8 z-40 bg-gray-900 border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-white font-black text-base sm:text-lg">
                <span className="text-emerald-400">BestHealth</span><span className="font-black">Insurance</span>
                <span className="text-gray-400 font-normal text-xs sm:text-sm">.co.nz</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Coverage dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Coverage <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                  {COVERAGE_TYPES.map((c) => (
                    <Link key={c.slug} href={`/coverage/${c.slug}/`} className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                      <span>{c.icon}</span><span>{c.title}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link href="/coverage/" className="flex items-center gap-2.5 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-gray-700 transition-colors font-medium">
                      <span>📋</span><span>All Coverage Types</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* For You dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  For You <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-52 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                  {FOR_YOU_SEGMENTS.map((s) => (
                    <Link key={s.slug} href={`/for-you/${s.slug}/`} className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                      <span>{s.icon}</span><span>{s.title}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link href="/for-you/individuals/" className="flex items-center gap-2.5 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-gray-700 transition-colors font-medium">
                      <span>👥</span><span>All Segments</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/compare/" className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">Compare</Link>
              <Link href="/blog/" className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">Guides</Link>

              <Link href="/contact/" className="ml-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gray-400 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-gray-900 px-4 py-4 space-y-1">
            <button onClick={() => setOpenMenu(openMenu === "coverage" ? null : "coverage")} className="flex items-center justify-between w-full text-gray-300 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800">
              Coverage Types
              <svg className={`w-4 h-4 transition-transform ${openMenu === "coverage" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openMenu === "coverage" && (
              <div className="ml-4 space-y-1">
                {COVERAGE_TYPES.map((c) => (
                  <Link key={c.slug} href={`/coverage/${c.slug}/`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
                    <span>{c.icon}</span><span>{c.title}</span>
                  </Link>
                ))}
              </div>
            )}
            <button onClick={() => setOpenMenu(openMenu === "foryou" ? null : "foryou")} className="flex items-center justify-between w-full text-gray-300 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800">
              For You
              <svg className={`w-4 h-4 transition-transform ${openMenu === "foryou" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openMenu === "foryou" && (
              <div className="ml-4 space-y-1">
                {FOR_YOU_SEGMENTS.map((s) => (
                  <Link key={s.slug} href={`/for-you/${s.slug}/`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
                    <span>{s.icon}</span><span>{s.title}</span>
                  </Link>
                ))}
              </div>
            )}
            <Link href="/compare/" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800">Compare</Link>
            <Link href="/blog/" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800">Guides</Link>
            <Link href="/contact/" onClick={() => setMobileOpen(false)} className="block bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-4 py-2.5 rounded-lg text-center mt-2">Get Started →</Link>
          </div>
        )}
      </nav>
    </>
  );
}
