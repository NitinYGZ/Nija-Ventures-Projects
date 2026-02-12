import { Link } from 'react-router-dom';
import { Network, Cpu, FileText, Cog, Shield, ArrowRight } from 'lucide-react';

export function TechnologiesPage() {
  const technologies = [
    {
      slug: 'blockchain',
      title: 'Blockchain',
      icon: Network,
      description: 'Distributed ledger infrastructure for secure, transparent, and tamper-proof record-keeping across organisational boundaries.',
      capabilities: [
        'Public and private blockchain deployment',
        'Smart contract development and auditing',
        'Tokenisation infrastructure',
      ],
    },
    {
      slug: 'ai-digitisation',
      title: 'AI Digitisation',
      icon: FileText,
      description: 'Automated extraction and structuring of information from documents, forms, and unstructured data sources.',
      capabilities: [
        'Document processing and OCR',
        'Data extraction and validation',
        'Legacy system digitisation',
      ],
    },
    {
      slug: 'ai-automation',
      title: 'AI Automation',
      icon: Cog,
      description: 'Intelligent process automation for repetitive workflows, decision support, and operational efficiency.',
      capabilities: [
        'Robotic process automation (RPA)',
        'Workflow orchestration',
        'Decision automation',
      ],
    },
    {
      slug: 'ai-infrastructure',
      title: 'AI Infrastructure',
      icon: Cpu,
      description: 'Production-grade platforms for deploying, monitoring, and scaling machine learning models securely.',
      capabilities: [
        'Model deployment and serving',
        'MLOps and monitoring',
        'Scalable compute infrastructure',
      ],
    },
    {
      slug: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      icon: Shield,
      description: 'Advanced threat detection, anomaly analysis, and security operations powered by machine learning.',
      capabilities: [
        'Threat detection and analysis',
        'Behavioral anomaly detection',
        'Security operations automation',
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
              Technology built for enterprise transformation
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our technology stack combines distributed ledger infrastructure with production-grade AI capabilities, 
              designed for security, scalability, and regulatory compliance from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <Link
                key={tech.slug}
                to={`/technologies/${tech.slug}`}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                    <tech.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{tech.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {tech.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all">
                  Explore {tech.title}
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
            Need guidance on which technologies fit your use case?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our solutions architects can help you design the right technology stack for your requirements.
          </p>
          <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Talk to a Solutions Architect
          </button>
        </div>
      </section>
    </div>
  );
}
