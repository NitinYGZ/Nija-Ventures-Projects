import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Insights', path: '/insights' },
        { name: 'Contact', path: '/contact' },
    ];

    const styles = {
        nav: {
            backgroundColor: 'var(--bg-section)',
            borderBottom: '1px solid var(--border)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem 0',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        logo: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--text-main)',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1',
        },
        logoSubtitle: {
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginTop: '2px',
        },
        links: {
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            '@media (max-width: 768px)': {
                display: 'none', // Simple mobile hide for MVP
            }
        },
        linkInfo: {
            color: 'var(--text-body)',
            fontWeight: '500',
            fontSize: '0.9rem',
        },
        activeLink: {
            color: 'var(--primary)',
        },
        actions: {
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
        }
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <Link to="/" style={styles.logo}>
                    NIJA WORLD
                </Link>

                {/* Desktop Links (Hidden on mobile via CSS for MVP or we'd use media queries in CSS file) */}
                <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                style={{
                                    ...styles.linkInfo,
                                    ...(location.pathname.startsWith(link.path) ? styles.activeLink : {})
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div style={styles.actions}>
                    <Button to="/request-demo" variant="primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                        Request a Demo
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
