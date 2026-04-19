import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import './Home.css';

function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Vasanthi Sirikonda</h1>
          <p>Frontend Engineer • React Specialist • Building high-performance e-commerce platforms</p>
          <Link to="/about" className="cta-button">Learn More About Me</Link>
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
              <p>3 years of production experience building scalable component architectures for enterprise platforms.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Performance Optimization</h3>
              <p>Reduced page load time by 30% through React optimization and asset delivery improvements.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤖</span>
              <h3>Test Automation</h3>
              <p>Designed LLM-powered test framework eliminating 40% of manual QA effort for enterprise teams.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
