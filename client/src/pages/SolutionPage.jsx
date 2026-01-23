import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const SolutionPage = ({ data }) => {
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            {/* Hero */}
            <Section background="var(--bg-hero)" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div style={{ maxWidth: '900px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{data.hero.headline}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-body)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: 1.6 }}>
                        {data.hero.subheadline}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button to="/request-demo">{data.hero.ctaPrimary || 'Request a Demo'}</Button>
                        <Button to="/overview" variant="secondary">{data.hero.ctaSecondary || 'Download Overview'}</Button>
                    </div>
                </div>
            </Section>

            {/* Outcomes & Use Cases */}
            <Section background="var(--bg-section)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Outcomes Column */}
                    <div>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Key Outcomes</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.outcomes.map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>✓</span>
                                    <span style={{ fontSize: '1.05rem' }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Use Cases Column */}
                    <div>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Typical Use Cases</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.useCases.map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>→</span>
                                    <span style={{ fontSize: '1.05rem' }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Features (Grid) */}
            <Section background="var(--bg-main)">
                <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Enterprise Capabilities</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {data.features.map((feature, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border)'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{feature}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                {/* Placeholder description for feature */}
                                Included in the core platform deployment.
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Implementation & Security */}
            <Section background="var(--bg-section)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h3>Implementation Approach</h3>
                        <div style={{ marginTop: '1.5rem', paddingLeft: '1rem', borderLeft: '3px solid var(--primary)' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {data.implementation.map((step, i) => (
                                    <li key={i} style={{ marginBottom: '0.75rem', fontWeight: '500' }}>{i + 1}. {step}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {data.security && (
                        <div>
                            <h3>Security & Governance</h3>
                            <div style={{ marginTop: '1.5rem', backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: '8px' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {data.security.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                            <span style={{ color: 'var(--text-muted)' }}>🛡️</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </Section>

            {/* Bottom CTA */}
            <Section background="var(--bg-hero)" style={{ textAlign: 'center', padding: '5rem 0' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Ready to deploy?</h2>
                <Button to={data.bottomCtaLink || '/contact'}>{data.bottomCtaText || 'Talk to an Expert'}</Button>
            </Section>
        </div>
    );
};

export default SolutionPage;
