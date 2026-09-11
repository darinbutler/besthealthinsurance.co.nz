import { PROVIDERS } from "../../../data/site";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import AdviceNotice from '@/app/components/AdviceNotice'
import ProviderMark from '@/app/components/ProviderMark'

export function generateStaticParams() {
  return PROVIDERS.map((provider) => ({
    slug: provider.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  return {
    title: `${provider?.name} Health Insurance NZ | BestHealthInsurance.co.nz`,
    description: `What ${provider?.name} publishes about its own health insurance in New Zealand — structure, plans and cover — plus the questions worth asking before you apply.`,
  };
}

/**
 * Provider detail.
 *
 * Rebuilt 11 September 2026. Every statement is something the insurer publishes
 * about itself on its own website. Removed in this pass:
 *   - a `warning` banner on nib asserting their premiums run 20-30% above market
 *   - comparative price claims about every insurer ("20-30% higher than",
 *     "10-15% below"), none of which we could source
 *   - "NZ's only member-owned health insurer", which is not correct
 *   - "our most recommended insurer"
 *   - `cons` arrays making unsourced negative claims about named competitors
 *
 * `checks` replaces `cons`. It asks questions rather than asserting failings,
 * because we cannot evidence an absence and a question is more use to a reader
 * anyway. Do not reintroduce comparative pricing here. No NZ health insurer
 * publishes a full premium schedule; where one publishes a starting price for
 * its own plan it goes on the compare page with that insurer's stated basis,
 * never on these per-provider pages as a point of comparison.
 */
const providerDetails: Record<
  string,
  {
    tagline: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    coverage: string[];
    warning?: string;
  }
> = {
  "southern-cross": {
    tagline: "New Zealand's largest health insurer, a not-for-profit friendly society",
    description: "Southern Cross Health Society describes itself as a for-purpose Friendly Society, founded in 1961, and publishes that more than 951,000 New Zealanders were with it as at 30 June 2025. It states that it puts people before profits and that most of the money received in premiums goes back to members. Cover spans everyday healthcare and diagnostics through to major medical expenses including specialists, surgery and cancer care, with a separate Cancer Cover Plus plan.",
    pros: [
      "For-purpose Friendly Society, founded 1961",
      "More than 951,000 members as at 30 June 2025",
      "Reader's Digest Most Trusted Health Insurance Brand, 2017 to 2026 — Southern Cross states this is its tenth consecutive year",
      "Affiliated Providers and Easy-Claim, so claims can be paid directly to the provider",
      "Healthcare Finder tool for contracted doctors, specialists and facilities",
      "Member discounts on eye and hearing tests, dental and gym memberships",
    ],
    cons: [
      "What is the annual limit for non-Pharmac cancer drugs on the plan you are quoted?",
      "Is everyday cover (GP, dental, optical) included or a separate module?",
      "How will your own medical history be treated, and what stand-downs apply?",
      "What does the premium look like at 60 and 70, not just today?",
    ],
    bestFor: ["Those who value a not-for-profit structure", "People who want the largest affiliated provider network", "Comprehensive cover seekers"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Everyday Health Cover"],
  },
  nib: {
    tagline: "Everyday cover, Hospital cover, or both, with an excess you choose",
    description: "nib is part of nib Group and publishes that it specialises in health insurance, protecting the health of over 1.4 million people across New Zealand and Australia. They split cover into two types: Everyday, for day-to-day costs like dentist, GP and physio, and Hospital, for surgery, cancer treatment, specialist consultations and diagnostic investigations. On plans with Hospital cover you pick an excess level, and nib state directly that a higher excess means a lower premium. Cover for non-Pharmac funded drugs can be added.",
    pros: [
      "Clear split between Everyday and Hospital cover, so you can buy one or both",
      "Choice of excess level on Hospital plans, which nib say lowers the premium",
      "On a Hospital plan, nib publish that many pre-existing conditions can be covered after three years",
      "Buying online involves no health questions and takes under 10 minutes, with cover starting straight away subject to waiting periods",
      "Optional cover for non-Pharmac funded drugs",
      "Wellness Coaches offering one-on-one support",
    ],
    cons: [
      "What is the non-Pharmac drug limit on the plan you are quoted?",
      "Which excess level is the quote based on, and what does a lower one cost?",
      "Is everyday cover included, or is that a separate plan?",
      "How will any pre-existing condition be treated?",
    ],
    bestFor: ["People who want to buy hospital and everyday cover separately", "Those comfortable managing cover online", "Buyers who want to use the excess to control premium"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Everyday Health Cover", "Non-Pharmac drug option"],
  },
  aia: {
    tagline: "Private Health or Cancer Care, with the AIA Vitality programme as an option",
    description: "AIA New Zealand sells two health options: Private Health, which covers a wide range of medical conditions including surgery, specialist consultations and diagnostic imaging, and Cancer Care, which covers cancer-related treatment only. Private Health can be upgraded to Private Health Plus for additional diagnostics and specialist consultations. AIA Vitality, their wellbeing programme, can be added for $13.50 a month for those aged 16 and over and carries a premium discount. AIA state they paid over $177 million in health insurance claims in 2025.",
    pros: [
      "Hospitalisation up to $500,000 per policy year on Private Health",
      "Major diagnostic imaging and tests up to $200,000 per policy year",
      "Radiotherapy up to $500,000 per policy year",
      "Mental health support benefit of $2,500 per policy year on both plans",
      "Cancer Care available as a standalone, cancer-only plan",
      "AIA Vitality wellbeing programme with a premium discount, $13.50 a month",
    ],
    cons: [
      "Will you actually engage with Vitality? The discount depends on it.",
      "Cancer Care covers cancer only, so check what it does not cover",
      "Several benefits carry stand-downs of one to three years, so ask which",
      "How is your own medical history treated on application?",
    ],
    bestFor: ["People who want a cancer-only option", "Those who will use a wellbeing programme", "Buyers wanting stated dollar limits on major benefits"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Mental Health Support", "AIA Vitality"],
  },
  unimed: {
    tagline: "A not-for-profit mutual society, with plans built for situations much of the market does not serve",
    description: "UniMed describes itself as a not-for-profit health insurer and a mutual society, operating since 1979, that exists for its members rather than shareholders. The Accuro brand has now merged into UniMed and everything has moved to the UniMed website. If you hold a plan originally issued by Accuro, such as SmartCare, SmartCare+, StaffCare, StaffCare+ or SmartStay, the terms are set out in your Health Plan document and your member portal is still the UniMed one. UniMed's range spans Health Positive for prevention and everyday costs, UniCare Advantage as all-in-one cover paying up to 80% of treatment costs within benefit limits, Hospital Select for comprehensive surgical cover, and SmartCare+ and SmartCare for their highest level of cover for non-Pharmac subsidised drugs.",
    pros: [
      "Not-for-profit mutual society, operating since 1979",
      "SmartStay, which UniMed describe as the only NZ health insurance for visitors or workers on short-term visas who are not eligible for publicly funded healthcare",
      "ParentStay, for people applying for the Parent Boost Visitor Visa",
      "KidSmart, which UniMed describe as the only NZ plan designed for children, letting guardians insure dependants without taking out cover themselves",
      "SmartCare+ and SmartCare carry their highest level of cover for non-Pharmac subsidised drugs",
      "Active Benefits for preventative health and screening, including online GP advice",
      "Member offers including flu vaccine reimbursement up to $45 a person and free hearing checks with Bloom",
    ],
    cons: [
      "Which plan are you being quoted, and what is its non-Pharmac limit?",
      "If you were an Accuro member, which portal and which document applies to you now?",
      "Does UniCare Advantage's 80% share of treatment costs suit how you would use it?",
      "How will your own medical history be treated on application?",
    ],
    bestFor: ["People who value a not-for-profit mutual structure", "Visitors and short-term visa holders not eligible for public healthcare", "Parent Boost visa applicants", "Guardians insuring children without insuring themselves"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Non-Pharmac drug cover", "Everyday Health Cover", "Preventative Active Benefits"],
  },
  "partners-life": {
    tagline: "Life and health insurer distributing through financial advisers",
    description: "Partners Life sells Private Medical Cover, which they describe as helping you skip the queue and get access to private medical care. It sits inside their Partners Life Journey Plan alongside Mortgage Cover and Income Cover, and they emphasise that options can be added or removed as your circumstances change. Partners Life distribute through financial advisers rather than selling direct, so a quote generally comes to you via an adviser.",
    pros: [
      "Private Medical Cover funds access to treatment in the private sector rather than waiting on the public system",
      "Sits within the Partners Life Journey Plan alongside Mortgage Cover and Income Cover",
      "Cover options can be added or removed as circumstances change",
      "Arranged through an adviser, so the quote comes with advice",
    ],
    cons: [
      "You will generally need to go through an adviser rather than buying online",
      "What are the stated limits on the plan you are quoted?",
      "How does the health cover interact with any life or trauma cover you hold?",
      "How will your own medical history be treated?",
    ],
    bestFor: ["Buyers who want adviser-arranged cover", "People bundling health with life or trauma cover"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Life & Trauma alongside"],
  },
};

export default function ProviderPage({ params }: { params: { slug: string } }) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  const details = providerDetails[params.slug];

  if (!provider || !details) {
    return <div className="text-center py-20 text-white">Provider not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/health-insurance/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Providers</Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-400 text-sm">{provider.name}</span>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <ProviderMark name={provider.name} color={provider.color} size="lg" onDark />
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{provider.name}</h1>
              <p className="text-xl text-emerald-400">{details.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="bg-gray-800 border-b border-gray-700 py-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">NZ Wide</div>
              <p className="text-gray-400 text-sm">Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">About {provider.name}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{details.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">What they publish</h3>
                <ul className="space-y-2">
                  {details.pros.map((pro, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Questions to ask</h3>
                <ul className="space-y-2">
                  {details.cons.map((con, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-amber-400 flex-shrink-0">−</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-12">
              <h3 className="text-lg font-bold text-emerald-400 mb-4">Commonly Suits</h3>
              <ul className="space-y-2">
                {details.bestFor.map((item, idx) => (
                  <li key={idx} className="text-gray-300">• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Coverage Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.coverage.map((coverage, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-white font-semibold">{coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="h-fit sticky top-4">
            <QuoteForm
              title={`Get a ${provider.name} Quote`}
              subtitle={`Compare ${provider.name} with other major NZ providers`}
            />
            <p className="text-gray-500 text-xs mt-4 text-center">No obligation • Response within 24 hours</p>
          </div>
        </div>
      </section>

      {/* General information notice */}
      <section className="bg-white border-t border-gray-200 py-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AdviceNotice />
        </div>
      </section>

      {/* Compare Section */}
      <section className="bg-gray-800 border-t border-gray-700 py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Compare {provider.name} with Other Providers</h2>
          <p className="text-gray-400 mb-8">See what each of the five major New Zealand health insurers publishes about its own cover.</p>
          <Link href="/compare/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            View Full Comparison
          </Link>
        </div>
      </section>
    </>
  );
}
