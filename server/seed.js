const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const CaseStudy = require('./models/CaseStudy');
const Solution = require('./models/Solution');
const Technology = require('./models/Technology');
const Insight = require('./models/Insight');
const Media = require('./models/Media');

dotenv.config({ path: path.join(__dirname, '../.env') });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nijaworld')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const caseStudies = [
    {
        icon: 'Package',
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
        icon: 'Building2',
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
        icon: 'Heart',
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
        icon: 'ShoppingBag',
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
        icon: 'TrendingUp',
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

const solutions = [
    {
        slug: 'tokenisation',
        title: 'Tokenisation',
        icon: 'Coins',
        description: 'Issue and manage compliant digital assets, credentials, and entitlements with full audit trails and regulatory compliance.',
        benefits: [
            'Compliant asset issuance',
            'Automated lifecycle management',
            'Real-time settlement',
        ],
        bullets: ['Real-world asset tokenisation', 'Credential issuance', 'Regulatory compliance'],
        headline: 'Tokenisation for compliant digital asset workflows',
        subtitle: 'Deploy secure, regulatory-compliant infrastructure for issuing, managing, and transferring digital representations of real-world assets, credentials, and entitlements.',
        primaryCTA: 'Request a Demo',
        outcomes: [
            { title: 'Liquidity', description: 'Enable fractional ownership and secondary markets' },
            { title: 'Efficiency', description: 'Automate lifecycle management and settlements' },
            { title: 'Compliance', description: 'Built-in regulatory controls and audit trails' },
        ],
        useCases: [
            'Real-world asset tokenisation (real estate, commodities, securities)',
            'Digital credential issuance (certificates, licenses, memberships)',
            'Entitlement management (access rights, voting rights)',
            'Carbon credit and ESG certificate tokenisation',
        ],
        features: [
            'Multi-chain support (public and private blockchains)',
            'Fungible and non-fungible token standards',
            'Smart contract templates for common asset types',
            'Integrated KYC/AML compliance workflows',
            'Transfer restrictions and whitelist management',
            'Lifecycle management (issuance, transfer, redemption, burn)',
        ],
        implementation: [
            { step: 'Asset & Regulatory Analysis', description: 'Define token structure, legal framework, and compliance requirements.' },
            { step: 'Smart Contract Development', description: 'Design and audit token contracts with required controls and restrictions.' },
            { step: 'Platform Integration', description: 'Build issuance, custody, and transfer interfaces with existing systems.' },
            { step: 'Testing & Compliance', description: 'Conduct security audits, compliance testing, and UAT with stakeholders.' },
            { step: 'Launch & Operations', description: 'Deploy to production, enable monitoring, provide ongoing support and upgrades.' },
        ],
    },
    {
        slug: 'supply-chain-solution',
        title: 'Supply Chain Traceability',
        icon: 'Package',
        description: 'Track products and materials across complex supply chains with verifiable provenance and comprehensive ESG reporting.',
        benefits: [
            'End-to-end visibility',
            'Provenance verification',
            'ESG compliance',
        ],
        bullets: ['End-to-end visibility', 'Provenance verification', 'ESG reporting'],
        headline: 'Supply chain traceability for transparent, verifiable operations',
        subtitle: 'Track products, materials, and certifications across complex multi-tier supply chains with immutable provenance records and real-time visibility.',
        primaryCTA: 'Request a Demo',
        outcomes: [
            { title: 'Visibility', description: 'Real-time tracking across all supply chain tiers' },
            { title: 'Trust', description: 'Verifiable provenance and authenticity' },
            { title: 'Sustainability', description: 'ESG compliance and carbon footprint tracking' },
        ],
        useCases: [
            'Product authentication and anti-counterfeiting',
            'Sustainability and ESG reporting',
            'Cold chain monitoring and compliance',
            'Supplier certification and audit management',
        ],
        features: [
            'Multi-tier supply chain mapping',
            'IoT sensor integration for real-time data capture',
            'QR code and NFC tagging for product tracking',
            'Certificate of origin and compliance documentation',
            'Automated alerts for anomalies and exceptions',
            'Customer-facing provenance verification portals',
        ],
        implementation: [
            { step: 'Supply Chain Mapping', description: 'Map existing supply chain, identify data sources and stakeholder requirements.' },
            { step: 'System Design', description: 'Design blockchain architecture, data schemas, and integration points.' },
            { step: 'Stakeholder Onboarding', description: 'Onboard suppliers, distributors, and partners to the platform.' },
            { step: 'Integration & Testing', description: 'Connect IoT devices, ERP systems, and test end-to-end flows.' },
            { step: 'Rollout & Training', description: 'Launch in phases, train users, establish support processes.' },
        ],
    },
    {
        slug: 'identity-management',
        title: 'Identity Management',
        icon: 'UserCheck',
        description: 'Decentralised identity and access management for secure, user-controlled credentials and privacy-preserving verification.',
        benefits: [
            'Self-sovereign identity',
            'Privacy by design',
            'Reusable credentials',
        ],
        bullets: ['Self-sovereign identity', 'Access control', 'Privacy by design'],
        headline: 'Decentralised identity for secure, privacy-preserving access',
        subtitle: 'Deploy self-sovereign identity solutions that give users control over their credentials while enabling secure, selective disclosure for verification.',
        primaryCTA: 'Talk to an Expert',
        outcomes: [
            { title: 'User Control', description: 'Users own and manage their identity credentials' },
            { title: 'Privacy', description: 'Selective disclosure and zero-knowledge proofs' },
            { title: 'Efficiency', description: 'Reusable credentials reduce onboarding friction' },
        ],
        useCases: [
            'Customer onboarding and KYC',
            'Employee credential management',
            'Educational certificate verification',
            'Healthcare credential and consent management',
        ],
        features: [
            'W3C DID and Verifiable Credential standards',
            'Mobile wallet for credential storage',
            'Selective disclosure and zero-knowledge proofs',
            'Revocation and lifecycle management',
            'Integration with existing identity providers',
            'Compliance with data protection regulations',
        ],
        implementation: [
            { step: 'Use Case Definition', description: 'Define credential types, verification requirements, and user journeys.' },
            { step: 'Infrastructure Setup', description: 'Deploy DID infrastructure, credential issuance, and verification services.' },
            { step: 'Wallet Deployment', description: 'Configure mobile/web wallets and integrate with relying party systems.' },
            { step: 'Credential Issuance', description: 'Onboard credential issuers and establish verification workflows.' },
            { step: 'Operations', description: 'Monitor usage, manage revocations, provide user support.' },
        ],
    },
    {
        slug: 'loyalty-solution',
        title: 'Loyalty Solutions',
        icon: 'Award',
        description: 'Modern loyalty and rewards programs with flexible token economics, multi-partner integration, and enhanced customer engagement.',
        benefits: [
            'Multi-partner programs',
            'Flexible rewards',
            'Customer insights',
        ],
        bullets: ['Multi-partner programs', 'Token rewards', 'Customer engagement'],
        headline: 'Modern loyalty programs powered by blockchain',
        subtitle: 'Build flexible, multi-partner loyalty programs with tokenised rewards, seamless redemption, and enhanced customer engagement.',
        primaryCTA: 'Request a Demo',
        outcomes: [
            { title: 'Engagement', description: 'Increase customer participation and retention' },
            { title: 'Flexibility', description: 'Multi-partner redemption and dynamic rewards' },
            { title: 'Insights', description: 'Real-time data on customer behavior and preferences' },
        ],
        useCases: [
            'Retail and e-commerce loyalty programs',
            'Multi-brand coalition programs',
            'Hospitality and travel rewards',
            'Gaming and entertainment loyalty',
        ],
        features: [
            'Tokenised loyalty points with flexible economics',
            'Multi-partner coalition infrastructure',
            'Instant issuance and redemption',
            'Tiered membership and benefits management',
            'Integration with POS and e-commerce platforms',
            'Customer analytics and segmentation',
        ],
        implementation: [
            { step: 'Program Design', description: 'Define token economics, earning rules, redemption options, and partner integrations.' },
            { step: 'Platform Development', description: 'Build loyalty platform, smart contracts, and customer-facing applications.' },
            { step: 'Partner Onboarding', description: 'Integrate partners, configure redemption catalogs, establish settlement processes.' },
            { step: 'Launch', description: 'Migrate existing members, launch marketing campaigns, enable customer support.' },
            { step: 'Optimisation', description: 'Analyse engagement data, refine rewards, expand partner network.' },
        ],
    },
    {
        slug: 'digital-assets-investment-advisory',
        title: 'Digital Assets Advisory',
        icon: 'TrendingUp',
        description: 'Strategic guidance for digital asset strategy, tokenisation design, regulatory navigation, and market opportunity assessment.',
        benefits: [
            'Strategy consulting',
            'Regulatory guidance',
            'Market analysis',
        ],
        bullets: ['Strategy consulting', 'Regulatory guidance', 'Market analysis'],
        headline: 'Strategic guidance for digital asset transformation',
        subtitle: 'Expert advisory services for digital asset strategy, tokenisation design, regulatory navigation, and market opportunity assessment.',
        primaryCTA: 'Schedule a Consultation',
        outcomes: [
            { title: 'Clarity', description: 'Clear roadmap for digital asset initiatives' },
            { title: 'Compliance', description: 'Navigate regulatory requirements confidently' },
            { title: 'Value', description: 'Identify and capture market opportunities' },
        ],
        useCases: [
            'Digital asset strategy development',
            'Tokenisation feasibility and design',
            'Regulatory compliance assessment',
            'Market entry and competitive analysis',
        ],
        features: [
            'Strategic workshops and roadmap development',
            'Regulatory landscape analysis',
            'Token economics design and modeling',
            'Technology stack assessment',
            'Partnership and ecosystem development',
            'Implementation partner selection',
        ],
        implementation: [
            { step: 'Discovery & Assessment', description: 'Understand business objectives, constraints, and digital asset opportunities.' },
            { step: 'Strategy Development', description: 'Develop digital asset strategy, token design, and regulatory approach.' },
            { step: 'Roadmap & Business Case', description: 'Create implementation roadmap with timelines, costs, and expected outcomes.' },
            { step: 'Partner Selection', description: 'Help select technology partners and service providers.' },
            { step: 'Implementation Support', description: 'Provide ongoing guidance during implementation phase.' },
        ],
    },
];

const technologies = [
    {
        slug: 'blockchain',
        title: 'Blockchain',
        icon: 'Network',
        description: 'Distributed ledger infrastructure for secure, transparent, and tamper-proof record-keeping across organisational boundaries.',
        capabilities: [
            'Public and private blockchain deployment',
            'Smart contract development and auditing',
            'Tokenisation infrastructure',
        ],
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
    {
        slug: 'ai-digitisation',
        title: 'AI Digitisation',
        icon: 'FileText',
        description: 'Automated extraction and structuring of information from documents, forms, and unstructured data sources.',
        capabilities: [
            'Document processing and OCR',
            'Data extraction and validation',
            'Legacy system digitisation',
        ],
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
    {
        slug: 'ai-automation',
        title: 'AI Automation',
        icon: 'Cog',
        description: 'Intelligent process automation for repetitive workflows, decision support, and operational efficiency.',
        capabilities: [
            'Robotic process automation (RPA)',
            'Workflow orchestration',
            'Decision automation',
        ],
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
    {
        slug: 'ai-infrastructure',
        title: 'AI Infrastructure',
        icon: 'Cpu',
        description: 'Production-grade platforms for deploying, monitoring, and scaling machine learning models securely.',
        capabilities: [
            'Model deployment and serving',
            'MLOps and monitoring',
            'Scalable compute infrastructure',
        ],
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
    {
        slug: 'ai-cybersecurity',
        title: 'AI Cybersecurity',
        icon: 'Shield',
        description: 'Advanced threat detection, anomaly analysis, and security operations powered by machine learning.',
        capabilities: [
            'Threat detection and analysis',
            'Behavioral anomaly detection',
            'Security operations automation',
        ],
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
];

const insights = [
    { title: 'Tokenisation frameworks for regulated assets', date: 'Jan 2026', category: 'Blockchain' },
    { title: 'AI automation in enterprise compliance workflows', date: 'Dec 2025', category: 'AI' },
    { title: 'Decentralised identity: enterprise adoption trends', date: 'Nov 2025', category: 'Identity' },
];

const media = [
    { title: 'Nija launches enterprise tokenisation platform', outlet: 'TechCrunch', date: 'Jan 2026' },
    { title: 'How blockchain is transforming supply chain operations', outlet: 'Forbes', date: 'Dec 2025' },
];

const seedDB = async () => {
    try {
        await CaseStudy.deleteMany({});
        await CaseStudy.insertMany(caseStudies);
        console.log('Case Studies Seeded');

        await Solution.deleteMany({});
        await Solution.insertMany(solutions);
        console.log('Solutions Seeded');

        await Technology.deleteMany({});
        await Technology.insertMany(technologies);
        console.log('Technologies Seeded');

        await Insight.deleteMany({});
        await Insight.insertMany(insights);
        console.log('Insights Seeded');

        await Media.deleteMany({});
        await Media.insertMany(media);
        console.log('Media Seeded');

        console.log('Seeding Complete');
        process.exit(0);
    } catch (err) {
        console.error('Seeding Error:', err);
        process.exit(1);
    }
};

seedDB();
