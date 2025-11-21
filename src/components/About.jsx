import '../styles/About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Anderson",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "With over 15 years of culinary experience, Michael brings innovation and passion to every dish."
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Head Pastry Chef",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Sarah's artistic approach to desserts has earned her recognition in culinary competitions worldwide."
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Sommelier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "David's expertise in wine pairing enhances the dining experience with perfect complementing flavors."
    }
  ];

  const awards = [
    {
      id: 1,
      year: "2023",
      title: "Best Fine Dining Restaurant",
      organization: "City Food Awards"
    },
    {
      id: 2,
      year: "2022",
      title: "Chef's Choice Award",
      organization: "Culinary Excellence Foundation"
    },
    {
      id: 3,
      year: "2021-2023",
      title: "Wine Spectator Award",
      organization: "Wine Spectator Magazine"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>Discover the passion and dedication behind Syntel's culinary excellence</p>
        </div>
      </section>

      <div className="container">
        {/* Main About Content */}
        <section className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Syntel Restaurant Interior" 
            />
          </div>
          <div className="about-text">
            <h2>Crafting Memorable Experiences Since 2020</h2>
            <p>
              Syntel was born from a vision to create more than just a restaurant - 
              a culinary destination where every detail matters. Our founder, inspired by 
              global culinary traditions, set out to establish a space where innovation 
              meets tradition.
            </p>
            <p>
              Today, we continue to push boundaries while staying true to our core values 
              of quality, sustainability, and exceptional service. Each dish tells a story 
              of careful sourcing, technical precision, and artistic presentation.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">🌱</div>
                <h3>Sustainable Sourcing</h3>
                <p>Partnering with local farmers and ethical suppliers</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">👨‍🍳</div>
                <h3>Expert Chefs</h3>
                <p>Talented culinary team with international experience</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🌟</div>
                <h3>Award Winning</h3>
                <p>Recognized for excellence in dining and service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The passionate individuals behind your exceptional dining experience</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <div className="team-member-role">{member.role}</div>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="awards-section">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">Celebrating excellence in culinary arts and hospitality</p>
          <div className="awards-grid">
            {awards.map(award => (
              <div key={award.id} className="award-card">
                <div className="award-year">{award.year}</div>
                <h3>{award.title}</h3>
                <p>{award.organization}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;