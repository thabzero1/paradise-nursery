import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsByCategory = [
  {
    category: 'Air Purifying Plants',
    products: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 22.99,
        description: 'A hardy indoor plant that helps purify the air and thrives with minimal care.',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32f8de5?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 28.5,
        description: 'Elegant white blooms paired with glossy leaves make this a favorite for calm interiors.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    category: 'Succulents',
    products: [
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        price: 18.75,
        description: 'A compact succulent known for its soothing gel and easy-care nature.',
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 19.99,
        description: 'A resilient succulent with thick green leaves that symbolize prosperity.',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    category: 'Tropical Favorites',
    products: [
      {
        id: 'monstera',
        name: 'Monstera Deliciosa',
        price: 34.95,
        description: 'Large split leaves bring a bold, lush statement to any living space.',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'pothos',
        name: 'Golden Pothos',
        price: 16.49,
        description: 'A fast-growing trailing plant that is forgiving and ideal for beginners.',
        image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((current) => ({
      ...current,
      [plant.id]: true,
    }));
  };

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.eyebrow}>Indoor Plant Collection</p>
        <h1 style={styles.heading}>Find the right plant for every room.</h1>
        <p style={styles.subheading}>
          Browse our curated selection of low-maintenance, vibrant houseplants and add your favorites to the cart.
        </p>
      </section>

      {plantsByCategory.map((group) => (
        <section key={group.category} style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>{group.category}</h2>
          </div>

          <div style={styles.grid}>
            {group.products.map((plant) => (
              <article key={plant.id} style={styles.card}>
                <img src={plant.image} alt={plant.name} style={styles.image} />
                <div style={styles.cardBody}>
                  <div style={styles.cardTop}>
                    <h3 style={styles.cardTitle}>{plant.name}</h3>
                    <span style={styles.price}>${plant.price.toFixed(2)}</span>
                  </div>
                  <p style={styles.description}>{plant.description}</p>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={Boolean(addedToCart[plant.id])}
                    style={{
                      ...styles.button,
                      ...(addedToCart[plant.id] ? styles.buttonDisabled : {}),
                    }}
                  >
                    {addedToCart[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    padding: '32px 24px 64px',
    background: 'linear-gradient(180deg, #f4f0e8 0%, #e3efe4 100%)',
  },
  hero: {
    maxWidth: '760px',
    margin: '0 auto 40px',
    textAlign: 'center',
  },
  eyebrow: {
    margin: '0 0 12px',
    color: '#5a7a62',
    fontSize: '0.9rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  heading: {
    margin: '0 0 12px',
    color: '#163020',
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    lineHeight: 1.1,
  },
  subheading: {
    margin: 0,
    color: '#365143',
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  section: {
    maxWidth: '1120px',
    margin: '0 auto 32px',
  },
  sectionHeader: {
    marginBottom: '16px',
  },
  sectionTitle: {
    margin: 0,
    color: '#1f3b2b',
    fontSize: '1.6rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  card: {
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 18px 40px rgba(22, 48, 32, 0.12)',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
  },
  cardBody: {
    padding: '18px',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    alignItems: 'flex-start',
  },
  cardTitle: {
    margin: 0,
    color: '#1f3b2b',
    fontSize: '1.1rem',
  },
  price: {
    color: '#2e7d32',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
  description: {
    margin: '12px 0 18px',
    color: '#53665b',
    fontSize: '0.95rem',
    lineHeight: 1.5,
  },
  button: {
    width: '100%',
    padding: '12px 16px',
    border: 'none',
    borderRadius: '999px',
    backgroundColor: '#2e7d32',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  buttonDisabled: {
    backgroundColor: '#8ea792',
    cursor: 'not-allowed',
  },
};

export default ProductList;
