import { Link } from 'react-router-dom';
import { Network, Cpu, FileText, Cog, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function TechnologiesPage() {
  const technologies = [
    {
      slug: 'blockchain',
      title: 'Blockchain',
      icon: Network,
      description: 'Distributed ledger infrastructure for safe, transparent record-keeping.',
      capabilities: [
        'Asset tokenisation',
        'Supply chain provenance',
        'Smart contract automation',
      ],
    },
    {
      slug: 'ai-digitisation',
      title: 'AI Digitisation',
      icon: FileText,
      description: 'Convert unstructured data into actionable intelligence.',
      capabilities: [
        'OCR & Document understanding',
        'Knowledge graph construction',
        'Legacy data structuring',
      ],
    },
    {
      slug: 'ai-automation',
      title: 'AI Automation',
      icon: Cog,
      description: 'Agents and workflows that reduce manual operational load.',
      capabilities: [
        'Process automation agents',
        'Decision support systems',
        'Compliance monitoring',
      ],
    },
    {
      slug: 'ai-infrastructure',
      title: 'AI Infrastructure',
      icon: Cpu,
      description: 'Secure, scalable foundation for enterprise AI models.',
      capabilities: [
        'Private model hosting',
        'GPU resource management',
        'Inference optimisation',
      ],
    },
    {
      slug: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      icon: Shield,
      description: 'Proactive threat detection and response at machine speed.',
      capabilities: [
        'Anomaly detection',
        'Real-time threat analysis',
        'Automated incident response',
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
              Technology built for enterprise transformation
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A capability-led view of how Nija deploys AI and Blockchain in real systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="bg-slate-50/80 py-20 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/technologies/${tech.slug}`}
                  className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group block h-full flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <tech.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {tech.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{tech.description}</p>

                  <div className="space-y-3 mb-8 flex-1">
                    {tech.capabilities.map((capability) => (
                      <div key={capability} className="flex items-center gap-2 text-slate-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all font-medium mt-auto">
                    Explore {tech.title.includes('AI') ? tech.title.split(' ')[2] : tech.title}
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
              Need guidance on which technologies fit your use case?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our solutions architects can help you design the right technology stack for your requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Talk to a Solutions Architect
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
