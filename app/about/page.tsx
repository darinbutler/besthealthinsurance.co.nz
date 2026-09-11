import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '../components/QuoteForm'

export const metadata: Metadata = {
  title: 'About BestHealthInsurance.co.nz | Independent NZ Health Insurance Comparison',
  description: 'BestHealthInsurance.co.nz is part of the Cover4You Group — passionate about helping Kiwis find the right health insurance policy for their needs and budget. Independent, honest, free to use.',
  alternates: { canonical: 'https://besthealthinsurance.co.nz/about/' },
  openGraph: {
    title: 'About BestHealthInsurance.co.nz | Independent NZ Health Insurance Comparison',
    description: 'Independent health insurance comparison and referral service for New Zealanders. We connect you with specialist advisers who compare all major providers.',
    url: 'https://besthealthinsurance.co.nz/about/',
    type: 'website',
  },
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://besthealthinsurance.co.nz/about/#webpage",
  url: "https://besthealthinsurance.co.nz/about/",
  name: "About BestHealthInsurance.co.nz",
  description: "BestHealthInsurance.co.nz is an independent health insurance comparison and referral service operated by the Cover4You Group. We connect New Zealanders with specialist advisers who compare all major providers.",
  inLanguage: "en-NZ",
  isPartOf: { "@id": "https://besthealthinsurance.co.nz/#website" },
  about: { "@id": "https://besthealthinsurance.co.nz/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://besthealthinsurance.co.nz/about/" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      {/* Hero */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: 'url(/hero-city.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
          minHeight: '320px',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-end" style={{ minHeight: '320px' }}>
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
            About BestHealthInsurance.co.nz
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Passionate about helping New Zealanders find the right health insurance policy — independent, honest, and at no cost to you.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Mission + Values */}
          <section className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BestHealthInsurance.co.nz is part of the Cover4You Group — an independent comparison and referral service dedicated to helping New Zealanders make informed decisions about private health insurance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are passionate about finding Kiwis the right policy to suit their requirements. Every New Zealander&apos;s situation is different — age, budget, family, health history, and what matters most all shape the ideal policy. Our job is to make the comparison process simple and connect you with the right expert.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe every Kiwi deserves access to honest, independent information about health insurance options — at no cost and without pressure. When you submit an enquiry, we connect you with a licensed NZ insurance adviser who does the hard work of comparing providers and presenting you with your best options.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-emerald-600 mb-6">Our Values</h2>
              <ul className="space-y-5">
                {[
                  { title: 'Independence', desc: 'We cover all the major providers — Southern Cross, UniMed, AIA, Partners Life and nib — and we do not rank or rate them.' },
                  { title: 'Transparency', desc: 'Where we state a fact about an insurer, it comes from what that insurer publishes, and we say where and when. Where nobody publishes a figure, we say so rather than guessing.' },
                  { title: 'Passion for Kiwis', desc: 'We care about finding the right cover for each individual — not just the cheapest or most popular option.' },
                  { title: 'Your Interest First', desc: 'The advisers we connect you with are paid by the insurers, not by you. Our focus is finding the right fit.' },
                ].map((v) => (
                  <li key={v.title} className="flex gap-3">
                    <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm">{v.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How it works */}
          <section className="bg-gray-900 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-extrabold text-white mb-10 text-center">How the Service Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'You Contact Us', body: 'Fill out our simple form with your details and what you\'re looking for. Takes under 2 minutes.' },
                { step: '2', title: 'We Refer You', body: 'We pass your details to a licensed New Zealand financial adviser we have already checked. That referral is the whole of our role.' },
                { step: '3', title: 'They Compare', body: 'Your adviser compares the insurers they hold an agency with, against your situation and your medical history.' },
                { step: '4', title: 'You Decide', body: 'You receive quotes and the adviser\'s recommendation. Take your time, ask questions, decide in your own time.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4">{item.step}</div>
                  <h3 className="text-base font-extrabold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How we vet advisers */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">How We Vet the Advisers We Refer You To</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not give advice. That makes the one thing we do control &mdash; who your enquiry
              goes to &mdash; the thing we take most seriously. Before any adviser receives a single
              enquiry from this site, we check the following, and we check it again periodically.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  t: 'They hold a current licence',
                  d: 'They must be a licensed Financial Advice Provider, or an authorised body or financial adviser operating under someone else\'s licence. We take their Financial Service Providers Register number and confirm it.',
                },
                {
                  t: 'They can actually advise on health cover',
                  d: 'A licence has a scope. Some advisers are licensed for life and income cover but not for standalone medical insurance. We check the scope covers what people ask us about, because an enquiry sent to an adviser who cannot place it helps nobody.',
                },
                {
                  t: 'They hold the right agencies',
                  d: 'An adviser can only quote insurers they hold an agency with. We ask which health insurers they are accredited with, so we know what your enquiry can realistically be quoted across.',
                },
                {
                  t: 'They belong to a disputes scheme',
                  d: 'Every licensed provider must belong to an approved dispute resolution scheme. We confirm which one, so you have somewhere independent to go if something goes wrong.',
                },
                {
                  t: 'They publish their disclosure',
                  d: 'They must be able to give you their disclosure information &mdash; what they advise on, the providers they work with, how they are paid, and how to complain. We ask for it, and we expect you to be given it.',
                },
                {
                  t: 'We watch what happens next',
                  d: 'We track whether enquiries are contacted promptly and how they are handled. An adviser who does not look after the people we send them stops receiving enquiries.',
                },
              ].map((v) => (
                <div key={v.t} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-bold text-gray-900 text-sm">{v.t}</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6 leading-relaxed">
              None of this makes us the adviser. The advice is theirs, they are responsible for it,
              and they are the ones licensed to give it. What we are responsible for is not sending
              you to someone who should not be receiving your enquiry in the first place.
            </p>
          </section>

          {/* Providers */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">The Providers We Cover</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏥', name: 'Southern Cross Health Society', desc: 'Describes itself as a for-purpose Friendly Society founded in 1961, and publishes that more than 951,000 New Zealanders were with it as at 30 June 2025. Operates an Affiliated Provider network that can settle approved treatment costs directly.' },
                { icon: '🛡️', name: 'UniMed', desc: 'A not-for-profit mutual society operating since 1979. Plans include Hospital Select, UniCare Advantage, SmartCare+ and SmartCare, Health Positive, SmartStay, ParentStay and KidSmart. The Accuro brand has merged into UniMed.' },
                { icon: '💪', name: 'AIA', desc: 'Runs the AIA Vitality programme and publishes its premium discount rules in full: a 10% initial discount that then moves up or down each year with your engagement, to a maximum of 20%. A monthly membership fee applies.' },
                { icon: '🤝', name: 'Partners Life', desc: 'Offers Private Medical Cover as part of its wider Journey Plan range, alongside life, income and trauma cover. Sold through financial advisers rather than direct.' },
                { icon: '🩺', name: 'nib', desc: 'Splits cover into Everyday and Hospital plans and publishes indicative treatment costs on its own site. Part of nib Group, which states it covers over 1.4 million people across New Zealand and Australia.' },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-extrabold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/compare/" className="text-emerald-600 hover:text-emerald-700 text-sm font-bold underline transition-colors">
                See what each provider publishes about its own cover →
              </Link>
            </div>
          </section>

          {/* Transparent model */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Our Transparent Model</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'How the Service Is Funded',
                  body: 'BestHealthInsurance.co.nz is a free comparison and referral service. When you take out a health insurance policy through an adviser we refer you to, the insurer pays a commission to that adviser. You pay nothing — commission is built into the provider\'s standard pricing, the same whether you go direct or through an adviser.',
                },
                {
                  title: 'No Pressure — Ever',
                  body: 'We provide information and connect you with advisers who can help. You\'re free to take your time deciding, compare elsewhere, or not buy at all. The advisers we work with are focused on finding the right fit — not on sales targets.',
                },
                {
                  title: 'Why Use a Referral Service?',
                  body: 'Going direct to an insurer means comparing their products only. Using our service means a specialist adviser compares all five providers simultaneously and presents you with the best options for your specific situation — saving you hours of research.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="font-extrabold text-emerald-600 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Find the Right Cover?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fill in the form and we&apos;ll connect you with a specialist NZ adviser who will compare all major providers for your situation and present you with your best options — no obligation.
                </p>
                <p className="text-gray-500 text-sm">
                  BestHealthInsurance.co.nz is an independent referral service. We do not provide financial advice. The advisers we refer you to are regulated under the Financial Markets Conduct Act 2013.{' '}
                  <Link href="/disclaimer/" className="text-emerald-600 underline hover:text-emerald-700">See full disclaimer</Link>.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <QuoteForm compact />
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
