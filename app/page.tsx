import Link from "next/link";
import QuoteForm from "./components/QuoteForm";
import { COVERAGE_TYPES, FOR_YOU_SEGMENTS } from "../data/coverage";
import { STATS, PROVIDERS } from "../data/site";
import { BLOG_POSTS } from "../data/blog";

export default function HomePage() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[680px] lg:min-h-[760px] bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-7.jpg)", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/85" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Left — headline + bullets */}
            <div className="lg:col-span-3 text-white">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-4 py-1.5 text-emerald-300 text-sm font-medium mb-6">
                🇳🇿 New Zealand&apos;s independent best health insurance comparison
              </div>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                Find NZ&apos;s Best<br />
                <span className="text-emerald-400">Health Insurance Cover</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
                Skip public waiting lists. We connect you with specialist NZ advisers who compare all major providers to find the right policy for your requirements.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Southern Cross, nib, AIA, UniMed and Partners Life explained",
                  "Independent referral service — no cost to you",
                  "Quotes back within 24 hours, no obligation",
                  "Access to plans not available direct-to-public",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-200">
                    <span className="text-emerald-400 mt-0.5 text-lg leading-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/compare/" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg shadow-emerald-500/25 text-sm">
                  Compare Plans →
                </Link>
                <Link href="/coverage/" className="border border-gray-500 hover:border-gray-300 text-gray-200 hover:text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm">
                  View Coverage Types
                </Link>
              </div>
            </div>

            {/* Right — quote form */}
            <div className="lg:col-span-2 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <QuoteForm
                title="Get Your Health Insurance Quotes"
                subtitle="Compare all major NZ providers in 24 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-emerald-600 border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl lg:text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-emerald-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why health insurance ── */}
      <section className="bg-gray-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Why Get Private Health Insurance in NZ?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              New Zealand&apos;s public health system is world-class — but waiting lists for planned surgery can stretch months or even years.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⏱️",
                title: "Skip the Waiting Lists",
                body: "The average wait for planned surgery in NZ is 4–18 months. With private cover, you can be treated within weeks at a hospital of your choice.",
              },
              {
                icon: "🏥",
                title: "Private Room & Choice",
                body: "Choose your own specialist and private hospital. No shared wards — just comfortable, personalised care when you need it most.",
              },
              {
                icon: "💊",
                title: "Access Non-Pharmac Drugs",
                body: "Cancer treatments and specialist drugs not funded by Pharmac can cost $50,000+. The right policy covers these life-changing treatments.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 rounded-xl p-7 border border-gray-800 hover:border-emerald-500/40 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage types ── */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Coverage Types</h2>
            <p className="text-gray-400 text-lg">From major medical to mental health — find the right level for your needs and budget.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {COVERAGE_TYPES.map((c) => (
              <Link key={c.slug} href={`/coverage/${c.slug}/`} className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all hover:-translate-y-0.5">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.shortDesc}</p>
                <div className="flex items-center justify-between">
                  
                  <span className="text-gray-500 group-hover:text-emerald-400 transition-colors text-sm">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/coverage/" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 font-medium px-8 py-3.5 rounded-lg transition-colors">
              View All Coverage Types →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-gray-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">We publish the information and vet the brokers. They do the comparing and the advising.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Tell Us What You Need", body: "Fill in a quick form — takes under 2 minutes. Tell us who you want to cover and what matters most to you." },
              { step: "2", title: "A Specialist Broker Compares For You", body: "One of the specialist brokers we work with, a licensed New Zealand financial adviser, compares the insurers they hold an agency with against your age, your medical history and the cover you actually want." },
              { step: "3", title: "You Choose, They Sort It", body: "You pick the plan that fits. Your broker handles the application and the paperwork." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-5 shadow-lg shadow-emerald-500/30">{item.step}</div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact/" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-lg transition-colors shadow-lg shadow-emerald-500/25">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Providers ── */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Providers We Cover</h2>
            <p className="text-gray-400 text-lg">The five main New Zealand health insurers, described from what each publishes about itself. We do not rate or score them. How this service is funded is set out in our Disclaimer.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {PROVIDERS.map((p) => (
              <Link key={p.slug} href={`/health-insurance/${p.slug}/`} className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/40 transition-all text-center hover:-translate-y-0.5">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{p.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{p.note}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/compare/" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 font-medium px-8 py-3.5 rounded-lg transition-colors">
              Compare All Providers →
            </Link>
          </div>
        </div>
      </section>

      {/* ── For You segments ── */}
      <section className="bg-gray-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Cover For Everyone</h2>
            <p className="text-gray-400 text-lg">Whether you&apos;re an individual, family, or business — we tailor cover to your specific situation.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {FOR_YOU_SEGMENTS.map((s) => (
              <Link key={s.slug} href={`/for-you/${s.slug}/`} className="group bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-emerald-400 text-sm font-medium">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust block ── */}
      <section className="bg-gray-900 py-12 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔒", title: "Regulated Advisers", body: "The advisers we connect you with hold FSP registration with the FMA." },
              { icon: "⚖️", title: "Independent", body: "Not owned by an insurer, and free to use. How the service is funded is set out in our Terms." },
              { icon: "🔍", title: "Vetted Specialists", body: "We work with a number of specialist trusted brokers and underwriters, and we check each one's licence, disputes scheme and insurer agencies before referring a single enquiry." },
              { icon: "⚡", title: "Fast Response", body: "Receive personalised quotes within 24 hours of enquiry." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="bg-gray-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">Health Insurance Guides</h2>
              <p className="text-gray-400">Independent guides to help you work out what you need.</p>
            </div>
            <Link href="/blog/" className="hidden lg:inline-flex text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500/40 overflow-hidden transition-all hover:-translate-y-0.5">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-gray-600 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold mb-3 group-hover:text-emerald-400 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-5">
                  <span className="text-emerald-400 text-sm font-medium">Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 lg:hidden">
            <Link href="/blog/" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors">All articles →</Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-emerald-600 py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Ready to Find NZ&apos;s Best Health Insurance?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">Get personalised quotes from all major NZ providers. Takes 2 minutes — no obligation, no spam.</p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <Link href="/contact/" className="bg-white hover:bg-gray-100 text-emerald-700 font-bold px-10 py-4 rounded-lg transition-colors shadow-lg">
              Get a Quote Now →
            </Link>
            <Link href="/compare/" className="border-2 border-white/50 hover:border-white text-white font-medium px-10 py-4 rounded-lg transition-colors">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
