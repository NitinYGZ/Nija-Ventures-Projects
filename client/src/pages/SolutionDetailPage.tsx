import { useParams, Link } from 'react-router-dom';
import { Coins, Package, UserCheck, Award, TrendingUp, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const solutionData: Record<string, any> = {
  'tokenisation': {
    title: 'Tokenisation',
    icon: Coins,
    headline: 'Launch compliant tokenised assets and workflows',
    subtitle: 'End-to-end infrastructure for issuing, managing, and settling digital assets with built-in compliance and governance controls.',
    primaryCTA: 'Request a Demo',
    outcomes: [
      { title: 'Liquidity', description: 'Unlock value in illiquid assets through fractionalisation' },
      { title: 'Efficiency', description: 'Automate complex lifecycle events and settlements' },
      { title: 'Trust', description: 'Immutable record of ownership and rights' },
    ],
    useCases: [
      'Real-world asset (RWA) tokenisation',
      'Intra-company settlement indicators',
      'Carbon credit issuance and retirement',
      'IP and licensing rights management',
    ],
    features: [
      'Configurable compliance rules (allow/deny lists)',
      'Multi-chain issuance support',
      'Integrated custody and wallet solutions',
      'Automated corporate action handling',
      'Regulatory reporting adapters',
      'White-label investor portals',
    ],
    implementation: [
      { step: 'Asset & Legal Structuring', description: 'Define the asset wrapper and regulatory requirements.' },
      { step: 'Token Design', description: 'Configure token standards, permissions, and economics.' },
      { step: 'Platform Setup', description: 'Deploy issuance infrastructure and integrations.' },
      { step: 'Launch & Distribution', description: 'Mint assets and manage primary distribution.' },
      { step: 'Lifecycle Management', description: 'Ongoing administration, reporting, and secondary trades.' },
    ],
  },
  'supply-chain-solution': {
    title: 'Supply Chain Solution',
    icon: Package,
    headline: 'End-to-end visibility and provenance',
    subtitle: 'Create a single source of truth for your supply chain. Track products from origin to consumer with verifiable data integrity.',
    primaryCTA: 'Request a Demo',
    outcomes: [
      { title: 'Transparency', description: 'Real-time view of inventory and movement' },
      { title: 'Integrity', description: 'Prevent counterfeiting and fraud' },
      { title: 'Compliance', description: 'Automated ESG and regulatory reporting' },
    ],
    useCases: [
      'Pharmaceutical track and trace',
      'Luxury goods authentication',
      'Sustainable sourcing verification',
      'Cross-border trade documentation',
    ],
    features: [
      'Immutable audit trail creation',
      'GS1 and industry standard support',
      'IoT device data integration',
      'Supplier identity verification',
      'Consumer-facing transparency QR codes',
      'Dispute resolution workflows',
    ],
    implementation: [
      { step: 'Network Design', description: 'Map stakeholders and data exchange requirements.' },
      { step: 'Data Standardisation', description: 'Define shared schemas and integration standards.' },
      { step: 'Pilot Deployment', description: 'Connect initial participants and test data flows.' },
      { step: 'Network Expansion', description: 'Onboard key suppliers and logistics partners.' },
      { step: 'Value Realisation', description: 'Activate consumer engagement and analytics.' },
    ],
  },
  'identity-management': {
    title: 'Identity Management',
    icon: UserCheck,
    headline: 'Secure identity with verifiable credentials',
    subtitle: 'Move beyond centralized databases. Equip users with self-sovereign identity wallets for secure, privacy-preserving access and verification.',
    primaryCTA: 'Talk to an Expert',
    outcomes: [
      { title: 'Security', description: 'Eliminate honeypots of personal data' },
      { title: 'Privacy', description: 'Zero-knowledge proofs for selective disclosure' },
      { title: 'Friction', description: 'Instant onboarding with reusable credentials' },
    ],
    useCases: [
      'KYC/KYB reuse across banking services',
      'Employee and contractor access control',
      'Educational degree verification',
      'Age verification for regulated goods',
    ],
    features: [
      'W3C Verifiable Credential support',
      'Decentralised Identifier (DID) management',
      'White-label identity wallet app',
      'Revocation registries',
      'Biometric authentication binding',
      'Legacy IAM integration (OIDC bridge)',
    ],
    implementation: [
      { step: 'Credential Definition', description: 'Define schemas for required identity attributes.' },
      { step: 'Issuer Setup', description: 'Establish authority and signing infrastructure.' },
      { step: 'Wallet Integration', description: 'Distribute wallets or integrate SDK into apps.' },
      { step: 'Verifier Configuration', description: 'Set up acceptance rules and access gates.' },
      { step: 'Ecosystem Growth', description: 'Expand acceptance network and credential types.' },
    ],
  },
  'loyalty-solution': {
    title: 'Loyalty Solution',
    icon: Award,
    headline: 'Next-generation loyalty and engagement',
    subtitle: 'Transform points into liquid assets. Build multi-partner ecosystems where rewards drive genuine engagement and value.',
    primaryCTA: 'Request a Demo',
    outcomes: [
      { title: 'Engagement', description: 'Higher redemption rates and activity' },
      { title: 'Partnership', description: 'Seamless interoperability betwen brands' },
      { title: 'Insights', description: 'Rich data from token usage patterns' },
    ],
    useCases: [
      'Cross-brand coalition loyalty',
      'NFT-based membership tiers',
      'Gamified community rewards',
      'Employee recognition programs',
    ],
    features: [
      'Fungible and non-fungible reward tokens',
      'Real-time redemption engine',
      'Smart contract-based tier logic',
      'Partner settlement automation',
      'White-label user mobile app',
      'Campaign management dashboard',
    ],
    implementation: [
      { step: 'Economy Design', description: 'Model accumulation, burn, and partnership rates.' },
      { step: 'Technical Integration', description: 'Connect to POS and CRM systems.' },
      { step: 'Member Migration', description: 'Bridge legacy points to new token balances.' },
      { step: 'Partner Activation', description: 'Onboard initial coalition partners.' },
      { step: 'Launch & Grow', description: 'Roll out to customers and optimise campaigns.' },
    ],
  },
  'digital-assets-investment-advisory': {
    title: 'Digital Assets Investment Advisory',
    icon: TrendingUp,
    headline: 'Institutional guidance for the digital economy',
    subtitle: 'Navigate the complexity of digital assets with confidence. We provide strategic advisory, risk assessment, and technical due diligence.',
    primaryCTA: 'Schedule a Consultation',
    outcomes: [
      { title: 'Strategy', description: 'Clear roadmap for market entry' },
      { title: 'Risk', description: 'Comprehensive operational risk profiling' },
      { title: 'Education', description: 'Executive upskilling and team capability' },
    ],
    useCases: [
      'Enterprise blockchain strategy',
      'Tokenisation feasibility studies',
      'Market infrastructure selection',
      'Regulatory license application support',
    ],
    features: [
      'Executive workshops and training',
      'Use case prioritisation frameworks',
      'Technical architecture review',
      'Vendor selection and RFP support',
      'Regulatory landscape analysis',
      'Business case modeling',
    ],
    implementation: [
      { step: 'Discovery', description: 'Assess current state and strategic goals.' },
      { step: 'Market Analysis', description: 'Evaluate relevant trends and opportunities.' },
      { step: 'Strategy Formulation', description: 'Define target operating model and roadmap.' },
      { step: 'Validation', description: 'Stress-test assumptions and technical feasibility.' },
      { step: 'Execution Support', description: 'Guide the team through initial implementation.' },
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
      <section className="bg-white/80 py-20 lg:py-28 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Icon className="w-8 h-8 text-emerald-600" />
              </div>
              <span className="text-emerald-600 text-sm uppercase tracking-wide">Solution</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              {solution.headline}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {solution.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                {solution.primaryCTA}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(241, 245, 249, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Download Overview
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white/80 py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solution.outcomes.map((outcome: any, index: number) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{outcome.title}</h3>
                <p className="text-slate-600">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-slate-50/80 py-20 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-slate-900 mb-12 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {solution.useCases.map((useCase: string, index: number) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-5 border border-slate-200 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white/80 py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Features</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {solution.features.map((feature: string, index: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
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
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="bg-white/80 py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Security & Compliance</h2>
              <p className="text-lg text-slate-600">
                Built with enterprise-grade security, comprehensive audit trails,
                and support for regulatory compliance frameworks.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'End-to-end encryption',
                'Multi-signature controls',
                'Comprehensive audit logs',
                'Role-based access',
                'Compliance reporting',
                'Regular security audits',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900/95 text-white py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Ready to get started with {solution.title}?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Talk to our team about how {solution.title} can address your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Talk to a Solutions Architect
              </motion.button>
              <Link
                to="/case-studies"
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(71, 85, 105, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-slate-600 text-white rounded-lg transition-colors text-center w-full"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
