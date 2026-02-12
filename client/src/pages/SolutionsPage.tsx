import { Link } from 'react-router-dom';
import { Coins, Package, UserCheck, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function SolutionsPage() {
  const solutions = [
    {
      slug: 'tokenisation',
      title: 'Tokenisation',
      icon: Coins,
      description: 'Issue and manage compliant digital assets, credentials, and entitlements with full audit trails.',
      benefits: [
        'Governance controls',
        'Issuance & lifecycle',
        'Reporting & auditability',
      ],
    },
    {
      slug: 'supply-chain-solution',
      title: 'Supply Chain Solution',
      icon: Package,
      description: 'Improve visibility and reduce disputes with end-to-end traceability.',
      benefits: [
        'Provenance ledger',
        'Event tracking',
        'Partner reconciliation',
      ],
    },
    {
      slug: 'identity-management',
      title: 'Identity Management',
      icon: UserCheck,
      description: 'Secure identity and access with verifiable credentials.',
      benefits: [
        'KYC/KYB-ready',
        'Role-based control',
        'Fraud reduction',
      ],
    },
    {
      slug: 'loyalty-solution',
      title: 'Loyalty Solution',
      icon: Award,
      description: 'Build modern loyalty programs with transparent rewards and engagement.',
      benefits: [
        'Token-based rewards',
        'Personalisation',
        'Analytics & controls',
      ],
    },
    {
      slug: 'digital-assets-investment-advisory',
      title: 'Digital Assets Investment Advisory',
      icon: TrendingUp,
      description: 'Institutional-grade advisory and strategy for digital asset exposure.',
      benefits: [
        'Risk framework',
        'Governance',
        'Reporting-ready outputs',
      ],
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              Solutions designed for enterprise deployment
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Practical implementations that integrate with existing systems and governance models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-slate-50/80 py-20 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group block h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <solution.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6 flex-1">
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all font-medium mt-auto">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/80 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl text-slate-900 mb-4">
              Not sure which solution fits your needs?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team can help you assess your requirements and recommend the right approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Request a Demo
              </motion.button>
              <Link
                to="/contact"
                className="px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors text-center font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
