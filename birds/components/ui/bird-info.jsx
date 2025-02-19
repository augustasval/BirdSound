import { useState, useEffect } from 'react';

export function BirdInfo({ birdName }) {
  const [birdImage, setBirdImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBirdImage = async () => {
      try {
        const response = await fetch(`https://nuthatchapi.com/api/birds?name=${birdName}`, {
          headers: {
            'api-key': '337c4d23-482c-44e6-b95b-8299d0436201'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch bird image');
        }
        const data = await response.json();
        const bird = data.entities.find(b => b.name.toLowerCase() === birdName.toLowerCase());
        if (bird && bird.images.length > 0) {
          setBirdImage(bird.images[0]);
        } else {
          setError('Bird image not found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (birdName) {
      fetchBirdImage();
    }
  }, [birdName]);

  return (
    <div className="bird-info">
      {error && <p className="error">{error}</p>}
      {birdImage ? (
        <img src={birdImage} alt={birdName} className="bird-image" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}