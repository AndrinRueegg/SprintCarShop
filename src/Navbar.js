import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f8f9fa' }}>
      <h1>HomepageName</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#content1">Content</a>
        <a href="#content2">Content</a>
        <a href="#content3">Content</a>
      </div>
    </nav>
  );
}

export default Navbar;
