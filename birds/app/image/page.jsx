'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [birds, setBirds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY_HERE' with your actual API key
    fetch('https://api.nuthatch.com/v2/birds?family=Troglodytidae&hasImg=true', {
      headers: {
        'api-key': '337c4d23-482c-44e6-b95b-8299d0436201',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        setBirds(data.entities.slice(0, 5)); // Get first 5 birds
      })
      .catch((error) => {
        setError('There was an error fetching the bird data');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Bird Information</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {birds.length === 0 ? (
          <p>Loading birds...</p>
        ) : (
          birds.map((bird, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{ flex: 1, padding: '10px' }}>
                <h2>{bird.name}</h2>
                <ul style={{ textAlign: 'left' }}>
                  <li>{bird.sciName}</li>
                  <li>Conservation Status: {bird.status}</li>
                </ul>
              </div>
              <div style={{ flex: 1, padding: '10px' }}>
                <img
                  src={bird.images.length ? bird.images[0] : '/noBird.png'}
                  alt={bird.name}
                  width="300"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}