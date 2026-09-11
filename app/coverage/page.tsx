import Link from "next/link";
import { COVERAGE_TYPES } from "../../data/coverage";
import QuoteForm from "../components/QuoteForm";

export const metadata = {
  title: "Health Insurance Coverage Types NZ | BestHealthInsurance.co.nz",
  description: "Explore all health insurance coverage types available in New Zealand — major medical, surgical, everyday health, mental health, and more.",
};

export default function CoveragePage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Health Insurance Coverage Types</h1>
          <p className="text-lg text-gray-400">From major medical to mental health — explore all coverage options available in New Zealand.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGE_TYPES.map((c) => (
              <Link key={c.slug} href={`/coverage/${c.slug}/`} className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all hover:-translate-y-0.5">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{c.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.shortDesc}</p>
                <div className="flex items-center justify-between">
                  
                  <span className="text-gray-500 group-hover:text-emerald-400 transition-colors text-sm">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Coverage You Need?</h2>
              <p className="text-emerald-100 mb-4">Our licensed advisers will assess your situation and recommend the right coverage for your needs and budget.</p>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li>✓ Comparison service — no cost to you</li>
                <li>✓ Quotes within 24 hours</li>
                <li>✓ No obligation</li>
                <li>✓ Licensed advisers</li>
              </ul>
            </div>
            <div>
              <QuoteForm title="Get a Quote" subtitle="We&apos;ll recommend the right coverage for you" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
