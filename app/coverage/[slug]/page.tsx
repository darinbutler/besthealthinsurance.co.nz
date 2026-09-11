import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import QuoteForm from '../../components/QuoteForm'
import { COVERAGE_TYPES, COVERAGE_TYPES as coverageTypes } from '../../../data/coverage'
import AdviceNotice from '@/app/components/AdviceNotice'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return COVERAGE_TYPES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const coverage = COVERAGE_TYPES.find((c) => c.slug === slug)
  if (!coverage) return {}
  return {
    title: coverage.metaTitle,
    description: coverage.metaDesc,
    alternates: { canonical: `https://besthealthinsurance.co.nz/coverage/${slug}/` },
  }
}

export default async function CoveragePage({ params }: Props) {
  const { slug } = await params
  const coverage = COVERAGE_TYPES.find((c) => c.slug === slug)
  if (!coverage) notFound()

  const otherCoverages = coverageTypes.filter((c) => c.slug !== slug).slice(0, 5)

  // Build structured data
  const faqs = [
    { q: `What does ${coverage.title} actually cover?`, a: coverage.description },
    { q: `How much does ${coverage.title} cost per month?`, a: `We cannot give you a price for this cover, because no New Zealand health insurer publishes a full premium schedule. What we can tell you is what moves the number: your age, your medical history, the excess you choose, the level of cover, and who else is on the policy. An adviser can quote your actual situation at no charge.` },
    { q: 'Are pre-existing conditions covered?', a: "Pre-existing conditions are typically excluded from cover, or may be subject to a premium loading. The definitions vary by insurer, and some conditions may be covered after a stand-down period. An adviser will help you understand each provider's approach before you commit." },
    { q: 'How do I claim?', a: 'Claims processes differ by insurer. Most offer online or app-based claiming, and for surgical or hospital treatment the provider will often bill the insurer directly where the treatment has been approved in advance. For everyday cover you generally submit receipts and are reimbursed. Ask your insurer what their current process and turnaround are.' },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
      { "@type": "ListItem", position: 2, name: "Coverage Types", item: "https://besthealthinsurance.co.nz/coverage/" },
      { "@type": "ListItem", position: 3, name: coverage.title, item: `https://besthealthinsurance.co.nz/coverage/${slug}/` },
    ],
  }

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `https://besthealthinsurance.co.nz/coverage/${slug}/#webpage`,
    url: `https://besthealthinsurance.co.nz/coverage/${slug}/`,
    name: coverage.metaTitle,
    description: coverage.metaDesc,
    inLanguage: "en-NZ",
    isPartOf: { "@id": "https://besthealthinsurance.co.nz/#website" },
    author: { "@id": "https://besthealthinsurance.co.nz/#organization" },
    publisher: { "@id": "https://besthealthinsurance.co.nz/#organization" },
    breadcrumb: { "@id": `https://besthealthinsurance.co.nz/coverage/${slug}/#breadcrumb` },
    medicalAudience: { "@type": "Patient" },
    lastReviewed: "2026-05-10",
  }

  const heroImages: Record<string, string> = {
    'major-medical': '/hero-7.jpg',
    'surgical-cover': '/hero-6.jpg',
    'everyday-health': '/hero-city.jpg',
    'trauma-insurance': '/hero-5.jpg',
    'life-insurance': '/hero-8.jpg',
    'income-protection': '/hero-city.jpg',
    'business-health': '/hero-6.jpg',
    'mental-health': '/hero-7.jpg',
  }
  const heroImage = heroImages[slug] || '/hero-7.jpg'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />

      {/* ── Hero ── */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          minHeight: '380px',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-end"
          style={{ minHeight: '380px' }}
        >
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/coverage/" className="hover:text-white transition-colors">Coverage</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{coverage.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{coverage.icon}</span>
            <span className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Health Insurance
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {coverage.title}
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            {coverage.shortDesc}
          </p>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── LEFT: Content ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Long description */}
              <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  What Is {coverage.title}?
                </h2>
                <div className="space-y-4">
                  {coverage.longDesc.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </section>

              {/* Key benefits */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">What&apos;s Covered</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {coverage.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                      <p className="text-gray-700 text-sm leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Who needs it */}
              <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Who Needs {coverage.title}?</h2>
                <div className="space-y-3">
                  {coverage.whoNeedsIt.map((who, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-emerald-500 font-bold mt-0.5">→</span>
                      <p className="text-gray-700">{who}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Illustrative worked examples */}
              {coverage.scenarios && coverage.scenarios.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Worked Examples</h2>
                  <p className="text-gray-500 text-sm mb-6">
                    These are illustrations of how this type of cover is designed to work. They are
                    not accounts of real people, and they are not records of any insurer&rsquo;s claim
                    decision. What is actually payable depends on the plan you hold, its benefit
                    maximums and any waiting periods or exclusions that apply to you.
                  </p>
                  <div className="space-y-6">
                    {coverage.scenarios.map((scenario, i) => (
                      <div key={i} className="bg-gray-900 rounded-2xl p-8">
                        <h3 className="text-lg font-bold text-white mb-6">{scenario.title}</h3>
                        <div className="space-y-5">
                          <div>
                            <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                              Situation
                            </span>
                            <p className="text-gray-300 leading-relaxed text-sm">{scenario.situation}</p>
                          </div>
                          <div className="border-t border-gray-700 pt-5">
                            <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                              Outcome
                            </span>
                            <p className="text-emerald-200 font-medium leading-relaxed text-sm">{scenario.outcome}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Providers */}
              <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">NZ Providers Offering This Cover</h2>
                <p className="text-gray-500 text-sm mb-6">A licensed adviser can quote you across all of these at no charge. The order below carries no meaning — we do not rank or rate insurers.</p>
                <div className="space-y-3">
                  {coverage.providers.map((provider, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl p-4 border bg-gray-50 border-gray-200">
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-800">
                          {provider.name}
                        </p>
                        {provider.note && (
                          <p className="text-gray-500 text-xs mt-0.5">{provider.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cost factors */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">What Affects the Cost?</h2>
                <p className="text-gray-500 text-sm mb-5">
                  Premiums for {coverage.title} vary between individuals. These are the key factors that determine your rate:
                </p>
                <div className="space-y-3">
                  {coverage.costFactors.map((factor, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
                      <span className="flex-shrink-0 text-gray-400 font-bold text-sm w-6 text-center">{i + 1}</span>
                      <p className="text-gray-700 text-sm">{factor}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: `What does ${coverage.title} actually cover?`,
                      a: coverage.description,
                    },
                    {
                      q: `How much does ${coverage.title} cost per month?`,
                      a: `We cannot give you a price for this cover, because no New Zealand health insurer publishes a full premium schedule. What we can tell you is what moves the number: your age, your medical history, the excess you choose, the level of cover, and who else is on the policy. An adviser can quote your actual situation at no charge.`,
                    },
                    {
                      q: 'Are pre-existing conditions covered?',
                      a: 'Pre-existing conditions are typically excluded from cover, or may be subject to a premium loading. The definitions vary by insurer, and some conditions may be covered after a stand-down period. An adviser will help you understand each provider\'s approach before you commit.',
                    },
                    {
                      q: 'How do I claim?',
                      a: 'Claims processes differ by insurer. Most offer online or app-based claiming, and for surgical or hospital treatment the provider will often bill the insurer directly where the treatment has been approved in advance. For everyday cover you generally submit receipts and are reimbursed. Ask your insurer what their current process and turnaround are.',
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                      <h3 className="font-extrabold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* General information notice */}
              <AdviceNotice />

              {/* Bottom CTA */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-white mb-3">
                  Ready to Compare {coverage.title}?
                </h2>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                  Tell us what you need and we will pass your details to one of the specialist
                  brokers or underwriters we work with, each vetted before we refer them anything.
                  They quote you across the insurers they can place. No obligation, no cost to you.
                </p>
                <Link
                  href="/contact/"
                  className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Get a Quote →
                </Link>
              </div>

              {/* Internal links */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Guides</h3>
                <ul className="space-y-2 mb-4">
                  <li><Link href="/compare/" className="text-emerald-600 hover:text-emerald-500 text-sm">→ Compare All NZ Health Insurance Providers</Link></li>
                  <li><Link href="/blog/" className="text-emerald-600 hover:text-emerald-500 text-sm">→ NZ Health Insurance Guides & Articles</Link></li>
                  <li><Link href="/faqs/" className="text-emerald-600 hover:text-emerald-500 text-sm">→ Frequently Asked Questions</Link></li>
                  <li><Link href="/contact/" className="text-emerald-600 hover:text-emerald-500 text-sm">→ Get a Personalised Quote</Link></li>
                </ul>
                <p className="text-gray-400 text-xs">
                  External resources:{' '}
                  <a href="https://www.pharmac.govt.nz" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">PHARMAC (funded medicines)</a>
                  {' · '}
                  <a href="https://www.tewhatuora.govt.nz" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">Health New Zealand (Te Whatu Ora)</a>
                  {' · '}
                  <a href="https://www.fma.govt.nz/consumers/insurance/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">FMA — Insurance guidance</a>
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 leading-relaxed">
                BestHealthInsurance.co.nz is an independent referral service. We connect you with licensed insurance advisers regulated under the Financial Markets Conduct Act 2013. We do not provide financial advice.{' '}
                <Link href="/disclaimer/" className="text-emerald-500 underline hover:text-emerald-400">
                  See full disclaimer
                </Link>.
              </p>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <aside className="space-y-6 lg:sticky lg:top-24">

              {/* Quote form */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold text-gray-900">Get a {coverage.title} Quote</h3>
                  <p className="text-gray-500 text-xs mt-1">Licensed NZ adviser responds within 24 hours.</p>
                </div>
                <QuoteForm compact />
              </div>

              {/* What a quote depends on */}
              <div className="bg-emerald-500 rounded-2xl p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-100 mb-1">What it costs</p>
                <p className="text-2xl font-extrabold">Quoted on your details</p>
                <p className="text-emerald-100 text-sm mt-1">There is no list price to show you.</p>
                <p className="text-emerald-200 text-xs mt-3 leading-relaxed">
                  No New Zealand health insurer publishes a full premium schedule. What you pay
                  depends on your age, your medical history, the excess you choose and the level of
                  cover. A licensed adviser can quote you across the major insurers at no charge.
                </p>
              </div>

              {/* Social proof */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { stat: '5+', label: 'providers compared' },
                    { stat: '24hr', label: 'adviser response' },
                    { stat: '100%', label: 'licensed advisers' },
                  ].map((item) => (
                    <div key={item.stat}>
                      <p className="text-emerald-500 font-extrabold text-lg">{item.stat}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other coverage types */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Other Coverage Types</h3>
                <ul className="space-y-2">
                  {otherCoverages.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/coverage/${c.slug}/`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors py-1"
                      >
                        <span className="text-base">{c.icon}</span>
                        <span>{c.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
