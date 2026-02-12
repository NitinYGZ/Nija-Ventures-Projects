import { Package, Building2, Heart, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      icon: Package,
      industry: 'Supply Chain & Logistics',
      title: 'End-to-End Traceability for Global Manufacturer',
      challenge: 'Manual tracking processes and limited visibility across multi-tier supply chain resulted in compliance risks and customer trust issues.',
      solution: 'Deployed blockchain-based traceability platform with IoT sensor integration across manufacturing, distribution, and retail partners.',
      results: [
        '87% reduction in product verification time',
        'Full ESG compliance reporting enabled',
        '40+ suppliers onboarded across 12 countries',
      ],
    },
    {
      icon: Building2,
      industry: 'Financial Services',
      title: 'Decentralised Identity for KYC Streamlining',
      challenge: 'Complex KYC processes and siloed customer data across business units led to poor customer experience and high compliance costs.',
      solution: 'Implemented decentralised identity platform enabling reusable credentials and selective disclosure across banking products.',
      results: [
        '65% faster customer onboarding',
        '40% reduction in compliance overhead',
        'Improved customer satisfaction scores',
      ],
    },
    {
      icon: Heart,
      industry: 'Healthcare',
      title: 'Credential Management for Healthcare Network',
      challenge: 'Fragmented credentialing systems and manual verification processes delayed provider onboarding and increased administrative burden.',
      solution: 'Deployed tokenised credential system with automated verification workflows and secure data sharing across network participants.',
      results: [
        '92% improvement in credential verification time',
        'Enhanced data privacy and HIPAA compliance',
        'Reduced administrative costs by 35%',
      ],
    },
    {
      icon: ShoppingBag,
      industry: 'Retail',
      title: 'Multi-Brand Loyalty Coalition',
      challenge: 'Siloed loyalty programs limited customer engagement and prevented cross-brand partnerships.',
      solution: 'Built blockchain-based coalition loyalty platform with tokenised rewards and real-time redemption across 15 retail partners.',
      results: [
        '45% increase in active member engagement',
        '3x growth in cross-brand redemptions',
        'Real-time settlement between partners',
      ],
    },
    {
      icon: TrendingUp,
      industry: 'Asset Management',
      title: 'Digital Securities Platform',
      challenge: 'Traditional securities infrastructure limited liquidity, transparency, and accessibility for alternative investments.',
      solution: 'Developed compliant tokenisation platform for private market securities with integrated custody and transfer agent services.',
      results: [
        'Enabled fractional ownership and 24/7 trading',
        'Reduced settlement time from T+3 to instant',
        'Comprehensive regulatory reporting',
      ],
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold tracking-tight">
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Real implementations delivering measurable results for enterprise clients across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 lg:p-10 border border-slate-200 hover:border-emerald-300 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-emerald-100 rounded-lg flex-shrink-0">
                    <study.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-600 mb-2 font-medium">{study.industry}</div>
                    <h3 className="text-2xl lg:text-3xl text-slate-900 font-semibold">{study.title}</h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">Challenge</div>
                    <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">Solution</div>
                    <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">Results</div>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-slate-900">
                          <ArrowRight className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl text-slate-900 mb-4 font-bold">
              Discuss your use case
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Every organisation has unique requirements. Let's explore how we can help you achieve your objectives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Request a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
