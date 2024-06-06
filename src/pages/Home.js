import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css';
import StarRating from '../admin/StarRating'
const Home = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  useEffect(() => {
    axios.get('http://localhost:8080/api/hotel')
      .then(res => {
        setHotels(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleBookNow = (id) => {
    navigate(`/view-hotel/${id}`); // Navigate to the view page of the selected hotel
  };

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
            {hotels.length > 0 ? (
              hotels.map(hotel => (
                <div className="hotel-card" key={hotel.id}>
                  <img src={`data:image/jpeg;base64,${hotel.image}`} alt={hotel.name} />
                  <div className="content">
                    <h3>{hotel.name}</h3>
                    <h3>
                        <StarRating rating={hotel.star} />
                    </h3>
                    <p>{hotel.address}</p>
                    <button onClick={() => handleBookNow(hotel.id)}>Book Now</button> {/* Add click handler */}
                  </div>
                </div>
              ))
            ) : (
              <p>No hotels available</p>
            )}
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
