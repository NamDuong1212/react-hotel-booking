import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/featured-hotels')
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

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
                                    <img src={hotel.imageUrl} alt={hotel.name} />
                                    <div className="content">
                                        <h3>{hotel.name}</h3>
                                        <p>{hotel.description}</p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Hell no man...</p>
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
