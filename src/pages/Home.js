import React from 'react';
import '../App.css';


const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Find Your Next Getaway</h1>
          <p>Discover the perfect hotel for your next adventure.</p>
          <form>
            <input type="text" placeholder="Enter city or hotel name" />
            <input type="date" placeholder="Check-in" />
            <input type="date" placeholder="Check-out" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="featured-hotels">
        <div className="container">
          <h2>Featured Hotels</h2>
          <div className="hotel-list">
            <div className="hotel-card">
              <img src="./images/hotel-images/hotel2.jpg" alt="Hotel 1" />
              <div className="content">
                <h3>Hotel 1</h3>
                <p>Not An Actual Hotel</p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="hotel-card">
              <img src="./images/hotel-images/hotel2.jpg" alt="Hotel 2" />
              <div className="content">
                <h3>Hotel 2</h3>
                <p>Not An Actual Hotel</p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="hotel-card">
              <img src="./images/hotel-images/hotel3.jpg" alt="Hotel 3" />
              <div className="content">
                <h3>Hotel 3</h3>
                <p>Not An Actual Hotel</p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="hotel-card">
              <img src="./images/hotel-images/hotel4.jpg" alt="Hotel 4" />
              <div className="content">
                <h3>Hotel 4</h3>
                <p>Not An Actual Hotel</p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="hotel-card">
              <img src="./images/hotel-images/hotel3.jpg" alt="Hotel 3" />
              <div className="content">
                <h3>Hotel 3</h3>
                <p>Not An Actual Hotel</p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Hotel Booking Website</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;