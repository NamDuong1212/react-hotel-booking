import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DestinationList = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/destinations')
            .then(response => {
                setDestinations(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the destinations!', error);
            });
    }, []);

    return (
        <div>
            <h1>Destinations</h1>
            <Link to="/add">Add New Destination</Link>
            <ul>
                {destinations.map(destination => (
                    <li key={destination._id}>
                        <Link to={`/destination/${destination._id}`}>{destination.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DestinationList;
