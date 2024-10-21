import React from 'react';

function Card({ title, onClick }) {
  return (
    <div onClick={onClick} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center', cursor: 'pointer' }}>
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
