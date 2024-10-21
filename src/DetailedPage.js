import React from 'react';

function DetailedPage({ title, description }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default DetailedPage;
