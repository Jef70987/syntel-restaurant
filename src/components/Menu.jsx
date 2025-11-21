import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: "Truffle Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms, white truffle oil, and aged parmesan",
      price: "$24",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "mains",
      tags: ["vegetarian"],
      featured: true
    },
    {
      id: 2,
      name: "Grilled Atlantic Salmon",
      description: "Fresh salmon with lemon butter sauce, seasonal vegetables, and herb potatoes",
      price: "$28",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "mains",
      tags: ["gluten-free"]
    },
    {
      id: 3,
      name: "Prime Ribeye Steak",
      description: "12oz prime ribeye with red wine reduction and roasted garlic mashed potatoes",
      price: "$36",
      image: "https://images.unsplash.com/photo-1607116667981-ff4b72a5d5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      category: "mains",
      tags: []
    },
    {
      id: 4,
      name: "Mediterranean Salad",
      description: "Fresh greens, feta cheese, kalamata olives, tomatoes, and house vinaigrette",
      price: "$16",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "starters",
      tags: ["vegetarian", "gluten-free"]
    },
    {
      id: 5,
      name: "Lobster Linguine",
      description: "Fresh lobster meat with linguine in a creamy tomato basil sauce",
      price: "$32",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "mains",
      tags: []
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: "$12",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "desserts",
      tags: ["vegetarian"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu">
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Discover our carefully crafted dishes made with the finest ingredients</p>
        </div>

        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              {item.featured && <div className="menu-item-badge">Chef's Special</div>}
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="menu-item-price">{item.price}</div>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className={`menu-tag ${tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;