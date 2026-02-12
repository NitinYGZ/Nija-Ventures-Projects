import { Link } from 'react-router-dom';
import { Shield, Zap, Database, Network, CheckCircle, ArrowRight, FileText, Lock, BarChart3, Globe, Cpu, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900/95 text-white network-pattern-dark backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl mb-6 leading-tight">
              Enterprise AI + Blockchain Solutions, Delivered Securely.
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Nija helps organisations deploy secure, production-grade solutions that improve traceability,
              reduce operational friction, and enable compliant digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Request a Demo
              </motion.button>
              <Link
                to="/case-studies"
                className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center font-medium"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700 text-sm">
              {[
                { icon: Shield, label: 'Security-first' },
                { icon: CheckCircle, label: 'Audit-ready' },
                { icon: Network, label: 'Integrations' },
                { icon: BarChart3, label: 'Outcomes' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-300">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Built on two enterprise pillars
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A unified approach combining practical AI with trusted blockchain infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* AI Pillar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl text-slate-900">Artificial Intelligence</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: 'AI for Digitisation', desc: 'Convert legacy processes into structured, searchable systems.' },
                  { title: 'AI for Automation', desc: 'Reduce manual work with policy-driven workflows and agents.' },
                  { title: 'AI for Infrastructure', desc: 'Observability, reliability, and scale across systems.' },
                  { title: 'AI for Cybersecurity', desc: 'Threat detection, prevention, and response acceleration.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900">{item.title}</span>
                      <span className="text-slate-600 mx-2">—</span>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Blockchain Pillar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Network className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl text-slate-900">Blockchain</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: 'Tokenisation frameworks', desc: 'Represent real-world value with governance controls.' },
                  { title: 'Provenance & audit trails', desc: 'Immutable traceability for high-integrity workflows.' },
                  { title: 'Smart contracts & settlement', desc: 'Automated, verifiable business logic.' },
                  { title: 'Identity primitives', desc: 'Secure access and verifiable credentials.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900">{item.title}</span>
                      <span className="text-slate-600 mx-2">—</span>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              to="/technologies"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group font-medium"
            >
              Explore Technologies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-slate-50/80 py-20 lg:py-28 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Solutions designed for enterprise deployment
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Practical implementations that integrate with existing systems and governance models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Tokenisation',
                outcome: 'Issue and manage compliant digital assets, credentials, and entitlements with full audit trails.',
                bullets: ['Real-world asset tokenisation', 'Credential issuance', 'Regulatory compliance'],
                cta: 'Explore Tokenisation',
                href: '/solutions/tokenisation',
              },
              {
                title: 'Supply Chain Traceability',
                outcome: 'Track products and materials across complex supply chains with verifiable provenance.',
                bullets: ['End-to-end visibility', 'Provenance verification', 'ESG reporting'],
                cta: 'Explore Supply Chain',
                href: '/solutions/supply-chain-solution',
              },
              {
                title: 'Identity Management',
                outcome: 'Decentralised identity and access management for secure, user-controlled credentials.',
                bullets: ['Self-sovereign identity', 'Access control', 'Privacy by design'],
                cta: 'Explore Identity',
                href: '/solutions/identity-management',
              },
              {
                title: 'Loyalty Solutions',
                outcome: 'Modern loyalty and rewards programs with flexible token economics and partner integration.',
                bullets: ['Multi-partner programs', 'Token rewards', 'Customer engagement'],
                cta: 'Explore Loyalty',
                href: '/solutions/loyalty-solution',
              },
              {
                title: 'Digital Assets Advisory',
                outcome: 'Strategic guidance for digital asset strategy, tokenisation design, and regulatory navigation.',
                bullets: ['Strategy consulting', 'Regulatory guidance', 'Market analysis'],
                cta: 'Explore Advisory',
                href: '/solutions/digital-assets-investment-advisory',
              },
            ].map((solution, idx) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  to={solution.href}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group block h-full flex flex-col"
                >
                  <h3 className="text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {solution.title}
                  </h3>
                  <div className="mb-4 text-emerald-700 font-medium text-sm">
                    {solution.outcome}
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {solution.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all font-medium text-sm">
                    {solution.cta}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Delivery model built for reliability and governance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Requirements, risk assessment, target outcomes',
                icon: FileText,
              },
              {
                step: '02',
                title: 'Design',
                description: 'Architecture, security model, integration plan',
                icon: Code,
              },
              {
                step: '03',
                title: 'Build & Deploy',
                description: 'Production-grade implementation with testing',
                icon: Zap,
              },
              {
                step: '04',
                title: 'Operate',
                description: 'Monitoring, updates, and continuous optimisation',
                icon: BarChart3,
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <phase.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-sm text-emerald-600 mb-2 font-medium">{phase.step}</div>
                <h3 className="text-xl text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium">
              Talk to a Solutions Architect
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Proven delivery in real environments
            </h2>
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
            ].map((study, index) => (
              <motion.div
                key={study.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <div className="text-sm text-emerald-600 mb-3 font-medium uppercase tracking-wide">{study.industry}</div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1 line-clamp-2">{study.problem}</h4>
                    <p className="text-slate-600 text-sm line-clamp-2">{study.implementation}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-emerald-700 font-medium text-sm">{study.results}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center gap-1 cursor-pointer group">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group font-medium"
            >
              Browse Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Security-first by design
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We design for auditability, access control, and operational resilience from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Lock,
                title: 'Data Protection',
                description: 'Encryption in transit/at rest, secrets management, least privilege access.',
              },
              {
                icon: Shield,
                title: 'Governance & Audit',
                description: 'Activity logs, change tracking, policy enforcement, and reporting readiness.',
              },
              {
                icon: Database,
                title: 'Operational Reliability',
                description: 'Monitoring, alerting, incident response playbooks, and uptime practices.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-3 font-medium">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium">
              Request a Security Brief
            </button>
          </div>
        </div>
      </section>

      {/* Insights + Media Section */}
      <section className="bg-slate-50/80 py-20 lg:py-28 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Research and updates
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Insights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl text-slate-900 mb-6 font-medium">Latest Insights</h3>
              <div className="space-y-4">
                {[
                  { title: 'Tokenisation frameworks for regulated assets', date: 'Jan 2026', category: 'Web3' },
                  { title: 'AI automation in enterprise compliance workflows', date: 'Dec 2025', category: 'AI' },
                  { title: 'Decentralised identity: enterprise adoption trends', date: 'Nov 2025', category: 'Security' },
                ].map((insight) => (
                  <div key={insight.title} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-slate-900 font-medium group-hover:text-emerald-700 transition-colors">{insight.title}</h4>
                      <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span className="text-purple-600 font-medium">{insight.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl text-slate-900 mb-6 font-medium">In the Media</h3>
              <div className="space-y-4">
                {[
                  { title: 'Nija launches enterprise tokenisation platform', outlet: 'TechCrunch', date: 'Jan 2026' },
                  { title: 'How blockchain is transforming supply chain operations', outlet: 'Forbes', date: 'Dec 2025' },
                ].map((media) => (
                  <div key={media.title} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-slate-900 font-medium group-hover:text-emerald-700 transition-colors">{media.title}</h4>
                      <Globe className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{media.outlet}</span>
                      <span>•</span>
                      <span>{media.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group font-medium"
            >
              View Insights
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900/95 text-white py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Discuss your use case with Nija
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a tailored walkthrough, architecture approach, and implementation plan.
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
                className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center font-medium"
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
