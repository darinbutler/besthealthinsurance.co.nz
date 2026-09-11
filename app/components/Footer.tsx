import Link from "next/link";
import { COVERAGE_TYPES, FOR_YOU_SEGMENTS } from "../../data/coverage";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-black text-lg mb-3">
              <span className="text-emerald-400">BestHealth</span><span className="font-black">Insurance</span>
              <span className="text-gray-500 font-normal text-sm">.co.nz</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              NZ&apos;s independent best health insurance comparison. Expert advice from licensed NZ advisers.
            </p>
            <p className="text-gray-500 text-xs">A Cover4You Group service.</p>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Coverage</h4>
            <ul className="space-y-2">
              {COVERAGE_TYPES.slice(0, 5).map((c) => (
                <li key={c.slug}><Link href={`/coverage/${c.slug}/`} className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">{c.title}</Link></li>
              ))}
              <li><Link href="/coverage/" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">All coverage types →</Link></li>
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">For You</h4>
            <ul className="space-y-2">
              {FOR_YOU_SEGMENTS.map((s) => (
                <li key={s.slug}><Link href={`/for-you/${s.slug}/`} className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Providers & Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Providers</h4>
            <ul className="space-y-2">
              <li><Link href="/health-insurance/southern-cross/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Southern Cross</Link></li>
              <li><Link href="/health-insurance/nib/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">nib</Link></li>
              <li><Link href="/health-insurance/aia/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">AIA</Link></li>
              <li><Link href="/health-insurance/unimed/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">UniMed</Link></li>
              <li><Link href="/health-insurance/partners-life/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Partners Life</Link></li>
              <li><Link href="/compare/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Compare All</Link></li>
            </ul>
            <h4 className="text-white font-bold text-sm mt-5 mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/faqs/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">FAQs</Link></li>
              <li><Link href="/contact/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed mb-3">
            <strong className="text-gray-400">How This Site Works:</strong> BestHealthInsurance.co.nz is operated by Cover4You Group. We compare health insurance from major NZ providers. When you submit a quote request, a licensed New Zealand financial adviser will contact you to discuss your options. Our advisers are paid by the insurers — there is no cost to you for this service.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            This site provides general information only and is not financial advice. Please read any policy disclosure statement before purchasing insurance. Cover4You Group advisers hold current Financial Services Provider (FSP) registration and are members of the Financial Services Complaints Limited (FSCL) dispute resolution scheme.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>© 2026 BestHealthInsurance.co.nz — A Cover4You Group service. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy/" className="hover:text-gray-400 transition-colors">Privacy</Link>
              <Link href="/terms/" className="hover:text-gray-400 transition-colors">Terms</Link>
              <Link href="/disclaimer/" className="hover:text-gray-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
