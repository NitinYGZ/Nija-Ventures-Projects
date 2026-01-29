import { Handshake, Users, Award, ArrowRight } from 'lucide-react';

export function PartnersPage() {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading blockchain platforms, cloud infrastructure providers, and enterprise software vendors.',
      partners: [
        'Hyperledger Foundation',
        'Ethereum Enterprise Alliance',
        'AWS',
        'Microsoft Azure',
        'Google Cloud',
        'IBM',
      ],
    },
    {
      title: 'System Integrators',
      description: 'Global consulting and integration partners helping enterprises deploy our solutions.',
      partners: [
        'Accenture',
        'Deloitte',
        'PwC',
        'EY',
        'KPMG',
        'Capgemini',
      ],
    },
    {
      title: 'Industry Partners',
      description: 'Organisations advancing standards and best practices in blockchain and digital identity.',
      partners: [
        'World Economic Forum',
        'Decentralized Identity Foundation',
        'Global Blockchain Business Council',
        'Enterprise Ethereum Alliance',
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
              Partners & Ecosystem
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We collaborate with leading technology providers, system integrators, and industry organisations 
              to deliver comprehensive solutions for enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {partnerCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                    <Handshake className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-slate-900 mb-2">{category.title}</h2>
                    <p className="text-slate-600 leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.partners.map((partner) => (
                    <div
                      key={partner}
                      className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-center text-slate-700 hover:border-emerald-300 transition-colors"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Why Partner with Nija
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join our ecosystem to expand your capabilities and deliver greater value to enterprise clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Market Access',
                description: 'Access to enterprise clients seeking AI and blockchain implementation expertise.',
              },
              {
                icon: Award,
                title: 'Technical Enablement',
                description: 'Training, certification, and technical support to deliver our solutions effectively.',
              },
              {
                icon: Handshake,
                title: 'Co-Innovation',
                description: 'Collaborate on new solutions and go-to-market strategies for emerging use cases.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Interested in partnering?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We're always looking for organisations that share our commitment to delivering 
            secure, enterprise-grade solutions.
          </p>
          <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Explore Partnership Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
