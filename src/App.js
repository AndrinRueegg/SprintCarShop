import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import DetailedPage from './DetailedPage';
import chrionImage from './chrion.png';



function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  return (
    <div className="App">
      <Navbar />
      {!selectedCard ? (
        <div className="homepage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <h2>Homepage</h2>
          <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <Card title="Car 1" image={chrionImage} onClick={() => handleCardClick('Car 1')} />
            <Card title="Car 2" onClick={() => handleCardClick('Car 2')} />
            <Card title="Car 3" onClick={() => handleCardClick('Car 3')} />
            <Card title="Car 4" onClick={() => handleCardClick('Car 4')} />
            <Card title="Car 5" onClick={() => handleCardClick('Car 5')} />
            <Card title="Car 6" onClick={() => handleCardClick('Car 6')} />
          </div>
        </div>
      ) : (
        <DetailedPage title={selectedCard} description={`Detailed information about ${selectedCard}`} />
      )}
    </div>
  );
}

export default App;
