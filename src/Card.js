import React from 'react';

function Card({ title, image, onClick }) {
    return (
        <div onClick={onClick} style={{ border: '2px solid black', width: '100%', borderRadius: '8%', padding: '5%', textAlign: 'center', cursor: 'pointer', margin: '20px 0', position: 'relative', overflow: 'hidden' }}>
            {image && <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />}
            <h3 style={{ fontSize: '3em', position: 'relative', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px', borderRadius: '8%' }}>{title}</h3>
        </div>
    );
}

export default Card;