import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogCTA from "@/components/blog/BlogCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Article structured data for SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Electrical Pricing Guide: How Much to Charge for Electrical Jobs [2025]",
  "description": "Complete pricing guide for electricians. Learn how much to charge for common electrical jobs, calculate your costs, and maximize profitability.",
  "image": "https://electricalestimatepro.dev/og-image.png",
  "author": {
    "@type": "Organization",
    "name": "ElectroPro Estimate",
    "url": "https://electricalestimatepro.dev"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ElectroPro Estimate",
    "logo": {
      "@type": "ImageObject",
      "url": "https://electricalestimatepro.dev/favicon.svg"
    }
  },
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://electricalestimatepro.dev/blog/pricing-guide"
  }
};

const PricingGuide = () => {
  const relatedPosts = [
    {
      title: "How to Create Electrical Estimates: Complete Guide for Electricians [2025]",
      slug: "estimate-guide",
      excerpt: "Learn how to create professional electrical estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid.",
    },
    {
      title: "Best Electrical Estimate Templates: Free vs Paid Options [2025]",
      slug: "template-comparison",
      excerpt: "Compare free electrical estimate templates, paid options, and software solutions. Learn which option is best for your electrical contracting business.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Pricing Guide: How Much to Charge [2025] | Electrical Estimate Pro</title>
        <meta 
          name="description" 
          content="Complete pricing guide for electricians. Learn how much to charge for common electrical jobs, calculate your costs, and maximize profitability." 
        />
        <meta property="og:title" content="Electrical Pricing Guide: How Much to Charge [2025] | Electrical Estimate Pro" />
        <meta 
          property="og:description" 
          content="Complete pricing guide for electricians. Learn how much to charge for common electrical jobs, calculate your costs, and maximize profitability." 
        />
        <meta property="og:url" content="https://electricalestimatepro.dev/blog/pricing-guide" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://electricalestimatepro.dev/blog/pricing-guide" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <BlogLayout>
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            Electrical Pricing Guide: How Much to Charge for Electrical Jobs [2025]
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>10 min read</span>
            <span>•</span>
            <span>Updated January 2025</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Pricing your electrical services correctly is critical for profitability, safety, and liability protection. 
              Charge too little, and you can't afford proper insurance, continuing education, or quality tools—compromising safety. 
              Charge too much, and you'll lose jobs to competitors. Finding that balance requires understanding your true costs, 
              the value you provide, and the liability you assume as a licensed electrician.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In this comprehensive guide, we'll break down exactly how much electricians should charge for common jobs, how to 
              calculate your real costs including insurance and licensing, and pricing strategies that maximize profitability while 
              remaining competitive.
            </p>
          </section>

          {/* Understanding Your Costs */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Understanding Your Costs as an Electrician
            </h2>
            <p className="text-muted-foreground mb-4">
              Before you can price effectively, you need to know what it actually costs you to operate as a licensed electrical contractor. 
              Many electricians only consider direct costs and wonder why they're not profitable.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Direct Costs</h3>
                <p className="text-muted-foreground">
                  These are costs directly tied to each job: your labor, helper or journeyman wages, wire and materials, 
                  fixtures, panels, breakers, subcontractors, and permits. Direct costs are easy to see because they change 
                  with every job. A panel upgrade has different direct costs than installing outlets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Indirect Costs (Overhead)</h3>
                <p className="text-muted-foreground">
                  This is where most electricians underestimate. Your overhead includes truck payments, fuel, insurance 
                  (general liability, professional liability, workers comp), licensing fees and renewals, continuing education 
                  requirements, code books and updates, tool replacement, testing equipment calibration, shop/storage rent, 
                  phone, internet, marketing, accounting, office supplies, and more. Add it all up annually—you might be 
                  shocked at how much it costs to maintain a licensed electrical contracting business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Calculate Your True Hourly Cost</h3>
                <p className="text-muted-foreground mb-3">
                  Here's a real example for a licensed electrician:
                </p>
                <div className="bg-card p-4 rounded-lg border border-border text-sm">
                  <p className="text-muted-foreground mb-2">Annual overhead: $52,000</p>
                  <p className="text-muted-foreground text-xs mb-2">(Insurance $8K, truck $6K, fuel $5K, tools $4K, licensing $2K, continuing ed $1K, etc.)</p>
                  <p className="text-muted-foreground mb-2">Billable hours/year: 1,400 hours (accounting for travel, estimating, admin, downtime)</p>
                  <p className="text-muted-foreground mb-2">Overhead per hour: $52,000 ÷ 1,400 = $37/hour</p>
                  <p className="text-muted-foreground mb-2">Desired personal wage: $50/hour</p>
                  <p className="text-muted-foreground mb-2">Desired profit margin: 20% = $20/hour</p>
                  <p className="text-accent font-semibold mt-3">
                    Minimum rate to charge: $107/hour (typically rounded to $100-125/hour)
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  This doesn't include materials markup. If you're charging $60-70/hour as a licensed electrician, you're actually 
                  losing money with every job and can't afford proper insurance or equipment—creating safety and liability risks.
                </p>
              </div>
            </div>
          </section>

          {/* Standard Pricing */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Standard Pricing for Common Electrical Jobs
            </h2>
            <p className="text-muted-foreground mb-4">
              Here are typical price ranges for common electrical jobs in 2025. Remember, prices vary by region, complexity, 
              license level (master vs journeyman), and permit requirements. Use these as starting points, not absolute rules.
            </p>

            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Panel Upgrade (100A to 200A)</h3>
                  <p className="text-sm text-muted-foreground">Standard residential service upgrade</p>
                </div>
                <span className="text-accent font-semibold">$2,000-3,500</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Outlet Installation</h3>
                  <p className="text-sm text-muted-foreground">Standard 120V outlet, existing circuit</p>
                </div>
                <span className="text-accent font-semibold">$125-200</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Light Fixture Installation</h3>
                  <p className="text-sm text-muted-foreground">Standard fixture, existing box</p>
                </div>
                <span className="text-accent font-semibold">$150-300</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Ceiling Fan Installation</h3>
                  <p className="text-sm text-muted-foreground">With wiring and switch</p>
                </div>
                <span className="text-accent font-semibold">$200-400</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">GFCI Outlet Installation</h3>
                  <p className="text-sm text-muted-foreground">Kitchen, bathroom, outdoor</p>
                </div>
                <span className="text-accent font-semibold">$150-250</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">New Circuit Installation</h3>
                  <p className="text-sm text-muted-foreground">20A circuit from panel to one location</p>
                </div>
                <span className="text-accent font-semibold">$300-600</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Whole-House Rewire</h3>
                  <p className="text-sm text-muted-foreground">1,500 sq ft home, full electrical</p>
                </div>
                <span className="text-accent font-semibold">$3,000-8,000</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Switch Replacement</h3>
                  <p className="text-sm text-muted-foreground">Standard single-pole switch</p>
                </div>
                <span className="text-accent font-semibold">$75-150</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Recessed Lighting (per light)</h3>
                  <p className="text-sm text-muted-foreground">Can light installation with wiring</p>
                </div>
                <span className="text-accent font-semibold">$200-350</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">EV Charger Installation</h3>
                  <p className="text-sm text-muted-foreground">240V, 40-50A, including permit</p>
                </div>
                <span className="text-accent font-semibold">$800-1,500</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mt-4">
              Note: Prices vary significantly by region, complexity, access difficulty, and permit requirements. These ranges 
              reflect typical pricing in major US metros and include labor, materials, and permits but not the fixture/device cost 
              unless noted.
            </p>
          </section>

          {/* Pricing Strategies */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Pricing Strategies That Work for Electricians
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Flat-Rate vs Hourly (Pros and Cons)</h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">Flat-rate pricing</strong> (per-fixture, per-outlet) works great for standard 
                  installations where scope is clear. Customers love knowing the exact cost upfront, and it rewards efficiency—finish 
                  fast and you make better hourly rates. Best for: outlet installations, fixture mounting, standard switch work.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Hourly pricing</strong> works better for troubleshooting, repairs, complex 
                  custom work, or unpredictable projects where scope changes. It protects you from unknowns and scope creep. 
                  Best for: diagnosing problems, old house rewires, commercial work, anything with hidden complications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Service Call Minimums and Diagnostic Fees</h3>
                <p className="text-muted-foreground">
                  Set a minimum charge for any service call, typically $150-200. This covers your time to drive to the 
                  job site, assess the situation, test circuits, and provide an estimate. Most electricians include the first 
                  hour of labor in the service call fee. For complex troubleshooting, consider a separate diagnostic fee of 
                  $100-150 that applies toward the repair if the customer proceeds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emergency and After-Hours Premiums</h3>
                <p className="text-muted-foreground">
                  Emergency calls should be 1.5-2x your standard rate. You're sacrificing personal time, rushing to the job, 
                  and taking on additional risk working under pressure. After-hours work (nights, weekends, holidays) commands 
                  premium pricing—this is industry standard across all trades. Most customers understand and expect to pay more 
                  for immediate emergency electrical service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Per-Fixture vs Per-Hour for Installations</h3>
                <p className="text-muted-foreground">
                  For standard installations, per-fixture pricing simplifies estimates and speeds up the sales process. 
                  Examples: $125-200 per standard outlet, $150-300 per light fixture, $200-400 per ceiling fan, $300-600 per 
                  new circuit. For complex or custom work—three-way switches, smart home integration, low-voltage systems—
                  hourly rates provide better protection against underestimating.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Volume Discounts for Property Managers and Builders</h3>
                <p className="text-muted-foreground">
                  For repeat commercial clients, property managers, or builders who provide consistent work, consider volume 
                  discounts of 10-15%. The benefit is steady income, predictable scheduling, and reduced marketing costs. 
                  Always maintain profitability—don't discount below your minimum profitable rate just to win volume work. 
                  Losing money on every job isn't sustainable, even with volume.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Maintenance Contract Pricing</h3>
                <p className="text-muted-foreground">
                  For commercial clients or large residential properties, offer annual maintenance contracts. These provide 
                  recurring revenue and help schedule work during slow periods. Typical contracts include quarterly inspections, 
                  priority scheduling, discounted service rates, and emergency coverage. Price them at $500-2,000+ annually 
                  depending on property size and scope.
                </p>
              </div>
            </div>
          </section>

          {/* How to Present Pricing */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              How to Present Your Electrical Pricing
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Itemized Breakdowns Build Trust</h3>
                <p className="text-muted-foreground">
                  Transparency wins jobs. Break down your estimate into clear categories: labor, materials, permits, equipment, 
                  testing. When customers see exactly what they're paying for, price objections decrease. Itemization also 
                  helps justify your rates against unlicensed competitors who provide vague quotes—you're showing the value of 
                  licensed, insured, code-compliant work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Explain Labor vs Materials Clearly</h3>
                <p className="text-muted-foreground">
                  Many customers don't understand that materials are a small fraction of electrical costs—labor, expertise, 
                  and liability protection make up most of your pricing. Explain this upfront. "The wire costs $50, but ensuring 
                  it's installed safely, to code, and properly tested is where the real value lies." Position your pricing as 
                  investing in safety and code compliance, not just buying commodities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Offer Good/Better/Best Options</h3>
                <p className="text-muted-foreground">
                  When applicable, provide tiered pricing options. Good: basic code-compliant solution. Better: upgraded fixtures 
                  or better warranties. Best: premium materials, smart home integration, extended warranties. This gives customers 
                  control and often leads to higher average job values when they see the upgrade benefits. Most customers choose 
                  the middle option.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Highlight Code Compliance and Safety Value</h3>
                <p className="text-muted-foreground">
                  Emphasize that your pricing includes proper code compliance, safety testing, and professional liability protection. 
                  This isn't optional—it's what separates licensed electricians from unlicensed handymen. Homeowners insurance may 
                  not cover electrical fires caused by unlicensed work. Your pricing protects their home and family—frame it as 
                  an investment in safety, not just an expense.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Include Warranty Details</h3>
                <p className="text-muted-foreground">
                  Clearly state your warranty on workmanship (typically 1-2 years) and pass through manufacturer warranties on 
                  fixtures, panels, and equipment. Explain what's covered: installation defects, code compliance issues. Explain 
                  what's not covered: customer damage, normal wear, code changes. A strong warranty differentiates you and builds 
                  confidence that you stand behind your work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Payment Terms (Deposits, Completion, Inspection)</h3>
                <p className="text-muted-foreground">
                  For small jobs under $500, payment upon completion is standard. For larger projects, request 25-50% deposit, 
                  progress payments for multi-day jobs, and final payment upon completion and inspection approval. Never finish 
                  a job before receiving payment—it gives you leverage if issues arise. Clearly state accepted payment methods, 
                  payment schedule, and late payment terms in every estimate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Be Confident—You Provide Safety and Expertise</h3>
                <p className="text-muted-foreground">
                  Don't apologize for your rates. Licensed electricians undergo years of training, maintain expensive insurance, 
                  stay current with changing codes, and assume significant liability. You're not selling a commodity—you're 
                  providing peace of mind, safety, and code-compliant work that protects their home and family. Confidence in 
                  your pricing demonstrates confidence in your expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pricing your electrical services correctly ensures you can maintain proper insurance, invest in quality tools and 
              continuing education, and operate a sustainable business that provides safe, code-compliant work. Don't compete on 
              price alone—compete on professionalism, expertise, and the value of licensed, insured electrical contracting. 
              Customers who only care about price aren't your ideal clients anyway.
            </p>
          </section>
        </div>

        {/* CTA */}
        <BlogCTA />

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
};

export default PricingGuide;
