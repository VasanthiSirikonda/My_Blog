import React, { useState } from 'react';
import { FaStar, FaPaperPlane, FaQuoteRight, FaPenNib } from 'react-icons/fa';
import './Reviews.css';

const Reviews: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! You rated this ${rating} stars.`);
  };

  return (
    <div className="reviews-section">
      <div className="container">
        <h2 className="section-title adaptive-title">Your Feedback Matters</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="review-card-container">
              <div className="review-flex-row">
                
                {/* Left Side: Form */}
                <div className="review-form-side">
                  <div className="form-content-inner">
                    <h3 className="adaptive-text">Submit a Review</h3>
                    <div className="rating-box">
                      <p className="adaptive-text-muted">Rate your experience:</p>
                      <div className="stars-container">
                        {[...Array(5)].map((_, i) => {
                          const val = i + 1;
                          return (
                            <FaStar
                              key={i}
                              className={`star-icon ${val <= (hover || rating) ? 'active' : ''}`}
                              onMouseEnter={() => setHover(val)}
                              onMouseLeave={() => setHover(0)}
                              onClick={() => setRating(val)}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <form className="actual-form" onSubmit={handleSubmit}>
                      <div className="input-group-row">
                        <div className="floating-input">
                          <input type="text" id="name" placeholder=" " required />
                          <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="floating-input">
                          <input type="text" id="role" placeholder=" " required />
                          <label htmlFor="role">Company / Role</label>
                        </div>
                      </div>
                      
                      <div className="floating-input full-width">
                        <textarea id="msg" placeholder=" " required></textarea>
                        <label htmlFor="msg">Write your review...</label>
                      </div>

                      <button type="submit" className="submit-review-btn">
                        Submit Review <FaPaperPlane />
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right Side: Info Panel */}
                <div className="review-info-side">
                  <FaPenNib className="watermark-icon" />
                  <div className="info-text-content">
                    <h3 className="info-headline">Share Your Story</h3>
                    <p className="info-subtext">
                      Your feedback helps me improve and helps others understand the value of my work. Thank you for being part of my journey!
                    </p>
                    <div className="testimonial-quote">
                      <FaQuoteRight className="q-icon" />
                      <p>"Client satisfaction is the greatest reward for any developer."</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;