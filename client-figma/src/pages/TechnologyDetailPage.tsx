import { useParams, Link } from 'react-router-dom';
import { Network, Cpu, FileText, Cog, Shield, CheckCircle, ArrowRight, Lock, BarChart3 } from 'lucide-react';

const technologyData: Record<string, any> = {
  'blockchain': {
    title: 'Blockchain',
    icon: Network,
    headline: 'Enterprise blockchain infrastructure for secure, transparent operations',
    subtitle: 'Deploy distributed ledger solutions that provide immutable audit trails, automated settlements, and cross-organisational trust without intermediaries.',
    outcomes: [
      { title: 'Transparency', description: 'Shared, verifiable records across all participants' },
      { title: 'Traceability', description: 'Complete audit trail of all transactions and changes' },
      { title: 'Automation', description: 'Smart contracts execute pre-defined business logic' },
    ],
    useCases: [
      'Asset tokenisation and lifecycle management',
      'Supply chain provenance and traceability',
      'Cross-border payment and settlement',
      'Credential issuance and verification',
    ],
    features: [
      'Public and permissioned blockchain support',
      'Smart contract development and security auditing',
      'Tokenisation frameworks (fungible and non-fungible)',
      'Integration with existing enterprise systems',
      'Compliance and regulatory reporting tools',
      'High-availability node infrastructure',
    ],
    implementation: [
      { step: 'Requirements & Architecture', description: 'Define use case, select appropriate blockchain platform, design token models and smart contract logic.' },
      { step: 'Development & Testing', description: 'Build and audit smart contracts, develop integration layer, conduct security testing.' },
      { step: 'Deployment', description: 'Deploy to test networks, conduct UAT, migrate to production with monitoring.' },
      { step: 'Integration', description: 'Connect to enterprise systems, configure access controls, enable reporting dashboards.' },
      { step: 'Operations & Support', description: 'Ongoing monitoring, incident response, upgrades, and user training.' },
    ],
    relatedSolutions: ['tokenisation', 'supply-chain-solution', 'identity-management'],
  },
  'ai-digitisation': {
    title: 'AI Digitisation',
    icon: FileText,
    headline: 'Transform documents and unstructured data into structured, actionable information',
    subtitle: 'Automate the extraction, validation, and structuring of information from documents, forms, images, and legacy systems using advanced AI models.',
    outcomes: [
      { title: 'Efficiency', description: 'Reduce manual data entry time by up to 90%' },
      { title: 'Accuracy', description: 'Minimise human error in data capture and validation' },
      { title: 'Accessibility', description: 'Make legacy information searchable and actionable' },
    ],
    useCases: [
      'Invoice and purchase order processing',
      'Contract analysis and metadata extraction',
      'Customer onboarding document verification',
      'Legacy archive digitisation',
    ],
    features: [
      'Optical character recognition (OCR) for printed and handwritten text',
      'Intelligent document classification',
      'Entity extraction and relationship mapping',
      'Multi-language support',
      'Quality assurance and human-in-the-loop workflows',
      'API and batch processing modes',
    ],
    implementation: [
      { step: 'Document Assessment', description: 'Analyse document types, volumes, quality, and extraction requirements.' },
      { step: 'Model Training', description: 'Train or fine-tune AI models on sample documents, establish validation rules.' },
      { step: 'Pipeline Development', description: 'Build extraction pipelines with quality checks and exception handling.' },
      { step: 'Integration', description: 'Connect to document sources and downstream systems, deploy monitoring.' },
      { step: 'Continuous Improvement', description: 'Monitor accuracy, refine models, scale processing capacity.' },
    ],
    relatedSolutions: ['supply-chain-solution', 'identity-management'],
  },
  'ai-automation': {
    title: 'AI Automation',
    icon: Cog,
    headline: 'Intelligent automation for operational efficiency and decision support',
    subtitle: 'Deploy AI-powered automation to handle repetitive tasks, orchestrate complex workflows, and provide intelligent decision recommendations.',
    outcomes: [
      { title: 'Cost Reduction', description: 'Reduce operational costs through process automation' },
      { title: 'Speed', description: 'Execute workflows 24/7 with minimal latency' },
      { title: 'Consistency', description: 'Standardised execution reduces process variation' },
    ],
    useCases: [
      'Financial reconciliation and reporting',
      'Customer service request routing and response',
      'Compliance monitoring and alert generation',
      'Order processing and fulfillment',
    ],
    features: [
      'Robotic process automation (RPA)',
      'Workflow orchestration across multiple systems',
      'Intelligent decision routing',
      'Exception handling and escalation',
      'Audit logging and compliance tracking',
      'No-code/low-code workflow builders',
    ],
    implementation: [
      { step: 'Process Discovery', description: 'Map existing workflows, identify automation opportunities, define success metrics.' },
      { step: 'Automation Design', description: 'Design automated workflows, decision logic, and exception handling rules.' },
      { step: 'Development & Testing', description: 'Build automation scripts, test with real data, validate against requirements.' },
      { step: 'Deployment', description: 'Roll out in phases, train users, establish monitoring and support.' },
      { step: 'Optimisation', description: 'Analyse performance data, expand automation scope, improve decision accuracy.' },
    ],
    relatedSolutions: ['supply-chain-solution', 'loyalty-solution'],
  },
  'ai-infrastructure': {
    title: 'AI Infrastructure',
    icon: Cpu,
    headline: 'Production-grade platforms for deploying and scaling machine learning models',
    subtitle: 'Build secure, scalable infrastructure for training, deploying, and monitoring AI models in production environments.',
    outcomes: [
      { title: 'Reliability', description: 'High-availability model serving with failover' },
      { title: 'Scalability', description: 'Auto-scaling to handle variable workloads' },
      { title: 'Governance', description: 'Model versioning, monitoring, and audit trails' },
    ],
    useCases: [
      'Real-time fraud detection',
      'Predictive maintenance',
      'Recommendation engines',
      'Natural language processing services',
    ],
    features: [
      'Model deployment and versioning',
      'MLOps pipelines and CI/CD',
      'Model monitoring and drift detection',
      'A/B testing and canary deployments',
      'Resource management and cost optimisation',
      'Integration with data lakes and warehouses',
    ],
    implementation: [
      { step: 'Infrastructure Planning', description: 'Assess compute requirements, select platforms, design architecture.' },
      { step: 'Platform Setup', description: 'Deploy infrastructure, configure security, establish MLOps pipelines.' },
      { step: 'Model Migration', description: 'Package models, conduct performance testing, deploy to staging.' },
      { step: 'Production Deployment', description: 'Roll out models, enable monitoring, configure alerting.' },
      { step: 'Operations', description: 'Monitor performance, manage resources, update models, respond to incidents.' },
    ],
    relatedSolutions: ['digital-assets-investment-advisory'],
  },
  'ai-cybersecurity': {
    title: 'AI Cybersecurity',
    icon: Shield,
    headline: 'Advanced threat detection and security operations powered by AI',
    subtitle: 'Leverage machine learning to detect threats, identify anomalies, and automate security operations at scale.',
    outcomes: [
      { title: 'Detection', description: 'Identify threats faster with behavioral analysis' },
      { title: 'Response', description: 'Automated incident response and remediation' },
      { title: 'Prevention', description: 'Proactive threat hunting and risk assessment' },
    ],
    useCases: [
      'Network intrusion detection',
      'User behavior analytics',
      'Malware detection and analysis',
      'Security log analysis',
    ],
    features: [
      'Behavioral anomaly detection',
      'Threat intelligence integration',
      'Automated incident response playbooks',
      'Security information and event management (SIEM) integration',
      'Vulnerability assessment and prioritization',
      'Compliance monitoring and reporting',
    ],
    implementation: [
      { step: 'Security Assessment', description: 'Evaluate current security posture, identify gaps, define objectives.' },
      { step: 'Tool Deployment', description: 'Deploy detection tools, configure integrations, establish baselines.' },
      { step: 'Model Training', description: 'Train anomaly detection models on historical data, define alert thresholds.' },
      { step: 'Operations Integration', description: 'Integrate with SOC workflows, configure automated responses, train analysts.' },
      { step: 'Continuous Improvement', description: 'Refine detection rules, update threat intelligence, expand coverage.' },
    ],
    relatedSolutions: ['identity-management'],
  },
};

export function TechnologyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const tech = slug ? technologyData[slug] : null;

  if (!tech) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-slate-900 mb-4">Technology not found</h1>
          <Link to="/technologies" className="text-emerald-600 hover:text-emerald-700">
            Back to Technologies
          </Link>
        </div>
      </div>
    );
  }

  const Icon = tech.icon;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 network-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Icon className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-emerald-400 text-sm uppercase tracking-wide">Technology</span>
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6">
              {tech.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {tech.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                Request a Demo
              </button>
              <button className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors">
                Download Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tech.outcomes.map((outcome: any) => (
              <div key={outcome.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{outcome.title}</h3>
                <p className="text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-slate-900 mb-12 text-center">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tech.useCases.map((useCase: string) => (
                <div
                  key={useCase}
                  className="bg-white rounded-lg p-5 border border-slate-200 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Reference Architecture</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-12 border border-slate-200">
              <div className="space-y-6">
                {/* Simple flowchart representation */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-white rounded-lg p-6 border-2 border-emerald-500 text-center">
                    <div className="text-sm text-slate-600 mb-1">Input Layer</div>
                    <div className="text-slate-900">Data Sources</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="flex-1 bg-white rounded-lg p-6 border-2 border-purple-500 text-center">
                    <div className="text-sm text-slate-600 mb-1">Processing</div>
                    <div className="text-slate-900">{tech.title}</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="flex-1 bg-white rounded-lg p-6 border-2 border-emerald-500 text-center">
                    <div className="text-sm text-slate-600 mb-1">Output Layer</div>
                    <div className="text-slate-900">Applications</div>
                  </div>
                </div>
                <div className="text-center text-sm text-slate-600">
                  Simplified architecture diagram. Actual implementation varies by use case.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Features</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {tech.features.map((feature: string) => (
              <div
                key={feature}
                className="bg-white rounded-lg p-5 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Implementation Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {tech.implementation.map((phase: any, idx: number) => (
              <div
                key={phase.step}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 flex gap-6"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Security & Compliance</h2>
              <p className="text-lg text-slate-600">
                All implementations include enterprise-grade security controls, 
                comprehensive audit logging, and support for compliance frameworks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'End-to-end encryption',
                'Role-based access control',
                'Audit logging',
                'Data residency options',
                'Compliance reporting',
                'Regular security updates',
              ].map((item) => (
                <div key={item} className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Related Solutions</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {tech.relatedSolutions.map((solutionSlug: string) => (
              <Link
                key={solutionSlug}
                to={`/solutions/${solutionSlug}`}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-emerald-300 transition-colors group"
              >
                <div className="text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {solutionSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </div>
                <div className="flex items-center gap-2 text-emerald-600 text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Ready to explore {tech.title}?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Talk to our solutions architects about how {tech.title} can address your specific requirements.
          </p>
          <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Talk to a Solutions Architect
          </button>
        </div>
      </section>
    </div>
  );
}
