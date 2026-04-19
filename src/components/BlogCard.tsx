import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/blogPosts';
import './BlogCard.css';

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      {post.image && (
        <div className="blog-card-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="category-badge">{post.category}</span>
          <span className="read-time">{post.readTime}</span>
        </div>
        <h2 className="blog-card-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <div className="author-info">
            <span className="author-icon">👤</span>
            <span className="author-name">{post.author}</span>
          </div>
          <time className="post-date">{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <Link to={`/post/${post.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
