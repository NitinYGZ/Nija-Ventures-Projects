import { Link } from 'react-router-dom';
import { Shield, Zap, Database, Network, CheckCircle, ArrowRight, FileText, Lock, BarChart3, Globe, Cpu, Code, Coins, Package, UserCheck, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchSolutions, fetchCaseStudies, fetchInsights, fetchMedia } from '../services/api';

const iconMap: any = {
  Coins, Package, UserCheck, Award, TrendingUp,
  Shield, Zap, Database, Network, CheckCircle, FileText, Lock, BarChart3, Globe, Cpu, Code
};

export function HomePage() {
  const [solutions, setSolutions] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [media, setMedia] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [solutionsData, caseStudiesData, insightsData, mediaData] = await Promise.all([
          fetchSolutions(),
          fetchCaseStudies(),
          fetchInsights(),
          fetchMedia()
        ]);
        setSolutions(solutionsData);
        setCaseStudies(caseStudiesData);
        setInsights(insightsData);
        setMedia(mediaData);
      } catch (error) {
        console.error('Error fetching home page data:', error);
      }
    };
    loadData();
  }, []);
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white network-pattern-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl mb-6 leading-tight font-bold">
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
                  className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  Request a Demo
                </motion.button>
                <Link to="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center w-full sm:w-auto"
                  >
                    View Case Studies
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Trust Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700">
              {[
                { icon: Shield, label: 'Security-first' },
                { icon: CheckCircle, label: 'Audit-ready' },
                { icon: Network, label: 'Integrations' },
                { icon: BarChart3, label: 'Outcomes' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
              Built on two enterprise pillars
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine proven AI capabilities with blockchain infrastructure to deliver solutions
              that modernise operations while maintaining enterprise-grade security and compliance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* AI Pillar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-emerald-200 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl text-slate-900 font-semibold">Artificial Intelligence</h3>
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
            </motion.div>

            {/* Blockchain Pillar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-purple-200 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Network className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl text-slate-900 font-semibold">Blockchain</h3>
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
      <section className="bg-slate-50 py-20 lg:py-28 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
              Solutions built for enterprise outcomes
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pre-configured solutions designed around common enterprise use cases,
              customisable to your specific requirements and compliance frameworks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {solutions.slice(0, 5).map((solution, idx) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="block bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group h-full"
                >
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <h3 className="text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors font-semibold">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{solution.description}</p>
                    <ul className="space-y-2 mb-4">
                      {solution.bullets && solution.bullets.map((bullet: string) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-md"
              >
                View All Solutions
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
              How we deliver
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A structured approach from requirements to production, with security,
              compliance, and knowledge transfer built into every phase.
            </p>
          </motion.div>

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
            ].map((phase, idx) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4"
                >
                  <phase.icon className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <div className="text-sm text-emerald-600 mb-2 font-bold">{phase.step}</div>
                <h3 className="text-xl text-slate-900 mb-3 font-semibold">{phase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Talk to a Solutions Architect
            </motion.button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
              Proven outcomes across industries
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real implementations delivering measurable results for enterprise clients.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {caseStudies.slice(0, 3).map((study, idx) => (
                <motion.div
                  key={study.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full"
                >
                  <div className="text-sm text-emerald-600 mb-3 font-semibold">{study.industry}</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-1 font-bold">Problem</div>
                      <p className="text-slate-700">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-1 font-bold">Implementation</div>
                      <p className="text-slate-700">{study.solution}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-1 font-bold">Results</div>
                      <p className="text-slate-900 font-medium">
                        {Array.isArray(study.results) ? study.results.join(', ') : study.results}
                      </p>
                    </div>
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
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white py-20 lg:py-28" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
              Security and compliance built-in
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade security architecture, comprehensive audit trails,
              and compliance frameworks integrated from day one.
            </p>
          </motion.div>

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
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-4 font-semibold">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Request a Security Brief
            </motion.button>
          </div>
        </div>
      </section>

      {/* Insights + Media Section */}
      <section className="bg-slate-50 py-20 lg:py-28 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4 font-bold">
              Insights & Media
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Insights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl text-slate-900 mb-6 font-semibold">Latest Insights</h3>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <motion.div
                    key={insight.title}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                    className="bg-white rounded-lg p-5 border border-slate-200 hover:border-emerald-200 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-slate-900 font-medium">{insight.title}</h4>
                      <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span className="text-purple-600 font-medium">{insight.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl text-slate-900 mb-6 font-semibold">In the Media</h3>
              <div className="space-y-4">
                {media.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                    className="bg-white rounded-lg p-5 border border-slate-200 hover:border-emerald-200 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-slate-900 font-medium">{item.title}</h4>
                      <Globe className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{item.outlet}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </motion.div>
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
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4 font-bold">
              Discuss your use case with Nija
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you're exploring digital transformation or ready to deploy,
              our team can help you identify the right solution architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Request a Demo
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center w-full sm:w-auto"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
