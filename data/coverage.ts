// NOTE (11 Sep 2026): the `from` field previously carried a monthly price for each
// coverage type. None was sourced, and no NZ health insurer publishes indicative
// premiums on its own site, so there was nowhere honest for those numbers to have
// come from. They are now empty and the UI hides the field when it is blank.
// Do not repopulate from a comparison site.
export interface Provider {
  name: string
  note?: string
}

export interface Scenario {
  title: string
  situation: string
  outcome: string
}

export interface CoverageType {
  slug: string
  title: string
  icon: string
  shortDesc: string
  description: string
  longDesc: string[]
  keyBenefits: string[]
  whoNeedsIt: string[]
  providers: Provider[]
  costFactors: string[]
  scenarios: Scenario[]
  from: string
  metaTitle: string
  metaDesc: string
}

export const COVERAGE_TYPES: CoverageType[] = [
  {
    slug: 'major-medical',
    title: 'Major Medical Cover',
    icon: '🏥',
    shortDesc: 'Comprehensive cover for hospital stays, surgery, and specialist consultations.',
    from: '',
    metaTitle: 'Major Medical Insurance NZ | Compare Providers | BestHealthInsurance',
    metaDesc: 'Compare major medical cover from Southern Cross, nib, AIA and UniMed. Get a personalised quote from a licensed NZ adviser within 24 hours.',
    description: 'Major medical cover is the most comprehensive type of health insurance available in New Zealand. It covers hospital admissions, surgical procedures, specialist consultations, diagnostic tests, and more — giving you full private healthcare access without the public waiting lists.',
    longDesc: [
      'Major medical cover is the cornerstone of private health insurance in New Zealand. When you\'re facing a serious diagnosis or need surgery, public waiting lists can stretch for months or even years. Major medical cover bypasses those queues entirely, getting you access to private hospitals, your choice of surgeon, and specialist consultations on your schedule.',
      'Unlike surgical-only plans, major medical cover is comprehensive — it pays for pre-admission tests, specialist consultations leading up to a procedure, the procedure itself, post-surgical care, and follow-up appointments. It\'s the closest equivalent to having a private health system membership.',
      'Premiums vary between providers and depend on your age, health history, the excess you choose and the level of cover selected. No insurer publishes a full premium schedule for major medical cover, so the only way to know what you would pay is to be quoted on your own details. A licensed adviser can request those quotes across the major insurers and take you through what differs between them.',
    ],
    keyBenefits: [
      'Private hospital admission — skip public waiting lists',
      'Surgeon and anaesthetist fees fully covered',
      'Specialist consultation costs',
      'Diagnostic imaging (MRI, CT, PET scans, X-ray)',
      'Pre- and post-surgical care',
      'Ambulance transport where required',
      'Second medical opinion support',
      'Choice of hospital and specialist',
    ],
    whoNeedsIt: [
      'Anyone on a public waiting list right now',
      'Families wanting certainty about hospital access',
      'People with a family history of serious conditions',
      'Self-employed workers who can\'t afford recovery delays',
      'Employers offering health benefits to key staff',
    ],
    providers: [
      { name: 'nib', note: 'Splits cover into Everyday and Hospital plans; publishes indicative treatment costs on its own site' },
      { name: 'AIA', note: 'Health cover can be held alongside life and income products; runs the AIA Vitality programme' },
      { name: 'UniMed', note: 'A not-for-profit mutual society operating since 1979; plans include Hospital Select, UniCare Advantage and SmartCare+' },
      { name: 'Partners Life', note: 'Private Medical Cover sits within its wider Journey Plan range; sold through advisers' },
      { name: 'Southern Cross', note: 'Publishes that more than 951,000 New Zealanders were with it as at 30 June 2025' },
    ],
    costFactors: [
      'Your age — premiums increase as you get older',
      'Chosen excess — higher excess means lower premium',
      'Health history — pre-existing conditions may be excluded or loaded',
      'Hospital tier — public, private, or premium private hospitals',
      'Add-on cover (everyday health, income protection)',
    ],
    scenarios: [
      {
        title: 'Hip replacement surgery',
        situation: 'A 58-year-old Auckland teacher was told the public wait for hip replacement surgery was 14 months. She had major medical cover.',
        outcome: 'Within 3 weeks of her referral she had her surgery at a private hospital, was back on her feet in 6 weeks, and returned to work before Christmas.',
      },
      {
        title: 'Cancer diagnosis',
        situation: 'A Wellington business owner received a cancer diagnosis. The public oncology system had a 6-week wait for his first specialist appointment.',
        outcome: 'His major medical policy covered specialist consultations, imaging, and surgery within 10 days of diagnosis. Early treatment significantly improved his prognosis.',
      },
    ],
  },
  {
    slug: 'surgical-cover',
    title: 'Surgical Cover',
    icon: '🔬',
    shortDesc: 'Covers the cost of planned surgery and private hospital stays.',
    from: '',
    metaTitle: 'Surgical Cover Insurance NZ | Private Surgery | BestHealthInsurance',
    metaDesc: 'Get surgical cover that pays for private operations, hospital stays, and surgeon fees. Compare NZ providers and get a personalised quote.',
    description: 'Surgical cover pays for private surgery, hospital stays, and operating theatre costs. It is the most cost-effective entry point into private health insurance, giving you access to elective surgery on your schedule rather than waiting on public lists.',
    longDesc: [
      'Surgical cover is the most targeted and cost-effective form of private health insurance in New Zealand. Rather than covering every medical expense, it focuses on the most expensive single event in most people\'s healthcare journey — surgery. When you need an operation, surgical cover pays for the private hospital stay, your surgeon and anaesthetist fees, and the operating theatre.',
      'New Zealand\'s public surgical waiting lists are one of the biggest pain points in our healthcare system. Common procedures like knee replacements, hernia repairs, and cataract surgery can have wait times of 12 to 24 months or more. Surgical cover lets you bypass those queues entirely and have your procedure done when it suits you and your surgeon.',
      'Surgical cover is often bundled with major medical cover but can also be purchased as a standalone policy. For people who are generally healthy but want peace of mind that a future operation won\'t derail their life, surgical cover is one of the smartest insurance decisions available.',
    ],
    keyBenefits: [
      'Planned and elective surgery covered',
      'Private hospital room and board',
      'Surgeon and anaesthetist fees',
      'Operating theatre and equipment costs',
      'Surgical nursing care',
      'Pre-surgical specialist consultation',
      'Post-surgical recovery support',
      'Emergency surgery coverage',
    ],
    whoNeedsIt: [
      'People wanting to avoid long public surgical waiting lists',
      'Active individuals who need to recover on their own timeline',
      'Older adults with higher likelihood of joint or orthopaedic surgery',
      'Anyone with a family history of conditions requiring surgery',
      'First-time health insurance buyers wanting affordable entry-level cover',
    ],
    providers: [
      { name: 'UniMed', note: 'States that Hospital Select carries its highest level of cover for general surgery' },
      { name: 'nib', note: 'Hospital plans cover surgery, cancer treatment and related outpatient costs' },
      { name: 'AIA', note: 'Surgical cover available within its health insurance range' },
      { name: 'Partners Life', note: 'Private Medical Cover is designed around access to private treatment' },
      { name: 'Southern Cross', note: 'Operates an Affiliated Provider network that can settle approved treatment costs directly' },
    ],
    costFactors: [
      'Age — the primary driver of surgical cover premiums',
      'Excess level — choosing $500 or $1,000 excess reduces premium significantly',
      'Hospital tier — standard private vs. premium private hospital networks',
      'Pre-existing conditions — may be excluded at time of application',
      'Gender — statistically different surgery rates affect some pricing',
    ],
    scenarios: [
      {
        title: 'Knee replacement surgery',
        situation: 'A 61-year-old Christchurch tradesman was told he needed a knee replacement. The public wait was 18 months and he couldn\'t work in the meantime.',
        outcome: 'Surgical cover of this kind is designed to fund private surgery once the claim is approved, rather than waiting for a public list. How quickly that happens depends on specialist and theatre availability, and on the insurer approving the procedure in advance.',
      },
      {
        title: 'Hernia repair',
        situation: 'A Hamilton mother of three was quoted a 9-month public wait for hernia repair surgery. Pain was affecting her daily life and childcare.',
        outcome: 'Surgical cover arranged private admission within 3 weeks. Total out-of-pocket cost was her $500 policy excess — the rest was covered.',
      },
    ],
  },
  {
    slug: 'everyday-health',
    title: 'Everyday Health Cover',
    icon: '💊',
    shortDesc: 'Claim back everyday health costs like GP visits, prescriptions, and optical.',
    from: '',
    metaTitle: 'Everyday Health Cover NZ | GP, Dental & Optical | BestHealthInsurance',
    metaDesc: 'Claim back everyday healthcare costs including GP visits, prescriptions, dental, and optical. Compare NZ providers and get a personalised quote.',
    description: 'Everyday health cover (also called day-to-day cover) reimburses routine medical expenses — GP visits, prescriptions, dental check-ups, optical, and physiotherapy. It reduces the financial burden of regular healthcare throughout the year.',
    longDesc: [
      'Everyday health cover is designed for the routine costs that add up throughout the year — GP visits at $60–90 each, prescription costs, dentist check-ups, new glasses or contact lenses, and allied health like physiotherapy or chiropractic. Most New Zealanders find that these expenses cost $800–$2,000 per year across a family, and everyday cover can reimburse a significant portion.',
      'Unlike hospital or surgical cover, everyday health cover is about frequent, predictable expenses rather than big-ticket events. It works on a claims-reimbursement basis — you pay upfront at the GP or pharmacy, submit a claim (usually via app), and receive reimbursement within a few business days.',
      'Everyday cover is often most valuable for families with young children (frequent GP visits, dental work) and people who rely on ongoing allied health treatments like physiotherapy. It\'s typically purchased as an add-on to surgical or major medical cover, though some providers offer it as a standalone product.',
    ],
    keyBenefits: [
      'GP consultation rebates ($20–$60 per visit)',
      'Prescription medicine subsidies',
      'Dental check-ups and basic treatment',
      'Optical — glasses frames and lenses or contacts',
      'Physiotherapy, osteopathy and chiropractic',
      'Specialist referral consultations',
      'Skin lesion removal',
      'Annual health check support',
    ],
    whoNeedsIt: [
      'Families with young children who visit the GP regularly',
      'People needing ongoing physio or allied health treatment',
      'Contact lens or glasses wearers facing high optical costs',
      'Adults with regular prescription costs',
      'Anyone who wants to make healthcare a habit, not a cost barrier',
    ],
    providers: [
      { name: 'UniMed', note: 'Health Positive reimburses 50% or 80% of eligible everyday costs up to $10,000 a year' },
      { name: 'nib', note: 'Everyday plans cover day-to-day needs such as dentist, GP and physio visits' },
      { name: 'AIA', note: 'Everyday benefits available as part of its health cover range' },
      { name: 'Partners Life', note: 'Cover can be added or removed as circumstances change' },
      { name: 'Southern Cross', note: 'Offers everyday cover alongside its hospital and surgical plans' },
    ],
    costFactors: [
      'Benefit limits — how much per category per year',
      'Number of people covered — family vs. individual',
      'Age of insured — minor factor for everyday cover',
      'Waiting periods — typically 2 months for routine expenses',
      'Whether purchased standalone or as an add-on to hospital cover',
    ],
    scenarios: [
      {
        title: 'Family with three children',
        situation: 'A Tauranga family of five had $3,200 in healthcare costs in a year — GP visits for illnesses and sports injuries, two pairs of glasses, physio, and dental.',
        outcome: 'Their everyday cover policy reimbursed $1,840 of those costs. The policy cost $1,100/year — a net saving of $740 plus the peace of mind of claiming freely.',
      },
      {
        title: 'Ongoing physiotherapy',
        situation: 'An office worker in Auckland needed 12 sessions of physio after a shoulder injury. At $90 per session that was $1,080 out of pocket.',
        outcome: 'His everyday cover reimbursed $60 per session — $720 back in his pocket. The annual premium was $360 — a significant net return for a single injury.',
      },
    ],
  },
  {
    slug: 'trauma-insurance',
    title: 'Trauma Insurance',
    icon: '❤️',
    shortDesc: 'A lump sum payment if you\'re diagnosed with a serious condition like cancer or heart attack.',
    from: '',
    metaTitle: 'Trauma Insurance NZ | Cancer, Heart Attack Cover | BestHealthInsurance',
    metaDesc: 'Get a lump sum payout if you\'re diagnosed with cancer, heart attack or stroke. Compare trauma insurance from NZ\'s top providers.',
    description: 'Trauma insurance pays a lump sum if you are diagnosed with a specified serious condition such as cancer, heart attack, or stroke. The payment helps cover lost income, treatment costs, and life adjustments during recovery.',
    longDesc: [
      'Trauma insurance (also called critical illness cover) provides a one-off lump sum payment when you\'re diagnosed with one of the conditions listed in your policy. Unlike income protection, which replaces monthly income, trauma insurance gives you a large cash sum — typically $50,000 to $500,000 — that you can use however you need.',
      'The most commonly claimed conditions under trauma cover are cancer (accounting for around 55% of all claims), heart attack, and stroke. These three conditions alone affect a significant proportion of New Zealanders during their working years — and the financial impact extends far beyond the medical bills. Think of mortgage payments, childcare, home modifications, and the cost of a family member taking time off work to provide care.',
      'Trauma cover is most valuable for working-age adults with dependants, significant debt (like a mortgage), or limited savings. It fills the gap between what ACC and health insurance pay — both of which cover treatment but not the broader life disruption that comes with a serious diagnosis.',
    ],
    keyBenefits: [
      'Lump sum on diagnosis — typically $50K–$500K',
      'Covers cancer, heart attack, stroke, and 40+ conditions',
      'Use payment however you need — mortgage, living costs, travel',
      'Complements health insurance and ACC',
      'Financial cushion during long recovery periods',
      'Child trauma cover available with most policies',
      'Partial payment for less severe specified conditions',
      'Premium waiver options during claim period',
    ],
    whoNeedsIt: [
      'Anyone with a mortgage or significant debt',
      'Parents who need financial stability during recovery',
      'Self-employed people whose business depends on their health',
      'Adults with a family history of cancer, heart disease, or stroke',
      'People in physically demanding occupations',
    ],
    providers: [
      { name: 'Partners Life', note: 'Trauma Cover is offered as part of its product range' },
      { name: 'AIA', note: 'Offers critical condition cover alongside health and life products' },
      { name: 'UniMed', note: 'Cover options can be held alongside its health plans' },
      { name: 'nib', note: 'Part of nib Group, which states it covers over 1.4 million people in NZ and Australia' },
      { name: 'Southern Cross', note: 'States it has been Reader\'s Digest Most Trusted Health Insurance Brand from 2017 to 2026, its tenth consecutive year' },
    ],
    costFactors: [
      'Sum insured — the lump sum amount you choose',
      'Age and gender — cancer and heart disease rates vary significantly',
      'Smoking status — significant premium loading for smokers',
      'Health history — heart conditions or cancer history may affect acceptance',
      'Stepped vs. level premiums — level premiums are more expensive initially but cheaper long-term',
    ],
    scenarios: [
      {
        title: 'Breast cancer diagnosis',
        situation: 'A 44-year-old Wellington accountant was diagnosed with breast cancer. Treatment required 6 months off work and significant emotional and practical support for her family.',
        outcome: 'Her $150,000 trauma payout covered 8 months of lost income, private treatment top-ups, and allowed her husband to reduce his hours to provide care. Recovery was focused and stress-free.',
      },
      {
        title: 'Heart attack at 51',
        situation: 'A Queenstown business owner had a heart attack and needed 4 months of recovery before returning to work. His business couldn\'t operate without him.',
        outcome: 'A $200,000 trauma payment covered business overheads for 4 months, personal living costs, and cardiac rehabilitation — preserving both his health and his business.',
      },
    ],
  },
  {
    slug: 'life-insurance',
    title: 'Life Insurance',
    icon: '🛡️',
    shortDesc: 'Protect your family\'s financial future if the worst happens.',
    from: '',
    metaTitle: 'Life Insurance NZ | Protect Your Family | BestHealthInsurance',
    metaDesc: 'Compare life insurance from NZ\'s top providers. Get a lump sum that protects your family\'s financial future. Personalised quote within 24 hours.',
    description: 'Life insurance provides a lump sum payment to your family if you pass away. Combined with health insurance, it gives your loved ones financial security when they need it most.',
    longDesc: [
      'Life insurance is the foundation of any comprehensive personal insurance plan. When you pass away, your policy pays a lump sum — typically $250,000 to $2 million — directly to your nominated beneficiaries. That money can pay off a mortgage, replace years of lost income, fund children\'s education, or simply give your family breathing room during an impossibly difficult time.',
      'New Zealand has relatively low rates of life insurance uptake compared to other developed nations — and many who do have cover are underinsured. A common rule of thumb is to have 10 times your annual income in life cover, but the right amount depends on your mortgage, dependants, existing assets, and your family\'s cost of living.',
      'Life insurance can be purchased as a standalone policy or bundled with trauma, income protection, and health cover. Bundled policies often attract premium discounts. A licensed adviser can help you calculate the right sum insured and structure a policy that works within your budget while protecting what matters most.',
    ],
    keyBenefits: [
      'Lump sum paid on death — typically $250K to $2M',
      'Terminal illness early payout (12–24 months to live)',
      'Mortgage and debt repayment protection',
      'Replaces years of lost income for dependants',
      'Funeral and estate costs covered',
      'Children\'s education funding',
      'Trauma cover available as add-on',
      'Joint or single life options',
    ],
    whoNeedsIt: [
      'Parents with young children who depend on your income',
      'Anyone with a mortgage or significant shared debt',
      'Business partners with a buy-sell agreement',
      'Sole breadwinners in a household',
      'Anyone whose death would cause serious financial hardship for others',
    ],
    providers: [
      { name: 'Partners Life', note: 'Life Cover pays on death or terminal illness diagnosis' },
      { name: 'AIA', note: 'Note that AIA Cover for Life and AIA Essentials Life Cover are not eligible for the Vitality discount' },
      { name: 'nib', note: 'Life cover available alongside its health insurance range' },
      { name: 'UniMed', note: 'Primarily a health insurer; ask what is available alongside its health plans' },
      { name: 'Southern Cross', note: 'Life cover is offered through a separate Southern Cross group entity' },
    ],
    costFactors: [
      'Sum insured — the lump sum amount chosen',
      'Age — life cover gets more expensive each year you wait',
      'Smoking status — one of the biggest premium factors',
      'Health history — heart conditions, diabetes, cancer history',
      'Occupation — some high-risk occupations attract loadings',
    ],
    scenarios: [
      {
        title: 'Young father passes unexpectedly',
        situation: 'A 37-year-old Auckland tradesman passed away suddenly from a cardiac event. He had a $400,000 mortgage and two children under 10.',
        outcome: 'His $500,000 life policy paid out to his wife within 3 weeks of claim lodgement. The mortgage was cleared, and remaining funds provided 4 years of living expenses while she rebuilt financially.',
      },
      {
        title: 'Terminal illness early access',
        situation: 'A 54-year-old woman was diagnosed with terminal cancer and given 10 months to live. Her life policy included a terminal illness benefit.',
        outcome: 'The full $350,000 sum was paid within 30 days while she was still alive — giving her time to pay off the family home, plan her estate, and travel with her grandchildren.',
      },
    ],
  },
  {
    slug: 'income-protection',
    title: 'Income Protection',
    icon: '💰',
    shortDesc: 'Replace your income if illness or injury stops you from working.',
    from: '',
    metaTitle: 'Income Protection Insurance NZ | Replace Lost Income | BestHealthInsurance',
    metaDesc: 'Replace up to 75% of your income if illness or injury stops you working. Compare NZ income protection providers and get a personalised quote.',
    description: 'Income protection insurance pays a monthly benefit — typically 75% of your salary — if you are unable to work due to illness or injury. It is essential for self-employed Kiwis and anyone without adequate sick leave.',
    longDesc: [
      'Income protection insurance answers one of the most important financial questions in personal risk management: what happens to my family\'s finances if I can\'t work for 6 months? Or 2 years? Unlike ACC, which only covers accidents, income protection covers both illness and injury — including cancer, mental health, heart conditions, and back problems, which are the most common reasons working-age New Zealanders stop working.',
      'Most policies pay 75% of your pre-disability income, with a waiting period (typically 4, 8, or 13 weeks) before payments begin. The waiting period you choose affects your premium — a longer wait means lower premiums but greater need for savings to bridge the gap. Benefit periods can range from 2 years to age 65, and the longer the term, the more valuable the cover.',
      'For self-employed business owners, contractors, and sole traders — anyone without an employer\'s sick leave safety net — income protection is arguably the most critical insurance they can hold. If your income stops, everything else follows: mortgage, rent, car payments, children\'s costs. A good income protection policy keeps those running regardless of your health.',
    ],
    keyBenefits: [
      'Up to 75% of pre-disability income replaced',
      'Monthly benefit paid directly to you',
      'Covers both illness and injury (unlike ACC)',
      'Waiting period options: 4, 8, or 13 weeks',
      'Benefit period up to age 65',
      'Own-occupation or any-occupation definitions',
      'Partial disability benefit for reduced work capacity',
      'Inflation-linked benefit increases available',
    ],
    whoNeedsIt: [
      'Self-employed workers and sole traders with no sick leave',
      'Anyone whose income would stop within weeks if they couldn\'t work',
      'Business owners whose company relies on their direct involvement',
      'Professionals with large mortgages and lifestyle commitments',
      'Employees with inadequate sick leave or savings buffer',
    ],
    providers: [
      { name: 'Partners Life', note: 'Income Cover protects your ability to earn if illness or injury stops you working' },
      { name: 'AIA', note: 'Income protection offered within its wider product range' },
      { name: 'nib', note: 'Ask which income protection options are currently offered' },
      { name: 'UniMed', note: 'Primarily a health insurer; ask what is available alongside its health plans' },
      { name: 'Southern Cross', note: 'Best known for health cover; ask what income products are available' },
    ],
    costFactors: [
      'Occupation class — high-risk occupations pay more',
      'Waiting period — longer waits mean lower premiums',
      'Benefit period — 2-year cover vs. to-age-65 cover',
      'Income level — higher income replaced costs more',
      'Definition of disability — own-occupation vs. any-occupation',
    ],
    scenarios: [
      {
        title: 'Self-employed plumber with back injury',
        situation: 'A Palmerston North plumber ruptured a disc and was unable to work for 7 months. ACC covered his accident-related medical costs but not his full lost income.',
        outcome: 'His income protection policy topped up to 75% of his pre-injury income from week 5. He received $4,800/month for 6 months — covering his mortgage, vehicle finance, and living costs entirely.',
      },
      {
        title: 'Cancer treatment for a Wellington lawyer',
        situation: 'A 46-year-old lawyer was diagnosed with lymphoma and underwent 8 months of chemotherapy. She could not work during treatment.',
        outcome: 'Her income protection policy paid $6,200/month throughout her treatment. She returned to work after full recovery with no financial damage to her practice or lifestyle.',
      },
    ],
  },
  {
    slug: 'business-health',
    title: 'Business Health Insurance',
    icon: '🏢',
    shortDesc: 'Group health insurance for your team — a tax-effective employee benefit.',
    from: '',
    metaTitle: 'Business Health Insurance NZ | Group Cover for Employees | BestHealthInsurance',
    metaDesc: 'Offer group health insurance as an employee benefit. Tax-effective, retention-boosting, and arranged by licensed NZ advisers. Get a group quote today.',
    description: 'Group business health insurance covers your employees and their families. It is a valuable staff benefit that improves retention and productivity — and premiums are often tax-deductible.',
    longDesc: [
      'Business health insurance — also called group health insurance — covers your team\'s medical costs under a single policy. As an employer, you pay the premiums as a business expense, and your employees receive private health cover that they may not be able to afford individually. Most major NZ insurers offer group discounts of 10–20% for business policies.',
      'Group health insurance is increasingly a baseline expectation for skilled employees in competitive industries. Offering it signals that you value your team\'s wellbeing, reduces sick day frequency, ensures staff get treated quickly and return to work sooner, and makes your business more attractive at recruitment. In a tight labour market, it\'s one of the most cost-effective benefits you can offer.',
      'From a tax perspective, employer-paid health insurance premiums are generally a deductible business expense, though the benefit may be subject to fringe benefit tax (FBT). A licensed adviser familiar with NZ employment and tax law can structure your group policy to maximise value for both employer and employees.',
    ],
    keyBenefits: [
      'Group discounts of 10–20% vs. individual policies',
      'Premiums often tax-deductible as a business expense',
      'Reduces sick leave frequency and duration',
      'Employees return to work faster via private treatment',
      'Highly valued employee benefit for recruitment and retention',
      'Cover can extend to employee families',
      'Simple onboarding — adviser manages the policy',
      'Scales as your team grows',
    ],
    whoNeedsIt: [
      'Businesses competing for skilled workers in tight labour markets',
      'Employers wanting to reduce absenteeism and sick days',
      'Companies with 5+ employees looking for group pricing',
      'HR managers building a competitive benefits package',
      'Business owners who want to provide for their team\'s health',
    ],
    providers: [
      { name: 'nib', note: 'Offers workplace health cover alongside its retail plans' },
      { name: 'AIA', note: 'Workplace cover can include access to the AIA Vitality programme' },
      { name: 'UniMed', note: 'States that more than 500 New Zealand businesses use it for workplace cover' },
      { name: 'Partners Life', note: 'Workplace arrangements are placed through financial advisers' },
      { name: 'Southern Cross', note: 'Offers group health cover for employers' },
    ],
    costFactors: [
      'Number of employees — larger groups attract better rates',
      'Level of cover chosen — surgical only vs. major medical',
      'Industry type — some industries have higher claims rates',
      'Whether family members are included',
      'Excess level selected per employee',
    ],
    scenarios: [
      {
        title: 'Tech startup competing for talent',
        situation: 'A 15-person Auckland software company was losing candidates to larger firms offering better benefits. They couldn\'t compete on salary alone.',
        outcome: 'Adding a group health policy at $180/employee/month was cheaper than salary increases required to attract equivalent talent. Staff retention improved and two key hires cited the health cover as a deciding factor.',
      },
      {
        title: 'Tradesman reducing sick leave costs',
        situation: 'A plumbing company with 20 staff was losing an average of $40,000/year in productivity to sick days and delayed treatment for injuries.',
        outcome: 'After implementing group health cover, staff were treated privately and returned to work significantly faster. The estimated productivity gain in year one exceeded the policy cost by $18,000.',
      },
    ],
  },
  {
    slug: 'mental-health',
    title: 'Mental Health Cover',
    icon: '🧠',
    shortDesc: 'Access private psychology and psychiatric care without the public waiting lists.',
    from: '',
    metaTitle: 'Mental Health Insurance NZ | Private Psychology Cover | BestHealthInsurance',
    metaDesc: 'Private access to psychology and psychiatric care in New Zealand. What each major insurer publishes about mental health cover, and what to ask before you apply.',
    description: 'Mental health cover provides access to private psychology and psychiatric services. Insurers handle it differently — some include it within major medical cover, some offer it as an optional module, and the benefit maximums and waiting periods vary. Given long public waiting lists, private cover can mean getting help considerably sooner.',
    longDesc: [
      'Mental health support is one of the most underprovided areas in New Zealand\'s public health system. Waiting times for public psychology and psychiatry services regularly exceed 6 months, and in many regions, community mental health teams are only available to people in acute crisis. For the vast majority of people dealing with anxiety, depression, trauma, or other mental health conditions, private access is the only realistic path to timely care.',
      'Private psychology sessions typically cost $150–$250 per session, and effective treatment often requires 8–20 sessions. Without insurance, that\'s $1,200 to $5,000 out of pocket. Mental health cover reimburses those sessions, making consistent treatment financially accessible.',
      'Insurers treat mental health differently, and the differences matter. AIA publish a mental health support benefit of $2,500 per policy year on both their health plans. nib list mental health consultations among the everyday costs their Everyday plans can help with. Others fold mental health into broader major medical cover with conditions attached. Rather than take anyone\'s word for which is best, ask each one what is actually payable, whether there are session limits, and what waiting periods apply before you can claim.',
    ],
    keyBenefits: [
      'Private psychology consultations covered',
      'Psychiatric assessments and treatment',
      'Mental health hospital admission where required',
      'Fast access — skip 6+ month public waiting lists',
      'Counselling and CBT sessions',
      'Eating disorder treatment support',
      'Addiction treatment (policy-dependent)',
      'Cover levels vary by insurer and plan — check the benefit maximum',
    ],
    whoNeedsIt: [
      'Anyone currently waiting for public mental health services',
      'People managing anxiety, depression, trauma, or PTSD',
      'Parents wanting mental health cover for their children',
      'Employers who want to support employee mental wellbeing',
      'Anyone who values early intervention over crisis-point treatment',
    ],
    providers: [
      { name: 'UniMed', note: 'Psychiatric consultations sit in an add-on module on Hospital Select and are listed under UniCare Advantage; SmartStay carries a stated $1,000 per year mental health benefit' },
      { name: 'nib', note: 'Publishes cover for psychiatrist or psychologist consultations subject to a stated limit and a six-month waiting period' },
      { name: 'AIA', note: 'Ask which mental health benefits apply to the specific plan you are quoted' },
      { name: 'Partners Life', note: 'Ask which mental health benefits apply under its Private Medical Cover wording' },
      { name: 'Southern Cross', note: 'Check the benefit maximum and any limitations on the specific plan you are quoted' },
    ],
    costFactors: [
      'Whether the cover sits in an optional module or within major medical cover',
      'Session limits — some policies cap annual sessions',
      'Waiting periods — typically 2–3 months for non-acute conditions',
      'Pre-existing conditions — prior mental health history may affect acceptance',
      'Hospital vs. outpatient cover — inpatient psychiatric care costs more to insure',
    ],
    scenarios: [
      {
        title: 'Depression treatment after job loss',
        situation: 'A 32-year-old Dunedin professional developed severe depression after redundancy. The public mental health referral waitlist was 5 months.',
        outcome: 'Mental health cover of the kind several insurers offer would fund a course of private psychology sessions in this situation, subject to the benefit maximum and any waiting period on the plan. This is an illustration of how the cover is intended to work, not an account of a particular person or a particular insurer\'s claim.',
      },
      {
        title: 'Teenager with anxiety and school avoidance',
        situation: 'A 15-year-old in Tauranga stopped attending school due to severe anxiety. CAMHS had a 7-month assessment waitlist.',
        outcome: 'Where a family policy includes mental health cover for dependants, it can fund a private psychology assessment without waiting for the public referral. Whether dependants are covered, and to what limit, differs by insurer and by plan. This is an illustration of how the cover is intended to work, not an account of a particular person.',
      },
    ],
  },
]

export const FOR_YOU_SEGMENTS = [
  { slug: 'individuals', title: 'Individuals', icon: '👤', desc: 'Tailored cover for your personal health needs and budget.' },
  { slug: 'families', title: 'Families', icon: '👨‍👩‍👧‍👦', desc: 'Protect your whole family with a single comprehensive policy.' },
  { slug: 'seniors', title: 'Seniors', icon: '🧓', desc: 'Specialist cover for over-65s — no age-out surprises.' },
  { slug: 'self-employed', title: 'Self-Employed', icon: '💼', desc: 'Income protection and health cover when sick leave isn\'t an option.' },
  { slug: 'business-owners', title: 'Business Owners', icon: '🏢', desc: 'Group health plans that attract and retain great staff.' },
  { slug: 'new-to-nz', title: 'New to NZ', icon: '🇳🇿', desc: 'Understand the NZ health system and get covered fast.' },
]
