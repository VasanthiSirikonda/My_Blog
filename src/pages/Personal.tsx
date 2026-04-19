import { useState } from 'react';
import './Personal.css';

function Personal() {
  const [layoutStyle, setLayoutStyle] = useState('masonry');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const photos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
      caption: 'Adventure Awaits',
      height: 'tall'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop',
      caption: 'Pure Happiness',
      height: 'medium'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      caption: 'Golden Hour',
      height: 'tall'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      caption: 'Sunset Vibes',
      height: 'medium'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=500&fit=crop',
      caption: 'City Lights',
      height: 'tall'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1506755855726-21b002a7297e?w=500&h=500&fit=crop',
      caption: 'Mountain Life',
      height: 'medium'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=500&h=500&fit=crop',
      caption: 'Beach Days',
      height: 'tall'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
      caption: 'New Beginnings',
      height: 'medium'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1508700115892-71e6ef9b1b78?w=500&h=500&fit=crop',
      caption: 'Timeless Moments',
      height: 'tall'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1514306688772-7e2e01512663?w=500&h=500&fit=crop',
      caption: 'Sweet Memories',
      height: 'medium'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop',
      caption: 'Night Dreams',
      height: 'tall'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop',
      caption: 'Living the Dream',
      height: 'medium'
    }
  ];

  const videos = [
    { id: 1, title: 'Adventure Vlog', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Travel Memories', url: 'https://www.youtube.com/embed/9bZkp7q19f0' },
    { id: 3, title: 'Life Updates', url: 'https://www.youtube.com/embed/kJQP7kiw9Fk' }
  ];

  const handleCarouselNext = () => {
    setCarouselIndex((prev) => (prev + 1) % photos.length);
  };

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };



  return (
    <div className="personal">
      <section className="personal-hero">
        <div className="hero-content">
          <div className="avatar-large">📸</div>
          <h1>My Photo Album</h1>
          <p className="subtitle">A collection of my favorite moments, memories, and adventures</p>
        </div>
      </section>

      <section className="photo-gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2>Photo Gallery</h2>
            <div className="layout-switcher">
              <button
                className={`layout-btn ${layoutStyle === 'masonry' ? 'active' : ''}`}
                onClick={() => setLayoutStyle('masonry')}
                title="Instagram Feed"
              >
                📱 Instagram Feed
              </button>
              <button
                className={`layout-btn ${layoutStyle === 'polaroid' ? 'active' : ''}`}
                onClick={() => setLayoutStyle('polaroid')}
                title="3D Flip Cards"
              >
                🔄 3D Flip
              </button>
              <button
                className={`layout-btn ${layoutStyle === 'grid' ? 'active' : ''}`}
                onClick={() => setLayoutStyle('grid')}
                title="Glass Morphism"
              >
                ✨ Glass Cards
              </button>
            </div>
          </div>

          {/* Instagram Feed Style */}
          {layoutStyle === 'masonry' && (
            <div className="instagram-feed">
              {photos.map((photo, index) => (
                <div 
                  key={photo.id} 
                  className={`instagram-card instagram-card-${(index % 5) + 1}`}
                >
                  <img src={photo.image} alt={photo.caption} className="instagram-img" />
                  <div className="instagram-caption">
                    <p>{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3D Flip Cards */}
          {layoutStyle === 'polaroid' && (
            <div className="flip-cards-grid">
              {photos.map((photo) => (
                <div key={photo.id} className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={photo.image} alt={photo.caption} />
                    </div>
                    <div className="flip-card-back">
                      <h3>{photo.caption}</h3>
                      <p>Click to view fullscreen</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Glass Morphism Cards */}
          {layoutStyle === 'grid' && (
            <div className="glass-cards-grid">
              {photos.map((photo, index) => (
                <div 
                  key={photo.id} 
                  className="glass-card"
                >
                  <div className="glass-image-wrapper">
                    <img src={photo.image} alt={photo.caption} />
                    <div className="glass-overlay"></div>
                  </div>
                  <div className="glass-content">
                    <h3>{photo.caption}</h3>
                    <div className="glass-badge">{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CAROUSEL/SLIDER SECTION */}
      <section className="carousel-section">
        <div className="gallery-container">
          <h2>🎠 Image Carousel</h2>
          <div className="carousel-wrapper">
            <button className="carousel-btn carousel-prev" onClick={handleCarouselPrev}>❮</button>
            <div className="carousel-main">
              <img src={photos[carouselIndex].image} alt={photos[carouselIndex].caption} className="carousel-image" />
              <div className="carousel-info">
                <h3>{photos[carouselIndex].caption}</h3>
                <p>{carouselIndex + 1} of {photos.length}</p>
              </div>
            </div>
            <button className="carousel-btn carousel-next" onClick={handleCarouselNext}>❯</button>
          </div>
          <div className="carousel-thumbnails">
            {photos.map((photo, index) => (
              <img
                key={photo.id}
                src={photo.image}
                alt="thumbnail"
                className={`carousel-thumb ${index === carouselIndex ? 'active' : ''}`}
                onClick={() => setCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="video-gallery-section">
        <div className="gallery-container">
          <h2>🎥 Video Gallery</h2>
          <div className="video-grid">
            {videos.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                  ></iframe>
                </div>
                <h3>{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE GALLERY */}
      <section className="timeline-section">
        <div className="gallery-container">
          <h2>📅 Timeline View</h2>
          <div className="timeline">
            {photos.map((photo, index) => (
              <div key={photo.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-image-wrapper">
                    <img src={photo.image} alt={photo.caption} className="timeline-image" />
                  </div>
                  <h3>{photo.caption}</h3>
                  <p>Memory #{index + 1}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLUR REVEAL GALLERY */}
      <section className="blur-reveal-section">
        <div className="gallery-container">
          <h2>🎨 Blur Reveal Gallery</h2>
          <div className="blur-gallery">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className="blur-card"
              >
                <img src={photo.image} alt={photo.caption} className="blur-img" />
                <div className="blur-text">
                  <h3>{photo.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Personal;
