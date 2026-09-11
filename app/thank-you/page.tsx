import Link from "next/link";
import LeadEvent from "../components/LeadEvent";

export const metadata = {
  title: "Thank You | BestHealthInsurance.co.nz",
  description: "Thank you for your enquiry. Our licensed advisers will be in touch within 24 hours.",
  // Kept out of the index deliberately: an organic visitor landing here would
  // fire the generate_lead conversion without ever completing the form.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Fires the GA4 generate_lead conversion, once per session. */}
      <LeadEvent variant="quote_form" />
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-lg text-gray-400">Your enquiry has been received. We'll be in touch within 24 hours.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-800 rounded-xl p-10 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
            <div className="space-y-6 text-left mt-8">
              {[
                { step: "1", title: "We pass on your enquiry", body: "We send your details to one of the specialist brokers or underwriters we work with, each vetted before we refer them anything. We do not assess your enquiry ourselves." },
                { step: "2", title: "Your broker compares for you", body: "They compare the insurers they hold an agency with, against your own circumstances and medical history." },
                { step: "3", title: "They contact you", body: "Your broker contacts you directly, usually within 24 hours, with quotes and their recommendation. Any advice comes from them, not from us." },
                { step: "4", title: "You decide", body: "No pressure — take your time, ask questions, and decide what's right for you." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">{item.step}</div>
                  <div>
                    <p className="font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-900/20 border border-emerald-700/40 rounded-lg p-6 mb-8">
            <p className="text-emerald-300 text-sm">
              <strong className="text-white">Questions in the meantime?</strong> Email us at{" "}
              <a href="mailto:hello@cover4you.co.nz" className="text-emerald-400 hover:text-emerald-300 underline">hello@cover4you.co.nz</a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Back to Home
            </Link>
            <Link href="/blog/" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
