import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: 'var(--bg-main)',
            borderTop: '1px solid var(--border)',
            padding: '3rem 0',
            marginTop: 'auto',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
        },
        top: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
        },
        brand: {
            maxWidth: '300px',
        },
        links: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            listStyle: 'none',
        },
        legal: {
            display: 'flex',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginTop: '2rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.top}>
                    <div style={styles.brand}>
                        <h4 style={{ marginBottom: '0.5rem' }}>NIJA VENTURE IMPACTS PVT. LTD.</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Nija World builds secure AI and blockchain solutions for organisations modernising digital operations.
                        </p>
                    </div>

                    <ul style={styles.links}>
                        {['About', 'Technologies', 'Solutions', 'Case Studies', 'Insights', 'Media', 'Partners', 'Contact'].map(item => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={styles.legal}>
                    <span>© {new Date().getFullYear()} Nija Venture Impacts Pvt. Ltd.</span>
                    <Link to="/privacy" style={{ color: 'inherit' }}>Privacy</Link>
                    <Link to="/terms" style={{ color: 'inherit' }}>Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
