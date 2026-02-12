import { Link } from 'react-router-dom';
import { Shield, Zap, Database, Network, CheckCircle, ArrowRight, FileText, Lock, BarChart3, Globe, Cpu, Code } from 'lucide-react';

export function HomePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white network-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl fade-in-up">
            <h1 className="text-4xl lg:text-5xl mb-6 leading-tight">
              Enterprise AI + Blockchain Solutions, Delivered Securely.
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Nija helps organisations deploy secure, production-grade solutions that improve traceability, 
              reduce operational friction, and enable compliant digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                Request a Demo
              </button>
              <Link 
                to="/case-studies" 
                className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center"
              >
                View Case Studies
              </Link>
            </div>
            
            {/* Trust Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700">
              {[
                { icon: Shield, label: 'Security-first' },
                { icon: CheckCircle, label: 'Audit-ready' },
                { icon: Network, label: 'Integrations' },
                { icon: BarChart3, label: 'Outcomes' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 fade-in-delay-1">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Built on two enterprise pillars
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine proven AI capabilities with blockchain infrastructure to deliver solutions 
              that modernise operations while maintaining enterprise-grade security and compliance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* AI Pillar */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-emerald-200 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl text-slate-900">Artificial Intelligence</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Digitisation of documents, data, and legacy workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Automation of repetitive processes and decision workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Infrastructure for secure model deployment and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Cybersecurity threat detection and anomaly analysis</span>
                </li>
              </ul>
            </div>

            {/* Blockchain Pillar */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-purple-200 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Network className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl text-slate-900">Blockchain</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Tokenisation of assets, credentials, and entitlements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Provenance tracking across supply chains and ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Smart contracts for automated, transparent settlements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Identity and access management for decentralised systems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/technologies" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              Explore Technologies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-slate-50 py-20 lg:py-28 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Solutions built for enterprise outcomes
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pre-configured solutions designed around common enterprise use cases, 
              customisable to your specific requirements and compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Tokenisation',
                description: 'Issue and manage compliant digital assets, credentials, and entitlements with full audit trails.',
                bullets: ['Real-world asset tokenisation', 'Credential issuance', 'Regulatory compliance'],
                href: '/solutions/tokenisation',
              },
              {
                title: 'Supply Chain Traceability',
                description: 'Track products and materials across complex supply chains with verifiable provenance.',
                bullets: ['End-to-end visibility', 'Provenance verification', 'ESG reporting'],
                href: '/solutions/supply-chain-solution',
              },
              {
                title: 'Identity Management',
                description: 'Decentralised identity and access management for secure, user-controlled credentials.',
                bullets: ['Self-sovereign identity', 'Access control', 'Privacy by design'],
                href: '/solutions/identity-management',
              },
              {
                title: 'Loyalty Solutions',
                description: 'Modern loyalty and rewards programs with flexible token economics and partner integration.',
                bullets: ['Multi-partner programs', 'Token rewards', 'Customer engagement'],
                href: '/solutions/loyalty-solution',
              },
              {
                title: 'Digital Assets Advisory',
                description: 'Strategic guidance for digital asset strategy, tokenisation design, and regulatory navigation.',
                bullets: ['Strategy consulting', 'Regulatory guidance', 'Market analysis'],
                href: '/solutions/digital-assets-investment-advisory',
              },
            ].map((solution, idx) => (
              <Link
                key={solution.title}
                to={solution.href}
                className={`bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group fade-in-delay-${idx % 3 + 1}`}
              >
                <h3 className="text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2 mb-4">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              How we deliver
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A structured approach from requirements to production, with security, 
              compliance, and knowledge transfer built into every phase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We map your requirements, constraints, compliance needs, and existing systems.',
                icon: FileText,
              },
              {
                step: '02',
                title: 'Design',
                description: 'Detailed architecture, security model, integration plan, and implementation roadmap.',
                icon: Code,
              },
              {
                step: '03',
                title: 'Build & Deploy',
                description: 'Agile development with continuous testing, security reviews, and staged deployment.',
                icon: Zap,
              },
              {
                step: '04',
                title: 'Operate',
                description: 'Ongoing monitoring, support, training, and iterative improvements.',
                icon: BarChart3,
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <phase.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-sm text-emerald-600 mb-2">{phase.step}</div>
                <h3 className="text-xl text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
              Talk to a Solutions Architect
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Proven outcomes across industries
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real implementations delivering measurable results for enterprise clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                industry: 'Supply Chain',
                problem: 'Manual tracking and limited visibility across multi-tier supply chain',
                implementation: 'Blockchain-based traceability with IoT sensor integration',
                results: '87% reduction in verification time, full ESG compliance reporting',
              },
              {
                industry: 'Financial Services',
                problem: 'Complex KYC processes and siloed customer data across business units',
                implementation: 'Decentralised identity platform with reusable credentials',
                results: '65% faster onboarding, 40% cost reduction in compliance overhead',
              },
              {
                industry: 'Healthcare',
                problem: 'Fragmented patient records and credential verification delays',
                implementation: 'Tokenised credential system with secure data sharing',
                results: '92% improvement in credential verification time, enhanced data privacy',
              },
            ].map((study) => (
              <div
                key={study.industry}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <div className="text-sm text-emerald-600 mb-3">{study.industry}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Problem</div>
                    <p className="text-slate-700">{study.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Implementation</div>
                    <p className="text-slate-700">{study.implementation}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Results</div>
                    <p className="text-slate-900">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              Browse Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white py-20 lg:py-28" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Security and compliance built-in
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade security architecture, comprehensive audit trails, 
              and compliance frameworks integrated from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Lock,
                title: 'Data Protection',
                points: [
                  'End-to-end encryption',
                  'Zero-knowledge architecture options',
                  'Secure key management',
                  'Privacy by design',
                ],
              },
              {
                icon: Shield,
                title: 'Governance',
                points: [
                  'Role-based access control',
                  'Comprehensive audit logs',
                  'Compliance reporting',
                  'Policy enforcement',
                ],
              },
              {
                icon: Database,
                title: 'Reliability',
                points: [
                  'High availability deployment',
                  'Disaster recovery',
                  'Performance monitoring',
                  'Incident response',
                ],
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
              Request a Security Brief
            </button>
          </div>
        </div>
      </section>

      {/* Insights + Media Section */}
      <section className="bg-slate-50 py-20 lg:py-28 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Insights & Media
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Insights */}
            <div>
              <h3 className="text-xl text-slate-900 mb-6">Latest Insights</h3>
              <div className="space-y-4">
                {[
                  { title: 'Tokenisation frameworks for regulated assets', date: 'Jan 2026', category: 'Blockchain' },
                  { title: 'AI automation in enterprise compliance workflows', date: 'Dec 2025', category: 'AI' },
                  { title: 'Decentralised identity: enterprise adoption trends', date: 'Nov 2025', category: 'Identity' },
                ].map((insight) => (
                  <div key={insight.title} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-slate-900">{insight.title}</h4>
                      <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span className="text-purple-600">{insight.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-xl text-slate-900 mb-6">In the Media</h3>
              <div className="space-y-4">
                {[
                  { title: 'Nija launches enterprise tokenisation platform', outlet: 'TechCrunch', date: 'Jan 2026' },
                  { title: 'How blockchain is transforming supply chain operations', outlet: 'Forbes', date: 'Dec 2025' },
                ].map((media) => (
                  <div key={media.title} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-slate-900">{media.title}</h4>
                      <Globe className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{media.outlet}</span>
                      <span>•</span>
                      <span>{media.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/insights" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              View Insights
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Discuss your use case with Nija
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Whether you're exploring digital transformation or ready to deploy, 
            our team can help you identify the right solution architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Request a Demo
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
