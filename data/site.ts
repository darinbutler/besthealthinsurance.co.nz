export const SITE = {
  name: "BestHealthInsurance.co.nz",
  domain: "https://besthealthinsurance.co.nz",
  tagline: "NZ health insurance explained, then matched to an adviser",
  description: "Understand how health cover works in New Zealand across all the major providers, then get matched with a specialist adviser who can quote for your situation.",
  email: "hello@cover4you.co.nz",
  formCC: "harper@pulseadvice.co.nz",
  formSubject: "New Best Health Insurance Quote Request",
  formNext: "https://besthealthinsurance.co.nz/thank-you/",
  accentColor: "#10b981",
  adsenseId: "ca-pub-6745344450942342",
};

export const STATS = [
  { icon: "🏥", value: "8+", label: "Coverage Types" },
  { icon: "🔍", value: "5", label: "Providers Explained" },
  { icon: "💬", value: "Free", label: "No Cost To You" },
  { icon: "⚡", value: "24hr", label: "Adviser Response" },
];

/**
 * Provider list.
 *
 * Deliberately carries NO rating, NO "from" price, NO badge and NO
 * recommendation flag.
 *
 * What was here before: a 1-5 star rating per insurer that we invented with no
 * methodology, "from" premiums taken from a competitor comparison site, award
 * badges we made up ("Best Value", "HIGHLY RATED"), and notRecommended:true on
 * a named competitor that rendered as a warning triangle on every page.
 *
 * Standing rules for this file:
 *   1. No premium figures in this file. No NZ health insurer publishes a full
 *      premium schedule, so a per-insurer table could only come from a
 *      competitor comparison site, and we do not use those, ever. Two insurers
 *      do publish a starting price for one of their own plans (checked 11 Sep
 *      2026): nib, and UniMed for Health Positive. Those may be quoted ONLY
 *      with the insurer's own stated basis attached, and never side by side as
 *      though they were comparable — they are different products on different
 *      bases. Reproduce them on the compare page, not here.
 *   2. No ratings or rankings of any kind unless a named agency published them,
 *      with the date.
 *   3. `note` must be something the insurer publishes about itself on its own
 *      domain, and must read the same way to that insurer as it does to us.
 */
export const PROVIDERS = [
  {
    name: "nib",
    slug: "nib",
    icon: "🩺",
    color: "#e4002b",
    note: "Part of nib Group. Sells Everyday cover, Hospital cover, or both, with an excess you choose.",
    url: "https://www.nib.co.nz/health-insurance",
  },
  {
    name: "AIA",
    slug: "aia",
    icon: "💪",
    color: "#d4002d",
    note: "Offers Private Health and a separate Cancer Care plan, plus the AIA Vitality wellbeing programme.",
    url: "https://www.aia.co.nz/en/our-products/health-insurance.html",
  },
  {
    name: "UniMed",
    slug: "unimed",
    icon: "🛡️",
    color: "#1e6b2e",
    note: "A not-for-profit mutual society, operating since 1979. The Accuro brand has now merged into UniMed. Range spans everyday care through to comprehensive hospital cover.",
    url: "https://unimed.co.nz/health-plans",
  },
  {
    name: "Partners Life",
    slug: "partners-life",
    icon: "🤝",
    color: "#1e3a5f",
    note: "Life and health insurer selling through financial advisers rather than direct.",
    url: "https://www.partnerslife.co.nz/",
  },
  {
    name: "Southern Cross",
    slug: "southern-cross",
    icon: "🏥",
    color: "#003087",
    note: "New Zealand's largest health insurer, structured as a not-for-profit friendly society.",
    url: "https://www.southerncross.co.nz/society",
  }
];
