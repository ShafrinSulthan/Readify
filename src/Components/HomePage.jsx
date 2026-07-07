import React from 'react'

const featuredBooks = [
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    blurb: 'A moving journey through the lives we could have lived.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    blurb: 'Small changes that create remarkable results.',
  },
  {
    title: 'The House of Eve',
    author: 'Sadeqa Johnson',
    blurb: 'A gripping novel about ambition, love, and identity.',
  },
]

const highlights = [
  'Curated picks for every mood',
  'Fast checkout and gift-ready wrapping',
  'Member discounts every week',
]

const HomePage = ({ onNavigate }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">New season, new stories</p>
        <h2>Find your next favorite read at Readify.</h2>
        <p className="hero-text">
          Discover bestselling novels, inspiring nonfiction, and cozy reads curated for every kind of reader.
        </p>

        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate('signup')}>
            Join Readify
          </button>
          <button className="secondary-btn" onClick={() => onNavigate('login')}>
            I already have an account
          </button>
        </div>

        <ul className="highlights-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="featured-panel">
        <h3>Featured this week</h3>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <article className="book-card" key={book.title}>
              <h4>{book.title}</h4>
              <p className="book-author">{book.author}</p>
              <p>{book.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage