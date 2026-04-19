import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostById, blogPosts } from '../data/blogPosts';
import './Post.css';

function Post() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getPostById(parseInt(id)) : null;

  if (!post) {
    return (
      <div className="post-error">
        <h1>Post Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <article className="post">
      <div className="post-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <header className="post-header">
          <div className="post-meta">
            <span className="category-badge">{post.category}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-info">
            <div className="author-info">
              <span className="author-avatar">👤</span>
              <div>
                <div className="author-name">{post.author}</div>
                <time className="post-date">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        </header>

        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index}>{paragraph.substring(3)}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index}>{paragraph.substring(4)}</h3>;
            }
            if (paragraph.startsWith('```')) {
              const lines = paragraph.split('\n').slice(1, -1);
              return (
                <pre key={index} className="code-block">
                  <code>{lines.join('\n')}</code>
                </pre>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        <footer className="post-footer">
          <div className="post-navigation">
            {prevPost && (
              <Link to={`/post/${prevPost.id}`} className="nav-post prev-post">
                <span className="nav-arrow">←</span>
                <span className="nav-title">{prevPost.title}</span>
              </Link>
            )}
            {nextPost && (
              <Link to={`/post/${nextPost.id}`} className="nav-post next-post">
                <span className="nav-title">{nextPost.title}</span>
                <span className="nav-arrow">→</span>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}

export default Post;
