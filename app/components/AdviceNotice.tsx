/**
 * AdviceNotice
 *
 * Standing rule for this site (Cover4You portfolio content standards):
 *   "No claim implying Cover4You advises, compares on the user's behalf,
 *    or holds industry status."
 *
 * BestHealthInsurance.co.nz is NOT a Financial Advice Provider. It publishes
 * general information and refers enquiries to a licensed FAP, who gives the
 * regulated financial advice. This component states that split plainly and
 * must appear on every page that carries product information or a form.
 *
 * Do not soften it to "we help you compare" or similar. Under the Financial
 * Markets Conduct Act 2013 the distinction between giving regulated financial
 * advice and publishing general information is the whole basis on which this
 * site operates without a licence.
 */
export default function AdviceNotice({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <p className="text-gray-500 text-xs leading-relaxed">
        Information on this page is general in nature and does not take into account your
        personal circumstances, goals or financial situation. It is not financial advice.
        Speak with a licensed financial adviser before making a decision about cover.
      </p>
    )
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <p className="font-bold text-gray-900 text-sm mb-2">General information, not financial advice</p>
      <p className="text-gray-600 text-sm leading-relaxed">
        Information on this page is general in nature and does not take into account your
        personal circumstances, goals or financial situation. BestHealthInsurance.co.nz is
        not a Financial Advice Provider. We do not compare policies for you, we do not
        recommend an insurer, and we do not give financial advice.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mt-3">
        When you request a quote, we pass your details to a licensed New Zealand Financial
        Advice Provider. They compare the insurers they hold an agency with, give you any
        advice, and are responsible for that advice. They must give you their own disclosure
        information, including what they are licensed to advise on, the providers they work
        with, how they are paid, and how to complain. Ask for it before you act on anything
        they tell you.
      </p>
    </div>
  )
}
