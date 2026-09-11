import Link from "next/link";

export const metadata = {
  title: "Health Insurance FAQs New Zealand | BestHealthInsurance.co.nz",
  description: "Frequently asked questions about health insurance in New Zealand — costs, coverage, providers, pre-existing conditions, and how to choose. Expert answers from our NZ adviser team.",
  alternates: { canonical: "https://besthealthinsurance.co.nz/faqs/" },
  openGraph: {
    title: "Health Insurance FAQs New Zealand | BestHealthInsurance.co.nz",
    description: "Get answers to the most common NZ health insurance questions — what's covered, how much it costs, which provider to choose, and more.",
    url: "https://besthealthinsurance.co.nz/faqs/",
    type: "website",
  },
};

const faqs = [
  {
    category: "General",
    items: [
      { q: "Why should I get private health insurance in New Zealand?", a: "Private health insurance helps you skip public waiting lists, which can stretch to 6-24 months for elective surgery. It gives you choice of specialist, access to non-Pharmac drugs, faster diagnosis, and peace of mind. Particularly valuable if you need planned surgery, are diagnosed with cancer, or want choice of provider." },
      { q: "Do I need private health insurance if I have ACC cover?", a: "ACC covers accidental injuries only. It doesn't cover illnesses like cancer, heart disease, diabetes, or other medical conditions. Private health insurance covers these illness-related conditions that ACC excludes. Ideally, you want both layers of protection." },
      { q: "What's the difference between public and private healthcare in New Zealand?", a: "Public healthcare is free (tax-funded) but has long waiting lists. You get treated when the system has capacity. Private healthcare means you choose when and where to be treated, which specialist treats you, and you don't wait on public lists. Private health insurance helps you access private treatment." },
      { q: "Which health insurer do you recommend?", a: "We don't recommend one. We are not a financial advice provider, so recommending an insurer to you is not something we are able to do, and any site that ranks insurers without knowing your medical history is guessing. What we can do is explain what each one publishes about its own plans, then introduce you to an adviser who can look at your situation properly." },
    ],
  },
  {
    category: "Costs & Premiums",
    items: [
      { q: "How much does private health insurance cost in New Zealand?", a: "We do not publish a price range, because no New Zealand health insurer publishes a full premium schedule and any range we invented would be guesswork. Two insurers publish a starting price for one particular plan: nib state their Everyday plans start from around $15 a week and Hospital plans from about $20 a week (their basis: as at July 2025, including a 2% direct debit discount, for a 25-year-old male non-smoker with a $250 excess on Hospital cover), and UniMed state their Health Positive plan starts from $5.75 a week (their basis: a member aged 39 or under on the Health Positive 50% plan). Those are different products on different bases and are not comparable with each other. What you would pay depends on your age, your medical history, the excess you choose, the level of cover and who else is on the policy." },
      { q: "What's an excess and how does it affect my premiums?", a: "An excess is the amount you pay out-of-pocket before insurance kicks in. Higher excess = lower premiums. For example, a $1,000 excess typically costs 30-40% less than a $250 excess. Choose an excess you could comfortably pay from savings." },
      { q: "Do premiums increase every year?", a: "Health insurance premiums generally rise over time, for two reasons that work together: the cost of healthcare rises, and your own premium rises as you get older regardless of whether you claim. We do not publish an annual percentage, because insurers do not publish one and it varies by insurer, by plan and by age band. Ask your insurer when their annual review date falls and what the increase has been on your plan over the past few years — that is a fair question and they can answer it." },
    ],
  },
  {
    category: "Coverage & Claims",
    items: [
      { q: "What does private health insurance actually cover?", a: "Major medical cover pays for planned surgery, hospital stays, specialist consultations, and diagnostic tests (MRI, CT scans). Comprehensive policies add cancer treatment and everyday benefits (GP visits, prescriptions, dental, optical). Non-Pharmac drugs are covered by premium policies." },
      { q: "Does health insurance cover pre-existing conditions?", a: "Pre-existing conditions are usually excluded from cover, but you can still get insurance. The insurer will either exclude the specific condition, apply a premium loading, or accept you with standard cover depending on your health history. A licensed adviser can help find the best terms for your situation." },
      { q: "What is a non-Pharmac drug and why does it matter?", a: "Pharmac is the NZ government agency that funds certain medicines. Non-Pharmac drugs are medicines not on Pharmac's funded list — often newer cancer drugs or specialist treatments. These can cost $2,000-8,000 per month. Comprehensive health insurance policies cover these up to annual limits." },
      { q: "What's the difference between major medical and surgical cover?", a: "Surgical cover pays only for the surgery itself — hospital admission, operating theatre, surgeon fees. Major medical cover adds specialist consultations, diagnostic tests (MRI, CT scans), and outpatient procedures. If you have any ongoing health condition, major medical is almost always worth the additional cost." },
    ],
  },
  {
    category: "Providers",
    items: [
      { q: "What happened to Accuro?", a: "The Accuro brand has merged into UniMed, and everything has moved to the UniMed website. If you hold a plan originally issued by Accuro, such as SmartCare, SmartCare+, StaffCare, StaffCare+ or SmartStay, the terms are set out in your Health Plan document and your member portal is still the UniMed one." },
      { q: "What does Southern Cross offer?", a: "Southern Cross describes itself as a for-purpose Friendly Society founded in 1961, and publishes that more than 951,000 New Zealanders were with it as at 30 June 2025. Southern Cross states it has been Reader's Digest Most Trusted Health Insurance Brand from 2017 to 2026, which it describes as its tenth consecutive year. Practical features include Affiliated Providers and Easy-Claim, so claims can be paid directly to the provider, and a Healthcare Finder for contracted specialists. Whether it suits you is a question for an adviser who knows your situation." },
      { q: "What does nib offer?", a: "nib split cover into Everyday, for day-to-day costs like dentist, GP and physio, and Hospital, for surgery, cancer treatment and diagnostics. You can buy one or both, and on Hospital plans you pick an excess, which nib say lowers the premium. They publish that buying online involves no health questions, and that on a Hospital plan many pre-existing conditions can be covered after three years. nib are one of two insurers of the five that publish a starting price: from around $15 a week for Everyday and about $20 a week for Hospital. nib's own basis matters — that is as at July 2025, includes a 2% direct debit discount, and assumes a 25-year-old male non-smoker with a $250 annual excess on Hospital cover." },
      { q: "Is Partners Life still NZ-owned?", a: "Partners Life was acquired by Dai-ichi Life Insurance of Japan in 2023, and continues to operate as a New Zealand-run business. Their Private Medical Cover sits within a wider range that also includes life, income and trauma cover, and it is sold through financial advisers rather than direct. We do not rank policy wordings — ask for the full wording for the plan you are quoted and read the pre-existing condition definition, the non-Pharmac drug limit and the annual maximums." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
    { "@type": "ListItem", position: 2, name: "FAQs", item: "https://besthealthinsurance.co.nz/faqs/" },
  ],
};

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400">Everything you need to know about health insurance in New Zealand.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-800">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((faq, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 py-14">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-emerald-100 mb-8">The specialist advisers we work with are happy to help. Get in touch for personalised advice.</p>
          <Link href="/contact/" className="inline-block bg-white hover:bg-gray-100 text-emerald-700 font-bold px-10 py-4 rounded-lg transition-colors shadow-lg">
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
