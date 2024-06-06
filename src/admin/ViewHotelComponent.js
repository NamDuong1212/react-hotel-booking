import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import HotelService from './HotelService';
import "./beauty.css";
import StarRating from './StarRating';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ViewHotelComponent() {
    const { id } = useParams();

    const [hotel, setHotel] = useState({});
    const [beds, setBeds] = useState(1);
    const [people, setPeople] = useState(1);
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        HotelService.getHotelById(id).then(res => {
            setHotel(res.data);
        });
    }, [id]);

    useEffect(() => {
        calculateTotalPrice();
    }, [beds, checkinDate, checkoutDate, hotel.price]);

    const calculateTotalPrice = () => {
        const bedPrice = 20;
        const basePrice = hotel.price;
        const additionalBedPrice = (beds - 1) * bedPrice;
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        const timeDiff = checkout.getTime() - checkin.getTime();
        const daysDiff = timeDiff / (1000 * 3600 * 24) + 1;

        const priceBeforeDays = basePrice / 1;

        if (!isNaN(daysDiff) && daysDiff > 0) {
            setTotalPrice((priceBeforeDays + additionalBedPrice) * daysDiff);
        } else {
            setTotalPrice(priceBeforeDays + additionalBedPrice);
        }
    };

    const handleBookNow = () => {

        alert('Booking confirmed!');
    };

    const handleCheckinDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        if (selectedDate > new Date(checkoutDate)) {
            setCheckoutDate('');
        }
        setCheckinDate(e.target.value);
    };

    const handleCheckoutDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        if (selectedDate < new Date(checkinDate)) {
            alert("Checkout date cannot be before checkin date!");
            setCheckoutDate(checkinDate);
        } else {
            setCheckoutDate(e.target.value);
        }
    };

    return (
        <div className="container1">
            <div className="left-column1">
                <Carousel>
                    <div>
                        <img className="carousel-image" src={`data:image/jpeg;base64,${hotel.image}`} alt = "Hotel"/>
                        <p className="legend">Page 1</p>
                    </div>
                    <div>
                        <img className="carousel-image" src={`data:image/jpeg;base64,${hotel.image2}`} />
                        <p className="legend">Page 2</p>
                    </div>
                </Carousel>
                
                <div className="hotel-name1">{hotel.name}</div>
                <div className="description1">{hotel.description}</div>
            </div>
            <div className="right-column1">
                <div className="row1">
                    <label>Star: </label>
                    <StarRating rating={hotel.star} />
                </div>
                <div className="row1">
                    <label>Price/night: </label>
                    <div>{hotel.price} $</div>
                </div>
                <div className="row1">
                    <label>Beds: </label>
                    <input
                        type="number"
                        value={beds}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > 3) {
                                setBeds(3);
                            } else {
                                setBeds(value);
                            }
                        }}
                        min="1"
                        max="3"
                        className="form-control1"
                    />
                </div>
                <div className="row1">
                    <label>People: </label>
                    <input
                        type="number"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        min="1"
                        className="form-control1"
                    />
                </div>
                <div className="row1">
                    <label>Check-in: </label>
                    <input
                        type="date"
                        value={checkinDate}
                        onChange={handleCheckinDateChange}
                        className="form-control1"
                    />
                </div>
                <div className="row1">
                    <label>Check-out: </label>
                    <input
                        type="date"
                        value={checkoutDate}
                        onChange={handleCheckoutDateChange}
                        className="form-control1"
                    />
                </div>
                <div className="row1">
                    <label>Total Price: </label>
                    <div>{totalPrice} $</div>
                </div>
                <button onClick={handleBookNow} className="btn1 btn-primary1">
                    Book Now
                </button>
                <Link to="/" className="go-back-link">
                    Go Back
                </Link>
            </div>
        </div>
    );
}

export default ViewHotelComponent;
