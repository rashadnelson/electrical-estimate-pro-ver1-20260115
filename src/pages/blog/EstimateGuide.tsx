import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogCTA from "@/components/blog/BlogCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Article structured data for SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Create Electrical Estimates: Complete Guide for Electricians [2025]",
  "description": "Learn how to create professional electrical estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid.",
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
    "@id": "https://electricalestimatepro.dev/blog/estimate-guide"
  }
};

const EstimateGuide = () => {
  const relatedPosts = [
    {
      title: "Electrical Pricing Guide: How Much to Charge for Electrical Jobs [2025]",
      slug: "pricing-guide",
      excerpt: "Complete pricing guide for electricians. Learn how much to charge for common electrical jobs, calculate your costs, and maximize profitability.",
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
        <title>How to Create Electrical Estimates: Complete Guide [2025] | Electrical Estimate Pro</title>
        <meta 
          name="description" 
          content="Learn how to create professional electrical estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid." 
        />
        <meta property="og:title" content="How to Create Electrical Estimates: Complete Guide [2025] | Electrical Estimate Pro" />
        <meta 
          property="og:description" 
          content="Learn how to create professional electrical estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid." 
        />
        <meta property="og:url" content="https://electricalestimatepro.dev/blog/estimate-guide" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://electricalestimatepro.dev/blog/estimate-guide" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <BlogLayout>
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            How to Create Electrical Estimates: Complete Guide for Electricians [2025]
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
              As a licensed electrician, your estimate is often the first professional impression you make on a potential customer. 
              A detailed, accurate estimate doesn't just win you jobs—it sets expectations, builds trust, and protects 
              your business from scope creep, code compliance issues, and disputes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Yet many electricians struggle with creating estimates that are both comprehensive and professional. Too vague, 
              and you risk losing money or violating safety standards. Too detailed, and you overwhelm the customer. In this guide, 
              we'll show you exactly how to create electrical estimates that strike the perfect balance and help you win more jobs at 
              profitable rates.
            </p>
          </section>

          {/* What to Include */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              What to Include in an Electrical Estimate
            </h2>
            <p className="text-muted-foreground mb-4">
              Every professional electrical estimate should include these essential components:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Labor Costs</h3>
                <p className="text-muted-foreground">
                  Break down the hours you expect the job to take and your hourly rate. Licensed master electricians typically charge 
                  $75-125/hour depending on region and license level. Include per-outlet pricing for standard installations, service call fees, 
                  and troubleshooting time. Be realistic—underestimating labor is the #1 way electricians lose money. Factor in testing, 
                  inspection coordination, and code compliance verification time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Materials</h3>
                <p className="text-muted-foreground">
                  List every significant material: wire (specify gauge and type—THHN, Romex, etc.), conduit, outlets, switches, 
                  fixtures, junction boxes, panels, breakers, and connectors. Include brand names and model numbers when possible. 
                  Don't forget wire nuts, electrical tape, labels, and mounting hardware—they add up fast. Apply a standard markup 
                  (typically 20-30%) to cover inventory costs, transportation, and handling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Equipment and Tools</h3>
                <p className="text-muted-foreground">
                  If you need specialized equipment like a lift, trencher, concrete saw, or thermal imaging camera, include these costs. 
                  Even if you own the tools, consider charging a usage fee to cover maintenance, calibration, and depreciation. 
                  Professional-grade testing equipment isn't cheap and should be factored into your pricing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Permits and Inspection Fees</h3>
                <p className="text-muted-foreground">
                  Most electrical work requires permits and inspections. Always include permit costs in your estimate, plus a markup for 
                  your time to obtain them and coordinate inspections. Being upfront about permits shows professionalism, ensures 
                  code compliance, and protects you legally. Failing to pull proper permits can result in license suspension and legal liability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Code Compliance Requirements</h3>
                <p className="text-muted-foreground">
                  Specify which electrical codes apply (NEC, local amendments) and what compliance measures you'll implement. 
                  Include costs for GFCI/AFCI protection, proper grounding, bonding, and any code-mandated safety upgrades. 
                  Transparent code compliance builds customer confidence and demonstrates your professionalism.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Timeline and Scheduling</h3>
                <p className="text-muted-foreground">
                  Provide a realistic timeline for when work will begin and how long it will take. Include time for permit approval, 
                  material delivery, inspection scheduling, and any utility coordination. Factor in weather delays for outdoor work. 
                  Clear timelines prevent customer frustration and help you schedule other jobs effectively.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Warranty Information</h3>
                <p className="text-muted-foreground">
                  State your warranty clearly. Most electricians offer 1-2 years on labor and pass through manufacturer 
                  warranties on fixtures, panels, and equipment. Clarify what's covered (workmanship, materials) and what's not 
                  (customer damage, code changes). A good warranty builds confidence and differentiates you from unlicensed competitors.
                </p>
              </div>
            </div>
          </section>

          {/* How to Price */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              How to Price Electrical Jobs
            </h2>
            <p className="text-muted-foreground mb-4">
              Pricing electrical work requires balancing safety, profitability, and competitiveness. Here's how to calculate rates 
              that keep you profitable:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Industry Standard Labor Rates</h3>
                <p className="text-muted-foreground">
                  Most licensed electricians charge between $75-125 per hour, depending on location, experience, and license level. 
                  Master electricians command higher rates than journeymen. Urban areas and commercial work typically pay 20-40% more. 
                  Emergency calls and after-hours work should be 1.5-2x your standard rate. Service call minimums typically range from 
                  $150-200.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Material Markup</h3>
                <p className="text-muted-foreground">
                  Apply a 20-30% markup on all materials. This covers the time you spend sourcing wire and components, 
                  transportation, storage costs, inventory risk, and handling. Don't be shy about this—every licensed contractor 
                  does it, and customers expect it. Your markup compensates you for maintaining inventory and handling logistics.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Overhead Calculation</h3>
                <p className="text-muted-foreground">
                  Your overhead includes truck payments, fuel, insurance (general liability, workers comp, professional liability), 
                  licensing fees, continuing education, tools, testing equipment, marketing, and office expenses. Calculate your 
                  annual overhead and divide by billable hours to find your overhead per hour. Add this to your base labor rate to 
                  ensure you're covering all business costs. Example: $100/hour rate might break down as $50 labor + $30 overhead + $20 profit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Profit Margins</h3>
                <p className="text-muted-foreground">
                  After covering labor, materials, and overhead, you need profit. Aim for 15-25% net profit margin. 
                  This isn't greedy—it's what you need to reinvest in your business, upgrade tools and equipment, handle slow 
                  periods, provide continuing education, and build long-term stability. Safety and quality work demand fair compensation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Service Call Minimums</h3>
                <p className="text-muted-foreground">
                  Set a minimum charge for any service call, typically $150-200. This covers your time to drive to the 
                  job site, diagnose the problem, test circuits, and provide an estimate. Without a minimum, you lose money on small 
                  jobs that consume your day. Most electricians include the first hour of labor in the service call fee.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emergency and After-Hours Rates</h3>
                <p className="text-muted-foreground">
                  Emergency calls at night, weekends, or holidays should command premium pricing—typically 1.5-2x your standard 
                  rate. You're sacrificing personal time, family commitments, and taking on rushed work risks. Customers expect to 
                  pay more for emergency electrical service. Always communicate these rates upfront.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Per-Fixture vs Hourly Pricing</h3>
                <p className="text-muted-foreground">
                  For standard installations, per-fixture pricing simplifies estimates: $125-200 per outlet, $150-300 per light fixture, 
                  $200-400 per ceiling fan, $300-600 per new circuit. For complex troubleshooting, custom work, or unpredictable repairs, 
                  hourly rates work better and protect you from scope creep.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Common Mistakes to Avoid
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn from these costly mistakes that trip up even experienced electricians:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Underestimating Wire Run Lengths</h3>
                <p className="text-muted-foreground">
                  One of the most common mistakes. Always account for vertical runs, routing around obstacles, proper stapling distances, 
                  and service loops. Measure conservatively—it's better to over-order slightly than make multiple supply runs. 
                  Include wire for testing, labeling, and connections at panels and junction boxes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Forgetting Panel Upgrades or Service Increases</h3>
                <p className="text-muted-foreground">
                  Many residential projects require panel upgrades when adding significant loads (heat pumps, EV chargers, hot tubs). 
                  Evaluate the existing service capacity during your estimate. Don't assume the customer knows their panel is maxed out—
                  they don't. Include potential upgrade costs upfront to avoid nasty surprises.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Not Accounting for Code Compliance Costs</h3>
                <p className="text-muted-foreground">
                  Code requirements change frequently. GFCI/AFCI protection, proper grounding, bonding, and safety standards add costs. 
                  When working on older homes, you may be required to bring non-compliant wiring up to current code. Include these 
                  potential costs in your estimate and explain why code compliance is non-negotiable for safety and liability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Missing Permit Fees</h3>
                <p className="text-muted-foreground">
                  Forgetting permits is both unprofessional and illegal. It puts your license at risk, creates liability exposure, 
                  and can cause massive problems during home sales or insurance claims. Always check permit requirements for your 
                  jurisdiction and include them in every estimate. Licensed electricians must pull permits—it's not optional.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Poor Communication About Scope</h3>
                <p className="text-muted-foreground">
                  Vague estimates lead to disputes. "Wire 3 outlets" isn't specific enough—where will they be located? What about 
                  patching drywall? Painting? Cleanup? Provide specific breakdowns. Explain what's included and what's not. 
                  Set clear expectations about potential issues (old wiring, access challenges). Good communication prevents 
                  99% of customer complaints.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Not Documenting Existing Electrical Conditions</h3>
                <p className="text-muted-foreground">
                  Always photograph and document the existing electrical setup before starting work. Old wiring, improper installations, 
                  and code violations need to be documented. This protects you from liability and helps justify additional work that 
                  becomes necessary for safety or code compliance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Underpricing Complex Wiring Scenarios</h3>
                <p className="text-muted-foreground">
                  Three-way switches, multi-location control, smart home integration, low-voltage wiring, and commercial installations 
                  are more complex than standard outlets. Don't use residential pricing for commercial work. Account for additional 
                  troubleshooting time, testing requirements, and code-compliant installation methods.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Best Practices for Professional Electrical Estimates
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Use Professional Estimate Software (Not Word/Excel)</h3>
                <p className="text-muted-foreground">
                  Stop using Word documents or handwritten notes. Professional estimate software looks better, prevents 
                  math errors, maintains consistency, and saves massive amounts of time. Digital estimates can be generated on-site 
                  and emailed immediately—this speed advantage helps you close jobs before competitors even submit their bids.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Provide Detailed, Itemized Breakdowns</h3>
                <p className="text-muted-foreground">
                  Customers appreciate transparency. Break down labor, materials, permits, equipment, and other costs separately. 
                  Itemized estimates build trust, justify your pricing, and make it easier to defend against unlicensed competitors 
                  who lowball with vague quotes. Professional electricians aren't the cheapest—we're the safest and most reliable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Include Clear Payment Terms</h3>
                <p className="text-muted-foreground">
                  Specify when payment is due—deposit upfront (typically 25-50% for large jobs), progress payments for multi-day projects, 
                  final payment upon completion and inspection approval. State accepted payment methods. Include late payment terms. 
                  Clear terms prevent payment disputes and protect your cash flow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Set Realistic Completion Timelines</h3>
                <p className="text-muted-foreground">
                  Under-promise and over-deliver. If you think a job takes 2 days, quote 3 days. Factor in permit approval time, 
                  inspection scheduling, material delivery delays, and weather. Finishing early makes customers ecstatic. Running late 
                  creates complaints, even when the work is perfect. Build buffer time into every timeline.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Professional Presentation Increases Close Rates</h3>
                <p className="text-muted-foreground">
                  Your estimate is a sales document that reflects your professionalism. Use your logo, include your license number and 
                  insurance information, maintain consistent formatting, and ensure proper spelling and grammar. PDF format looks more 
                  professional than Word docs. A polished estimate suggests you do polished, code-compliant electrical work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Include License Number and Insurance Info</h3>
                <p className="text-muted-foreground">
                  Always display your license number prominently on estimates. This differentiates you from unlicensed handymen and 
                  demonstrates legitimacy. Mention your insurance coverage (liability, workers comp). Homeowners and businesses need 
                  licensed, insured electricians—highlighting this builds immediate trust and justifies your professional rates.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Creating professional electrical estimates doesn't have to be complicated. Focus on including all costs, 
              pricing for profit and safety, communicating clearly about code compliance, and presenting professionally. 
              The time you invest in better estimates pays off with higher close rates, fewer disputes, better profitability, 
              and protection for your license.
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

export default EstimateGuide;
