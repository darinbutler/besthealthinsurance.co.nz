import Link from "next/link";
import { BLOG_POSTS } from "../../../data/blog";
import QuoteForm from "../../components/QuoteForm";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title} | BestHealthInsurance.co.nz`,
    description: post?.excerpt,
    alternates: { canonical: `https://besthealthinsurance.co.nz/blog/${params.slug}/` },
    openGraph: {
      title: `${post?.title} | BestHealthInsurance.co.nz`,
      description: post?.excerpt,
      url: `https://besthealthinsurance.co.nz/blog/${params.slug}/`,
      type: "article",
      publishedTime: post?.date,
      authors: ["https://besthealthinsurance.co.nz/about/"],
    },
  };
}

// Map blog categories to relevant internal coverage/guide links
const categoryInternalLinks: Record<string, { href: string; label: string }[]> = {
  Coverage: [
    { href: "/coverage/major-medical/", label: "Major Medical Cover Guide" },
    { href: "/coverage/surgical-cover/", label: "Surgical Cover Explained" },
    { href: "/coverage/trauma-insurance/", label: "Trauma Insurance Guide" },
    { href: "/compare/", label: "Compare All NZ Providers" },
  ],
  Providers: [
    { href: "/health-insurance/unimed/", label: "UniMed Health Insurance Review" },
    { href: "/health-insurance/southern-cross/", label: "Southern Cross Review" },
    { href: "/health-insurance/partners-life/", label: "Partners Life Review" },
    { href: "/compare/", label: "Full Provider Comparison" },
  ],
  Costs: [
    { href: "/compare/", label: "Compare Premiums Side-by-Side" },
    { href: "/coverage/major-medical/", label: "What Major Medical Covers" },
    { href: "/faqs/", label: "Health Insurance FAQs" },
  ],
  "Buying Tips": [
    { href: "/faqs/", label: "Health Insurance FAQs" },
    { href: "/compare/", label: "Compare All Providers" },
    { href: "/for-you/individuals/", label: "Health Insurance for Individuals" },
  ],
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="text-center py-20 text-white">Post not found</div>;
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://besthealthinsurance.co.nz/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    url: `https://besthealthinsurance.co.nz/blog/${post.slug}/`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-NZ",
    author: {
      "@type": "Organization",
      "@id": "https://besthealthinsurance.co.nz/#organization",
      name: "BestHealthInsurance.co.nz Editorial Team",
      url: "https://besthealthinsurance.co.nz/about/",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://besthealthinsurance.co.nz/#organization",
      name: "BestHealthInsurance.co.nz",
      logo: { "@type": "ImageObject", url: "https://besthealthinsurance.co.nz/favicon.ico" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://besthealthinsurance.co.nz/blog/${post.slug}/` },
    articleSection: post.category,
    keywords: `health insurance NZ, ${post.category.toLowerCase()}, New Zealand health insurance`,
    timeRequired: `PT${post.readTime.replace(" min", "")}M`,
    isPartOf: { "@id": "https://besthealthinsurance.co.nz/#website" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
      { "@type": "ListItem", position: 2, name: "Health Insurance Guides", item: "https://besthealthinsurance.co.nz/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://besthealthinsurance.co.nz/blog/${post.slug}/` },
    ],
  };

  const internalLinks = categoryInternalLinks[post.category] || categoryInternalLinks["Buying Tips"];

  // Simple content renderer
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, idx) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("**") && paragraph.endsWith("**") && !paragraph.includes("\n")) {
        return (
          <h3 key={idx} className="text-xl font-bold text-emerald-400 mt-6 mb-3">
            {paragraph.replace(/\*\*/g, "")}
          </h3>
        );
      }
      if (paragraph.includes("**")) {
        const parts = paragraph.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={idx} className="text-gray-300 leading-relaxed mb-4">
            {parts.map((part, i) => (i % 2 === 0 ? part : <strong key={i} className="font-semibold text-white">{part}</strong>))}
          </p>
        );
      }
      if (paragraph.startsWith("| ")) {
        const rows = paragraph.split("\n").filter((row) => row.trim());
        return (
          <div key={idx} className="overflow-x-auto mb-6 border border-gray-700 rounded-lg">
            <table className="w-full text-sm">
              <tbody>
                {rows.map((row, rIdx) => {
                  if (row.includes("---|")) return null;
                  const cells = row.split("|").slice(1, -1);
                  return (
                    <tr key={rIdx} className={rIdx === 0 ? "bg-gray-800 border-b border-gray-700" : "border-b border-gray-700 hover:bg-gray-800"}>
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-gray-300">
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={idx} className="list-disc list-inside space-y-2 text-gray-300 mb-4 ml-2">
            {items.map((item, iIdx) => (
              <li key={iIdx}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      if (paragraph.startsWith("1. ") || paragraph.match(/^\d\. /)) {
        const items = paragraph.split("\n").filter((line) => line.match(/^\d[\.\)]/));
        return (
          <ol key={idx} className="list-decimal list-inside space-y-2 text-gray-300 mb-4 ml-2">
            {items.map((item, iIdx) => (
              <li key={iIdx}>{item.replace(/^\d[\.\)] /, "")}</li>
            ))}
          </ol>
        );
      }
      return (
        <p key={idx} className="text-gray-300 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <Link href="/blog/" className="hover:text-gray-300 transition-colors">Health Insurance Guides</Link>
            <span>›</span>
            <span className="text-gray-400">{post.category}</span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.readTime} read</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-lg text-gray-400 mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString("en-NZ", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
            <span>•</span>
            <span>NZ Insurance Adviser Team</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-invert max-w-none">{renderContent(post.content)}</article>

            <div className="mt-10 pt-8 border-t border-gray-800 space-y-6">
              {/* Internal links block */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Related Guides &amp; Tools</h3>
                <ul className="space-y-2">
                  {internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-500 text-xs">External resources: <a href="https://www.pharmac.govt.nz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 underline">PHARMAC (funded medicines)</a> · <a href="https://www.tewhatuora.govt.nz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 underline">Health New Zealand</a> · <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 underline">FMA (financial advice)</a></p>
                </div>
              </div>
              {/* Author disclaimer */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-white">BestHealthInsurance.co.nz</strong> — We&apos;re passionate about helping Kiwis find the right health insurance policy for their needs and budget. We&apos;re an independent comparison and referral service — when you enquire, we connect you with a licensed NZ insurance adviser who compares all major providers (Southern Cross, nib, AIA, UniMed, and Partners Life) on your behalf. The advisers we work with are paid by providers when you take out a policy. There is no cost to you.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8 sticky top-4">
              <h3 className="text-xl font-bold text-white mb-3">Get a Quote</h3>
              <p className="text-gray-400 text-sm mb-4">Compare health insurance quotes from all major NZ providers.</p>
              <QuoteForm compact />
            </div>

            {relatedPosts.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relPost) => (
                    <Link key={relPost.slug} href={`/blog/${relPost.slug}/`}>
                      <div className="group cursor-pointer mb-3">
                        <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1">{relPost.title}</h4>
                        <p className="text-xs text-gray-500">{relPost.readTime} read</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-gray-800 border-t border-gray-700 py-12 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postIndex > 0 && (
              <Link href={`/blog/${BLOG_POSTS[postIndex - 1].slug}/`}>
                <div className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer">
                  <p className="text-gray-400 text-sm mb-1">← Previous Guide</p>
                  <p className="text-white font-semibold">{BLOG_POSTS[postIndex - 1].title}</p>
                </div>
              </Link>
            )}
            {postIndex < BLOG_POSTS.length - 1 && (
              <Link href={`/blog/${BLOG_POSTS[postIndex + 1].slug}/`}>
                <div className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer text-right">
                  <p className="text-gray-400 text-sm mb-1">Next Guide →</p>
                  <p className="text-white font-semibold">{BLOG_POSTS[postIndex + 1].title}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
