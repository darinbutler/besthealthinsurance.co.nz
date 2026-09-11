import type { Metadata } from 'next'
import { PROVIDERS } from '../../data/site'
import QuoteForm from '../components/QuoteForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare NZ Health Insurance Providers | BestHealthInsurance',
  description: 'How health cover works across Southern Cross, nib, AIA, UniMed and Partners Life, using what each insurer publishes about its own plans. Then get matched with an adviser who can quote for you.',
  alternates: { canonical: 'https://besthealthinsurance.co.nz/compare/' },
  openGraph: {
    title: 'Compare NZ Health Insurance Providers',
    description: 'How cover works across the five main NZ health insurers, from what each one publishes about its own plans.',
    url: 'https://besthealthinsurance.co.nz/compare/',
    type: 'website',
  },
}

const comparePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://besthealthinsurance.co.nz/compare/#webpage",
  url: "https://besthealthinsurance.co.nz/compare/",
  name: "Compare NZ Health Insurance Providers 2026",
  description: "How health cover works across Southern Cross, nib, AIA, UniMed and Partners Life, drawn from each insurer's own published plan information.",
  inLanguage: "en-NZ",
  isPartOf: { "@id": "https://besthealthinsurance.co.nz/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
      { "@type": "ListItem", position: 2, name: "Compare Providers", item: "https://besthealthinsurance.co.nz/compare/" },
    ],
  },
  about: [
    { "@type": "Organization", name: "Southern Cross Health Insurance", url: "https://www.southerncross.co.nz" },
    { "@type": "Organization", name: "nib New Zealand", url: "https://www.nib.co.nz" },
    { "@type": "Organization", name: "AIA New Zealand", url: "https://www.aia.co.nz" },
    { "@type": "Organization", name: "UniMed", url: "https://unimed.co.nz" },
    { "@type": "Organization", name: "Partners Life", url: "https://www.partnerslife.co.nz" },
  ],
};



export default function ComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparePageSchema) }} />

      {/* ── Hero ── */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: 'url(/hero-city.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          minHeight: '340px',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-end" style={{ minHeight: '340px' }}>
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare Providers</span>
          </nav>
          <span className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
            Provider Guide
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Compare NZ Health Insurance Providers
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            What each of the five main insurers actually sells, in their own published words, so you know what you are being quoted on.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* ── Provider cards ── */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">The Five NZ Health Insurers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROVIDERS.map((provider) => (
                <Link
                  key={provider.slug}
                  href={`/health-insurance/${provider.slug}/`}
                  className="bg-white rounded-2xl border border-gray-200 p-5 hover:-translate-y-0.5 hover:border-emerald-300 transition-all shadow-sm"
                >
                  <div className="text-3xl mb-3">{provider.icon}</div>
                  <h3 className="text-base font-extrabold text-gray-900 mb-2 leading-tight">{provider.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{provider.note}</p>
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-3">
              Each description is drawn from what that insurer publishes about itself on its own
              website. We do not rank or rate insurers. No insurer pays us to appear here, to appear
              higher, or to be described favourably. If you take out a policy through an adviser we
              introduce you to, that adviser is paid a commission by the insurer &mdash; never by you.
            </p>
          </section>

          {/* ── What drives a premium (replaces the old price table) ── */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900">What Actually Drives Your Premium</h2>
              <p className="text-gray-500 text-sm mt-1">
                We do not build premium tables. Here is why, what two insurers do publish, and what moves the number.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
No New Zealand health insurer publishes a full premium schedule, so no site can build a
                like-for-like price table. Any per-insurer table you see has been gathered from
                somewhere else, and it is almost never comparing the same plan, the same excess and
                the same person. Two insurers do publish a starting price for a particular plan, and
                we set both out below in their own words. Beyond that we would rather tell you what
                moves the price and let an adviser quote your actual situation.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: 'Your age', d: 'The single largest factor. Premiums rise with age, and they keep rising after you join.' },
                  { t: 'The excess you choose', d: 'A higher excess lowers the premium. nib publish this directly: a higher excess means a lower premium.' },
                  { t: 'What the plan covers', d: 'Hospital and surgical only, everyday care only, or both. Adding non-Pharmac drug cover changes it again.' },
                  { t: 'Who is on the policy', d: 'Yourself, you and a partner, or a whole family. Some plans cover children without the parent being insured.' },
                  { t: 'Your medical history', d: 'Existing conditions may be excluded, loaded, or covered after a stand-down. This is why a real quote differs from any table.' },
                  { t: 'Smoking and wellbeing programmes', d: 'Smoker status affects pricing, and some insurers discount for engagement with a wellbeing programme.' },
                ].map((f) => (
                  <div key={f.t} className="bg-gray-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">{f.t}</p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">The two published starting prices</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Two of the five publish a starting price on their own website, each for one
                  particular plan and each on its own stated basis.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  <strong>nib</strong> state that their Everyday plans start from around{' '}
                  <strong>$15 a week</strong> and their Hospital plans from about{' '}
                  <strong>$20 a week</strong>. nib&rsquo;s own footnote is part of the figure: that is
                  as at July 2025, includes a 2% direct debit discount, and is based on a 25-year-old
                  male non-smoker with a $250 annual excess on Hospital cover.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  <strong>UniMed</strong> state that their Health Positive plan provides up to $10,000
                  of benefits a year from <strong>$5.75 a week</strong>. UniMed&rsquo;s own footnote is
                  again part of the figure: that is the weekly premium for a member aged 39 or under
                  on the Health Positive 50% plan.
                </p>
                <p className="text-gray-500 text-xs mt-3">
                  Those two figures are not comparable with each other. They are different products
                  for different purposes &mdash; nib&rsquo;s are Everyday and Hospital plans, UniMed&rsquo;s
                  Health Positive is an everyday-costs plan that excludes major surgery &mdash; quoted
                  on different bases for different people. We reproduce them because each insurer
                  published them, not as a price comparison and not as what you would pay. Southern
                  Cross, AIA and Partners Life do not publish a starting price, and we are not going
                  to estimate one on their behalf.
                </p>
              </div>
              <p className="text-gray-400 text-xs mt-5">
                Because pricing depends on all of the above, the only figure worth having is a quote
                for you. That is free and there is no obligation.
              </p>
            </div>
          </section>

          {/* ── What to compare (replaces the old tick-box matrix) ── */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900">What To Compare, And Why</h2>
              <p className="text-gray-500 text-sm mt-1">
                We used to show a tick-box grid here. We removed it, because a tick in a box cannot
                tell you the limit, the stand-down or the exclusion attached to it, and a dash
                implies an absence we cannot evidence. These are the questions worth asking instead.
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-5">
              {[
                { q: 'Non-Pharmac drug cover, and how much', d: 'This is where the biggest bills land. Cancer treatment using drugs Pharmac does not fund can run to tens of thousands a month. Ask for the annual limit in dollars, not whether it is "included".' },
                { q: 'Surgical and hospitalisation limits', d: 'Some plans state an annual dollar limit, some state unlimited for certain benefits. AIA, for example, publishes hospitalisation at $500,000 per policy year on its Private Health plan and unlimited inpatient treatment costs.' },
                { q: 'Everyday cover, or hospital only', d: 'GP, dental, optical and physio are usually a separate module or a different plan, not part of hospital cover. nib describe these as two distinct types of cover.' },
                { q: 'Specialists and diagnostics', d: 'Whether you need a referral, and whether imaging is covered before a surgical claim exists, varies a lot between plans.' },
                { q: 'Mental health', d: 'Ask what is actually payable and under what conditions. AIA publish a mental health support benefit of $2,500 per policy year on both their health plans.' },
                { q: 'Stand-downs and pre-existing conditions', d: 'The single biggest cause of declined claims. Ask how your own history will be treated before you apply, not after.' },
                { q: 'Prevention and wellbeing benefits', d: 'Some insurers pay towards screening and prevention. UniMed publish flu vaccine reimbursement up to $45 a person and free hearing checks with Bloom, among other member offers.' },
                { q: 'How premiums change as you age', d: 'Ask what the premium looks like at 60 and 70, not just today. This is the question most people wish they had asked.' },
              ].map((f) => (
                <div key={f.q} className="border-l-2 border-emerald-200 pl-4">
                  <p className="font-bold text-gray-900">{f.q}</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
            <div className="px-6 sm:px-8 pb-6">
              <p className="text-gray-400 text-xs">
                Benefit figures named above are published by that insurer on its own website and were
                checked on 11 September 2026. Limits change and policy wordings govern, so confirm
                against the current document before you decide.
              </p>
            </div>
          </section>

          {/* ── Provider profiles ── */}
          {/* Every claim below is something the insurer publishes about itself on its own
              website, checked 11 September 2026. No rankings, no badges, no price claims,
              and nothing said about one insurer by comparison with another. */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Provider Profiles</h2>
            <p className="text-gray-500 text-sm mb-6">
              In each insurer&apos;s own published words. We do not rate or score insurers, and no
              insurer pays us to appear here or to be described favourably.
            </p>

            <div className="space-y-5">

              {/* UniMed */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">UniMed</h3>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Accuro is now UniMed</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Accuro brand has merged into UniMed, and everything has moved to the UniMed
                  website. If you hold a plan originally issued by Accuro, such as SmartCare,
                  SmartCare+, StaffCare, StaffCare+ or SmartStay, the terms are in your Health Plan
                  document and your member portal is still the UniMed one.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  UniMed describes itself as a not-for-profit mutual society, operating since 1979, and publishes a range spanning everyday care through to
                  comprehensive hospital cover: Health Positive for prevention and everyday costs,
                  UniCare Advantage as all-in-one cover paying up to 80% of treatment costs within
                  benefit limits, Hospital Select for comprehensive surgical cover, and SmartCare+
                  and SmartCare for their highest level of cover for non-Pharmac subsidised drugs.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Three plans are built for situations the rest of the market largely does not serve.
                  UniMed describe <strong>SmartStay</strong> as the only New Zealand health insurance
                  for visitors or workers on short-term visas who are not eligible for publicly
                  funded healthcare, <strong>ParentStay</strong> for people applying for the Parent
                  Boost Visitor Visa, and <strong>KidSmart</strong> as the only New Zealand plan
                  designed for children, letting guardians insure dependants without taking out cover
                  themselves. If any of those describe you, it is worth asking about by name.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Structure</p><p className="font-bold text-gray-900 mt-1">Not-for-profit mutual</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Visitor cover</p><p className="font-bold text-gray-900 mt-1">SmartStay</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Parent Boost visa</p><p className="font-bold text-gray-900 mt-1">ParentStay</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Children only</p><p className="font-bold text-gray-900 mt-1">KidSmart</p></div>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  Source: <a href="https://unimed.co.nz/health-plans" rel="nofollow noopener" target="_blank" className="underline">unimed.co.nz/health-plans</a> and{' '}
                  <a href="https://unimed.co.nz/members" rel="nofollow noopener" target="_blank" className="underline">unimed.co.nz/members</a>, 11 September 2026.
                </p>
              </div>

              {/* nib */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-4">nib New Zealand</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Part of nib Group. nib publish that they specialise in health insurance and protect
                  the health of over 1.4 million people across New Zealand and Australia.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  They split cover into two types: Everyday, for day-to-day costs like dentist, GP
                  and physio, and Hospital, for surgery, cancer treatment, specialist consultations
                  and diagnostic investigations. You can pick an excess level on plans with Hospital
                  cover, and nib state plainly that a higher excess means a lower premium. Non-Pharmac
                  drug cover can be added. They also offer Wellness Coaches as one-on-one support.
                </p>
                <p className="text-gray-400 text-xs">
                  Source: <a href="https://www.nib.co.nz/health-insurance" rel="nofollow noopener" target="_blank" className="underline">nib.co.nz/health-insurance</a>, 11 September 2026.
                </p>
              </div>

              {/* AIA */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-4">AIA New Zealand</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AIA sell two health options: Private Health, covering a wide range of medical
                  conditions including surgery, specialist consultations and diagnostic imaging, and
                  Cancer Care, which covers cancer-related treatment only. Private Health can be
                  upgraded to Private Health Plus for additional diagnostics and specialist
                  consultations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Published benefit levels include hospitalisation up to $500,000 per policy year,
                  major diagnostic imaging and tests up to $200,000 per policy year, radiotherapy up
                  to $500,000 per policy year, and a mental health support benefit of $2,500 per
                  policy year. AIA Vitality, their wellbeing programme, can be added for $13.50 a
                  month for those aged 16 and over and carries a premium discount. AIA state they
                  paid over $177 million in health insurance claims in 2025.
                </p>
                <p className="text-gray-400 text-xs">
                  Source: <a href="https://www.aia.co.nz/en/our-products/health-insurance.html" rel="nofollow noopener" target="_blank" className="underline">aia.co.nz health insurance</a>, 11 September 2026. Summary only; policy wording governs.
                </p>
              </div>

              {/* Southern Cross */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-4">Southern Cross Health Society</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  New Zealand&apos;s largest health insurer, structured as a not-for-profit friendly
                  society, with a plan range running from entry-level surgical cover up to
                  comprehensive. We have not reproduced benefit figures here because we were not able
                  to retrieve their plan pages directly on 11 September 2026, and we would rather
                  link you to the source than quote something we have not read.
                </p>
                <p className="text-gray-400 text-xs">
                  See <a href="https://www.southerncross.co.nz/society" rel="nofollow noopener" target="_blank" className="underline">southerncross.co.nz</a> for current plans and wordings.
                </p>
              </div>

              {/* Partners Life */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-4">Partners Life</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  A life and health insurer that distributes through financial advisers rather than
                  selling direct, so a Partners Life quote generally comes via an adviser. As above,
                  we have not reproduced benefit figures we could not retrieve from their own site on
                  11 September 2026.
                </p>
                <p className="text-gray-400 text-xs">
                  See <a href="https://www.partnerslife.co.nz/" rel="nofollow noopener" target="_blank" className="underline">partnerslife.co.nz</a> for current products and wordings.
                </p>
              </div>

            </div>
          </section>

          {/* ── Private healthcare cost reference ──
              Figures below are each insurer's own published claims data, attributed and dated.
              The previous version cited "nib NZ claims data and public market data" without
              saying which figure came from where. ── */}
          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-extrabold text-white mb-2">What Private Treatment Costs</h2>
            <p className="text-gray-400 text-sm mb-6">
              Two insurers publish their own claims data. These are their figures, not ours.
            </p>

            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Published by AIA</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                { procedure: 'Spinal surgery', cost: '$30,000 – $250,000' },
                { procedure: 'Heart valve replacement', cost: '$100,000 – $120,000' },
                { procedure: 'Mastectomy with reconstruction', cost: '$50,000 – $100,000' },
                { procedure: 'Bowel resection', cost: '$50,000 – $80,000' },
                { procedure: 'Hip replacement', cost: '$35,000 – $50,000' },
                { procedure: 'Hernia repair', cost: '$8,500 – $20,000' },
                { procedure: 'Chemotherapy (per policy year)', cost: '$15,000 – $400,000' },
                { procedure: 'Non-Pharmac drugs (per month)', cost: '$8,000 – $60,000' },
                { procedure: 'MRI scan', cost: '$1,700 – $4,000' },
              ].map((item) => (
                <div key={item.procedure} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 border border-gray-700">
                  <span className="text-gray-300 text-sm">{item.procedure}</span>
                  <span className="text-emerald-400 font-bold text-sm whitespace-nowrap ml-3">{item.cost}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mb-8">
              Source: AIA Health Claims Data, 30 April 2026, published at aia.co.nz. AIA note these
              costs are illustrative only and that all claims are assessed on individual
              circumstances and policy terms.
            </p>

            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Published by nib</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { procedure: 'Chemotherapy', cost: '$15,000 – $170,000' },
                { procedure: 'Radiotherapy', cost: '$20,000 – $55,000' },
                { procedure: 'Varicose veins', cost: '$7,000 – $10,500' },
                { procedure: 'Wisdom teeth extraction', cost: '$3,500 – $5,200' },
                { procedure: 'CT scan', cost: '$1,300 – $1,700' },
                { procedure: 'Specialist consultation', cost: '$160 – $280' },
                { procedure: 'Mental health consultation', cost: '$170 – $255' },
                { procedure: 'Dental', cost: '$270 – $400' },
                { procedure: 'Physiotherapy', cost: '$45 – $70' },
              ].map((item) => (
                <div key={item.procedure} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 border border-gray-700">
                  <span className="text-gray-300 text-sm">{item.procedure}</span>
                  <span className="text-emerald-400 font-bold text-sm whitespace-nowrap ml-3">{item.cost}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Source: nib, published at nib.co.nz. nib state these are average claim statistics for
              Everyday and GP minor surgery claims during 2020, and for Outpatient and Hospital
              claims from October 2020 to February 2021, and that they do not represent what would
              be paid on any particular policy.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              The two sets are not directly comparable. They were gathered in different years using
              different methods, which is exactly why we have kept them apart rather than merging
              them into one table.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Let an Adviser Quote Your Situation</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  A table cannot tell you how your own medical history will be treated, and that is usually what decides things. A New Zealand adviser can quote your actual situation across the providers they are appointed with, at no charge to you.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Quotes from all 5 providers in one call',
                    'Pre-existing condition guidance',
                    'Premium reduction strategies',
                    'Registered NZ advisers, no sales pressure',
                    'Response within 24 hours',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-extrabold text-gray-900 mb-1">Get Personalised Quotes</h3>
                <p className="text-gray-500 text-xs mb-4">Takes 2 minutes. An adviser responds within 24 hours.</p>
                <QuoteForm compact />
              </div>
            </div>
          </section>

          <p className="text-xs text-gray-400 leading-relaxed">
            BestHealthInsurance.co.nz is operated by Cover4You Group and is an independent referral service. We are not a Financial Advice Provider. We do not compare policies for you, we do not recommend an insurer, and we do not give financial advice. We pass your details to a licensed New Zealand Financial Advice Provider we have vetted, and they give any advice. We do not build premium comparison tables, because no NZ health insurer publishes a full premium schedule. Where an insurer publishes a starting price for one of its own plans, we reproduce it with that insurer's stated basis and nothing added. Any premium you are quoted depends on your age, plan, excess and medical history.{' '}
            <Link href="/disclaimer/" className="text-emerald-500 underline hover:text-emerald-400">See full disclaimer</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
