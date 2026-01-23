import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const TechnologyCard = ({ title, description, benefits, link }) => (
    <div style={{
        backgroundColor: 'var(--bg-main)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }}>
        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ marginBottom: '1.5rem', flex: 1 }}>{description}</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            {benefits.map((b, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--secondary)' }}>•</span> {b}
                </li>
            ))}
        </ul>
        <Button to={link} variant="secondary">Explore</Button>
    </div>
);

const Technologies = () => {
    return (
        <div>
            <Section background="var(--bg-hero)" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Technology built for enterprise transformation</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px' }}>
                    A capability-led view of how Nija deploys AI and Blockchain in real systems.
                </p>
            </Section>

            <Section background="var(--bg-section)">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    <TechnologyCard
                        title="Blockchain"
                        description="Trusted infrastructure for immutable records, tokenised assets, and automated settlement."
                        benefits={[
                            "Smart Contract Auditing",
                            "Private & Hybrid Chain Deployment",
                            "Token Standards (ERC-20, 721, 1155)"
                        ]}
                        link="/technologies/blockchain"
                    />
                    <TechnologyCard
                        title="AI for Digitisation"
                        description="Transform unstructured data into structured assets using advanced OCR and NLP models."
                        benefits={[
                            "Document Processing",
                            "Legacy System Migration",
                            "Knowledge Graph Generation"
                        ]}
                        link="/technologies/ai-digitisation"
                    />
                    <TechnologyCard
                        title="AI for Automation"
                        description="Agentic workflows that reduce manual overhead and enforce business policies automatically."
                        benefits={[
                            "Policy-Driven Agents",
                            "Workflow Orchestration",
                            "Human-in-the-loop Systems"
                        ]}
                        link="/technologies/ai-automation"
                    />
                    <TechnologyCard
                        title="AI for Infrastructure"
                        description="Predictive maintenance and observability for complex distributed systems."
                        benefits={[
                            "Anomaly Detection",
                            "Predictive Scaling",
                            "Automated RCA"
                        ]}
                        link="/technologies/ai-infrastructure"
                    />
                    <TechnologyCard
                        title="AI for Cybersecurity"
                        description="Proactive threat detection and response using generative defense models."
                        benefits={[
                            "Threat Intelligence",
                            "Automated Incidient Response",
                            "Identity Pattern Analysis"
                        ]}
                        link="/technologies/ai-cybersecurity"
                    />
                </div>
            </Section>
        </div>
    );
};

export default Technologies;
