import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', onClick, className = '' }) => {
    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        fontWeight: '600',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
        fontSize: '0.95rem'
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--primary)',
            color: '#fff',
        },
        secondary: {
            backgroundColor: 'transparent',
            color: 'var(--text-main)',
            border: '1px solid var(--text-main)',
        },
        text: {
            background: 'none',
            color: 'var(--primary)',
            padding: '0',
        }
    };

    const style = { ...baseStyle, ...variants[variant] };

    if (to) {
        return (
            <Link to={to} style={style} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} style={style} className={className}>
            {children}
        </button>
    );
};

export default Button;
