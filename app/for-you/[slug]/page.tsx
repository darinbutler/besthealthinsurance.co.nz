import { FOR_YOU_SEGMENTS } from "../../../data/coverage";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";

export function generateStaticParams() {
  return FOR_YOU_SEGMENTS.map((segment) => ({
    slug: segment.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const segment = FOR_YOU_SEGMENTS.find((s) => s.slug === params.slug);
  return {
    title: `${segment?.title} Health Insurance | BestHealthInsurance.co.nz`,
    description: segment?.desc,
  };
}

const segmentContent: Record<string, { title: string; intro: string; keyPoints: string[]; recommendations: string[] }> = {
  individuals: {
    title: "Best Health Insurance for Individuals",
    intro: "As an individual, private health insurance gives you personal control over your healthcare decisions and access to treatment on your timeline. Start with the right foundation and build from there.",
    keyPoints: [
      "Choose your excess to match your budget and risk tolerance",
      "Start with major medical or surgical cover — the most cost-effective foundation",
      "Add cancer cover to protect against catastrophic costs",
      "Ask what each plan actually pays for mental health, and on what conditions",
    ],
    recommendations: [
      "Major Medical Cover: Best starting point for complete protection",
      "Ask an adviser which plan fits your situation",
      "Cancer Cover: Critical given 1 in 3 Kiwis get cancer",
      "Consider higher excess ($500-$1,000) to reduce premiums",
    ],
  },
  families: {
    title: "Best Health Insurance for Families",
    intro: "Protect your whole family with private health insurance. Family policies offer discounts and ensure everyone has access to quality private healthcare when they need it.",
    keyPoints: [
      "Adding children to an existing policy usually costs far less than insuring them separately — ask for both to be quoted",
      "Family discounts typically save 5-15% vs individual policies",
      "Major medical cover is essential for all adult family members",
      "Review cover annually as your family circumstances change",
    ],
    recommendations: [
      "Major Medical Cover: Essential for all adult family members",
      "Specialists: Valuable when children develop conditions requiring specialist input",
      "Mental Health Cover: Increasingly important for families with teenagers",
      "Take advantage of free or low-cost children's premiums",
    ],
  },
  seniors: {
    title: "Best Health Insurance for Seniors",
    intro: "For over-65s, private health insurance provides access to faster diagnosis and treatment at a time when health needs typically increase. Getting the right cover — and not overpaying — matters most.",
    keyPoints: [
      "Premiums increase significantly with age — get quotes now if approaching 65",
      "Check for age-out provisions in your policy",
      "Joint replacements and eye surgery often justify the cost alone",
      "Maintain cover to avoid new exclusions when applying later",
    ],
    recommendations: [
      "Major Medical Cover: Critical for orthopaedic and specialist access",
      "Ask an adviser how each insurer treats your age band",
      "Cancer Cover: Increasingly important with age",
      "Consider $500 excess (not $1,000) on fixed retirement income",
    ],
  },
  "self-employed": {
    title: "Best Health Insurance for Self-Employed",
    intro: "Without employer sick leave, self-employed Kiwis need both health insurance and income protection to manage the financial impact of illness or injury. For you, a specialist waiting list isn't just a health issue — it's a business crisis.",
    keyPoints: [
      "Income protection insurance replaces 75% of your income if you can't work",
      "Major medical cover ensures illness doesn't force you into public waiting lists",
      "Quick access to specialists means quicker diagnosis and return to work",
      "Health insurance is a business cost — faster treatment means faster earnings",
    ],
    recommendations: [
      "Major Medical Cover: Essential when there's no sick leave safety net",
      "Income Protection: Critical — covers 75% of income during illness",
      "Ask an adviser about cover that suits self-employed income",
      "Combination of health + income protection is the ideal setup",
    ],
  },
  "business-owners": {
    title: "Best Health Insurance for Business Owners",
    intro: "Group health insurance for your team is a valuable staff benefit that improves retention and productivity — and premiums are often tax-deductible for the business.",
    keyPoints: [
      "Group health policies offer employee discounts vs individual rates",
      "Improves staff retention and morale",
      "Business premiums are tax-deductible as an employee benefit",
      "Covers employees and can extend to their families",
    ],
    recommendations: [
      "Business Health Cover: Group rates save 10-20% vs individual policies",
      "Major Medical as base: Shows employees you value their wellbeing",
      "Ask an adviser about group and workplace options",
      "Review annually to ensure competitiveness as your team grows",
    ],
  },
  "new-to-nz": {
    title: "Best Health Insurance for New Arrivals to NZ",
    intro: "Moving to New Zealand? Understanding the NZ health system and getting private health insurance early ensures you're protected from day one — and prevents pre-existing condition exclusions building up.",
    keyPoints: [
      "NZ has a public health system, but waiting lists can be long",
      "As a new resident, you have immediate access to public healthcare",
      "Private insurance gives you choice and faster access",
      "Getting insurance early prevents pre-existing exclusions building up",
    ],
    recommendations: [
      "Major Medical Cover: Start with comprehensive cover from the start",
      "Ask an adviser how your medical history will be treated",
      "Apply within 3 months of arrival for best underwriting terms",
      "Consider comprehensive cover to understand all NZ health insurance options",
    ],
  },
};

export default function ForYouPage({ params }: { params: { slug: string } }) {
  const segment = FOR_YOU_SEGMENTS.find((s) => s.slug === params.slug);
  const content = segmentContent[params.slug];

  if (!segment || !content) {
    return <div className="text-center py-20 text-white">Segment not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{segment.icon}</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{content.title}</h1>
          </div>
          <p className="text-lg text-gray-400">{content.intro}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">Why It Matters</h2>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Key Considerations</h3>
              <ul className="space-y-3">
                {content.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-emerald-400 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Our Recommendations</h3>
              <ul className="space-y-3">
                {content.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-emerald-400 flex-shrink-0">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="h-fit">
            <QuoteForm
              title={`Get a ${segment.title} Quote`}
              subtitle={`Personalised health insurance for ${segment.title.toLowerCase()}`}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Independent</h3>
              <p className="text-gray-400 text-sm">Our service is completely independent. Advisers are paid by providers, not you.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">All Providers</h3>
              <p className="text-gray-400 text-sm">Covering Southern Cross, nib, AIA, UniMed and Partners Life — all major NZ health insurers.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Quotes</h3>
              <p className="text-gray-400 text-sm">Get a personalised quote within 24 hours. No waiting around.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {FOR_YOU_SEGMENTS.filter(s => s.slug !== params.slug).map((s) => (
              <Link key={s.slug} href={`/for-you/${s.slug}/`} className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors">
                <span>{s.icon}</span><span>{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
