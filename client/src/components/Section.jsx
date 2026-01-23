import React from 'react';

const Section = ({
    children,
    background = 'var(--bg-section)',
    className = '',
    id = ''
}) => {
    return (
        <section
            id={id}
            className={`section ${className}`}
            style={{ backgroundColor: background }}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
