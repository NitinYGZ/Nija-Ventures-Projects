import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const RequestDemo = () => {
    return (
        <div>
            <Section background="var(--bg-hero)" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Request a Demo</h1>
                <p style={{ color: 'var(--text-muted)' }}>Experience the power of Nija World's AI and Blockchain solutions.</p>
            </Section>
            <Section background="var(--bg-section)">
                <ContactForm title="Schedule a Walkthrough" defaultType="Demo" />
            </Section>
        </div>
    );
};

export default RequestDemo;
