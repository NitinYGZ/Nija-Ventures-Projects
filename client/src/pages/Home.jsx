import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    // Styles for page specific elements
    const styles = {
        hero: {
            paddingTop: '6rem',
            paddingBottom: '6rem',
            backgroundColor: 'var(--bg-hero)',
        },
        heroContent: {
            maxWidth: '800px',
        },
        headline: {
            fontSize: '3rem',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: 'var(--text-main)',
        },
        subheadline: {
            fontSize: '1.25rem',
            color: 'var(--text-body)',
            marginBottom: '2rem',
            lineHeight: '1.6',
        },
        buttonGroup: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '4rem',
        },
        trustStrip: {
            display: 'flex',
            gap: '2rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
        },
        // Two Pillars
        pillarsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginTop: '3rem',
        },
        pillarCard: {
            padding: '2rem',
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
        },
        // Solutions
        solutionsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
        },
        solutionCard: {
            padding: '2rem',
            backgroundColor: 'var(--bg-main)', // Using off-white for contrast against white section
            borderRadius: '8px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        // Delivery
        deliverySteps: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            counterReset: 'step-counter',
        },
        step: {
            position: 'relative',
        },
        stepNumber: {
            fontSize: '3rem',
            fontWeight: '800',
            color: 'var(--primary)',
            opacity: '0.2',
            marginBottom: '0.5rem',
        },
        // Security
        securityGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
        }
    };

    return (
        <div>
            {/* 1. Hero Section */}
            <Section background="var(--bg-hero)" className="hero">
                <div style={styles.heroContent}>
                    <h1 style={styles.headline}>Enterprise AI + Blockchain Solutions, Delivered Securely.</h1>
                    <p style={styles.subheadline}>
                        Nija helps organisations deploy secure, production-grade solutions that improve traceability, reduce operational friction, and enable compliant digital transformation.
                    </p>
                    <div style={styles.buttonGroup}>
                        <Button to="/request-demo">Request a Demo</Button>
                        <Button to="/case-studies" variant="secondary">View Case Studies</Button>
                    </div>
                    <div style={styles.trustStrip}>
                        <span>Security-first delivery</span>
                        <span>Audit-ready architecture</span>
                        <span>Enterprise integrations</span>
                        <span>Measurable outcomes</span>
                    </div>
                </div>
            </Section>

            {/* 2. Two Pillars Section */}
            <Section background="var(--bg-section)">
                <h2>Built on two enterprise pillars</h2>
                <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                    A unified approach combining practical AI with trusted blockchain infrastructure.
                </p>
                <div style={styles.pillarsGrid}>
                    <div style={styles.pillarCard}>
                        <h3 style={{ color: 'var(--primary)' }}>Artificial Intelligence</h3>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem', lineHeight: '1.8' }}>
                            <li><strong>Digitisation:</strong> Convert legacy processes into structured systems.</li>
                            <li><strong>Automation:</strong> Reduce manual work with policy-driven workflows.</li>
                            <li><strong>Infrastructure:</strong> Observability, reliability, and scale.</li>
                            <li><strong>Cybersecurity:</strong> Threat detection and prevention.</li>
                        </ul>
                    </div>
                    <div style={styles.pillarCard}>
                        <h3 style={{ color: 'var(--primary)' }}>Blockchain</h3>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem', lineHeight: '1.8' }}>
                            <li><strong>Tokenisation:</strong> Real-world value with governance controls.</li>
                            <li><strong>Provenance:</strong> Immutable traceability for high-integrity workflows.</li>
                            <li><strong>Smart Contracts:</strong> Automated, verifiable business logic.</li>
                            <li><strong>Identity:</strong> Secure access and verifiable credentials.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <Button to="/technologies" variant="secondary">Explore Technologies</Button>
                </div>
            </Section>

            {/* 3. Solutions Section */}
            <Section background="var(--bg-main)"> {/* Alternating background */}
                <h2>Solutions designed for enterprise deployment</h2>
                <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                    Practical implementations that integrate with existing systems and governance models.
                </p>

                <div style={styles.solutionsGrid}>
                    {[
                        { title: 'Tokenisation', desc: 'Launch compliant tokenised assets and workflows.', link: '/solutions/tokenisation' },
                        { title: 'Supply Chain', desc: 'Improve visibility and reduce disputes with traceability.', link: '/solutions/supply-chain' },
                        { title: 'Identity', desc: 'Secure identity and access with verifiable credentials.', link: '/solutions/identity' },
                        { title: 'Loyalty', desc: 'Build modern loyalty programs with transparent rewards.', link: '/solutions/loyalty' },
                        { title: 'Advisory', desc: 'Institutional-grade advisory for digital asset exposure.', link: '/solutions/advisory' },
                    ].map((sol, i) => (
                        <div key={i} style={styles.solutionCard}>
                            <h3>{sol.title}</h3>
                            <p style={{ flex: 1 }}>{sol.desc}</p>
                            <Button to={sol.link} variant="text" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                                Explore {sol.title} →
                            </Button>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Button to="/solutions" variant="secondary">View All Solutions</Button>
                </div>
            </Section>

            {/* 4. How We Deliver */}
            <Section background="var(--bg-section)">
                <h2>Delivery model built for reliability</h2>
                <div style={styles.deliverySteps}>
                    {[
                        { step: '01', title: 'Discovery', text: 'Requirements, risk assessment, target outcomes' },
                        { step: '02', title: 'Design', text: 'Architecture, security model, integration plan' },
                        { step: '03', title: 'Build & Deploy', text: 'Production-grade implementation with testing' },
                        { step: '04', title: 'Operate', text: 'Monitoring, updates, and continuous optimisation' },
                    ].map((item) => (
                        <div key={item.step} style={styles.step}>
                            <div style={styles.stepNumber}>{item.step}</div>
                            <h4>{item.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <Button to="/contact" variant="secondary">Talk to a Solutions Architect</Button>
                </div>
            </Section>

            {/* 5. Featured Case Studies */}
            <Section background="var(--bg-main)">
                <h2>Proven delivery in real environments</h2>
                <div style={styles.solutionsGrid}>
                    {/* Mocks based on brief descriptions */}
                    <div style={styles.solutionCard}>
                        <h4>Logistics & Supply Chain</h4>
                        <p>Implemented end-to-end traceability for high-value goods.</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Reduced disputes by 40%</p>
                        <Button to="/case-studies" variant="text">Read Case Study →</Button>
                    </div>
                    <div style={styles.solutionCard}>
                        <h4>Fintech & Identity</h4>
                        <p>Deployed verifiable credential system for partner onboarding.</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Onboarding time -60%</p>
                        <Button to="/case-studies" variant="text">Read Case Study →</Button>
                    </div>
                    <div style={styles.solutionCard}>
                        <h4>Retail Loyalty</h4>
                        <p>Tokenised loyalty program for cross-brand rewards.</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>+25% Customer Engagement</p>
                        <Button to="/case-studies" variant="text">Read Case Study →</Button>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Button to="/case-studies" variant="secondary">Browse Case Studies</Button>
                </div>
            </Section>

            {/* 6. Security */}
            <Section background="var(--bg-section)">
                <h2>Security-first by design</h2>
                <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>We design for auditability, access control, and operational resilience from day one.</p>
                <div style={styles.securityGrid}>
                    <div>
                        <h4>Data Protection</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Encryption in transit/at rest, secrets management, least privilege access.</p>
                    </div>
                    <div>
                        <h4>Governance & Audit</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Activity logs, change tracking, policy enforcement, and reporting readiness.</p>
                    </div>
                    <div>
                        <h4>Operational Reliability</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Monitoring, alerting, incident response playbooks, and uptime practices.</p>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <Button to="/security" variant="secondary">Request a Security Brief</Button>
                </div>
            </Section>

            {/* 7. Insights (Placeholder) */}
            <Section background="var(--bg-main)">
                <h2>Research and updates</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Latest Insights</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                                <Link to="/insights/1" style={{ fontWeight: '600', display: 'block' }}>The Future of Enterprise Tokenisation</Link>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Web3 • 5 min read</span>
                            </li>
                            <li style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                                <Link to="/insights/2" style={{ fontWeight: '600', display: 'block' }}>AI Governance Frameworks for 2026</Link>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AI Safety • 7 min read</span>
                            </li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>In the Media</h4>
                        <div style={{ marginBottom: '1rem' }}>
                            <strong>Nija World at Global Tech Summit</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Keynote on Trust Layers in Digital Infrastructure.</p>
                        </div>
                    </div>
                </div>
                <Button to="/insights" variant="secondary">View Insights</Button>
            </Section>

            {/* 8. Final CTA */}
            <Section background="var(--bg-section)" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Discuss your use case with Nija</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Get a tailored walkthrough, architecture approach, and implementation plan.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button to="/request-demo">Request a Demo</Button>
                        <Button to="/contact" variant="secondary">Contact Us</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
