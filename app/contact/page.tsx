import QuoteForm from "../components/QuoteForm";

export const metadata = {
  title: "Get a Health Insurance Quote NZ | BestHealthInsurance.co.nz",
  description: "Get connected with a licensed New Zealand financial adviser we have vetted, within 24 hours. No obligation, and no cost to you.",
  alternates: { canonical: "https://besthealthinsurance.co.nz/contact/" },
  openGraph: {
    title: "Get a Health Insurance Quote NZ | BestHealthInsurance.co.nz",
    description: "Get connected with a licensed New Zealand financial adviser within 24 hours, at no cost to you.",
    url: "https://besthealthinsurance.co.nz/contact/",
    type: "website",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://besthealthinsurance.co.nz/contact/#webpage",
  url: "https://besthealthinsurance.co.nz/contact/",
  name: "Get a Health Insurance Quote — BestHealthInsurance.co.nz",
  description: "Get connected with a licensed New Zealand health insurance adviser within 24 hours, at no cost to you.",
  inLanguage: "en-NZ",
  isPartOf: { "@id": "https://besthealthinsurance.co.nz/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
      { "@type": "ListItem", position: 2, name: "Get a Quote", item: "https://besthealthinsurance.co.nz/contact/" },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get a Quote</h1>
          <p className="text-lg text-gray-400">We pass your details to one of a number of specialist trusted brokers and underwriters we have vetted. They compare policies and advise you. We do not give advice ourselves. No pressure, no obligation.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Request a Quote</h2>
            <p className="text-gray-400 mb-8">Fill out the form and a specialist NZ insurance adviser will be in touch within 24 hours with a personalised quote.</p>
            <QuoteForm title="Get Your Best Health Insurance Quote" subtitle="Compare all major NZ providers in 24 hours" />
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Contact Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a href="mailto:hello@cover4you.co.nz" className="text-white font-semibold hover:text-emerald-400 transition-colors">
                    hello@cover4you.co.nz
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Website</p>
                  <a href="https://besthealthinsurance.co.nz" className="text-white font-semibold hover:text-emerald-400 transition-colors">
                    besthealthinsurance.co.nz
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Response Time</p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Why Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Independent health insurance comparison service",
                  "Compare all major NZ providers — including UniMed",
                  "NZ insurance advisers with years of market experience",
                  "No obligation — explore options guilt-free",
                  "Personalised advice for your situation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-lg p-8 border border-emerald-700">
              <h3 className="text-lg font-bold text-white mb-3">About Cover4You</h3>
              <p className="text-emerald-100 text-sm mb-4">BestHealthInsurance.co.nz is part of the Cover4You Group — passionate about helping New Zealanders find the right health insurance policy for their needs and budget.</p>
              <p className="text-emerald-100 text-sm">When you enquire, we connect you with a licensed NZ insurance adviser who compares all major providers on your behalf at no charge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is your service really free?", a: "Yes. There is no cost to you at any stage, and being referred by us does not increase what you pay for your policy. How the service is funded is set out in full in our Terms." },
              { q: "How long does it take to get a quote?", a: "Most quotes are provided within 24 hours. Simple quotes may be faster. We'll confirm timing when we contact you." },
              { q: "Do I have to buy insurance?", a: "Absolutely not. We're here to provide information and quotes. You're free to take your time deciding, or not buy at all." },
              { q: "Which providers do you compare?", a: "We look at Southern Cross, nib, AIA, UniMed and Partners Life — all major NZ health insurers. We do not rank them. Which one suits you depends on your age, your health history, the excess you choose and the benefits you actually want, so the adviser works that out with you rather than starting from a favourite." },
              { q: "Can you help with pre-existing conditions?", a: "Yes. Every insurer treats pre-existing conditions differently — some exclude them permanently, some apply a stand-down, some will review after a period. An adviser can walk you through how each one would treat your specific history before you apply." },
              { q: "Will you pressure me to buy?", a: "No. We provide information and options, and the decision is entirely yours. We're here to help, not to sell." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why New Zealanders Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👤", title: "Specialist Advisers", body: "We connect you with NZ insurance advisers who specialise in health insurance and know the market inside out." },
              { icon: "⚖️", title: "Independent", body: "We are not owned by an insurer, and the information we publish comes from what each insurer publishes about itself." },
              { icon: "🎯", title: "Your Best Interest", body: "We focus on finding you the right cover at the right price for your situation." },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
