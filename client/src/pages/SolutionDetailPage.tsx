import { useParams, Link } from 'react-router-dom';
import { Coins, Package, UserCheck, Award, TrendingUp, CheckCircle, ArrowRight, Lock } from 'lucide-react';

const solutionData: Record<string, any> = {
  'tokenisation': {
    title: 'Tokenisation',
    icon: Coins,
    headline: 'Tokenisation for compliant digital asset workflows',
    subtitle: 'Deploy secure, regulatory-compliant infrastructure for issuing, managing, and transferring digital representations of real-world assets, credentials, and entitlements.',
    primaryCTA: 'Request a Demo',
    outcomes: [
      { title: 'Liquidity', description: 'Enable fractional ownership and secondary markets' },
      { title: 'Efficiency', description: 'Automate lifecycle management and settlements' },
      { title: 'Compliance', description: 'Built-in regulatory controls and audit trails' },
    ],
    useCases: [
      'Real-world asset tokenisation (real estate, commodities, securities)',
      'Digital credential issuance (certificates, licenses, memberships)',
      'Entitlement management (access rights, voting rights)',
      'Carbon credit and ESG certificate tokenisation',
    ],
    features: [
      'Multi-chain support (public and private blockchains)',
      'Fungible and non-fungible token standards',
      'Smart contract templates for common asset types',
      'Integrated KYC/AML compliance workflows',
      'Transfer restrictions and whitelist management',
      'Lifecycle management (issuance, transfer, redemption, burn)',
    ],
    implementation: [
      { step: 'Asset & Regulatory Analysis', description: 'Define token structure, legal framework, and compliance requirements.' },
      { step: 'Smart Contract Development', description: 'Design and audit token contracts with required controls and restrictions.' },
      { step: 'Platform Integration', description: 'Build issuance, custody, and transfer interfaces with existing systems.' },
      { step: 'Testing & Compliance', description: 'Conduct security audits, compliance testing, and UAT with stakeholders.' },
      { step: 'Launch & Operations', description: 'Deploy to production, enable monitoring, provide ongoing support and upgrades.' },
    ],
  },
  'supply-chain-solution': {
    title: 'Supply Chain Traceability',
    icon: Package,
    headline: 'Supply chain traceability for transparent, verifiable operations',
    subtitle: 'Track products, materials, and certifications across complex multi-tier supply chains with immutable provenance records and real-time visibility.',
    primaryCTA: 'Request a Demo',
    outcomes: [
      { title: 'Visibility', description: 'Real-time tracking across all supply chain tiers' },
      { title: 'Trust', description: 'Verifiable provenance and authenticity' },
      { title: 'Sustainability', description: 'ESG compliance and carbon footprint tracking' },
    ],
    useCases: [
      'Product authentication and anti-counterfeiting',
      'Sustainability and ESG reporting',
      'Cold chain monitoring and compliance',
      'Supplier certification and audit management',
    ],
    features: [
      'Multi-tier supply chain mapping',
      'IoT sensor integration for real-time data capture',
      'QR code and NFC tagging for product tracking',
      'Certificate of origin and compliance documentation',
      'Automated alerts for anomalies and exceptions',
      'Customer-facing provenance verification portals',
    ],
    implementation: [
      { step: 'Supply Chain Mapping', description: 'Map existing supply chain, identify data sources and stakeholder requirements.' },
      { step: 'System Design', description: 'Design blockchain architecture, data schemas, and integration points.' },
      { step: 'Stakeholder Onboarding', description: 'Onboard suppliers, distributors, and partners to the platform.' },
      { step: 'Integration & Testing', description: 'Connect IoT devices, ERP systems, and test end-to-end flows.' },
      { step: 'Rollout & Training', description: 'Launch in phases, train users, establish support processes.' },
    ],
  },
  'identity-management': {
    title: 'Identity Management',
    icon: UserCheck,
    headline: 'Decentralised identity for secure, privacy-preserving access',
    subtitle: 'Deploy self-sovereign identity solutions that give users control over their credentials while enabling secure, selective disclosure for verification.',
    primaryCTA: 'Talk to an Expert',
    outcomes: [
      { title: 'User Control', description: 'Users own and manage their identity credentials' },
      { title: 'Privacy', description: 'Selective disclosure and zero-knowledge proofs' },
      { title: 'Efficiency', description: 'Reusable credentials reduce onboarding friction' },
    ],
    useCases: [
      'Customer onboarding and KYC',
      'Employee credential management',
      'Educational certificate verification',
      'Healthcare credential and consent management',
    ],
    features: [
      'W3C DID and Verifiable Credential standards',
      'Mobile wallet for credential storage',
      'Selective disclosure and zero-knowledge proofs',
      'Revocation and lifecycle management',
      'Integration with existing identity providers',
      'Compliance with data protection regulations',
    ],
    implementation: [
      { step: 'Use Case Definition', description: 'Define credential types, verification requirements, and user journeys.' },
      { step: 'Infrastructure Setup', description: 'Deploy DID infrastructure, credential issuance, and verification services.' },
      { step: 'Wallet Deployment', description: 'Configure mobile/web wallets and integrate with relying party systems.' },
      { step: 'Credential Issuance', description: 'Onboard credential issuers and establish verification workflows.' },
      { step: 'Operations', description: 'Monitor usage, manage revocations, provide user support.' },
    ],
  },
  'loyalty-solution': {
    title: 'Loyalty Solutions',
    icon: Award,
    headline: 'Modern loyalty programs powered by blockchain',
    subtitle: 'Build flexible, multi-partner loyalty programs with tokenised rewards, seamless redemption, and enhanced customer engagement.',
    primaryCTA: 'Request a Demo',
    outcomes: [
      { title: 'Engagement', description: 'Increase customer participation and retention' },
      { title: 'Flexibility', description: 'Multi-partner redemption and dynamic rewards' },
      { title: 'Insights', description: 'Real-time data on customer behavior and preferences' },
    ],
    useCases: [
      'Retail and e-commerce loyalty programs',
      'Multi-brand coalition programs',
      'Hospitality and travel rewards',
      'Gaming and entertainment loyalty',
    ],
    features: [
      'Tokenised loyalty points with flexible economics',
      'Multi-partner coalition infrastructure',
      'Instant issuance and redemption',
      'Tiered membership and benefits management',
      'Integration with POS and e-commerce platforms',
      'Customer analytics and segmentation',
    ],
    implementation: [
      { step: 'Program Design', description: 'Define token economics, earning rules, redemption options, and partner integrations.' },
      { step: 'Platform Development', description: 'Build loyalty platform, smart contracts, and customer-facing applications.' },
      { step: 'Partner Onboarding', description: 'Integrate partners, configure redemption catalogs, establish settlement processes.' },
      { step: 'Launch', description: 'Migrate existing members, launch marketing campaigns, enable customer support.' },
      { step: 'Optimisation', description: 'Analyse engagement data, refine rewards, expand partner network.' },
    ],
  },
  'digital-assets-investment-advisory': {
    title: 'Digital Assets Advisory',
    icon: TrendingUp,
    headline: 'Strategic guidance for digital asset transformation',
    subtitle: 'Expert advisory services for digital asset strategy, tokenisation design, regulatory navigation, and market opportunity assessment.',
    primaryCTA: 'Schedule a Consultation',
    outcomes: [
      { title: 'Clarity', description: 'Clear roadmap for digital asset initiatives' },
      { title: 'Compliance', description: 'Navigate regulatory requirements confidently' },
      { title: 'Value', description: 'Identify and capture market opportunities' },
    ],
    useCases: [
      'Digital asset strategy development',
      'Tokenisation feasibility and design',
      'Regulatory compliance assessment',
      'Market entry and competitive analysis',
    ],
    features: [
      'Strategic workshops and roadmap development',
      'Regulatory landscape analysis',
      'Token economics design and modeling',
      'Technology stack assessment',
      'Partnership and ecosystem development',
      'Implementation partner selection',
    ],
    implementation: [
      { step: 'Discovery & Assessment', description: 'Understand business objectives, constraints, and digital asset opportunities.' },
      { step: 'Strategy Development', description: 'Develop digital asset strategy, token design, and regulatory approach.' },
      { step: 'Roadmap & Business Case', description: 'Create implementation roadmap with timelines, costs, and expected outcomes.' },
      { step: 'Partner Selection', description: 'Help select technology partners and service providers.' },
      { step: 'Implementation Support', description: 'Provide ongoing guidance during implementation phase.' },
    ],
  },
};

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? solutionData[slug] : null;

  if (!solution) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-slate-900 mb-4">Solution not found</h1>
          <Link to="/solutions" className="text-emerald-600 hover:text-emerald-700">
            Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 network-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Icon className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-emerald-400 text-sm uppercase tracking-wide">Solution</span>
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6">
              {solution.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {solution.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                {solution.primaryCTA}
              </button>
              <button className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors">
                Download Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solution.outcomes.map((outcome: any) => (
              <div key={outcome.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{outcome.title}</h3>
                <p className="text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-slate-900 mb-12 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {solution.useCases.map((useCase: string) => (
                <div
                  key={useCase}
                  className="bg-white rounded-lg p-5 border border-slate-200 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Features</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {solution.features.map((feature: string) => (
              <div
                key={feature}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Implementation Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {solution.implementation.map((phase: any, idx: number) => (
              <div
                key={phase.step}
                className="bg-white rounded-lg p-6 border border-slate-200 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-900 mb-2">{phase.step}</h3>
                  <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Security & Compliance</h2>
              <p className="text-lg text-slate-600">
                Built with enterprise-grade security, comprehensive audit trails, 
                and support for regulatory compliance frameworks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'End-to-end encryption',
                'Multi-signature controls',
                'Comprehensive audit logs',
                'Role-based access',
                'Compliance reporting',
                'Regular security audits',
              ].map((item) => (
                <div key={item} className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Ready to get started with {solution.title}?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Talk to our team about how {solution.title} can address your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Talk to a Solutions Architect
            </button>
            <Link 
              to="/case-studies" 
              className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
