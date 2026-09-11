export const metadata = {
  title: "Disclaimer | BestHealthInsurance.co.nz",
  description: "Important disclaimer about the information provided on BestHealthInsurance.co.nz.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-400">Important information about our service</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">General Information Only</h2>
            <p className="leading-relaxed">The information provided on BestHealthInsurance.co.nz is for general information purposes only. It does not constitute financial advice under the Financial Markets Conduct Act 2013 or any other legislation. Nothing on this website should be treated as a recommendation to acquire or dispose of any financial product.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Not Financial Advice</h2>
            <p className="leading-relaxed">BestHealthInsurance.co.nz is an information and referral website. We do not provide personalised financial advice. The licensed advisers we refer you to are regulated financial advice providers who will provide you with personalised advice based on your individual circumstances, needs, and goals.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Insurance Information Accuracy</h2>
            <p className="leading-relaxed">Whilst we take reasonable steps to ensure accuracy, health insurance products, premiums, and policy terms change regularly. Information on this website may not reflect the most current product details. Always refer to the relevant insurer's current product disclosure statement (PDS) and policy wording for definitive information. Obtain current quotes and terms directly from the insurer or through a licensed adviser.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Provider Recommendations</h2>
            <p className="leading-relaxed">Any provider ratings, recommendations, or comparisons on this website reflect our general assessment at the time of writing. They are not personalised recommendations. Different providers may be more suitable for different individuals depending on their health history, budget, and coverage needs. What works best for one person may not work best for another.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Referral Service and How We Are Paid</h2>
            <p className="leading-relaxed">Cover4You Group operates BestHealthInsurance.co.nz as a referral service. Cover4You Group does not hold a financial advice licence and does not give financial advice. When you enquire through our website we pass your details to one of the specialist brokers or underwriters we work with. Those brokers are separately licensed and regulated, and they are responsible for any financial advice they give you.</p>
            <p className="leading-relaxed mt-4">This site is free to use and there is no cost to you at any stage. We want to be plain about how it is funded. We are paid only if you go on to take out a policy: the insurer pays a commission to the broker who placed it, and we receive a share of it. We are not paid for your enquiry, and we are not paid for passing your details on. Commission is built into the insurer&apos;s standard pricing, so being referred by us does not increase what you pay for your policy.</p>
            <p className="leading-relaxed mt-4">These arrangements are not the same across every provider. We have them with some, not with others, and there are insurers we have no arrangement with at all. Because we earn nothing unless someone actually takes out cover, we have no commercial reason to send you to a broker who cannot help you: a poor match costs us the same as no enquiry at all.</p>
            <p className="leading-relaxed mt-4">Those arrangements can affect which broker or underwriter receives your enquiry, and the order in which providers appear on this site. That order is our own editorial and commercial choice. It is not a rating, a ranking or a recommendation, and you should not read anything into it about which cover is better.</p>
            <p className="leading-relaxed mt-4">What those arrangements do not affect is the factual information we publish. Every benefit limit, waiting period, exclusion and published price on this site is taken from what that insurer publishes on its own website or in its own policy documents, with the date we retrieved it. We do not alter, omit or soften a published fact about an insurer because of a commercial arrangement, or the absence of one.</p>
            <p className="leading-relaxed mt-4">Treat our content as a starting point rather than a complete view of the market. There may be insurers or products we do not cover, and there will be providers we cannot arrange a quote for. You are free to approach any insurer directly, and for some insurers that is the only way to buy.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
            <p className="leading-relaxed">Licensed advisers we work with are members of an approved dispute resolution scheme. If you have a complaint about advice received, you can raise it directly with the adviser or their dispute resolution scheme. For information about our referral service, contact us at{" "}
              <a href="mailto:hello@cover4you.co.nz" className="text-emerald-400 hover:text-emerald-300">hello@cover4you.co.nz</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
