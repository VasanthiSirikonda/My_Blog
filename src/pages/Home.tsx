import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import './Home.css';

function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      {/* --- NEW HERO SECTION --- */}
      <section id="home" className="hero-section">
        <div className="grid-overlay"></div>
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        
        <div className="container">
          <div className="hero-content-wrapper">
            <p className="welcome-text">Welcome to my digital world</p>
            <h1 className="name-headline">
              Hi, I'm <span className="shimmer-name">Vasanthi Sirikonda</span>
            </h1>
            
            <div className="role-wrapper">
               <span className="gradient-text-3d">Frontend Engineer • React Specialist</span>
            </div>

            <div className="btn-container">
              <Link to="/about" className="pushable-btn about-btn">
                <span className="btn-shadow"></span>
                <span className="btn-edge"></span>
                <span className="btn-front">Learn More About Me</span>
              </Link>
              
              <a href="/Vasanthi_Sirikonda_.pdf" download className="pushable-btn resume-btn">
                <span className="btn-shadow"></span>
                <span className="btn-edge"></span>
                <span className="btn-front">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                  </svg>
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-posts">
        <div className="section-container">
          <h2>Latest Articles</h2>
          <div className="blog-grid">
            {latestPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/blog" className="view-all-button">View All Articles</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-container">
          <h2>My Expertise</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">⚛️</span>
              <h3>React & TypeScript</h3>
              <p>3 years of production experience building scalable component architectures.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Performance</h3>
              <p>Reduced page load time by 30% through advanced optimization.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤖</span>
              <h3>Automation</h3>
              <p>Designed LLM-powered test frameworks for enterprise teams.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;