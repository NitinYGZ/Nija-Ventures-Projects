import React, { useState } from 'react';
import Button from './Button';

const ContactForm = ({ defaultType = 'Contact', title = 'Get in Touch' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        type: defaultType
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', msg: 'Thank you! We will be in touch shortly.' });
                setFormData({ name: '', email: '', company: '', message: '', type: defaultType });
            } else {
                setStatus({ type: 'error', msg: data.error || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Failed to connect to the server.' });
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        form: {
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-main)',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid var(--border)'
        },
        group: {
            marginBottom: '1.5rem',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
        },
        input: {
            width: '100%',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid var(--border)',
            fontFamily: 'inherit',
            fontSize: '1rem',
        },
        textarea: {
            width: '100%',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid var(--border)',
            fontFamily: 'inherit',
            fontSize: '1rem',
            minHeight: '120px',
            resize: 'vertical',
        },
        alert: {
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1.5rem',
            backgroundColor: status.type === 'success' ? '#D1FAE5' : '#FEE2E2',
            color: status.type === 'success' ? '#065F46' : '#991B1B',
            border: `1px solid ${status.type === 'success' ? '#34D399' : '#F87171'}`,
        }
    };

    return (
        <div style={styles.form}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>{title}</h2>

            {status.msg && <div style={styles.alert}>{status.msg}</div>}

            <form onSubmit={handleSubmit}>
                <div style={styles.group}>
                    <label style={styles.label}>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        style={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.group}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        style={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.group}>
                    <label style={styles.label}>Company</label>
                    <input
                        type="text"
                        name="company"
                        required
                        style={styles.input}
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.group}>
                    <label style={styles.label}>Inquiry Type</label>
                    <select
                        name="type"
                        style={styles.input}
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="Demo">Request a Demo</option>
                        <option value="Solutions Architect">Talk to Solution Architect</option>
                        <option value="Overview">Download Overview</option>
                        <option value="Security Brief">Request Security Brief</option>
                        <option value="Contact">General Contact</option>
                    </select>
                </div>
                <div style={styles.group}>
                    <label style={styles.label}>Message</label>
                    <textarea
                        name="message"
                        style={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    style={{ width: '100%', border: 'none' }}
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Submit Request'}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
