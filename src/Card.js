import React from 'react';

function Card({ title, onClick }) {
    return (
        <div onClick={onClick} style={{ border: '2px solid black', borderRadius: '8px', padding: '32px', textAlign: 'center', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '24px' }}>{title}</h3>
        </div>
    );
}

export default Card;
