import { Link } from 'react-router-dom';
import { Coins, Package, UserCheck, Award, TrendingUp, ArrowRight } from 'lucide-react';

export function SolutionsPage() {
  const solutions = [
    {
      slug: 'tokenisation',
      title: 'Tokenisation',
      icon: Coins,
      description: 'Issue and manage compliant digital assets, credentials, and entitlements with full audit trails and regulatory compliance.',
      benefits: [
        'Compliant asset issuance',
        'Automated lifecycle management',
        'Real-time settlement',
      ],
    },
    {
      slug: 'supply-chain-solution',
      title: 'Supply Chain Traceability',
      icon: Package,
      description: 'Track products and materials across complex supply chains with verifiable provenance and comprehensive ESG reporting.',
      benefits: [
        'End-to-end visibility',
        'Provenance verification',
        'ESG compliance',
      ],
    },
    {
      slug: 'identity-management',
      title: 'Identity Management',
      icon: UserCheck,
      description: 'Decentralised identity and access management for secure, user-controlled credentials and privacy-preserving verification.',
      benefits: [
        'Self-sovereign identity',
        'Privacy by design',
        'Reusable credentials',
      ],
    },
    {
      slug: 'loyalty-solution',
      title: 'Loyalty Solutions',
      icon: Award,
      description: 'Modern loyalty and rewards programs with flexible token economics, multi-partner integration, and enhanced customer engagement.',
      benefits: [
        'Multi-partner programs',
        'Flexible rewards',
        'Customer insights',
      ],
    },
    {
      slug: 'digital-assets-investment-advisory',
      title: 'Digital Assets Advisory',
      icon: TrendingUp,
      description: 'Strategic guidance for digital asset strategy, tokenisation design, regulatory navigation, and market opportunity assessment.',
      benefits: [
        'Strategy consulting',
        'Regulatory guidance',
        'Market analysis',
      ],
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Pre-configured solutions designed around common enterprise use cases, 
              customisable to your specific requirements and compliance frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group"
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

                <div className="space-y-2 mb-6">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-slate-900 mb-4">
            Not sure which solution fits your needs?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team can help you assess your requirements and recommend the right approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Request a Demo
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
