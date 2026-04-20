import { useState } from 'react';
import './Personal.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Personal() {
  const [layoutStyle, setLayoutStyle] = useState('masonry');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const photos = [
    // Friends
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
      caption: 'Adventure Awaits',
      category: 'friends',
      height: 'tall'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop',
      caption: 'Pure Happiness',
      category: 'friends',
      height: 'medium'
    },
    // Family
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      caption: 'Golden Hour',
      category: 'family',
      height: 'tall'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      caption: 'Sunset Vibes',
      category: 'family',
      height: 'medium'
    },
    // Travel
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=500&fit=crop',
      caption: 'City Lights',
      category: 'travel',
      height: 'tall'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1506755855726-21b002a7297e?w=500&h=500&fit=crop',
      caption: 'Mountain Life',
      category: 'travel',
      height: 'medium'
    },
    // Memories
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=500&h=500&fit=crop',
      caption: 'Beach Days',
      category: 'memories',
      height: 'tall'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
      caption: 'New Beginnings',
      category: 'memories',
      height: 'medium'
    },
    // Future
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1508700115892-71e6ef9b1b78?w=500&h=500&fit=crop',
      caption: 'Timeless Moments',
      category: 'future',
      height: 'tall'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1514306688772-7e2e01512663?w=500&h=500&fit=crop',
      caption: 'Sweet Memories',
      category: 'future',
      height: 'medium'
    },
    // Dreams
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop',
      caption: 'Night Dreams',
      category: 'dreams',
      height: 'tall'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop',
      caption: 'Living the Dream',
      category: 'dreams',
      height: 'medium'
    }
  ];

  const locations = [
    {
      id: 'delhi',
      name: 'Delhi, India',
      emoji: '🏛️',
      lat: 28.6139,
      lng: 77.2090,
      photos: [1, 3],
      description: 'Ancient heritage & vibrant culture'
    },
    {
      id: 'mumbai',
      name: 'Mumbai, India',
      emoji: '🏢',
      lat: 19.0760,
      lng: 72.8777,
      photos: [5, 9],
      description: 'City of dreams & Bollywood'
    },
    {
      id: 'goa',
      name: 'Goa, India',
      emoji: '🏖️',
      lat: 15.2993,
      lng: 73.8243,
      photos: [7, 11],
      description: 'Golden beaches & sunsets'
    },
    {
      id: 'jaipur',
      name: 'Jaipur, India',
      emoji: '🏰',
      lat: 26.9124,
      lng: 75.7873,
      photos: [2, 6],
      description: 'Pink City magic'
    },
    {
      id: 'kerala',
      name: 'Kerala, India',
      emoji: '🌴',
      lat: 10.8505,
      lng: 76.2711,
      photos: [4, 10],
      description: 'God\'s own country'
    },
    {
      id: 'agra',
      name: 'Agra, India',
      emoji: '🕌',
      lat: 27.1767,
      lng: 78.0081,
      photos: [8, 12],
      description: 'Taj Mahal & timeless love'
    }
  ];

  const getPhotosForLocation = (locationId: string) => {
    const location = locations.find(l => l.id === locationId);
    if (!location) return [];
    return photos.filter(p => location.photos.includes(p.id));
  };

  const categories = [
    { id: 'all', label: 'All Photos', icon: '📸', color: '#667eea' },
    { id: 'friends', label: 'Friends', icon: '👥', color: '#f093fb' },
    { id: 'family', label: 'Family', icon: '❤️', color: '#fa709a' },
    { id: 'travel', label: 'Travel', icon: '✈️', color: '#30cfd0' },
    { id: 'memories', label: 'Memories', icon: '📝', color: '#a8edea' },
    { id: 'future', label: 'Future', icon: '🚀', color: '#fed6e3' },
    { id: 'dreams', label: 'Dreams', icon: '✨', color: '#a1c4fd' }
  ];

  const getCategoryCount = (catId: string): number => {
    if (catId === 'all') return photos.length;
    return photos.filter(p => p.category === catId).length;
  };

  const getFirstPhotoInCategory = (catId: string) => {
    if (catId === 'all') return photos[0];
    return photos.find(p => p.category === catId);
  };

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

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

          {/* CREATIVE CATEGORY SELECTOR */}
          <div className="category-showcase">
            <div className="category-grid">
              {categories.map(cat => {
                const firstPhoto = getFirstPhotoInCategory(cat.id);
                const count = getCategoryCount(cat.id);
                const isActive = activeCategory === cat.id;
                
                return (
                  <div
                    key={cat.id}
                    className={`category-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{ '--category-color': cat.color } as React.CSSProperties}
                  >
                    <div className="category-preview">
                      {firstPhoto && (
                        <img src={firstPhoto.image} alt={cat.label} />
                      )}
                      <div className="category-overlay"></div>
                      <div className="category-icon">{cat.icon}</div>
                    </div>
                    <div className="category-info">
                      <h3>{cat.label}</h3>
                      <div className="category-count">
                        <span className="count-number">{count}</span>
                        <span className="count-text">photo{count !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    {isActive && <div className="active-indicator"></div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instagram Feed Style */}
          {layoutStyle === 'masonry' && (
            <div className="instagram-feed">
              {filteredPhotos.map((photo, index) => (
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
              {filteredPhotos.map((photo) => (
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
              {filteredPhotos.map((photo, index) => (
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
            {filteredPhotos.map((photo, index) => (
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

      {/* MAP-BASED GALLERY */}
      <section className="map-gallery-section">
        <div className="gallery-container">
          <h2>🇮🇳 Explore India</h2>
          <p className="map-subtitle">Click on a location to discover photos from across India</p>
          
          <div className="map-gallery-wrapper">
            {/* Interactive Map */}
            <div className="map-container">
              <MapContainer center={[23.1815, 79.9864]} zoom={5} scrollWheelZoom={true} className="leaflet-map-container" style={{ width: '100%', height: '500px' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map(location => {
                  const firstPhoto = getPhotosForLocation(location.id)[0];
                  const customIcon = L.divIcon({
                    html: `
                      <div class="map-marker">
                        ${firstPhoto ? `<img src="${firstPhoto.image}" alt="${location.name}" class="marker-photo" />` : ''}
                        <span class="marker-emoji">${location.emoji}</span>
                      </div>
                    `,
                    className: 'custom-marker-icon',
                    iconSize: [60, 60],
                    iconAnchor: [30, 30],
                    popupAnchor: [0, -30]
                  });

                  return (
                    <Marker
                      key={location.id}
                      position={[location.lat, location.lng]}
                      icon={customIcon}
                      eventHandlers={{
                        click: () => setSelectedLocation(location.id)
                      }}
                    >
                      <Popup>
                        <div style={{ textAlign: 'center' }}>
                          <h4 style={{ margin: '0 0 0.5rem 0' }}>{location.name}</h4>
                          <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>{location.description}</p>
                          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', fontWeight: '600', color: '#667eea' }}>
                            {getPhotosForLocation(location.id).length} photos
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>

            {/* Location Details & Photos */}
            <div className="location-sidebar">
              {selectedLocation ? (
                <div className="location-detail">
                  {locations.find(l => l.id === selectedLocation) && (
                    <>
                      <button 
                        className="close-btn"
                        onClick={() => setSelectedLocation(null)}
                      >
                        ✕
                      </button>
                      <div className="location-header">
                        <span className="location-emoji">
                          {locations.find(l => l.id === selectedLocation)?.emoji}
                        </span>
                        <div>
                          <h3>{locations.find(l => l.id === selectedLocation)?.name}</h3>
                          <p className="location-desc">
                            {locations.find(l => l.id === selectedLocation)?.description}
                          </p>
                        </div>
                      </div>

                      <div className="location-photos">
                        {getPhotosForLocation(selectedLocation).map(photo => (
                          <div key={photo.id} className="location-photo">
                            <img src={photo.image} alt={photo.caption} />
                            <p>{photo.caption}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="location-placeholder">
                  <p>🌍 Select a location to explore photos</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Location Cards */}
          <div className="quick-locations">
            {locations.map(location => (
              <div
                key={location.id}
                className={`quick-location-card ${selectedLocation === location.id ? 'active' : ''}`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <span className="quick-emoji">{location.emoji}</span>
                <h4>{location.name.split(',')[0]}</h4>
                <p>{getPhotosForLocation(location.id).length} photos</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Personal;
