import { useState } from 'react';
import { blogPosts, getAllCategories } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="blog-page">
      <section className="blog-header">
        <h1>All Articles</h1>
        <p>Explore our comprehensive collection of articles on web development and technology</p>
      </section>

      <div className="blog-container">
        <aside className="blog-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <button
              className={`category-button ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Posts ({blogPosts.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} ({blogPosts.filter(p => p.category === category).length})
              </button>
            ))}
          </div>
        </aside>

        <main className="blog-main">
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>No articles found in this category.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Blog;
