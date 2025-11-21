import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Syntel</h1>
            <p>Experience culinary excellence where innovative flavors meet timeless traditions. Your journey to exceptional dining begins here.</p>
            <a href="/menu" className="btn">Discover Our Menu</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Syntel</h2>
          <p className="section-subtitle">Experience the difference that makes us the preferred choice for discerning diners</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Exquisite Cuisine</h3>
              <p>Our master chefs craft each dish with precision, using only the finest locally-sourced ingredients and innovative techniques.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Fresh Ingredients</h3>
              <p>We partner with local farmers and suppliers to ensure every ingredient meets our rigorous standards for quality and freshness.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Premium Service</h3>
              <p>Our attentive staff provides impeccable service, ensuring your dining experience is nothing short of extraordinary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2>Our Culinary Story</h2>
              <p>Founded with a passion for exceptional dining, Syntel has been redefining the culinary landscape since 2020. Our journey is one of innovation, quality, and unforgettable experiences.</p>
              <p>Every dish tells a story of dedication, from our carefully curated menu to the artistic presentation that delights both the eyes and palate.</p>
              <a href="/about" className="btn">Learn Our Story</a>
            </div>
            <div className="about-preview-image">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Syntel Culinary Excellence" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;