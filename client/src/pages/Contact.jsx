import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Section background="var(--bg-hero)" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ color: 'var(--text-muted)' }}>Get in touch with our team to discuss your enterprise needs.</p>
            </Section>
            <Section background="var(--bg-section)">
                <ContactForm defaultType="Contact" />
            </Section>
        </div>
    );
};

export default Contact;
