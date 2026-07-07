import bg from "../assets/bg.png";
import "./css/Header.css";

const Header = () => {
  return (
    <section className="hero-section mb-5" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-content">
        <h1>Discover Your <br />Next <span>Great Read</span></h1>
        <p>Explore thousands of books across genres.
          <br />
          Find your favorites and get them delivered to your doorstep.
        </p>

        <div className="hero-btns">
          <button className="shop-btn">Shop Now →</button>
          <button className="browse-btn">Browse Categories</button>
        </div>
      </div>
    </section>
  );
};

export default Header;