import React from 'react';

function Card({ title, onClick }) {
    return (
        <div onClick={onClick} style={{ border: '2px solid black', width: '100%', borderRadius: '8%', padding: '5%', textAlign: 'center', cursor: 'pointer', margin: '20px 0' }}>
            <h3 style={{ fontSize: '3em' }}>{title}</h3>
        </div>
    );
}

export default Card;
