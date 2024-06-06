import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './payment.css';

function PaymentComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        hotelId,
        hotelName,
        beds,
        people,
        checkinDate,
        checkoutDate,
        totalPrice
    } = location.state || {};

    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [confirmPayment, setConfirmPayment] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setConfirmPayment(true);
    };

    const confirmAndRedirect = () => {
        // Simulating payment processing
        setTimeout(() => {
            // Payment successful
            alert('Payment successful!');
            // Redirect to bill page
            navigate('/');
        }, 2000); // Simulate a 2-second delay for processing
    };

    return (
        <div className="payment-container">
            <h1>Payment Page</h1>
            <div className="payment-details">
                <p><strong>Hotel:</strong> {hotelName}</p>
                <p><strong>Beds:</strong> {beds}</p>
                <p><strong>People:</strong> {people}</p>
                <p><strong>Check-in:</strong> {checkinDate}</p>
                <p><strong>Check-out:</strong> {checkoutDate}</p>
                <p><strong>Total Price:</strong> {totalPrice} $</p>
            </div>
            
            {!confirmPayment ? (
                <form onSubmit={handlePayment} className="payment-form">
                    <div className="form-group">
                        <label>Card Number:</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiration Date:</label>
                        <input
                            type="text"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            placeholder="MM/YY"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>CVV:</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Cardholder Name:</label>
                        <input
                            type="text"
                            value={cardholderName}
                            onChange={(e) => setCardholderName(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Payment</button>
                </form>
            ) : (
                <div className="confirm-payment">
                    <p>Are you sure you want to proceed with the payment?</p>
                    <button className="btn btn-success" onClick={confirmAndRedirect}>Yes</button>
                    <button className="btn btn-fail" onClick={() => setConfirmPayment(false)}>No</button>
                </div>
            )}
        </div>
    );
}

export default PaymentComponent;
